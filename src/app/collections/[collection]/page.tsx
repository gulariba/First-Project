"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const categoriesByCollection: Record<string, string[]> = {
  bras: ["padded", "sports", "push-up", "t-shirt", "lace", "strapless", "full-coverage", "minimizer"],
  panties: ["lace", "high-waist", "seamless", "bikini", "boyshort", "thong", "hipster", "cotton"],
  lingerie: ["teddy", "babydoll", "bodysuit", "corset", "chemise", "lace-set"],
  shapewear: ["waist-trainer", "control-briefs", "full-body", "thigh-shaper", "tummy-tucker"],
  bridalwear: ["lace-bridal-set", "bridal-nightgown", "bridal-robe", "white-corset", "honeymoon-slip"],
  bdsmwear: ["cuffs", "rope", "gagball", "dresskit", "eyepatch", "pantyhose"],
};

export default function CollectionCategoryPage() {
  const { collection } = useParams();
  const categories = categoriesByCollection[collection as string] || [];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-background text-foreground">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold capitalize text-primary">
          {collection} Categories
        </h1>
        <p className="text-muted mt-2">Choose your style below</p>
        <div className="mt-4 w-20 h-1 mx-auto bg-primary rounded-full" />
      </div>

      {categories.length === 0 ? (
        <div className="text-center text-red-500 text-lg">
          No categories found for this collection.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/collections/${collection}/${cat}`}
              className="bg-secondary border border-muted rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary transition-all text-center"
            >
              <h3 className="text-xl font-semibold capitalize text-foreground hover:text-primary transition">
                {cat.replace(/-/g, " ")}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
