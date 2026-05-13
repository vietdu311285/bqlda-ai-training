"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";

export default function FinalCTA() {
  const scrollToForm = () => {
    const el = document.querySelector("#dang-ky");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 bg-brand-dark"
      aria-labelledby="final-cta-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-viettel-red/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-6 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.25em] text-viettel-red uppercase">
              Đăng ký ngay
            </span>
            <span className="w-6 h-px bg-viettel-red" aria-hidden />
          </div>

          {/* Main headline */}
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-8"
          >
            Sẵn sàng ứng dụng AI{" "}
            <span className="text-viettel-red">vào công việc hằng ngày?</span>
          </h2>

          {/* Urgency flags */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Clock size={14} className="text-white/70" />
              <span className="text-sm text-white/80 font-medium">
                Hạn đăng ký: 15/05/2026
              </span>
            </div>
            <div className="flex items-center gap-2 bg-viettel-red/20 border border-viettel-red/30 rounded-full px-4 py-2">
              <Users size={14} className="text-viettel-red" />
              <span className="text-sm text-white/90 font-semibold">
                Số lượng tham gia có giới hạn
              </span>
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 px-10 py-5 bg-viettel-red hover:bg-viettel-red-dark text-white font-extrabold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 group"
            aria-label="Cuộn xuống form đăng ký khóa học"
          >
            Đăng ký tham gia khóa học ngay
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>

          {/* Micro copy */}
          <p className="mt-5 text-sm text-white/40">
            Miễn phí — Dành cho CBCNV BQLDA — 16/05/2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
