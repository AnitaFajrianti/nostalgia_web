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
  interactiveGallery?: boolean;
};

const preweddingGallery = [
  {
    src: "/images/prewed-porto/foto-prewedding-kasual-pasangan-jaket-kuning.jpg",
    alt: "Prewedding kasual pasangan dengan jaket kuning",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-vespa-vintage-outdoor.jpg",
    alt: "Prewedding vespa vintage outdoor",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-hitam-putih-estetik.jpg",
    alt: "Prewedding hitam putih estetik",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-pose-candid-danau-alam.jpg",
    alt: "Prewedding candid di danau dan alam",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-lamaran.jpg",
    alt: "Foto prewedding lamaran",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-elegan-pasangan.jpg",
    alt: "Prewedding pasangan elegan",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    alt: "Prewedding hijab dan jas hitam elegan",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-santai-duduk-di-taman.jpg",
    alt: "Prewedding santai duduk di taman",
  },
  {
    src: "/images/prewed-porto/foto-prewedding-close-up-senyum-pasangan.jpg",
    alt: "Prewedding close-up senyum pasangan",
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

const projects: Record<string, Project> = {
  "project-one": {
    title: "Sesi Foto Prewedding",
    category: "Capture · Prewedding Photography",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    description:
      "Rangkaian foto prewedding yang menampilkan momen dan karakter pasangan dalam berbagai suasana dan gaya.",
    services: [
      "Capture",
      "Prewedding Photography",
      "Creative Direction",
      "Couple Session",
      "Photo Documentation",
    ],
    gallery: preweddingGallery.map(({ src }) => src),
    interactiveGallery: true,
  },

  "project-two": {
    title: "Dokumentasi Pernikahan",
    category: "Capture · Wedding Photography",
    image: "/images/wedding-porto/jasa-fotografer-wedding-intimate-bogor.jpg",
    description:
      "Kumpulan foto yang mendokumentasikan prosesi pernikahan, pasangan, dan momen kebersamaan.",
    services: [
      "Capture",
      "Wedding Photography",
      "Akad Documentation",
      "Couple Session",
      "Family Moments",
    ],
    gallery: weddingGallery.map(({ src }) => src),
    interactiveGallery: true,
  },

  basket: {
    title: "Dokumentasi Pertandingan Basket",
    category: "Capture · Sports Photography",
    image: "/images/basket-porto/foto-konseptual-pemain-basket-monokrom.jpg",
    description:
      "Kumpulan foto aksi permainan, detail pertandingan, dan kebersamaan tim basket.",
    services: [
      "Capture",
      "Sports Photography",
      "Action Photography",
    ],
    gallery: basketGallery,
  },

  "17an": {
    title: "Semarak Kemerdekaan",
    category: "Create · Event Video",
    video: "/videos/portfolio-17an.mp4",
    description:
      "Video dokumentasi acara 17an yang merangkai suasana dan momen kebersamaan dalam perayaan.",
    services: [
      "Event Documentation",
      "Video Production",
      "Video Editing",
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

  return (
    <main>
      {/* PROJECT HERO */}
      <section className="min-h-[60vh] bg-[var(--cream)] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="grid w-full gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-12">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                {project.category}
              </p>

              <h1 className="type-hero font-bold text-[var(--brown)]">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-[var(--cream)] px-6">
        <div className="mx-auto max-w-7xl">
          {project.video ? (
            <div className="aspect-[16/9] overflow-hidden bg-[var(--brown)]">
              <video
                autoPlay
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={`${project.title} event documentation`}
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
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              About The Project
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-4xl text-[var(--brown)]">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                What We Did
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-0 border-t border-[var(--line)]">
                {project.services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center justify-between border-b border-[var(--line)] py-5"
                  >
                    <span className="text-sm text-[var(--brown-light)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="type-service flex-1 px-6 text-[var(--brown)]">
                      {service}
                    </span>

                    <span className="text-[var(--terracotta)]">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      {project.gallery.length > 0 && (
        <section className="bg-[var(--cream)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Project Gallery
              </p>

              <h2 className="mt-4 font-semibold text-[var(--brown)]">
                Behind the work.
              </h2>
            </div>

            {project.interactiveGallery ? (
              <PortfolioGallery
                images={
                  slug === "project-two" ? weddingGallery : preweddingGallery
                }
                projectTitle={project.title}
              />
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <PhotoImage
                    key={image}
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className={
                      index === 0
                        ? "aspect-[16/10] md:col-span-2"
                        : "aspect-[4/3]"
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* BACK TO PORTFOLIO */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 border-b border-[var(--terracotta)] pb-2 text-sm text-[var(--terracotta)] transition hover:text-[var(--terracotta-dark)]"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>

      <CTA />
    </main>
  );
}