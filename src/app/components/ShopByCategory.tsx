"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Bras",
    image: "/categorybra.jpg",
    link: "/collections/bras",
  },
  {
    name: "Panties",
    image: "/categorypanty.jpg",
    link: "/collections/panties",
  },
  {
    name: "Lingerie",
    image: "/categorylingerie.jpg",
    link: "/collections/lingerie",
  },
  {
    name: "Shapewear",
    image: "/categoryshapewear.jpg",
    link: "/collections/shapewear",
  },
  {
    name: "Bridal Wear",
    image: "/categorybridalwear.jpg",
    link: "/collections/bridalwear",
  },
  {
    name: "BDSM Wear",
    image: "/gag ball.jpg",
    link: "/collections/bdsmwear",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-20 bg-[#0b0b0b] text-center">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400 uppercase tracking-wide drop-shadow-md mb-4">
        Shop by Category
      </h2>
      <div className="w-36 h-1 mx-auto bg-white rounded-full mb-12 animate-pulse" />

      {/* Category Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.name}
              className="group relative rounded-2xl border border-red-900 hover:border-red-500 shadow-md hover:shadow-red-600 transition duration-500 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
            >
              <div className="relative w-full h-[340px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  priority
                  className="object-cover rounded-2xl group-hover:brightness-110 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />

                {/* Label */}
                <div className="absolute bottom-0 w-full py-5 text-white bg-black/30 backdrop-blur-sm rounded-b-2xl">
                  <p className="text-xl font-bold uppercase tracking-wide text-red-200 group-hover:text-red-400 transition">
                    {category.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
