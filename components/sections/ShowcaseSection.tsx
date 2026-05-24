"use client";

import { Play } from "lucide-react";
import { ShimmerVideo } from "@/components/ui/shimmer-video";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { media } from "@/lib/media";

export function ShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full overflow-x-hidden bg-beige/30 px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 Life at home
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            Playful Moments, Up Close
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A peek at how our puppies live before placement. Snuggles, zoomies, and the
            little personalities you&apos;ll meet when you message us.
          </p>
        </Reveal>

        {/* Mobile: fixed-height carousel */}
        <div className="mt-10 flex h-72 gap-4 overflow-x-auto snap-x snap-mandatory md:hidden">
          {media.showcase.map((clip) => (
            <div
              key={clip.src}
              className="h-full w-[85%] shrink-0 snap-center sm:w-[70%]"
              onClick={() => setActiveVideo(clip.src)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveVideo(clip.src); } }}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${clip.alt}`}
            >
              <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-charcoal shadow-sm">
                <ShimmerVideo
                  src={clip.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={clip.alt}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal/20 transition group-hover:bg-charcoal/30">
                  <Play className="size-10 text-white/90" fill="white" aria-hidden />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-3 md:items-start">
          {media.showcase.map((clip, i) => (
            <Reveal key={clip.src} delay={i * 0.06} className="w-full">
              <div
                className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-xl bg-charcoal shadow-sm"
                onClick={() => setActiveVideo(clip.src)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveVideo(clip.src);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${clip.alt}`}
              >
                <ShimmerVideo
                  src={clip.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={clip.alt}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal/20 transition group-hover:bg-charcoal/30">
                  <Play className="size-10 text-white/90" fill="white" aria-hidden />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog
        open={!!activeVideo}
        onOpenChange={(open) => {
          if (!open) setActiveVideo(null);
        }}
      >
        <DialogContent className="max-w-3xl border-none bg-charcoal p-2">
          <DialogTitle className="sr-only">Puppy moment video</DialogTitle>
          {activeVideo && (
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full rounded-lg"
              aria-label="Puppy playing at home"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
