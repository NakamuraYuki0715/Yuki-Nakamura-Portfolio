import React from "react";
import { StrengthItem } from "@/data/site";
import { Icon } from "./Icon";

interface StrengthCardProps {
  item: StrengthItem;
}

export const StrengthCard: React.FC<StrengthCardProps> = ({ item }) => {
  return (
    <div className="relative p-7 rounded-2xl bg-[#FAFBF8] border border-[#E0E6DE] hover:border-[#174C3C]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-2xl font-black text-[#174C3C]/25 font-en tracking-tight">
            {item.number}
          </span>
          <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E6DE] text-[#174C3C] flex items-center justify-center shadow-2xs">
            <Icon name={item.iconName} className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#202620] mb-2.5 leading-snug">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#70776F] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};
