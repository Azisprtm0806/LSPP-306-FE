"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/FloatingContact";

const FLOW_DATA = [
  {
    step: 1,
    title: "Pengajuan Permohonan Sertifikasi",
    description:
      "Calon asesi mengajukan permohonan mengikuti sertifikasi dan memilih skema, melengkapi dokumen persyaratan",
  },
  {
    step: 2,
    title: "Verifikasi dan Validasi Dokumen",
    description:
      "Admin LSP memverifikasi dan validasi dokumen persyaratan. Bila dinyatakan layak, asesi akan dijadwalkan untuk mengikuti uji kompetensi.",
  },
  {
    step: 3,
    title: "Pembayaran Biaya Asesmen",
    description:
      "Calon Asesi melakukan pembayaran. Bukti pembayaran disampaikan kepada Admin.",
  },
  {
    step: 4,
    title: "Pelaksanaan Asesmen Kompetensi",
    description: "Asesor melaksanakan asesmen/uji kompetensi",
  },
  {
    step: 5,
    title: "Penetapan Keputusan Sertifikasi",
    description:
      "Asesor menyerahkan hasil asesmen kepada LSP. LSP meninjau dan menetapkan keputusan apakah asesi kompeten atau belum secara objektif dan terdokumentasi.",
  },
  {
    step: 6,
    title: "Penertiban Sertifikasi Kompetensi",
    description:
      "Bagi Asesi yang dinyatakan kompeten, LSP menerbitkan sertifikat kompetensi resmi yang diakui oleh BNSP",
  },
];

export default function AlurSertifikasi() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection
        page="Alur Sertifikasi"
        description="Pahami langkah-langkah dalam proses pengajuan hingga penerbitan sertifikasi kompetensi Anda."
      />

      <section className="py-20 bg-[#F9FBF8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {FLOW_DATA.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl border border-[#9C9C9C] shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div className="px-8 py-6 flex items-center gap-6 border-b border-[#9C9C9C]">
                  <div className="w-12 h-12 rounded-full bg-[#E8F3D7]  flex items-center justify-center font-bold text-lg shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#515151]">
                    {item.title}
                  </h3>
                </div>

                <div className="px-8 py-6 bg-white">
                  <p className="text-gray-500 leading-relaxed md:text-lg">
                    {item.description}
                  </p>
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
