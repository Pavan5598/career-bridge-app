"use client";

import { Manrope } from "next/font/google";
import React, { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const faqs = [
  {
    question: "Do you guarantee placements?",
    answer:
      "We provide complete training + support + interview preparation. Placement depends on your practice and performance.\n\nBut we support you until you get placed.",
  },
  {
    question: "How long will it take to get a job after training?",
    answer:
      "Typically, it takes anywhere from 1 to 3 months after completing the training, depending on your dedication, consistent practice, and the current hiring market conditions.",
  },
  {
    question: "Do you help career-gap or non-IT students?",
    answer:
      "Yes, absolutely! Our curriculum is designed from scratch, making it highly suitable for beginners, professionals transitioning from non-IT backgrounds, and individuals with career gaps.",
  },
  {
    question: "Will you help me after course completion?",
    answer:
      "Yes, our support extends well beyond course completion. We offer mock interviews, dedicated doubt-clearing sessions, and continued placement guidance until you succeed.",
  },
  {
    question: "Will you help me build my resume and LinkedIn profile?",
    answer:
      "Yes, we provide dedicated sessions focused on resume building, GitHub portfolio setup, and LinkedIn profile optimization to ensure you stand out to recruiters.",
  },
];

export default function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    // Close if already open, otherwise open clicked item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${manrope.className} w-full px-4 py-6 bg-white`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#2A3B5C] mb-10">
          Frequently asked questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200 py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className="text-lg md:text-xl font-medium text-[#2A3B5C] pr-4">
                    {faq.question}
                  </h3>

                  {/* Icon toggle */}
                  <div className="flex-shrink-0 ml-4 cursor-pointer">
                    {isOpen ? (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#3B4D70] text-white">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full border border-[#6B7A99] text-[#4A5B7A] cursor-pointer">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>

                {/* Answer content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pr-8 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}