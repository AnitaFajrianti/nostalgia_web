import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

const captureProjects = [
  {
    slug: "project-one",
    title: "Sesi Foto Pranikah",
    category: "Fotografi Pranikah",
    description:
      "Rangkaian foto pranikah yang menampilkan momen dan karakter pasangan.",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    alt: "Foto pranikah pasangan dengan hijab dan jas hitam elegan",
  },
  {
    slug: "project-two",
    title: "Dokumentasi Pernikahan",
    category: "Fotografi Pernikahan",
    description:
      "Dokumentasi prosesi, pasangan, dan momen kebersamaan dalam pernikahan.",
    image: "/images/wedding-porto/jasa-fotografer-wedding-intimate-bogor.jpg",
    alt: "Dokumentasi pernikahan intim di Bogor",
  },
  {
    slug: "basket",
    title: "Dokumentasi Pertandingan Basket",
    category: "Fotografi Olahraga",
    description:
      "Foto aksi pertandingan, detail permainan, dan kebersamaan tim basket.",
    image: "/images/basket-porto/foto-konseptual-pemain-basket-monokrom.jpg",
    alt: "Foto konseptual pemain basket dalam gaya monokrom",
  },
  {
    slug: "sedja",
    title: "Foto Produk Sedja",
    category: "Fotografi Produk",
    description:
      "Foto produk Sedja dengan berbagai komposisi, detail, dan model.",
    image: "/images/foto sedja-porto/detail-produk-botol-herbal-background-daun-14.jpg",
    alt: "Botol produk herbal Sedja dengan latar daun",
  },
  {
    slug: "kemerdekaan",
    title: "Dokumentasi Lomba Kemerdekaan",
    category: "Fotografi Acara",
    description:
      "Dokumentasi kegiatan dan lomba anak dalam perayaan Kemerdekaan.",
    image:
      "/images/kemerdekaan-dokumentasi/peserta-anak-mengikuti-lomba-09.jpg",
    alt: "Peserta anak mengikuti lomba dalam perayaan Kemerdekaan",
  },
  {
    slug: "malam-kemerdekaan",
    title: "Dokumentasi Malam Kemerdekaan",
    category: "Fotografi Acara",
    description:
      "Dokumentasi suasana, peserta, dan kegiatan dalam acara Malam Kemerdekaan.",
    image:
      "/images/Malam-kemerdekaan/dokumentasi-pengunjung-di-area-kegiatan-malam.jpg",
    alt: "Pengunjung di area kegiatan Malam Kemerdekaan",
  },
];

const createProject = {
  slug: "17an",
  title: "Semarak Kemerdekaan",
  category: "Video Acara · Produksi dan Penyuntingan Video",
  description:
    "Video dokumentasi acara 17an yang mengabadikan suasana dan momen kebersamaan.",
  video: "/videos/portfolio-17an.mp4",
};

const serviceGroups = [
  {
    name: "Capture",
    description: "Dokumentasi foto dan video untuk momen dan acara.",
  },
  {
    name: "Create",
    description: "Penyuntingan video dan produksi konten dari materi visual.",
  },
  {
    name: "Design",
    description: "Desain visual dan media sosial untuk kebutuhan komunikasi.",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] bg-[var(--cream)] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Portofolio Kami
            </p>

            <h1 className="type-hero font-bold text-[var(--brown)]">
              Karya visual untuk momen dan ide yang bermakna.
            </h1>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Layanan Kami
            </p>
            <h2 className="mt-4 font-semibold text-[var(--brown)]">
              Tiga cara kami mengolah cerita menjadi visual.
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {serviceGroups.map((service, index) => (
              <article
                key={service.name}
                className="bg-[var(--cream-light)] p-7 md:p-9"
              >
                <span className="text-sm text-[var(--brown-light)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-semibold text-[var(--brown)]">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--brown-light)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURE PROJECTS */}
      <section className="bg-[var(--cream)] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 border-b border-[var(--line)] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Capture
              </p>
              <h2 className="mt-3 font-semibold text-[var(--brown)]">
                Foto &amp; dokumentasi
              </h2>
            </div>
            <p className="max-w-lg text-sm text-[var(--brown-light)]">
              Pilihan karya fotografi dari sesi pranikah, pernikahan,
              pertandingan olahraga, dan fotografi produk.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {captureProjects.map((project, index) => (
              <article key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <PhotoImage
                    src={project.image}
                    alt={project.alt}
                    className="aspect-[4/3] transition duration-500 group-hover:opacity-90"
                  />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-[var(--terracotta)]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-semibold text-[var(--brown)]">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--brown-light)]">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brown-light)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="mt-4 inline-block border-b border-[var(--terracotta)] pb-1 text-sm text-[var(--terracotta)]">
                    Lihat hasil fotografi →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CREATE PROJECT */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Create
            </p>
            <h2 className="mt-3 font-semibold text-[var(--brown)]">
              Produksi &amp; penyuntingan video
            </h2>
          </div>

          <article className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <video
                autoPlay
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={createProject.title}
                className="aspect-[16/9] w-full bg-[var(--brown)] object-contain"
              >
                <source src={createProject.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutar video.
              </video>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--terracotta)]">
                {createProject.category}
              </p>
              <h3 className="mt-3 font-semibold text-[var(--brown)]">
                {createProject.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--brown-light)]">
                {createProject.description}
              </p>
              <Link
                href={`/portfolio/${createProject.slug}`}
                className="mt-6 inline-block border-b border-[var(--terracotta)] pb-1 text-sm text-[var(--terracotta)]"
              >
                Lihat detail video →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* DESIGN */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Design
            </p>
            <h2 className="mt-3 font-semibold text-[var(--brown)]">
              Desain visual &amp; media sosial
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl leading-relaxed text-[var(--brown-light)]">
              Layanan desain visual dan media sosial tersedia. Contoh hasil
              desain belum dipublikasikan di portofolio ini.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block border-b border-[var(--terracotta)] pb-1 text-sm text-[var(--terracotta)] transition hover:text-[var(--terracotta-dark)]"
            >
              Diskusikan kebutuhan desain →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
