"use client";

import { motion } from "framer-motion";
import { Presentation, BookOpen, GitBranch } from "lucide-react";

const demos = [
  {
    icon: Presentation,
    title: "Tạo slide bằng AI",
    desc: "Từ một đoạn mô tả, AI tạo ra bộ slide hoàn chỉnh đúng format thương hiệu Viettel — tiêu đề, nội dung, bố cục — trong vài giây.",
    tags: ["PowerPoint", "Canva AI", "Gemini", "Claude"],
    visual: <SlideVisual />,
  },
  {
    icon: BookOpen,
    title: "Tra cứu & nghiên cứu bằng AI",
    desc: "AI tổng hợp thông tin từ nhiều nguồn, phân tích dữ liệu và tạo báo cáo tóm tắt nhanh — giúp tiết kiệm hàng giờ tìm kiếm thủ công.",
    tags: ["ChatGPT", "Perplexity", "Gemini", "Claude"],
    visual: <ResearchVisual />,
  },
  {
    icon: GitBranch,
    title: "Tự động hóa nghiệp vụ bằng AI",
    desc: "Xây dựng workflow tự động: từ nhập dữ liệu, tạo báo cáo đến gửi thông báo — không cần lập trình, chỉ cần mô tả yêu cầu bằng ngôn ngữ tự nhiên.",
    tags: ["Claude Code", "NetAgent", "n8n", "Zapier"],
    visual: <AutomationVisual />,
  },
];

export default function DemoSection() {
  return (
    <section
      className="section-padding bg-brand-gray4"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-viettel-red" aria-hidden />
            <span className="text-xs font-semibold tracking-[0.2em] text-viettel-red uppercase">
              Demo thực tế
            </span>
          </div>
          <h2
            id="demo-heading"
            className="text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight"
          >
            AI ứng dụng vào công việc như thế nào?
          </h2>
        </motion.div>

        {/* Alternating blocks */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {demos.map(({ icon: Icon, title, desc, tags, visual }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-enterprise flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-viettel-red" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-brand-gray2 uppercase">
                    Use case {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-black mb-4 leading-tight">
                  {title}
                </h3>
                <p className="text-base text-brand-gray1 leading-relaxed mb-6">
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-brand-gray1 border border-brand-gray3 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                {visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideVisual() {
  const slides = [
    { title: "Tổng quan dự án Q2/2026", tag: "Slide 1" },
    { title: "KPI & Tiến độ thực hiện", tag: "Slide 2" },
    { title: "Đề xuất & Kế hoạch", tag: "Slide 3" },
  ];
  return (
    <div className="bg-brand-dark rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
        <span className="text-xs text-white/30 font-mono ml-2">AI Slide Generator</span>
      </div>
      <div className="space-y-2">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`rounded-lg border flex items-center gap-3 p-3 ${
              i === 0
                ? "bg-viettel-red/10 border-viettel-red/30"
                : "bg-white/5 border-white/10"
            }`}
          >
            <div className="w-16 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
              <div className="space-y-1">
                <div className="w-10 h-1 bg-white/50 rounded-full" />
                <div className="w-7 h-1 bg-white/30 rounded-full" />
                <div className="w-8 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-white/80 font-medium truncate">{s.title}</div>
              <div className="text-[10px] text-white/40 mt-0.5">{s.tag}</div>
            </div>
            {i === 0 && (
              <div className="w-2 h-2 rounded-full bg-viettel-red flex-shrink-0 animate-pulse" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-3">
        <div className="text-[10px] text-white/40 font-mono mb-1">Prompt</div>
        <div className="text-xs text-white/70 font-mono leading-relaxed">
          "Tạo 10 slide báo cáo dự án Q2 theo format Viettel, bao gồm KPI..."
        </div>
      </div>
    </div>
  );
}

function ResearchVisual() {
  return (
    <div className="bg-brand-dark rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
        <span className="text-xs text-white/30 font-mono ml-2">AI Research Assistant</span>
      </div>
      <div className="space-y-3">
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <div className="text-[10px] text-white/40 font-mono mb-2">Câu hỏi nghiên cứu</div>
          <div className="text-xs text-white/80 font-mono">"Xu hướng AI trong quản lý dự án xây dựng 2025-2026?"</div>
        </div>
        <div className="flex gap-2 text-[10px] text-white/50 font-mono">
          <span className="text-green-400">✓</span>
          <span>Đang phân tích 47 nguồn tài liệu...</span>
        </div>
        {[
          { pct: 92, label: "Độ tin cậy nguồn" },
          { pct: 85, label: "Độ phủ thông tin" },
          { pct: 78, label: "Tính cập nhật" },
        ].map(({ pct, label }) => (
          <div key={label}>
            <div className="flex justify-between text-[10px] text-white/50 mb-1">
              <span>{label}</span>
              <span className="text-green-400">{pct}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <div className="text-[10px] text-green-400 font-mono mb-1">Kết quả tóm tắt</div>
          <div className="text-xs text-white/70 font-mono leading-relaxed">
            "AI đang được ứng dụng vào 73% dự án xây dựng lớn tại Đông Nam Á, tập trung vào lập lịch, giám sát và báo cáo tự động..."
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationVisual() {
  const steps = [
    { label: "Nhập dữ liệu Excel", color: "bg-blue-500" },
    { label: "AI phân tích & xử lý", color: "bg-purple-500" },
    { label: "Tạo báo cáo tự động", color: "bg-viettel-red" },
    { label: "Gửi qua email/Slack", color: "bg-green-500" },
  ];
  return (
    <div className="bg-brand-dark rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
        <span className="text-xs text-white/30 font-mono ml-2">Workflow Automation</span>
      </div>
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-[18px] top-5 bottom-5 w-px bg-white/10" aria-hidden />
        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3 relative">
              <div
                className={`w-9 h-9 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 text-white text-xs font-bold z-10`}
              >
                {i + 1}
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                <div className="text-xs text-white/80 font-medium">{step.label}</div>
                <div className="text-[10px] text-white/40 mt-0.5 font-mono">
                  {i === 0 && "trigger: file_upload"}
                  {i === 1 && "agent: claude-sonnet"}
                  {i === 2 && "output: pdf_report"}
                  {i === 3 && "notify: team_channel"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
        <span className="text-xs text-green-400 font-semibold">Workflow hoạt động</span>
        <span className="text-[10px] text-green-400/70 font-mono">Tiết kiệm ~3h/tuần</span>
      </div>
    </div>
  );
}
