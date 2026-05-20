"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F6] flex items-center justify-center p-6 py-20">
      <div className="bg-white w-full max-w-[580px] rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-16 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="relative w-84 h-20 mb-6">
            <Image
              src="/images/logo-nav.png"
              alt="LSP Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Buat Akun Anda
          </h1>
          <p className="text-gray-400">
            Anda wajib memiliki akun untuk mendaftar assesmen
          </p>
        </div>

        <form className="w-full space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Nama*
            </label>
            <Input
              type="text"
              placeholder="Masukan nama anda"
              className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Email*
            </label>
            <Input
              type="email"
              placeholder="Masukan email anda"
              className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Kata Sandi*
            </label>
            <Input
              type="password"
              placeholder="Buat kata sandi"
              className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Konfirmasi Password*
            </label>
            <Input
              type="password"
              placeholder="Ketik ulang kata sandi"
              className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
            />
            <p className="text-[11px] text-gray-400 ml-1 italic">
              Harus lebih dari 8 huruf
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Captcha
            </label>
            <div className="flex flex-col gap-3">
              <div className="bg-[#F9FBF8] border border-gray-100 rounded-lg p-3 w-fit">
                <span className="text-2xl font-serif tracking-[0.3em] select-none italic text-gray-600">
                  B <span className="text-[#82B124]">4</span> 7{" "}
                  <span className="text-red-400 font-bold">X</span> 2 Q
                </span>
              </div>
              <Input
                type="text"
                placeholder="Masukan Karakter di atas"
                className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
              />
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <Button className="w-full bg-[#82B124] hover:bg-[#729c1f] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-[#82B124]/20">
              Buat Akun
            </Button>

            <Button
              variant="outline"
              className="w-full h-14 rounded-xl border-gray-200 font-bold text-gray-600 flex gap-3 hover:bg-gray-50"
            >
              <div className="relative w-5 h-5">
                <Image src="/images/social-icon/google.png" alt="Google" fill />
              </div>
              Daftar dengan Google
            </Button>
          </div>
        </form>

        <p className="mt-10 text-gray-400 font-medium text-sm">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-blue-400 font-bold hover:underline"
          >
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}
