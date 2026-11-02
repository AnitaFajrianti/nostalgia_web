import Image from "next/image";

type PhotoImageProps = {
  src: string;
  alt: string;
  className: string;
  preserveAspectRatio?: boolean;
};

const PhotoImage = ({
  src,
  alt,
  className,
  preserveAspectRatio = false,
}: PhotoImageProps) => {
  return (
    <div className={`relative overflow-hidden bg-[var(--beige)] ${className}`}>
      {preserveAspectRatio ? (
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ width: "100%", height: "auto" }}
          className="block saturate-[0.82] sepia-[0.14] transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover saturate-[0.82] sepia-[0.14] transition-transform duration-700 hover:scale-105"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--terracotta)]/15 mix-blend-multiply"
      />
    </div>
  );
};

export default PhotoImage;