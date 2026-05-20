"use client";

import { useState, useEffect, useCallback, use } from "react";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Shield,
  Star,
  TrendingUp,
  Users,
  Youtube,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Link from "next/link";
import SertifikasiCard from "@/components/SertifikasiCard";
import { getDictionary } from "./dictionaries"; // Import helper dictionary

const slides = [
  {
    id: 1,
    image: "/images/hero.jpg",
    title: (
      <>
        Raih Sertifikasi Pariwisata Anda <br /> Bersama Kami
      </>
    ),
    description:
      "Tingkatkan kompetensi dan profesionalisme Anda di industri pariwisata melalui program sertifikasi resmi yang diakui nasional. Bersama tenaga pengajar berpengalaman, kami siap membimbing Anda menuju standar layanan pariwisata terbaik.",
  },
  {
    id: 2,
    image: "/images/hero.jpg",
    title: (
      <>
        Standar Global untuk <br /> Industri Lokal
      </>
    ),
    description:
      "Mempersiapkan tenaga kerja pariwisata yang kompeten, kompetitif, dan beretika untuk menjawab tantangan industri pariwisata di tingkat nasional maupun internasional.",
  },
  {
    id: 3,
    image: "/images/hero.jpg",
    title: (
      <>
        Wujudkan Karir Impian <br /> di Sektor Pariwisata
      </>
    ),
    description:
      "Bergabunglah dengan ribuan profesional lainnya yang telah tersertifikasi. Proses transparan, kredibel, dan didukung oleh asesor berpengalaman di bidangnya.",
  },
];

