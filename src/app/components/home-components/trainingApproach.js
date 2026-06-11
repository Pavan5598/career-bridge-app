"use client";

import { Manrope } from "next/font/google";
import { IoTriangleSharp } from "react-icons/io5";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const steps = [
  {
    id: "01",
    title: "Step-by-step teaching (even if you're a slow learner)",
    desc: "We teach everything slowly, clearly, and in order—so every student learns comfortably.",
  },
  {
    id: "02",
    title: "Doubt-solving until you understand",
    desc: "Ask as many questions as you need. We explain until everything becomes clear.",
  },
  {
    id: "03",
    title: "Interview preparation from Day 1",
    desc: "We start preparing you for interviews from the very first week—so you build confidence step by step.",
  },
  {
    id: "04",
    title: "Daily practice + weekly projects",
    desc: "Build your skills daily with hands-on exercises and strengthen them through weekly real-world projects.",
  },
  {
    id: "05",
    title: "Real-time examples",
    desc: "Every concept is explained with real-time examples so you understand how it works in actual projects.",
  },
  {
    id: "06",
    title: "Support until you get placed",
    desc: "We stay with you until you land a job — from training to interview support.",
  },
];

export default function TrainingApproach() {
  return (
    <section className={`${manrope.className} bg-[#EAF4FF] py-3 px-3`}>
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-bold text-[#E4202C]">
            Our Training Approach
          </h2>

          <p className="text-[#1f3b5c] mt-1 text-[14px] sm:text-[16px] font-medium">
            A comprehensive guide to how we empower our students
          </p>
        </div>

        {/* Timeline */}
       <div className="relative flex items-stretch gap-0 sm:gap-0 md:gap-0 lg:gap-1">

          {/* Right cards */}
          <div className="flex flex-col flex-1">
            {steps.map((step, index) => {

              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex items-center py-2 ml-2 sm:ml-3 md:ml-4 lg:ml-5 border-l-4 ${
                    isEven
                      ? "border-[#2E4378]"
                      : "border-[#E4202C]"
                  }`}
                >

                  {/* DOT */}
                  <div className="flex items-center justify-center w-[20.7px] -ml-[12px]">
                    <div
                      className={`w-2.5 h-2.5 rounded-full
                      ${
                        isEven
                          ? "bg-[#2E4378] ring-[#2E4378]"
                          : "bg-[#E4202C] ring-[#E4202C]"
                      }
                      ring-2
                      ring-offset-2
                      ring-offset-[#EAF4FF]
                      shadow-sm`}
                    />
                  </div>

                  {/* TRIANGLE */}
                  <div
                   className={`flex-shrink-0 -mr-[5px] ml-2 sm:ml-3 md:ml-4 lg:ml-5 z-10 ${
                      isEven
                        ? "text-[#2E4378]"
                        : "text-[#E4202C]"
                    }`}
                  >
                    <IoTriangleSharp
                      className="rotate-[-90deg]"
                      size={30}
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className={`flex-1 rounded-[26px] pl-3 pr-5 py-1 shadow-md flex items-center gap-5 ${
                      isEven
                        ? "bg-[#2E4378]"
                        : "bg-[#E4202C]"
                    }`}
                  >

                    {/* BADGE */}
                    <div
                      className="hidden md:flex w-[72px] h-[72px] rounded-full bg-white flex-col items-center justify-center"
                    >
                      <span
                        className={`text-[14px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-bold tracking-[0.15em] uppercase ${
                          isEven
                            ? "text-[#E4202C]"
                            : "text-[#2E4378]"
                        }`}
                      >
                        STEP
                      </span>

                      <span
                        className={`text-[16px] font-bold ${
                          isEven
                            ? "text-[#E4202C]"
                            : "text-[#2E4378]"
                        }`}
                      >
                        {step.id}
                      </span>
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-white font-bold text-[14px] sm:text-[14px] leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-white/80 text-[12px] sm:text-[12px] mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-7 mb-5">
          <button className="bg-[#2E4378] text-white font-semibold rounded-full px-10 py-4 text-sm sm:text-[15px] min-w-[220px] hover:opacity-90 active:scale-95 transition cursor-pointer">
            Start Your Learning Journey
          </button>
        </div>

      </div>
    </section>
  );
}