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
    <article className="group flex flex-col bg-white rounded-2xl border border-[#E0E6DE] overflow-hidden hover:border-[#174C3C]/50 hover:shadow-xl transition-all duration-300">
      {/* 作品サムネイル画像 */}
      <Link
        href={`/works/${work.slug}`}
        className="relative block w-full aspect-[16/10] bg-[#FAFBF8] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C]"
        tabIndex={-1}
        aria-hidden="true"
      >
        {!imageError ? (
          <Image
            src={work.image}
            alt={`${work.title}のサムネイル画像`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAFBF8] to-[#DCE8DC]/30">
            <ImageOff size={32} className="text-[#70776F] mb-2" />
            <p className="text-xs font-semibold text-[#202620] font-en">{work.title}</p>
            <span className="text-[10px] text-[#70776F] mt-1">{work.category}</span>
          </div>
        )}

        {/* バッジ */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-white/95 backdrop-blur-md text-[#174C3C] shadow-sm font-en border border-[#E0E6DE]/60">
            {work.typeBadge}
          </span>
        </div>

        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-[#174C3C] flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 border border-[#E0E6DE]/60">
          <ArrowUpRight size={18} className="text-[#174C3C]" />
        </div>
      </Link>

      {/* 作品テキスト情報 */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-[#174C3C] uppercase tracking-wider font-en">
              {work.category}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#202620] group-hover:text-[#174C3C] transition-colors mb-3 leading-snug">
            <Link
              href={`/works/${work.slug}`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] rounded"
            >
              {work.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#70776F] leading-relaxed mb-6 line-clamp-2">
            {work.description}
          </p>
        </div>

        <div>
          {/* 技術タグ */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#FAFBF8] border border-[#E0E6DE] text-[11px] font-medium text-[#70776F] font-en"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* メタ情報（期間・担当範囲） */}
          <div className="pt-4 border-t border-[#E0E6DE] flex items-center justify-between text-xs text-[#70776F]">
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#70776F]" />
              <span>期間: {work.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck size={13} className="text-[#70776F]" />
              <span>担当: {work.role}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
