"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import PhotoImage from "@/components/PhotoImage";

type GalleryImage = {
  src: string;
  alt: string;
};

type PortfolioGalleryProps = {
  images: GalleryImage[];
  projectTitle: string;
};

const PortfolioGallery = ({
  images,
  projectTitle,
}: PortfolioGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      triggerRef.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeImage =
    activeIndex === null ? null : images[activeIndex];
  const featuredImage = images[featuredIndex];

  const openLightbox = (
    event: MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    triggerRef.current = event.currentTarget;
    setActiveIndex(index);
  };

  return (
    <>
      {featuredImage && (
        <div className="relative">
          <button
            type="button"
            onClick={(event) => openLightbox(event, featuredIndex)}
            aria-label={`Lihat ${featuredImage.alt} dalam ukuran besar`}
            className="group block w-full cursor-zoom-in text-left"
          >
            <PhotoImage
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="aspect-[16/10]"
            />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setFeaturedIndex(
                    (index) => (index - 1 + images.length) % images.length,
                  )
                }
                aria-label="Foto unggulan sebelumnya"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/75"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={() =>
                  setFeaturedIndex((index) => (index + 1) % images.length)
                }
                aria-label="Foto unggulan berikutnya"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/75"
              >
                &gt;
              </button>
            </>
          )}
        </div>
      )}

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {images.map((image, index) =>
          index === 0 ? null : (
            <button
              key={image.src}
              type="button"
              onClick={(event) => openLightbox(event, index)}
              aria-label={`Lihat ${image.alt} dalam ukuran besar`}
              className="group block w-full cursor-zoom-in text-left"
            >
              <PhotoImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3]"
              />
            </button>
          ),
        )}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} gallery`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 text-white sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Tutup galeri"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-3xl leading-none transition hover:text-white/70 sm:right-8 sm:top-8"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGallery;
