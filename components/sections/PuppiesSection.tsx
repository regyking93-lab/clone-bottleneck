import { PuppiesCarousel } from "@/components/PuppiesCarousel";
import { PuppiesGalleryModal } from "@/components/PuppiesGalleryModal";
import { MessengerButton } from "@/components/MessengerButton";
import { Reveal } from "@/components/motion/Reveal";
import type { Puppy } from "@/lib/types";

type PuppiesSectionProps = {
  puppies: Puppy[];
};

export function PuppiesSection({ puppies }: PuppiesSectionProps) {
  return (
    <section id="puppies" className="w-full overflow-x-hidden bg-beige/20 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            Available Puppies
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            Meet Our Little Companions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A preview of puppies we may have available. We place with intention —
            not like an online pet store. Message us for current availability.
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <PuppiesCarousel puppies={puppies} />
          <PuppiesGalleryModal puppies={puppies} />
        </Reveal>
        <Reveal className="mt-12 flex justify-center" delay={0.2}>
          <MessengerButton label="Message for Current Availability" />
        </Reveal>
      </div>
    </section>
  );
}
