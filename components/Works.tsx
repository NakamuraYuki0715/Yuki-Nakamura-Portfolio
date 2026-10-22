import React from "react";
import { worksData } from "@/data/works";
import { WorkCard } from "./WorkCard";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { MessageCircle } from "lucide-react";

export const Works: React.FC = () => {
  return (
    <section
      id="works"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16"
      aria-label="制作実績セクション"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <SectionHeading
          badge="SELECTED WORKS"
          title="つくったものが、価値になる。"
          subtitle="課題解決とユーザー心理を設計の起点とした、Webサイト・LPのコンセプト制作事例です。"
          className="mb-0 md:mb-0"
        />
      </div>

      {/* 制作実績一覧グリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {worksData.map((work, index) => (
          <WorkCard key={work.slug} work={work} index={index} />
        ))}
      </div>

      {/* Works セクション内の自然な相談CTA */}
      <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-white border border-[#E0E6DE] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
        <div>
          <h3 className="text-lg font-bold text-[#202620]">
            イメージに合ったWebサイトをオーダーメイドで制作します
          </h3>
          <p className="text-xs sm:text-sm text-[#70776F] mt-1.5">
            「こんな雰囲気のサイトを作りたい」「予算感を知りたい」など、お気軽にご相談ください。
          </p>
        </div>
        <Button
          href="#contact"
          variant="primary"
          size="md"
          className="shrink-0"
          icon={<MessageCircle size={16} />}
        >
          制作について相談する
        </Button>
      </div>
    </section>
  );
};
