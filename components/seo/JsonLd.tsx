import { faqItems } from "@/lib/site-content";
import { SITE_URL } from "@/lib/messenger";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Emma's Rogers Pomeranians",
    description:
      "Home-raised teacup Pomeranian puppies carefully matched with loving families. Message us on Messenger for videos and placement details.",
    url: SITE_URL,
    priceRange: "$$",
    areaServed: "United States",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
