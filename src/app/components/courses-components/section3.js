import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const FeatureIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="w-[24px] h-[24px] shrink-0"
  >
    <path
      d="M20 17C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2H9.46C9.81 2.61 10 3.3 10 4H20V15H11V17M15 7V9H9V22H7V16H5V22H3V14H1.5V9C1.5 8.46957 1.71071 7.96086 2.08579 7.58579C2.46086 7.21071 2.96957 7 3.5 7H15ZM8 4C8 4.53043 7.78929 5.03914 7.41421 5.41421C7.03914 5.78929 6.53043 6 6 6C5.46957 6 4.96086 5.78929 4.58579 5.41421C4.21071 5.03914 4 4.53043 4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2.21071 7.41421 2.58579C7.78929 2.96086 8 3.46957 8 4Z"
      fill={color}
    />
  </svg>
);

export default function SectionWhyStudents() {
  const leftItems = [
    "Step-by-step teaching",
    "Practical training with real examples",
    "Real projects for portfolio",
  ];

  const rightItems = [
    "Mock interviews & resume building",
    "Practical training with real examples",
    "Placement support until you get a job",
  ];

  return (
    <section
      className={`${manrope.className} flex flex-col items-center justify-center gap-[60px] bg-white w-full px-6 md:px-10 lg:px-[80px] xl:px-[118px] py-[57px]`}
    >
      <h2 className="w-full text-center text-[#E4202C] text-[24px] font-[700] leading-[40px]">
        Why Students Learn Faster & Get Placed From Career Bridge
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6 xl:gap-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6 w-full sm:w-auto items-center lg:items-end">
          {leftItems.map((item, index) => {
            const isRed = index === 1;

            const trianglePosition =
              index === 0
                ? "top-[60%] rotate-[24deg]"
                : index === 1
                ? "top-[35%] rotate-[0deg]"
                : "bottom-[60%] rotate-[-28deg]";

            return (
              <div
                key={index}
                className={`relative flex items-center justify-between gap-4
                w-[90%] sm:w-[380px] md:w-[420px] lg:w-[360px] xl:w-[420px]
                rounded-full py-4 px-6 md:py-5 md:px-8 text-white shadow-md z-10
                ${isRed ? "bg-[#EF233C]" : "bg-[#0E4D83]"}`}
              >
                <p className="text-sm md:text-base font-medium leading-snug flex-1 text-left">
                  {item}
                </p>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <FeatureIcon color={isRed ? "#E4202C" : "#2E4378"} />
                </div>

                {/* Triangle visible only on lg+ */}
                <div
                  className={`hidden lg:block absolute right-[-12px] w-0 h-0
                  border-t-[14px] border-t-transparent
                  border-b-[14px] border-b-transparent
                  border-l-[22px]
                  ${trianglePosition}
                  ${
                    isRed
                      ? "border-l-[#EF233C]"
                      : "border-l-[#0E4D83]"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* CENTER IMAGE */}
        <div className="relative z-20 shrink-0 my-4 lg:my-0">
          <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full border-[6px] border-[#1D4E89] bg-white p-1.5 shadow-xl">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/Courses/Image (2).png"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 w-full sm:w-auto items-center lg:items-start">
          {rightItems.map((item, index) => {
            const isRed = index === 1;

            const trianglePosition =
              index === 0
                ? "top-[48%]  rotate-[456deg]"
                : index === 1
                ? "top-[40%] rotate-[360deg]"
                : "bottom-[60%] rotate-[390deg]";

            return (
              <div
                key={index}
                className={`relative flex items-center justify-between gap-4
                w-[90%] sm:w-[380px] md:w-[420px] lg:w-[360px] xl:w-[420px]
                rounded-full py-4 px-6 md:py-5 md:px-8 text-white shadow-md z-10
                ${isRed ? "bg-[#EF233C]" : "bg-[#0E4D83]"}`}
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 order-1">
                  <FeatureIcon color={isRed ? "#E4202C" : "#2E4378"} />
                </div>

                <p className="text-sm md:text-base font-medium leading-snug flex-1 order-2 text-left">
                  {item}
                </p>

                {/* Triangle visible only on lg+ */}
                <div
                  className={`hidden lg:block absolute left-[-12px] w-0 h-0
                  border-t-[14px] border-t-transparent
                  border-b-[14px] border-b-transparent
                  border-r-[22px]
                  ${trianglePosition}
                  ${
                    isRed
                      ? "border-r-[#EF233C]"
                      : "border-r-[#0E4D83]"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}