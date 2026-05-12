import Image from "next/image";
import Link from "next/link";

function NewsCard({
  index,
  slug = "lorem-ipsum-dolor-sit-amet",
}: {
  index: number;
  slug?: string;
}) {
  const images = [
    "/images/berita/berita1.png",
    "/images/berita/berita2.png",
    "/images/berita/berita3.png",
  ];

  return (
    <Link href={`/berita/${slug}`}>
      {" "}
      <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-2">
        <Image
          src={images[(index - 1) % 3]}
          alt="News"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#78B51A]/90 via-[#78B51A]/40 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white font-bold text-lg leading-tight mb-2">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-white/80 text-sm line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
