"use client";

const QUOTES = [
  "Not every home feels complete until tiny paws start following you room to room.",
  "Some bonds happen quietly. One little puppy, and suddenly the house feels softer.",
  "The kind of face that turns stressful days into peaceful evenings.",
  "Tiny paws. Warm blankets. A forever kind of love.",
  "Raised with love so they can give love naturally.",
  "The sweetest things in life usually have four paws and sleepy eyes.",
  "A house becomes different when a puppy chooses you as their person.",
  "Built for cuddles, comfort, and stealing your spot on the couch.",
  "Some puppies don't just enter homes… they change the feeling inside them.",
  "The little heartbeat your home didn't know it was missing.",
  "Soft fur. Tiny nose. Lifelong memories waiting to happen.",
  "More than adorable. The kind of companion people pray for without realizing it.",
  "The type of puppy that grows into your daily routine and your heart at the same time.",
  "There's something special about being greeted by tiny paws every morning.",
  "Comfort has a face sometimes.",
  "Not raised for attention. Raised for connection.",
  "The calm after long days often looks exactly like this.",
  "The best homes aren't always the biggest — just the ones filled with love.",
  "A puppy should feel like family before they even arrive home.",
  "Tiny enough to carry. Big enough to completely change a home.",
];

export function QuoteMarquee() {
  const doubled = [...QUOTES, ...QUOTES];

  return (
    <div
      className="w-full overflow-hidden border-y border-gold/30 bg-beige py-4"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((q, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/60"
          >
            <span className="text-gold text-[10px]">✦</span>
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}
