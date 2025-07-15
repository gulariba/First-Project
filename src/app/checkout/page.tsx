"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Optionally, collect data or send to API here

    // Redirect to order success page
    router.push("/order-success");
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-black">
      <h2 className="text-4xl font-bold mb-8 text-center text-white uppercase">
        Checkout
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Billing & Shipping Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mb-2 text-white">
            Shipping Information
          </h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="City"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Postal Code"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Nightwear Set</span>
              <span>Rs. 2200</span>
            </div>
            <div className="flex justify-between">
              <span>TShirt Bra x2</span>
              <span>Rs. 2800</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>Rs. 5000</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            You’ll receive a confirmation message on your phone and email once
            your order is placed.
          </p>

          <Link
            href="/cart"
            className="text-red-500 hover:underline mt-4 inline-block text-sm"
          >
            Go back to cart
          </Link>
        </div>
      </div>
    </section>
  );
}
