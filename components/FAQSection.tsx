"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Khóa học diễn ra khi nào?",
    a: "Thứ 7, ngày 16/05/2026 từ 8:30 đến 12:00. Thời lượng 3,5 giờ bao gồm phần lý thuyết, thực hành và thảo luận nhóm.",
  },
  {
    q: "Hình thức học như thế nào?",
    a: "Blended Learning: kết hợp học trực tiếp tại Tòa nhà Thái Bình và học online qua Zoom. Học viên đăng ký hình thức tham gia khi điền form.",
  },
  {
    q: "Có yêu cầu đầu vào không?",
    a: "Học viên cần mang laptop cá nhân và chuẩn bị sẵn tài khoản AI cơ bản như Gemini (Google), Claude (Anthropic) hoặc ChatGPT. Không yêu cầu kiến thức lập trình hay kinh nghiệm AI trước đó.",
  },
  {
    q: "Có bài tập đầu ra không?",
    a: "Có. Sau khóa học, học viên cần nộp một trong hai sản phẩm: (1) Bộ slide AI về một chủ đề công việc thực tế hoặc (2) Landing page đơn giản được tạo bằng AI. Bài sẽ được AI chấm điểm tự động.",
  },
  {
    q: "Có chứng nhận hoàn thành không?",
    a: "Có. Học viên hoàn thành bài đầu ra và đạt điểm yêu cầu sẽ nhận chứng nhận hoàn thành khóa học nội bộ, được xác nhận bởi Ban Quản lý Dự án — Bộ phận Chuyển đổi số.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Câu hỏi thường gặp
            </span>
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
          </div>
          <h2
            id="faq-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black"
          >
            FAQ
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="divide-y divide-brand-gray4"
          role="list"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className="py-5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span
                    className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-viettel-red" : "text-brand-black group-hover:text-viettel-red"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
                      isOpen
                        ? "bg-viettel-red border-viettel-red"
                        : "bg-white border-brand-gray3 group-hover:border-viettel-red"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={14} className="text-white" aria-hidden />
                    ) : (
                      <Plus
                        size={14}
                        className="text-brand-gray1 group-hover:text-viettel-red transition-colors"
                        aria-hidden
                      />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 pr-10">
                        <p className="text-sm text-brand-gray1 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Contact nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-brand-gray2">
            Còn câu hỏi khác?{" "}
            <a
              href="tel:0966666568"
              className="text-viettel-red font-semibold hover:underline"
            >
              Gọi 0966.666.568
            </a>{" "}
            hoặc{" "}
            <a
              href="mailto:Dunv@viettel.com.vn"
              className="text-viettel-red font-semibold hover:underline"
            >
              gửi email
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
