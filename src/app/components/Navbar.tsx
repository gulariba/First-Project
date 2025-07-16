"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "Trending", href: "/trending" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#0b0b0b] text-white shadow-md border-b border-red-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide text-red-700 hover:text-red-400 transition duration-300">
          <Link href="/">Splendies</Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-10 text-base font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition duration-300 ${
                  pathname === link.href
                    ? "text-red-400 border-b-2 border-red-500 pb-1"
                    : "hover:text-red-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/search">
            <Search className="w-6 h-6 hover:text-red-400 transition duration-300" />
          </Link>
          <Link href="/wishlist">
            <Heart className="w-6 h-6 hover:text-red-400 transition duration-300" />
          </Link>
          <Link href="/cart">
            <ShoppingCart className="w-6 h-6 hover:text-red-400 transition duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <X className="w-7 h-7 text-red-400" />
            ) : (
              <Menu className="w-7 h-7 text-red-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-[#0b0b0b] border-t border-red-700 text-center space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg font-medium transition ${
                pathname === link.href
                  ? "text-red-400 border-b border-red-500 pb-1"
                  : "hover:text-red-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-center space-x-6 pt-3">
            <Link href="/search">
              <Search className="w-5 h-5 hover:text-red-400 cursor-pointer" />
            </Link>
            <Link href="/wishlist">
              <Heart className="w-5 h-5 hover:text-red-400 cursor-pointer" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5 hover:text-red-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
