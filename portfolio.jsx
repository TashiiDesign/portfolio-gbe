"use client"

import { PortfolioHeader } from "./components/portfolio-header"
import { ProjectSection } from "./components/project-section"

export default function Portfolio() {
  // Sample project data - easily editable
  const projects = [
    {
      title: "GB METECC Website & Customer Portal",
      tags: ["UX Research", "Stakeholder Collaboration", "Customer Portal"],
      overview:
        "Led the redesign of the GB METECC website and development of a new customer portal to improve user experience and streamline business operations. The project aimed to modernize the digital presence while addressing key user pain points identified through research.",
      methods: [
        "Conducted user interviews with 15+ existing customers",
        "Stakeholder workshops with internal teams",
        "Competitive analysis of industry portals",
        "User journey mapping and persona development",
        "Wireframing and prototyping in Figma",
        "Usability testing with target users",
      ],
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "GB METECC website wireframes",
          caption: "Initial wireframes showing the new information architecture and user flow",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Customer portal mockups",
          caption: "High-fidelity mockups of the customer portal dashboard",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "User interview notes",
          caption: "Annotated notes from customer interviews highlighting key pain points",
        },
      ],
      reflections:
        "This project taught me the importance of balancing business requirements with user needs. The stakeholder workshops were particularly valuable in aligning different departments around a common vision. I learned to facilitate discussions between technical and non-technical team members, and how to translate user research insights into actionable design decisions.",
    },
    {
      title: "Internal Booking System UX Improvements",
      tags: ["UX Testing", "Workflow Optimization", "Internal Tools"],
      overview:
        "Redesigned the internal booking system to reduce processing time and improve staff efficiency. The existing system had multiple usability issues that were causing delays and frustration among team members.",
      methods: [
        "Conducted task analysis with current users",
        "Identified pain points through observation sessions",
        "Created user flow diagrams for current vs. proposed system",
        "Developed low and high-fidelity prototypes",
        "A/B tested key interface elements",
        "Implemented iterative improvements based on feedback",
      ],
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Current vs proposed user flows",
          caption: "Comparison showing the streamlined booking process",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Usability testing session",
          caption: "Notes from usability testing sessions with internal staff",
        },
      ],
      reflections:
        "Working on internal tools presented unique challenges - users were more direct with feedback but also had established workflows that were hard to change. I learned the importance of change management and how to introduce new interfaces gradually to ensure adoption.",
    },
    {
      title: "SharePoint Workflow Optimization",
      tags: ["Process Improvement", "Documentation", "Workflow Design"],
      overview:
        "Analyzed and improved SharePoint workflows to enhance team collaboration and document management. The project focused on reducing redundancy and improving information findability across departments.",
      methods: [
        "Mapped existing document workflows",
        "Interviewed team leads from different departments",
        "Created information architecture diagrams",
        "Designed new folder structures and naming conventions",
        "Developed user guides and training materials",
        "Monitored adoption and gathered feedback",
      ],
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Workflow diagram",
          caption: "New document workflow showing improved collaboration points",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "SharePoint structure",
          caption: "Redesigned information architecture for better findability",
        },
      ],
      reflections:
        "This project highlighted the importance of understanding existing organizational culture before implementing changes. I learned that technical solutions must be paired with proper change management and training to be successful.",
    },
    {
      title: "Strategic UX Workshops",
      tags: ["Workshop Facilitation", "Strategic Planning", "Team Collaboration"],
      overview:
        "Facilitated strategic workshops to align teams on UX priorities and establish design principles for future projects. These sessions helped create a shared understanding of user-centered design across the organization.",
      methods: [
        "Designed workshop activities and exercises",
        "Facilitated cross-departmental sessions",
        "Created collaborative Miro boards for ideation",
        "Documented outcomes and action items",
        "Followed up on implementation progress",
        "Gathered feedback on workshop effectiveness",
      ],
      images: [
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Miro board from workshop",
          caption: "Collaborative Miro board showing prioritized UX initiatives",
        },
        {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Workshop participants",
          caption: "Team members collaborating during a design thinking session",
        },
      ],
      reflections:
        "Facilitating workshops taught me valuable skills in group dynamics and how to guide diverse teams toward consensus. I learned to balance different perspectives while keeping discussions focused and productive. The experience improved my confidence in presenting ideas and managing group discussions.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PortfolioHeader />

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
            <p className="text-gray-600 leading-relaxed">
              A collection of key projects completed during my placement year, documenting the design process,
              methodologies used, and insights gained from each experience.
            </p>
          </div>

          {projects.map((project, index) => (
            <ProjectSection
              key={index}
              title={project.title}
              tags={project.tags}
              overview={project.overview}
              methods={project.methods}
              images={project.images}
              reflections={project.reflections}
            />
          ))}
        </div>
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Your Name - Digital Designer Placement Portfolio</p>
            <p className="text-sm mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
