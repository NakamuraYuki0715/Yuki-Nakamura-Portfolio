import React from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { Button } from "./Button";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[100svh] w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 hero-gradient-bg subtle-grid-bg overflow-hidden"
      aria-label="ヒーローセクション"
    >
      {/* 上品な背景アクセント装飾 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4F46E5]/[0.03] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-black/[0.02] rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* 肩書きバッジ */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#EAEAEA] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs sm:text-sm font-medium text-[#4F46E5] mb-6 sm:mb-8 transition-transform hover:scale-105 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse"></span>
          <span className="font-en">{siteConfig.hero.badge}</span>
        </div>

        {/* 英語サブコピー */}
        <p className="text-sm sm:text-base md:text-lg font-semibold tracking-widest text-[#666666] uppercase mb-3 font-en">
          {siteConfig.hero.subCopy}
        </p>

        {/* メインコピー */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#222222] leading-[1.15] mb-6 sm:mb-8">
          {siteConfig.hero.mainCopy}
        </h1>

        {/* 補足説明 */}
        <p className="max-w-2xl text-base sm:text-lg text-[#666666] leading-relaxed mb-10 sm:mb-12 font-normal">
          {siteConfig.hero.description}
        </p>

        {/* CTA ボタン群 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href={siteConfig.hero.ctaPrimary.href}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            icon={<ArrowRight size={18} />}
          >
            {siteConfig.hero.ctaPrimary.label}
          </Button>
          <Button
            href={siteConfig.hero.ctaSecondary.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {siteConfig.hero.ctaSecondary.label}
          </Button>
        </div>

        {/* 信頼感を醸成するステータス */}
        <div className="mt-14 pt-8 border-t border-[#EAEAEA]/80 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-left">
          <div>
            <p className="text-xs text-[#888888] uppercase tracking-wider font-en">Creator</p>
            <p className="text-sm sm:text-base font-semibold text-[#222222] mt-0.5">
              {profileData.name.ja} ({profileData.name.en})
            </p>
          </div>
          <div>
            <p className="text-xs text-[#888888] uppercase tracking-wider font-en">Location</p>
            <p className="text-sm sm:text-base font-semibold text-[#222222] mt-0.5">
              日本 / フルリモート対応
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs text-[#888888] uppercase tracking-wider font-en">Focus</p>
            <p className="text-sm sm:text-base font-semibold text-[#222222] mt-0.5">
              UI/UX × Next.js実装
            </p>
          </div>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#888888] text-xs animate-bounce opacity-80 pointer-events-none">
        <span className="tracking-widest font-en text-[10px]">SCROLL</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
};
