import Link from "next/link";
import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";
import { Logo } from "./navbar";
import { NAV_ITEMS } from "@/lib/data/content";

const footerLinks = [
  {
    title: "Jelajahi",
    links: [
      { label: "Misi Kami", href: "/" },
      { label: "UU K3L", href: "/uu" },
      { label: "Masalah K3L", href: "/masalah" },
      { label: "Cara Penanganan", href: "/class" },
    ],
  },
  {
    title: "Terlibat",
    links: [
      { label: "Modul Edukasi", href: "/" },
      { label: "Masuk", href: "/login" },
      { label: "Berita K3L", href: "/" },
      { label: "Tentang Kami", href: "/tentang-kami" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { label: "Hubungi Kami", href: "/tentang-kami" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Ketentuan Penggunaan", href: "#" },
    ],
  },
];

const socials = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: MessageCircle, label: "Komunitas", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: Share2, label: "Bagikan", href: "#" },
];

export function Footer() {
  return (
    <footer className="container-k3l mt-10 pb-10">
      <div className="rounded-4xl bg-card px-6 py-10 shadow-sm sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground">
              Bersama, kita ciptakan tempat kerja yang aman, sehat, dan berkelanjutan untuk generasi mendatang.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-3">
              <h3 className="text-sm font-bold text-foreground">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-olive"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-foreground">Ikuti Kami</h3>
            <ul className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-secondary hover:text-olive-dark"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">
              © 2026 K3L Hub. Hak cipta dilindungi.
            </p>
          </div>
        </div>

        <p className="sr-only">
          {NAV_ITEMS.map((item) => item.label).join(", ")}
        </p>
      </div>
    </footer>
  );
}
