"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustBadges = [
  "Thực hành trực tiếp",
  "Có tài liệu hướng dẫn",
  "Có chứng nhận hoàn thành nội bộ",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="gioi-thieu"
      className="relative bg-white overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28"
      aria-labelledby="hero-headline"
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
        aria-hidden
      >
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="280" stroke="#E30613" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" stroke="#E30613" strokeWidth="1" />
          <circle cx="300" cy="300" r="120" stroke="#E30613" strokeWidth="1" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="#E30613" strokeWidth="0.5" />
          <line x1="300" y1="20" x2="300" y2="580" stroke="#E30613" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-6 h-px bg-viettel-red" aria-hidden />
              <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
                Đào tạo nội bộ | AI cho BQLDA
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              id="hero-headline"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-black leading-[1.1] tracking-tight mb-6 text-balance"
            >
              Làm chủ AI trong công việc —{" "}
              <span className="text-viettel-red">
                Từ tạo slide, báo cáo đến tự động hóa nghiệp vụ thực tế
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-base lg:text-lg text-brand-gray1 leading-relaxed mb-8 max-w-xl"
            >
              Chương trình đào tạo nội bộ dành cho CBCNV BQLDA.{" "}
              <span className="font-semibold text-brand-dark">
                Thứ 7, 16/05/2026 | 8:30 – 12:00
              </span>{" "}
              | Tòa nhà Thái Bình &amp; Zoom
            </motion.p>

            {/* Trust badges */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3 mb-10"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm font-medium text-brand-gray1"
                >
                  <CheckCircle2 size={16} className="text-viettel-red flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => scrollTo("#dang-ky")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-viettel-red hover:bg-viettel-red-dark text-white font-semibold text-base rounded-md transition-all duration-200 shadow-sm hover:shadow-md group"
                aria-label="Đăng ký giữ chỗ tham gia khóa học AI"
              >
                Giữ chỗ tham gia khóa học
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#noi-dung")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border-2 border-brand-gray3 hover:border-brand-gray2 text-brand-dark font-semibold text-base rounded-md transition-all duration-200"
              >
                Xem nội dung chương trình
                <ChevronDown size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <AIClassroomVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AIClassroomVisual() {
  return (
    <div className="relative">
      {/* Main frame */}
      <div className="relative bg-brand-dark rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
        {/* Screen background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1f1f2e] to-[#0d0d1a]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-black/30 flex items-center px-4 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" aria-hidden />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" aria-hidden />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" aria-hidden />
          <span className="ml-3 text-[10px] text-white/40 font-mono">
            AI Workspace — Claude · Gemini · ChatGPT
          </span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 top-8 p-5 flex flex-col gap-3">
          {/* Prompt input */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-viettel-red flex-shrink-0 flex items-center justify-center mt-0.5">
              <span className="text-white text-[9px] font-bold">AI</span>
            </div>
            <div className="flex-1">
              <div className="text-[11px] text-white/40 mb-1 font-mono">You</div>
              <div className="text-[12px] text-white/90 leading-relaxed font-mono">
                Tạo slide báo cáo tuần cho BQLDA, gồm KPI, tiến độ dự án và đề xuất...
              </div>
            </div>
          </div>

          {/* AI response */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1 overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-bold">C</span>
              </div>
              <span className="text-[11px] text-white/40 font-mono">Claude</span>
              <span className="ml-auto text-[9px] text-green-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                Đang tạo...
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                "# Báo cáo tuần BQLDA — Tuần 19/2026",
                "## 1. Tóm tắt KPI",
                "- Tiến độ tổng thể: **87%** ✅",
                "- Công việc hoàn thành: 24/28 tasks",
                "## 2. Dự án trọng điểm",
              ].map((line, i) => (
                <div
                  key={i}
                  className={`text-[11px] font-mono leading-relaxed ${
                    line.startsWith("#") ? "text-blue-300" : "text-white/70"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom tools */}
          <div className="flex gap-2">
            {["ChatGPT", "Gemini", "Claude"].map((tool) => (
              <div
                key={tool}
                className="flex-1 bg-white/5 border border-white/10 rounded-md py-1.5 text-center"
              >
                <span className="text-[10px] font-semibold text-white/60">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge — date */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-enterprise px-4 py-3 border border-brand-gray4"
      >
        <div className="text-[10px] font-semibold text-brand-gray2 uppercase tracking-wide mb-0.5">
          Ngày học
        </div>
        <div className="text-sm font-bold text-brand-black">16/05/2026</div>
        <div className="text-xs text-brand-gray2">8:30 – 12:00</div>
      </motion.div>

      {/* Floating badge — participants */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute -top-4 -right-4 bg-viettel-red rounded-xl shadow-lg px-4 py-3"
      >
        <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wide mb-0.5">
          Hình thức
        </div>
        <div className="text-sm font-bold text-white">Offline + Zoom</div>
        <div className="text-xs text-white/70">Tòa nhà Thái Bình</div>
      </motion.div>
    </div>
  );
}
