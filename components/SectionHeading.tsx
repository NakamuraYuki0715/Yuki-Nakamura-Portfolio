import React from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  alignment = "left",
  className = "",
}) => {
  const isCenter = alignment === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-semibold tracking-widest uppercase mb-3 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]"></span>
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#222222] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#666666] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
