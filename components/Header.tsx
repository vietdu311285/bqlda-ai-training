"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Nội dung", href: "#noi-dung" },
  { label: "Quyền lợi", href: "#quyen-loi" },
  { label: "Giảng viên", href: "#giang-vien" },
  { label: "FAQ", href: "#faq" },
  { label: "Đăng ký", href: "#dang-ky" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-header" : "border-b border-brand-gray4"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="Viettel Networks — Trang chủ"
            >
              <ViettelLogo />
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Menu chính"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-3 py-2 text-sm font-medium text-brand-gray1 hover:text-brand-black hover:bg-brand-gray4 rounded-md transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0966666568"
                className="flex items-center gap-1.5 text-sm font-medium text-brand-gray1 hover:text-viettel-red transition-colors"
                aria-label="Gọi hotline 0966.666.568"
              >
                <Phone size={14} />
                <span>0966.666.568</span>
              </a>
              <button
                onClick={() => handleNav("#dang-ky")}
                className="px-4 py-2 bg-viettel-red hover:bg-viettel-red-dark text-white text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap"
              >
                Đăng ký tham gia ngay
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-brand-gray1 hover:text-brand-black hover:bg-brand-gray4 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-brand-gray3 shadow-lg lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-brand-gray1 hover:text-brand-black hover:bg-brand-gray4 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-brand-gray4 flex flex-col gap-2">
                <a
                  href="tel:0966666568"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-brand-gray1"
                >
                  <Phone size={14} />
                  Hotline: 0966.666.568
                </a>
                <button
                  onClick={() => handleNav("#dang-ky")}
                  className="mx-4 py-3 bg-viettel-red hover:bg-viettel-red-dark text-white text-sm font-semibold rounded-md transition-colors"
                >
                  Đăng ký tham gia ngay
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 lg:h-18" aria-hidden="true" />
    </>
  );
}

function ViettelLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 bg-viettel-red rounded-sm flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
          <path d="M3 6h18M3 12h12M3 18h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-bold text-brand-black leading-tight tracking-wide">
          VIETTEL
        </div>
        <div className="text-[10px] font-medium text-brand-gray2 leading-tight tracking-widest uppercase">
          Networks
        </div>
      </div>
    </div>
  );
}
