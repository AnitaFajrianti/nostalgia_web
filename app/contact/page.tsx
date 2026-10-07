import CTA from "@/components/CTA";
import PhotoImage from "@/components/PhotoImage";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[60vh] px-6 py-16">
        <div className="mx-auto flex min-h-[40vh] max-w-7xl items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Contact
            </p>

            <h1 className="type-hero font-bold">
              Have a project in mind?
              <br />
              Let&apos;s talk.
            </h1>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          {/* CONTACT INFO */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Get In Touch
            </p>

            <h2 className="mt-5 max-w-lg font-bold">
              Tell us what you&apos;re working on.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-gray-600">
              Ceritakan kebutuhan, ide, atau project yang ingin kamu
              kembangkan bersama Nostalgia.Kala.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-2 font-medium">
                  hello@nostalgia.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <a
                  href="https://wa.me/628111187077?text=Halo%20Nostalgia%20Kala%2C%20saya%20ingin%20menanyakan%20informasi%20lebih%20lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-medium transition hover:opacity-60"
                >
                  +62 811-1187-077
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Instagram</p>
                <a
                  href="https://www.instagram.com/nostalgiakala.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-medium transition hover:opacity-60"
                >
                  @nostalgiakala.id
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-2 font-medium">
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-gray-300 bg-transparent px-0 py-4 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className="mt-3 w-full border-b border-gray-300 bg-transparent px-0 py-4 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="text-sm font-medium"
                >
                  Project Type
                </label>

                <select
                  id="project"
                  className="mt-3 w-full border-b border-gray-300 bg-transparent px-0 py-4 outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="branding">Branding</option>
                  <option value="digital">Digital</option>
                  <option value="creative">Creative</option>
                  <option value="campaign">Campaign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write something..."
                  className="mt-3 w-full resize-none border-b border-gray-300 bg-transparent px-0 py-4 outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Send Inquiry →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SOCIAL / LOCATION */}
      <section className="border-t px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--terracotta)]">
              Find Us
            </p>

            <h2 className="mt-4 font-bold">
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