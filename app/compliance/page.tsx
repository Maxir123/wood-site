import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, HelpCircle, ArrowRight, FileText, ExternalLink, ShieldCheck } from "lucide-react"
import { certifications, confirmedCerts } from "@/data/compliance"
import { galleryItems } from "@/data/gallery"
import { DocumentsGallery } from "@/components/documents-gallery"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compliance & Documents",
  description: "Regulatory registrations and verified documents on file for Merab Engineering Services Limited.",
}

const statusConfig = {
  confirmed: {
    label: "Confirmed",
    icon: CheckCircle2,
    badgeClass: "bg-green-100 text-green-800 border-green-200",
    cardClass: "border-green-200",
  },
  "pending-renewal": {
    label: "Pending Renewal",
    icon: Clock,
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    cardClass: "border-amber-200/60 opacity-70",
  },
  unverified: {
    label: "Unverified",
    icon: HelpCircle,
    badgeClass: "bg-gray-100 text-gray-600 border-gray-200",
    cardClass: "border-gray-200 opacity-60",
  },
} as const

// Documents existing in public/images/documents/
const documentItems = galleryItems.filter((item) => item.category === "documents")

export default function CompliancePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Compliance & Registrations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Merab Engineering Services Limited&apos;s regulatory registrations, corporate filings, and compliance records.
          </p>
        </div>

        {/* Confirmed section */}
        <div className="mb-14">
          <h2 className="text-xl font-bold mb-6 text-foreground">Confirmed Registrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confirmedCerts.map((cert) => {
              const cfg = statusConfig[cert.status]
              const Icon = cfg.icon
              return (
                <Card key={cert.id} className={`border ${cfg.cardClass}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Icon className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <Badge className={`text-xs ${cfg.badgeClass}`}>{cfg.label}</Badge>
                    </div>
                    <h3 className="font-bold text-card-foreground mb-1">{cert.name}</h3>
                    {cert.reference && (
                      <p className="text-sm font-mono text-accent mb-1">{cert.reference}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    {cert.id === "cac" && (
                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-accent" />
                          Certificate on file
                        </span>
                        <a
                          href="/images/documents/cac-certificate-of-incorporation.png"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline font-medium inline-flex items-center gap-1"
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Section: Documents on File (Thumbnail grid with watermark & lightbox) */}
        <div className="mb-16 border-t border-border pt-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Documents on file</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Official corporate registrations, compliance certificates, and client project award documentation on record.
              All documents are watermarked for verification purposes only. Click any document to inspect in high resolution.
            </p>
          </div>

          <DocumentsGallery items={documentItems} />
        </div>

        {/* Pending / unverified — shown as placeholders, clearly labelled */}
        <div className="mb-16 border-t border-border pt-12">
          <h2 className="text-xl font-bold mb-2 text-foreground">Other Registrations</h2>
          <p className="text-sm text-muted-foreground mb-6">
            The following registrations are either pending renewal or awaiting verification. They are not claimed as current.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications
              .filter((c) => c.status !== "confirmed")
              .map((cert) => {
                const cfg = statusConfig[cert.status]
                const Icon = cfg.icon
                return (
                  <Card key={cert.id} className={`border ${cfg.cardClass}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <Icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <Badge className={`text-xs ${cfg.badgeClass}`}>{cfg.label}</Badge>
                      </div>
                      <h3 className="font-medium text-card-foreground mb-1 text-sm">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-amber-700 mt-2">{cert.statusNote}</p>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-border rounded-lg p-10 bg-muted/20">
          <h2 className="text-xl font-bold mb-3 text-foreground">Need further documentation?</h2>
          <p className="text-muted-foreground mb-6 text-sm">Contact us directly for pre-qualification packs or specific compliance queries.</p>
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
