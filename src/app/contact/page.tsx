"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-red-500 mb-6 uppercase tracking-wider">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello — reach out anytime.
          </p>
          <div className="space-y-6 text-gray-200 text-base">
            <div className="flex items-start gap-4">
              <Mail className="text-red-500" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p>support@modestwear.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-red-500" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p>+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500" />
              <div>
                <h4 className="font-semibold text-white">Address</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111111] p-8 rounded-2xl shadow-xl border border-red-800">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-red-400">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-red-600 placeholder-gray-400 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-red-400">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-red-600 placeholder-gray-400 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-red-400">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-red-600 placeholder-gray-400 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
