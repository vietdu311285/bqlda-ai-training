"use client";

import { motion } from "framer-motion";
import { Cpu, FileText, Search, Zap } from "lucide-react";

const benefits = [
  {
    icon: Cpu,
    title: "Sử dụng thành thạo AI trong công việc hàng ngày",
    desc: "Ứng dụng ChatGPT, Gemini, Claude để xử lý công việc nhanh hơn và hiệu quả hơn mỗi ngày.",
  },
  {
    icon: FileText,
    title: "Tạo slide và báo cáo chuyên nghiệp bằng AI",
    desc: "Tạo tài liệu đúng nhận diện thương hiệu Viettel — nhanh, chuẩn format, sẵn sàng trình bày.",
  },
  {
    icon: Search,
    title: "Nghiên cứu và sáng tạo nội dung hiệu quả",
    desc: "Tra cứu, tổng hợp và phân tích thông tin bằng AI — rút ngắn thời gian nghiên cứu đáng kể.",
  },
  {
    icon: Zap,
    title: "Tự động hóa nghiệp vụ",
    desc: "Ứng dụng Claude Skill, Claude Code và NetAgent để tối ưu tác vụ lặp lại trong công việc.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BenefitsSection() {
  return (
    <section
      id="noi-dung"
      className="section-padding bg-white"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Kết quả học tập
            </span>
          </div>
          <h2
            id="benefits-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight"
          >
            Sau khóa học, học viên có thể làm được gì?
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className="card-hover group bg-white rounded-xl border border-brand-gray4 overflow-hidden shadow-enterprise cursor-default"
              aria-labelledby={`benefit-${title.slice(0, 20)}`}
            >
              {/* Red top accent */}
              <div className="h-1 bg-viettel-red" aria-hidden />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-brand-gray4 group-hover:bg-red-50 flex items-center justify-center mb-5 transition-colors duration-200">
                  <Icon
                    size={22}
                    className="text-viettel-red"
                    aria-hidden
                  />
                </div>
                <h3
                  id={`benefit-${title.slice(0, 20)}`}
                  className="text-lg font-bold text-brand-black mb-3 leading-snug"
                >
                  {title}
                </h3>
                <p className="text-sm text-brand-gray1 leading-relaxed">{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
