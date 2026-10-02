import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

type Project = {
  title: string;
  category: string;
  year?: string;
  image: string;
  video?: string;
  description: string;
  challenge: string;
  approach: string;
  services: string[];
  gallery: string[];
};

const projects: Record<string, Project> = {
  "project-one": {
    title: "Project One",
    category: "Branding / Digital",
    year: "2026",
    image: "/images/camera-detail.jpg",
    description:
      "Project ini merupakan bagian dari perjalanan kreatif Nostalgia.Kala dalam membantu brand membangun visual dan pengalaman yang memiliki karakter.",
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

  "17an": {
    title: "17an",
    category: "Event Documentation",
    image: "/images/film-production.jpg",
    video: "/videos/portfolio-17an.MOV",
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

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--brown)] md:text-7xl">
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
                poster={project.image}
                aria-label={`${project.title} event documentation`}
                className="h-full w-full object-contain"
              >
                <source src={project.video} type="video/quicktime" />
                Browser Anda tidak mendukung pemutar video.
              </video>
            </div>
          ) : (
            <PhotoImage
              src={project.image}
              alt={project.title}
              className="aspect-[16/9]"
            />
          )}
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
            <p className="max-w-4xl font-[family-name:var(--font-serif)] text-3xl leading-tight text-[var(--brown)] md:text-5xl">
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
      {project.gallery.length > 0 && (
        <section className="bg-[var(--cream)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
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