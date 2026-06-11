import { Manrope } from "next/font/google";

import {
  LuGraduationCap,
  LuBriefcase,
  LuNetwork,
  LuUsers,
  LuCodeXml,
  LuLaptop,
} from "react-icons/lu";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function WhyCareer() {
  const cards = [
    {
      id: "1",
      icon: LuGraduationCap,
      title: "Beginner-Friendly Teaching",
      description:
        "We start from absolute basics so even complete beginners can learn with ease.",
    },
    {
      id: "2",
      icon: LuBriefcase,
      title: "Job-Ready Curriculum",
      description:
        "A curriculum built to match real company requirements, ensuring you learn exactly what the industry expects.",
    },
    {
      id: "3",
      icon: LuNetwork,
      title: "Small Batches = Personal Guidance",
      description:
        "Small batches ensure personal attention, doubt clearing, and one-on-one guidance.",
    },
    {
      id: "4",
      icon: LuUsers,
      title: "Daily Hands-On Practice",
      description:
        "Practice every day with real-world exercises so you truly understand what you learn.",
    },
    {
      id: "5",
      icon: LuCodeXml,
      title: "Weekly Tests & Real Time Projects",
      description:
        "Gain practical experience through weekly tests and real-world projects that build confidence and readiness.",
    },
    {
      id: "6",
      icon: LuLaptop,
      title: "Mock Interviews & Placement Support",
      description:
        "Get fully prepared with mock interviews, HR training, resume help, and placement support.",
    },
  ];

  return (
    <section
      className={`${manrope.className} w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 bg-[#FFFFFF]`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center text-center">

        {/* HEADING */}
        <h1 className="text-[#2E4378] font-bold leading-[125%] text-[24px] sm:text-[28px] lg:text-[32px] max-w-[681px]">
          Why Career Bridge
        </h1>

        {/* SUB HEADING */}
        <h2 className="mt-4 text-[#2E4378] font-semibold leading-[180%] tracking-[0.48px] text-[16px] sm:text-[20px] lg:text-[24px] w-full max-w-[1200px]">
          Bridging the Skills gap in the Tech Industry
        </h2>

        {/* CARDS */}
        <div className="mt-7 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-1 justify-items-center">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="
                  relative
                  overflow-hidden
                  w-full
                  max-w-[320px]
                  min-h-[200px]
                  pt-[72px]
                  pb-[22px]
                  px-[20px]
                  rounded-[16px]
                  bg-[#1E76B6]
                  flex flex-col items-center text-center
                "
              >
                {/* ICON */}
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center">
                  <Icon className="text-[#E4202C] text-[28px] stroke-[2]" />
                </div>

                {/* NUMBER CIRCLE */}
                <div className="absolute top-5 -right-4">
                  <div className="w-[42px] h-[42px] xl:w-[48px] xl:h-[48px] rounded-full bg-white text-[#E4202C] text-[14px] xl:text-[16px] font-bold flex items-center justify-center">
                    {card.id}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mt-0 text-white font-bold text-[16px] leading-[24px]">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-white text-[14px] leading-[20px] font-light">
                  {card.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}