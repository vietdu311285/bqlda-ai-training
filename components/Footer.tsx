"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-brand-black py-16 lg:py-20"
      aria-label="Footer"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-viettel-red rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
                  <path
                    d="M3 6h18M3 12h12M3 18h8"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight tracking-wide">
                  VIETTEL
                </div>
                <div className="text-[10px] font-medium text-white/40 leading-tight tracking-widest uppercase">
                  Networks
                </div>
              </div>
            </div>

            <div className="mb-2">
              <div className="text-sm font-semibold text-white/90">
                Ban Quản lý Dự án
              </div>
              <div className="text-xs text-white/50">
                Bộ phận Chuyển đổi số
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mt-3 max-w-xs">
              Đào tạo AI thực chiến cho công việc hàng ngày.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
              Liên hệ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-viettel-red" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Hotline</div>
                  <a
                    href="tel:0966666568"
                    className="text-sm font-semibold text-white hover:text-viettel-red transition-colors"
                  >
                    0966.666.568
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-viettel-red" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Email</div>
                  <a
                    href="mailto:Dunv@viettel.com.vn"
                    className="text-sm font-semibold text-white hover:text-viettel-red transition-colors"
                  >
                    Dunv@viettel.com.vn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-viettel-red" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Địa điểm</div>
                  <span className="text-sm text-white/80">
                    Tòa nhà Thái Bình &amp; Zoom
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick info */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
              Thông tin khóa học
            </h3>
            <div className="space-y-3">
              {[
                { label: "Ngày học", value: "Thứ 7, 16/05/2026" },
                { label: "Thời gian", value: "8:30 – 12:00" },
                { label: "Hạn đăng ký", value: "15/05/2026" },
                { label: "Giảng viên", value: "Nguyễn Viết Dự" },
                { label: "Hình thức", value: "Offline + Zoom" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xs text-white/40 w-28 flex-shrink-0">{label}</span>
                  <span className="text-sm text-white/80 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} Ban Quản lý Dự án — Viettel Networks. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs text-white/20">
            Chương trình đào tạo AI nội bộ
          </p>
        </div>
      </div>
    </footer>
  );
}
