"use client";

import Image from "next/image";
import { ShimmerImage } from "@/components/ui/shimmer-image";
import { motion } from "framer-motion";
import { MessengerButton } from "@/components/MessengerButton";
import { media } from "@/lib/media";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden bg-cream">
      {/* Wallpaper — low opacity texture */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/media/hero-wallpaper/hero-wallpaper.png"
          alt=""
          fill
          preload
          className="object-cover"
          style={{ opacity: 0.22 }}
          sizes="100vw"
        />
        {/* Warm gradient blended over the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-blush/20 to-blush/40" />
        {/* Soft gold radial glow behind the text column */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_15%_55%,rgba(201,169,98,0.12)_0%,transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl gap-8 px-5 pt-8 pb-10 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pt-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex min-w-0 flex-col gap-6 md:order-1"
        >
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold">
            <span>🧸</span>
            <span>Emma&apos;s Rogers Pomeranians</span>
          </p>
          <h1 className="font-heading break-words text-4xl leading-tight font-semibold md:text-5xl lg:text-[3.25rem]">
            <span className="text-charcoal/90" style={{ textShadow: "0 1px 18px rgba(232,196,196,0.45)" }}>Little Faces.</span>
            <br />
            <span className="text-gold">Big Hearts.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Home-raised teacup Pomeranians with teddy-soft coats and calm, cuddly
            personalities. We place each puppy with intention, not like a listing site.
          </p>
          <p className="text-sm text-muted-foreground">
            Watch them play, then say hi when you&apos;re ready. We&apos;ll share videos and
            help you find the right little companion for your family.
          </p>
          <MessengerButton
            className="w-full max-w-full sm:w-auto sm:self-start"
            label="Say hi on Messenger"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="min-w-0 md:order-2"
        >
          <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-3xl shadow-xl ring-2 ring-blush/60 sm:aspect-[4/5]">
            <ShimmerImage
              src={media.hero.image}
              alt="Home-raised teacup Pomeranian puppy at Emma's Rogers Pomeranians"
              fill
              preload
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Floating trust badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 shadow-md backdrop-blur-sm">
              <span className="text-sm">🏠</span>
              <span className="text-xs font-medium text-charcoal/80">Home-raised · loved from day one</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — mobile only */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-1 pb-6 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          scroll to explore
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold/60 text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
