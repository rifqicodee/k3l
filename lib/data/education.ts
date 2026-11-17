import type { ContentSection } from "../../types/k3l";

/* ============================================================
 * Konten edukasi: diporting dari projectwebk3.netlify.app
 * ============================================================ */

/* ---------------- /uu ---------------- */

export const UU_INTRO = {
  title: "Undang-Undang Keselamatan dan Kesehatan Kerja (K3)",
  lead: "Keselamatan Kerja di Indonesia diatur dalam UU No. 1 Tahun 1970 tentang Keselamatan Kerja — dasar hukum utama perlindungan tenaga kerja di seluruh lingkungan kerja.",
  image: "photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=70",
};

export const UU_SECTIONS: ContentSection[] = [
  {
    id: "tujuan",
    title: "Tujuan UU No. 1 Tahun 1970",
    blocks: [
      {
        type: "list",
        style: "number",
        items: [
          "Mencegah kecelakaan kerja.",
          "Menjamin kondisi tempat kerja yang aman dan sehat.",
          "Melindungi mesin, peralatan, dan proses produksi.",
          "Menekan penyakit akibat kerja.",
          "Mewujudkan lingkungan kerja yang nyaman dan produktif.",
        ],
      },
    ],
  },
  {
    id: "kewajiban-hak",
    blocks: [
      {
        type: "card",
        tone: "green",
        title: "Kewajiban Pengusaha",
        items: [
          "Menyediakan APD.",
          "Memberikan pelatihan K3.",
          "Menjaga fasilitas kerja tetap aman.",
          "Melaporkan kecelakaan kerja.",
          "Memastikan mesin & instalasi aman.",
        ],
      },
      {
        type: "card",
        tone: "lime",
        title: "Hak Tenaga Kerja",
        items: [
          "Mendapat APD.",
          "Mendapat lingkungan kerja aman.",
          "Berhak menolak bekerja saat bahaya.",
          "Mendapat pelatihan K3.",
          "Bebas melapor bahaya kerja.",
        ],
      },
    ],
  },
  {
    id: "sanksi",
    title: "Sanksi",
    blocks: [
      {
        type: "paragraph",
        text: "Pengusaha yang melanggar ketentuan dapat dikenai denda atau pidana kurungan apabila kelalaian menyebabkan kecelakaan kerja.",
      },
      {
        type: "paragraph",
        text: "Dengan adanya UU No. 1 Tahun 1970, pemerintah menegaskan pentingnya penerapan K3 demi menciptakan lingkungan kerja yang aman dan produktif.",
      },
    ],
  },
];

/* ---------------- /masalah ---------------- */

export const MASALAH_INTRO = {
  title: "Masalah Keselamatan dan Kesehatan Kerja (K3)",
  lead: "Masalah K3 sering terjadi di berbagai sektor industri dan terus menjadi tantangan besar dalam dunia kerja modern. Walaupun peraturan sudah ada, masih banyak perusahaan yang belum menerapkan standar keselamatan secara optimal.",
  image: "photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=70",
};

export const MASALAH_ITEMS: { title: string; text: string }[] = [
  {
    title: "Kurangnya Kesadaran & Kepatuhan terhadap Prosedur K3",
    text: "Rendahnya kesadaran pekerja dan perusahaan terhadap pentingnya keselamatan. Banyak kecelakaan terjadi karena APD tidak dipakai, SOP diabaikan, atau cara kerja tidak aman demi mempercepat pekerjaan.",
  },
  {
    title: "Kondisi Lingkungan Kerja yang Tidak Aman",
    text: "Area bising, suhu ekstrem, pencahayaan buruk, lantai licin, hingga paparan bahan kimia beracun. Jika tidak dikendalikan, hal ini dapat menyebabkan cedera akut hingga kecacatan permanen.",
  },
  {
    title: "Penggunaan Mesin dan Teknologi yang Tidak Memadai",
    text: "Mesin tua, peralatan tanpa pengaman, atau teknologi tidak sesuai standar menjadi penyebab utama kecelakaan. Banyak perusahaan enggan memperbarui alat karena biaya operasional.",
  },
  {
    title: "Minimnya Pelatihan K3",
    text: "Pelatihan seharusnya menjadi kewajiban rutin, terutama di industri berisiko tinggi seperti konstruksi, pertambangan, dan manufaktur. Tanpa pelatihan, pekerja tidak memahami bahaya di tempat kerja.",
  },
  {
    title: "Tekanan Kerja dan Kelelahan (Fatigue)",
    text: "Beban kerja berlebih, shift panjang, dan kurangnya waktu istirahat menurunkan konsentrasi serta kecepatan reaksi, sehingga meningkatkan risiko kecelakaan.",
  },
  {
    title: "Kurangnya Pengawasan dan Manajemen Risiko",
    text: "Tanpa inspeksi rutin, analisis risiko, atau audit K3, potensi bahaya tidak teridentifikasi sejak awal dan baru disadari setelah kecelakaan terjadi.",
  },
  {
    title: "Budaya K3 yang Lemah",
    text: "Budaya K3 yang baik terbentuk dari kebiasaan bekerja aman dan kepemimpinan yang peduli. Banyak perusahaan masih menganggap K3 beban, bukan kebutuhan.",
  },
];

