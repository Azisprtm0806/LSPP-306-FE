"use client";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function KalenderSection() {
  const agendaKegiatan = [
    { tanggal: "15", hari: "Sen", judul: "Pemandu Wisata Budaya dan Heritage" },
    { tanggal: "6", hari: "Rab", judul: "Resepsionis Hotel Bintang" },
    { tanggal: "15", hari: "Sen", judul: "Food & Beverage Service" },
    { tanggal: "6", hari: "Rab", judul: "Pemandu Wisata Bahari dan Selam" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <button className="flex items-center gap-2 group">
              <h2 className="text-3xl font-bold text-gray-800">
                Februari 2026
              </h2>
              <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          </div>

          <div className="space-y-6">
            {agendaKegiatan.map((item, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <div className="flex flex-col items-center justify-center min-w-[50px]">
                  <span className="text-2xl font-bold text-[#78B51A]">
                    {item.tanggal}
                  </span>
                  <span className="text-lg font-medium text-[#78B51A] leading-none">
                    {item.hari}
                  </span>
                </div>

                <div className="flex-1 bg-white border border-gray-50 rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-700">
                    {item.judul}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
