"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const QUOTES = [
  { text: "Not every home feels complete until tiny paws start following you room to room.", emoji: "🏡" },
  { text: "Some bonds happen quietly. One little puppy, and suddenly the house feels softer.", emoji: "🤍" },
  { text: "The kind of face that turns stressful days into peaceful evenings.", emoji: "🌸" },
  { text: "Tiny paws. Warm blankets. A forever kind of love.", emoji: "🐾" },
  { text: "Raised with love so they can give love naturally.", emoji: "💝" },
  { text: "The sweetest things in life usually have four paws and sleepy eyes.", emoji: "😴" },
  { text: "A house becomes different when a puppy chooses you as their person.", emoji: "✨" },
  { text: "Built for cuddles, comfort, and stealing your spot on the couch.", emoji: "🛋️" },
  { text: "Some puppies don't just enter homes… they change the feeling inside them.", emoji: "💫" },
  { text: "The little heartbeat your home didn't know it was missing.", emoji: "🫀" },
  { text: "Soft fur. Tiny nose. Lifelong memories waiting to happen.", emoji: "🥹" },
  { text: "More than adorable. The kind of companion people pray for without realizing it.", emoji: "🙏" },
  { text: "The type of puppy that grows into your daily routine and your heart at the same time.", emoji: "💛" },
  { text: "There's something special about being greeted by tiny paws every morning.", emoji: "🌅" },
  { text: "Comfort has a face sometimes.", emoji: "🥰" },
  { text: "Not raised for attention. Raised for connection.", emoji: "🫶" },
  { text: "The calm after long days often looks exactly like this.", emoji: "🌙" },
  { text: "The best homes aren't always the biggest — just the ones filled with love.", emoji: "💕" },
  { text: "A puppy should feel like family before they even arrive home.", emoji: "🏠" },
  { text: "Tiny enough to carry. Big enough to completely change a home.", emoji: "🐶" },
];

const CARD_STYLES = [
  "bg-white/90 border border-blush/40",
  "bg-blush/30 border border-blush/50",
  "bg-beige border border-gold/20",
  "bg-gold/10 border border-gold/25",
  "bg-blush/15 border border-blush/35",
];

const TOTAL = QUOTES.length;

function getOffset(i: number, active: number) {
  let d = i - active;
  if (d > TOTAL / 2) d -= TOTAL;
  if (d < -(TOTAL / 2)) d += TOTAL;
  return d;
}

function CarouselTrack({
  active,
  cardW,
  gap,
  maxSide,
  height,
}: {
  active: number;
  cardW: number;
  gap: number;
  maxSide: number; // how many cards visible on each side of center
  height: number;
}) {
  return (
    <div className="relative py-4" style={{ overflowX: "clip" }}>
      <div className="relative" style={{ height }}>
        {QUOTES.map((q, i) => {
          const offset = getOffset(i, active);
          const abs = Math.abs(offset);
          const opacity =
            abs === 0 ? 1 :
            abs === 1 ? 0.55 :
            abs === 2 ? 0.28 : 0;
          const scale = abs === 0 ? 1.04 : abs === 1 ? 0.95 : 0.88;

          return (
            <motion.div
              key={i}
              animate={{
                x: offset * (cardW + gap),
                opacity: abs <= maxSide ? opacity : 0,
                scale,
                y: abs === 0 ? -10 : 0,
              }}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: "absolute",
                width: cardW,
                height: "100%",
                left: `calc(50% - ${cardW / 2}px)`,
                top: 0,
                zIndex: 5 - abs,
                pointerEvents: abs === 0 ? "auto" : "none",
              }}
            >
              <div
                className={`flex h-full flex-col justify-between rounded-3xl p-5 shadow-md ${CARD_STYLES[i % CARD_STYLES.length]}`}
              >
                <p className="text-sm font-medium italic leading-relaxed text-charcoal/80">
                  &ldquo;{q.text}&rdquo;
                </p>
                <span className="mt-3 self-end text-2xl leading-none">{q.emoji}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function QuoteCardsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % TOTAL), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full overflow-x-hidden bg-cream px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 Words that stay with you
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            The Feeling Is Hard to Describe
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Until you experience it. These are the moments people mention long after their puppy comes home.
          </p>
        </Reveal>

        {/* Mobile: 3 cards — center full, ±1 peeking */}
        <div className="mt-10 md:hidden">
          <CarouselTrack active={active} cardW={250} gap={12} maxSide={1} height={190} />
        </div>

        {/* Desktop: 5 cards — center full, ±1 and ±2 fading */}
        <div className="mt-12 hidden md:block">
          <CarouselTrack active={active} cardW={215} gap={16} maxSide={2} height={230} />
        </div>

        {/* Progress dots — shared */}
        <div className="mt-4 flex justify-center gap-1.5">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-gold" : "w-1.5 bg-charcoal/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
