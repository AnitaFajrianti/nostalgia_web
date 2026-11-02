import CTA from "@/components/CTA";
import Link from "next/link";

const missions = [
  {
    number: "01",
    title: "Capture",
    description:
      "Mendokumentasikan acara dan sesi melalui foto maupun video. Contoh yang tersedia mencakup sesi pranikah, pernikahan, pertandingan basket, dan video Semarak Kemerdekaan.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Mengolah materi visual menjadi video yang lebih terarah melalui pemilihan momen, penyusunan alur, penyuntingan, dan pengolahan warna sesuai arahan.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Menyusun kebutuhan visual untuk merek dan media sosial, seperti konten feed, karusel, materi promosi, dan pengumuman acara. Contoh hasil desain belum ditampilkan di portofolio.",
  },
];

const capabilities = [
  {
    title: "CAPTURE",
    description:
      "Fotografi pranikah, pernikahan, olahraga, serta dokumentasi video acara.",
  },
  {
    title: "CREATE",
    description:
      "Penyuntingan video, rangkuman acara, konten media sosial, dan pengolahan rekaman.",
  },
  {
    title: "DESIGN",
    description:
      "Visual media sosial, feed, karusel, materi promosi, dan pengumuman acara.",
  },
];

const selectedWorks = [
  {
    href: "/portfolio/project-one",
    title: "Sesi Foto Pranikah",
    type: "Capture · Fotografi",
  },
  {
    href: "/portfolio/project-two",
    title: "Dokumentasi Pernikahan",
    type: "Capture · Fotografi",
  },
  {
    href: "/portfolio/basket",
    title: "Dokumentasi Pertandingan Basket",
    type: "Capture · Fotografi",
  },
  {
    href: "/portfolio/17an",
    title: "Semarak Kemerdekaan",
    type: "Create · Video acara",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Tentang Nostalgia.Kala
            </p>

            <h1 className="type-hero font-semibold text-[var(--brown)]">
              Nostalgia.Kala adalah studio kreatif untuk foto, video, dan
              desain visual.
            </h1>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Posisi Kami
            </p>
          </div>

          <div>
            <p className="text-[var(--brown-light)]">
              Nostalgia.Kala adalah studio kreatif yang bekerja melalui tiga
              layanan utama: Capture, Create, dan Design. Kami mendukung
              kebutuhan dokumentasi foto-video, penyuntingan dan produksi konten,
              serta desain visual dan media sosial.
            </p>

            <p className="mt-6 text-[var(--brown-light)]">
              Kebutuhan dapat dimulai dari merekam sebuah momen, mengolah
              rekaman yang sudah dimiliki, atau menyiapkan materi visual untuk
              komunikasi merek. Lingkup dan hasil akhir dibahas berdasarkan
              arahan setiap proyek.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Yang Kami Kerjakan
            </p>

            <h2 className="font-semibold text-[var(--brown)]">
              Tiga layanan untuk kebutuhan visual yang berbeda.
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="bg-[var(--cream-light)] p-8 md:p-10"
              >
                <span className="text-sm text-[var(--brown-light)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-10 font-semibold text-[var(--brown)]">
                  {capability.title}
                </h3>

                <p className="mt-4 text-[var(--brown-light)]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}
          <div className="mb-20 max-w-3xl md:mb-28">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[var(--terracotta)]">
              Visi &amp; Misi
            </p>

            <h2 className="font-semibold text-[var(--brown)]">
              Arah yang kami tuju.
            </h2>
          </div>

          {/* VISION */}
          <div className="grid gap-10 border-y border-[var(--line)] py-12 md:grid-cols-12 md:gap-12 md:py-16">
            <div className="md:col-span-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--terracotta)] md:text-sm">
                Visi
              </span>
            </div>

            <div className="md:col-span-9">
              <p className="type-lead max-w-4xl font-[family-name:var(--font-serif)] font-medium text-[var(--brown)]">
                Menjadi studio kreatif yang membantu mengubah momen dan ide
                menjadi visual bermakna melalui Capture, Create, dan Design.
              </p>
            </div>
          </div>

          {/* MISSION HEADER */}
          <div className="mt-24 flex items-end justify-between gap-6 md:mt-32">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Misi
              </p>

              <h3 className="font-semibold text-[var(--brown)]">
                Tiga layanan utama kami.
              </h3>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.15em] text-[var(--brown-light)] md:block">
              01 — 03
            </span>
          </div>

          {/* MISSION GRID */}
          <div className="mt-12 grid gap-px bg-[var(--line)] md:grid-cols-3">
            {missions.map((mission) => (
              <article
                key={mission.number}
                className="group bg-[var(--cream-light)] p-8 transition-colors duration-300 hover:bg-[var(--beige)] md:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-[family-name:var(--font-serif)] text-4xl font-medium leading-none text-[var(--terracotta)] md:text-5xl">
                    {mission.number}
                  </span>

                  <span className="text-[var(--terracotta)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <div className="mt-16 max-w-md">
                  <h4 className="font-semibold text-[var(--brown)]">
                    {mission.title}
                  </h4>

                  <p className="mt-5 text-[var(--brown-light)]">
                    {mission.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Karya Pilihan
              </p>
              <h2 className="mt-4 font-semibold text-[var(--brown)]">
                Karya yang tersedia untuk dilihat.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-[var(--line)]">
                {selectedWorks.map((work) => (
                  <Link
                    key={work.href}
                    href={work.href}
                    className="flex flex-col gap-2 border-b border-[var(--line)] py-5 transition hover:text-[var(--terracotta)] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium">{work.title}</span>
                    <span className="text-sm text-[var(--brown-light)]">
                      {work.type} ↗
                    </span>
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--brown-light)]">
                Contoh pekerjaan Design belum dipublikasikan di portofolio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}