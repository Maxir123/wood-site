import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react"
import { company } from "@/data/company"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Merab Engineering Services Limited",
  description: "Learn about Merab Engineering Services Limited, our industrial capabilities, safety commitment, and office locations across Nigeria.",
}

const keyCapabilities = [
  "Structural steel & industrial fabrication",
  "Heat & cold pipe and vessel insulation",
  "Certified scaffolding & elevated access",
  "Civil infrastructure & building works",
  "Electrical & instrumentation engineering",
  "Safety-certified skilled labour supply",
]

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section: Images on Left, Text on Right */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Images Column (Left, 5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-border group bg-muted">
                <Image
                  src="/images/scaffolding/scaffold-structure-01.png"
                  alt="Scaffolding framework inside structural steel installation"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm border-0">
                    Scaffolding & Structural Access
                  </Badge>
                </div>
              </div>

              {/* Secondary photo row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden shadow-md border border-border group bg-muted">
                  <Image
                    src="/images/labour/labour-ppe-workers-at-height.png"
                    alt="Skilled field personnel in PPE working at height"
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-semibold text-white">Certified Field Crew</span>
                  </div>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden shadow-md border border-border group bg-muted">
                  <Image
                    src="/images/insulation/greenville-pipe-rack-run.png"
                    alt="Insulated process pipe rack installation"
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-semibold text-white">Process Pipe Insulation</span>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="p-4 rounded-xl border border-accent/30 bg-accent/5 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <p className="text-xs text-foreground font-medium">
                  CAC RC 429220 &middot; Registered Nigerian Industrial & Engineering Contractor
                </p>
              </div>
            </div>

            {/* Text Column (Right, 7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <Badge variant="outline" className="text-accent border-accent/40 mb-3 text-xs uppercase tracking-wider">
                  About Our Company
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
                  About Us
                </h1>
                <p className="text-lg font-semibold text-primary">
                  {company.name}
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  Merab Engineering Services Limited is registered with the Corporate Affairs Commission (C.A.C) of
                  Nigeria, RC {company.cacNumber.replace("RC ", "")}, with operational offices in Abuja, Port Harcourt, and Lagos.
                </p>
                <p>
                  We deliver fabrication, mechanical, civil, electrical and instrumentation, insulation, scaffolding, and
                  labour supply services to clients in oil and gas, power, and infrastructure sectors across Nigeria.
                </p>
                <p>
                  We are into general contracts such as labour supply — skilled and unskilled — trained professionals in
                  welding, fittings, fabrication, pipeline jobs, refinery, oil and gas flow stations, building
                  constructions, industrial elevated access, safety installations, structural steel works, repairs and
                  replacement parts.
                </p>
                <p>
                  We have skilled workers in various fields that are well trained in safety and are of good behaviour.
                  We have worked with and for many companies in this aspect and have shown competency in supply of labour
                  and human resources management. We have safety kits, a well-equipped retainership hospital, and also
                  make available working tools and machines.
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                  Core Engineering Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {keyCapabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Offices Section */}
        <div className="mb-20 border-t border-border pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Offices</h2>
            <p className="text-sm text-muted-foreground">Strategic administrative and operational presence across Nigeria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {company.offices.map((office) => (
              <Card key={office.label} className="border-border hover:border-primary/40 transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1.5 text-card-foreground text-base">{office.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{office.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-muted/30 border border-border rounded-xl p-10 sm:p-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">Work with Merab Engineering</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our engineering team to discuss tenders, subcontracts, or technical manpower requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Phone size={18} className="text-accent" />
              {company.phone}
            </a>
            <span className="hidden sm:inline text-muted-foreground/40">&middot;</span>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Mail size={18} className="text-accent" />
              {company.email}
            </a>
          </div>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
