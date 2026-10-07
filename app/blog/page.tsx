import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import { articles } from "./articles";

export default function BlogPage() {
  const [featuredArticle, ...latestArticles] = articles;

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Journal
            </p>

            <h1 className="type-hero min-h-[2em] font-semibold text-[var(--brown)]">
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
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              className="aspect-[4/3]"
            />

            <div className="flex flex-col justify-end">
              <p className="text-sm text-gray-500">
                {featuredArticle.category}
              </p>

              <h2 className="mt-4 font-bold">{featuredArticle.title}</h2>

              <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
                {featuredArticle.excerpt}
              </p>

              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="mt-8 w-fit text-sm font-medium underline underline-offset-4"
              >
                Baca Artikel →
              </Link>
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

              <h2 className="mt-4 font-bold">Latest Articles</h2>
            </div>

            <span className="hidden text-sm text-gray-500 md:block">
              01 — 06
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article, index) => (
              <article key={article.slug}>
                <Link href={`/blog/${article.slug}`}>
                  <PhotoImage
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[4/3]"
                  />
                </Link>

                <div className="mt-5">
                  <p className="text-sm text-gray-500">{article.category}</p>

                  <h3 className="mt-3 font-semibold">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="transition hover:opacity-70"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {article.excerpt}
                  </p>

                  <p className="mt-5 text-xs text-gray-500">
                    Artikel {String(index + 2).padStart(2, "0")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
