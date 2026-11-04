import Link from "next/link";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";
import { articles } from "./blog/articles";

const selectedWorks = [
  {
    slug: "project-one",
    title: "Sesi Foto Pranikah",
    category: "Fotografi Pranikah",
    image: "/images/prewed-porto/foto-prewedding-hijab-jas-hitam-elegan.jpg",
    alt: "Foto pranikah pasangan dengan hijab dan jas hitam elegan",
  },
  {
    slug: "basket",
    title: "Dokumentasi Pertandingan Basket",
    category: "Fotografi Olahraga",
    image: "/images/basket-porto/foto-konseptual-pemain-basket-monokrom.jpg",
    alt: "Foto konseptual pemain basket dalam gaya monokrom",
  },
];

const serviceGroups = [
  {
    name: "Dokumentasi Acara",
    category: "CAPTURE",
    services: [
      "Fotografi acara",
      "Videografi acara",
      "Video sorotan",
      "Rangkuman acara",
      "Di balik layar",
    ],
  },
  {
    name: "Penyuntingan Konten",
    category: "CREATE",
    services: [
      "Penyuntingan Reels",
      "Video berdurasi pendek",
      "Penyuntingan rangkuman acara",
      "Video media sosial",
      "Penyuntingan rekaman mentah",
    ],
  },
  {
    name: "Konten Visual",
    category: "DESIGN",
    services: [
      "Konten feed Instagram",
      "Karusel",
      "Materi promosi",
      "Pengumuman acara",
      "Visual media sosial",
    ],
  },
];

const workFlows = [
  {
    number: "01",
    title: "Mengolah bahan yang sudah ada",
    service: "CREATE · DESIGN",
    description:
      "Untuk klien yang sudah memiliki rekaman, foto, atau materi merek dan membutuhkan bantuan penyuntingan maupun desain.",
    steps: [
      ["Arahan awal", "Ceritakan tujuan, audiens, materi, dan kebutuhan konten."],
      ["Tinjau bahan", "Pilih rekaman atau aset yang akan diolah bersama."],
      ["Olah konten", "Kerjakan penyuntingan video atau desain sesuai arahan."],
      ["Konten akhir", "Serahkan hasil sesuai format dan cakupan yang disepakati."],
    ],
  },
  {
    number: "02",
    title: "Dokumentasi dan pengolahan",
    service: "CAPTURE · CREATE",
    description:
      "Untuk kebutuhan dokumentasi foto atau video acara yang dilanjutkan dengan penyuntingan hasil.",
    steps: [
      ["Arahan awal", "Bahas acara, jadwal, momen prioritas, dan hasil yang dibutuhkan."],
      ["Dokumentasi", "Ambil foto atau video sesuai cakupan yang disepakati."],
      ["Pilih dan olah", "Tinjau materi, lalu sunting hasil sesuai arahan."],
      ["Konten akhir", "Serahkan hasil dokumentasi dan olahan sesuai kesepakatan."],
    ],
  },
  {
    number: "03",
    title: "Layanan terintegrasi",
    service: "CAPTURE · CREATE · DESIGN",
    description:
      "Untuk proyek yang membutuhkan proses dari perencanaan visual hingga materi akhir.",
    steps: [
      ["Arahan dan konsep visual", "Selaraskan tujuan, kebutuhan, referensi, dan alur kerja."],
      ["Produksi", "Lakukan dokumentasi foto atau video sesuai rencana."],
      ["Olah dan rancang", "Sunting materi dan siapkan desain sesuai cakupan."],
      ["Konten akhir", "Tinjau hasil dan serahkan materi sesuai format yang disepakati."],
    ],
  },
];

