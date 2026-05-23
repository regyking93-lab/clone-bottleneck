"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/site-content";
import { Reveal } from "@/components/motion/Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white px-5 py-14 md:py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            🐾 FAQ
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            Common Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Straight answers from our family. If something&apos;s on your mind and you
            don&apos;t see it here, we&apos;re one message away.
          </p>
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <Accordion className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-charcoal">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still have a question? Just message us — we&apos;re always happy to talk it through.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
