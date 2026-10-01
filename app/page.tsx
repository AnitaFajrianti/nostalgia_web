import Link from "next/link";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function Home() {
  return (
    <>
      <Hero />

      {/* INTRO */}
      <section className="bg-[var(--cream)] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brown-light)]">
                About Nostalgia
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">
                We create things people remember.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--brown-light)]">
                Nostalgia adalah creative studio yang menggabungkan ide,
                visual, dan storytelling untuk menciptakan karya yang punya
                karakter.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[var(--brown)] pb-1 text-sm font-medium"
              >
                Discover Nostalgia →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brown-light)]">
                Selected Work
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
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
                  <h3 className="font-[family-name:var(--font-serif)] text-3xl font-semibold">
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
                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold">
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
      <section className="bg-[var(--brown)] px-6 py-28 text-[var(--cream)] md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cream)]/60">
            Our Philosophy
          </p>

          <h2 className="mt-8 max-w-6xl font-[family-name:var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Good work doesn&apos;t just look good.
            <br />
            It stays with you.
          </h2>

          <div className="mt-16 flex justify-end">
            <p className="max-w-md text-base leading-relaxed text-[var(--cream)]/70">
              Kami percaya bahwa karya yang baik bukan hanya tentang tampilan,
              tetapi tentang bagaimana sebuah pengalaman terasa dan diingat.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--cream)] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brown-light)]">
                What We Do
              </p>

              <h2 className="mt-5 max-w-xl font-[family-name:var(--font-serif)] text-5xl font-semibold leading-tight tracking-[-0.03em] md:text-7xl">
                Ideas into experiences.
              </h2>
            </div>

            <div>
              <div className="border-t border-[var(--line)]">
                <div className="flex items-center justify-between border-b border-[var(--line)] py-6">
                  <span className="text-sm text-[var(--brown-light)]">
                    01
                  </span>

                  <span className="flex-1 px-6 font-[family-name:var(--font-serif)] text-2xl">
                    Branding
                  </span>

                  <span>↗</span>
                </div>

                <div className="flex items-center justify-between border-b border-[var(--line)] py-6">
                  <span className="text-sm text-[var(--brown-light)]">
                    02
                  </span>

                  <span className="flex-1 px-6 font-[family-name:var(--font-serif)] text-2xl">
                    Creative
                  </span>

                  <span>↗</span>
                </div>

                <div className="flex items-center justify-between border-b border-[var(--line)] py-6">
                  <span className="text-sm text-[var(--brown-light)]">
                    03
                  </span>

                  <span className="flex-1 px-6 font-[family-name:var(--font-serif)] text-2xl">
                    Digital
                  </span>

                  <span>↗</span>
                </div>

                <div className="flex items-center justify-between border-b border-[var(--line)] py-6">
                  <span className="text-sm text-[var(--brown-light)]">
                    04
                  </span>

                  <span className="flex-1 px-6 font-[family-name:var(--font-serif)] text-2xl">
                    Experience
                  </span>

                  <span>↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--brown-light)]">
                Journal
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
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

              <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold">
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

              <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold">
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

              <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl font-semibold">
                Thoughts from Nostalgia.
              </h3>
            </article>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}