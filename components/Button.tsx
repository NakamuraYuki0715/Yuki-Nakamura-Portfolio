import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 sm:py-3 gap-2",
    lg: "text-sm sm:text-base px-7 sm:px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#174C3C] text-white hover:bg-[#10382E] shadow-sm hover:shadow-md",
    secondary:
      "bg-[#FAFBF8] text-[#202620] hover:bg-[#DCE8DC]/50 border border-[#E0E6DE]",
    outline:
      "bg-transparent text-[#202620] border border-[#E0E6DE] hover:border-[#174C3C] hover:text-[#174C3C] hover:bg-[#DCE8DC]/20",
    text:
      "bg-transparent text-[#202620] hover:text-[#174C3C] p-0 underline-offset-4 hover:underline",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
