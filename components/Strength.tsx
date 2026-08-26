import React from "react";
import { siteConfig } from "@/data/site";
import { StrengthCard } from "./StrengthCard";
import { SectionHeading } from "./SectionHeading";

export const Strength: React.FC = () => {
  return (
    <section
      id="strength"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16 bg-[#FAFAFA]/70 rounded-3xl my-8 border border-[#EAEAEA]/60"
      aria-label="選ばれる理由セクション"
    >
      <SectionHeading
        badge={siteConfig.strengths.badge}
        title={siteConfig.strengths.heading}
        subtitle={siteConfig.strengths.subHeading}
      />

      {/* 6つの強みグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.strengths.items.map((item) => (
          <StrengthCard key={item.number} item={item} />
        ))}
      </div>
    </section>
  );
};
