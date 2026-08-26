import React from "react";
import { siteConfig } from "@/data/site";
import { Button } from "./Button";
import { ArrowRight, Mail } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12"
      aria-label="お問い合わせ誘導セクション"
    >
      <div className="relative rounded-3xl bg-[#111111] text-white px-6 sm:px-12 md:px-16 py-16 md:py-20 overflow-hidden shadow-xl">
        {/* 上品な背景グロー */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-6 font-en backdrop-blur-sm">
            <Mail size={13} className="text-[#4F46E5]" />
            <span>LET&apos;S WORK TOGETHER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {siteConfig.cta.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-10 max-w-xl">
            {siteConfig.cta.description}
          </p>

          <Button
            href={siteConfig.cta.buttonHref}
            variant="secondary"
            size="lg"
            className="bg-white text-[#111111] hover:bg-[#F7F7F8] border-none shadow-md"
            icon={<ArrowRight size={18} />}
          >
            {siteConfig.cta.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
