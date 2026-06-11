"use client";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function AboutHeroSection() {
  return (
    <section
      className={
        manrope.className +
        " relative w-full min-h-screen overflow-hidden z-30"
      }
    >
      {/* Background Image */}
      <Image
        src="/AboutUs/image 521.png"
        alt="About Us Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="flex max-w-[860px] flex-col items-center text-center">

          {/* Heading */}
          <h1 className="text-[28px] font-bold leading-[140%] text-white sm:text-[36px] lg:text-[44px]">
            <span className="text-[#E4202C]">
              Your IT Career Starts With The Right Guidance
            </span>{" "}
            - And That's What
            <br className="hidden md:block" />
            We're Here For.
          </h1>

          {/* Description with leading dash */}
          <p className="mt-6 max-w-[720px] text-[15px] font-medium leading-[170%] text-[#DBDBDB] sm:text-[16px] lg:text-[17px]">
            
            Most students fail to start an IT career because they feel
            confused, scared of coding, or unsure where to begin. We help you
            overcome all of that — step by step.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">

            {/* Primary Button */}
            <button className="flex h-[52px] min-w-[260px] items-center justify-center rounded-full bg-[#E4202C] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#FF0010] active:scale-95">
              Meet Your Expert
            </button>

            {/* Secondary Button */}
            <button className="flex h-[52px] min-w-[280px] items-center justify-center gap-2 rounded-full border-2 border-[#E4202C] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#E4202C] active:scale-95">
              Book a Free Counselling
              <FaArrowRight className="text-[13px]" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}