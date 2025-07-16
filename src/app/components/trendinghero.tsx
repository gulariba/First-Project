"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrendingHero() {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src="/gag bg.jpg" // 👉 apna background image yahan daalna
        alt="Trending Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* ✅ Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start text-left px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-4 uppercase">
          Trending This Week
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Our best-selling collections, trusted by hundreds. Explore comfort and luxury like never before.
        </p>
        <Link
          href="/trending"
          className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
