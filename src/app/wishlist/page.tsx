"use client";

import React from "react";

export default function ReturnPolicyPage() {
  return (
    <section className="min-h-screen bg-black text-red-500 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-red-500 pb-2">
          Return &amp; Exchange Policy
        </h1>

        <p className="mb-6 text-lg">
          Thank you for shopping with us. We hope you love your purchase, but if you&rsquo;re not
          completely satisfied, we&rsquo;re here to help.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Returns</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Products can be returned within <span className="font-bold">7 days</span> of delivery.</li>
          <li>Items must be unused, unwashed, and in original packaging with all tags attached.</li>
          <li>Returns are not accepted for lingerie, panties, and intimate items due to hygiene reasons.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Exchanges</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>We allow size exchanges within <span className="font-bold">7 days</span> of receiving the item.</li>
          <li>To be eligible, product must be in original condition.</li>
          <li>Shipping costs for exchanges are the customer&rsquo;s responsibility.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Non-Returnable Items</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Bras, panties, shapewear, and nightwear once worn or tried on.</li>
          <li>Sale items or discounted products.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">How to Request a Return</h2>
        <p className="mb-6 text-lg">
          To start a return, please contact our support team at{" "}
          <span className="text-white underline">support@example.com</span> or WhatsApp us at{" "}
          <span className="text-white">+92-123-4567890</span>. Include your order number, reason
          for return, and pictures if applicable.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Refunds</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>
            Once we receive your return and inspect the product, we&rsquo;ll notify you via email or
            WhatsApp.
          </li>
          <li>
            Refunds (if eligible) will be processed within 5–7 business days via your original payment method.
          </li>
        </ul>

        <p className="text-sm mt-8 text-gray-400">
          Note: We reserve the right to refuse returns that do not meet our return policy requirements.
        </p>
      </div>
    </section>
  );
}
