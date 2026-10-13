import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">A.D. Demosthenous</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting timeless woodwork with expertise in custom wooden constructions since 1995.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About & Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@addemosthenous.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                info@addemosthenous.com
              </a>
              <a
                href="tel:+35799123456"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +357 99 123 456
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Kosti Palama 35, Mesa Geitonia, 4001, Limassol, Cyprus</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} A.D. Demosthenous. All rights reserved.</p>
          <p>Created by Andreas Palaikythritis</p>
        </div>
      </div>
    </footer>
  )
}
