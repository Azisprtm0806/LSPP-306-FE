"use client";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import SertifikasiCard from "@/components/SertifikasiCard";
import { CheckCircle2, Bookmark, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const RELATED_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "Rp 1.750.000,00",
    image: "/images/skema/skema1.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "Rp 1.750.000,00",
    image: "/images/skema/skema2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "Rp 1.750.000,00",
    image: "/images/skema/skema3.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "Rp 1.750.000,00",
    image: "/images/skema/skema4.png",
  },
];

export default function DetailSkema() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        <section className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/skema/skema4.png"
                alt="Waiter"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Sertifikasi Profesi Waiter (Pelayan Restoran)
            </h1>
            <p className="text-[#78B51A] text-3xl font-bold mb-6 underline">
              Rp 800.000,00
            </p>

            <div className="text-gray-600 text-sm leading-relaxed mb-8 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                cursus tincidunt velit eget pretium. Praesent condimentum, dui
                sit amet mattis euismod, tellus sem vehicula leo, at
                pellentesque nisi nisi vel tellus.
              </p>

              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#78B51A] shrink-0 mt-0.5" />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#E89528] hover:bg-[#d18421] text-white px-8 py-6 rounded-xl font-bold flex gap-2 shadow-lg shadow-orange-200">
                <Bookmark className="h-5 w-5 fill-white" />
                Simpan Sertifikasi
              </Button>
              <Button className="bg-[#78B51A] hover:bg-[#669a16] text-white px-8 py-6 rounded-xl font-bold flex gap-2 shadow-lg shadow-green-200">
                <MessageSquare className="h-5 w-5 fill-white" />
                Daftar Sertifikasi
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Asesmen Terkait
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {RELATED_DATA.map((item) => (
              <SertifikasiCard key={item.id} data={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
