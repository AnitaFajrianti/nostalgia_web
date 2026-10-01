import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function BlogDetailPage() {
  return (
    <main>
      {/* ARTICLE HEADER */}
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Creative / 01 October 2026
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Article title goes here.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Short introduction atau excerpt dari artikel yang akan dibaca.
          </p>
        </div>
      </section>

      {/* COVER */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <PhotoImage
            src="/images/film-production.jpg"
            alt="Kamera merekam adegan produksi video"
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
              <p className="text-sm text-gray-500">Published</p>

              <p className="mt-2 text-sm font-medium">
                01 October 2026
              </p>

              <p className="mt-6 text-sm text-gray-500">Category</p>

              <p className="mt-2 text-sm font-medium">
                Creative
              </p>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed">
              Intro artikel bisa ditempatkan di sini. Area ini nantinya
              digunakan untuk konten utama dari artikel.
            </p>

            <h2 className="mt-16 text-3xl font-bold">
              Subheading artikel
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Paragraf artikel. Konten panjang nantinya dapat ditempatkan
              secara natural di area ini.
            </p>

            <p className="mt-6 leading-relaxed text-gray-600">
              Paragraf berikutnya dapat berisi penjelasan, insight, cerita,
              atau informasi pendukung lainnya.
            </p>

            <PhotoImage
              src="/images/camera-detail.jpg"
              alt="Detail kamera dalam proses produksi"
              className="my-12 aspect-[16/9]"
            />

            <h2 className="text-3xl font-bold">
              Another section
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Bagian lanjutan artikel bisa menggunakan heading, paragraf,
              gambar, video, quote, atau elemen pendukung lainnya.
            </p>
          </div>
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Continue Reading
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Related Articles
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <article>
              <PhotoImage
                src="/images/photography-session.jpg"
                alt="Sesi pemotretan editorial"
                className="aspect-[4/3]"
              />

              <p className="mt-5 text-sm text-gray-500">
                Creative
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Related article one.
              </h3>
            </article>

            <article>
              <PhotoImage
                src="/images/portrait-photography.jpg"
                alt="Fotografi portrait dalam pencahayaan studio"
                className="aspect-[4/3]"
              />

              <p className="mt-5 text-sm text-gray-500">
                Branding
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Related article two.
              </h3>
            </article>

            <article>
              <PhotoImage
                src="/images/film-production.jpg"
                alt="Kamera video untuk produksi digital"
                className="aspect-[4/3]"
              />

              <p className="mt-5 text-sm text-gray-500">
                Digital
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Related article three.
              </h3>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}