const SCHEMES_SERTI_DATA = [
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

interface HomePageProps {
  params: Promise<{ lang: "id" | "en" }>;
}

export default function HomePage({ params }: HomePageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const [dict, setDict] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    getDictionary(lang).then((data) => {
      setDict(data);
    });
  }, [lang]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!dict) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation lang={lang} dict={dict} />

      <section className="relative bg-[#78B51A] overflow-hidden pt-20 pb-32 min-h-[80vh] flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Hero Background"
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#78B51A] via-[#78B51A]/80 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-32">
          <div
            key={currentSlide}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light opacity-90 drop-shadow">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 mt-16 text-white/80">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-white/20 transition-all hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <div className="flex gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-white/20 transition-all hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>
        </div>
      </section>
      {/* END HEROO SECTION */}

      {/* ICON SECTION */}
      <section className="bg-[#78B51A] py-16 border-t border-[#78B51A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Skema */}
            <div className="flex flex-col items-center justify-center text-white border-r border-white/40 last:border-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform hover:scale-110 duration-300">
                <Image
                  src="/images/scheme.png"
                  alt="Skema"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-3xl font-bold uppercase tracking-widest">
                Skema
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-white border-r border-white/40 last:border-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform hover:scale-110 duration-300">
                <Image
                  src="/images/asesor.png"
                  alt="Asesor"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-3xl font-bold uppercase tracking-widest">
                Asesor
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-white border-r border-white/40 last:border-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform hover:scale-110 duration-300">
                <Image
                  src="/images/location-map.png"
                  alt="TUK"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-3xl font-bold uppercase tracking-widest">
                TUK
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END ICON SECTION */}

      {/* ABOUT SECTION */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-[#78B51A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-bg.png"
            alt="About Background"
            fill
            className="object-cover object-right"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#78B51A] via-[#78B51A] via-[#78B51A]/90 to-transparent to-[85%]" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
          <div className="max-w-xl md:max-w-2xl text-white">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              LSPP 306 - Tiga Puluh Juni
            </h2>

            <p className="text-sm md:text-lg leading-relaxed mb-10 text-white/95">
              <span className="font-bold text-[#facc15]">
                LSPP 306 (Tiga Puluh Juni)
              </span>{" "}
              adalah lembaga sertifikasi profesi yang berkomitmen untuk
              meningkatkan standar kompetensi dan profesionalisme tenaga kerja
              di bidangnya. Kami hadir sebagai mitra strategis bagi individu
              maupun organisasi yang ingin memastikan kualifikasi dan keahlian
              sesuai dengan standar nasional yang berlaku.
            </p>
            <Link href={`/${lang}/about`} className="no-underline">
              <Button
                type="button"
                className="bg-white text-gray-800 hover:text-[#78B51A] hover:bg-gray-50 font-bold px-12 py-6 h-auto text-base rounded-lg shadow-lg border-none transition-all duration-300 hover:shadow-[0_15px_30px_rgba(120,181,26,0.2)] hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                Selengkapnya
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}

      {/* SKEMA SERTIFIKASI SECTION */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                Skema Sertifikasi
              </h2>
              <div className="h-1.5 w-20 bg-[#78B51A] mt-2 rounded-full" />{" "}
            </div>
            <Button className="bg-[#78B51A] hover:bg-[#669a16] text-white px-8 py-6 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_10px_20px_rgba(120,181,26,0.3)] hover:-translate-y-1">
              Selengkapnya
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {SCHEMES_SERTI_DATA.map((item) => (
              <SertifikasiCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
      {/* END SKEMA SERTIFIKASI SECTION */}

      <section className="py-20 bg-[#78B51A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Berita Terbaru
            </h2>
            <Link href={`/${lang}/berita`}>
              <Button className="bg-white text-[#78B51A] hover:bg-gray-100 px-8 py-6 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-[0_10px_20px_rgba(120,181,26,0.3)] hover:-translate-y-1">
                Selengkapnya
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative flex overflow-hidden group mt-16">
          <div className="flex space-x-6 animate-marquee whitespace-nowrap pause-on-hover">
            {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="group/card relative inline-block w-[300px] md:w-[350px] bg-white rounded-3xl overflow-hidden shadow-xl flex-shrink-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                {/* LINK OVERLAY */}
                <Link
                  href={`/${lang}/berita/${item}`}
                  className="absolute inset-0 z-10"
                  aria-label="Baca selengkapnya"
                />

                <div className="p-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                    <Image
                      src={`/images/berita/berita${item}.png`}
                      alt="Berita"
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>
                </div>
                <div className="px-6 pb-8 whitespace-normal">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight group-hover/card:text-[#78B51A] transition-colors">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce cursus tincidunt velit eget pretium. Praesent.
                  </p>
                  <span className="text-gray-400 text-xs font-medium">
                    13 Januari 2026
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 30s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
      {/* END BERITA TERBARU SECTION */}

      {/* MEDIA SOSIAL & CLIENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Media Sosial
              </h2>
              <Button className="bg-[#78B51A] hover:bg-[#669a16] text-white px-8 py-6 rounded-lg font-medium shadow-sm transition-all duration-300 hover:shadow-[0_10px_20px_rgba(120,181,26,0.3)] hover:-translate-y-1">
                Selengkapnya
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg"
                >
                  <Image
                    src={`/images/medsos/medsos${item}.png`}
                    alt={`Social Media ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Lihat Postingan
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KLIEN KAMI */}
          <div className="pt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Klien Kami
            </h2>

            <div className="relative flex overflow-hidden group">
              <div className="flex space-x-12 md:space-x-24 animate-marquee-reverse whitespace-nowrap items-center">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((logo, index) => (
                  <div
                    key={index}
                    className="relative w-32 h-16 md:w-48 md:h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={`/images/klien/klien${logo}.png`}
                      alt="Logo Client"
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-marquee-reverse {
            display: flex;
            width: fit-content;
            animation: marquee-reverse 25s linear infinite;
          }
        `}</style>
      </section>
      {/* END MEDIA SOSIAL & CLIENT SECTION */}

      {/* FOOTER SECTION */}
      <Footer />
      {/* END FOOTER SECTION */}

      <FloatingContact />
    </div>
  );
}
