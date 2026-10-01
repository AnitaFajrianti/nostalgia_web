import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] px-6 py-24">
        <div className="mx-auto flex min-h-[50vh] max-w-7xl items-end">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              About Nostalgia
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              We create digital experiences that people remember.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Who We Are
            </p>
          </div>

          <div>
            <p className="text-2xl leading-relaxed md:text-3xl">
              Nostalgia is a creative studio focused on creating meaningful
              digital experiences, visual identities, and creative solutions
              for brands.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Built from ideas, shaped by creativity.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <PhotoImage
              src="/images/photography-session.jpg"
              alt="Fotografer mengarahkan sesi pemotretan"
              className="aspect-[4/3]"
            />

            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                Cerita, perjalanan, dan pendekatan Nostalgia bisa ditempatkan
                di area ini. Bagian ini nantinya dapat diisi dengan visual,
                timeline, atau storytelling sesuai brand guideline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What drives our work.
            </h2>
          </div>

          <div className="grid gap-px bg-gray-200 md:grid-cols-3">
            <div className="bg-white p-8">
              <span className="text-sm text-gray-400">01</span>
              <h3 className="mt-10 text-2xl font-semibold">Creativity</h3>
              <p className="mt-4 text-gray-600">
                Mengembangkan ide yang relevan dan memiliki karakter.
              </p>
            </div>

            <div className="bg-white p-8">
              <span className="text-sm text-gray-400">02</span>
              <h3 className="mt-10 text-2xl font-semibold">Purpose</h3>
              <p className="mt-4 text-gray-600">
                Setiap visual dan konsep memiliki tujuan yang jelas.
              </p>
            </div>

            <div className="bg-white p-8">
              <span className="text-sm text-gray-400">03</span>
              <h3 className="mt-10 text-2xl font-semibold">Experience</h3>
              <p className="mt-4 text-gray-600">
                Menciptakan pengalaman yang mudah dipahami dan diingat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <p className="text-5xl font-bold">10+</p>
              <p className="mt-2 text-gray-500">Years Experience</p>
            </div>

            <div>
              <p className="text-5xl font-bold">100+</p>
              <p className="mt-2 text-gray-500">Projects</p>
            </div>

            <div>
              <p className="text-5xl font-bold">50+</p>
              <p className="mt-2 text-gray-500">Clients</p>
            </div>

            <div>
              <p className="text-5xl font-bold">∞</p>
              <p className="mt-2 text-gray-500">Ideas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}