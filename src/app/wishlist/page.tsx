"use client";

import React from "react";
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";

export default function WishlistPage() {
  const wishlistItems: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[] = []; // ✅ Properly typed

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold border-b border-red-500 pb-4 mb-10">
          <Heart className="inline-block w-7 h-7 mr-2 text-red-500" />
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center text-gray-400 mt-20">
            <p className="text-xl">Your wishlist is currently empty.</p>
            <p className="mt-2 text-sm">
              Browse our collections and add your favorite items ❤️
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
                <h2 className="text-xl mt-4 font-semibold">{item.name}</h2>
                <p className="text-red-400 font-bold mt-1">Rs {item.price}</p>
                <button className="mt-4 text-sm text-red-500 hover:underline flex items-center gap-1">
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
