"use client";

import Link from "next/link";
import { ArrowUp, Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { contactDetails, getWhatsAppUrl } from "@/lib/contact";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--cream)] px-6 text-[var(--brown)] md:px-10">
      <div className="mx-auto max-w-7xl py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))]">
          <div>
            <Link
              href="/"
              className="font-display text-3xl font-semibold tracking-[-0.04em] md:text-4xl"
            >
              Nostalgia.Kala
            </Link>

            <p className="mt-6 max-w-sm leading-relaxed text-[var(--brown-light)]">
              Abadikan momen, ciptakan konten, dan rancang visual yang bermakna.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <Camera size={17} strokeWidth={2} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <MessageCircle size={17} strokeWidth={2} />
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                aria-label="Email"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <Mail size={17} strokeWidth={2} />
              </a>
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="text-[var(--brown)] transition hover:text-[var(--terracotta)]"
              >
                <MapPin size={17} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Layanan
            </p>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-[var(--brown-light)]">
              <li>
                <span className="font-medium text-[var(--brown)]">Capture</span>
                <span className="mt-1 block">Foto dan video acara</span>
              </li>
              <li>
                <span className="font-medium text-[var(--brown)]">Create</span>
                <span className="mt-1 block">Penyuntingan video dan konten</span>
              </li>
              <li>
                <span className="font-medium text-[var(--brown)]">Design</span>
                <span className="mt-1 block">Media sosial dan desain visual</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Jelajahi
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-[var(--brown-light)]">
              <Link href="/portfolio" className="transition hover:text-[var(--terracotta)]">Portofolio</Link>
              <Link href="/packages" className="transition hover:text-[var(--terracotta)]">Paket</Link>
              <Link href="/blog" className="transition hover:text-[var(--terracotta)]">Jurnal</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Perusahaan
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-[var(--brown-light)]">
              <Link href="/about" className="transition hover:text-[var(--terracotta)]">Tentang Kami</Link>
              <Link href="/why-us" className="transition hover:text-[var(--terracotta)]">Mengapa Kami</Link>
              <Link href="/contact" className="transition hover:text-[var(--terracotta)]">Kontak</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Kontak
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--brown-light)]">
              <a href={`mailto:${contactDetails.email}`} className="transition hover:text-[var(--terracotta)]">
                Kirim Email
              </a>
              <a
                href={getWhatsAppUrl("Halo, Nostalgia.Kala! Saya ingin mendapatkan informasi lebih lanjut.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--terracotta)]"
              >
                WhatsApp
              </a>
              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--terracotta)]"
              >
                Instagram
              </a>
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--terracotta)]"
              >
                Lokasi di Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[var(--line)] pt-6 text-xs text-[var(--brown-light)] sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Nostalgia.Kala. Hak cipta dilindungi.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
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