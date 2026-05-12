"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingContact from "@/components/FloatingContact";

export default function GaleriPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = [
    {
      id: 1,
      title:
        "Pelaksanaan Uji Kompetensi Skema Sertifikasi Okupasi Nasional Penjamah Makanan (Food Handler) Tahun 2025",
      image: "/images/galeri/galeri1.png",
    },
    {
      id: 2,
      title: "Kegiatan Pelatihan Sertifikasi Profesi Bidang Pariwisata 2026",
      image: "/images/galeri/galeri2.png",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 === galleryData.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection
        page="Galeri"
        description="Dokumentasi kegiatan dan momen penting pelaksanaan uji kompetensi serta sertifikasi di LSPP 306."
      />

      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="relative flex flex-col items-center">
            <div className="text-center max-w-4xl mb-12">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug"
              >
                {galleryData[currentIndex].title}
              </motion.h2>
            </div>

            <div className="relative w-full flex items-center justify-center gap-4 md:gap-10">
              <button
                onClick={handlePrev}
                className="hidden md:flex flex-col items-center justify-center bg-[#78B51A] hover:bg-[#689e16] text-white w-24 h-32 rounded-2xl transition-all shadow-lg group shrink-0"
              >
                <ArrowLeft className="mb-2 group-hover:-translate-x-1 transition-transform text-black" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  Sebelumnya
                </span>
              </button>

              <div className="relative w-full max-w-4xl aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={galleryData[currentIndex].image}
                      alt="Dokumentasi Kegiatan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={handleNext}
                className="hidden md:flex flex-col items-center justify-center bg-[#78B51A] hover:bg-[#689e16] text-white w-24 h-32 rounded-2xl transition-all shadow-lg group shrink-0"
              >
                <ArrowRight className="mb-2 group-hover:translate-x-1 transition-transform text-black" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  Selanjutnya
                </span>
              </button>
            </div>

            <div className="flex md:hidden mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-4 bg-[#78B51A] text-white rounded-full"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-4 bg-[#78B51A] text-white rounded-full"
              >
                <ArrowRight />
              </button>
            </div>

            <div className="flex gap-2 mt-10">
              {galleryData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-[#78B51A]" : "w-2 bg-gray-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}
