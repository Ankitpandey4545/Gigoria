 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ✅ Yeh import hona chahiye
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gigoria – Powering Growth. Securing Futures.",
  description: "Expert financial guidance for businesses.",
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
        <main className="pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  );
}