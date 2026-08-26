import React from "react";
import { StrengthItem } from "@/data/site";
import { Icon } from "./Icon";

interface StrengthCardProps {
  item: StrengthItem;
}

export const StrengthCard: React.FC<StrengthCardProps> = ({ item }) => {
  return (
    <div className="relative p-7 rounded-2xl bg-white border border-[#EAEAEA] hover:border-[#4F46E5]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-2xl font-black text-[#4F46E5]/30 font-en">
            {item.number}
          </span>
          <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center">
            <Icon name={item.iconName} className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};
