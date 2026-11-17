import type { Metadata } from "next";
import {
  MANAJEMEN_RISIKO,
  PENANGANAN_INTRO,
  PENANGANAN_LANGKAH,
  PENANGANAN_KESIMPULAN,
} from "@/lib/data/education";
import { ArticleHero, ArticleSection } from "@/components/content/article";
import { RevealGroup, RevealItem, Reveal } from "@/components/animated/reveal";
import { Eyebrow } from "@/components/shared/eyebrow";
import { ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "Cara Penanganan K3L",
  description:
    "Tujuh langkah penanganan masalah K3 dan manajemen risiko: kualitatif, kuantitatif, dan hierarki pengendalian.",
};

export default function ClassPage() {
  return (
    <div className="flex flex-col gap-6">
      <ArticleHero
        eyebrow="Solusi"
        title={PENANGANAN_INTRO.title}
        lead={PENANGANAN_INTRO.lead}
        image={PENANGANAN_INTRO.image}
        imageAlt="Pekerja menerapkan prosedur keselamatan di area industri"
      />

      <div className="container-k3l">
        <div className="rounded-4xl bg-card px-6 py-10 shadow-sm sm:px-10 md:py-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            {/* 1. Langkah penanganan */}
            <Reveal className="space-y-6">
              <Eyebrow icon={ListChecks}>Strategi Sistematis</Eyebrow>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                1. Cara Penanganan Masalah K3
              </h2>
              <RevealGroup className="flex flex-col gap-4">
                {PENANGANAN_LANGKAH.map((step, i) => (
                  <RevealItem key={step.title}>
                    <article className="flex gap-4 rounded-3xl bg-muted/50 p-5 transition-colors hover:bg-secondary/70 sm:p-6">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-olive text-sm font-extrabold text-white">
                        {String.fromCharCode(97 + i)}
                      </span>
                      <div>
                        <h3 className="text-base font-bold">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>

            {/* 2. Manajemen risiko */}
            {MANAJEMEN_RISIKO.map((section) => (
              <ArticleSection key={section.id} section={section} />
            ))}

            <Reveal className="rounded-3xl bg-olive-dark p-6 text-white sm:p-8">
              <Eyebrow tone="lime">Kesimpulan</Eyebrow>
              <p className="mt-4 leading-relaxed text-white/90">{PENANGANAN_KESIMPULAN}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
