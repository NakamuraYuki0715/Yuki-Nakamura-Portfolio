"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Heart, Sparkles, CheckCircle2, User } from "lucide-react";

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16"
      aria-label="アバウトセクション"
    >
      <SectionHeading
        badge="ABOUT"
        title="想いを、デザインに。"
        subtitle="見た目の美しさと使いやすさ、ビジネス成果を支える技術力を追求しています。"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* 左側：プロフィール画像 / フォールバック */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-[#F7F7F8] border border-[#EAEAEA] shadow-sm">
            {!imageError ? (
              <Image
                src={profileData.image}
                alt={`${profileData.name.ja}のプロフィール写真`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F7F7F8] to-[#EEF2FF]">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-[#4F46E5] mb-4">
                  <User size={36} />
                </div>
                <p className="font-bold text-lg text-[#222222]">
                  {profileData.name.ja}
                </p>
                <p className="text-xs text-[#666666] font-en mt-1">
                  {profileData.role.en}
                </p>
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[#EAEAEA] shadow-sm">
              <p className="text-xs font-semibold text-[#222222]">
                {profileData.name.ja}
              </p>
              <p className="text-[11px] text-[#666666] font-en">
                {profileData.role.en}
              </p>
            </div>
          </div>

          {/* 制作の特徴・スタンスリスト */}
          <div className="w-full max-w-md mt-6 bg-[#F7F7F8] rounded-xl p-5 border border-[#EAEAEA]/80 space-y-3">
            {profileData.details.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 text-xs text-[#555555]">
                <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#222222] mr-1.5">{item.label}:</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右側：自己紹介テキスト ＆ Web制作への想い */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight leading-snug">
              ユーザーに分かりやすく、
              <br className="hidden sm:inline" />
              企業や店舗の魅力が伝わるWebサイトを。
            </h3>
            <div className="mt-6 space-y-4 text-base text-[#555555] leading-relaxed">
              {profileData.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 小セクション：なぜWeb制作をしているのか */}
          <div className="bg-gradient-to-br from-white to-[#F7F7F8] p-6 sm:p-8 rounded-2xl border border-[#EAEAEA] relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-xs font-bold text-[#4F46E5] tracking-wider uppercase font-en mb-3">
              <Heart size={14} className="fill-[#4F46E5]" />
              <span>{profileData.philosophy.title}</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-[#222222] mb-4">
              {profileData.philosophy.heading}
            </h4>

            <div className="space-y-3 text-sm sm:text-base text-[#666666] leading-relaxed">
              {profileData.philosophy.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
