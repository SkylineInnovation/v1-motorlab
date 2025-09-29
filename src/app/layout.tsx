import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  variable: "--font-el-messiri",
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
        className={`${elMessiri.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
