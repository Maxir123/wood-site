import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { company } from "@/data/company"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            {/* logo.png — on navy background */}
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Merab Engineering Services Limited"
                width={60}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{company.name}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {company.metaDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {company.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                {company.email}
              </a>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone size={16} />
                {company.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{company.offices[0].address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="mt-1">CAC {company.cacNumber}</p>
        </div>
      </div>
    </footer>
  )
}
