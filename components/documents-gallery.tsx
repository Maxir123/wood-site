"use client"

import { useState } from "react"
import Image from "next/image"
import { GalleryItem } from "@/data/gallery"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, ZoomIn, ShieldCheck } from "lucide-react"

interface DocumentsGalleryProps {
  items: GalleryItem[]
}

export function DocumentsGallery({ items }: DocumentsGalleryProps) {
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
      {/* Grid of Documents */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.src}
            onClick={() => setSelectedIndex(idx)}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card flex flex-col hover:border-primary/50 transition-all hover:shadow-md"
          >
            {/* Thumbnail container with CSS watermark */}
            <div className="relative aspect-[3/4] w-full bg-muted/60 overflow-hidden flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="h-full w-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              />

              {/* Watermark Overlay for Thumbnail */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-2">
                <span className="rotate-[-30deg] text-[10px] font-bold uppercase tracking-wider text-white/70 bg-black/50 px-1.5 py-0.5 rounded border border-white/20 select-none text-center shadow-xs">
                  Merab Engineering Services Ltd - for verification
                </span>
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>

            {/* Document Label */}
            <div className="p-2.5 bg-card border-t border-border flex-1 flex flex-col justify-between">
              <p className="text-xs font-semibold text-foreground line-clamp-2 leading-tight">
                {item.alt}
              </p>
              <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-2">
                <ShieldCheck className="w-3 h-3 text-accent shrink-0" />
                On File
              </span>
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
                  <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                    {selectedItem.caption}
                  </DialogDescription>
                </div>
              </div>

              {/* Main Document Viewer with Centered Diagonal Watermark */}
              <div className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] bg-slate-900 rounded-md overflow-hidden flex items-center justify-center">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={selectedItem.width}
                  height={selectedItem.height}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain p-2"
                />

                {/* CSS Watermark Overlay text */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 p-4">
                  <div className="rotate-[-25deg] text-sm sm:text-lg md:text-xl font-bold uppercase tracking-widest text-white/60 bg-black/60 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-white/40 select-none shadow-2xl text-center">
                    Merab Engineering Services Ltd - for verification
                  </div>
                </div>

                {/* Navigation arrows */}
                {items.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrev()
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors z-30"
                      aria-label="Previous document"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNext()
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors z-30"
                      aria-label="Next document"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Footer info */}
              <div className="px-2 pt-1 flex items-center justify-between text-xs text-muted-foreground">
                <p>Watermarked for verification purposes only.</p>
                <span className="font-mono">
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
