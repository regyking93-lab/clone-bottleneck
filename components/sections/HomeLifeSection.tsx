"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/motion/Reveal";
import { media } from "@/lib/media";

type MediaItem =
  | { kind: "photo"; src: string; alt: string; label: string | null }
  | { kind: "video"; src: string; alt: string };

// Interleave photos and videos in a natural order
function buildFeed(): MediaItem[] {
  const photos = media.homeLife.photos.map((p) => ({ kind: "photo" as const, ...p }));
  const videos = media.homeLife.videos.map((v) => ({ kind: "video" as const, ...v }));
  const feed: MediaItem[] = [];
  let vi = 0;
  photos.forEach((photo, i) => {
    feed.push(photo);
    // Drop a video after every 4th photo
    if ((i + 1) % 4 === 0 && vi < videos.length) {
      feed.push(videos[vi++]);
    }
  });
  // Append remaining videos
  while (vi < videos.length) feed.push(videos[vi++]);
  return feed;
}

const FEED = buildFeed();

// Desktop masonry: 3 cols, items distributed top-to-bottom
function chunk3(items: MediaItem[]): [MediaItem[], MediaItem[], MediaItem[]] {
  const cols: [MediaItem[], MediaItem[], MediaItem[]] = [[], [], []];
  items.forEach((item, i) => cols[i % 3].push(item));
  return cols;
}

function PhotoCard({ item, onClick }: { item: MediaItem; onClick?: () => void }) {
  const isVideo = item.kind === "video";
  const label = item.kind === "photo" ? item.label : null;

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className={`group relative h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-blush/30 ${isVideo || onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Play video: ${item.alt}` : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
    >
      {isVideo ? (
        <div className="relative h-full bg-charcoal">
          <video
            src={item.src}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-75"
            aria-label={item.alt}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal/10 transition group-hover:bg-charcoal/25">
            <div className="rounded-full bg-white/80 p-3 shadow-md backdrop-blur-sm">
              <Play className="size-5 text-charcoal" fill="currentColor" aria-hidden />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-full bg-beige">
          <Image
            src={(item as Extract<MediaItem, { kind: "photo" }>).src}
            alt={item.alt}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 85vw, 33vw"
          />
        </div>
      )}

      {/* Warm gradient overlay at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal/40 to-transparent" />

      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-charcoal/80 backdrop-blur-sm shadow-sm">
          {label}
        </span>
      )}
    </motion.div>
  );
}

export function HomeLifeSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [col1, col2, col3] = chunk3(FEED);

  return (
    <section className="w-full overflow-x-hidden bg-cream px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 Life before placement
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            From Our Home, With Love
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            These aren&apos;t studio shots. This is how they actually live — warm laps,
            gentle mornings, and the little personalities you&apos;ll fall for when you reach out.
          </p>
        </Reveal>

        {/* Mobile: horizontal swipe carousel */}
        <div className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden">
          {FEED.map((item, i) => (
            <div key={i} className="aspect-[3/4] min-w-[75%] shrink-0 snap-center sm:min-w-[55%]">
              <PhotoCard
                item={item}
                onClick={item.kind === "video" ? () => setActiveVideo(item.src) : undefined}
              />
            </div>
          ))}
        </div>

        {/* Desktop: 3-column masonry */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-3 md:items-start">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((item, i) => (
                <Reveal key={i} delay={ci * 0.06 + i * 0.04}>
                  <PhotoCard
                    item={item}
                    onClick={item.kind === "video" ? () => setActiveVideo(item.src) : undefined}
                  />
                </Reveal>
              ))}
            </div>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Want to see more? Message us — we share fresh videos of the current litter every week.
          </p>
        </Reveal>
      </div>

      <Dialog open={!!activeVideo} onOpenChange={(open) => { if (!open) setActiveVideo(null); }}>
        <DialogContent className="max-w-lg border-none bg-charcoal p-2">
          <DialogTitle className="sr-only">Puppy video</DialogTitle>
          {activeVideo && (
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
              aria-label="Puppy moment at home"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
