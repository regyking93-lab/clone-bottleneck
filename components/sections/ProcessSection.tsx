import { Reveal } from "@/components/motion/Reveal";
import { ProcessStep } from "@/components/ProcessStep";
import { Separator } from "@/components/ui/separator";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="bg-white px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 How It Works
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            Simple, Personal, Transparent
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            No complicated checkout. Just a caring conversation from first message to
            pickup or delivery.
          </p>
        </Reveal>
        <div className="mt-12 space-y-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <ProcessStep {...step} />
              {i < processSteps.length - 1 && <Separator className="my-4" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
