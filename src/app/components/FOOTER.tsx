"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* 1. Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Splendies</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Unveil elegance with every layer. Premium lingerie, modest wear, and fashion crafted to empower your confidence.
          </p>
        </div>

        {/* 2. Customer Service */}
        <div>
          <h3 className="text-sm font-semibold text-red-500 uppercase mb-4">Customer Service</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/return-policy" className="hover:text-white">Return Policy</Link></li>
            <li><Link href="/track-order" className="hover:text-white">Track Your Order</Link></li>
            <li><Link href="/size-guide" className="hover:text-white">Size Guide</Link></li>
          </ul>
        </div>

        {/* 3. About & Policies */}
        <div>
          <h3 className="text-sm font-semibold text-red-500 uppercase mb-4">Company</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link href="/About" className="hover:text-white">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/collections" className="hover:text-white">Shop All</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Splendies. All rights reserved.
      </div>
    </footer>
  );
}
