"use client";

import React, { useState } from "react";
import { skillsData, skillCategories } from "@/data/skills";
import { SkillCard } from "./SkillCard";
import { SectionHeading } from "./SectionHeading";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16 bg-white/70 rounded-3xl my-8 border border-[#E0E6DE]"
      aria-label="スキルセクション"
    >
      <SectionHeading
        badge="SKILLS"
        title="Design meets technology."
        subtitle="デザインの意図を忠実に再現し、保守性とパフォーマンスに優れたモダンな技術スタックを採用しています。"
      />

      {/* カテゴリフィルタータブ */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="スキルカテゴリーフィルター">
        {skillCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] font-en ${
                isActive
                  ? "bg-[#174C3C] text-white shadow-sm"
                  : "bg-white text-[#70776F] border border-[#E0E6DE] hover:border-[#174C3C] hover:text-[#174C3C]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* スキルカードグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};
