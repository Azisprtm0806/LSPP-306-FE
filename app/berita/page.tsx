"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import Image from "next/image";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import NewsCard from "./NewsCard";
import FloatingContact from "@/components/FloatingContact";

export default function BeritaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection
        page="Berita"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus tincidunt velit eget pretium."
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
                        className="w-4 h-4 rounded border-gray-300 text-[#78B51A] focus:ring-[#78B51A]"
                      />
                      <span className="text-gray-600 group-hover:text-[#78B51A] transition-colors">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-r border-gray-100 pr-6">
                <h3 className="font-bold text-gray-800 mb-6">Kategori</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <label
                      key={num}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#78B51A] focus:ring-[#78B51A]"
                      />
                      <span className="text-gray-600 group-hover:text-[#78B51A] transition-colors">
                        Kategori {num}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <NewsCard key={i} index={i} />
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
                <button className="w-10 h-10 rounded-lg text-gray-500 border border-gray-100 hover:bg-gray-50">
                  6
                </button>
                <button className="w-10 h-10 rounded-lg text-gray-500 border border-gray-100 hover:bg-gray-50">
                  7
                </button>

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
