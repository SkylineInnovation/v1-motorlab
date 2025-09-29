import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MotorLab - مركز فحص السيارات الشامل",
  description: "مركز متخصص في فحص المركبات بأحدث التقنيات وأعلى المعايير العالمية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoSansArabic.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
