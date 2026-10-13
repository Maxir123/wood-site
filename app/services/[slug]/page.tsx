import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services, getServiceBySlug } from "@/data/services"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.summary,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = service.icon
  const otherServices = services.filter((s) => s.slug !== slug)

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            {service.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}

            {/* Key Deliverables */}
            <div className="mt-8">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">Discuss a Project</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our team to discuss your requirements.
                </p>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Other services */}
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
      </div>
    </div>
  )
}
