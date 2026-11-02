import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import PortfolioGallery from "@/components/PortfolioGallery";

type Project = {
  title: string;
  category: string;
  image?: string;
  video?: string;
  description: string;
  services: string[];
  gallery: string[];
  preserveGalleryAspectRatio?: boolean;
};

const preweddingGallery = [
  {
    src: "/images/prewed-porto/foto-prewedding-kasual-pasangan-jaket-kuning.jpg",
    alt: "Foto pranikah kasual pasangan dengan jaket kuning",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-vespa-vintage-outdoor.jpg",
    alt: "Foto pranikah dengan Vespa bergaya vintage di luar ruang",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-hitam-putih-estetik.jpg",
    alt: "Foto pranikah hitam putih",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-pose-candid-danau-alam.jpg",
    alt: "Foto pranikah spontan di danau dan alam",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-lamaran.jpg",
    alt: "Foto pranikah saat lamaran",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-elegan-pasangan.jpg",
    alt: "Foto pranikah pasangan dengan gaya elegan",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    alt: "Foto pranikah dengan hijab dan jas hitam elegan",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-santai-duduk-di-taman.jpg",
    alt: "Foto pranikah dengan pasangan duduk santai di taman",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-close-up-senyum-pasangan.jpg",
    alt: "Foto jarak dekat senyum pasangan",
  },
];

const weddingGallery = [
  {
    src: "/images/wedding-porto/jasa-fotografer-wedding-intimate-bogor.jpg",
    alt: "Dokumentasi wedding intimate di Bogor",
  },
  {
    src: "/images/wedding-porto/dokumentasi-akad-bogor.jpg",
    alt: "Dokumentasi prosesi akad nikah di Bogor",
  },
  {
    src: "/images/wedding-porto/dokumentasi-momen-haru-ijab-kabul-pernikahan-bogor.jpg",
    alt: "Momen haru ijab kabul pernikahan di Bogor",
  },
  {
    src: "/images/wedding-porto/foto-akad-nikah-pengantin-pria-busana-putih.jpg",
    alt: "Pengantin pria dalam prosesi akad nikah",
  },
  {
    src: "/images/wedding-porto/foto-pasangan-pengantin-akad-nikah.jpg",
    alt: "Pasangan pengantin setelah akad nikah",
  },
  {
    src: "/images/wedding-porto/foto-pasangan-pengantin.jpg",
    alt: "Pasangan pengantin",
  },
  {
    src: "/images/wedding-porto/foto-prosesi-ijab-kabul-akad-nikah.jpg",
    alt: "Prosesi ijab kabul dalam akad nikah",
  },
  {
    src: "/images/wedding-porto/foto-prosesi-sungkeman-akad-nikah.jpg",
    alt: "Prosesi sungkeman setelah akad nikah",
  },
  {
    src: "/images/wedding-porto/jasa-foto-akad-nikah-pengantin.jpg",
    alt: "Fotografi akad nikah dan pengantin",
  },
  {
    src: "/images/wedding-porto/jasa-fotografer-pernikahan-pasangan-pengantin-bogor.jpg",
    alt: "Fotografer pernikahan pasangan pengantin di Bogor",
  },
  {
    src: "/images/wedding-porto/vendor-foto-pernikahan-momen-romantis-pengantin-bogor.jpg",
    alt: "Momen romantis pasangan pengantin di Bogor",
  },
];

const basketGallery = [
  "foto-dokumentasi-pertandingan-basket.jpg",
  "foto-pemain-basket-memegang-bola.jpg",
  "aksi-pemain-basket-di-lapangan.jpg",
  "pemain-basket-berlatih-dribble.jpg",
  "foto-aksi-pertandingan-basket.jpg",
  "pemain-basket-melakukan-shooting.jpg",
  "foto-konseptual-pemain-basket-monokrom.jpg",
  "duel-pemain-basket-di-lapangan.jpg",
  "aksi-pemain-basket-merebut-bola.jpg",
  "close-up-bola-basket-saat-bermain.jpg",
  "foto-tim-basket-bersama.jpg",
  "pemain-basket-melakukan-layup.jpg",
  "rebutan-bola-di-pertandingan-basket.jpg",
  "bola-basket-menuju-ring.jpg",
  "dokumentasi-kegiatan-olahraga-basket.jpg",
  "foto-aksi-pemain-basket.jpg",
  "pemain-basket-melakukan-shooting-ring.jpg",
].map((filename) => `/images/basket-porto/${filename}`);

