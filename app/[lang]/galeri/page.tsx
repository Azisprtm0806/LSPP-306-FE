"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingContact from "@/components/FloatingContact";

export default function GaleriPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryData = [
    {
      id: 1,
      title:
        "Pelaksanaan Uji Kompetensi Skema Sertifikasi Okupasi Nasional Penjamah Makanan (Food Handler) Tahun 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus tincidunt velit eget pretium. Praesent condimentum, dui sit amet mattis euismod, tellus sem vehicula leo.",
      image: "/images/galeri/galeri1.png",
    },
    {
      id: 2,
      title: "Kegiatan Pelatihan Sertifikasi Profesi Bidang Pariwisata 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus tincidunt velit.",
      image: "/images/galeri/galeri2.png",
    },
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev! + 1 === galleryData.length ? 0 : prev! + 1,
      );
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? galleryData.length - 1 : prev! - 1,
      );
    }
  };

  const selectedItem =
    selectedIndex !== null ? galleryData[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection page="Galeri" description="Dokumentasi kegiatan..." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <h2 className="text-3xl font-semibold text-gray-700">Album</h2>

            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-48">
                <select className="appearance-none w-full bg-white border border-[#a3cf5d] text-gray-600 py-2.5 px-6 pr-10 rounded-full focus:outline-none focus:ring-1 focus:ring-[#a3cf5d] cursor-pointer text-sm">
                  <option>Terbaru</option>
                  <option>Terlama</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <ChevronDown size={18} />
                </div>
              </div>

              <div className="relative w-full md:w-48">
                <select className="appearance-none w-full bg-white border border-[#a3cf5d] text-gray-600 py-2.5 px-6 pr-10 rounded-full focus:outline-none focus:ring-1 focus:ring-[#a3cf5d] cursor-pointer text-sm">
                  <option>Oktober</option>
                  <option>September</option>
                  <option>Agustus</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer group shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#4a5d23]/90 flex items-end p-6"
                >
                  <p className="text-white text-sm">{item.title}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <div className="relative w-full max-w-5xl flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="hidden md:flex p-4 bg-[#a3cf5d] hover:bg-[#8eb34d] rounded-full text-white shrink-0 transition-transform active:scale-90 z-20"
              >
                <ChevronLeft size={40} />
              </button>

              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              >
                <div
                  className="relative aspect-[16/10] w-full cursor-pointer"
                  onClick={handleNext}
                >
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a5d23]/95 via-[#4a5d23]/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-center pointer-events-none">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
                      {selectedItem.description}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(null);
                    }}
                    className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors pointer-events-auto"
                  >
                    <X size={24} />
                  </button>
                </div>
              </motion.div>

              <button
                onClick={handleNext}
                className="hidden md:flex p-4 bg-[#a3cf5d] hover:bg-[#8eb34d] rounded-full text-white shrink-0 transition-transform active:scale-90 z-20"
              >
                <ChevronRight size={40} />
              </button>
            </div>

            <div className="absolute bottom-10 flex gap-10 md:hidden">
              <button
                onClick={handlePrev}
                className="p-4 bg-[#a3cf5d] rounded-full text-white"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="p-4 bg-[#a3cf5d] rounded-full text-white"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingContact />
    </div>
  );
}
