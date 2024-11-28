// import Image from "next/image";
"use client";

import { LoginForm } from "@/components/forms/login-form";
import Image from "@/components/ui/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  // const url = searchParams.get("redirect_uri");

  return (
    <>
      <div className="grid gap-2 text-center">
        <div className="relative m-auto  aspect-[4/1] w-full ">
          <Image
            className="rounded-2xl"
            src="/images/full-login.png"
            alt="Profile Image"
            fill
            enableTransition={false}
            enableLoading={false}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">
          Silakan masukkan informasi akun Anda untuk mengakses layanan kami.
        </p>
      </div>
      <div className="grid gap-4">
        <LoginForm />
      </div>
      <div className="mt-4 text-center text-sm">
        Belum punya akun ?{" "}
        <Link href="/auth/register" className="underline">
          Daftar
        </Link>
      </div>
    </>
  );
}
