"use client";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const companies1 = [
  "/AboutUs/companies-1/image hanvitec.png",
  "/AboutUs/companies-1/image cogni.png",
  "/AboutUs/companies-1/image Accen.png",
  "/AboutUs/companies-1/image hcl.png",
  "/AboutUs/companies-1/image infosys.png",
  "/AboutUs/companies-1/image wipro.png",
  "/AboutUs/companies-1/image ness.png",
  "/AboutUs/companies-1/image npk.png",
];

const companies2 = [
  "/AboutUs/companies-2/image 32.png",
  "/AboutUs/companies-2/image 51.png",
  "/AboutUs/companies-2/image 52.png",
  "/AboutUs/companies-2/image 53.png",
  "/AboutUs/companies-2/image 54.png",
  "/AboutUs/companies-2/image 55.png",
  "/AboutUs/companies-2/image 56.png",
  "/AboutUs/companies-2/image 79 (1).png",
];

const companies3 = [
  "/AboutUs/companies-3/image 73.png",
  "/AboutUs/companies-3/image 74.png",
  "/AboutUs/companies-3/image 75.png",
  "/AboutUs/companies-3/image 76.png",
  "/AboutUs/companies-3/image 77.png",
  "/AboutUs/companies-3/image 78.png",
  "/AboutUs/companies-3/image 80.png",
  "/AboutUs/companies-3/image 81.png",
];

const companies4 = [
  "/AboutUs/companies-4/image 115.png",
  "/AboutUs/companies-4/image 116.png",
  "/AboutUs/companies-4/image 117.png",
  "/AboutUs/companies-4/image 120.png",
  "/AboutUs/companies-4/image 121.png",
  "/AboutUs/companies-4/image 122.png",
  "/AboutUs/companies-4/image 124.png",
  "/AboutUs/companies-4/image 125.png",
];

const companySets = [
  companies1,
  companies2,
  companies3,
  companies4,
];

export default function StudentsWorkingSection() {
  return (
    <section
      className={`${manrope.className} flex flex-col items-center justify-center w-full overflow-hidden px-[16px] sm:px-[30px] md:px-[50px] lg:px-[80px] pt-[35px] sm:pt-[45px] lg:pt-[53px] pb-[40px] sm:pb-[50px] lg:pb-[62px] gap-3 sm:gap-4 lg:gap-5 bg-[linear-gradient(98deg,#2E4378_34.15%,#2D9EE0_99.47%)]`}
    >
      <h2 className="text-[#FFFFFF] text-center text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold leading-tight">
        Where Our Students Are Working Today
      </h2>

      {companySets.map((companies, rowIndex) => (
        <div
          key={rowIndex}
          className="w-full overflow-hidden bg-[#FFFFFF]"
        >
          <div className="animate-marquee-fast flex gap-1 sm:gap-2">
            {[...companies, ...companies].map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center bg-[#FFFFFF] rounded-md px-3 sm:px-5 lg:px-8 py-2 sm:py-3 lg:py-4 w-[120px] h-[55px] sm:w-[160px] sm:h-[68px] md:w-[190px] md:h-[75px] lg:w-[220px] lg:h-[82px]"
              >
                <img
                  src={logo}
                  alt="company"
                  className="max-w-full max-h-[24px] sm:max-h-[36px] md:max-h-[45px] lg:max-h-[55px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}