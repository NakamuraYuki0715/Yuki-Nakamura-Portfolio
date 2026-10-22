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
        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DCE8DC]/80 text-[#174C3C] text-xs font-semibold tracking-widest uppercase mb-3.5 font-en ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#174C3C]"></span>
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#202620] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-[#70776F] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
