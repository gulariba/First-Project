"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

// Dummy order data (replace with actual logic or props later)
const order = {
  id: "ORD-786452",
  items: [
    { name: "Nightwear Set", quantity: 1, price: 2200 },
    { name: "TShirt Bra", quantity: 2, price: 2800 },
  ],
  total: 5000,
};

export default function OrderSuccessPage() {
  return (
    <section className="py-24 px-4 md:px-12 bg-black text-white min-h-screen text-center">
      <div className="max-w-xl mx-auto">
        <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-300 text-sm mb-1">Order ID: <span className="text-white font-medium">{order.id}</span></p>
        <p className="text-gray-400 text-sm mb-6">
          A confirmation message has been sent to your email and phone.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-900 p-6 rounded-xl text-left mb-8">
          <h3 className="text-lg font-semibold mb-4 text-white">Order Summary</h3>
          <ul className="space-y-3 text-sm">
            {order.items.map((item, idx) => (
              <li key={idx} className="flex justify-between text-gray-300">
                <span>{item.name} x {item.quantity}</span>
                <span>Rs. {item.price}</span>
              </li>
            ))}
            <hr className="border-gray-700 my-2" />
            <li className="flex justify-between font-semibold text-white">
              <span>Total</span>
              <span>Rs. {order.total}</span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/collections"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
