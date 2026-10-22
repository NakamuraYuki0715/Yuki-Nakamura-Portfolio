import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E0E6DE] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* ブランド情報 */}
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-lg font-bold tracking-wider text-[#202620] hover:text-[#174C3C] transition-colors font-en flex items-center justify-center md:justify-start gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#174C3C]" />
            <span>{siteConfig.brandName}</span>
          </Link>
          <p className="text-xs text-[#70776F] mt-1 font-en">
            {profileData.role.en}
          </p>
        </div>

        {/* ナビゲーションリンク */}
        <nav
          className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-[#70776F]"
          aria-label="フッターナビゲーション"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#174C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] rounded font-en"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ページ先頭へ ＆ コピーライト */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs text-[#70776F] hover:text-[#174C3C] transition-colors p-1 font-en font-semibold"
            aria-label="ページの一番上に戻る"
          >
            <ArrowUp size={14} className="text-[#174C3C]" />
            <span>TOP</span>
          </a>
          <p className="text-xs text-[#70776F] font-en">
            &copy; {siteConfig.footer.copyrightYear} {siteConfig.footer.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
};
