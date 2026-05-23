"use client";

import { motion } from "framer-motion";
import { MessengerButton } from "@/components/MessengerButton";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-5 py-16 text-center md:py-24 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-gold/20" />
      <Reveal className="relative mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-gold"
        >
          🐾 Take the first step
        </motion.p>
        <h2 className="font-heading text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
          Ready to meet your perfect little companion?
        </h2>
        <p className="mt-6 text-lg text-cream/80">
          No pressure, no checkout online. Just a warm conversation about your home
          and the puppy who might fit best.
        </p>
        <div className="mt-10 flex justify-center">
          <MessengerButton
            className="bg-gold text-white hover:bg-gold/90"
            label="Say hi on Messenger"
          />
        </div>
      </Reveal>
    </section>
  );
}
