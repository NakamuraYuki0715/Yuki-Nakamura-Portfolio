"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkItem } from "@/data/works";
import { ArrowUpRight, Clock, UserCheck, ImageOff } from "lucide-react";

interface WorkCardProps {
  work: WorkItem;
  index: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-lg transition-all duration-300">
      {/* 作品サムネイル画像 */}
      <Link
        href={`/works/${work.slug}`}
        className="relative block w-full aspect-[16/10] bg-[#F7F7F8] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
        tabIndex={-1}
        aria-hidden="true"
      >
        {!imageError ? (
          <Image
            src={work.image}
            alt={`${work.title}のサムネイル画像`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F7F7F8] to-[#EEF2FF]">
            <ImageOff size={32} className="text-[#888888] mb-2" />
            <p className="text-xs font-semibold text-[#666666] font-en">{work.title}</p>
            <span className="text-[10px] text-[#888888] mt-1">{work.category}</span>
          </div>
        )}

        {/* バッジ */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-white/90 backdrop-blur-md text-[#222222] shadow-sm font-en">
            {work.typeBadge}
          </span>
        </div>

        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#222222] flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
          <ArrowUpRight size={18} className="text-[#4F46E5]" />
        </div>
      </Link>

      {/* 作品テキスト情報 */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider font-en">
              {work.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#4F46E5] transition-colors mb-3">
            <Link
              href={`/works/${work.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
            >
              {work.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6 line-clamp-2">
            {work.description}
          </p>
        </div>

        <div>
          {/* 技術タグ */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#F7F7F8] border border-[#EAEAEA] text-[11px] font-medium text-[#555555] font-en"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* メタ情報（期間・担当範囲） */}
          <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between text-xs text-[#777777]">
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#888888]" />
              <span>期間: {work.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck size={13} className="text-[#888888]" />
              <span>担当: {work.role}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
