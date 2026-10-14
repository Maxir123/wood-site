import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { company } from "@/data/company"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2B1A6E",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.merabengineering.com"),
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: company.metaDescription,
  keywords: [...company.keywords],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Merab Engineering",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: company.website,
    title: company.name,
    description: company.metaDescription,
    siteName: company.name,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: company.name }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
