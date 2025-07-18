"use client";

import Image from "next/image";
import Link from "next/link";

const collections = [
  { name: "Bras", slug: "bras", image: "/images/bra.jpg" },
  { name: "Panties", slug: "panties", image: "/images/panty.jpg" },
  { name: "Lingerie", slug: "lingerie", image: "/images/night wear.jpg" },
  { name: "Shapewear", slug: "shapewear", image: "/images/categoryshapewear.jpg" },
  { name: "Bridal Wear", slug: "bridalwear", image: "/images/bridal.jpg" },
  { name: "BDSM Wear", slug: "bdsmwear", image: "/images/bg3.jpg" },
];

export default function CollectionsPage() {
  return (
    <section className="py-20 bg-black text-white">
      {/* Heading & Description */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-red-600 uppercase tracking-wide">
          Signature Collections
        </h2>
        <p className="mt-3 text-gray-400 text-base italic max-w-xl mx-auto leading-relaxed">
          Where sensuality meets sophistication — explore collections that
          celebrate every curve, every moment, and every mood.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {collections.map((cat) => (
          <Link
            key={cat.slug}
            href={`/collections/${cat.slug}`}
            className="group relative rounded-2xl overflow-hidden border border-gray-700 hover:border-red-600 shadow-lg hover:shadow-red-800/40 transition duration-300 bg-[#0a0a0a]"
          >
            {/* Image */}
            <div className="w-full h-60 overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>

            {/* Text */}
            <div className="py-5 text-center bg-[#111]">
              <h3 className="text-xl font-semibold text-white group-hover:text-red-600 transition duration-300">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
