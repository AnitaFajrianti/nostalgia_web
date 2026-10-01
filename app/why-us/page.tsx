import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function WhyUsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] px-6 py-24">
        <div className="mx-auto flex min-h-[50vh] max-w-7xl items-end">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Why Nostalgia
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              We believe good work starts with the right perspective.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Approach
            </p>
          </div>

          <div>
            <p className="text-2xl leading-relaxed md:text-3xl">
              Kami tidak hanya mengerjakan brief. Kami memahami tujuan,
              menemukan ide, lalu mengubahnya menjadi karya yang relevan.
            </p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              What We Bring
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
              A creative partner from idea to execution.
            </h2>
          </div>

          <div className="grid gap-px bg-gray-200 md:grid-cols-2">
            <article className="bg-white p-8 md:p-10">
              <span className="text-sm text-gray-400">01</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Strategic Thinking
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Setiap project dimulai dari memahami kebutuhan dan tujuan yang
                ingin dicapai.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-sm text-gray-400">02</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Creative Direction
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Ide dikembangkan menjadi konsep visual yang memiliki karakter
                dan arah yang jelas.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-sm text-gray-400">03</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Collaborative Process
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Kami membangun proses kerja yang terbuka dan kolaboratif
                bersama client.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-sm text-gray-400">04</span>

              <h3 className="mt-12 text-2xl font-semibold">
                Attention to Detail
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Detail kecil diperhatikan agar hasil akhir tetap konsisten dan
                terasa utuh.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                From idea to final result.
              </h2>
            </div>

            <div>
              <div className="border-t border-gray-200 py-6">
                <div className="flex gap-6">
                  <span className="text-sm text-gray-400">01</span>

                  <div>
                    <h3 className="font-semibold">Discover</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Memahami brand, kebutuhan, audience, dan tujuan project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6">
                <div className="flex gap-6">
                  <span className="text-sm text-gray-400">02</span>

                  <div>
                    <h3 className="font-semibold">Develop</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Mengembangkan konsep dan menentukan creative direction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6">
                <div className="flex gap-6">
                  <span className="text-sm text-gray-400">03</span>

                  <div>
                    <h3 className="font-semibold">Create</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Mengubah konsep menjadi karya dan pengalaman yang nyata.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-y border-gray-200 py-6">
                <div className="flex gap-6">
                  <span className="text-sm text-gray-400">04</span>

                  <div>
                    <h3 className="font-semibold">Deliver</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Finalisasi dan memastikan hasil sesuai kebutuhan project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <PhotoImage
            src="/images/film-production.jpg"
            alt="Kamera profesional dalam proses produksi"
            className="aspect-[16/7]"
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}