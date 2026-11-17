import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { K3Icon } from "@/components/shared/k3-icon";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-k3l flex flex-1 items-center justify-center py-20">
      <div className="rounded-4xl bg-card px-8 py-16 text-center shadow-sm sm:px-16">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-lime-accent text-olive-dark">
          <K3Icon className="size-7" />
        </span>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          4<span className="text-olive">0</span>4
        </h1>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Halaman tidak ditemukan — mungkin area kerjanya masih kosong atau alamatnya ada kesalahan.
        </p>
        <Button
          asChild
          className="mt-8 rounded-full bg-olive text-white hover:bg-olive-dark"
        >
          <Link href="/">
            <ArrowLeft className="size-4" aria-hidden />
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  );
}
