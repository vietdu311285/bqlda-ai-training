"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 400);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const handleCTA = () => {
    const el = document.querySelector("#dang-ky");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4"
          role="complementary"
          aria-label="Nút đăng ký nhanh"
        >
          <div className="max-w-2xl mx-auto bg-brand-dark border border-white/10 rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                Đăng ký tham gia khóa học AI cho BQLDA
              </p>
              <p className="text-xs text-white/50 mt-0.5">
                Hạn: 15/05/2026 · Số lượng có giới hạn
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleCTA}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-viettel-red hover:bg-viettel-red-dark text-white text-sm font-bold rounded-xl transition-colors group"
            >
              Đăng ký
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>

            {/* Dismiss */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Đóng thông báo"
            >
              <X size={14} className="text-white/60" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
