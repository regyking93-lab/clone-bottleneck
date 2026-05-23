"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import { Play, Shield, Heart, ZoomIn } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { media } from "@/lib/media";
import type { Testimonial } from "@/lib/types";

type DeliveryPhoto = (typeof media.trust.delivery)[number];

type TrustGalleryProps = {
  testimonials: Testimonial[];
};

export function TrustGallery({ testimonials }: TrustGalleryProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<DeliveryPhoto | null>(null);

  return (
    <section id="trust" className="w-full overflow-x-hidden bg-cream px-5 py-14 md:py-20 md:px-8">
      <TrustContent
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
        activePhoto={activePhoto}
        setActivePhoto={setActivePhoto}
        testimonials={testimonials}
      />
    </section>
  );
}

function TrustContent({
  activeVideo,
  setActiveVideo,
  activePhoto,
  setActivePhoto,
  testimonials,
}: {
  activeVideo: string | null;
  setActiveVideo: (v: string | null) => void;
  activePhoto: DeliveryPhoto | null;
  setActivePhoto: (p: DeliveryPhoto | null) => void;
  testimonials: Testimonial[];
}) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl">
      <Reveal>
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
          🐾 Trust & Proof
        </p>
        <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
          Real Families. Real Placements.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Delivery photos, happy handoffs, and vet-checked care. Real families, real
          placements, so you know this is safe.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Reveal>
          <TrustPill icon={Shield} title="Vet checked" text="Health prep before every placement" />
        </Reveal>
        <Reveal delay={0.05}>
          <TrustPill icon={Heart} title="Family matched" text="Intentional pairing, not mass sales" />
        </Reveal>
        <Reveal delay={0.1}>
          <TrustPill icon={Play} title="Videos shared" text="See your puppy before you commit" />
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <h3 className="mb-4 font-heading text-xl font-medium text-charcoal">Delivery & handoffs</h3>
        <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.trust.delivery.map((photo) => (
            <Card
              key={photo.src}
              className="group cursor-pointer overflow-hidden p-0"
              onClick={() => setActivePhoto(photo)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePhoto(photo);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View full size: ${photo.alt}`}
            >
              <AspectRatio ratio={1} className="relative">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition group-hover:bg-charcoal/40">
                  <ZoomIn className="size-8 text-white" aria-hidden />
                </div>
              </AspectRatio>
            </Card>
          ))}
          {media.trust.videos.map((video) => (
            <Card
              key={video.src}
              className="group cursor-pointer overflow-hidden p-0"
              onClick={() => setActiveVideo(video.src)}
            >
              <AspectRatio ratio={1} className="relative bg-charcoal">
                <video
                  src={video.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={video.alt}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition group-hover:bg-charcoal/40">
                  <Play className="size-10 text-white" fill="white" />
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>
      </Reveal>

      <TestimonialGrid testimonials={testimonials.slice(0, 3)} />

      <Dialog
        open={!!activePhoto}
        onOpenChange={(open) => {
          if (!open) setActivePhoto(null);
        }}
      >
        <DialogContent className="max-h-[95vh] max-w-[calc(100%-1rem)] overflow-y-auto border-none bg-charcoal/95 p-2 sm:max-w-2xl">
          <DialogTitle className="sr-only">
            WhatsApp delivery conversation screenshot
          </DialogTitle>
          {activePhoto && (
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              width={1170}
              height={2532}
              className="mx-auto h-auto w-full max-w-full object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!activeVideo}
        onOpenChange={(open) => {
          if (!open) setActiveVideo(null);
        }}
      >
        <DialogContent className="max-w-3xl border-none bg-charcoal p-2">
          <DialogTitle className="sr-only">Delivery video</DialogTitle>
          {activeVideo && (
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
              aria-label="Pomeranian puppy delivery video"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t._id} delay={i * 0.08}>
          <Card className="h-full border-border/60 bg-white/80">
            <CardHeader>
              <CardDescription className="text-base leading-relaxed text-foreground italic">
                &ldquo;{t.quote}&rdquo;
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-sm font-medium">
                {t.author}
                {t.location ? ` · ${t.location}` : ""}
              </CardTitle>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

function TrustPill({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <Card className="border-border/50 bg-white/70 text-center">
      <CardContent className="flex flex-col items-center gap-2 pt-6">
        <Icon className="size-8 text-gold" />
        <p className="font-medium text-charcoal">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
