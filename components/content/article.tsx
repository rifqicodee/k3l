import Image from "next/image";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/animated/reveal";
import type { ContentSection } from "@/types/k3l";

/* Hero artikel edukasi: judul besar + foto rounded */
export function ArticleHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="container-k3l pt-6">
      <div className="grid items-center gap-8 rounded-4xl bg-card px-6 py-10 shadow-sm sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:py-14">
        <Reveal direction="right" className="space-y-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance-h text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">{lead}</p>
        </Reveal>
        <Reveal direction="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={`https://images.unsplash.com/${image}`}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
            className="object-cover"
          />
        </Reveal>
      </div>
    </header>
  );
}

/* Render blok konten generik */
function Blocks({ blocks }: { blocks: ContentSection["blocks"] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="text-2xl font-bold tracking-tight sm:text-3xl">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ol key={i} className={cn("grid gap-2.5", block.style === "number" ? "list-none" : "list-none")}>
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    {block.style === "number" ? (
                      <span className="mt-0.5 flex size-5.5 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-olive-dark">
                        {j + 1}
                      </span>
                    ) : (
                      <Check className="mt-1 size-4 shrink-0 text-olive" aria-hidden />
                    )}
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "card": {
            const tones: Record<string, string> = {
              green: "border-olive/20 bg-secondary",
              lime: "bg-lime-accent/80 text-olive-dark",
              neutral: "bg-muted",
            };
            return (
              <article
                key={i}
                className={cn(
                  "rounded-3xl border border-transparent p-5 sm:p-6",
                  tones[block.tone ?? "neutral"]
                )}
              >
                <h3 className="mb-1.5 text-base font-bold">{block.title}</h3>
                {block.text ? (
                  <p className={cn("text-sm leading-relaxed", block.tone === "lime" ? "text-olive-dark/90" : "text-muted-foreground")}>
                    {block.text}
                  </p>
                ) : null}
                {block.items ? (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Minus className="mt-1 size-3.5 shrink-0 text-olive" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}

/* Section artikel */
export function ArticleSection({ section }: { section: ContentSection }) {
  return (
    <Reveal className="space-y-5">
      {section.title ? (
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{section.title}</h2>
      ) : null}
      <Blocks blocks={section.blocks} />
    </Reveal>
  );
}
