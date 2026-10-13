import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { company } from "@/data/company"

export const metadata: Metadata = {
  title: "Clients",
  description: "Clients and sectors served by Merab Engineering Services Limited.",
}

/**
 * Client names sourced from docs/CONTENT.md only.
 * No logos displayed — permission not confirmed.
 */
const clients = [
  "SPDC",
  "Greenville Oil & Gas",
  "Chemie-Tech DMCC",
  "NDDC",
  "INEC",
  "Bayelsa State Government",
  "FCTA",
  "Abuja Environmental Protection Board",
  "Globacom",
  "Motorola",
]

const sectors = [
  { name: "Oil & Gas / Refinery", description: "Process plants, refineries, flow stations, pipe racks, insulation, E&I, and manpower supply." },
  { name: "Civil Infrastructure", description: "Roads, culverts, drainage, boreholes, overhead tanks, and structural works." },
  { name: "Power & Electrification", description: "Rural electrification, transformer supply and installation, HT/LT power lines." },
  { name: "Public Sector", description: "Building works, civil projects, and services for federal and state government bodies." },
  { name: "Industrial / Manufacturing", description: "Structural fabrication, mechanical works, and labour supply for industrial facilities." },
  { name: "Environmental", description: "Waste evacuation and environmental services." },
]

export default function ClientsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Clients & Sectors</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {company.name} has delivered engineering and industrial services to clients across multiple sectors in Nigeria.
          </p>
        </div>

        {/* Sectors */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Card key={sector.name} className="border-border hover:border-primary/40 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">{sector.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client list */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Selected Clients</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Client logos are not displayed pending each client&apos;s written permission.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center p-4 rounded-lg border border-border bg-muted/30 text-sm font-medium text-center text-muted-foreground"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 border border-primary/20 rounded-lg p-10">
          <h2 className="text-2xl font-bold mb-3 text-foreground">Work with Us</h2>
          <p className="text-muted-foreground mb-6">Get in touch to discuss how Merab Engineering can support your project.</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
