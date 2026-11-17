import type { CourseModule, NewsItem, Stat, TeamMember } from "../../types/k3l";

/* ============================================================
 * Data konten K3L Hub — situs edukasi
 * Konten diporting dari projectwebk3.netlify.app
 * ============================================================ */

/* ---------------- NAV ---------------- */

export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "UU K3L", href: "/uu" },
  { label: "Masalah K3L", href: "/masalah" },
  { label: "Cara Penanganan", href: "/class" },
  { label: "Tentang Kami", href: "/tentang-kami" },
] as const;

/* ---------------- STATS STRIP ---------------- */

export const HERO_STATS: Stat[] = [
  { id: "stat-1", value: "520K+", label: "Pekerja Terlindungi" },
  { id: "stat-2", value: "120+", label: "Materi Edukasi" },
  { id: "stat-3", value: "350+", label: "Kasus Dibahas" },
  { id: "stat-4", value: "100%", label: "Untuk Keselamatan", highlight: true },
];

/* ---------------- MODUL / MISI ---------------- */

export const MISSION_CARDS = [
  {
    id: "prevention",
    icon: "prevention" as const,
    image: "photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=70",
    title: "Keselamatan Kerja",
    subtitle: "Pencegahan aktif",
    description: "Mencegah kecelakaan melalui standar, prosedur, dan APD yang tepat di setiap lini kerja.",
  },
  {
    id: "kesehatan",
    icon: "emergency" as const,
    image: "photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=70",
    title: "Kesehatan Kerja",
    subtitle: "Jaga kesejahteraan",
    description: "Pencegahan penyakit akibat kerja serta menjaga kesehatan fisik dan mental pekerja.",
  },
  {
    id: "lingkungan",
    icon: "community" as const,
    image: "photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70",
    title: "Lingkungan Kerja",
    subtitle: "Berdaya bersama",
    description: "Menciptakan area kerja yang bersih, aman, dan berkelanjutan untuk semua.",
  },
];

/* ---------------- LOGO STRIP ---------------- */

export const TRUSTED_LOGOS = [
  "Kemnaker RI",
  "PJK3 Nasional",
  "SMK3 Berdikari",
  "Konsorsium K3L",
  "ISO 45001 Partner",
  "Green Work ID",
] as const;

/* ---------------- MODUL MODULES (initiatives) ---------------- */

export const MODULES: CourseModule[] = [
  {
    id: "m-01",
    slug: "inspeksi-apd",
    title: "Inspeksi APD Harian",
    subtitle: "Alat Pelindung Diri",
    description: "Periksa kelengkapan APD sebelum masuk area produksi — helm, sepatu, sarung tangan, dan pelindung telinga.",
    image: "photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&w=900&q=70",
    icon: "prevention",
    level: "Dasar",
    duration: "30 menit",
    category: "APD",
  },
  {
    id: "m-02",
    slug: "budaya-selamat",
    title: "Budaya Kerja Selamat",
    subtitle: "Safety Culture",
    description: "Bangun kebiasaan bekerja aman: keteladanan pimpinan, pelaporan bahaya, dan komunikasi keselamatan.",
    image: "photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=70",
    icon: "community",
    level: "Menengah",
    duration: "45 menit",
    category: "Budaya",
  },
  {
    id: "m-03",
    slug: "siap-darurat",
    title: "Kesiapan Darurat",
    subtitle: "Emergency Response",
    description: "Prosedur evakuasi, P3K, dan penanganan kebakaran agar setiap pekerja siap menghadapi keadaan darurat.",
    image: "photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=70",
    icon: "emergency",
    level: "Lanjutan",
    duration: "60 menit",
    category: "Darurat",
  },
];

/* ---------------- BERITA ---------------- */

export const NEWS: NewsItem[] = [
  {
    id: "n-01",
    title: "Menaker Ajak Pimpinan Perusahaan Ubah Mindset untuk Perkuat K3",
    source: "detiknews",
    url: "https://news.detik.com/berita/d-8185297/menaker-ajak-pimpinan-perusahaan-di-kaltim-ubah-mindset-untuk-perkuat-k3",
    date: "2025",
  },
  {
    id: "n-02",
    title: "DPRD Batam Minta Shipyard Benahi Sistem K3 & Kompensasi Korban",
    source: "detik sumut",
    url: "https://www.detik.com/sumut/berita/d-8183636/dprd-batam-minta-pt-asl-shipyard-benahi-sistem-k3-beri-kompensasi-korban",
    date: "2025",
  },
  {
    id: "n-03",
    title: "KPK: Kasus Pemerasan K3 Kemnaker Buat Upah Pekerja Terpotong",
    source: "detiknews",
    url: "https://news.detik.com/berita/d-8084742/kpk-sebut-kasus-pemerasan-k3-kemnaker-buat-upah-pekerja-terpotong",
    date: "2025",
  },
];

/* ---------------- TIM ---------------- */

// TODO: isi data anggota sesungguhnya di sini (nama, NIM, peran) — foto opsional (URL).
export const TEAM: TeamMember[] = [
  {
    id: "member-1",
    name: "Nama Anggota 1",
    nim: "253107040011",
    role: "Mahasiswa Teknologi Informasi",
    bio: "Fokus pada penelitian konten edukasi K3L dan riset regulasi.",
  },
  {
    id: "member-2",
    name: "Nama Anggota 2",
    nim: "253107040003",
    role: "Mahasiswa Teknologi Informasi",
    bio: "Menyusun materi manajemen risiko dan regulasi K3L.",
  },
  {
    id: "member-3",
    name: "Nama Anggota 3",
    nim: "253107040043",
    role: "Mahasiswa Teknologi Informasi",
    bio: "Merancang pengalaman pengguna situs edukasi K3L.",
  },
  {
    id: "member-4",
    name: "Nama Anggota 4",
    nim: "253107040000",
    role: "Mahasiswa Teknologi Informasi",
    bio: "Meneliti kasus kecelakaan kerja dan solusi pencegahannya.",
  },
  {
    id: "member-5",
    name: "Nama Anggota 5",
    nim: "253107040000",
    role: "Mahasiswa Teknologi Informasi",
    bio: "Menyusun materi kesehatan kerja dan keselamatan lingkungan.",
  },
];

/* ---------------- FOTO PROFIL TIM ---------------- */

export const TEAM_IMAGES = new Map<string, string>([
  ["member-1", "photo-1581091226825-a6a2a5aee158"],
  ["member-2", "photo-1581093588401-fbb62a02f120"],
  ["member-3", "photo-1571844307880-751c6d86f3f3"],
  ["member-4", "photo-1507003211169-0a1dd7228f2d"],
  ["member-5", "photo-1494790108377-be9c29b29330"],
]);
