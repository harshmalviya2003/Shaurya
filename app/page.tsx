'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SkillsMarquee from '@/components/SkillsMarquee';
import HowItWorks from '@/components/HowItWorks';
import TestimonialQuote from '@/components/TestimonialQuote';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import SlackTestimonials from '@/components/SlackTestimonials';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import InteractiveBackground from '@/components/InteractiveBackground';
import DesignServicesMarquee from '@/components/services';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <InteractiveBackground />
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <DesignServicesMarquee /> 
        <HowItWorks />
        {/* <TestimonialQuote /> */}
        <SlackTestimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}