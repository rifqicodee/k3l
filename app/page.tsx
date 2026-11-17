import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Leaf,
  Play,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { K3Icon } from "@/components/shared/k3-icon";
import {
  HERO_STATS,
  MISSION_CARDS,
  MODULES,
  NEWS,
  TRUSTED_LOGOS,
} from "@/lib/data/content";
import { Eyebrow } from "@/components/shared/eyebrow";
import { SectionCard } from "@/components/shared/section-card";
import { IconDisc, AvatarStack } from "@/components/shared/bits";
import { Reveal, RevealGroup, RevealItem } from "@/components/animated/reveal";
import { CountUp } from "@/components/animated/count-up";
import { Button } from "@/components/ui/button";

const MISSION_ICONS = {
  prevention: K3Icon,
  emergency: HeartPulse,
  community: Users,
};

const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=80&q=60",
  "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=80&q=60",
  "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=80&q=60",
];

const FLOATING_CARDS = [
  {
    image: "photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&w=120&q=60",
    title: "APD Lengkap",
    desc: "Perlindungan dimulai dari alat pelindung diri.",
    cls: "animate-floaty",
  },
  {
    image: "photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=120&q=60",
    title: "Budaya Selamat",
    desc: "Kepatuhan SOP di setiap kondisi kerja.",
    cls: "animate-floaty-delay",
  },
  {
    image: "photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=120&q=60",
    title: "Siap Darurat",
    desc: "Evakuasi cepat, respons tepat.",
    cls: "animate-floaty-delay-2",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="container-k3l pt-2">
        <div className="relative overflow-hidden rounded-4xl bg-card shadow-sm">
          <div className="grid min-h-[560px] items-center md:grid-cols-2">
            {/* Kiri — copywriting */}
            <div className="relative z-10 space-y-6 px-6 py-12 sm:px-10 lg:px-14">
              <Reveal>
                <Eyebrow>Selamatkan Pekerja, Selamatkan Masa Depan</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="text-balance-h text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                  Kerja Aman,{" "}
                  <span className="text-olive">Sehat Berkelanjutan</span> Hari Ini.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="max-w-md leading-relaxed text-muted-foreground">
                  Portal edukasi K3L — menghadirkan materi keselamatan, kesehatan
                  kerja, dan lingkungan secara interaktif untuk budaya kerja yang
                  aman dan sehat bagi semua pekerja.
                </p>
              </Reveal>
              <Reveal delay={0.24} className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-olive text-white hover:bg-olive-dark"
                >
                  <Link href="/uu">
                    Pelajari UU K3L
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border bg-card"
                >
                  <Link href="/class">
                    <Play className="size-4" aria-hidden />
                    Cara Penanganan K3L
                  </Link>
                </Button>
              </Reveal>
              <Reveal delay={0.3}>
                <AvatarStack
                  images={AVATAR_IMAGES}
                  caption="Bergabung bersama 15.000+ pekerja membangun budaya keselamatan"
                />
              </Reveal>
            </div>

            {/* Kanan — visual + floating cards */}
            <div className="relative h-full min-h-[420px] w-full">
              <div className="bg-grid-k3l absolute inset-0" aria-hidden />
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=70"
                alt="Area kerja konstruksi dengan prosedur keselamatan"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="img-blend absolute inset-0 object-cover"
              />
              {/* Floating cards */}
              <div className="absolute right-6 top-8 hidden w-56 flex-col gap-4 md:flex">
                {FLOATING_CARDS.map((card, i) => (
                  <div
                    key={card.title}
                    className={`flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 p-3 shadow-lg backdrop-blur ${card.cls}`}
                    style={{ marginRight: i === 1 ? "-1.5rem" : undefined }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://images.unsplash.com/${card.image}`}
                      alt=""
                      aria-hidden
                      className="size-14 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold leading-tight">{card.title}</p>
                      <p className="text-[11px] leading-snug text-muted-foreground">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="container-k3l mt-4">
        <RevealGroup className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <RevealItem key={stat.id}>
              <div
                className={`rounded-3xl px-6 py-7 text-center shadow-sm ${
                  stat.highlight ? "bg-white ring-1 ring-olive/15" : "bg-card"
                }`}
              >
                <p className="text-3xl font-extrabold tracking-tight text-foreground">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ============ MISI ============ */}
      <section className="mt-10">
        <SectionCard tone="white">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.2fr] md:items-center">
            <Reveal direction="right" className="space-y-6">
              <Eyebrow>Misi Kami</Eyebrow>
              <h2 className="text-balance-h text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Membangun Budaya <span className="text-olive">Selamat,</span> Sehat &amp; Lestari.
              </h2>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Melalui edukasi, aksi nyata, dan pelaporan yang transparan, kami
                membangun kesadaran K3L dari meja kerja hingga lapangan.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-olive text-white hover:bg-olive-dark">
                  <Link href="/masalah">
                    Kenali Masalah K3L
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-transparent">
                  <Link href="/uu">Pelajari UU K3L</Link>
                </Button>
              </div>
            </Reveal>

            <RevealGroup className="grid gap-4 sm:grid-cols-3">
              {MISSION_CARDS.map((card) => {
                const Icon = MISSION_ICONS[card.icon];
                return (
                  <RevealItem key={card.id}>
                    <Link
                      href="/masalah"
                      className="group relative flex h-[380px] w-full flex-col justify-end overflow-hidden rounded-3xl bg-olive-dark"
                      aria-label={card.title}
                    >
                      <Image
                        src={`https://images.unsplash.com/${card.image}`}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <IconDisc icon={Icon} className="absolute left-4 top-4" />
                      <div className="relative z-10 p-5">
                        <h3 className="text-lg font-bold text-white">{card.title}</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                          {card.subtitle}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-white/80">
                          {card.description}
                        </p>
                      </div>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </SectionCard>
      </section>

      {/* ============ LOGO STRIP ============ */}
      <section className="mt-10 overflow-hidden">
        <div className="container-k3l flex items-center gap-8">
          <p className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Didukung oleh
          </p>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex w-max items-center gap-14">
              {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="flex items-center gap-2 text-sm font-bold text-muted-foreground/70"
                >
                  <Sprout className="size-4 text-olive/60" aria-hidden />
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ AKSI NYATA (MODUL) ============ */}
      <section className="mt-10">
        <SectionCard tone="paper">
          <div className="mb-8 flex items-center justify-between">
            <Reveal direction="right">
              <Eyebrow>Aksi Nyata</Eyebrow>
            </Reveal>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Kartu modul */}
            <RevealGroup className="grid gap-4 sm:grid-cols-3">
              {MODULES.map((mod) => (
                <RevealItem key={mod.id}>
                  <article className="group rounded-3xl bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={`https://images.unsplash.com/${mod.image}`}
                        alt={mod.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-olive-dark backdrop-blur">
                        {mod.category}
                      </span>
                    </div>
                    <div className="px-3 pb-3 pt-4">
                      <h3 className="text-sm font-bold leading-snug">{mod.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {mod.description}
                      </p>
                      <Link
                        href="/class"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-olive"
                        aria-label={`Pelajari modul ${mod.title}`}
                      >
                        Pelajari Modul
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Copy + newsletter */}
            <Reveal direction="left" className="space-y-6">
              <h2 className="text-balance-h text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Tindakan Nyata. Dampak Nyata. <span className="text-olive">Masa Depan Lebih Selamat.</span>
              </h2>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Temukan cara menangani risiko di tempat kerja melalui modul
                edukasi K3L yang mendukung komunitas kerja Anda.
              </p>
              <Link
                href="/class"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-olive underline-offset-4 hover:underline"
              >
                Lihat Semua Modul
                <ArrowRight className="size-4" aria-hidden />
              </Link>

              {/* Kartu newsletter */}
              <div className="mt-2 rounded-3xl bg-lime-accent p-6">
                <h3 className="text-lg font-extrabold">Terinspirasi &amp; Terinformasi.</h3>
                <p className="mt-1.5 text-sm/relaxed text-olive-dark/90">
                  Dapatkan update modul, cerita lapangan, dan tips K3L paling baru.
                </p>
                <form className="mt-4 flex gap-2" action="/login">
                  <input
                    type="email"
                    required
                    placeholder="Masukkan email..."
                    aria-label="Email untuk newsletter"
                    className="h-10 w-full flex-1 rounded-full border border-olive/20 bg-white/90 px-4 text-sm outline-none placeholder:text-olive-dark/50 focus-visible:ring-2 focus-visible:ring-olive/40"
                  />
                  <Button
                    type="submit"
                    className="h-10 shrink-0 rounded-full bg-olive text-white hover:bg-olive-dark"
                  >
                    Daftar
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </form>
                <AvatarStack
                  images={AVATAR_IMAGES}
                  caption="Bergabung bersama ribuan pejuang keselamatan"
                  dark
                  className="mt-4 [&_img]:border-lime-accent"
                />
              </div>
            </Reveal>
          </div>
        </SectionCard>
      </section>

      {/* ============ BERITA ============ */}
      <section className="container-k3l mt-10 lg:mt-14">
        <SectionCard tone="white">
          <Reveal direction="right" className="mb-8 space-y-3">
            <Eyebrow icon={Leaf}>Berita K3L Terbaru</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Kabar Keselamatan Kerja Hari Ini.
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-4 md:grid-cols-3">
            {NEWS.map((item) => (
              <RevealItem key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl bg-muted/60 p-6 transition-colors hover:bg-secondary"
                >
                  <span className="w-fit rounded-full bg-background px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {item.source}
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug group-hover:text-olive">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-olive">
                    Baca di sumber
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Footer mini note */}
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-olive/70" aria-hidden />
            Mulai dari UU K3L, kenali masalahnya, lalu pelajari cara penanganan — semuanya gratis di portal ini.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
