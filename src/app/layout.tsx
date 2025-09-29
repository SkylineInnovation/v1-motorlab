import type { Metadata } from "next";
import { El_Messiri, Cairo } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { BookingProvider } from "../context/BookingContext";

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  variable: "--font-el-messiri",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "600", "700", "900"],
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
  // Log font variables to verify they're loaded correctly
  console.log('Cairo font variable:', cairo.variable);
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${elMessiri.variable} ${cairo.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <BookingProvider>
            {children}
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
