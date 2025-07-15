"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { allProducts } from "@/app/lib/Product";
import Image from "next/image";

// Raw product type from allProducts (price is string)
interface ProductRaw {
  id: string;
  name: string;
  image: string;
  price: string;
  description?: string;
  category?: string;
  collection?: string;
}

// Final product used in UI (price is number)
interface Product extends Omit<ProductRaw, "price"> {
  price: number;
}

export default function ProductDetailPage() {
  const params = useParams() as Record<string, string>;
  const productid = params.productid;

  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const found = allProducts.find((p: ProductRaw) => p.id === productid);

    if (found) {
      const selected: Product = {
        ...found,
        price: Number(found.price),
      };
      setProduct(selected);
    }

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as Product[];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]") as Product[];

    setCart(storedCart);
    setWishlist(storedWishlist);
  }, [productid]);

  const handleAddToCart = () => {
    if (!product) return;
    const updated = [...cart, product];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    alert("Added to cart");
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    alert("Added to wishlist");
  };

  if (!product) return <p className="p-10 text-center">Loading...</p>;

  return (
    <section className="p-6 md:p-10 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h1>
          <p className="text-red-600 text-xl font-semibold mb-4">Rs. {product.price}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {product.description || "No description available."}
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-zinc-800 transition"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
