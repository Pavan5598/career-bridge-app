"use client";

import Image from "next/image";
import { Manrope } from "next/font/google";
import { Lato, Poppins } from "next/font/google";
import { PiSpeakerSimpleLowFill } from "react-icons/pi";
import { AiOutlineDoubleRight } from "react-icons/ai";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const fears = [
  "Can I really learn this?",
  "What if I fail?",
  "What if I don't understand anything?",
];

function QuoteIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      className={`flex-shrink-0 ${className}`}
    >
      <path
        d="M12.5 10.0002C14.417 10.0002 16 8.41624 16 6.50024C16 5.62524 15.763 4.86724 15.309 4.28924C14.977 3.86624 14.486 3.63624 14.009 3.38924C13.983 2.59024 14.029 2.37124 14.669 1.08924C15.006 0.415244 14.25 -0.278755 13.607 0.114244C10.202 2.21024 9 4.66724 9 6.50024C9 8.41624 10.583 10.0002 12.5 10.0002ZM3.5 10.0002C5.417 10.0002 7 8.41624 7 6.50024C7 5.62524 6.763 4.86724 6.309 4.28924C5.977 3.86624 5.486 3.63624 5.009 3.38924C4.983 2.59024 5.029 2.37124 5.669 1.08924C6.006 0.415244 5.25 -0.278755 4.607 0.114244C1.202 2.21024 0 4.66724 0 6.50024C0 8.41624 1.583 10.0002 3.5 10.0002Z"
        fill="#999999"
      />
    </svg>
  );
}

