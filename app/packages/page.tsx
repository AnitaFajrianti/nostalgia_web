import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function PackagesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Packages
            </p>

            <h1 className="type-hero min-h-[2em] font-semibold text-[var(--brown)]">
              Creative solutions built around your needs.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Our Packages
            </p>
          </div>

          <div>
            <p>
              Pilih layanan yang sesuai dengan kebutuhan project kamu, atau
              diskusikan kebutuhan khusus bersama tim Nostalgia.Kala.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Choose Your Package
            </p>

            <h2 className="mt-4 font-bold">
              Find what fits your project.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* PACKAGE 01 */}
            <article className="border border-gray-200 p-8">
              <span className="text-sm text-gray-400">01</span>

              <h3 className="mt-10 font-semibold">
                Starter
              </h3>

              <p className="mt-4 text-gray-600">
                Untuk kebutuhan project yang lebih sederhana dan terarah.
              </p>

              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">Starting from</p>

                <p className="type-price mt-2 font-bold">
                  Rp X.XXX.XXX
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-base text-gray-600">
                <li>✓ Service item</li>
                <li>✓ Service item</li>
                <li>✓ Service item</li>
              </ul>
            </article>

            {/* PACKAGE 02 */}
            <article className="border border-gray-200 p-8">
              <span className="text-sm text-gray-400">02</span>

              <h3 className="mt-10 font-semibold">
                Professional
              </h3>

              <p className="mt-4 text-gray-600">
                Untuk project dengan kebutuhan yang lebih lengkap.
              </p>

              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">Starting from</p>

                <p className="type-price mt-2 font-bold">
                  Rp X.XXX.XXX
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-base text-gray-600">
                <li>✓ Service item</li>
                <li>✓ Service item</li>
                <li>✓ Service item</li>
                <li>✓ Service item</li>
              </ul>
            </article>

            {/* PACKAGE 03 */}
            <article className="border border-gray-200 p-8">
              <span className="text-sm text-gray-400">03</span>

              <h3 className="mt-10 font-semibold">
                Custom
              </h3>

              <p className="mt-4 text-gray-600">
                Solusi yang disesuaikan dengan kebutuhan dan skala project.
              </p>

              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">Pricing</p>

                <p className="type-price mt-2 font-bold">
                  Let&apos;s Talk
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-base text-gray-600">
                <li>✓ Custom service</li>
                <li>✓ Custom scope</li>
                <li>✓ Custom timeline</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                What&apos;s Included
              </p>

              <h2 className="mt-4 font-bold">
                More than just a package.
              </h2>
            </div>

            <div className="space-y-0">
              <div className="border-t border-gray-200 py-6">
                <div className="flex justify-between gap-6">
                  <span>01</span>
                  <p className="flex-1 font-medium">Consultation</p>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6">
                <div className="flex justify-between gap-6">
                  <span>02</span>
                  <p className="flex-1 font-medium">Creative Direction</p>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6">
                <div className="flex justify-between gap-6">
                  <span>03</span>
                  <p className="flex-1 font-medium">Production</p>
                </div>
              </div>

              <div className="border-y border-gray-200 py-6">
                <div className="flex justify-between gap-6">
                  <span>04</span>
                  <p className="flex-1 font-medium">Final Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM PROJECT */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 bg-gray-100 px-8 py-10 md:grid-cols-[1fr_0.8fr] md:items-center md:px-16 md:py-14">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Custom Project
              </p>

              <div className="mt-6 flex flex-col items-start gap-8">
                <h2 className="max-w-3xl font-bold">
                  Have something different in mind?
                </h2>

                <a
                  href="/contact"
                  className="shrink-0 text-sm font-medium underline underline-offset-4"
                >
                  Discuss Your Project →
                </a>
              </div>
            </div>
            <PhotoImage
              src="/images/portrait-photography.jpg"
              alt="Sesi portrait untuk layanan fotografi profesional"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}