const faqs = [
  {
    question: "Apakah Nostalgia.Kala menerima pekerjaan di luar kota?",
    answer:
      "Ceritakan lokasi, tanggal, dan kebutuhan proyek melalui halaman Kontak. Ketersediaan tim serta kebutuhan perjalanan akan dikonfirmasi sebelum penawaran disusun.",
  },
  {
    question: "Apakah bisa menggunakan jasa penyuntingan tanpa dokumentasi?",
    answer:
      "Bisa dikonsultasikan. Nostalgia.Kala menyediakan penyuntingan rekaman yang sudah dimiliki klien. Sampaikan materi, tujuan konten, dan format yang dibutuhkan agar cakupan pekerjaan dapat dibahas.",
  },
  {
    question: "Apakah konsep dan hasil bisa disesuaikan?",
    answer:
      "Ya. Sampaikan tujuan, referensi, materi, serta kebutuhan penggunaan saat konsultasi awal. Konsep, format, dan hasil akan dibahas dan dicantumkan dalam cakupan proyek sebelum pekerjaan dimulai.",
  },
  {
    question: "Berapa lama estimasi pengerjaan?",
    answer:
      "Estimasi bergantung pada jenis layanan, jumlah materi, dan hasil yang disepakati. Jadwal pengerjaan akan dikonfirmasi setelah kebutuhan dan cakupan proyek dibahas.",
  },
  {
    question: "Berapa kali revisi yang termasuk?",
    answer:
      "Batas dan cakupan revisi belum ditetapkan secara umum. Detail revisi akan dibahas dan dicantumkan dalam penawaran sebelum proyek dimulai.",
  },
  {
    question: "Bagaimana cara memesan layanan?",
    answer:
      "Hubungi kami melalui formulir Kontak atau WhatsApp. Sertakan jenis layanan, jadwal atau tenggat, lokasi jika ada, serta gambaran kebutuhan. Tim akan menindaklanjuti ketersediaan dan cakupan pekerjaan.",
  },
  {
    question: "Bagaimana ketentuan pembayaran?",
    answer:
      "Metode, jadwal, dan ketentuan pembayaran belum ditetapkan di halaman ini. Detailnya akan disampaikan dan disepakati dalam penawaran sebelum proyek dimulai.",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  project: string;
};

const testimonials: Testimonial[] = [];

export default function Home() {
  return (
    <>
      <Hero />

      {/* INTRO */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Tentang Nostalgia.Kala
              </p>
            </div>

            <div>
              <h2>
                Partner visual kreatif untuk momen dan ide yang bermakna.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--brown-light)]">
                Nostalgia adalah layanan partner visual kreatif yang membantu
                klien mengabadikan, menciptakan, dan mengubah momen menjadi
                konten visual yang bermakna.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[var(--brown)] pb-1 text-sm font-medium"
              >
                Kenali Nostalgia.Kala →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Karya Pilihan
              </p>

              <h2 className="font-bold">Karya pilihan kami.</h2>
            </div>

            <Link
              href="/portfolio"
              className="hidden border-b border-[var(--brown)] pb-1 text-sm md:block"
            >
              Lihat Semua Karya →
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {selectedWorks.map((project, index) => (
              <article key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <PhotoImage
                    src={project.image}
                    alt={project.alt}
                    className={`aspect-[4/3] transition duration-500 group-hover:opacity-90 ${
                      index === 1 ? "md:mt-24" : ""
                    }`}
                  />
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-semibold text-[var(--brown)]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--brown-light)]">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brown-light)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-[var(--line)] bg-[var(--brown)] px-6 py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--cream)]/60">
            Filosofi Kami
          </p>

          <h2 className="max-w-6xl font-bold">
            Karya yang baik bukan hanya terlihat menarik.
            <br />
            Namun juga membekas.
          </h2>

          <div className="mt-12 flex justify-end">
            <p className="max-w-md text-base leading-relaxed text-[var(--cream)]/70">
              Kami percaya bahwa karya yang baik bukan hanya tentang tampilan,
              tetapi tentang bagaimana sebuah pengalaman terasa dan diingat.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Layanan Kami
            </p>

            <h2 className="font-bold">
              Dari momen yang ditangkap hingga visual siap digunakan.
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <article
                key={group.category}
                className="bg-[var(--cream)] p-8 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--brown-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs tracking-[0.15em] text-[var(--terracotta)]">
                    {group.category}
                  </span>
                </div>

                <h3 className="mt-10 font-semibold">{group.name}</h3>

                <ul className="mt-6 space-y-3 border-t border-[var(--line)] pt-6 text-[var(--brown-light)]">
                  {group.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Cara Kami Bekerja
              </p>
              <h2 className="font-bold text-[var(--brown)]">
                Alur kerja dari arahan awal hingga konten akhir.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--brown-light)] md:col-span-5">
              Pilih alur yang sesuai dengan kebutuhan. Lingkup layanan, materi,
              format, dan hasil akhir dibahas sejak arahan awal sebelum pekerjaan
              dimulai.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {workFlows.map((flow) => (
              <article
                key={flow.number}
                className="flex h-full flex-col border border-[var(--line)] bg-[var(--cream)] p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-4xl leading-none text-[var(--terracotta)]">
                    {flow.number}
                  </span>
                  <span className="text-right text-xs tracking-[0.12em] text-[var(--terracotta)]">
                    {flow.service}
                  </span>
                </div>

                <h3 className="mt-8 font-semibold text-[var(--brown)]">
                  {flow.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-[var(--brown-light)]">
                  {flow.description}
                </p>

                <ol className="mt-6 grid flex-1 grid-rows-4 border-t border-[var(--line)]">
                  {flow.steps.map(([title, description], index) => (
                    <li
                      key={title}
                      className="grid grid-cols-[2rem_1fr] gap-3 border-b border-[var(--line)] py-4 last:border-b-0"
                    >
                      <span className="pt-0.5 text-xs text-[var(--terracotta)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-base font-semibold leading-snug text-[var(--brown)]">
                          {title}
                        </h4>
                        <p className="mt-1 text-[0.9375rem] leading-relaxed text-[var(--brown-light)]">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Testimoni
              </p>
              <h2 className="font-bold text-[var(--brown)]">
                Cerita dari klien kami.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={`${testimonial.name}-${testimonial.project}`}
                  className="border border-[var(--line)] bg-[var(--cream-light)] p-7 md:p-9"
                >
                  <blockquote className="leading-relaxed text-[var(--brown)]">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[var(--line)] pt-4">
                    <span className="block font-medium text-[var(--brown)]">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--brown-light)]">
                      {testimonial.project}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-[var(--line)] bg-[var(--cream)] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Pertanyaan Umum
            </p>
            <h2 className="mt-4 font-bold text-[var(--brown)]">
              Pertanyaan yang sering diajukan.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--brown-light)]">
              Belum menemukan jawaban yang kamu cari? Ceritakan kebutuhanmu
              kepada tim kami.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block border-b border-[var(--terracotta)] pb-1 text-sm font-medium text-[var(--terracotta)] transition hover:text-[var(--terracotta-dark)]"
            >
              Hubungi Nostalgia.Kala →
            </Link>
          </div>

          <div className="md:col-span-8">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-t border-[var(--line)] py-5 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-[var(--brown)] marker:hidden">
                  <span>
                    <span className="mr-4 text-sm font-normal text-[var(--terracotta)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-[var(--terracotta)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pl-10 leading-relaxed text-[var(--brown-light)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-[var(--line)] bg-[var(--cream-light)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
                Jurnal
              </p>

              <h2 className="font-bold">
                Catatan dari kami.
              </h2>
            </div>

            <Link
              href="/blog"
              className="hidden border-b border-[var(--brown)] pb-1 text-sm md:block"
            >
              Baca Jurnal →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <article key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block"
                >
                  <PhotoImage
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[4/3] transition duration-500 group-hover:opacity-90"
                  />
                  <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[var(--brown-light)]">
                    {article.category}
                  </p>
                  <h3 className="mt-3 font-semibold text-[var(--brown)]">
                    {article.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}