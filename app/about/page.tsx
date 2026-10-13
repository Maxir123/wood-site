import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { company } from "@/data/company"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {company.name}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Merab Engineering Services Limited is registered with the Corporate Affairs Commission (C.A.C) of
              Nigeria, RC {company.cacNumber.replace("RC ", "")}, with offices in Abuja, Port Harcourt, and Lagos.
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
            {/* TODO: client to add founding year, milestones, or any additional company history */}
          </div>
        </div>

        {/* Offices */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {company.offices.map((office) => (
              <Card key={office.label} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2 text-card-foreground">{office.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{office.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-muted/30 rounded-lg p-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Contact us to discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors justify-center"
            >
              <Phone size={16} />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors justify-center"
            >
              <Mail size={16} />
              {company.email}
            </a>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Send a Message</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
