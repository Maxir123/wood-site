"use client"

import { useState } from "react"
import Image from "next/image"
import { GalleryItem } from "@/data/gallery"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface ProjectGalleryProps {
  items: GalleryItem[]
}

export function ProjectGallery({ items }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={item.src}
            onClick={() => setSelectedIndex(idx)}
            className="group cursor-pointer rounded-lg overflow-hidden border border-border bg-card flex flex-col hover:border-primary/40 transition-all hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ZoomIn className="w-8 h-8" />
              </div>
            </div>
            <div className="p-3 bg-card border-t border-border flex-1">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background/95 border-border">
          {selectedItem && (
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2 px-2">
                <DialogTitle className="text-base sm:text-lg font-bold text-foreground">
                  {selectedItem.alt}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selectedItem.caption}
                </DialogDescription>
              </div>

              <div className="relative w-full h-[340px] sm:h-[480px] md:h-[540px] bg-black/90 rounded-md overflow-hidden flex items-center justify-center">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={selectedItem.width}
                  height={selectedItem.height}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />

                {items.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrev()
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNext()
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              <div className="px-2 pt-1 flex items-center justify-between text-sm text-muted-foreground">
                <p className="leading-relaxed">{selectedItem.caption}</p>
                <span className="text-xs font-mono ml-4 shrink-0">
                  {selectedIndex !== null ? selectedIndex + 1 : 1} / {items.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
