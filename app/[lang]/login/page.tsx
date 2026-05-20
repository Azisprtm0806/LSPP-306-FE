"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F6] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-[580px] rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 mt-20 mb-20 md:p-16 flex flex-col items-center">
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
            Masuk ke Akun Anda
          </h1>
          <p className="text-gray-400">Selamat datang kembali</p>
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="Masukan email anda"
              className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Captcha
            </label>
            <div className="flex flex-col gap-3">
              <div className="bg-[#F9FBF8] border border-gray-100 rounded-lg p-3 w-fit">
                <span className="text-2xl font-serif tracking-[0.3em] select-none italic text-gray-600 italic">
                  B <span className="text-[#82B124]">4</span> 7{" "}
                  <span className="text-red-400">X</span> 2 Q
                </span>
              </div>
              <Input
                type="text"
                placeholder="Masukan Karakter di atas"
                className="h-14 rounded-xl border-gray-200 focus:ring-[#82B124]/20 focus:border-[#82B124] px-5"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="border-gray-300 data-[state=checked]:bg-[#82B124]"
              />
              <label
                htmlFor="remember"
                className="text-gray-500 font-medium cursor-pointer"
              >
                tetap login di perangkat
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-blue-400 font-semibold hover:underline"
            >
              Lupa Password
            </Link>
          </div>

          <div className="space-y-4 pt-4">
            <Button className="w-full bg-[#82B124] hover:bg-[#729c1f] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-[#82B124]/20">
              Masuk
            </Button>

            <div className="relative flex items-center py-2"></div>

            <Button
              variant="outline"
              className="w-full h-14 rounded-xl border-gray-200 font-bold text-gray-600 flex gap-3 hover:bg-gray-50"
            >
              <div className="relative w-5 h-5">
                <Image src="/images/social-icon/google.png" alt="Google" fill />
              </div>
              Sign in with Google
            </Button>
          </div>
        </form>

        <p className="mt-10 text-gray-400 font-medium">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-blue-400 font-bold hover:underline"
          >
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
