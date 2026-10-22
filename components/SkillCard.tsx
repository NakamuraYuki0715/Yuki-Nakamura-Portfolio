import React from "react";
import { SkillItem } from "@/data/skills";
import { Icon } from "./Icon";

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group p-6 rounded-2xl bg-[#FAFBF8] border border-[#E0E6DE] hover:border-[#174C3C]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-white border border-[#E0E6DE] group-hover:bg-[#DCE8DC]/70 group-hover:text-[#174C3C] text-[#202620] flex items-center justify-center transition-colors duration-300 shadow-2xs">
            <Icon name={skill.iconName} className="w-5 h-5 text-[#174C3C]" />
          </div>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-[#E0E6DE] text-[#70776F] font-en">
            {skill.category}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#202620] group-hover:text-[#174C3C] transition-colors mb-2 font-en">
          {skill.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#70776F] leading-relaxed line-clamp-3">
          {skill.description}
        </p>
      </div>
    </div>
  );
};
