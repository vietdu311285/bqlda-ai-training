"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Code2, Users } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "03 năm kinh nghiệm AI thực chiến" },
  { icon: Code2, label: "Triển khai Claude Code, NetAgent" },
  { icon: Award, label: "Chuyên gia tối ưu quy trình nghiệp vụ" },
  { icon: Users, label: "Đào tạo AI ứng dụng doanh nghiệp" },
];

export default function InstructorSection() {
  return (
    <section
      id="giang-vien"
      className="section-padding bg-white"
      aria-labelledby="instructor-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Đội ngũ giảng dạy
            </span>
          </div>
          <h2
            id="instructor-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black"
          >
            Giảng viên chương trình
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-gray4 to-brand-gray3 aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Abstract portrait background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8]" />

              {/* Decorative shapes */}
              <div
                className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-brand-dark/90 to-transparent"
                aria-hidden
              />
              <div
                className="absolute top-6 right-6 w-20 h-20 rounded-full border border-viettel-red/20"
                aria-hidden
              />
              <div
                className="absolute top-10 right-10 w-12 h-12 rounded-full border border-viettel-red/10"
                aria-hidden
              />

              {/* Silhouette / Avatar placeholder */}
              <div className="absolute inset-0 flex items-center justify-center pb-16">
                <InstructorAvatar />
              </div>

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xl font-extrabold text-white mb-1">
                  Nguyễn Viết Dự
                </div>
                <div className="text-sm text-white/70 font-medium">
                  Kỹ sư giải pháp nghiệp vụ
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-viettel-red/90 rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-xs font-semibold text-white">
                    Ban Quản lý Dự án — Viettel Networks
                  </span>
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-xl shadow-enterprise border border-brand-gray4 px-4 py-3 max-w-[180px]">
              <div className="text-xs font-semibold text-brand-gray2 mb-1">
                Chuyên môn
              </div>
              <div className="text-sm font-bold text-brand-black">
                AI ứng dụng thực chiến
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-sm font-semibold text-viettel-red mb-2">
              Kinh nghiệm AI thực chiến 03 năm
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-black mb-5 leading-tight">
              Nguyễn Viết Dự
            </h3>
            <p className="text-base text-brand-gray1 leading-relaxed mb-8">
              Chuyên triển khai ứng dụng AI vào thực tế công việc, tối ưu quy
              trình nghiệp vụ và đào tạo AI ứng dụng cho môi trường doanh
              nghiệp. Là người trực tiếp xây dựng các công cụ tự động hóa bằng
              Claude Code và NetAgent tại BQLDA.
            </p>

            <div className="space-y-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-brand-gray4 rounded-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-viettel-red" />
                  </div>
                  <span className="text-sm font-medium text-brand-dark">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InstructorAvatar() {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-52"
      aria-label="Ảnh đại diện giảng viên"
    >
      {/* Head */}
      <ellipse cx="80" cy="65" rx="32" ry="36" fill="#c8a882" />
      {/* Hair */}
      <ellipse cx="80" cy="44" rx="34" ry="22" fill="#3a2a1a" />
      {/* Neck */}
      <rect x="68" y="95" width="24" height="20" rx="4" fill="#c8a882" />
      {/* Shirt/jacket */}
      <path
        d="M20 200 C20 150 50 130 68 115 L80 125 L92 115 C110 130 140 150 140 200 Z"
        fill="#1a2840"
      />
      {/* Tie */}
      <path
        d="M76 115 L80 125 L84 115 L82 118 L80 145 L78 118 Z"
        fill="#E30613"
      />
      {/* Collar */}
      <path d="M68 115 L80 125 L92 115 L88 110 L80 120 L72 110 Z" fill="white" />
      {/* Eyes */}
      <ellipse cx="68" cy="63" rx="5" ry="6" fill="#2c1a0e" />
      <ellipse cx="92" cy="63" rx="5" ry="6" fill="#2c1a0e" />
      <circle cx="70" cy="61" r="2" fill="white" />
      <circle cx="94" cy="61" r="2" fill="white" />
      {/* Glasses */}
      <rect x="61" y="57" width="16" height="12" rx="6" fill="none" stroke="#888" strokeWidth="1.5" />
      <rect x="83" y="57" width="16" height="12" rx="6" fill="none" stroke="#888" strokeWidth="1.5" />
      <line x1="77" y1="63" x2="83" y2="63" stroke="#888" strokeWidth="1.5" />
      {/* Smile */}
      <path d="M70 80 Q80 88 90 80" stroke="#7a5535" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
