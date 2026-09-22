import React from "react";
import {
  CalendarCheck,
  MapPin,
  Repeat,
  Coins,
  Palette,
  Headphones,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { SectionHeading } from "../components/BrandUI";
import { FeatureCollection } from "../components/FeatureCollection";

export const WhyAdvertiseSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck,
    MapPin,
    Repeat,
    Coins,
    Palette,
    Headphones,
  };

  const features = siteConfig.whyAdvertise.map((item, index) => ({
    id: item.id,
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    text: item.description,
    icon: iconMap[item.iconName] || Sparkles,
  }));

  return (
    <section
      id="por-que-anunciar"
      className="border-b border-white/10 bg-[#030406] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Vantagens VM Mídias"
          title="Por que anunciar"
          accent="com a VM Mídias"
          description="Mais que mídia, resultados de visibilidade e autoridade para o seu negócio."
          align="left"
          className="mb-14 lg:mb-20"
        />
        <FeatureCollection
          items={features}
          desktopColumns={2}
          mobileCarousel
        />
      </div>
    </section>
  );
};
