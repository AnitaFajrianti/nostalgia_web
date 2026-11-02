import Link from "next/link";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import { articles } from "./blog/articles";

const selectedWorks = [
  {
    slug: "project-one",
    title: "Sesi Foto Prewedding",
    category: "Prewedding",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    alt: "Foto prewedding pasangan dengan hijab dan jas hitam elegan",
  },
  {
    slug: "basket",
    title: "Dokumentasi Pertandingan Basket",
    category: "Sports Photography",
    image: "/images/basket-porto/foto-konseptual-pemain-basket-monokrom.jpg",
    alt: "Foto konseptual pemain basket dalam gaya monokrom",
  },
];

const serviceGroups = [
  {
    name: "Event Documentation",
    category: "CAPTURE",
    services: [
      "Event Photography",
      "Event Videography",
      "Highlight Video",
      "Event Recap",
      "Behind The Scenes",
    ],
  },
  {
    name: "Content Editing",
    category: "CREATE",
    services: [
      "Reels Editing",
      "Short-form Video",
      "Event Recap Editing",
      "Social Media Video",
      "Raw Footage Editing",
    ],
  },
  {
    name: "Visual Content",
    category: "DESIGN",
    services: [
      "Instagram Feed",
      "Carousel",
      "Promotional Content",
      "Event Announcement",
      "Social Media Visual",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* INTRO */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                About Nostalgia.Kala
              </p>
            </div>

            <div>
              <h2>
                Partner visual kreatif untuk momen dan ide yang bermakna.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--brown-light)]">
                Nostalgia adalah layanan partner visual kreatif yang membantu
                klien mengabadikan, menciptakan, dan mengubah momen menjadi
                konten visual yang bermakna.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[var(--brown)] pb-1 text-sm font-medium"
              >
                Kenali Nostalgia.Kala →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Selected Work
              </p>

              <h2 className="font-bold">Karya pilihan kami.</h2>
            </div>

            <Link
              href="/portfolio"
              className="hidden border-b border-[var(--brown)] pb-1 text-sm md:block"
            >
              View All Work →
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {selectedWorks.map((project, index) => (
              <article key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <PhotoImage
                    src={project.image}
                    alt={project.alt}
                    className={`aspect-[4/3] transition duration-500 group-hover:opacity-90 ${
                      index === 1 ? "md:mt-24" : ""
                    }`}
                  />
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-semibold text-[var(--brown)]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--brown-light)]">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brown-light)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-[var(--line)] bg-[var(--brown)] px-6 py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--cream)]/60">
            Our Philosophy
          </p>

          <h2 className="max-w-6xl font-bold">
            Good work doesn&apos;t just look good.
            <br />
            It stays with you.
          </h2>

          <div className="mt-12 flex justify-end">
            <p className="max-w-md text-base leading-relaxed text-[var(--cream)]/70">
              Kami percaya bahwa karya yang baik bukan hanya tentang tampilan,
              tetapi tentang bagaimana sebuah pengalaman terasa dan diingat.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Services
            </p>

            <h2 className="font-bold">
              Dari momen yang ditangkap hingga visual siap digunakan.
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <article
                key={group.category}
                className="bg-[var(--cream)] p-8 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs tracking-[0.15em] text-[var(--terracotta)]">
                    {group.category}
                  </span>
                </div>

                <h3 className="mt-10 font-semibold">{group.name}</h3>

                <ul className="mt-6 space-y-3 border-t border-[var(--line)] pt-6 text-[var(--brown-light)]">
                  {group.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Journal
              </p>

              <h2 className="font-bold">
                From our desk.
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden border-b border-[var(--brown)] pb-1 text-sm md:block"
            >
              View Journal →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <article key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block"
                >
                  <PhotoImage
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[4/3] transition duration-500 group-hover:opacity-90"
                  />
                  <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[var(--brown-light)]">
                    {article.category}
                  </p>
                  <h3 className="mt-3 font-semibold text-[var(--brown)]">
                    {article.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}