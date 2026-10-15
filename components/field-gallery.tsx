"use client"

import { useState } from "react"
import Image from "next/image"
import { GalleryItem } from "@/data/gallery"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

interface FieldGalleryProps {
  items: GalleryItem[]
}

export function FieldGallery({ items }: FieldGalleryProps) {
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
      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.src}
            onClick={() => setSelectedIndex(idx)}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-muted/40 aspect-[4/3]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 text-white">
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="capitalize text-xs bg-accent text-accent-foreground">
                  {item.category}
                </Badge>
                <ZoomIn className="w-4 h-4 text-white/90" />
              </div>
              <p className="text-xs line-clamp-2 text-white/90 font-medium">
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
                <div>
                  <DialogTitle className="text-base sm:text-lg font-bold text-foreground">
                    {selectedItem.alt}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {selectedItem.caption}
                  </DialogDescription>
                </div>
                <Badge variant="outline" className="capitalize text-xs">
                  {selectedItem.category}
                </Badge>
              </div>

              {/* Main lightbox image container */}
              <div className="relative w-full h-[320px] sm:h-[480px] md:h-[540px] bg-black/90 rounded-md overflow-hidden flex items-center justify-center">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={selectedItem.width}
                  height={selectedItem.height}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />

                {/* Navigation arrows */}
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

              {/* Caption */}
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
