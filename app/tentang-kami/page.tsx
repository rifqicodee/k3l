import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { TEAM } from "@/lib/data/content";
import { ArticleHero } from "@/components/content/article";
import { Reveal } from "@/components/animated/reveal";
import { TeamGrid } from "./team-grid";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kelompok mahasiswa Teknologi Informasi yang membangun K3L Hub sebagai wujud edukasi keselamatan dan kesehatan kerja.",
};

export default function TentangKamiPage() {
  return (
    <div className="flex flex-col gap-6">
      <ArticleHero
        eyebrow="Tentang Kami"
        title="Kami Membangun Budaya Selamat, Bersama."
        lead="Kami adalah mahasiswa Teknologi Informasi yang membangun K3L Hub untuk memahami dan menyebarkan pentingnya Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L) di berbagai bidang industri."
        image="photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=70"
        imageAlt="Tim berkolaborasi dengan semangat kebersamaan"
      />

      <div className="container-k3l">
        <div className="rounded-4xl bg-card px-6 py-10 shadow-sm sm:px-10 md:py-14">
          <div className="mx-auto flex max-w-5xl flex-col gap-10">
            <Reveal direction="right" className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
                <GraduationCap className="size-6 text-olive" aria-hidden />
                Anggota Kelompok ({TEAM.length})
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Kenali tim di balik K3L Hub — mahasiswa Teknologi Informasi yang
                peduli keselamatan kerja. Dekatkan kursor atau sentuh kartu untuk
                melihat efek hologramnya.
              </p>
            </Reveal>

            <TeamGrid />

            <Reveal className="rounded-3xl bg-olive-dark p-6 text-white sm:p-8">
              <p className="text-sm leading-relaxed text-white/85">
                <strong className="font-bold text-lime-accent">Catatan:</strong>{" "}
                data profil di atas masih placeholder — ganti nama, NIM, foto,
                dan peran asli Anda di{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
                  lib/data/content.ts
                </code>{" "}
                (array <code className="text-xs">TEAM</code> &{" "}
                <code className="text-xs">TEAM_IMAGES</code>).
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
