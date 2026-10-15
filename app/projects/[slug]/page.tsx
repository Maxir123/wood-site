import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Building, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects, getProjectBySlug } from "@/data/projects"
import { galleryItems } from "@/data/gallery"
import { ProjectGallery } from "@/components/project-gallery"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  // Find all gallery items corresponding to this project
  const projectGalleryItems = (project.gallery || [])
    .map((imgSrc) => galleryItems.find((g) => g.src === imgSrc))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  const otherProjects = projects.filter((p) => p.slug !== slug)

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <Badge variant="outline" className="text-accent border-accent/40 mb-4 uppercase tracking-wider text-xs">
            {project.sector}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          <Card className="border-border bg-card">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-medium tracking-wide text-muted-foreground">Client</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">{project.client}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-medium tracking-wide text-muted-foreground">Location</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">{project.location}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-medium tracking-wide text-muted-foreground">Scope</p>
                <p className="text-sm font-semibold text-foreground mt-0.5 line-clamp-1">{project.scope}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-20">
          <div className="border-b border-border pb-4 mb-8">
            <h2 className="text-2xl font-bold text-foreground">Project Documentation & Site Photos</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Field photography and verified records on file for {project.title}. Click any image to expand.
            </p>
          </div>

          {projectGalleryItems.length > 0 ? (
            <ProjectGallery items={projectGalleryItems} />
          ) : (
            <p className="text-sm text-muted-foreground">Photos are being documented for this project.</p>
          )}
        </div>

        {/* Other Projects */}
        <div className="border-t border-border pt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Other Verified Projects</h2>
              <p className="text-sm text-muted-foreground">Explore additional works completed across Nigeria</p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/projects">
                All Projects <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`}>
                <Card className="border-border hover:border-primary/40 transition-all hover:shadow-md group h-full flex flex-col">
                  <CardContent className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-accent font-semibold uppercase tracking-wider">{p.sector}</span>
                      <h3 className="text-base font-bold text-card-foreground group-hover:text-primary transition-colors mt-1 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium mb-2">Client: {p.client}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{p.summary}</p>
                    </div>
                    <span className="text-xs font-semibold text-accent mt-4 inline-flex items-center">
                      View Project &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
