import React from "react";
import { SkillItem } from "@/data/skills";
import { Icon } from "./Icon";

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="group p-6 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#4F46E5]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#F7F7F8] group-hover:bg-[#EEF2FF] group-hover:text-[#4F46E5] text-[#222222] flex items-center justify-center transition-colors duration-300">
            <Icon name={skill.iconName} className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F7F7F8] text-[#666666] font-en">
            {skill.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#4F46E5] transition-colors mb-2 font-en">
          {skill.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
          {skill.description}
        </p>
      </div>
    </div>
  );
};
