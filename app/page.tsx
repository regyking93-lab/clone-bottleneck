import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PuppiesSection } from "@/components/sections/PuppiesSection";
import { TrustGallery } from "@/components/TrustGallery";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMessenger } from "@/components/layout/StickyMessenger";
import { getPuppies, getTestimonials } from "@/lib/data";
import { MobileOverflowProbe } from "@/components/debug/MobileOverflowProbe";

export default async function HomePage() {
  const [puppies, testimonials] = await Promise.all([
    getPuppies(),
    getTestimonials(),
  ]);

  return (
    <>
      <MobileOverflowProbe />
      <Header />
      <main className="w-full min-w-0 overflow-x-hidden pb-24 md:pb-0">
        <HeroSection />
        <PuppiesSection puppies={puppies} />
        <TrustGallery testimonials={testimonials} />
        <ProcessSection />
        <AboutSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyMessenger />
    </>
  );
}
