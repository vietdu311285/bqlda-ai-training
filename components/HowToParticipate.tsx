"use client";

import { motion } from "framer-motion";
import { ClipboardList, Laptop, Users, Upload, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Đăng ký tham gia",
    desc: "Điền form đăng ký trước 15/05/2026.",
    deadline: "Hạn: 15/05/2026",
  },
  {
    number: "02",
    icon: Laptop,
    title: "Chuẩn bị công cụ",
    desc: "Mang laptop và chuẩn bị sẵn tài khoản AI như Gemini, Claude, Canva.",
    deadline: "Trước ngày học",
  },
  {
    number: "03",
    icon: Users,
    title: "Tham gia học & thực hành",
    desc: "Tham gia trực tiếp tại Tòa nhà Thái Bình hoặc qua Zoom.",
    deadline: "16/05/2026 — 8:30",
  },
  {
    number: "04",
    icon: Upload,
    title: "Nộp bài đầu ra",
    desc: "Nộp slide AI hoặc landing page để được AI chấm điểm.",
    deadline: "Sau buổi học",
  },
];

export default function HowToParticipate() {
  const scrollToForm = () => {
    const el = document.querySelector("#dang-ky");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="steps-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Hướng dẫn tham gia
            </span>
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
          </div>
          <h2
            id="steps-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black"
          >
            Tham gia khóa học chỉ với 4 bước
          </h2>
        </motion.div>

        {/* Desktop timeline — horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-[28px] left-[10%] right-[10%] h-px"
              aria-hidden
            >
              <div className="w-full h-full bg-brand-gray3" />
              <div className="absolute inset-0 bg-gradient-to-r from-viettel-red to-transparent w-1/4" />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Step circle */}
                    <div
                      className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-2 mb-5 ${
                        i === 0
                          ? "bg-viettel-red border-viettel-red text-white"
                          : "bg-white border-brand-gray3 text-brand-gray1"
                      }`}
                    >
                      <Icon size={22} aria-hidden />
                    </div>

                    <span className="text-3xl font-black text-brand-gray4 mb-2 leading-none">
                      {step.number}
                    </span>
                    <h3 className="text-base font-bold text-brand-black mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-gray1 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    <span className="text-xs font-semibold text-viettel-red bg-red-50 px-2.5 py-1 rounded-full">
                      {step.deadline}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile timeline — vertical */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-4 bottom-4 w-px bg-brand-gray3"
              aria-hidden
            />
            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute -left-10 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        i === 0
                          ? "bg-viettel-red border-viettel-red text-white"
                          : "bg-white border-brand-gray3 text-brand-gray1"
                      }`}
                    >
                      <Icon size={14} aria-hidden />
                    </div>

                    <div className="bg-brand-gray4 rounded-xl p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-base font-bold text-brand-black leading-snug">
                          {step.title}
                        </h3>
                        <span className="text-2xl font-black text-brand-gray3 flex-shrink-0">
                          {step.number}
                        </span>
                      </div>
                      <p className="text-sm text-brand-gray1 leading-relaxed mb-3">
                        {step.desc}
                      </p>
                      <span className="text-xs font-semibold text-viettel-red bg-red-50 px-2.5 py-1 rounded-full">
                        {step.deadline}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-14"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 bg-viettel-red hover:bg-viettel-red-dark text-white font-bold text-base rounded-md shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            Đăng ký ngay hôm nay để không bỏ lỡ
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="mt-3 text-sm text-brand-gray2">
            Hạn đăng ký: <strong className="text-brand-gray1">15/05/2026</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
