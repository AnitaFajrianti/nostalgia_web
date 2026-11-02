import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

const packages = [
  {
    number: "01",
    name: "Starter",
    description: "Untuk kebutuhan project yang lebih sederhana dan terarah.",
  },
  {
    number: "02",
    name: "Professional",
    description: "Untuk project dengan kebutuhan yang lebih lengkap.",
  },
  {
    number: "03",
    name: "Custom",
    description: "Solusi yang disesuaikan dengan kebutuhan dan skala project.",
  },
];

const packageDetails = [
  {
    label: "Cakupan layanan",
    value:
      "Capture (foto dan video), Create (editing dan produksi konten), atau Design (desain visual dan media sosial). Pilihan layanan per paket dikonfirmasi setelah konsultasi.",
  },
  {
    label: "Jumlah output",
    value: "Belum ditentukan; disesuaikan dan dicantumkan dalam penawaran.",
  },
  {
    label: "Format hasil",
    value: "Belum ditentukan; disepakati sesuai kebutuhan penggunaan.",
  },
  {
    label: "Estimasi pengerjaan",
    value: "Dikonfirmasi setelah brief dan jadwal project dibahas.",
  },
  {
    label: "Batas revisi",
    value: "Belum ditentukan; dicantumkan dalam penawaran sebelum project dimulai.",
  },
  {
    label: "Termasuk / tidak termasuk",
    value:
      "Rincian belum tersedia. Semua layanan, kebutuhan produksi, dan item di luar cakupan akan dikonfirmasi dalam penawaran.",
  },
];

export default function PackagesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Packages
            </p>

            <h1 className="type-hero font-semibold text-[var(--brown)]">
              Creative solutions built around your needs.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Packages
            </p>
            <h2 className="mt-4 font-semibold text-[var(--brown)]">
              Pilih titik awal untuk kebutuhan visualmu.
            </h2>
          </div>
          <p className="text-[var(--brown-light)] md:col-span-7">
            Setiap project memiliki kebutuhan berbeda. Konsultasikan brief
            terlebih dahulu agar cakupan layanan, output, jadwal, dan penawaran
            dapat disepakati dengan jelas sebelum pekerjaan dimulai.
          </p>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Choose Your Package
            </p>
            <h2 className="font-bold text-[var(--brown)]">
              Tiga opsi, disesuaikan dengan kebutuhan project.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col border border-[var(--line)] bg-[var(--cream-light)] p-7 md:p-8"
              >
                <span className="text-sm text-[var(--brown-light)]">
                  {item.number}
                </span>
                <h3 className="mt-8 font-semibold text-[var(--brown)]">
                  {item.name}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-[var(--brown-light)]">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-[var(--line)] pt-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--brown-light)]">
                    Harga
                  </p>
                  <p className="mt-2 font-medium text-[var(--brown)]">
                    Minta penawaran
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center border border-[var(--terracotta)] px-5 py-3 text-sm font-medium text-[var(--terracotta)] transition hover:bg-[var(--terracotta)] hover:text-[var(--cream-light)]"
                >
                  Konsultasikan Kebutuhan →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE DETAILS */}
      <section className="border-y border-[var(--line)] bg-[var(--cream-light)] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Scope &amp; Deliverables
            </p>
            <h2 className="mt-4 font-bold text-[var(--brown)]">
              Detail paket dikonfirmasi sebelum project dimulai.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--brown-light)]">
              Informasi spesifik yang belum tersedia tidak kami tetapkan
              sepihak. Minta penawaran untuk memperoleh ruang lingkup tertulis
              sesuai brief.
            </p>
          </div>

          <dl className="md:col-span-8">
            {packageDetails.map((detail, index) => (
              <div
                key={detail.label}
                className={`grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 ${
                  index === 0 ? "border-y" : "border-b"
                } border-[var(--line)]`}
              >
                <dt className="text-sm font-medium text-[var(--brown)]">
                  {detail.label}
                </dt>
                <dd className="text-sm leading-relaxed text-[var(--brown-light)]">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CUSTOM PROJECT */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 bg-[var(--beige)] p-6 sm:p-10 md:grid-cols-[1fr_0.8fr] md:items-center md:p-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--brown-light)]">
              Custom Project
            </p>
            <h2 className="mt-5 max-w-3xl font-bold text-[var(--brown)]">
              Punya kebutuhan yang berbeda?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--brown-light)]">
              Ceritakan kebutuhan Capture, Create, atau Design yang ingin kamu
              kerjakan bersama Nostalgia.Kala.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex border border-[var(--brown)] px-6 py-3 text-sm font-medium text-[var(--brown)] transition hover:bg-[var(--brown)] hover:text-[var(--cream-light)]"
            >
              Minta Penawaran →
            </Link>
          </div>
          <PhotoImage
            src="/images/portrait-photography.jpg"
            alt="Sesi portrait untuk kebutuhan fotografi"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <CTA />
    </main>
  );
}
