import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services, getServiceBySlug, getVisibleServices } from "@/data/services"
import { projects } from "@/data/projects"
import { galleryItems } from "@/data/gallery"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getVisibleServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service || service.hidden) return {}
  return {
    title: service.title,
    description: service.summary,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service || service.hidden) notFound()

  const Icon = service.icon
  const otherServices = getVisibleServices().filter((s) => s.slug !== slug)

  // Map service images to gallery manifest items for alt, caption, and dimensions
  const serviceGalleryItems = (service.images || [])
    .map((imgSrc) => galleryItems.find((g) => g.src === imgSrc))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  // Find related projects
  const relatedProjects = (service.relatedProjectSlugs || [])
    .map((pSlug) => projects.find((p) => p.slug === pSlug))
    .filter((proj): proj is NonNullable<typeof proj> => Boolean(proj))

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        {/* Service header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-lg bg-accent/10">
              <Icon className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">{service.summary}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              {service.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Deliverables */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Deliverables</h2>
              <ul className="space-y-3">
                {service.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Photo Gallery */}
            {serviceGalleryItems.length > 0 && (
              <div className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Service Field Photography</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceGalleryItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-lg bg-muted/40 border border-border flex flex-col"
                    >
                      <div className="relative aspect-[4/3] w-full bg-muted">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={item.width}
                          height={item.height}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-3 bg-card border-t border-border">
                        <p className="text-xs text-muted-foreground leading-snug">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">Discuss a Project</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our engineering team to discuss your scope and technical specifications.
                </p>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Other visible services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                Other Services
              </h3>
              <div className="space-y-2">
                {otherServices.map((s) => {
                  const SIcon = s.icon
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <SIcon className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {s.title}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Strip */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Related Projects</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Selected projects completed by Merab Engineering involving {service.title.toLowerCase()}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`}>
                  <Card className="overflow-hidden border-border hover:shadow-lg hover:border-primary/40 transition-all group h-full flex flex-col">
                    <div className="relative h-44 w-full bg-muted overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">
                          {proj.sector}
                        </p>
                        <h3 className="text-base font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-medium mb-2">Client: {proj.client}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{proj.summary}</p>
                      </div>
                      <span className="text-xs font-semibold text-accent mt-3 inline-flex items-center">
                        View Project &rarr;
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
