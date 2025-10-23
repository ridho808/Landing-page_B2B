"use client";

import { HeroHeader } from "@/components/ui/hero-header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { KpiGrid } from "@/components/kpi-grid";
import { WhySection } from "@/components/why-section";
import { ZigzagSection } from "@/components/zigzag-section";
import { ServicesCards } from "@/components/services-cards";
import { Logos } from "@/components/logos";
import { Testimonials } from "@/components/testimonials";
import { ContactInline } from "@/components/contact-inline";
import { CtaBanner } from "@/components/cta-banner";
import { SITE_DATA } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <main>
        <Hero
          eyebrow={SITE_DATA.hero.eyebrow}
          title={SITE_DATA.hero.title}
          subtitle={SITE_DATA.hero.subtitle}
          primaryCta={SITE_DATA.hero.primaryCta}
          secondaryCta={SITE_DATA.hero.secondaryCta}
          image={SITE_DATA.hero.image}
        />

        <KpiGrid items={SITE_DATA.kpi.items} />

        <WhySection
          title={SITE_DATA.why.title}
          description={SITE_DATA.why.description}
          pills={SITE_DATA.why.pills}
        />

        <ZigzagSection items={SITE_DATA.zigzag.items} />

        <Logos
          title={SITE_DATA.logos.title}
          subtitle={SITE_DATA.logos.subtitle}
          logos={SITE_DATA.logos.items}
        />

        <ServicesCards items={SITE_DATA.services.items} />

        <Testimonials items={SITE_DATA.testimonials.items} />

        <ContactInline />

        <CtaBanner
          title={SITE_DATA.cta.title}
          subtitle={SITE_DATA.cta.subtitle}
          primaryCta={SITE_DATA.cta.primaryCta}
          secondaryCta={SITE_DATA.cta.secondaryCta}
          badge={SITE_DATA.cta.badge}
        />
      </main>

      <Footer />
    </div>
  );
}
