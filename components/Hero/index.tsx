import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-black text-white">
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/nostalgia-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-8 pt-32 md:px-10 md:pb-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/85 md:text-sm">
              Stories Worth Remembering
            </p>

            <h1 className="font-[family-name:var(--font-serif)] text-[18vw] font-semibold leading-[0.72] tracking-[-0.06em] md:text-[12vw]">
              Nostalgia
            </h1>
          </div>
        </div>

        <div className="border-t border-white/30 pt-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              Creative studio untuk ide, visual, dan pengalaman yang layak
              untuk diingat.
            </p>

            <Link
              href="/portfolio"
              className="w-fit border border-white px-6 py-3 text-sm transition hover:bg-white hover:text-black"
            >
              Explore Our Work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;