import React from "react";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { Button } from "./Button";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[92svh] sm:min-h-[100svh] w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 hero-gradient-bg subtle-grid-bg overflow-hidden"
      aria-label="ヒーローセクション"
    >
      {/* 上品なグリーン背景アクセント装飾 */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#DCE8DC]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#6E9478]/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* 名前・ロール (Ren Harada風の洗練された欧文サブヘッダー) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E0E6DE] shadow-[0_2px_10px_rgba(23,76,60,0.04)] text-xs sm:text-sm font-semibold text-[#174C3C] mb-6 sm:mb-8 font-en">
          <span className="w-2 h-2 rounded-full bg-[#174C3C] animate-pulse"></span>
          <span>YUKI NAKAMURA</span>
          <span className="text-[#6E9478]">/</span>
          <span className="text-[#70776F] font-normal">Web Designer &amp; Front-end Developer</span>
        </div>

        {/* メインコピー */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#202620] leading-[1.2] mb-6 sm:mb-8 max-w-3xl">
          想いを、伝わるデザインへ。
        </h1>

        {/* 補足説明 */}
        <p className="max-w-2xl text-base sm:text-lg text-[#70776F] leading-relaxed mb-10 sm:mb-12 font-normal">
          デザインと技術の両面から、<br className="hidden sm:inline" />
          ビジネスの魅力を伝えるWebサイトを制作します。
        </p>

        {/* CTA ボタン群 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            href="#works"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            icon={<ArrowRight size={17} />}
          >
            制作実績を見る
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            お問い合わせ
          </Button>
        </div>

        {/* 信頼感を醸成するステータス */}
        <div className="mt-14 pt-8 border-t border-[#E0E6DE] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-left w-full max-w-2xl">
          <div>
            <p className="text-[11px] text-[#70776F] uppercase tracking-wider font-en font-semibold">Creator</p>
            <p className="text-xs sm:text-sm font-semibold text-[#202620] mt-1">
              {profileData.name.ja} ({profileData.name.en})
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#70776F] uppercase tracking-wider font-en font-semibold">Location</p>
            <p className="text-xs sm:text-sm font-semibold text-[#202620] mt-1">
              日本 / リモート対応可能
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] text-[#70776F] uppercase tracking-wider font-en font-semibold">Specialty</p>
            <p className="text-xs sm:text-sm font-semibold text-[#202620] mt-1">
              Web Design × Coding
            </p>
          </div>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#70776F] text-xs animate-bounce opacity-80 pointer-events-none">
        <span className="tracking-widest font-en text-[10px] text-[#174C3C] font-semibold">SCROLL</span>
        <ChevronDown size={14} className="text-[#174C3C]" />
      </div>
    </section>
  );
};
