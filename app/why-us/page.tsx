import CTA from "@/components/CTA";
import Link from "next/link";

const clientNeeds = [
  {
    need: "Membutuhkan foto atau video untuk acara dan momen penting.",
    solution:
      "Capture menyediakan dokumentasi foto dan video; cakupan ditentukan berdasarkan jenis acara dan arahan.",
    proof: [
      { label: "Sesi pranikah", href: "/portfolio/project-one" },
      { label: "Pernikahan", href: "/portfolio/project-two" },
      { label: "Pertandingan basket", href: "/portfolio/basket" },
    ],
  },
  {
    need: "Sudah memiliki rekaman, tetapi membutuhkan bantuan untuk mengolahnya.",
    solution:
      "Create mencakup penyuntingan, penyusunan alur, rangkuman, video pendek, dan pengolahan rekaman sesuai kebutuhan yang disepakati.",
    proof: [
      { label: "Video Semarak Kemerdekaan", href: "/portfolio/17an" },
    ],
  },
  {
    need: "Membutuhkan materi visual untuk media sosial atau komunikasi merek.",
    solution:
      "Design mencakup konten feed, karusel, materi promosi, pengumuman acara, dan visual media sosial.",
    note: "Contoh hasil Design belum dipublikasikan di portofolio.",
  },
  {
    need: "Menginginkan dokumentasi sekaligus materi video untuk digunakan setelah acara.",
    solution:
      "Jika sesuai arahan, kebutuhan Capture dan Create dapat dibahas dalam satu lingkup kerja, dari dokumentasi hingga penyuntingan. Bentuk hasil dan kesiapan publikasi disepakati terlebih dahulu.",
    proof: [
      { label: "Video Semarak Kemerdekaan", href: "/portfolio/17an" },
    ],
  },
];

export default function WhyUsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Mengapa Nostalgia.Kala
            </p>

            <h1 className="type-hero font-semibold text-[var(--brown)]">
              Studio kreatif untuk menangkap, mengolah, dan merancang visual.
            </h1>
          </div>
        </div>
      </section>

      {/* WHY NOSTALGIA EXISTS */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Kebutuhan &amp; Solusi
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="mb-12 text-base leading-relaxed">
              Kebutuhan visual bisa dimulai dari momen yang perlu didokumentasikan,
              rekaman yang perlu disunting, hingga materi merek yang perlu dirancang.
              Nostalgia.Kala mengerjakannya melalui layanan Capture, Create, dan
              Design.
            </p>

            <div>
              {clientNeeds.map((item, index) => (
                <div
                  key={item.need}
                  className="grid gap-4 border-t border-[var(--line)] py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <span className="text-sm text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="text-lg font-semibold leading-relaxed text-[var(--brown)]">
                      {item.need}
                    </h2>
                    <p className="mt-3 leading-relaxed text-[var(--brown-light)]">
                      {item.solution}
                    </p>
                    {item.proof && (
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {item.proof.map((work) => (
                          <Link
                            key={work.href}
                            href={work.href}
                            className="border-b border-[var(--terracotta)] pb-1 text-sm text-[var(--terracotta)] transition hover:text-[var(--terracotta-dark)]"
                          >
                            Lihat: {work.label} →
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.note && (
                      <p className="mt-4 text-sm text-[var(--brown-light)]">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR ROLE */}
      <section className="bg-[var(--brown)] px-6 py-24 text-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--cream)]/60">
              Peran Kami
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Satu studio untuk kebutuhan Capture, Create, dan Design.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-[var(--cream)]/75">
              Kamu dapat memulai dari satu layanan atau mengonsultasikan
              kebutuhan yang menggabungkan dokumentasi dan penyuntingan. Cakupan
              pekerjaan, materi yang tersedia, dan hasil akhir dibahas dalam
              arahan agar sesuai dengan kebutuhan proyek.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
