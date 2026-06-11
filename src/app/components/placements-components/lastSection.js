import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import React from 'react';

const CTASection = () => {
  return (
    <section className={`${manrope.className} w-full max-w-5xl mx-auto p-4`}>
      <div className="relative flex flex-col items-center text-center p-8 md:p-14 border border-slate-300 rounded-3xl bg-white overflow-hidden shadow-sm">
        
        {/* Left Decorative Dots (Hidden on mobile) */}
        <svg 
          className="absolute left-6 bottom-6 hidden md:block text-[#526aa5] opacity-60"
          width="109" 
          height="109" 
          fill="none"
          aria-hidden="true"
        >
          <pattern id="dots-left" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="109" height="109" fill="url(#dots-left)" />
        </svg>

        {/* Right Decorative Dots (Hidden on mobile) */}
        <svg 
          className="absolute right-6 top-6 hidden md:block text-[#2E4378] opacity-60"
          width="109" 
          height="109" 
          fill="none"
          aria-hidden="true"
        >
          <pattern id="dots-right" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="109" height="109" fill="url(#dots-right)" />
        </svg>

        {/* Text and Button Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] leading-tight font-bold text-[#23305c] mb-4">
            Your IT Career Starts With the Right Training & the Right Support
          </h2>
          
          <p className="text-slate-500 text-sm md:text-base font-medium mb-8">
            Let's understand your background and help you choose the best career path.
          </p>
          
          <button className="bg-[#ea2a3a] hover:bg-[#d62432] text-white text-sm md:text-base font-medium py-3 px-8 rounded-full transition-colors duration-300 cursor-pointer">
            Book Free Counselling
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;