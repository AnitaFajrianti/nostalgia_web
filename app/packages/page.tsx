import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

const packages = [
  {
    number: "01",
    name: "Starter",
    description: "Untuk kebutuhan proyek yang lebih sederhana dan terarah.",
  },
  {
    number: "02",
    name: "Professional",
    description: "Untuk proyek dengan kebutuhan yang lebih lengkap.",
  },
  {
    number: "03",
    name: "Custom",
    description: "Solusi yang disesuaikan dengan kebutuhan dan skala proyek.",
  },
];

const packageDetails = [
  {
    label: "Cakupan layanan",
    value:
      "Capture (foto dan video), Create (penyuntingan dan produksi konten), atau Design (desain visual dan media sosial). Pilihan layanan per paket dikonfirmasi setelah konsultasi.",
  },
  {
    label: "Jumlah hasil",
    value: "Belum ditentukan; disesuaikan dan dicantumkan dalam penawaran.",
  },
  {
    label: "Format hasil",
    value: "Belum ditentukan; disepakati sesuai kebutuhan penggunaan.",
  },
  {
    label: "Estimasi pengerjaan",
    value: "Dikonfirmasi setelah kebutuhan dan jadwal proyek dibahas.",
  },
  {
    label: "Batas revisi",
    value: "Belum ditentukan; dicantumkan dalam penawaran sebelum proyek dimulai.",
  },
  {
    label: "Termasuk dan tidak termasuk",
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
              Paket
            </p>

            <h1 className="type-hero font-semibold text-[var(--brown)]">
              Solusi kreatif sesuai kebutuhanmu.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Pilihan Paket
            </p>
            <h2 className="mt-4 font-semibold text-[var(--brown)]">
              Pilih titik awal untuk kebutuhan visualmu.
            </h2>
          </div>
          <p className="text-[var(--brown-light)] md:col-span-7">
            Setiap proyek memiliki kebutuhan berbeda. Konsultasikan kebutuhan
            terlebih dahulu agar cakupan layanan, hasil, jadwal, dan penawaran
            dapat disepakati dengan jelas sebelum pekerjaan dimulai.
          </p>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Pilih Paket
            </p>
            <h2 className="font-bold text-[var(--brown)]">
              Tiga opsi yang disesuaikan dengan kebutuhan proyek.
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
              Cakupan &amp; Hasil Pekerjaan
            </p>
            <h2 className="mt-4 font-bold text-[var(--brown)]">
              Detail paket dikonfirmasi sebelum proyek dimulai.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--brown-light)]">
              Informasi spesifik yang belum tersedia tidak kami tetapkan
              sepihak. Minta penawaran untuk memperoleh ruang lingkup tertulis
              sesuai kebutuhan.
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
              Proyek Khusus
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
            alt="Sesi foto potret untuk kebutuhan fotografi"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <CTA />
    </main>
  );
}
