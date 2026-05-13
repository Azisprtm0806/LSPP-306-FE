"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Bell, User } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-nav.png"
                alt="Logo"
                width={250}
                height={80}
                className="w-auto h-12 object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/about"
              className={`font-medium text-sm transition-colors ${
                isActive("/about")
                  ? "text-green-600"
                  : "text-gray-800 hover:text-green-600"
              }`}
            >
              Tentang Kami
            </Link>

            <div className="relative group py-4">
              <button
                className={`flex items-center font-medium text-sm transition-colors gap-1 outline-none ${
                  pathname.includes("/sertifikasi") ||
                  pathname.includes("/skema") ||
                  pathname.includes("/alur")
                    ? "text-green-600"
                    : "text-gray-800 group-hover:text-green-600"
                }`}
              >
                Sertifikasi{" "}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white rounded-[2rem] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
                <div className="flex flex-col py-6 px-8 space-y-4 text-right">
                  {[
                    {
                      name: "Skema Sertifikasi",
                      href: "/sertifikasi/skema-sertifikasi",
                    },
                    {
                      name: "Alur Sertifikasi",
                      href: "/sertifikasi/alur-sertifikasi",
                    },
                    {
                      name: "Tracking Proses",
                      href: "/sertifikasi/tracking-proses",
                    },
                    {
                      name: "Verifikasi E-Sertifikat",
                      href: "/sertifikasi/verifikasi-e-sertifikat",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-medium text-[15px] transition-colors ${
                        isActive(item.href)
                          ? "text-green-600"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { name: "Berita", href: "/berita" },
              { name: "Kalender", href: "/kalender" },
              { name: "Galeri", href: "/galeri" },
              { name: "FAQ", href: "/faq" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-green-600"
                    : "text-gray-800 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <Link href="/notifikasi">
              <div className="relative cursor-pointer transition-transform active:scale-95">
                <Bell
                  className="h-6 w-6 text-[#8CC63F]"
                  fill="#8CC63F"
                  fillOpacity={0.2}
                />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                className="h-5 w-7 object-cover rounded-sm cursor-pointer"
              />
              <img
                src="https://flagcdn.com/w40/id.png"
                alt="Indonesia"
                className="h-5 w-7 object-cover rounded-sm cursor-pointer border border-gray-100"
              />
            </div>
            {isLoggedIn ? (
              <div className="bg-[#8CC63F] p-1.5 rounded-full cursor-pointer hover:bg-green-600 transition-colors">
                <User className="h-6 w-6 text-white" />
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <Link href="/login">
                    <button className="bg-[#8CC63F] text-white px-6 py-2.5 rounded-xl font-bold text-[15px] hover:bg-green-600 transition-all active:scale-95 shadow-sm">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="bg-white text-gray-500 border-2 border-gray-200 px-6 py-2.5 rounded-xl font-bold text-[15px] hover:border-[#8CC63F] hover:text-[#8CC63F] transition-all active:scale-95">
                      Sign Up
                    </button>
                  </Link>
                </div>
                <div className="bg-[#8CC63F] p-1.5 rounded-full cursor-pointer hover:bg-green-600 transition-colors">
                  <Link href="/profile">
                    <User className="h-6 w-6 text-white" />
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 space-y-1">
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive("/about")
                    ? "bg-green-50 text-green-600"
                    : "text-gray-700 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>

              <div className="px-3 py-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Sertifikasi
                </p>
                <div className="pl-4 border-l-2 border-gray-100 space-y-1">
                  {[
                    { name: "Skema Sertifikasi", href: "/skema-sertifikasi" },
                    { name: "Alur Sertifikasi", href: "/alur-sertifikasi" },
                    { name: "Tracking Proses", href: "/tracking-proses" },
                    {
                      name: "Verifikasi E-Sertifikat",
                      href: "/verifikasi-e-sertifikat",
                    },
                  ].map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2 text-sm font-medium rounded-md ${
                        isActive(sub.href)
                          ? "bg-green-50 text-green-600"
                          : "text-gray-600 hover:text-green-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>

              {[
                { name: "Berita", href: "/berita" },
                { name: "Kalender", href: "/kalender" },
                { name: "Galeri", href: "/galeri" },
                { name: "FAQ", href: "/faq" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? "bg-green-50 text-green-600"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 pb-2 border-t border-gray-100 mt-4 px-3">
                {isLoggedIn ? (
                  <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl">
                    <div className="bg-[#8CC63F] p-1.5 rounded-full">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        Akun Saya
                      </p>
                      <p className="text-xs text-gray-500">Lihat Profil</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full bg-[#8CC63F] text-white px-6 py-3 rounded-xl font-bold text-[15px] shadow-sm active:scale-[0.98] transition-transform">
                        Sign In
                      </button>
                    </Link>
                    <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full bg-white text-gray-500 border-2 border-gray-200 px-6 py-3 rounded-xl font-bold text-[15px] active:scale-[0.98] transition-transform">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
