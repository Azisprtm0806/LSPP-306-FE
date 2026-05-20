"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/FloatingContact";
import Image from "next/image";
import { MapPin, Phone, Mail, Pencil, Download } from "lucide-react";

export default function ProfilePage() {
  const skemaData = [
    {
      id: 1,
      title: "Tour Leader Perjalanan Wisata Domestik",
      expiryDate: "13 Januari 2028",
      image: "/images/skema/skema1.png",
    },
    {
      id: 2,
      title: "Pemandu Wisata Alam Petualangan",
      expiryDate: "13 Januari 2028",
      image: "/images/skema/skema2.png",
    },
    {
      id: 3,
      title: "Resepsionis Hotel Bintang",
      expiryDate: "13 Januari 2028",
      image: "/images/skema/skema3.png",
    },
    {
      id: 4,
      title: "Tour Leader Perjalanan Wisata Domestik",
      expiryDate: "13 Januari 2028",
      image: "/images/skema/skema4.png",
    },
    {
      id: 5,
      title: "Skema Tambahan Contoh Scroll",
      expiryDate: "20 Mei 2029",
      image: "/images/skema/skema1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative w-full min-h-[450px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#8dc63f]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/profile-bg.png"
            alt="Background"
            fill
            className="object-cover object-right"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #8dc63f 0%, #8dc63f 30%, rgba(141, 198, 63, 0.9) 45%, rgba(141, 198, 63, 0.4) 70%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-start gap-10 md:gap-20">
          <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-white/20 shadow-2xl shrink-0">
            <Image
              src="/images/profile.png"
              alt="Ahmad Yani"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-white flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-8">
              Ahmad Yani
            </h1>
            <div className="space-y-5">
              <div className="flex items-center gap-5 text-white/95">
                <MapPin size={26} className="shrink-0" />
                <span className="text-xl md:text-2xl">
                  Ciawi, Bogor Selatan
                </span>
              </div>
              <div className="flex items-center gap-5 text-white/95">
                <Phone size={26} className="shrink-0" />
                <span className="text-xl md:text-2xl">+62 578 2910 1990</span>
              </div>
              <div className="flex items-center gap-5 text-white/95">
                <Mail size={26} className="shrink-0" />
                <span className="text-xl md:text-2xl">
                  ahmadyani719@gmail.com
                </span>
              </div>
            </div>
          </div>

          <button className="absolute bottom-[-40px] md:bottom-0 right-0 bg-white text-[#8dc63f] px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:bg-gray-50 transition-all active:scale-95 translate-y-[-20px] md:translate-y-0">
            <Pencil size={20} />
            Edit Profile
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
            Skema Yang pernah diikuti:
          </h2>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x snap-mandatory">
              {skemaData.map((item) => (
                <div
                  key={item.id}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)] flex flex-col p-6 border border-gray-100 snap-start"
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow space-y-2 mb-8">
                    <h3 className="text-gray-700 font-bold text-base leading-tight min-h-[3rem]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Berlaku Sampai: {item.expiryDate}
                    </p>
                  </div>

                  <button className="w-full bg-[#8dc63f] hover:bg-[#7db137] text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold text-sm">
                    <Download size={18} strokeWidth={2.5} />
                    Unduh E-Sertifikat
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
