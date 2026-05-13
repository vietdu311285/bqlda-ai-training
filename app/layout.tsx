import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Đào Tạo AI Cho BQLDA | Viettel Networks",
  description:
    "Chương trình đào tạo nội bộ AI thực chiến dành cho CBCNV Ban Quản lý Dự án. Làm chủ ChatGPT, Gemini, Claude trong công việc hàng ngày. Thứ 7, 16/05/2026.",
  keywords:
    "đào tạo AI, BQLDA, Viettel, ChatGPT, Gemini, Claude, tự động hóa, AI doanh nghiệp",
  authors: [{ name: "Nguyễn Viết Dự", url: "mailto:Dunv@viettel.com.vn" }],
  openGraph: {
    title: "Đào Tạo AI Cho BQLDA | Viettel Networks",
    description:
      "Chương trình đào tạo nội bộ AI thực chiến. Thứ 7, 16/05/2026 | 8:30 – 12:00 | Tòa nhà Thái Bình & Zoom",
    type: "website",
    locale: "vi_VN",
    siteName: "BQLDA AI Training",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đào Tạo AI Cho BQLDA | Viettel Networks",
    description:
      "Chương trình đào tạo nội bộ AI thực chiến dành cho CBCNV BQLDA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
