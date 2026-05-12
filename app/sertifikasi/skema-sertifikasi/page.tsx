"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/FloatingContact";
import SertifikasiCard from "@/components/SertifikasiCard";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";

const SCHEMES_DATA = [
  {
    id: 1,
    title: "Skema Sertifikasi Okupasi Penulis Buku",
    description:
      "Kompetensi penulisan buku fiksi dan non-fiksi sesuai standar industri.",
    price: "Rp 1.750.000,00",
    image: "/images/skema/skema1.png",
  },
  {
    id: 2,
    title: "Skema Sertifikasi Editor Naskah",
    description:
      "Pelatihan penyuntingan naskah profesional untuk industri penerbitan.",
    price: "Rp 1.500.000,00",
    image: "/images/skema/skema2.png",
  },
  {
    id: 3,
    title: "Skema Sertifikasi Desainer Grafis Madya",
    description: "Sertifikasi keahlian desain komunikasi visual dan branding.",
    price: "Rp 2.000.000,00",
    image: "/images/skema/skema3.png",
  },
  {
    id: 4,
    title: "Skema Sertifikasi Digital Marketer",
    description:
      "Strategi pemasaran digital, SEO, dan pengelolaan media sosial.",
    price: "Rp 2.250.000,00",
    image: "/images/skema/skema4.png",
  },
  {
    id: 5,
    title: "Skema Sertifikasi Content Creator",
    description:
      "Produksi konten kreatif multimedia untuk berbagai platform digital.",
    price: "Rp 1.850.000,00",
    image: "/images/skema/skema5.png",
  },
  {
    id: 6,
    title: "Skema Sertifikasi Web Developer",
    description:
      "Pembangunan dan pengelolaan aplikasi web berbasis standar industri.",
    price: "Rp 2.500.000,00",
    image: "/images/skema/skema6.png",
  },
  {
    id: 7,
    title: "Skema Sertifikasi Copywriter",
    description: "Teknik penulisan persuasif untuk periklanan dan pemasaran.",
    price: "Rp 1.600.000,00",
    image: "/images/skema/skema7.png",
  },
  {
    id: 8,
    title: "Skema Sertifikasi Data Analyst",
    description:
      "Pengolahan dan visualisasi data untuk pengambilan keputusan bisnis.",
    price: "Rp 2.750.000,00",
    image: "/images/skema/skema8.png",
  },
];

export default function SkemaSertifikasi() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection
        page="Skema Sertifikasi"
        description="Pilih berbagai skema sertifikasi kompetensi yang telah diakui secara nasional."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Cari Sertifikasi..."
                className="w-full pl-12 pr-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#78B51A]/20 focus:border-[#78B51A] transition-all"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-64 space-y-10">
              <div className="border-r border-gray-100 pr-6">
                <h3 className="font-bold text-gray-800 mb-6">
                  Urut Berdasarkan
                </h3>
                <div className="space-y-4">
                  {["Terbaru", "Terlama", "Terbanyak dibuka"].map((label) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#78B51A]"
                      />
                      <span className="text-gray-600 group-hover:text-[#78B51A]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-r border-gray-100 pr-6">
                <h3 className="font-bold text-gray-800 mb-6">Kategori</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label
                      key={num}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#78B51A]"
                      />
                      <span className="text-gray-600 group-hover:text-[#78B51A]">
                        Kategori {num}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {SCHEMES_DATA.map((item) => (
                  <SertifikasiCard key={item.id} data={item} />
                ))}
              </div>

              <div className="mt-16 flex justify-center items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-[#78B51A] border border-gray-100 rounded-lg">
                  <ChevronsLeft size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-[#78B51A] border border-gray-100 rounded-lg">
                  <ChevronLeft size={20} />
                </button>

                <button className="w-10 h-10 rounded-lg bg-[#78B51A] text-white font-bold">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg text-gray-500 border border-gray-100 hover:bg-gray-50">
                  2
                </button>
                <span className="px-2 text-gray-400">...</span>

                <button className="p-2 text-gray-400 hover:text-[#78B51A] border border-gray-100 rounded-lg">
                  <ChevronRight size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-[#78B51A] border border-gray-100 rounded-lg">
                  <ChevronsRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
