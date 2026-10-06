import Link from "next/link";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

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

              <h2 className="font-bold">
                Featured
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="hidden border-b border-[var(--brown)] pb-1 text-sm md:block"
            >
              View All Work →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <PhotoImage
                src="/images/film-production.jpg"
                alt="Kamera video merekam produksi di studio"
                className="aspect-[16/10]"
              />

              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-semibold">
                    Featured Project
                  </h3>

                  <p className="mt-2 text-sm text-[var(--brown-light)]">
                    Creative / Digital
                  </p>
                </div>

                <span className="text-sm text-[var(--brown-light)]">
                  01
                </span>
              </div>
            </div>

            <div className="md:col-span-4 md:pt-24">
              <PhotoImage
                src="/images/portrait-photography.jpg"
                alt="Kamera untuk sesi fotografi portrait"
                className="aspect-[4/5]"
              />

              <div className="mt-5">
                <h3 className="font-semibold">
                  Project Two
                </h3>

                <p className="mt-2 text-sm text-[var(--brown-light)]">
                  Branding / Campaign
                </p>
              </div>
            </div>
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
            <article>
              <PhotoImage
                src="/images/photography-session.jpg"
                alt="Fotografer sedang memotret dalam sesi kreatif"
                className="aspect-[4/3]"
              />

              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[var(--brown-light)]">
                Creative
              </p>

              <h3 className="mt-3 font-semibold">
                Article title goes here.
              </h3>
            </article>

            <article>
              <PhotoImage
                src="/images/camera-detail.jpg"
                alt="Detail kamera fotografi profesional"
                className="aspect-[4/3]"
              />

              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[var(--brown-light)]">
                Branding
              </p>

              <h3 className="mt-3 font-semibold">
                Another story worth reading.
              </h3>
            </article>

            <article>
              <PhotoImage
                src="/images/film-production.jpg"
                alt="Peralatan produksi film dan video"
                className="aspect-[4/3]"
              />

              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[var(--brown-light)]">
                Ideas
              </p>

              <h3 className="mt-3 font-semibold">
                Thoughts from Nostalgia.Kala.
              </h3>
            </article>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}