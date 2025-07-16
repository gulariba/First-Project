"use client";

import { useParams } from "next/navigation";
import { allProducts } from "@/app/lib/Product";
import Link from "next/link";
import Image from "next/image";

export default function CategoryPage() {
  const { collection, category } = useParams() as {
    collection: string;
    category: string;
  };

  const filteredProducts = allProducts.filter(
    (p) => p.collection === collection && p.category === category
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold capitalize text-primary">
          {category.replace(/-/g, " ")}
        </h1>
        <p className="text-muted mt-2">Explore the best in {collection}</p>
        <div className="mt-3 w-16 h-1 mx-auto bg-primary rounded-full" />
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/collections/${collection}/${category}/${product.id}`}
              className="group relative block bg-secondary dark:bg-zinc-900 border border-muted rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-md font-medium text-foreground group-hover:text-primary transition">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 group-hover:text-primary transition">
                  {product.price}
                </p>
              </div>

              {/* Animated Border Glow (optional fancy effect) */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-300 rounded-xl pointer-events-none" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