const sedjaGallery = [
  "detail-botol-produk-herbal-background-meja-07.jpg",
  "detail-kemasan-botol-produk-15.jpg",
  "detail-produk-botol-dengan-background-laptop-17.jpg",
  "detail-produk-botol-herbal-background-daun-14.jpg",
  "foto-koleksi-produk-herbal-outdoor-12.jpg",
  "foto-produk-botol-di-depan-laptop-16.jpg",
  "foto-produk-botol-herbal-background-alam-03.jpg",
  "foto-produk-herbal-tiga-varian-09.jpg",
  "foto-promosi-produk-herbal-dua-model-05.jpg.JPG",
  "model-memegang-botol-produk-herbal-10.jpg",
  "model-wanita-dengan-koleksi-produk-11.jpg",
  "model-wanita-memegang-produk-botol-08.jpg",
  "produk-botol-herbal-bersama-model-04.jpg",
  "produk-botol-herbal-dipegang-model-02.jpg",
  "produk-botol-minuman-herbal-model-outdoor-01.jpg",
  "produk-herbal-dipegang-dua-tangan-13.jpg",
  "produk-herbal-dua-varian-bersama-model-06.jpg",
].map((filename) => `/images/foto sedja-porto/${filename}`);

const kemerdekaanGallery = [
  "aktivitas-anak-mengikuti-perlombaan-05.jpg",
  "dokumentasi-kegiatan-anak-festival-01.jpg",
  "dokumentasi-kendaraan-kegiatan-event-03.jpg",
  "dokumentasi-panitia-event-anak-07.jpg",
  "dokumentasi-pengunjung-event-anak-10.jpg",
  "kegiatan-anak-bersama-orang-tua-11.jpg",
  "kegiatan-anak-bersama-peserta-event-08.jpg",
  "kegiatan-festival-bersama-peserta-06.jpg",
  "kegiatan-interaksi-anak-dan-panitia-04.jpg",
  "kegiatan-lomba-anak-festival-02.jpg",
  "peserta-anak-mengikuti-lomba-09.jpg",
].map((filename) => `/images/kemerdekaan-dokumentasi/${filename}`);

const malamKemerdekaanGallery = [
  "dokumentasi-potret-peserta-kegiatan.jpg",
  "dokumentasi-aktivitas-di-area-panggung.jpg",
  "dokumentasi-anak-mengikuti-kegiatan-acara.jpg",
  "dokumentasi-pembagian-hadiah-peserta-acara.jpg",
  "dokumentasi-pembicara-di-area-panggung.jpg",
  "dokumentasi-pembicara-di-atas-panggung-acara.jpg",
  "dokumentasi-pengoperasian-laptop-saat-acara.jpg",
  "dokumentasi-pengunjung-di-area-kegiatan-kala.jpg",
  "dokumentasi-pengunjung-di-area-kegiatan-malam.jpg",
  "dokumentasi-pengunjung-di-area-kegiatan.jpg",
  "dokumentasi-pengunjung-di-samping-panggung.jpg",
  "dokumentasi-peserta-perempuan-saat-acara.jpg",
  "dokumentasi-sambutan-pembicara-kegiatan.jpg",
  "interaksi-peserta-dan-pengunjung-acara.jpg",
  "pembicara-menyampaikan-materi-di-panggung.jpg",
  "pembicara-menyampaikan-sambutan-di-panggung.jpg",
  "penampilan-pembicara-di-panggung-kegiatan.jpg",
  "pengunjung-mengikuti-acara-dengan-antusias.jpg",
  "pengunjung-menyaksikan-kegiatan-bersama.jpg",
  "pengunjung-perempuan-menghadiri-kegiatan.jpg",
  "penyerahan-hadiah-kepada-peserta-kegiatan.jpg",
  "suasana-panggung-dan-dekorasi-acara.jpg",
  "suasana-panggung-saat-kegiatan-berlangsung.jpg",
  "suasana-pengunjung-di-area-acara.jpg",
].map((filename) => `/images/Malam-kemerdekaan/${filename}`);

