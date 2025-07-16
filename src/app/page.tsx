"use client";

import Navbar from "./components/Navbar";
import ShopByCategory from "./components/ShopByCategory";
import Footer from "./components/FOOTER";
import HeroSlider from "./components/HeroSlider";
import TrendingHero from "./components/trendinghero";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      {/* Shop by Category Section */}
      <ShopByCategory />
      <TrendingHero />
      {/* Footer */}
      <Footer />
    </>
  );
}
