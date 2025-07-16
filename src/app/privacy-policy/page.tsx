"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-black text-red-500 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-red-500 pb-2">
          Privacy Policy
        </h1>

        <p className="mb-6 text-lg">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use,
          and protect your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>Name, email address, phone number, and shipping address.</li>
          <li>Payment details via third-party secure payment processors.</li>
          <li>Browsing behavior and product preferences.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>To process and deliver your orders.</li>
          <li>To contact you about order updates or customer support.</li>
          <li>To improve our website and shopping experience.</li>
          <li>To send promotions or updates (if you subscribe).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">3. Data Protection</h2>
        <p className="mb-6 text-lg">
          We implement industry-standard security measures to protect your personal information.
          Your payment data is handled securely and never stored on our servers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">4. Sharing of Information</h2>
        <p className="mb-6 text-lg">
          We do not sell, trade, or rent your personal information to others. Your data may be
          shared with trusted third parties only to process your order or improve our service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">5. Your Rights</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>You may request to access, update, or delete your personal data.</li>
          <li>You may unsubscribe from our emails at any time.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">6. Changes to This Policy</h2>
        <p className="mb-6 text-lg">
          We may update this Privacy Policy from time to time. Please review it regularly
          for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">7. Contact Us</h2>
        <p className="mb-6 text-lg">
          If you have any questions about our Privacy Policy, please contact us at:{" "}
          <span className="text-white underline">support@example.com</span> or WhatsApp at{" "}
          <span className="text-white">+92-123-4567890</span>.
        </p>

        <p className="text-sm mt-8 text-gray-400">
          Effective Date: July 8, 2025
        </p>
      </div>
    </section>
  );
}
