import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#EAEAEA] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* ブランド情報 */}
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-lg font-bold tracking-wider text-[#222222] hover:text-[#4F46E5] transition-colors font-en"
          >
            {siteConfig.brandName}
          </Link>
          <p className="text-xs text-[#777777] mt-1 font-en">
            {profileData.role.en}
          </p>
        </div>

        {/* ナビゲーションリンク */}
        <nav
          className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-[#666666]"
          aria-label="フッターナビゲーション"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#222222] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ページ先頭へ ＆ コピーライト */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs text-[#777777] hover:text-[#222222] transition-colors p-1"
            aria-label="ページの一番上に戻る"
          >
            <ArrowUp size={14} />
            <span>TOP</span>
          </a>
          <p className="text-xs text-[#888888]">
            &copy; {siteConfig.footer.copyrightYear} {siteConfig.footer.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
};
