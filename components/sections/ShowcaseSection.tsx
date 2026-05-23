"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
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

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
          {media.showcase.map((clip, i) => (
            <Reveal key={clip.src} delay={i * 0.06} className="min-w-[85%] shrink-0 snap-center sm:min-w-[70%] md:min-w-0">
              <Card
                className="group cursor-pointer overflow-hidden p-0"
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
                <AspectRatio ratio={4 / 5} className="relative bg-charcoal">
                  <video
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
                </AspectRatio>
              </Card>
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
              className="w-full rounded-lg"
              aria-label="Puppy playing at home"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
