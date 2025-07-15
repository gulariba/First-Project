"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Luxury That Embraces You",
    subtitle: "Elegant undergarments crafted with precision & love for the modern woman.",
    image: "/bg4.jpg",
    btnLink: "/collections",
    btnText: "Discover Now",
  },
  {
    id: 2,
    title: "Bridal Elegance Starts Here",
    subtitle: "Bridal lingerie that redefines your special day with timeless beauty.",
    image: "/bridalelegance.jpg",
    btnLink: "/collections/bridalwear",
    btnText: "Shop Bridal",
  },
  {
    id: 3,
    title: "Sensual Nights, Stylish Dreams",
    subtitle: "Curated lingerie that celebrates comfort, confidence & romance.",
    image: "/curatedlingrie.jpg",
    btnLink: "/collections/lingerie",
    btnText: "Explore Lingerie",
  },
  {
    id: 4,
    title: "Bold & Unapologetic",
    subtitle: "Redefine boundaries with our fierce and empowering BDSM-inspired designs.",
    image: "/bg5.jpg",
    btnLink: "/collections/bdsmwear",
    btnText: "Unleash Boldness",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover brightness-[0.5]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10 text-center z-30">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide text-primary drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light tracking-wide">
                {slide.subtitle}
              </p>
              <Link
                href={slide.btnLink}
                className="inline-block bg-primary hover:bg-red-700 text-white font-semibold text-base md:text-lg py-3 px-8 rounded-full shadow-md transition-all duration-300"
              >
                {slide.btnText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              currentIndex === idx
                ? "bg-primary border-primary scale-110"
                : "border-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
