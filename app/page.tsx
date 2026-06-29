import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuoteCardsSection } from "@/components/sections/QuoteCardsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PuppiesSection } from "@/components/sections/PuppiesSection";
import { HomeLifeSection } from "@/components/sections/HomeLifeSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { TrustGallery } from "@/components/TrustGallery";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMessenger } from "@/components/layout/StickyMessenger";
import { getPuppies, getTestimonials } from "@/lib/data";

export default async function HomePage() {
  const [puppies, testimonials] = await Promise.all([
    getPuppies(),
    getTestimonials(),
  ]);

  return (
    <div className="relative z-[1] flex flex-col">
      <Header />
      <main className="w-full min-w-0 overflow-x-hidden pb-24 md:pb-0">
        <HeroSection />
        <QuoteCardsSection />
        <PuppiesSection puppies={puppies} />
        <HomeLifeSection />
        <TrustGallery testimonials={testimonials} />
        <ShowcaseSection />
        <ProcessSection />
        <AboutSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyMessenger />
      <section className="hidden" />
    </div>
  );
}