const greecioGallery = [
  "koleksi-seragam-kerja (1).jpg",
  "jaket-biru-denim-corduroy-tampak-samping-3-4.jpg",
  "jaket-biru-kotak-kotak-flanel-tampak-depan.jpg",
  "jasa-bikin-jersey-esport-custom.jpg",
  "jasa-bikin-kemeja-hitam-lengan-panjang.jpg",
  "jasa-jersey-esport-custom.jpg",
  "jersey-dryfit-brazil-hitam-tampak-belakang.jpg",
  "Kemeja-kerja-warna-navy-wanita-vendor.jpg",
  "kemeja-toray-navy-tampak-depan.jpg",
  "kemeja-twill-sweading-stretch-detail-kerah.jpg",
  "polo-tosca-slim-polo-tampak-depan.jpg",
  "rompi-safety-taslan-milky-warna-abu-tampak-depan.jpg",
  "rompi-safety-verlando-cp-american-drill-tampak-depan.jpg",
  "vendor-jersey-esport-custom.jpg",
  "vendor-seragam-casual-custom seragam.jpg",
  "vendor-seragam-office-casual-custom seragam.jpg",
  "vendor-seragam-proyek-safety-office-casual-custom seragam.jpg",
  "vest-abu-tampak-depan.jpg",
  "vest-japan-cream-detail-resleting.jpg",
  "vest-navy-tampak-depan.jpg",
  "vest-safety-bahan-canvas-marsoto-coklat.jpg",
].map((filename) => `/images/produk-pakaian-greecio/${filename}`);

const mercoGallery = [
  "nostalgia-vendor-foto-model-fashion-editorial-18.jpg",
  "nostalgia-vendor-detail-outfit-model-10.jpg",
  "nostalgia-vendor-detail-produk-fashion-09.jpg",
  "nostalgia-vendor-foto-model-blazer-formal-13.jpg",
  "nostalgia-vendor-foto-model-blazer-portfolio-17.jpg",
  "nostalgia-vendor-foto-model-blazer-profesional-14.jpg",
  "nostalgia-vendor-foto-model-blazer-wanita-15.jpg",
  "nostalgia-vendor-foto-model-fashion-formal-16.jpg",
  "nostalgia-vendor-foto-model-hijab-fashion-08.jpg",
  "nostalgia-vendor-foto-model-hijab-memegang-produk-02.jpg",
  "nostalgia-vendor-foto-model-hijab-outfit-formal-06.jpg",
  "nostalgia-vendor-foto-model-hijab-portfolio-07.jpg",
  "nostalgia-vendor-foto-model-jas-formal-11.jpg",
  "nostalgia-vendor-foto-model-memegang-clutch-12.jpg",
  "nostalgia-vendor-foto-model-memegang-produk-01.jpg",
  "nostalgia-vendor-foto-model-produk-03.jpg",
  "nostalgia-vendor-foto-model-profesional-04.jpg",
  "nostalgia-vendor-foto-model-seragam-formal-05.jpg",
].map((filename) => `/images/produk-merchandise-merco/${filename}`);

