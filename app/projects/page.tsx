"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { projects, projectSectors } from "@/data/projects"

export default function ProjectsPage() {
  const [selectedSector, setSelectedSector] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filtered =
    selectedSector === "All" ? projects : projects.filter((p) => p.sector === selectedSector)

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Selected projects across oil & gas, civil infrastructure, power, and public sector
          </p>
        </div>

        {/* Sector Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectSectors.map((sector) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group cursor-pointer border-border hover:shadow-xl hover:border-primary/40 transition-all"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-6">
                <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">{project.sector}</p>
                <h3 className="text-xl font-bold text-card-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{project.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-3">
                <p className="text-xs text-accent font-semibold uppercase tracking-wide">{selectedProject.sector}</p>
                <p className="text-sm font-medium text-foreground">Client: {selectedProject.client}</p>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.summary}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
