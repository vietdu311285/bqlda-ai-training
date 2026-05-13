"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Trần Thị Minh Anh",
    role: "Chuyên viên Kế hoạch",
    dept: "BQLDA — Viettel Networks",
    quote:
      "Sau khóa học tôi đã giảm đáng kể thời gian làm báo cáo tuần. Những gì trước đây mất 2-3 tiếng, giờ chỉ cần 30 phút với AI.",
    initials: "MA",
    color: "bg-blue-500",
  },
  {
    name: "Nguyễn Hữu Phát",
    role: "Kỹ sư dự án",
    dept: "BQLDA — Viettel Networks",
    quote:
      "AI giúp tôi tạo slide nhanh và đúng format doanh nghiệp hơn. Mỗi tuần tiết kiệm được ít nhất 4-5 giờ so với làm thủ công.",
    initials: "NP",
    color: "bg-green-600",
  },
  {
    name: "Lê Thị Hương Giang",
    role: "Chuyên viên Truyền thông",
    dept: "BQLDA — Viettel Networks",
    quote:
      "Tôi bắt đầu ứng dụng AI vào công việc hằng ngày ngay sau buổi học. Cách giảng viên hướng dẫn rất thực tế và dễ áp dụng ngay.",
    initials: "HG",
    color: "bg-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
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
              Phản hồi học viên
            </span>
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black"
          >
            Học viên nói gì về khóa học?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-hover bg-white rounded-2xl border border-brand-gray4 p-7 shadow-enterprise"
              aria-label={`Nhận xét từ ${t.name}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 sao">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                    aria-hidden
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                size={24}
                className="text-viettel-red mb-4 opacity-60"
                aria-hidden
              />

              {/* Quote text */}
              <blockquote className="text-base text-brand-dark leading-relaxed mb-6 font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-brand-gray4">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}
                  aria-hidden
                >
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-black">{t.name}</div>
                  <div className="text-xs text-brand-gray2">{t.role}</div>
                  <div className="text-xs text-brand-gray2">{t.dept}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
