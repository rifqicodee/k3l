import type { Metadata } from "next";
import Link from "next/link";
import { K3Icon } from "@/components/shared/k3-icon";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Masuk",
  description: "Masuk ke K3L Hub untuk mengakses materi edukasi K3L.",
};

export default function LoginPage() {
  return (
    <div className="container-k3l flex flex-1 items-center justify-center py-10">
      <div className="w-full max-w-md rounded-4xl bg-card p-8 shadow-sm sm:p-10">
        <div className="mb-8 space-y-4 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-olive text-white">
            <K3Icon className="size-6" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Selamat Datang Kembali</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Masuk untuk mengakses materi edukasi K3L.
            </p>
          </div>
        </div>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Belum punya akun?{" "}
          <Link href="#" className="font-semibold text-olive hover:underline">
            Hubungi admin
          </Link>
        </p>
      </div>
    </div>
  );
}
