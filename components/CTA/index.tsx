import Link from "next/link";

const CTA = () => {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--brown)] px-6 py-24 text-[var(--cream)]">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--cream)]/60">
          Start Something
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-5xl font-bold">
            Let&apos;s create something worth remembering.
          </h2>

          <Link
            href="/contact"
            className="w-fit shrink-0 border border-[var(--cream)] px-7 py-3 text-sm transition-all hover:bg-[var(--cream)] hover:text-[var(--brown)]"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;