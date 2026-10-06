import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function BlogPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] px-6 py-24">
        <div className="mx-auto flex min-h-[50vh] max-w-7xl items-end">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Journal
            </p>

            <h1 className="type-hero font-bold">
              Ideas, stories, and things worth sharing.
            </h1>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Featured Article
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <PhotoImage
              src="/images/photography-session.jpg"
              alt="Fotografer membuat konten editorial"
              className="aspect-[4/3]"
            />

            <div className="flex flex-col justify-end">
              <p className="text-sm text-gray-500">
                Creative / 01 October 2026
              </p>

              <h2 className="mt-4 font-bold">
                Article title goes here.
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
                Ringkasan singkat artikel yang nantinya menjelaskan isi dan
                membuat pengunjung tertarik untuk membaca lebih lanjut.
              </p>

              <a
                href="/blog/article-one"
                className="mt-8 w-fit text-sm font-medium underline underline-offset-4"
              >
                Read Article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Latest
              </p>

              <h2 className="mt-4 font-bold">
                Latest Articles
              </h2>
            </div>

            <span className="hidden text-sm text-gray-500 md:block">
              01 — 06
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <article>
              <a href="/blog/article-one">
                <PhotoImage
                  src="/images/film-production.jpg"
                  alt="Kamera video di lokasi produksi"
                  className="aspect-[4/3]"
                />
              </a>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Creative / 01 Oct 2026
                </p>

                <h3 className="mt-3 font-semibold">
                  Article title one.
                </h3>

                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Short description of the article.
                </p>
              </div>
            </article>

            <article>
              <a href="/blog/article-two">
                <PhotoImage
                  src="/images/camera-detail.jpg"
                  alt="Kamera untuk dokumentasi visual brand"
                  className="aspect-[4/3]"
                />
              </a>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Branding / 28 Sep 2026
                </p>

                <h3 className="mt-3 font-semibold">
                  Article title two.
                </h3>

                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Short description of the article.
                </p>
              </div>
            </article>

            <article>
              <a href="/blog/article-three">
                <PhotoImage
                  src="/images/portrait-photography.jpg"
                  alt="Peralatan fotografi portrait"
                  className="aspect-[4/3]"
                />
              </a>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Digital / 24 Sep 2026
                </p>

                <h3 className="mt-3 font-semibold">
                  Article title three.
                </h3>

                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Short description of the article.
                </p>
              </div>
            </article>

            <article>
              <a href="/blog/article-four">
                <PhotoImage
                  src="/images/photography-session.jpg"
                  alt="Sesi foto untuk konten kreatif"
                  className="aspect-[4/3]"
                />
              </a>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Creative / 20 Sep 2026
                </p>

                <h3 className="mt-3 font-semibold">
                  Article title four.
                </h3>

                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Short description of the article.
                </p>
              </div>
            </article>

            <article>
              <a href="/blog/article-five">
                <PhotoImage
                  src="/images/film-production.jpg"
                  alt="Produksi film untuk kampanye brand"
                  className="aspect-[4/3]"
                />

                <div className="mt-5">
                  <p className="text-sm text-gray-500">
                    Strategy / 16 Sep 2026
                  </p>

                  <h3 className="mt-3 font-semibold">
                    Article title five.
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    Short description of the article.
                  </p>
                </div>
              </a>
            </article>

            <article>
              <a href="/blog/article-six">
                <PhotoImage
                  src="/images/camera-detail.jpg"
                  alt="Kamera untuk proses pembuatan konten"
                  className="aspect-[4/3]"
                />
              </a>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Ideas / 12 Sep 2026
                </p>

                <h3 className="mt-3 font-semibold">
                  Article title six.
                </h3>

                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Short description of the article.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}