import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";
import {
  MASALAH_ITEMS,
  MASALAH_INTRO,
  MASALAH_STATISTIK,
  MASALAH_KESIMPULAN,
} from "@/lib/data/education";
import { ArticleHero } from "@/components/content/article";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/animated/reveal";

export const metadata: Metadata = {
  title: "Masalah K3L",
  description:
    "Tujuh masalah utama keselamatan dan kesehatan kerja di industri serta diagram kasus kecelakaan kerja 2021–2025.",
};

export default function MasalahPage() {
  const max = Math.max(...MASALAH_STATISTIK.data.map((d) => d.cases));

  return (
    <div className="flex flex-col gap-6">
      <ArticleHero
        eyebrow="Isu & Tantangan"
        title={MASALAH_INTRO.title}
        lead={MASALAH_INTRO.lead}
        image={MASALAH_INTRO.image}
        imageAlt="Ruangan kerja dengan potensi bahaya keselamatan"
      />

      {/* Daftar masalah */}
      <div className="container-k3l">
        <div className="rounded-4xl bg-card px-6 py-10 shadow-sm sm:px-10 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col gap-10">
            <RevealGroup className="flex flex-col gap-4">
              {MASALAH_ITEMS.map((item) => (
                <RevealItem key={item.title}>
                  <article className="rounded-3xl bg-muted/50 p-6 transition-colors hover:bg-secondary/70">
                    <h2 className="text-lg font-bold leading-snug">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Diagram statistik */}
            <Reveal className="rounded-3xl border border-olive/15 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight">
                {MASALAH_STATISTIK.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{MASALAH_STATISTIK.note}</p>

              <div
                className="mt-8 grid h-56 items-end gap-3 sm:grid-cols-5"
                role="img"
                aria-label="Diagram batang tren kecelakaan kerja 2021-2025"
              >
                {MASALAH_STATISTIK.data.map((d, i) => (
                  <div key={d.year} className="flex h-full flex-col justify-end gap-2 text-center">
                    <span className="text-xs font-bold text-foreground">{d.cases}</span>
                    <div
                      className="mx-auto w-full max-w-16 rounded-t-xl rounded-b-lg bg-olive/80 transition-all"
                      style={{
                        height: `${Math.round((d.cases / max) * 78)}%`,
                        backgroundColor: i === MASALAH_STATISTIK.data.length - 1 ? "var(--lime-accent)" : undefined,
                      }}
                      aria-hidden
                    />
                    <span className="text-xs font-semibold text-muted-foreground">{d.year}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Kesimpulan */}
            <Reveal className="rounded-3xl bg-olive-dark p-6 text-white sm:p-8">
              <Eyebrow tone="lime" icon={TriangleAlert}>
                Kesimpulan
              </Eyebrow>
              <p className="mt-4 leading-relaxed text-white/90">{MASALAH_KESIMPULAN}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
