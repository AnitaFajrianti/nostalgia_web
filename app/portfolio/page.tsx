import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

const projects = [
  {
    slug: "project-one",
    title: "Project One",
    category: "Branding / Digital",
    image: "/images/camera-detail.jpg",
    alt: "Kamera profesional untuk proyek branding",
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Campaign / Creative",
    image: "/images/photography-session.jpg",
    alt: "Sesi pemotretan untuk kampanye kreatif",
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Digital / Experience",
    image: "/images/portrait-photography.jpg",
    alt: "Fotografi portrait untuk proyek digital",
  },
  {
    slug: "project-four",
    title: "Project Four",
    category: "Visual / Creative",
    image: "/images/film-production.jpg",
    alt: "Kamera video saat proses pengambilan gambar",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] bg-[var(--cream)] px-6 py-24 md:px-10">
        <div className="mx-auto flex min-h-[50vh] max-w-7xl items-end">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Portfolio
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--brown)] md:text-7xl">
              Work that turns ideas into memorable experiences.
            </h1>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Featured Project
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold text-[var(--brown)] md:text-5xl">
                Project One
              </h2>
            </div>

            <span className="hidden text-sm text-[var(--brown-light)] md:block">
              01 / Featured
            </span>
          </div>

          <Link href="/portfolio/project-one" className="group block">
            <PhotoImage
              src="/images/camera-detail.jpg"
              alt="Kamera profesional untuk proyek branding"
              className="aspect-[16/9] transition duration-500 group-hover:opacity-90"
            />

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-lg text-[var(--brown-light)]">
                  Strategi brand, visual identity, creative direction, dan
                  digital content untuk membangun identitas yang konsisten.
                </p>

                <span className="mt-5 inline-block border-b border-[var(--terracotta)] pb-1 text-sm text-[var(--terracotta)]">
                  View Project →
                </span>
              </div>

              <div className="md:text-right">
                <p className="text-sm text-[var(--brown-light)]">Category</p>

                <p className="mt-1 font-medium text-[var(--brown)]">
                  Branding / Digital
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-[var(--cream)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Selected Work
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold text-[var(--brown)] md:text-5xl">
              Our Projects
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <PhotoImage
                  src={project.image}
                  alt={project.alt}
                  className="aspect-[4/3] transition duration-500 group-hover:opacity-90"
                />

                <div className="mt-5 flex justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-[var(--brown)]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--brown-light)]">
                      {project.category}
                    </p>

                    <span className="mt-4 inline-block text-sm text-[var(--terracotta)]">
                      View Project →
                    </span>
                  </div>

                  <span className="text-sm text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Expertise
              </p>

              <h2 className="mt-4 max-w-xl font-[family-name:var(--font-serif)] text-4xl font-semibold text-[var(--brown)] md:text-5xl">
                Different needs, different approaches.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-lg text-[var(--brown)]">
              <p>Branding</p>
              <p>Creative</p>
              <p>Digital</p>
              <p>Campaign</p>
              <p>Content</p>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}