import Image from "next/image";

type PhotoImageProps = {
  src: string;
  alt: string;
  className: string;
};

const PhotoImage = ({ src, alt, className }: PhotoImageProps) => {
  return (
    <div className={`relative overflow-hidden bg-[var(--beige)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover saturate-[0.82] sepia-[0.14] transition-transform duration-700 hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--terracotta)]/15 mix-blend-multiply"
      />
    </div>
  );
};

export default PhotoImage;