export default function Foundersection() {
  return (
    <section
      className={`${manrope.className} bg-[#E8F3FB] px-4 py-8 sm:px-4 md:px-8 lg:px-16 lg:py-[70px] xl:px-[120px]`}
    >
<div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 md:gap-6 lg:flex-row lg:items-center lg:gap-[60px] xl:gap-[85px]">
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col items-center lg:w-auto lg:flex-shrink-0 lg:max-w-[320px] xl:max-w-[420px]">
          {/* IMAGE */}
          <div className="relative">
            <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full border-l-[8px] border-[#2E4378] bg-[#E8F3FB] sm:h-[300px] sm:w-[300px] lg:h-[280px] lg:w-[280px] xl:h-[342px] xl:w-[342px]">
              <Image
                src="/AboutUs/hemanth sir.png"
                alt="Hemanth Gangireddy"
                width={320}
                height={320}
                className="h-[240px] w-[240px] rounded-full object-cover sm:h-[280px] sm:w-[280px] lg:h-[260px] lg:w-[260px] xl:h-[320px] xl:w-[320px]"
              />
            </div>

            {/* QUOTE CIRCLE */}
            <div className="absolute bottom-0 right-0 flex h-[95px] w-[95px] flex-col items-center justify-center rounded-full bg-[#2E4378] px-2 py-3 shadow-lg sm:h-[110px] sm:w-[110px] lg:h-[105px] lg:w-[105px] xl:h-[128px] xl:w-[128px]">

  {/* SMALL TOP QUOTE */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    className="mb-[2px] flex-shrink-0"
  >
    <path
      d="M12.5 10.0002C14.417 10.0002 16 8.41624 16 6.50024C16 5.62524 15.763 4.86724 15.309 4.28924C14.977 3.86624 14.486 3.63624 14.009 3.38924C13.983 2.59024 14.029 2.37124 14.669 1.08924C15.006 0.415244 14.25 -0.278755 13.607 0.114244C10.202 2.21024 9 4.66724 9 6.50024C9 8.41624 10.583 10.0002 12.5 10.0002ZM3.5 10.0002C5.417 10.0002 7 8.41624 7 6.50024C7 5.62524 6.763 4.86724 6.309 4.28924C5.977 3.86624 5.486 3.63624 5.009 3.38924C4.983 2.59024 5.029 2.37124 5.669 1.08924C6.006 0.415244 5.25 -0.278755 4.607 0.114244C1.202 2.21024 0 4.66724 0 6.50024C0 8.41624 1.583 10.0002 3.5 10.0002Z"
      fill="white"
    />
  </svg>

  {/* TEXT */}
  <p className="text-center text-[7px] font-medium leading-[12px] text-white sm:text-[8px] lg:text-[8px] xl:text-[10px] xl:leading-[16px]">
    Great mentors don't just teach, they believe in your potential.
  </p>
</div>
          </div>

          {/* NAME */}
          <h2 className="mt-7 text-center text-[22px] font-bold leading-[180%] tracking-[0.48px] text-black lg:text-[20px] xl:text-[24px]">
            Hemanth Gangireddy
          </h2>

          {/* DIVIDER */}
          <div className="my-3 flex items-center gap-3">
            <div className="h-[1px] w-[60px] bg-[#AEAEAE]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="#E4202C" />
            </svg>
            <div className="h-[1px] w-[60px] bg-[#AEAEAE]" />
          </div>

          {/* DESIGNATION */}
          <p
            className={`${poppins.className} text-center text-[14px] font-medium leading-[180%] text-[#2E4378] lg:text-[14px] xl:text-[16px]`}
          >
            Founder and Director,
            <br />
            Career Bridge IT Services
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full flex-col items-center gap-2 lg:items-start lg:gap-4 lg:flex-1 xl:gap-6 xl:max-w-[762px]">
          {/* HEADING */}
          <h1 className="w-full text-center text-[28px] font-bold leading-[42px] text-[#2E4378] sm:text-[32px] sm:leading-[45px] lg:text-left lg:text-[26px] lg:leading-[38px] xl:text-[32px] xl:leading-[45px]">
            A Mentor Who Believes in You
            <br />
            Before You{" "}
            <span
              className={`${lato.className} italic font-semibold text-[#22B2EB]`}
            >
              Believe in Yourself
            </span>
          </h1>

          {/* FOUNDERS VOICE CARD */}
          <div className="flex w-full items-start gap-4 rounded-[30px] bg-white px-5 py-5 shadow-[0_2px_4px_rgba(0,0,0,0.25)] lg:px-5 lg:py-4 xl:px-8 xl:py-[17px]">
            {/* ICON */}
            <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-[#E8F3FB] lg:h-[48px] lg:w-[48px] xl:h-[62px] xl:w-[62px]">
              <PiSpeakerSimpleLowFill className="text-[24px] text-[#2E4378] lg:text-[22px] xl:text-[30px]" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <h3
                  className={`${lato.className} text-[14px] font-bold italic text-[#2E4378] xl:text-[15px]`}
                >
                  Founder's Voice
                </h3>
                <span className="text-[#2E4378] opacity-100 text-lg leading-none"><AiOutlineDoubleRight /></span>
              </div>

              <p className="text-[13px] font-medium leading-[22px] text-[#313131] lg:text-[13px] xl:text-[14px] xl:leading-[24px]">
                For over a decade, I have taught thousands of students —{" "}
                many from non-IT backgrounds, career gaps, and zero confidence.
              </p>
            </div>
          </div>

          {/* FEARS LABEL */}
          <h4 className="w-full text-center text-[11px] font-medium uppercase leading-[28px] tracking-[2px] text-black lg:text-left lg:text-[11px] lg:leading-[26px] xl:text-[13px] xl:leading-[30px] xl:tracking-[2.24px]">
            ALMOST ALL OF THEM FELT THE SAME FEAR YOU MIGHT BE FEELING TODAY :
          </h4>

          {/* FEARS — horizontal row of 3 */}
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-center lg:justify-start">
            {fears.map((fear, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 sm:flex-1 ${
                  idx < fears.length - 1
                    ? "lg:border-r lg:border-[#D4D4D4] lg:pr-4"
                    : ""
                }`}
              >
                <QuoteIcon className="mt-1" />
                <p className="text-[13px] font-medium leading-[20px] text-[#E4202C] lg:text-[13px] xl:text-[15px] xl:leading-[22px]">
                  {fear}
                </p>
              </div>
            ))}
          </div>

          {/* PROMISE */}
          <div className="text-center lg:text-left">
            <h3
              className={`${lato.className} text-[20px] font-semibold italic text-[#27AB4B] lg:text-[20px] xl:text-[24px]`}
            >
              My Promise is Simple
            </h3>

            <p className="mt-1 text-[14px] font-bold leading-[24px] text-[#313131] lg:text-[14px] xl:text-[16px] xl:leading-[26px]">
              "If you're willing to learn, I'll guide you until{" "}
              <span className="text-[#27AB4B]">you succeed.</span>"
            </p>
          </div>

          {/* BUTTON */}
          <button className="flex items-center justify-center rounded-full bg-[#E4202C] text-white font-semibold text-center transition-all duration-300 hover:scale-[1.01] hover:bg-[#c81824] w-full px-4 py-3 text-[14px] sm:w-fit sm:px-3 sm:py-2 sm:text-[14px] md:px-6 md:py-3 md:text-[15px] lg:px-[60px] lg:py-[11px] lg:text-[15px] xl:px-[112px] xl:py-[12px] xl:text-[16px] 2xl:px-[130px] 2xl:py-[14px]">
  Talk to the Mentor
</button>
        </div>
      </div>
    </section>
  );
}