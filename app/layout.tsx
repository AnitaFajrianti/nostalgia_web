import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nostalgia.Kala",
  description: "Nostalgia.Kala — Event Documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />

        <main>{children}</main>

        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}