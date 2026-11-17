import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "K3L Hub — Portal Edukasi Keselamatan, Kesehatan Kerja & Lingkungan",
    template: "%s — K3L Hub",
  },
  description:
    "K3L Hub adalah portal edukasi K3L: bangun budaya kerja yang aman, sehat, dan produktif melalui materi regulasi, kasus, dan cara penanganan yang interaktif.",
  keywords: [
    "K3L",
    "K3",
    "keselamatan kerja",
    "kesehatan kerja",
    "lingkungan kerja",
    "edukasi K3",
    "manajemen risiko",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex flex-1 flex-col pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
