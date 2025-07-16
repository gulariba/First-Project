"use client";

import { useParams } from "next/navigation";
import { trendingProducts } from "@/app/lib/trendingProducts";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const found = trendingProducts.find((p) => p.id === Number(productId));
    setProduct(found);
  }, [productId]);

  if (!product) return <div className="p-10 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg"
        />

        <div>
          <h1 className="text-4xl font-bold text-red-500 mb-2">{product.name}</h1>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.round(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <p className="text-2xl font-bold mb-4">Rs. {product.price}</p>
          <p className="mb-6">This is a premium trending product used for quality experiences.</p>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
