import Link from "next/link";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import { packages } from "@/lib/packages";

export default function PackagesPage() {
  return (
    <main>
      <section className="bg-[var(--cream)] px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--terracotta)]">
              Our Packages
            </p>
            <h1 className="mt-2 font-sans text-3xl font-medium tracking-tight text-[var(--brown)] md:text-4xl">
              Find the right way to tell your story.
            </h1>
            <p className="mt-2 text-sm text-[var(--brown-light)]">
              Pilihan layanan dokumentasi yang dirancang mengikuti kebutuhan
              setiap proyek.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`flex min-h-[34rem] flex-col p-5 md:p-7 ${
                  item.dark
                    ? "bg-[var(--brown)] text-[var(--cream-light)]"
                    : "bg-[var(--cream-light)] text-[var(--brown)]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`text-xs uppercase ${item.dark ? "text-[var(--beige)]" : "text-[var(--terracotta)]"}`}>
                    Package {item.number}
                  </span>
                </div>

                <h2 className="mt-6 font-sans text-2xl font-medium tracking-tight">
                  {item.name}
                </h2>
                <p className={`mt-2 text-xs ${item.dark ? "text-[var(--cream)]/75" : "text-[var(--brown-light)]"}`}>
                  {item.subtitle}
                </p>

                <div className={`mt-5 border-t pt-5 ${item.dark ? "border-[var(--cream-light)]/20" : "border-[var(--line)]"}`}>
                  <p className={`text-[0.65rem] font-medium uppercase tracking-wide ${item.dark ? "text-[var(--beige)]" : "text-[var(--terracotta)]"}`}>
                    Included Services
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-baseline gap-3 text-xs leading-5 ${item.dark ? "text-[var(--cream-light)]" : "text-[var(--brown-light)]"}`}
                      >
                        <span className="text-[var(--terracotta)]" aria-hidden="true">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`mt-auto inline-flex w-full items-center justify-center gap-1 px-4 py-2.5 text-xs font-medium transition ${
                    item.dark
                      ? "bg-[var(--cream-light)] text-[var(--brown)] hover:bg-[var(--beige)]"
                      : "border border-[var(--terracotta)] text-[var(--terracotta)] hover:bg-[var(--terracotta)] hover:text-[var(--cream-light)]"
                  }`}
                >
                  Konsultasikan Kebutuhan <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOM PROJECT */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 bg-[var(--beige)] p-6 sm:p-10 md:grid-cols-[1fr_0.8fr] md:items-center md:p-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--brown-light)]">
              Proyek Khusus
            </p>
            <h2 className="mt-5 max-w-3xl font-bold text-[var(--brown)]">
              Punya kebutuhan yang berbeda?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--brown-light)]">
              Ceritakan kebutuhan Capture, Create, atau Design yang ingin kamu
              kerjakan bersama Nostalgia.Kala.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex border border-[var(--brown)] px-6 py-3 text-sm font-medium text-[var(--brown)] transition hover:bg-[var(--brown)] hover:text-[var(--cream-light)]"
            >
              Minta Penawaran →
            </Link>
          </div>
          <PhotoImage
            src="/images/portrait-photography.jpg"
            alt="Sesi foto potret untuk kebutuhan fotografi"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <CTA />
    </main>
  );
}
