import CTA from "@/components/CTA";

const clientNeeds = [
  "Sudah punya raw footage tetapi tidak punya waktu atau tenaga untuk mengolahnya.",
  "Membutuhkan Reels atau social media content dengan hasil yang lebih polished.",
  "Membutuhkan design untuk memperkuat visual brand.",
  "Membutuhkan dokumentasi event sekaligus hasil edit yang siap dipublikasikan.",
  "Ingin mendapatkan hasil visual yang lebih premium tanpa harus membangun tim kreatif sendiri.",
];

export default function WhyUsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] px-6 py-24">
        <div className="mx-auto flex min-h-[50vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Why Nostalgia.Kala
            </p>

            <h1 className="type-hero font-bold">
              Why Nostalgia Exists?
            </h1>
          </div>
        </div>
      </section>

      {/* WHY NOSTALGIA EXISTS */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Kebutuhan Klien
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="mb-12 text-base leading-relaxed">
              Banyak momen dan konten sebenarnya sudah dimiliki oleh klien,
              tetapi belum tentu sudah menjadi sesuatu yang siap digunakan atau
              memiliki nilai visual yang kuat.
            </p>

            <p className="mb-4 text-sm uppercase tracking-[0.15em] text-[var(--brown-light)]">
              Ada klien yang:
            </p>

            <div>
              {clientNeeds.map((need, index) => (
                <div
                  key={need}
                  className="grid gap-3 border-t border-[var(--line)] py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <span className="text-sm text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{need}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR ROLE */}
      <section className="bg-[var(--brown)] px-6 py-24 text-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--cream)]/60">
              Our Role
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-bold">
              Nostalgia hadir untuk menjembatani kebutuhan tersebut.
            </h2>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
