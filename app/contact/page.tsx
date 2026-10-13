"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { company } from "@/data/company"

type FormState = "idle" | "submitting" | "success" | "error"

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("submitting")
    setErrorMessage("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _hp: (form.elements.namedItem("_hp") as HTMLInputElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setFormState("success")
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMessage(json.error ?? "Something went wrong. Please try again.")
        setFormState("error")
      }
    } catch {
      setErrorMessage("Network error. Please try again.")
      setFormState("error")
    }
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get in touch with {company.name}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">Phone</h3>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {company.offices.map((office) => (
              <Card key={office.label} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-card-foreground">{office.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{office.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Send a Message</h2>

              {formState === "success" ? (
                <div className="bg-green-50 text-green-800 border border-green-200 p-4 rounded-lg text-center">
                  <p className="font-medium">Message sent successfully.</p>
                  <p className="text-sm mt-1">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot — hidden from real users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_hp">Leave this empty</label>
                    <input id="_hp" name="_hp" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input id="name" name="name" type="text" required placeholder="Your name" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-card-foreground">
                      Company
                    </label>
                    <Input id="company" name="company" type="text" placeholder="Your company (optional)" className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Describe your project or enquiry..."
                      rows={6}
                      className="bg-background"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-destructive">{errorMessage}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {formState === "submitting" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
