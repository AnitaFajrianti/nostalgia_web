"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

const WhatsAppWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="fixed bottom-3 right-4 z-[60] sm:bottom-4 sm:right-8">
      {isExpanded ? (
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6281901604670"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[68px] items-center gap-3 border border-[var(--terracotta)] bg-[var(--terracotta)] px-3 py-2 text-[var(--cream-light)] shadow-[0_10px_30px_rgba(72,44,32,0.18)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--terracotta-dark)]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--cream-light)] text-[var(--terracotta)]">
              <span className="relative flex items-center justify-center">
                <MessageCircle size={29} strokeWidth={1.8} />
                <Phone
                  size={13}
                  strokeWidth={2}
                  className="absolute"
                  aria-hidden="true"
                />
              </span>
            </span>
            <span className="flex flex-col whitespace-nowrap text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cream-light)]/75">
                Nostalgia.Kala
              </span>
              <span className="mt-0.5 text-sm font-semibold">
                Hubungi WhatsApp
              </span>
            </span>
          </a>
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Kecilkan tombol WhatsApp"
            className="flex h-8 w-8 items-center justify-center border border-[var(--line)] bg-[var(--cream-light)] text-[var(--brown-light)] shadow-sm transition hover:bg-[var(--beige)] hover:text-[var(--brown)]"
          >
            <X size={16} strokeWidth={1.8} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label="Tampilkan tombol Hubungi WhatsApp"
          className="flex h-[68px] w-[68px] items-center justify-center border border-[var(--terracotta)] bg-[var(--terracotta)] text-[var(--cream-light)] shadow-[0_10px_30px_rgba(72,44,32,0.18)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--terracotta-dark)]"
        >
          <span className="relative flex items-center justify-center">
            <MessageCircle size={34} strokeWidth={1.8} />
            <Phone
              size={15}
              strokeWidth={2}
              className="absolute"
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </aside>
  );
};

export default WhatsAppWidget;
