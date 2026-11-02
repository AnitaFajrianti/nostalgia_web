import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import PhotoImage from "@/components/PhotoImage";
import { contactDetails, getWhatsAppUrl } from "@/lib/contact";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--cream-light)] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--terracotta)]">
              Kontak
            </p>

            <h1 className="type-hero font-bold text-[var(--brown)]">
              Ada proyek yang ingin kamu diskusikan?
              <br />
              <span className="text-[var(--terracotta)]">Mari berbincang.</span>
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
              Hubungi Kami
            </p>

            <h2 className="max-w-lg font-bold">
              Mari wujudkan sesuatu yang bermakna.
            </h2>

            <p className="mt-5 max-w-md leading-relaxed text-[var(--cream)]/75">
              Ceritakan kebutuhan, ide, atau proyek yang ingin kamu
              kembangkan bersama Nostalgia.Kala. Hubungi kami melalui kanal
              berikut.
            </p>

            <div className="mt-10 divide-y divide-[var(--cream)]/15 border-y border-[var(--cream)]/15">
              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">Email</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-2 inline-flex font-medium transition hover:text-[var(--beige)]"
                >
                  {contactDetails.email}
                </a>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">WhatsApp</p>
                <a
                  href={getWhatsAppUrl("Halo, Nostalgia.Kala! Saya ingin menanyakan informasi lebih lanjut.")}
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
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex font-medium transition hover:text-[var(--beige)]"
                >
                  {contactDetails.instagramHandle}
                  <span className="ml-2 text-[var(--beige)]" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--cream)]/55">Lokasi</p>
                <p className="mt-2 font-medium">
                  Indonesia
                </p>
                <a
                  href={contactDetails.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex font-medium text-[var(--beige)] transition hover:text-[var(--cream-light)]"
                >
                  Buka Google Maps ↗
                </a>
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
              Temukan Kami
            </p>

            <h2 className="max-w-md font-bold">
              Mari tetap terhubung.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-y-8 text-sm">
            {/* INSTAGRAM */}
            <div>
              <p className="text-sm text-gray-500">Instagram</p>
              <a
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium transition hover:opacity-60"
              >
                {contactDetails.instagramHandle}
              </a>
            </div>

            {/* WHATSAPP */}
            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a
                href={getWhatsAppUrl("Halo, Nostalgia.Kala! Saya ingin menanyakan informasi lebih lanjut.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium transition hover:opacity-60"
              >
                +62 811-1187-077
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">Google Maps</p>
              <a
                href={contactDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium transition hover:opacity-60"
              >
                Buka lokasi di Google Maps ↗
              </a>
            </div>

            {/* LOCATION */}
            <div>
              <p className="text-sm text-gray-500">Lokasi</p>
              <p className="mt-2 font-medium">
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT VISUAL */}
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