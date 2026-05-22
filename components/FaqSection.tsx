"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/fallback-data";
import { MESSENGER_URL } from "@/lib/messenger";
import { Reveal } from "@/components/motion/Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h2 className="font-heading text-center text-3xl font-semibold text-charcoal md:text-4xl">
            Common Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Everything you need to feel safe — and we are always happy to answer more in Messenger.
          </p>
        </Reveal>
        <Reveal className="mt-10" delay={0.1}>
          <Accordion className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-charcoal">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}{" "}
                  <Link
                    href={MESSENGER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gold underline-offset-4 hover:underline"
                  >
                    Message us on Messenger →
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
