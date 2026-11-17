import Image from "next/image";
import { cn } from "@/lib/utils";

/** Icon bulat putih untuk kartu foto overlay (gaya Aeline) */
export function IconDisc({
  icon: Icon,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-11 items-center justify-center rounded-full bg-white text-olive shadow-md",
        className
      )}
    >
      <Icon className="size-5" aria-hidden />
    </span>
  );
}

/** Avatar stack untuk social proof */
export function AvatarStack({
  images,
  caption,
  dark = false,
  className,
}: {
  images: string[];
  caption?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-2.5">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            className="size-9 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      {caption ? (
        <p className={cn("text-xs leading-snug", dark ? "text-white/80" : "text-muted-foreground")}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}

/** Kartu foto dengan overlay gradien + konten bawah */
export function OverlayImageCard({
  image,
  alt,
  children,
  className,
}: {
  image: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-[380px] w-full flex-col justify-end overflow-hidden rounded-3xl",
        className
      )}
    >
      <Image
        src={`https://images.unsplash.com/${image}`}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <div className="relative z-10 p-5">{children}</div>
    </div>
  );
}
