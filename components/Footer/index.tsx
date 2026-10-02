"use client";

import Link from "next/link";
import { ArrowUp, Camera, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--cream)] px-6 text-[var(--brown)] md:px-10">
      <div className="mx-auto max-w-7xl py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-[-0.04em] md:text-4xl"
            >
              Nostalgia.Kala
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--brown-light)]">
              Mengabadikan cerita, emosi, dan detail kecil dari setiap acara.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/studionostalgia.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <Camera size={17} strokeWidth={2} />
              </a>
              <a
                href="https://wa.me/6281901604670"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <MessageCircle size={17} strokeWidth={2} />
              </a>
              <a
                href="mailto:hello@nostalgia.com"
                aria-label="Email"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <Mail size={17} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
              Explore
            </h2>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-[var(--brown-light)]">
              <Link href="/portfolio" className="transition hover:text-[var(--terracotta)]">Portfolio</Link>
              <Link href="/packages" className="transition hover:text-[var(--terracotta)]">Packages</Link>
              <Link href="/blog" className="transition hover:text-[var(--terracotta)]">Journal</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
              Company
            </h2>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-[var(--brown-light)]">
              <Link href="/about" className="transition hover:text-[var(--terracotta)]">About Us</Link>
              <Link href="/why-us" className="transition hover:text-[var(--terracotta)]">Why Us</Link>
              <Link href="/contact" className="transition hover:text-[var(--terracotta)]">Contact</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
              Support
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--brown-light)]">
              <a href="mailto:hello@nostalgia.com" className="transition hover:text-[var(--terracotta)]">
                Email Us
              </a>
              <a
                href="https://wa.me/6281901604670?text=Halo%2C%20Nostalgia%20Kala.%20Saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--terracotta)]"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/studionostalgia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--terracotta)]"
              >
                Instagram
              </a>
              <span>Indonesia</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[var(--line)] pt-6 text-xs text-[var(--brown-light)] sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Nostalgia.Kala. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center bg-[var(--brown)] text-[var(--cream)] transition hover:-translate-y-1"
          >
            <ArrowUp size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;