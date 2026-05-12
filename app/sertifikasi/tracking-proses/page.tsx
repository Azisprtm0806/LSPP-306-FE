"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/FloatingContact";
import { Calendar, MapPin } from "lucide-react";
import TimelineItem from "@/components/ui/TimeLineItem";

export default function TrackingProses() {
  const [activeStatus, setActiveStatus] = useState("Pengajuan Diterima");
  const CERT_DATA = [
    {
      id: 1,
      title: "Sertifikasi Housekeeping",
      date: "1 April 2026",
      status: "Selesai",
      color: "bg-[#E8F3D7] text-[#82B124]",
    },
    {
      id: 2,
      title: "Sertifikasi Resepsionis",
      date: "1 April 2026",
      status: "Pengajuan diterima",
      color: "bg-[#FEF3C7] text-[#D97706]",
    },
    {
      id: 3,
      title: "Sertifikasi Housekeeping",
      date: "1 April 2026",
      status: "Selesai",
      color: "bg-[#E8F3D7] text-[#82B124]",
    },
    {
      id: 4,
      title: "Sertifikasi Waiter",
      date: "1 April 2026",
      status: "Diajukan",
      color: "bg-gray-100 text-gray-500",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection
        page="Tracking Proses"
        description="Silahkan pilih Sertifikasi untuk melihat status detail perkembangan pengajuan Anda."
      />

      <section className="py-20 bg-[#F9FBF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-10">
            {["Pengajuan Diterima", "Selesai", "Diajukan"].map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all border ${
                  activeStatus === status
                    ? "bg-[#82B124] text-white border-[#82B124]"
                    : "bg-white text-gray-400 border-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
              {CERT_DATA.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[320px] md:min-w-[380px] bg-[#F3F4F6]/50 rounded-2xl border border-gray-100 flex overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="relative w-32 md:w-40 h-full min-h-[100px]">
                    <Image
                      src={`/images/skema/skema${item.id > 3 ? 1 : item.id}.png`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-center bg-white flex-1">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-3">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="custom-scroll-container">
              <div className="custom-scroll-thumb" />
            </div>
          </div>

          <div className="mt-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-8 md:p-12 pb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-[#DCDCDC]">
                    <Image
                      src="/images/skema/skema1.png"
                      alt="Detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                      Sertifikasi Housekeeping
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1.5 font-medium">
                      <Calendar size={14} className="text-gray-300" />
                      <span>12 April 2026</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-lg bg-[#C7E598] text-[#4F6A24] font-bold text-[11px] self-start md:self-center">
                  Selesai
                </div>
              </div>
            </div>

            <div className="border-b border-[#DCDCDC] w-full" />

            <div className="p-8 md:p-12 py-8">
              <div className="grid grid-cols-2 gap-8 max-w-2xl">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-2">
                    Batch
                  </p>
                  <p className="text-base font-bold text-gray-700">
                    Batch 1 / 2026
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-2">
                    TUK
                  </p>
                  <p className="text-base font-bold text-gray-700">
                    TUK Sewaktu — Yogyakarta
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-100 w-full" />

            <div className="p-8 md:p-12 border-t border-gray-100 bg-[#FCFDFB]/50">
              <div className="space-y-0">
                <TimelineItem
                  title="Pengajuan Sertifikasi"
                  date="25 Maret 2026"
                  desc="Menunggu Persetujuan"
                />
                <TimelineItem
                  title="Pendaftaran diterima"
                  date="30 Maret 2026"
                  desc="Berkas lengkap dan valid."
                />
                <TimelineItem
                  title="Penjadwalan asesmen"
                  date="2 April 2026"
                  desc="Asesmen dilaksanakan 12 April 2026."
                />
                <TimelineItem
                  title="Asesmen kompetensi"
                  date="12 April 2026"
                  desc="Uji teori dan praktik selesai."
                />
                <TimelineItem
                  title="Pengumuman hasil"
                  date="15 April 2026"
                  desc="Dinyatakan KOMPETEN. Sertifikat sedang diproses."
                  isLast
                />
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
