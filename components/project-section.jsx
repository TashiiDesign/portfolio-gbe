import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectCarousel } from "./project-carousel"

export function ProjectSection({ title, overview, methods = [], images = [], reflections, tags = [] }) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{overview}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">Process & Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {methods.map((method, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {images.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Visual Evidence</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectCarousel images={images} />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary">Reflections & Learnings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{reflections}</p>
        </CardContent>
      </Card>
    </section>
  )
}
