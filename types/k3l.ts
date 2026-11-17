import type { LucideIcon } from "lucide-react";

/** Modul pembelajaran K3L */
export interface CourseModule {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: "prevention" | "emergency" | "community";
  level: "Dasar" | "Menengah" | "Lanjutan";
  duration: string;
  category: string;
}

/** Statistik ringkas untuk stats strip */
export interface Stat {
  id: string;
  value: string;
  label: string;
  highlight?: boolean;
  icon?: LucideIcon;
}

/** Anggota tim (Tentang Kami) */
export interface TeamMember {
  id: string;
  name: string;
  nim: string;
  role: string;
  bio?: string;
  image?: string;
}

/** Section konten edukasi yang generik (UU, masalah, penanganan) */
export interface ContentSection {
  id: string;
  title?: string;
  blocks: ContentBlock[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; style?: "bullet" | "number" }
  | { type: "card"; title: string; items?: string[]; text?: string; tone?: "green" | "neutral" | "lime" }
  | { type: "stat" ; label: string; values: { year: string; cases: number }[] };

/** Berita / insight K3L */
export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  date: string;
}
