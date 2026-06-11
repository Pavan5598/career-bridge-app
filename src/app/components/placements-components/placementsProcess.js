import { Manrope } from "next/font/google";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const stepsData = [
  {
    id: 1,
    title: "Career Exploration",
    description:
      "Discover your interests and career paths with personalized counseling and workshops.",
    dashedBorder: "border-[#A07EDE]",
    circleBg: "bg-[#794DD6]",
    cardBorderRight: "border-r-[#794DD6]",
    gradientFrom: "#9268E9",
    gradientTo: "#3F2870",
    connectorBg: "bg-[#794DD6]",
   icon: <IoSearch size={22} className="text-white" />,
  },
  {
    id: 2,
    title: "Skill Development",
    description:
      "Enhance your abilities through specialized training modules and practical projects.",
    dashedBorder: "border-[#7A96FF]",
    circleBg: "bg-[#4A72FF]",
    cardBorderRight: "border-r-[#4A72FF]",
    gradientFrom: "#6B8CFF",
    gradientTo: "#2A48B0",
    connectorBg: "bg-[#4A72FF]",
    icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9 3V5L15 5V3L9 3ZM17 5C17 6.10457 16.1046 7 15 7L9 7C7.89543 7 7 6.10457 7 5V3C7 1.89543 7.89543 1 9 1L15 1C16.1046 1 17 1.89543 17 3V5Z"
      fill="white"
    />
    <path
      d="M3 20L3 6C3 5.20435 3.3163 4.44152 3.87891 3.87891C4.44152 3.3163 5.20435 3 6 3L8 3C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5L6 5C5.73478 5 5.48051 5.10543 5.29297 5.29297C5.10543 5.48051 5 5.73478 5 6L5 20L5.00488 20.0986C5.02757 20.3276 5.12883 20.5429 5.29297 20.707C5.48051 20.8946 5.73478 21 6 21L18 21C18.2652 21 18.5195 20.8946 18.707 20.707C18.8946 20.5195 19 20.2652 19 20L19 6C19 5.73478 18.8946 5.48051 18.707 5.29297C18.5429 5.12883 18.3276 5.02757 18.0986 5.00488L18 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3L18 3L18.2969 3.01465C18.9835 3.08291 19.6289 3.38671 20.1211 3.87891C20.6837 4.44152 21 5.20435 21 6L21 20C21 20.7957 20.6837 21.5585 20.1211 22.1211C19.5585 22.6837 18.7957 23 18 23L6 23C5.20435 23 4.44152 22.6837 3.87891 22.1211C3.38671 21.6289 3.08291 20.9835 3.01465 20.2969L3 20Z"
      fill="white"
    />
    <path
      d="M14.3689 11.2246C14.7617 10.9043 15.3407 10.9268 15.7068 11.293C16.0729 11.6591 16.0955 12.2381 15.7752 12.6309L15.7068 12.707L11.7068 16.707C11.3407 17.0731 10.7617 17.0957 10.3689 16.7754L10.2928 16.707L8.29274 14.707L8.22438 14.6309C7.90403 14.2381 7.92662 13.6591 8.29274 13.293C8.65885 12.9268 9.23786 12.9043 9.63063 13.2246L9.7068 13.293L10.9998 14.5859L14.2928 11.293L14.3689 11.2246Z"
      fill="white"
    />
  </svg>
),
  },
  {
    id: 3,
    title: "Resume & Portfolio Building",
    description:
      "Craft professional resumes and portfolios that stand out to top employers.",
    dashedBorder: "border-[#33C4B5]",
    circleBg: "bg-[#00B4A2]",
    cardBorderRight: "border-r-[#00B4A2]",
    gradientFrom: "#2ED3C2",
    gradientTo: "#00766A",
    connectorBg: "bg-[#00B4A2]",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Interview Preparation",
    description:
      "Master interview techniques with mock interviews and expert feedback sessions.",
    dashedBorder: "border-[#8FC46F]",
    circleBg: "bg-[#6DA34D]",
    cardBorderRight: "border-r-[#6DA34D]",
    gradientFrom: "#8FC46F",
    gradientTo: "#456D2F",
    connectorBg: "bg-[#6DA34D]",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Job Matching & Application",
    description:
      "Connect with leading companies and apply to roles aligned with your profile and aspirations.",
    dashedBorder: "border-[#FFB84D]",
    circleBg: "bg-[#F7931E]",
    cardBorderRight: "border-r-[#F7931E]",
    gradientFrom: "#FFAF4D",
    gradientTo: "#B8670A",
    connectorBg: "bg-[#F7931E]",
    icon: <LuHandshake size={22} className="text-white" />,
  },
  {
    id: 6,
    title: "Placement Success",
    description:
      "Secure your desired position and embark on a fulfilling career journey.",
    dashedBorder: "border-[#F0578C]",
    circleBg: "bg-[#D82B68]",
    cardBorderRight: "border-r-[#D82B68]",
    gradientFrom: "#F0578C",
    gradientTo: "#9B1645",
    connectorBg: "bg-[#D82B68]",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function PlacementProcess() {
  return (
    <div
      className={`w-full min-h-screen bg-[#E8F1FA] py-10 sm:py-14 md:py-8 px-4 sm:px-6 md:px-8 flex flex-col items-center ${manrope.className}`}
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <p className="text-[24px] font-bold text-[#2E4378] uppercase tracking-[0.15em] mb-0 sm:mb-0">
          OUR PROVEN
        </p>

        <div className="relative inline-block">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold text-[#EF233C] leading-tight pb-2">
            Placement Process
          </h2>

          <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#1E3A5F] via-[#EF233C] to-[#EF233C] rounded-full" />
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="w-full max-w-[680px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col">
        {stepsData.map((step, index) => (
          <div key={step.id} className="flex flex-row items-stretch w-full">
            {/* Left: circle + connector */}
             <div className="flex flex-col items-center mr-3 sm:mr-4 md:mr-6 lg:mr-10 xl:mr-16 mt-3 sm:mt-3">
                  {/* Dashed outer ring */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[68px] md:h-[68px] shrink-0 relative flex items-center justify-center z-10">
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="34"
                    cy="34"
                    r="32"
                    stroke={step.dashedBorder
                      .replace("border-[", "")
                      .replace("]", "")}
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold ${step.circleBg} shadow-[0_3px_6px_rgba(0,0,0,0.18)]`}
                >
                  {String(step.id).padStart(2, "0")}
                </div>
              </div>

              {/* Vertical connector */}
              {index !== stepsData.length - 1 && (
  <div
    className="w-[1.5px] flex-1 -my-0 sm:-my-6 bg-[#794DD6] opacity-70"
  />
)}
            </div>

            {/* Right: card */}
            <div className="flex-1 pb-3 sm:pb-4 md:pb-5 flex items-start">
              <div
                className={`w-full rounded-xl sm:rounded-2xl bg-white flex items-stretch border-r-4 ${step.cardBorderRight} shadow-[0_2px_8px_1px_rgba(0,0,0,0.12)] min-h-[80px]`}
              >
                {/* Gradient left tab */}
                <div className="relative flex items-center justify-center shrink-0 w-[clamp(64px,12vw,84px)]">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 84 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id={`grad-${step.id}`}
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={step.gradientFrom}
                        />
                        <stop
                          offset="100%"
                          stopColor={step.gradientTo}
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d={`
                        M 12 0
                        Q 0 0 0 12
                        L 0 88
                        Q 0 100 12 100
                        L 62 100
                        Q 68 100 84 50
                        Q 68 0 62 0
                        Z
                      `}
                      fill={`url(#grad-${step.id})`}
                    />
                  </svg>

                  <div className="relative z-10 -translate-x-2">
                    {step.icon}
                  </div>
                </div>

                {/* Text block */}
                <div className="flex-1 flex flex-col justify-center py-3 pl-6 sm:pl-7 pr-3 sm:pr-4">
                  <h4 className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#171A1F] leading-snug mb-0.5 sm:mb-1">
                    {step.title}
                  </h4>

                  <p className="text-[10px] sm:text-[11px] md:text-[12px] font-normal text-[#565D6D] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}