"use client";

import { motion } from "framer-motion";
import { PuppyCard } from "@/components/PuppyCard";
import type { Puppy } from "@/lib/types";
import { cn } from "@/lib/utils";

type PuppiesCarouselProps = {
  puppies: Puppy[];
  className?: string;
};

export function PuppiesCarousel({ puppies, className }: PuppiesCarouselProps) {
  if (puppies.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Message us when you&apos;re ready. We&apos;ll share who we&apos;re placing with care right now.
      </p>
    );
  }

  return (
    <div className={cn("min-w-0", className)}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:gap-8 md:overflow-visible md:pb-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {puppies.map((puppy, index) => (
          <div key={puppy._id} className="min-w-[82%] shrink-0 snap-center sm:min-w-[58%] md:min-w-0">
            <PuppyCard puppy={puppy} preload={index === 0} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
