"use client";

import type { FormEvent } from "react";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "628111187077";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Nama", formData.get("name")],
      ["Email", formData.get("email")],
      ["Jenis project", formData.get("project")],
      ["Pesan", formData.get("message")],
    ].filter(([, value]) => typeof value === "string" && value.trim());

    const message = [
      "Halo, Nostalgia.Kala! Saya ingin menanyakan project.",
      "",
      ...fields.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="mb-8 border-b border-[var(--line)] pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--terracotta)]">
          Project inquiry
        </p>
        <h2 className="mt-3 font-bold text-[var(--brown)]">
          Tell us about your project.
        </h2>
        <p className="mt-3 text-sm text-[var(--brown-light)]">
          Isi detail singkat di bawah. Pesan akan diteruskan ke WhatsApp.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-[var(--brown)]">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nama lengkap"
            className="mt-2 w-full border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--brown-light)]/60 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-[var(--brown)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            className="mt-2 w-full border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--brown-light)]/60 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
          />
        </div>
      </div>

      <div>
        <label htmlFor="project" className="text-sm font-medium text-[var(--brown)]">
          Jenis project
        </label>
        <select
          id="project"
          name="project"
          className="mt-2 w-full border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
          defaultValue=""
        >
          <option value="" disabled>
            Pilih jenis project
          </option>
          <option value="Branding">Branding</option>
          <option value="Digital">Digital</option>
          <option value="Creative">Creative</option>
          <option value="Campaign">Campaign</option>
          <option value="Other">Lainnya</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-[var(--brown)]">
          Ceritakan tentang project-mu
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Apa yang sedang kamu rencanakan?"
          className="mt-2 w-full resize-y border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--brown-light)]/60 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-3 bg-[var(--terracotta)] px-6 py-4 text-sm font-semibold text-[var(--cream-light)] transition hover:bg-[var(--terracotta-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)] sm:w-auto"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Kirim via WhatsApp
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
