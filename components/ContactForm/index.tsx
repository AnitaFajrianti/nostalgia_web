"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";

type FieldName = "name" | "email" | "project" | "message";
type FormErrors = Partial<Record<FieldName, string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const project = String(formData.get("project") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (name.length < 2) {
      nextErrors.name = "Nama wajib diisi (minimal 2 karakter).";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Masukkan alamat email dengan format yang benar.";
    }

    if (!project) {
      nextErrors.project = "Pilih jenis proyek yang ingin dikonsultasikan.";
    }

    if (message.length < 10) {
      nextErrors.message = "Ceritakan kebutuhan proyek (minimal 10 karakter).";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const whatsappMessage = [
      "Halo, Nostalgia.Kala! Saya ingin menanyakan proyek.",
      "",
      `Nama: ${name}`,
      ...(email ? [`Email: ${email}`] : []),
      `Jenis proyek: ${project}`,
      `Kebutuhan: ${message}`,
    ].join("\n");
    const whatsappWindow = window.open(getWhatsAppUrl(whatsappMessage), "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(getWhatsAppUrl(whatsappMessage));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div className="mb-8 border-b border-[var(--line)] pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--terracotta)]">
          Formulir kebutuhan proyek
        </p>
        <h2 className="mt-3 font-bold text-[var(--brown)]">
          Ceritakan kebutuhan proyekmu.
        </h2>
        <p className="mt-3 text-sm text-[var(--brown-light)]">
          Isi detail singkat di bawah. Pesan akan dibuka di WhatsApp agar bisa
          kamu periksa dan kirim sendiri.
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
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--brown-light)]/60 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          )}
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
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--brown-light)]/60 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-2 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="project" className="text-sm font-medium text-[var(--brown)]">
          Jenis proyek
        </label>
        <select
          id="project"
          name="project"
          aria-invalid={Boolean(errors.project)}
          aria-describedby={errors.project ? "project-error" : undefined}
          className="mt-2 w-full border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
          defaultValue=""
        >
          <option value="" disabled>
            Pilih jenis proyek
          </option>
          <option value="Capture - Foto dan video">Capture - Foto dan video</option>
          <option value="Create - Penyuntingan dan produksi konten">
            Create - Penyuntingan dan produksi konten
          </option>
          <option value="Design - Identitas visual dan media sosial">
            Design - Identitas visual dan media sosial
          </option>
          <option value="Foto produk">Foto produk</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        {errors.project && (
          <p id="project-error" role="alert" className="mt-2 text-sm text-red-700">
            {errors.project}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-[var(--brown)]">
          Ceritakan tentang proyekmu
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Apa yang sedang kamu rencanakan?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y border border-[var(--line)] bg-[var(--cream)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--brown-light)]/60 focus:border-[var(--terracotta)] focus:ring-2 focus:ring-[var(--terracotta)]/15"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
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
