"use client";

import { motion } from "framer-motion";
import {
  MonitorPlay,
  BookOpen,
  LayoutTemplate,
  MessageSquareText,
  HeartHandshake,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: MonitorPlay,
    title: "Thực hành trực tiếp với AI tools",
    desc: "Thực hành ngay trong buổi học với ChatGPT, Gemini và Claude.",
  },
  {
    icon: BookOpen,
    title: "Bộ tài liệu hướng dẫn",
    desc: "Tài liệu đầy đủ để ôn tập và ứng dụng sau khóa học.",
  },
  {
    icon: LayoutTemplate,
    title: "Slide mẫu chuẩn thương hiệu",
    desc: "Bộ template slide đúng nhận diện thương hiệu Viettel sẵn dùng.",
  },
  {
    icon: MessageSquareText,
    title: "Template prompt thực tế",
    desc: "Thư viện prompt đã được kiểm chứng cho các tác vụ BQLDA.",
  },
  {
    icon: HeartHandshake,
    title: "Hỗ trợ sau khóa học",
    desc: "Kênh hỗ trợ để giải đáp thắc mắc khi ứng dụng thực tế.",
  },
  {
    icon: Award,
    title: "Chứng nhận hoàn thành nội bộ",
    desc: "Chứng nhận chính thức từ BQLDA khi đạt yêu cầu đầu ra.",
  },
];

export default function StudentBenefits() {
  return (
    <section
      id="quyen-loi"
      className="section-padding bg-brand-gray4"
      aria-labelledby="student-benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Quyền lợi
            </span>
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
          </div>
          <h2
            id="student-benefits-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black"
          >
            Quyền lợi khi tham gia chương trình
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-hover bg-white rounded-xl p-6 shadow-enterprise border border-white"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-gray4 flex items-center justify-center mb-4">
                <Icon size={20} className="text-viettel-red" aria-hidden />
              </div>
              <h3 className="text-sm font-bold text-brand-black mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-brand-gray2 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
