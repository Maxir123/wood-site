"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects, projectSectors } from "@/data/projects"

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState<string>("All")

  const sectors = projectSectors

  const filtered =
    selectedSector === "All" ? projects : projects.filter((p) => p.sector === selectedSector)

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Verified projects executed across Nigeria for oil & gas, industrial, and civil infrastructure clients.
          </p>
        </div>

        {/* Sector Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sectors.map((sector) => (
            <Button
              key={sector}
              variant={selectedSector === sector ? "default" : "outline"}
              onClick={() => setSelectedSector(sector)}
              className={selectedSector === sector ? "bg-primary text-primary-foreground" : ""}
            >
              {sector}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="overflow-hidden group cursor-pointer border-border hover:shadow-xl hover:border-primary/40 transition-all flex flex-col h-full">
                <div className="relative h-52 w-full bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm">
                      {project.sector}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-3 space-y-1">
                      <p><span className="font-semibold text-foreground/80">Client:</span> {project.client}</p>
                      <p><span className="font-semibold text-foreground/80">Location:</span> {project.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border mt-4">
                    <span className="text-sm font-semibold text-accent inline-flex items-center group-hover:translate-x-1 transition-transform">
                      View Project Details &rarr;
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
