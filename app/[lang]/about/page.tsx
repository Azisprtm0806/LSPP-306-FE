"use client";

import { useState, useEffect, use } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";

import { Linkedin, Instagram } from "lucide-react";
import TeamCard from "./TeamCard";
import TUKCard from "./TUKCard";
import AsesorCard from "./AsesorCard";
import AsesiSection from "./AsesiSection";
import FloatingContact from "@/components/FloatingContact";
import Navigation from "@/components/navigation";
import { getDictionary } from "../dictionaries";

interface AboutPageProps {
  params: Promise<{ lang: "id" | "en" }>;
}

export default function AboutPage({ params }: AboutPageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lang).then((data) => {
      setDict(data);
    });
  }, [lang]);

  if (!dict) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation lang={lang} dict={dict} />

      <section className="relative w-full min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden bg-[#78B51A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about.png"
            alt="About Background"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#78B51A] via-[#78B51A] via-[#78B51A]/95 to-transparent to-[85%]" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-20">
          <div className="max-w-2xl lg:max-w-3xl text-white">
            <h2 className="text-lg md:text-xl font-medium mb-2 opacity-90">
              {dict.navigation.about}
            </h2>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              LSPP 306 - Tiga Puluh Juni
            </h1>

            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-bold text-[#facc15]">
                  LSPP 306 (Tiga Puluh Juni)
                </span>{" "}
                adalah lembaga sertifikasi profesi yang berkomitmen untuk
                meningkatkan standar kompetensi dan profesionalisme tenaga kerja
                di bidangnya. Kami hadir sebagai mitra strategis bagi individu
                maupun organisasi yang ingin memastikan kualifikasi dan keahlian
                sesuai dengan standar nasional yang berlaku.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Dengan pengalaman lebih dari satu dekade,{" "}
                <span className="font-bold text-[#facc15]">LSPP 306</span> telah
                melayani ribuan peserta sertifikasi dari berbagai sektor
                industri. Kami beroperasi di bawah lisensi resmi dan diakui oleh
                Badan Nasional Sertifikasi Profesi (BNSP), menjamin bahwa setiap
                sertifikat yang kami keluarkan memiliki nilai pengakuan yang
                tinggi di pasar kerja nasional maupun internasional.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Kami believe bahwa kompetensi yang tersertifikasi adalah fondasi
                dari karier yang kokoh dan organisasi yang berdaya saing tinggi.
                <span className="font-bold text-[#facc15]">LSPP 306</span> terus
                berkomitmen untuk memberikan layanan uji kompetensi yang
                profesional, objektif, dan dapat dipercaya oleh seluruh pemangku
                kepentingan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VISI & MISI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-32">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/visi.png"
                  alt="Visi"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-[#78B51A] text-white px-8 py-2 rounded-lg font-bold text-xl shadow-md">
                Visi
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Pellentesque nisi nisi vel tellus. Pellentesque sit amet elit
                non urna consequat consequat sed congue leo. Quisque molestie
                nulla finibus dui tempor blandit. Pellentesque et tellus vitae
                erat viverra cursus.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block bg-[#78B51A] text-white px-8 py-2 rounded-lg font-bold text-xl shadow-md">
                Misi
              </div>
              <ul className="space-y-4 text-gray-600 text-lg list-disc pl-5 marker:text-[#78B51A]">
                <li>
                  Pellentesque nisi nisi vel tellus. Pellentesque sit amet elit
                  non urna consequat consequat sed congue leo. Quisque molestie
                  nulla finibus dui tempor blandit. Pellentesque et tellus vitae
                  erat viverra cursus.
                </li>
                <li>
                  Posuere in quam ut tincidunt. Sed id diam elit. Praesent
                  lobortis, nisl hendrerit volutpat pretium, enim erat vehicula
                  mauris, scelerisque mattis nibh magna id lacus.
                </li>
                <li>
                  Habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Fusce non gravida sapien. Morbi vel
                  venenatis augue, sit amet ullamcorper ex. Aenean at lorem et
                  ligula pulvinar consequat a id nisl. Duis ante est, hendrerit
                  ut placerat at, porta vitae erat.
                </li>
                <li>
                  Maecenas risus magna, interdum eu ultrices nec, mattis ut
                  nunc. Cras sit amet mi.
                </li>
                <li>
                  Nterdum ut enim vitae, interdum pharetra diam. Morbi efficitur
                  id erat quis maximus.
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/misi.png"
                  alt="Misi"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION STRUKTUR ORGANISASI */}
      <section className="py-24 bg-[#78B51A]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Struktur Organisasi
          </h2>

          {/* Board of Experts */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/20 pb-2">
              Board of Experts
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <TeamCard
                name="Ahmad Yani"
                role="Jabatan"
                image="/images/avatar/avatar-1.jpg"
              />
              <TeamCard
                name="Sri Lestari"
                role="Jabatan"
                image="/images/avatar/avatar-2.jpg"
              />
              <TeamCard
                name="Agus Sulistiana"
                role="Jabatan"
                image="/images/avatar/avatar-3.jpg"
              />
              <TeamCard
                name="Ahmad Yani"
                role="Jabatan"
                image="/images/avatar/avatar-4.jpg"
              />
            </div>
          </div>

          {/* Executive Leadership */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/20 pb-2">
              Executive Leadership
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <TeamCard
                name="Ahmad Yani"
                role="Jabatan"
                image="/images/avatar/avatar-1.jpg"
              />
              <TeamCard
                name="Sri Lestari"
                role="Jabatan"
                image="/images/avatar/avatar-2.jpg"
              />
              <TeamCard
                name="Antonio"
                role="Jabatan"
                image="/images/avatar/avatar-4.jpg"
              />
              <TeamCard
                name="Agus Sulistiana"
                role="Jabatan"
                image="/images/avatar/avatar-3.jpg"
              />
              <TeamCard
                name="Agus Sulistiana"
                role="Jabatan"
                image="/images/avatar/avatar-3.jpg"
              />
              <TeamCard
                name="Ahmad Yani"
                role="Jabatan"
                image="/images/avatar/avatar-1.jpg"
              />
              <TeamCard
                name="Sri Lestari"
                role="Jabatan"
                image="/images/avatar/avatar-2.jpg"
              />
              <TeamCard
                name="Antonio"
                role="Jabatan"
                image="/images/avatar/avatar-4.jpg"
              />
            </div>
          </div>

          {/* Operations and Administration */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/20 pb-2">
              Operations and Administration
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <TeamCard
                name="Sri Lestari"
                role="Jabatan"
                image="/images/avatar/avatar-2.jpg"
              />
              <TeamCard
                name="Antonio"
                role="Jabatan"
                image="/images/avatar/avatar-4.jpg"
              />
              <TeamCard
                name="Agus Sulistiana"
                role="Jabatan"
                image="/images/avatar/avatar-3.jpg"
              />
              <TeamCard
                name="Ahmad Yani"
                role="Jabatan"
                image="/images/avatar/avatar-1.jpg"
              />
              <TeamCard
                name="Agus Sulistiana"
                role="Jabatan"
                image="/images/avatar/avatar-3.jpg"
              />
              <TeamCard
                name="Ahmad Yani"
                role="Jabatan"
                image="/images/avatar/avatar-1.jpg"
              />
              <TeamCard
                name="Sri Lestari"
                role="Jabatan"
                image="/images/avatar/avatar-2.jpg"
              />
              <TeamCard
                name="Antonio"
                role="Jabatan"
                image="/images/avatar/avatar-4.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LOKASI TUK */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="mb-12">
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              Tempat Uji Kompetensi
            </h3>
            <div className="relative inline-block pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 pb-4">
                Lokasi TUK LSPP 306
              </h2>
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-300"></div>
            </div>
          </div>

          <div className="relative">
            <div
              className="h-[500px] overflow-y-auto pr-4 pl-10 space-y-6 [direction:rtl] 
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-500
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-gray-600"
            >
              <div className="[direction:ltr]">
                <div className="space-y-6">
                  <TUKCard
                    title="TUK Mandiri — Jakarta Selatan"
                    address="Jl. Sudirman No. 45, Kebayoran Baru, Jakarta Selatan"
                    schedule="Senin - Jumat, 08.00 - 17.00 WIB"
                    code="TUK-001"
                  />
                  <TUKCard
                    title="TUK Sewaktu — Bandung"
                    address="Jl. Asia Afrika No. 12, Sumur Bandung, Bandung"
                    schedule="Senin - Sabtu, 08.00 - 16.00 WIB"
                    code="TUK-002"
                  />
                  <TUKCard
                    title="TUK Mandiri — Surabaya"
                    address="Jl. Pemuda No. 31, Genteng, Surabaya"
                    schedule="Senin - Jumat, 08.00 - 17.00 WIB"
                    code="TUK-003"
                  />
                  <TUKCard
                    title="TUK Sewaktu — Medan"
                    address="Jl. Gatot Subroto No. 78, Medan Petisah, Medan"
                    schedule="Senin - Jumat, 08.00 - 17.00 WIB"
                    code="TUK-004"
                  />
                  <TUKCard
                    title="TUK Sewaktu — Yogyakarta"
                    address="Jl. Malioboro No. 55, Gedongtengen, Yogyakarta"
                    schedule="Jadwal operasional akan diumumkan"
                    code="TUK-005"
                  />
                  <TUKCard
                    title="TUK Tambahan — Bali"
                    address="Jl. Legian, Jl. By Pass Ngurah Rai, Jl. Tol Bali Mandara, serta pusat kuliner di Jl. Dewi Sri"
                    schedule="Senin - Jumat, 08.00 - 17.00 WIB"
                    code="TUK-006"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DAFTAR ASESOR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="mb-8">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Asesor</h3>
            <div className="relative inline-block pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 pb-4">
                Daftar Asesor Kompetensi
              </h2>
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-300"></div>
            </div>
          </div>

          <div className="mb-10 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari Asesor..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="h-[600px] overflow-y-auto pr-4 pl-10 [direction:rtl] 
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-gray-50
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-400
              [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <div className="[direction:ltr] space-y-4">
                <AsesorCard
                  name="Ahmad Santoso, S.T., M.T."
                  reg="MET.000.001234"
                  image="/images/avatar/avatar-1.jpg"
                />
                <AsesorCard
                  name="Rudi Hartono, S.Par., M.Par."
                  reg="MET.000.003456"
                  image="/images/avatar/avatar-2.jpg"
                />
                <AsesorCard
                  name="Budi Prasetyo, S.Par., M.Eng."
                  reg="MET.000.005678"
                  image="/images/avatar/avatar-3.jpg"
                />
                <AsesorCard
                  name="Dewi Puspitasari, S.E., M.M."
                  reg="MET.000.002345"
                  image="/images/avatar/avatar-4.jpg"
                />
                <AsesorCard
                  name="Ahmad Santoso, S.T., M.T."
                  reg="MET.000.001234"
                  image="/images/avatar/avatar-1.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AsesiSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
