"use client";

import { Manrope } from "next/font/google";
import {  
  FaFileAlt,
  FaAward,
} from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FiCode } from "react-icons/fi";
import { LuLaptopMinimal, LuUserRound } from "react-icons/lu";

const manrope = Manrope({
  subsets: ["latin"],
});

const trainingData = [
  {
    title: "Learn from basics – even for non-IT learners.",
    desc: "Start from basics, easy even for non-IT learners.",
    icon: <LuUserRound size={24} />,
    side: "left",
    color: "blue",
  },
  {
    title: "Simple Explanations - no jargon, no pressure",
    desc: "Plain-language teaching - no confusion, no stress",
    icon: <LuLaptopMinimal size={24} />,
    side: "right",
    color: "red",
  },
  {
    title: "Hands-On Practice Daily",
    desc: "Daily practice with real tasks builds real skills.",
    icon: <FiCode size={24} />,
    side: "left",
    color: "blue",
  },
  {
    title: "Real Projects to Build Confidence",
    desc: "Work on real projects to build confidence for real IT environments.",
    icon: <FaRegFolderClosed size={24} />,
    side: "right",
    color: "red",
  },
  {
    title: "Mock Interviews & Resume Building",
    desc: "Practice real interview questions and build a standout resume.",
    icon: <FaFileAlt size={24} />,
    side: "left",
    color: "blue",
  },
  {
    title: "Support Until You Get the Job",
    desc: "We guide you through interviews and prep until you land your first IT job.",
    icon: <FaAward size={24} />,
    side: "right",
    color: "red",
  },
];

export default function TrainingApproach() {
  return (
    <section className="w-full bg-[#E8F3FB] py-[50px] px-[20px] md:px-[120px] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-10">
        {/* Heading */}
        <h2
          className={`${manrope.className} text-[26px] md:text-[40px] font-extrabold text-[#E4202C] text-center leading-tight`}
        >
          A Training Approach Built For Real Students
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-14 sm:gap-14 md:gap-10 lg:gap-8 items-center w-full">
          {trainingData.map((item, index) => (
            <div
              key={index}
              className="mx-auto relative w-fit max-w-[760px] h-[70px] md:h-[90px]"
            >
              {/* Main Card */}
              <div
                className={`relative w-fit md:w-full h-full bg-white  flex items-center overflow-visible ${
                  item.side === "left"
                    ? "rounded-r-[70px] pl-[60px] sm:pl-[110px] md:pl-[120px] pr-[20px] sm:pr-[40px] md:pr-[60px] lg:pl-[160px]"
                    : "rounded-l-[70px] pr-[55px] sm:pr-[110px] md:pr-[120px] pl-[10px] sm:pl-[40px] md:pl-[80px] lg:pl-[100px] xl:pl-[120px] 2xl:pl-[130px]"
                }`}
              >
                {/* Inner Curve Cut */}
               {/* Curved Shape */}
<div
  className={`absolute top-1/2 -translate-y-1/2 z-10 bg-[#E8F3FB] h-[130px] w-[110px] ${
    item.side === "left"
      ? "left-[-55px] rounded-r-[999px]"
      : "right-[-55px] rounded-l-[999px]"
  }`}
/>

                {/* Text */}
                <div className="relative z-20 w-[200px] h-[42px] sm:w-[230px] sm:h-[42px] md:w-[400px] md:h-[44px] flex flex-col justify-center overflow-hidden">
                  <h3 className="text-[10px] md:text-[16px] font-bold text-black leading-[14px] md:leading-[26px] line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-[9px] md:text-[12px] text-[#4B4B4B] leading-[12px] md:leading-[22px] line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Floating Icon */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 z-30 w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full border-2 border-dashed flex items-center justify-center ${
                  item.side === "left"
                    ? "left-[-8px] md:left-[-48px] border-[#2E4378]"
                    : "right-[-8px] md:right-[-42px] border-[#E4202C]"
                }`}
              >
                <div
                  className={`w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${
                    item.color === "blue"
                      ? "bg-[#2E4378]"
                      : "bg-[#E4202C]"
                  }`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}