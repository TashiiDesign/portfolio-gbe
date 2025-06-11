import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function PortfolioHeader() {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Name</h1>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="secondary" className="text-sm">
              Digital Designer
            </Badge>
            <Badge variant="outline" className="text-sm">
              UX/UI Designer
            </Badge>
          </div>
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently completing a placement year at{" "}
                <span className="font-semibold text-primary">Company Name</span> as a{" "}
                <span className="font-semibold">Digital Designer</span>, focusing on user experience design, customer
                portal development, and strategic workshop facilitation. This portfolio documents key projects,
                processes, and learnings throughout my placement journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </header>
  )
}
