"use client";

import { useEffect, useState } from "react";
import { trendingProducts } from "@/app/lib/trendingProducts";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrendingHeroStyleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = trendingProducts.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const product = trendingProducts[currentIndex];

  return (
    <section className="relative w-full bg-zinc-900 py-10 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Details */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-red-600 mb-3">
            {product.name}
          </h2>
          <p className="text-xl font-semibold text-white mb-2">
            Price: Rs. {product.price}
          </p>

          {/* Ratings */}
          <div className="flex mb-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 mx-0.5 ${
                  i < Math.round(product.rating)
                    ? "fill-current"
                    : "fill-none stroke-current"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
              </svg>
            ))}
          </div>

          <Link
            href={`/product/${product.id}`}
            className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition"
          >
            View Product
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full z-40"
      >
        <ChevronLeft size={26} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full z-40"
      >
        <ChevronRight size={26} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
        {trendingProducts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              currentIndex === idx
                ? "bg-red-600 border-red-600 scale-110"
                : "border-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
