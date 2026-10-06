import CTA from "@/components/CTA";

const missions = [
  {
    number: "01",
    title: "Capture",
    description:
      "Mengabadikan momen melalui dokumentasi foto dan video yang natural, relevan, dan berkualitas.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Mengolah raw material menjadi konten visual yang engaging dan memiliki visual treatment yang kuat.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Membantu brand menyampaikan pesan melalui visual design yang menarik dan konsisten.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Memberikan hasil visual yang siap digunakan, baik untuk kebutuhan dokumentasi maupun publikasi digital.",
  },
];

const capabilities = [
  {
    title: "CAPTURE",
    description: "Event photo & video documentation",
  },
  {
    title: "CREATE",
    description: "Video editing & content production",
  },
  {
    title: "DESIGN",
    description: "Social media & visual design",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[70vh] px-6 py-24">
        <div className="mx-auto flex min-h-[50vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              About Nostalgia.Kala
            </p>

            <h1 className="type-hero font-semibold text-[var(--brown)]">
              Partner visual kreatif untuk momen dan ide yang bermakna.
            </h1>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-t border-[var(--line)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Positioning
            </p>
          </div>

          <div>
            <p className="text-[var(--brown-light)]">
              Nostalgia adalah layanan partner visual kreatif yang membantu
              klien mengabadikan, menciptakan, dan mengubah momen menjadi
              konten visual yang bermakna.
            </p>

            <p className="mt-6 text-[var(--brown-light)]">
              Banyak momen dan konten sebenarnya sudah dimiliki oleh klien,
              tetapi belum tentu sudah menjadi sesuatu yang siap digunakan atau
              memiliki nilai visual yang kuat. Nostalgia hadir sebagai partner
              visual melalui layanan capture, create, dan design.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              What We Do
            </p>

            <h2 className="font-semibold text-[var(--brown)]">
              Partner visual dari momen hingga konten siap digunakan.
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="bg-[var(--cream-light)] p-8 md:p-10"
              >
                <span className="text-sm text-[var(--brown-light)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-10 font-semibold text-[var(--brown)]">
                  {capability.title}
                </h3>

                <p className="mt-4 text-[var(--brown-light)]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}
          <div className="mb-20 max-w-3xl md:mb-28">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[var(--terracotta)]">
              Visi &amp; Misi
            </p>

            <h2 className="font-semibold text-[var(--brown)]">
              Arah yang kami tuju.
            </h2>
          </div>

          {/* VISION */}
          <div className="grid gap-10 border-y border-[var(--line)] py-12 md:grid-cols-12 md:gap-12 md:py-16">
            <div className="md:col-span-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--terracotta)] md:text-sm">
                Visi
              </span>
            </div>

            <div className="md:col-span-9">
              <p className="type-lead max-w-4xl font-[family-name:var(--font-serif)] font-medium text-[var(--brown)]">
                Menjadi partner visual kreatif yang dipercaya untuk mengubah momen
                dan ide menjadi konten yang bermakna dan memorable.
              </p>
            </div>
          </div>

          {/* MISSION HEADER */}
          <div className="mt-24 flex items-end justify-between gap-6 md:mt-32">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Misi
              </p>

              <h3 className="font-semibold text-[var(--brown)]">
                What we believe in.
              </h3>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.15em] text-[var(--brown-light)] md:block">
              02 — 05
            </span>
          </div>

          {/* MISSION GRID */}
          <div className="mt-12 grid gap-px bg-[var(--line)] md:grid-cols-2">
            {missions.map((mission) => (
              <article
                key={mission.number}
                className="group bg-[var(--cream-light)] p-8 transition-colors duration-300 hover:bg-[var(--beige)] md:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-[family-name:var(--font-serif)] text-4xl font-medium leading-none text-[var(--terracotta)] md:text-5xl">
                    {mission.number}
                  </span>

                  <span className="text-[var(--terracotta)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <div className="mt-16 max-w-md">
                  <h4 className="font-semibold text-[var(--brown)]">
                    {mission.title}
                  </h4>

                  <p className="mt-5 text-[var(--brown-light)]">
                    {mission.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}