export const MASALAH_STATISTIK = {
  title: "Diagram Kasus Kecelakaan Kerja (2021–2025)",
  note: "Ilustrasi tren kasus kecelakaan kerja yang dilaporkan; angka disajikan untuk keperluan edukasi.",
  data: [
    { year: "2021", cases: 384 },
    { year: "2022", cases: 302 },
    { year: "2023", cases: 358 },
    { year: "2024", cases: 274 },
    { year: "2025", cases: 238 },
  ],
};

export const MASALAH_KESIMPULAN =
  "Masalah K3 bukan hanya tanggung jawab perusahaan, tetapi juga pekerja, pemerintah, dan seluruh elemen industri. Upaya peningkatan K3 harus dilakukan melalui pelatihan rutin, pengawasan ketat, penyediaan sarana keselamatan, dan membangun budaya kerja yang aman.";

/* ---------------- /class (Cara Penanganan) ---------------- */

export const PENANGANAN_INTRO = {
  title: "Cara Penanganan K3",
  lead: "Masalah K3 dapat terjadi di berbagai sektor industri dan sering menimbulkan kecelakaan, cedera, hingga kerugian perusahaan. Diperlukan strategi penanganan yang sistematis serta penerapan manajemen risiko yang tepat.",
  image: "photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=70",
};

export const PENANGANAN_LANGKAH: { title: string; text: string }[] = [
  {
    title: "Identifikasi Bahaya (Hazard Identification)",
    text: "Kenali seluruh potensi bahaya di tempat kerja: bahaya fisik, kimia, listrik, ergonomi, maupun perilaku kerja yang tidak aman.",
  },
  {
    title: "Penerapan APD dan Pengendalian Engineering",
    text: "Sediakan APD wajib serta pengamanan teknis: sensor otomatis, guard mesin, ventilasi, sistem pemadam otomatis, dan prosedur shutdown aman.",
  },
  {
    title: "Penegakan SOP dan Prosedur Kerja Aman",
    text: "SOP harus jelas, dipahami pekerja, dan ditegakkan konsisten. Pelanggaran prosedur diberi tindakan tegas agar risiko tidak berulang.",
  },
  {
    title: "Pelatihan dan Pembinaan K3",
    text: "Seluruh pekerja wajib mendapat pelatihan berkala: penggunaan APD, evakuasi darurat, P3K, dan penanganan kebakaran.",
  },
  {
    title: "Inspeksi Rutin dan Audit K3",
    text: "Pemeriksaan berkala memastikan lingkungan kerja tetap aman, peralatan layak, dan potensi bahaya ditemukan sebelum kecelakaan terjadi.",
  },
  {
    title: "Pengawasan dan Tindakan Korektif",
    text: "Pengawas memastikan setiap prosedur dijalankan benar. Bila ada ketidaksesuaian, perusahaan wajib segera memberi tindakan korektif.",
  },
  {
    title: "Penerapan Budaya Kerja Aman",
    text: "Bangun budaya K3 melalui keteladanan pimpinan, kebiasaan melapor bahaya, reward bagi pekerja patuh, dan komunikasi keselamatan yang efektif.",
  },
];

export const MANAJEMEN_RISIKO: ContentSection[] = [
  {
    id: "mr-pengertian",
    blocks: [
      { type: "heading", text: "2. Manajemen Risiko dalam K3" },
      {
        type: "card",
        tone: "neutral",
        title: "Pengertian Risiko & Manajemen Risiko",
        text: "Risiko adalah kemungkinan terjadinya kecelakaan kerja, penyakit akibat kerja, atau kerugian lain akibat suatu bahaya. Manajemen risiko K3 adalah proses sistematis untuk mengidentifikasi, menilai, dan mengendalikan risiko agar dampaknya minimal.",
      },
      {
        type: "card",
        tone: "green",
        title: "Tujuan Manajemen Risiko K3",
        text: "Melindungi keselamatan & kesehatan tenaga kerja, mencegah kecelakaan, mengurangi kerugian, serta menciptakan lingkungan kerja yang aman, sehat, dan produktif.",
      },
      {
        type: "card",
        tone: "lime",
        title: "Tahapan Manajemen Risiko",
        items: [
          "Identifikasi bahaya",
          "Penilaian risiko",
          "Pengendalian risiko",
          "Pemantauan & evaluasi berkelanjutan",
        ],
      },
      {
        type: "card",
        tone: "neutral",
        title: "Penerapan Kualitatif",
        text: "Menilai risiko berdasarkan kemungkinan terjadinya bahaya (likelihood) dan keparahan dampaknya (severity), biasanya dengan matriks risiko berkategori rendah, sedang, dan tinggi.",
      },
      {
        type: "card",
        tone: "neutral",
        title: "Penerapan Kuantitatif",
        text: "Menggunakan data numerik seperti frekuensi kecelakaan, tingkat paparan bahaya, dan perhitungan statistik untuk menentukan besarnya risiko secara lebih akurat.",
      },
      {
        type: "card",
        tone: "green",
        title: "Hierarki Pengendalian Risiko",
        items: [
          "Eliminasi",
          "Substitusi",
          "Pengendalian teknis",
          "Pengendalian administratif",
          "Alat pelindung diri (APD)",
        ],
      },
    ],
  },
];

export const PENANGANAN_KESIMPULAN =
  "Penanganan masalah K3 dan penerapan manajemen risiko yang baik membutuhkan komitmen seluruh pihak agar tercipta lingkungan kerja yang aman, sehat, dan berkelanjutan.";
