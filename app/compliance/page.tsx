import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  ShieldCheck,
  Building2,
  FileCheck,
  Lock,
} from "lucide-react"
import {
  confirmedCerts,
  otherRegistrations,
  documentRecords,
} from "@/data/compliance"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compliance & Registrations",
  description: "Official regulatory registrations, corporate filings, and compliance records for Merab Engineering Services Limited.",
}

const documentCategories = [
  "Corporate & Statutory",
  "Tax & Statutory Compliance",
  "Procurement & Industry Regulatory",
  "Project Completion & Awards",
] as const

export default function CompliancePage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1 font-medium">
            Corporate Governance & Compliance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Compliance & Registrations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Official corporate registrations, statutory filings, and compliance records for Merab Engineering Services Limited.
          </p>
        </div>

        {/* Section 1: Confirmed Corporate Registration */}
        <div className="mb-14">
          <h2 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Building2 className="w-5 h-5 text-accent" />
            Confirmed Corporate Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confirmedCerts.map((cert) => (
              <Card key={cert.id} className="border border-green-200/80 bg-green-50/20 shadow-xs">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <Badge className="text-xs bg-green-100 text-green-800 border-green-200 font-semibold">
                      Confirmed
                    </Badge>
                  </div>
                  <h3 className="font-bold text-card-foreground text-lg mb-1">{cert.name}</h3>
                  {cert.reference && (
                    <p className="text-base font-mono font-bold text-accent mb-1">{cert.reference}</p>
                  )}
                  <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      <FileCheck className="w-4 h-4 text-accent" />
                      Certificate on file
                    </span>
                    <span className="text-green-700 font-semibold">Provided on request</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Statutory & Regulatory Registrations (Clean list without pending/TODO tags) */}
        <div className="mb-16 border-t border-border pt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Statutory Registrations & Industry Memberships
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Merab Engineering Services Limited maintains active registrations, tax filings, and operational permits across relevant Nigerian regulatory authorities. Full verification dossiers and certified copies are provided upon request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherRegistrations.map((cert) => (
              <Card key={cert.id} className="border border-border/70 hover:border-primary/40 transition-all hover:shadow-xs bg-card">
                <CardContent className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between mb-2.5">
                      <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                      <Badge variant="outline" className="text-xs border-accent/30 text-accent font-medium bg-accent/5">
                        Available on Request
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-card-foreground text-base mb-1">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                  </div>
                  <div className="pt-3 border-t border-border/50 text-xs text-muted-foreground flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span>{cert.statusNote}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 3: Documents on Record (List format for security, no image scans) */}
        <div className="mb-16 border-t border-border pt-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Documents on Record</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Official corporate registrations, compliance certificates, and client project award records held securely in our corporate records office.
            </p>
          </div>

          {/* Security Notice Banner */}
          <div className="mb-8 p-4 sm:p-5 rounded-lg border border-primary/20 bg-primary/5 flex items-start gap-3.5">
            <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              <span className="font-semibold text-foreground">Confidentiality & Security Protocol: </span>
              In accordance with corporate governance and client confidentiality agreements, sensitive documentation, commercial award values, and tax certificates are not publicly displayed online. Complete verification packs and certified true copies are made available directly to prospective clients, tender boards, and project sponsors upon formal request.
            </div>
          </div>

          {/* Grouped Document Records */}
          <div className="space-y-8">
            {documentCategories.map((category) => {
              const docsInCategory = documentRecords.filter((d) => d.category === category)
              if (docsInCategory.length === 0) return null

              return (
                <div key={category} className="space-y-3">
                  <h3 className="text-base font-bold text-foreground uppercase tracking-wider text-xs border-b border-border pb-2">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {docsInCategory.map((doc) => (
                      <Card key={doc.id} className="border border-border/80 bg-card hover:border-primary/40 transition-colors">
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-start gap-2.5">
                              <FileCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-card-foreground text-sm sm:text-base leading-snug">
                                  {doc.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {doc.issuer}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-[11px] whitespace-nowrap bg-muted/40 text-foreground/80 border-border">
                              On Record
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground/90 pl-7 leading-relaxed">
                            {doc.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-border rounded-xl p-8 sm:p-12 bg-muted/20">
          <h2 className="text-2xl font-bold mb-3 text-foreground">Need our complete pre-qualification pack?</h2>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-xl mx-auto text-pretty">
            Contact our regulatory compliance team directly to request certified document copies, tax clearance dossiers, or pre-qualification packages.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-semibold">
            <Link href="/contact" className="inline-flex items-center">
              Request Documentation <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
