import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-[var(--brown)] px-6 py-28 text-[var(--cream)] md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--cream)]/60">
          Start Something
        </p>

        <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <h2 className="max-w-5xl font-[family-name:var(--font-serif)] text-6xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-8xl">
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