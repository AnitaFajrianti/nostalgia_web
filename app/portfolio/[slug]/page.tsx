import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import PortfolioGallery from "@/components/PortfolioGallery";

type Project = {
  title: string;
  category: string;
  year?: string;
  image?: string;
  video?: string;
  description: string;
  challenge: string;
  approach: string;
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

const projects: Record<string, Project> = {
  "project-one": {
    title: "Project Prewedding",
    category: "Prewedding",
    year: "2026",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    description:
      "Project ini merupakan dokumentasi prewedding yang menangkap momen dan karakter pasangan melalui visual yang natural, hangat, dan personal.",
    challenge:
      "Bagaimana menghasilkan rangkaian foto prewedding yang terasa natural dan mampu merepresentasikan karakter pasangan?",
    approach:
      "Kami mengabadikan momen melalui pendekatan visual yang natural, dengan memperhatikan suasana, ekspresi, dan interaksi pasangan agar setiap foto terasa personal.",
    services: [
      "Prewedding Photography",
      "Creative Direction",
      "Couple Session",
      "Photo Documentation",
    ],
    gallery: preweddingGallery.map(({ src }) => src),
    interactiveGallery: true,
  },

  "project-two": {
    title: "Project Wedding",
    category: "Wedding Documentation",
    year: "2026",
    image: "/images/wedding-porto/jasa-fotografer-wedding-intimate-bogor.jpg",
    description:
      "Dokumentasi pernikahan yang mengabadikan momen sakral, kebersamaan, dan cerita pasangan melalui foto yang hangat dan personal.",
    challenge:
      "Bagaimana menangkap rangkaian momen pernikahan yang berlangsung spontan dengan tetap menghadirkan cerita yang utuh dan berkesan?",
    approach:
      "Kami mendokumentasikan prosesi dan interaksi pasangan serta keluarga dengan pendekatan yang natural agar setiap momen terasa dekat dan autentik.",
    services: [
      "Wedding Photography",
      "Akad Documentation",
      "Couple Session",
      "Family Moments",
    ],
    gallery: weddingGallery.map(({ src }) => src),
    interactiveGallery: true,
  },

  "project-three": {
    title: "Project Three",
    category: "Digital / Experience",
    year: "2026",
    image: "/images/portrait-photography.jpg",
    description:
      "Project digital yang berfokus pada bagaimana visual dan experience dapat bekerja bersama untuk menciptakan komunikasi yang lebih kuat.",
    challenge:
      "Membuat pengalaman digital yang tetap memiliki karakter visual sekaligus mudah digunakan.",
    approach:
      "Kami menggabungkan visual direction, content structure, dan experience design untuk membangun pengalaman yang lebih cohesive.",
    services: [
      "Digital Direction",
      "Experience Design",
      "Visual Design",
      "Content",
    ],
    gallery: [
      "/images/portrait-photography.jpg",
      "/images/camera-detail.jpg",
      "/images/film-production.jpg",
    ],
  },

  "project-four": {
    title: "Project Four",
    category: "Visual / Creative",
    year: "2026",
    image: "/images/film-production.jpg",
    description:
      "Project visual yang mengeksplorasi bagaimana gambar, motion, dan storytelling dapat membangun sebuah pengalaman yang memorable.",
    challenge:
      "Menerjemahkan sebuah ide menjadi visual yang kuat dan memiliki emotional impact.",
    approach:
      "Proses kreatif dikembangkan mulai dari concept development, visual direction, production hingga final output.",
    services: [
      "Creative Concept",
      "Visual Direction",
      "Video Production",
      "Post Production",
    ],
    gallery: [
      "/images/film-production.jpg",
      "/images/photography-session.jpg",
      "/images/portrait-photography.jpg",
    ],
  },

  "17an": {
    title: "Semarak Kemerdekaan",
    category: "Event Documentation",
    video: "/videos/portfolio-17an.mp4",
    description:
      "Dokumentasi acara 17an yang mengabadikan suasana, cerita, dan momen kebersamaan dalam perayaan.",
    challenge:
      "Menangkap momen-momen acara yang berlangsung spontan agar suasana dan kebersamaannya dapat dikenang kembali.",
    approach:
      "Mendokumentasikan rangkaian acara, interaksi, dan detail suasana melalui video yang natural dan bercerita.",
    services: ["Event Documentation", "Video Production", "Video Editing"],
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
      <section className="min-h-[55vh] bg-[var(--cream)] px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto flex min-h-[35vh] max-w-7xl items-end">
          <div className="grid w-full gap-8 md:grid-cols-12 md:items-end">
            <div className={project.year ? "md:col-span-8" : "md:col-span-12"}>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                {project.category}
              </p>

              <h1 className="type-hero font-bold text-[var(--brown)]">
                {project.title}
              </h1>
            </div>

            {project.year && (
              <div className="md:col-span-4 md:pb-2 md:text-right">
                <p className="text-sm text-[var(--brown-light)]">Year</p>
                <p className="mt-1 font-medium text-[var(--brown)]">
                  {project.year}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-[var(--cream)] px-6">
        <div className="mx-auto max-w-7xl">
          {project.video ? (
            <div className="aspect-[16/9] overflow-hidden bg-[var(--brown)]">
              <video
                controls
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

      {/* CHALLENGE & APPROACH */}
      <section className="bg-[var(--cream)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              The Challenge
            </p>

            <p className="mt-6 max-w-xl text-[var(--brown-light)]">
              {project.challenge}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Approach
            </p>

            <p className="mt-6 max-w-xl text-[var(--brown-light)]">
              {project.approach}
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