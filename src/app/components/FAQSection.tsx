"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy on all unused items in original packaging. Please contact our support team for return instructions.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 3–5 business days. For remote areas, delivery may take up to 7 days.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept EasyPaisa, JazzCash, and Cash on Delivery (COD) at your doorstep.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we deliver only within Pakistan. International shipping is coming soon!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 bg-background text-foreground">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-primary uppercase tracking-wide">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-muted bg-secondary rounded-lg shadow-md p-5"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-lg text-foreground focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span className="text-primary text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
