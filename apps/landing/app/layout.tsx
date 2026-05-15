import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trueqi — Marketplace Estudiantil Colombia",
  description:
    "Compra, vende e intercambia: libros, tutorías, tecnología y servicios entre estudiantes colombianos. Sin comisiones. 100% seguro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={sora.variable}>
      <body className="font-sora antialiased">{children}</body>
    </html>
  );
}
