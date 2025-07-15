"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/cardContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-background min-h-screen text-foreground">
      <h2 className="text-4xl font-bold mb-10 text-center uppercase tracking-wide text-primary">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border border-muted rounded-xl p-4 hover:shadow-xl transition bg-secondary"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-lg object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted">Rs. {item.price}</p>
                  <p className="text-sm text-muted">Qty: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-primary flex items-center gap-1 text-sm hover:underline"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-secondary border border-muted p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-6 border-b border-muted pb-3">
              Order Summary
            </h3>
            <div className="space-y-3 text-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {total}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
              <hr className="border-muted" />
              <div className="flex justify-between text-lg font-bold text-foreground pt-2">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 block bg-primary hover:bg-accent text-white text-center py-3 rounded-lg transition font-semibold"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
