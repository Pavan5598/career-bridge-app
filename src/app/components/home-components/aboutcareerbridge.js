// src/components/AboutCareerBridge.jsx

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function AboutCareerBridge() {
  return (
    <section className={`${manrope.className} w-full bg-[#E8F3FB] px-[40px] lg:px-[70px] xl:px-[80px] sm:px-[40px] md:px-[50px]`}>
      
      <div className="w-full pt-[8px] pb-[10px] flex flex-col">

        {/* TITLE */}
        <h2 className="text-center text-[#E4202C] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-bold leading-[1.8] tracking-[0.64px]">
          About Career Bridge
        </h2>

        {/* TOP CONTENT */}
        <div className="mt-[2px] flex flex-col lg:flex-row items-center gap-6 lg:gap-20 xl:gap-26 2xl:gap-32">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-[55%]">
            <div className="sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] font-normal leading-[1.8] tracking-[0.48px] text-[#000000CC] space-y-1">

              <p>
                At Career Bridge, we’ve spent 10
                <span className="inline-flex align-middle mx-0">
                  <IoMdAdd />
                </span>
                years helping students move from confusion
                <span className="inline-flex align-middle mx-1">
                  <HiArrowRight />
                </span>
                clarity real IT careers.
              </p>

              <p>
                Whether you’re from IT or non-IT, we teach you from scratch,
                step-by-step, until you feel confident enough to build real projects
                and crack real interviews.
              </p>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[35%]  flex justify-center lg:justify-end">
            <Image
              src="/Home/image 4.png"
              alt="Career Bridge Classroom"
              width={1000}
              height={1000}
              className="rounded-[24px] object-cover w-full h-auto"
            />
          </div>

        </div>

        {/* CARDS SECTION */}
      {/* CARDS SECTION */}
<div
  className="
    mt-[20px]
    ml-0.5 mr-0.5
    grid
    grid-cols-2
    min-[768px]:grid-cols-4
    gap-2
    lg:gap-4
    md:gap-3
    sm:gap-2
    xl:gap-4
    2xl:gap-0
    w-full
    justify-items-center
  "
>

  {/* CARD 1 */}
  <div
    className="
      relative overflow-hidden group
      bg-white
      rounded-tl-[24px] rounded-tr-[0px]
      rounded-br-[24px] rounded-bl-[0px]
      border-b-2 border-l-2 border-[#2E4378]
      shadow-[0_0_8px_2px_rgba(46,67,120,0.25)]

      flex flex-col items-center justify-center text-center

      w-full
      max-w-[150px]
      h-[145px]

      min-[786px]:max-w-[135px]
      min-[786px]:h-[145px]

      md:max-w-[150px]
      md:h-[150px]

      lg:max-w-[230px]
      lg:h-[150px]

      xl:max-w-[280px]
      xl:h-[160px]

      2xl:max-w-[310px]
      2xl:h-[160px]

      mx-auto
      p-4
    "
  >

    {/* TOP RIGHT PINK GLOW */}
    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#e81739] opacity-50 blur-2xl rounded-full" />

    {/* HOVER GLOW */}
    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#e4002a] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative z-10 text-center flex flex-col items-center justify-center">
      <h3 className="text-[24px] sm:text-[28px] font-bold text-[#2E4378] flex items-center justify-center">
        12 <IoMdAdd className="ml-1 text-[20px] sm:text-[22px]" />
      </h3>

      <p className="text-[14px] sm:text-[16px] text-[#2E4378]">
        Years of Excellence
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div
    className="
      relative overflow-hidden group
      bg-white
      rounded-tl-[24px] rounded-tr-[0px]
      rounded-br-[24px] rounded-bl-[0px]
      border-b-2 border-l-2 border-[#2E4378]
      shadow-[0_0_8px_2px_rgba(46,67,120,0.25)]

      flex flex-col items-center justify-center text-center

      w-full
      max-w-[150px]
      h-[145px]

      min-[786px]:max-w-[135px]
      min-[786px]:h-[145px]

      md:max-w-[150px]
      md:h-[150px]

      lg:max-w-[230px]
      lg:h-[150px]

      xl:max-w-[280px]
      xl:h-[160px]

      2xl:max-w-[310px]
      2xl:h-[160px]

      mx-auto
      p-4
    "
  >

    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#1b1ed4] opacity-50 blur-2xl rounded-full" />

    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#2700d4] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative z-10 text-center flex flex-col items-center justify-center">
      <h3 className="text-[22px] sm:text-[28px] font-bold text-[#2E4378] flex items-center justify-center">
        30000 <IoMdAdd className="ml-1 text-[20px] sm:text-[22px]" />
      </h3>

      <p className="text-[12px] sm:text-[16px] text-[#2E4378]">
        Students Trained
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div
    className="
      relative overflow-hidden group
      bg-white
      rounded-tl-[24px] rounded-tr-[0px]
      rounded-br-[24px] rounded-bl-[0px]
      border-b-2 border-l-2 border-[#2E4378]
      shadow-[0_0_8px_2px_rgba(46,67,120,0.25)]

      flex flex-col items-center justify-center text-center

      w-full
      max-w-[150px]
      h-[145px]

      min-[786px]:max-w-[135px]
      min-[786px]:h-[145px]

      md:max-w-[150px]
      md:h-[150px]

      lg:max-w-[230px]
      lg:h-[150px]

      xl:max-w-[280px]
      xl:h-[160px]

      2xl:max-w-[310px]
      2xl:h-[160px]

      mx-auto
      p-4
    "
  >

    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#f8042d] opacity-50 blur-2xl rounded-full" />

    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#f5113b] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative z-10 text-center flex flex-col items-center justify-center">
      <h3 className="text-[22px] sm:text-[28px] font-bold text-[#2E4378] flex items-center justify-center">
        100 <IoMdAdd className="ml-1 text-[20px] sm:text-[22px]" />
      </h3>

      <p className="text-[12px] sm:text-[16px] text-[#2E4378]">
        Experienced Trainers
      </p>
    </div>
  </div>

  {/* CARD 4 */}
  <div
    className="
      relative overflow-hidden group
      bg-white
      rounded-tl-[24px] rounded-tr-[0px]
      rounded-br-[24px] rounded-bl-[0px]
      border-b-2 border-l-2 border-[#2E4378]
      shadow-[0_0_8px_2px_rgba(46,67,120,0.25)]

      flex flex-col items-center justify-center text-center

      w-full
      max-w-[150px]
      h-[145px]

      min-[786px]:max-w-[135px]
      min-[786px]:h-[145px]

      md:max-w-[150px]
      md:h-[150px]

      lg:max-w-[230px]
      lg:h-[150px]

      xl:max-w-[280px]
      xl:h-[160px]

      2xl:max-w-[310px]
      2xl:h-[160px]

      mx-auto
      p-4
    "
  >

    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#4b22ec] opacity-50 blur-2xl rounded-full" />

    <div className="pointer-events-none absolute top-0 right-0 w-15 h-15 bg-[#2a00e3] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative z-10 text-center flex flex-col items-center justify-center">
      <h3 className="text-[24px] sm:text-[28px] font-bold text-[#2E4378] flex items-center justify-center gap-1">
        4.8 <FaStar className="text-[18px] sm:text-[20px]" />
      </h3>

      <p className="text-[12px] sm:text-[16px]  text-[#2E4378]">
        Training Feedback
      </p>
    </div>
  </div>

</div>

      </div>
    </section>
  );
}