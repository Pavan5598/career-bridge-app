import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const steps = [
  {
    title: "Career Guidance & Course Selection",
    description:
      "Personal guidance to choose right career path and course!",
    bg: "from-[#E4202C] to-[#A41D25]",
    ringColor: "from-[#E4202C] to-[#A41D25]",
    iconColor: "#2E4378",
    arrow: "#2E4378",
  },
  {
    title: "Instructor Demonstration in Classroom",
    description:
      "Guidance to select the right career path and course.",
    bg: "from-[#2E4378] to-[#263B73]",
    ringColor: "from-[#2E4378] to-[#263B73]",
    iconColor: "#E4202C",
    arrow: "#E4202C",
  },
  {
    title: "Practice & Hands-on Labs",
    description:
      "Instructor-led classroom demos for clear concepts.",
    bg: "from-[#E4202C] to-[#A41D25]",
    ringColor: "from-[#E4202C] to-[#A41D25]",
    iconColor: "#2E4378",
    arrow: "#2E4378",
  },
  {
    title: "Assessment, Feedback & Certification",
    description:
      "Assess skills, give feedback, certify classroom learning!",
    bg: "from-[#2E4378] to-[#263B73]",
    ringColor: "from-[#2E4378] to-[#263B73]",
    iconColor: "#E4202C",
    arrow: null,
  },
];

export default function StepsToClassroomTraining() {
  return (
    <section
      className={`${manrope.className} flex w-full items-center justify-center overflow-hidden bg-[#E8F3FB] py-10 sm:py-10 xl:py-22 2xl:h-[505px]`}
    >
      <div className="w-full max-w-[1440px] px-5 sm:px-8 xl:px-16 2xl:px-20">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[26px] font-[700] text-[#2E4378] sm:text-[28px] lg:text-[30px] 2xl:text-[32px]">
            How Classroom Training Works
          </h2>

          {/* Red underline */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 252 25"
            fill="none"
            className="mt-2 h-[18px] w-[180px] lg:w-[220px] 2xl:h-[24.767px] 2xl:w-[251.746px]"
          >
            <path
              d="M251.746 24.7669C110.35 -18.7966 25.0002 4.86826 0 22.1461C108.722 -11.6331 212.792 19.2341 222.676 21.2725L251.746 24.7669Z"
              fill="#E4202C"
            />
          </svg>

          <p className="mt-4 max-w-[720px] text-center text-[16px] font-[600] text-[#2B2B2B] sm:text-[18px] 2xl:text-[20px]">
            A proven 4-step classroom training process to build job-ready
            talent.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-4 xl:gap-6 2xl:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex justify-center">
              <div className="relative flex flex-col items-center">
                {/* Card */}
                <div
                  className={`relative flex h-[220px] w-full max-w-[236px] flex-col items-center justify-start pt-12 rounded-[28px] bg-gradient-to-b ${step.bg} px-5 text-center shadow-md 2xl:h-[236px] 2xl:w-[236px]`}
                >
                  {/* Icon Circle */}
                  <div
                    className={`absolute -top-[44px] flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-b ${step.ringColor} p-[10px] shadow-md`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#E8F3FB]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="aspect-square h-[24px] w-[24px] 2xl:h-[30px] 2xl:w-[30px]"
                      >
                        <path
                          d="M25 21.25C25.663 21.25 26.2989 20.9866 26.7678 20.5178C27.2366 20.0489 27.5 19.413 27.5 18.75V5C27.5 4.33696 27.2366 3.70107 26.7678 3.23223C26.2989 2.76339 25.663 2.5 25 2.5H11.825C12.2625 3.2625 12.5 4.125 12.5 5H25V18.75H13.75V21.25M18.75 8.75V11.25H11.25V27.5H8.75V20H6.25V27.5H3.75V17.5H1.875V11.25C1.875 10.587 2.13839 9.95107 2.60723 9.48223C3.07607 9.01339 3.71196 8.75 4.375 8.75H18.75ZM10 5C10 5.66304 9.73661 6.29893 9.26777 6.76777C8.79893 7.23661 8.16304 7.5 7.5 7.5C6.83696 7.5 6.20107 7.23661 5.73223 6.76777C5.26339 6.29893 5 5.66304 5 5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5C8.16304 2.5 8.79893 2.76339 9.26777 3.23223C9.73661 3.70107 10 4.33696 10 5Z"
                          fill={step.iconColor}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-center text-[13px] md:text-[12px] font-[700] leading-[1.35] text-white 2xl:text-[16px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[163px] text-center text-[12px] font-[400] leading-[1.4] text-[#DEDEDE] 2xl:text-[14px]">
                    {step.description}
                  </p>
                </div>

 {/* Arrow (visible from lg and above) */}
{step.arrow && (
  <div className="absolute left-[calc(100%+4px)] top-[50%] hidden -translate-y-1/2 md:flex items-center 2xl:left-[calc(100%+10px)]">
    {/* Left Dot */}
    <div
      className="h-[7px] w-[7px] rounded-full shrink-0 lg:h-[6px] lg:w-[6px] 2xl:h-[8px] 2xl:w-[8px]"
      style={{ backgroundColor: step.arrow }}
    />

    {/* Dotted Line */}
    <div
      className="mx-[2px] h-[1px] w-[34px] hidden   md:block border-t-[3px] border-dotted lg:w-[30px] xl:w-[70px] 2xl:mx-[3px] 2xl:w-[42px]"
      style={{ borderColor: step.arrow }}
    />

    {/* Arrow Head */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 11"
      fill="none"
      className="h-[9px] w-[9px] shrink-0 lg:h-[8px] lg:w-[8px] xl:h-[9px] xl:w-[9px] 2xl:h-[22px] 2xl:w-[15px]"
    >
      <path
        d="M1.5 1.5L9.5 5.5L1.5 9.5"
        stroke={step.arrow}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}