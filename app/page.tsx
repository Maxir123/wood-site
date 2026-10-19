import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { getVisibleServices } from "@/data/services"
import { projects } from "@/data/projects"
import { company } from "@/data/company"
import { galleryItems } from "@/data/gallery"
import { FieldGallery } from "@/components/field-gallery"

const featuredServices = getVisibleServices().slice(0, 4)
const featuredProjects = projects.slice(0, 4)

// 10 authentic field photos representing each core sector
const fieldGalleryItems = galleryItems
  .filter((item) => item.category !== "documents")
  .slice(0, 10)

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[620px] md:min-h-[700px] flex items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/insulation/greenville-pipe-rack-run.png"
            alt="Process pipe rack insulation installation"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Cool steel-slate industrial overlay — distinct color that provides contrast for red & blue logo text */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-200/95 via-[#D6E0EC]/90 to-slate-200/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo1.png"
              alt="Merab Engineering Services Limited"
              width={340}
              height={85}
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 text-balance tracking-tight leading-tight">
            {company.tagline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto text-pretty font-medium">
            {company.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-white hover:bg-accent/90 shadow-md font-semibold px-8 h-12 text-base">
              <Link href="/contact" className="flex items-center justify-center">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-950 shadow-sm font-semibold px-8 h-12 text-base">
              <Link href="/services/fabrication" className="flex items-center justify-center">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="border-y border-border bg-muted/40 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base font-semibold tracking-wide text-foreground/80 uppercase">
            Est. 2001 &middot; RC 429220 &middot; Port Harcourt &middot; Lagos &middot; Abuja
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Full-scope engineering and industrial services across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <Card className="border-border hover:shadow-lg hover:border-primary/40 transition-all h-full">
                    <CardContent className="p-6">
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services/fabrication">
                All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Selected Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A cross-section of our work in oil & gas, civil infrastructure, and public sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Card className="overflow-hidden border-border hover:shadow-xl hover:border-primary/40 transition-all flex flex-col group h-full">
                  <div className="relative h-52 w-full bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">{project.sector}</p>
                      <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 font-medium">Client: {project.client}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.summary}</p>
                    </div>
                    <span className="inline-flex items-center text-sm font-medium text-accent mt-4 group-hover:translate-x-1 transition-transform">
                      View Project Details &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Work in the Field (Masonry Gallery + Lightbox) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work in the Field</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Photographic documentation of our site installations, scaffolding structures, process piping, and civil infrastructure.
            </p>
          </div>

          <FieldGallery items={fieldGalleryItems} />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
                Engineering expertise, delivered across Nigeria
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Merab Engineering Services Limited is registered with the Corporate Affairs Commission (C.A.C) of
                Nigeria, RC 429220, with offices in Abuja, Port Harcourt, and Lagos.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We deliver fabrication, mechanical, civil, electrical and instrumentation, insulation, scaffolding, and
                labour supply services to clients in oil and gas, power, and infrastructure sectors across Nigeria.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border group bg-muted">
              <Image
                src="/backg.png"
                alt="Merab Engineering industrial plant operations"
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to discuss your project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Contact our team for a consultation
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
