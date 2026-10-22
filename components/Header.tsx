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
          ? "bg-[#FAFBF8]/90 backdrop-blur-md border-b border-[#E0E6DE] py-3.5 shadow-[0_4px_20px_rgba(23,76,60,0.04)]"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-wider text-[#202620] hover:text-[#174C3C] transition-colors font-en focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] rounded-sm flex items-center gap-2"
          onClick={closeMenu}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#174C3C]" />
          <span>{siteConfig.brandName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#70776F]"
          aria-label="主要ナビゲーション"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#174C3C] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#174C3C] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] rounded-sm font-en text-[13px] tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-white bg-[#174C3C] hover:bg-[#10382E] rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] shadow-sm hover:shadow"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="p-2 text-[#202620] hover:text-[#174C3C] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] transition-colors"
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
        className={`fixed inset-0 top-[60px] bg-[#FAFBF8]/98 backdrop-blur-xl z-40 md:hidden transition-all duration-300 flex flex-col px-6 py-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col gap-5 text-base font-medium text-[#202620]">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-2.5 border-b border-[#E0E6DE] hover:text-[#174C3C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C3C] rounded font-en"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6">
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#174C3C] hover:bg-[#10382E] rounded-full transition-colors shadow-sm"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
};
