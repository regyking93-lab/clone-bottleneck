"use client";

import { motion } from "framer-motion";
import { MessengerButton } from "@/components/MessengerButton";
import { media } from "@/lib/media";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden bg-cream">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-8 px-5 pt-8 pb-16 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pt-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 flex min-w-0 flex-col gap-6 md:order-1"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Emma&apos;s Rogers Pomeranians
          </p>
          <h1 className="font-heading break-words text-4xl leading-tight font-semibold text-charcoal md:text-5xl lg:text-[3.25rem]">
            Raised With Love.
            <br />
            <span className="text-gold">Placed With Intention.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Message us directly to see available puppies, videos, delivery updates,
            and current placements. Each puppy is carefully raised in a loving home
            environment and matched with the right family.
          </p>
          <p className="text-sm text-muted-foreground">
            Trusted by families looking for healthy, affectionate little companions.
          </p>
          <MessengerButton className="w-full max-w-full sm:w-auto sm:self-start" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 min-w-0 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full max-w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-border/40">
            <video
              className="h-full w-full max-w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={media.hero.poster}
              aria-label="Home-raised teacup Pomeranian puppy playing — Emma's Rogers Pomeranians hero video"
            >
              <source src={media.hero.video} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
