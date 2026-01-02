"use client";

import { useState } from "react";

export default function Features() {
  const faqs = [
    {
      question: "What is this streaming platform?",
      answer:
        "This platform allows you to stream movies, TV shows, and other video content online without downloading files to your device."
    },
    {
      question: "Do I need an account to watch content?",
      answer:
        "Some content may be available without an account, but creating an account gives you access to personalized recommendations, watch history, and additional features."
    },
    {
      question: "Is the service free or paid?",
      answer:
        "We offer both free and premium plans. Free plans may include ads or limited content, while premium plans provide ad-free viewing and full access to our library."
    },
    {
      question: "Which devices are supported?",
      answer:
        "The service works on most modern devices including smartphones, tablets, smart TVs, laptops, and desktop computers with a supported web browser."
    },
    {
      question: "What internet speed do I need?",
      answer:
        "A minimum of 5 Mbps is recommended for HD streaming, while 25 Mbps or higher is recommended for 4K or Ultra HD content."
    },
    {
      question: "Can I download videos to watch offline?",
      answer:
        "Offline downloads are available on supported devices for premium users, subject to content licensing restrictions."
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes. All payments are processed using encrypted connections and secure, industry-standard payment gateways."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes. You can cancel your subscription at any time from your account settings. Your access will remain active until the end of the billing period."
    },
    {
      question: "Why is some content unavailable in my region?",
      answer:
        "Content availability depends on regional licensing agreements, which may restrict access in certain countries."
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our support team through the Help Center or Contact Us page for assistance with technical or account-related issues."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 py-16 ">
      
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto md:max-w-300 space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-neutral-800">
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-6 text-left text-lg md:text-xl hover:bg-neutral-700 transition"
            >
              <span>{faq.question}</span>
              <span className="text-3xl">
                {openIndex === index ? "×" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="border-t border-neutral-700 p-6 text-gray-300 text-base md:text-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
