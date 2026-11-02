import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import PhotoImage from "@/components/PhotoImage";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--cream-light)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--terracotta)]">
              Contact
            </p>

            <h1 className="type-hero font-bold text-[var(--brown)]">
              Have a project in mind?
              <br />
              <span className="text-[var(--terracotta)]">Let&apos;s talk.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-[var(--brown-light)]">
              Ceritakan ide dan kebutuhanmu. Kami siap membantu mengubahnya
              menjadi sesuatu yang layak diingat.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="border-t border-[var(--line)] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* CONTACT INFO */}
          <div className="bg-[var(--brown)] p-8 text-[var(--cream-light)] md:p-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--beige)]">
              Get in touch
            </p>

            <h2 className="max-w-lg font-bold">
              Let&apos;s make something meaningful.
            </h2>

            <p className="mt-5 max-w-md leading-relaxed text-[var(--cream)]/75">
              Ceritakan kebutuhan, ide, atau project yang ingin kamu
              kembangkan bersama Nostalgia.Kala. Hubungi kami lewat kanal
              berikut.
            </p>

            <div className="mt-10 divide-y divide-[var(--cream)]/15 border-y border-[var(--cream)]/15">
              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">Email</p>
                <p className="mt-2 font-medium">
                  hello@nostalgia.com
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">WhatsApp</p>
                <a
                  href="https://wa.me/628111187077?text=Halo%20Nostalgia%20Kala%2C%20saya%20ingin%20menanyakan%20informasi%20lebih%20lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex font-medium transition hover:text-[var(--beige)]"
                >
                  +62 811-1187-077
                  <span className="ml-2 text-[var(--beige)]" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">Instagram</p>
                <a
                  href="https://www.instagram.com/nostalgiakala.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex font-medium transition hover:text-[var(--beige)]"
                >
                  @nostalgiakala.id
                  <span className="ml-2 text-[var(--beige)]" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">Location</p>
                <p className="mt-2 font-medium">
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-[var(--line)] bg-[var(--cream-light)] p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SOCIAL / LOCATION */}
      <section className="border-t border-[var(--line)] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Find Us
            </p>

            <h2 className="max-w-md font-bold">
              Let&apos;s stay connected.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-y-8 text-sm">
            {/* INSTAGRAM */}
            <div>
              <p className="text-sm text-gray-500">Instagram</p>
              <a
                href="https://www.instagram.com/studionostalgia.id"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium transition hover:opacity-60"
              >
                @nostalgiakala.id
              </a>
            </div>

            {/* WHATSAPP */}
            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a
                href="https://wa.me/628111187077?text=Halo%2C%20Nostalgia%20Kala.%20Saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium transition hover:opacity-60"
              >
                +62 811-1187-077
              </a>
            </div>

            {/* LOCATION */}
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="mt-2 font-medium">
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / VISUAL */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <PhotoImage
            src="/images/photography-session.jpg"
            alt="Tim kreatif menyiapkan sesi pemotretan"
            className="aspect-[16/6]"
          />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}