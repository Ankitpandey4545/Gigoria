 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer"; // ✅ Footer imported

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gigoria – Powering Growth. Securing Futures.",
  description: "Expert financial guidance for businesses. Fast approvals, customized solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* ✅ Footer global hai - har page pe dikhega */}
      </body>
    </html>
  );
}