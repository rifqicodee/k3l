import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { UU_INTRO, UU_SECTIONS } from "@/lib/data/education";
import { ArticleHero, ArticleSection } from "@/components/content/article";
import { Reveal } from "@/components/animated/reveal";

export const metadata: Metadata = {
  title: "UU K3L",
  description:
    "UU No. 1 Tahun 1970 tentang Keselamatan Kerja: tujuan, kewajiban pengusaha, hak tenaga kerja, dan sanksi.",
};

export default function UUPage() {
  return (
    <div className="flex flex-col gap-6">
      <ArticleHero
        eyebrow="Regulasi"
        title={UU_INTRO.title}
        lead={UU_INTRO.lead}
        image={UU_INTRO.image}
        imageAlt="Denah dan proses kerja yang mengikuti standar keselamatan"
      />

      <div className="container-k3l">
        <div className="rounded-4xl bg-card px-6 py-10 shadow-sm sm:px-10 md:py-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <Reveal direction="right">
              <p className="flex items-center gap-2 text-sm font-semibold text-olive-dark">
                <BookOpen className="size-4" aria-hidden />
                Reformasi K3 di seluruh lingkungan kerja Indonesia
              </p>
            </Reveal>
            {UU_SECTIONS.map((section) => (
              <ArticleSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
