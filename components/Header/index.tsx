"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = pathname === "/";

  const navLinkClass = isHome
    ? "text-sm text-white/85 transition hover:text-white"
    : "text-sm text-[var(--brown)]/80 transition hover:text-[var(--terracotta)]";

  const borderClass = isHome
    ? "border-white/60"
    : "border-[var(--brown)]/40";

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Packages", href: "/packages" },
    { label: "Why Us", href: "/why-us" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`absolute inset-x-0 top-0 z-50 ${
          isHome ? "text-white" : "text-[var(--brown)]"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex min-h-24 items-center justify-between gap-6">
            {/* LOGO */}
            <Link
              href="/"
              className="shrink-0 font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-[-0.04em] md:text-4xl"
            >
              Nostalgia.Kala
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-6 lg:flex">
              {mobileLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <Link
              href="/contact"
              className={`hidden shrink-0 border px-5 py-3 text-sm transition sm:inline-flex ${borderClass} ${
                isHome
                  ? "hover:bg-white hover:text-[var(--brown)]"
                  : "bg-[var(--terracotta)] text-white hover:bg-[var(--terracotta-dark)]"
              }`}
            >
              Let's Talk
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-px w-6 ${
                    isHome ? "bg-white" : "bg-[var(--brown)]"
                  }`}
                />
                <span
                  className={`block h-px w-6 ${
                    isHome ? "bg-white" : "bg-[var(--brown)]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--cream)] text-[var(--brown)] lg:hidden">
          {/* MOBILE HEADER */}
          <div className="flex h-[96px] items-center justify-between border-b border-[var(--brown)]/10 px-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-[-0.04em]"
            >
              Nostalgia.Kala
            </Link>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="group flex h-11 w-11 items-center justify-center"
            >
              <span className="relative block h-6 w-6">
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--brown)] transition-transform duration-200 group-hover:rotate-[135deg]" />

                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[var(--brown)] transition-transform duration-200 group-hover:-rotate-[135deg]" />
              </span>
            </button>
          </div>

          {/* MENU CONTENT */}
          <div className="flex min-h-[calc(100vh-96px)] flex-col px-6 py-5">
            <nav className="flex flex-col">
              {mobileLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex min-h-[64px] items-center px-5 text-[17px] transition ${
                      isActive
                        ? "rounded-xl bg-[var(--beige)] text-[var(--brown)]"
                        : "text-[var(--brown)] hover:text-[var(--terracotta)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="mt-auto pt-6">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-14 w-full items-center justify-center bg-[var(--terracotta)] text-sm font-medium text-white transition hover:bg-[var(--terracotta-dark)]"
              >
                Let's Talk →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;