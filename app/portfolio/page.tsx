import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  image: string;
  alt: string;
};

const featuredProject = {
  slug: "17an",
  title: "Semarak Kemerdekaan",
  category: "Event Documentation",
  alt: "Video dokumentasi acara 17an",
  video: "/videos/portfolio-17an.mp4",
};

const projects: PortfolioItem[] = [
  {
    slug: "project-one",
    title: "Project Prewedding",
    category: "Prewedding",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    alt: "Foto prewedding pasangan dengan hijab dan jas hitam elegan",
  },
  {
    slug: "project-two",
    title: "Project Wedding",
    category: "Wedding Documentation",
    image: "/images/wedding-porto/jasa-fotografer-wedding-intimate-bogor.jpg",
    alt: "Dokumentasi wedding intimate di Bogor",
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
      <section className="min-h-[60vh] bg-[var(--cream)] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Portfolio
            </p>

            <h1 className="type-hero font-bold text-[var(--brown)]">
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

              <h2 className="mt-4 font-semibold text-[var(--brown)]">
                {featuredProject.title}
              </h2>
            </div>
          </div>

          <video
            controls
            playsInline
            preload="metadata"
            aria-label={featuredProject.alt}
            className="aspect-[16/9] w-full bg-[var(--brown)] object-contain"
          >
            <source src={featuredProject.video} type="video/mp4" />
            Browser Anda tidak mendukung pemutar video.
          </video>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-[var(--brown-light)]">
                Dokumentasi acara 17an yang mengabadikan suasana, cerita, dan
                momen kebersamaan dalam perayaan.
              </p>

              <Link
                href={`/portfolio/${featuredProject.slug}`}
                className="mt-5 inline-block border-b border-[var(--terracotta)] pb-1 text-sm text-[var(--terracotta)]"
              >
                Lihat detail proyek →
              </Link>
            </div>

            <div className="md:text-right">
              <p className="text-sm text-[var(--brown-light)]">Category</p>

              <p className="mt-1 font-medium text-[var(--brown)]">
                {featuredProject.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-[var(--cream)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Selected Work
            </p>

            <h2 className="mt-4 font-semibold text-[var(--brown)]">
              Our Projects
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
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
                </Link>

                <div className="mt-5 flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="group block"
                    >
                      <h3 className="font-semibold text-[var(--brown)]">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm text-[var(--brown-light)]">
                        {project.category}
                      </p>

                      <span className="mt-4 inline-block text-sm text-[var(--terracotta)]">
                        Lihat detail proyek →
                      </span>
                    </Link>
                  </div>

                  <span className="text-sm text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
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

              <h2 className="mt-4 max-w-xl font-semibold text-[var(--brown)]">
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