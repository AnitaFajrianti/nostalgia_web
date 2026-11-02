import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import { articles } from "../articles";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Artikel tidak ditemukan | Jurnal Nostalgia.Kala",
      description: "Artikel Jurnal Nostalgia.Kala tidak ditemukan.",
    };
  }

  return {
    title: `${article.title} | Jurnal Nostalgia.Kala`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Jurnal Nostalgia.Kala`,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const articleIndex = articles.findIndex((item) => item.slug === article.slug);
  const relatedArticles = Array.from(
    { length: Math.min(3, articles.length - 1) },
    (_, index) => articles[(articleIndex + index + 1) % articles.length],
  );

  return (
    <main>
      {/* ARTICLE HEADER */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Jurnal / {article.category}
            </p>

            <h1 className="mt-6 font-bold">{article.title}</h1>

            <p className="mt-6 max-w-2xl text-gray-600">{article.excerpt}</p>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <PhotoImage
            src={article.image}
            alt={article.imageAlt}
            className="aspect-[16/8]"
          />
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[220px_1fr]">
          {/* META */}
          <aside>
            <div className="sticky top-24">
              <p className="text-sm text-gray-500">Topik</p>

              <p className="mt-2 text-sm font-medium">{article.category}</p>

              <Link
                href="/blog"
                className="mt-6 inline-block text-sm underline underline-offset-4"
              >
                Kembali ke Jurnal
              </Link>
              <Link
                href="/portfolio"
                className="mt-4 block text-sm underline underline-offset-4"
              >
                Lihat portofolio
              </Link>
              <Link
                href="/packages"
                className="mt-4 block text-sm underline underline-offset-4"
              >
                Jelajahi layanan
              </Link>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="max-w-3xl">
            <p className="leading-relaxed text-gray-600">
              {article.introduction}
            </p>

            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className={`${index === 0 ? "mt-16" : "mt-12"} font-bold`}>
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}

                {index === 0 && (
                  <PhotoImage
                    src={article.image}
                    alt={article.imageAlt}
                    className="my-12 aspect-[16/9]"
                  />
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Lanjutkan Membaca
            </p>

            <h2 className="mt-4 font-bold">Artikel Terkait</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <article key={relatedArticle.slug}>
                <Link href={`/blog/${relatedArticle.slug}`}>
                  <PhotoImage
                    src={relatedArticle.image}
                    alt={relatedArticle.imageAlt}
                    className="aspect-[4/3]"
                  />
                </Link>

                <p className="mt-5 text-sm text-gray-500">
                  {relatedArticle.category}
                </p>

                <h3 className="mt-2 font-semibold">
                  <Link
                    href={`/blog/${relatedArticle.slug}`}
                    className="transition hover:opacity-70"
                  >
                    {relatedArticle.title}
                  </Link>
                </h3>
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
