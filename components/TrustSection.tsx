"use client";

import { motion } from "framer-motion";
import { Award, Shield, Star } from "lucide-react";

export default function TrustSection() {
  return (
    <section
      className="bg-brand-gray4 py-16 lg:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge visual */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-enterprise mb-6 relative">
            <Award size={36} className="text-viettel-red" />
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-viettel-red flex items-center justify-center">
              <Star size={12} className="text-white fill-white" />
            </div>
          </div>

          <h2
            id="trust-heading"
            className="text-2xl lg:text-3xl font-bold text-brand-black mb-4"
          >
            Chứng nhận hoàn thành khóa học
          </h2>
          <p className="text-base lg:text-lg text-brand-gray1 max-w-2xl mx-auto leading-relaxed">
            Chứng nhận hoàn thành khóa học nội bộ sau khi đạt yêu cầu đầu ra.
          </p>

          {/* Credential strip */}
          <div className="mt-10 inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-5 shadow-enterprise border border-brand-gray4">
            {[
              { icon: Award, label: "Chứng nhận nội bộ", sub: "Viettel Networks" },
              { icon: Shield, label: "Đánh giá đầu ra", sub: "AI chấm điểm" },
              { icon: Star, label: "Thực hành thực tế", sub: "Dự án thật" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-10 h-10 rounded-xl bg-brand-gray4 flex items-center justify-center">
                  <Icon size={18} className="text-viettel-red" />
                </div>
                <span className="text-sm font-semibold text-brand-dark">{label}</span>
                <span className="text-xs text-brand-gray2">{sub}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
