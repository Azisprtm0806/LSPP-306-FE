"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/FloatingContact";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa odio, ornare et ullamcorper vel, lacinia ac ante. Curabitur sed aliquet justo",
      answer:
        "Aliquam a justo risus. Suspendisse fermentum vulputate neque. Duis ipsum odio, consequat ut nisl eget, ullamcorper molestie ligula. Etiam nec rhoncus neque. Aenean ultrices eu ligula non pellentesque. Proin porttitor orci eget leo vestibulum, vitae dapibus lacus finibus",
    },
    {
      question:
        "Nullam et mollis sapien, id bibendum tellus. Pellentesque magna lacus",
      answer:
        "ula non pellentesque. Proin porttitor orci eget leo vestibulum, vitae dapibus lacus finibus. Suspendisse mi dui, ultricies eu mollis iaculis, faucibus sed risu",
    },
    {
      question:
        "sapien faucibus blandit. In enim dui, placerat ut suscipit id, finibus nec neque",
      answer:
        "Contoh jawaban untuk pertanyaan ketiga. Deskripsi detail mengenai prosedur atau informasi terkait.",
    },
    {
      question:
        "rquent per conubia nostra, per inceptos himenaeos. Duis ac interdum lorem. Suspendisse feugiat, erat",
      answer:
        "Contoh jawaban untuk pertanyaan keempat. Informasi lebih lanjut untuk membantu pengguna.",
    },
    {
      question:
        "sapien faucibus blandit. In enim dui, placerat ut suscipit id, finibus nec neque",
      answer: "Contoh jawaban untuk pertanyaan kelima.",
    },
    {
      question:
        "rquent per conubia nostra, per inceptos himenaeos. Duis ac interdum lorem. Suspendisse feugiat, erat",
      answer: "Contoh jawaban untuk pertanyaan keenam.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 bg-gray-50/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-gray-50/50"
                >
                  <span className="text-gray-800 font-semibold text-lg md:text-xl pr-8 leading-relaxed">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-gray-900">
                    {openIndex === index ? (
                      <ChevronUp size={28} />
                    ) : (
                      <ChevronDown size={28} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-base md:text-lg border-t border-gray-50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
