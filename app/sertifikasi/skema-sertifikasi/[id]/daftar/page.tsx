"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/FileUpload";

export default function DaftarSertifikasi() {
  return (
    <div className="min-h-screen bg-[#78B51A]">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12 mb-32">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link
              href="/sertifikasi/skema-sertifikasi"
              className="hover:text-[#dcdcdc] text-white"
            >
              Skema Sertifikasi
            </Link>
            <ChevronRight size={16} />
            <span className=" font-medium truncate max-w-[200px] text-white">
              Sertifikasi Profesi Waiter (Pelayan Restoran)
            </span>
          </nav>
        </div>

        <section className="flex flex-col lg:flex-row items-center gap-10 mb-16 mt-32">
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="relative aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image
                src="/images/skema/skema4.png"
                alt="Waiter"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Sertifikasi Profesi Waiter (Pelayan Restoran)
            </h1>
            <p className="text-white text-lg max-w-2xl leading-relaxed">
              Ajukan sertifikasi untuk memvalidasi keterampilan pelayanan,
              komunikasi, dan standar layanan Anda di bidang food & beverage.
            </p>
          </div>
        </section>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
          <div className="flex justify-end mb-4">
            <span className="text-[10px] text-gray-400 italic">
              * Draft Tersimpan
            </span>
          </div>

          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <FileUpload
                label="Unggah KTP Anda"
                placeholder="KTP_Ahmad Yani.PDF"
              />
              <FileUpload
                label="Unggah Pas-Foto Anda"
                placeholder="PAS FOTO_Ahmad Yani.JPEG"
              />
              <FileUpload
                label="Unggah Ijazah Terakhir Anda"
                placeholder="IJAZAH_Ahmad Yani.PDF"
              />
              <FileUpload
                label="Unggah CV Anda"
                placeholder="CV_Ahmad Yani.PDF"
              />
              <FileUpload
                label="Unggah Portofolio Anda"
                placeholder="PORTOFOLIO_Ahmad Yani.PDF"
              />
            </div>

            <div className="flex justify-end pt-6">
              <Button className="bg-[#82B124] hover:bg-[#729c1f] text-white px-12 py-7 rounded-2xl font-bold text-lg shadow-lg shadow-[#82B124]/20 transition-all active:scale-95">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