const projects: Record<string, Project> = {
  "project-one": {
    title: "Sesi Foto Pranikah",
    category: "Capture · Fotografi Pranikah",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    description:
      "Rangkaian foto pranikah yang menampilkan momen dan karakter pasangan dalam berbagai suasana dan gaya.",
    services: [
      "Capture",
      "Fotografi Pranikah",
      "Arahan Kreatif",
      "Sesi Pasangan",
      "Dokumentasi Foto",
    ],
    gallery: preweddingGallery.map(({ src }) => src),
  },

  "project-two": {
    title: "Dokumentasi Pernikahan",
    category: "Capture · Fotografi Pernikahan",
    image: "/images/wedding-porto/jasa-fotografer-wedding-intimate-bogor.jpg",
    description:
      "Kumpulan foto yang mendokumentasikan prosesi pernikahan, pasangan, dan momen kebersamaan.",
    services: [
      "Capture",
      "Fotografi Pernikahan",
      "Dokumentasi Akad",
      "Sesi Pasangan",
      "Momen Keluarga",
    ],
    gallery: weddingGallery.map(({ src }) => src),
  },

  basket: {
    title: "Dokumentasi Pertandingan Basket",
    category: "Capture · Fotografi Olahraga",
    image: "/images/basket-porto/foto-konseptual-pemain-basket-monokrom.jpg",
    description:
      "Kumpulan foto aksi permainan, detail pertandingan, dan kebersamaan tim basket.",
    services: [
      "Capture",
      "Fotografi Olahraga",
      "Fotografi Aksi",
    ],
    gallery: basketGallery,
  },

  sedja: {
    title: "Foto Produk Sedja",
    category: "Capture · Fotografi Produk",
    image: "/images/foto sedja-porto/detail-produk-botol-herbal-background-daun-14.jpg",
    description:
      "Rangkaian foto produk Sedja dengan berbagai komposisi, detail, dan model.",
    services: ["Capture", "Fotografi Produk", "Foto Produk dengan Model"],
    gallery: sedjaGallery,
    preserveGalleryAspectRatio: true,
  },

  kemerdekaan: {
    title: "Dokumentasi Lomba Kemerdekaan",
    category: "Capture · Fotografi Acara",
    image:
      "/images/kemerdekaan-dokumentasi/peserta-anak-mengikuti-lomba-09.jpg",
    description:
      "Rangkaian dokumentasi kegiatan dan lomba anak dalam perayaan Kemerdekaan.",
    services: ["Capture", "Fotografi Acara", "Dokumentasi Lomba"],
    gallery: kemerdekaanGallery,
  },

  "malam-kemerdekaan": {
    title: "Dokumentasi Malam Kemerdekaan",
    category: "Capture · Fotografi Acara",
    image:
      "/images/Malam-kemerdekaan/dokumentasi-pengunjung-di-area-kegiatan-malam.jpg",
    description:
      "Rangkaian dokumentasi suasana, peserta, dan kegiatan dalam acara Malam Kemerdekaan.",
    services: ["Capture", "Fotografi Acara", "Dokumentasi Kegiatan"],
    gallery: malamKemerdekaanGallery,
  },

  greecio: {
    title: "Seragam Kerja Greecio",
    category: "Capture · Fotografi Produk",
    image: "/images/produk-pakaian-greecio/koleksi-seragam-kerja (1).jpg",
    description:
      "Koleksi foto produk Greecio yang menampilkan seragam kerja, pakaian, dan atribut profesional.",
    services: ["Capture", "Fotografi Produk", "Fotografi Seragam"],
    gallery: greecioGallery,
    preserveGalleryAspectRatio: true,
  },

  merco: {
    title: "Foto Fashion Merco",
    category: "Capture · Fotografi Fashion",
    image:
      "/images/produk-merchandise-merco/nostalgia-vendor-foto-model-jas-formal-11.jpg",
    description:
      "Rangkaian foto fashion Merco yang menampilkan pilihan busana dan detail produk dengan model.",
    services: ["Capture", "Fotografi Fashion", "Fotografi Produk dengan Model"],
    gallery: mercoGallery,
    preserveGalleryAspectRatio: true,
  },

  "17an": {
    title: "Semarak Kemerdekaan",
    category: "Create · Video Acara",
    video: "/videos/portfolio-17an.mp4",
    description:
      "Video dokumentasi acara 17an yang merangkai suasana dan momen kebersamaan dalam perayaan.",
    services: [
      "Dokumentasi Acara",
      "Produksi Video",
      "Penyuntingan Video",
    ],
    gallery: [],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const galleryImages =
    slug === "project-one"
      ? preweddingGallery
      : slug === "project-two"
        ? weddingGallery
        : project.gallery.map((src, index) => ({
            src,
            alt: `${project.title}, foto ${index + 1}`,
          }));

  return (
    <main>
      {/* PROJECT HERO */}
      <section className="bg-[var(--cream)] px-6 pb-10 pt-24 md:pb-12 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
            {project.category}
          </p>

          <h1 className="type-hero max-w-4xl font-bold text-[var(--brown)]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-[var(--cream)] px-6">
        <div className="mx-auto max-w-5xl">
          {project.video ? (
            <div className="aspect-[16/9] overflow-hidden bg-[var(--brown)]">
              <video
                autoPlay
                controls
                muted
                playsInline
                preload="metadata"
                poster={project.image}
                aria-label={`Video dokumentasi ${project.title}`}
                className="h-full w-full object-contain"
              >
                <source src={project.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutar video.
              </video>
            </div>
          ) : project.image ? (
            <PhotoImage
              src={project.image}
              alt={project.title}
              className="aspect-[16/9]"
            />
          ) : null}
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="border-y border-[var(--line)] bg-[var(--cream-light)] px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Tentang Proyek
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--brown)]">
              {project.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Yang Kami Kerjakan
            </p>
            <div className="mt-5 grid gap-x-6 sm:grid-cols-2">
              {project.services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-start gap-4 border-t border-[var(--line)] py-4"
                >
                  <span className="pt-1 text-xs text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--brown)]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      {project.gallery.length > 0 && (
        <section className="bg-[var(--cream)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--line)] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
                  Galeri Proyek
                </p>
                <h2 className="mt-3 font-semibold text-[var(--brown)]">
                  Di balik karya.
                </h2>
              </div>
              <p className="text-sm text-[var(--brown-light)]">
                {galleryImages.length} foto
              </p>
            </div>

            <PortfolioGallery
              images={galleryImages}
              projectTitle={project.title}
              preserveAspectRatio={project.preserveGalleryAspectRatio}
            />
          </div>
        </section>
      )}

      {/* BACK TO PORTFOLIO */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 border-b border-[var(--terracotta)] pb-2 text-sm text-[var(--terracotta)] transition hover:text-[var(--terracotta-dark)]"
          >
            ← Kembali ke semua portofolio
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
}