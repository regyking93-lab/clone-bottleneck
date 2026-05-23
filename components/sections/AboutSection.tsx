import { Heart } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="bg-beige/30 px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 About Us
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            A Family Who Cares Deeply
          </h2>
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <Card className="border-border/60 bg-white/90 shadow-sm">
            <CardContent className="space-y-6 pt-8 text-center md:text-left">
              <Heart className="mx-auto size-10 text-blush md:mx-0" aria-hidden />
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Emma&apos;s Rogers Pomeranians, we don&apos;t just place puppies. We match
                hearts. Each teacup Pomeranian is raised in a warm home with individual
                attention, socialization, and care from day one.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We carefully place only a few puppies each week because matching matters.
                When you message us, you&apos;re not talking to a call center. You&apos;re
                speaking directly with us about your home, your lifestyle, and the companion
                who would fit best.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our goal is simple: healthy, affectionate little companions with families
                who will cherish them for life. Every conversation starts with trust, and we
                are honored to be part of your journey.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
