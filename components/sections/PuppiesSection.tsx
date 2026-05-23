import { PuppiesCarousel } from "@/components/PuppiesCarousel";
import { Reveal } from "@/components/motion/Reveal";
import type { Puppy } from "@/lib/types";

type PuppiesSectionProps = {
  puppies: Puppy[];
};

export function PuppiesSection({ puppies }: PuppiesSectionProps) {
  return (
    <section id="puppies" className="w-full overflow-x-hidden bg-beige/20 px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 Companions we&apos;re placing with care
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            Meet a Few of Our Little Companions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Each one has a name, a personality, and a home-raised start. We place with
            intention, not like an online pet store. When you&apos;re ready, say hi and we&apos;ll
            walk you through who might be right for your family.
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <PuppiesCarousel puppies={puppies} />
        </Reveal>
      </div>
    </section>
  );
}
