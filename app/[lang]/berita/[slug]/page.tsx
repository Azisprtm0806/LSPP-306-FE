"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import NewsCard from "../NewsCard";

export default function DetailBeritaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <header className="mb-12">
            <p className="text-[#78B51A] font-bold mb-2">Tim LSPP</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras massa
              odio, ornare et ullamcorper.
            </h1>
          </header>

          <figure className="mb-12">
            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="/images/berita/berita1.png"
                alt="Main News"
                fill
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-gray-400 text-xs italic">
              Sumber foto: https://unsplash.com/photos/...
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed text-justify">
            <p>
              Quisque ac semper sapien, vel aliquet nunc. Duis eget orci varius,
              aliquet lacus ac, finibus mi. Curabitur sed tellus et leo feugiat
              ultrices mollis vitae quam. Vestibulum eu quam eu nisl iaculis
              mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean et dui justo. Suspendisse quis ligula placerat, sodales
              sapien a, bibendum neque.
            </p>
            <p>
              Sed eu tincidunt sem, at accumsan ipsum. Nullam nibh velit,
              viverra aksan ipsum. Nullam nibh velit, viverra quis, ultrices
              cursus nunc. Vivamus eleifend, mi a bibendum consectetur, nisl
              velit feugiat nibh, sit amet malesuada felis metus id ex. Donec
              sem eros, cursus ut tempor in, tempus vitae ex. Ut dictum lobortis
              efficitur. Ut mollis erat et turpis congue condimentum.
            </p>
            <p>
              Etiam in volutpat justo. Aliquam a justo risus. Suspendisse
              fermentum vulputate neque. Duis ipsum odio, consequat ut nisl
              eget, ullamcorper molestie ligula. Etiam nec rhoncus neque. Aenean
              ultrices eu ligula non pellentesque. Proin porttitor orci eget leo
              vestibulum, vitae dapibus lacus finibus.
            </p>
          </div>

          <hr className="my-20 border-gray-100" />

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
              Berita Terkait
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <NewsCard key={i} index={i} />
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
