"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // スクロール状態の監視
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escapeキーでモバイルメニューを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#EAEAEA]/80 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-wider text-[#222222] hover:text-[#4F46E5] transition-colors font-en focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-sm"
          onClick={closeMenu}
        >
          {siteConfig.brandName}
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#666666]"
          aria-label="主要ナビゲーション"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#222222] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4F46E5] hover:after:w-full after:transition-all after:duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#111111] hover:bg-[#333333] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="p-2 text-[#222222] hover:text-[#4F46E5] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[57px] bg-white/98 backdrop-blur-xl z-40 md:hidden transition-all duration-300 flex flex-col px-6 py-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium text-[#222222]">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-2 border-b border-[#EAEAEA] hover:text-[#4F46E5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6">
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#333333] rounded-full transition-colors shadow-sm"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
};
