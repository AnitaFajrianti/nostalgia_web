import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

const projects = {
  "project-one": {
    title: "Project One",
    category: "Branding / Digital",
    year: "2026",
    image: "/images/camera-detail.jpg",
    description:
      "Project ini merupakan bagian dari perjalanan kreatif Nostalgia dalam membantu brand membangun visual dan pengalaman yang memiliki karakter.",
    challenge:
      "Bagaimana menciptakan identitas visual yang mampu menyampaikan karakter brand secara konsisten dan mudah dikenali?",
    approach:
      "Kami memulai dari memahami karakter brand, kemudian menerjemahkannya ke dalam konsep visual, direction, dan berbagai kebutuhan komunikasi.",
    services: [
      "Brand Strategy",
      "Visual Identity",
      "Creative Direction",
      "Digital Content",
    ],
    gallery: [
      "/images/camera-detail.jpg",
      "/images/film-production.jpg",
      "/images/photography-session.jpg",
    ],
  },

  "project-two": {
    title: "Project Two",
    category: "Campaign / Creative",
    year: "2026",
    image: "/images/photography-session.jpg",
    description:
      "Sebuah creative campaign yang dikembangkan untuk membangun komunikasi visual yang lebih dekat dengan audiens.",
    challenge:
      "Menciptakan campaign yang tidak hanya menarik secara visual, tetapi juga memiliki pesan yang mudah diterima audiens.",
    approach:
      "Konsep dikembangkan melalui kombinasi storytelling, visual direction, photography, dan creative content.",
    services: [
      "Campaign Concept",
      "Creative Direction",
      "Photography",
      "Content",
    ],
    gallery: [
      "/images/photography-session.jpg",
      "/images/portrait-photography.jpg",
      "/images/camera-detail.jpg",
    ],
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

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* PROJECT HERO */}
      <section className="bg-[var(--cream)] px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                {project.category}
              </p>

              <h1 className="mt-6 font-[family-name:var(--font-serif)] text-6xl font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--brown)] md:text-8xl">
                {project.title}
              </h1>
            </div>

            <div className="md:col-span-4 md:text-right">
              <p className="text-sm text-[var(--brown-light)]">Year</p>

              <p className="mt-1 text-[var(--brown)]">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-[var(--cream)] px-6 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <PhotoImage
            src={project.image}
            alt={project.title}
            className="aspect-[16/9]"
          />
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="bg-[var(--cream-light)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              About The Project
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-4xl font-[family-name:var(--font-serif)] text-3xl leading-tight text-[var(--brown)] md:text-5xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE & APPROACH */}
      <section className="bg-[var(--cream)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              The Challenge
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brown-light)]">
              {project.challenge}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Approach
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brown-light)]">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-[var(--line)] bg-[var(--cream-light)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-12">
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

                    <span className="flex-1 px-6 font-[family-name:var(--font-serif)] text-2xl text-[var(--brown)]">
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
      <section className="bg-[var(--cream)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Project Gallery
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold text-[var(--brown)] md:text-5xl">
              Behind the work.
            </h2>
          </div>

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
        </div>
      </section>

      {/* BACK TO PORTFOLIO */}
      <section className="bg-[var(--cream-light)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1440px]">
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