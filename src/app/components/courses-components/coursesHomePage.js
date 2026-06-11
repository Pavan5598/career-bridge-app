import { Manrope } from "next/font/google";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function CoursePage() {
  return (
    <section
      className={`relative overflow-hidden bg-[#2E4378] pb-10 sm:pb-14 lg:pb-24 ${manrope.className}`}
    >
      {/* Bottom Wave */}
      <svg
  className="absolute bottom-0 left-0 w-full h-[50px] z-0 pointer-events-none"
  viewBox="0 0 1440 25"
  preserveAspectRatio="none"
>
  <path
    d="M0 15C120 8 240 0 360 0C540 0 700 15 900 15C1080 15 1260 8 1440 2V60H0V15Z"
    fill="white"
  />
</svg>

<div className="relative mx-auto min-h-[270px] md:min-h-[330px] pt-3 pb-1 sm:pt-4 lg:pt-20 lg:pb-16 z-20">
          {/* LEFT DECORATIVE RECTANGLES */}
        <div className="absolute left-0 top-0 hidden lg:block">
          <div className="absolute left-0 top-0 w-[72px] h-[492px] rounded-br-[150px] border border-white/20" />
          <div className="absolute left-0 top-0 w-[92px] h-[538px] rounded-br-[150px] border border-white/20" />
          <div className="absolute left-0 top-0 w-[112px] h-[558px] rounded-br-[150px] border border-white/20" />
          <div className="absolute left-0 top-0 w-[132px] h-[588px] rounded-br-[150px] border border-white/20" />

          {/* Star */}
          <div className="absolute top-[50px] left-[60px] z-10 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
            >
              <path
                d="M11.4527 20.3969C11.4527 20.3969 12.1778 15.1417 14.546 12.9529C17.0119 10.6738 22.9054 10.1984 22.9054 10.1984C22.9054 10.1984 17.0119 9.72302 14.546 7.44393C12.1778 5.25519 11.4527 0 11.4527 0C11.4527 0 10.7276 5.25519 8.35943 7.44393C5.89346 9.72302 0 10.1984 0 10.1984C0 10.1984 5.89346 10.6738 8.35943 12.9529C10.7276 15.1417 11.4527 20.3969 11.4527 20.3969Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT DECORATIVE RECTANGLES */}
<div className="absolute right-0 top-0 hidden lg:block">
  {/* Rectangle 1 */}
  <div className="absolute right-0 top-0 w-[72px] h-[472px] rounded-bl-[150px] border border-white/20" />

  {/* Rectangle 2 */}
  <div className="absolute right-0 top-0 w-[92px] h-[518px] rounded-bl-[150px] border border-white/20" />

  {/* Rectangle 3 */}
  <div className="absolute right-0 top-0 w-[112px] h-[538px] rounded-bl-[150px] border border-white/20" />

  {/* Rectangle 4 */}
  <div className="absolute right-0 top-0 w-[132px] h-[568px] rounded-bl-[150px] border border-white/20" />

  {/* Star */}
  <div className="absolute top-[10px] right-[60px] z-10 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
    >
      <path
        d="M11.4527 20.3969C11.4527 20.3969 12.1778 15.1417 14.546 12.9529C17.0119 10.6738 22.9054 10.1984 22.9054 10.1984C22.9054 10.1984 17.0119 9.72302 14.546 7.44393C12.1778 5.25519 11.4527 0 11.4527 0C11.4527 0 10.7276 5.25519 8.35943 7.44393C5.89346 9.72302 0 10.1984 0 10.1984C0 10.1984 5.89346 10.6738 8.35943 12.9529C10.7276 15.1417 11.4527 20.3969 11.4527 20.3969Z"
        fill="white"
      />
    </svg>
  </div>

  <div className="absolute top-[50px] right-[80px] z-10 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
    >
      <path
        d="M11.4527 20.3969C11.4527 20.3969 12.1778 15.1417 14.546 12.9529C17.0119 10.6738 22.9054 10.1984 22.9054 10.1984C22.9054 10.1984 17.0119 9.72302 14.546 7.44393C12.1778 5.25519 11.4527 0 11.4527 0C11.4527 0 10.7276 5.25519 8.35943 7.44393C5.89346 9.72302 0 10.1984 0 10.1984C0 10.1984 5.89346 10.6738 8.35943 12.9529C10.7276 15.1417 11.4527 20.3969 11.4527 20.3969Z"
        fill="white"
      />
    </svg>
  </div>
</div>

        {/* CONTENT WRAPPER */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          {/* LEFT IMAGE CLUSTER */}
          <div className="relative hidden lg:flex w-[30%] justify-center">
            <div className="relative w-[320px] h-[360px] xl:w-[400px] xl:h-[450px]">
              <Image
                src="/Courses/top.png"
                alt="top"
                width={231}
                height={194}
                className="absolute top-0 left-0 object-contain w-[180px] h-[150px] xl:w-[231px] xl:h-[194px]"
              />

              <Image
                src="/Courses/center.png"
                alt="center"
                width={231}
                height={194}
                className="absolute top-[80px] left-[150px] xl:top-[100px] xl:left-[200px] object-contain w-[180px] h-[150px] xl:w-[231px] xl:h-[194px]"
              />

              <Image
                src="/Courses/bottom.png"
                alt="bottom"
                width={231}
                height={194}
                className="absolute bottom-8 left-0 lg:bottom-12 xl:bottom-12 object-contain w-[180px] h-[150px] xl:w-[231px] xl:h-[194px]"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="flex-1 flex justify-center items-center px-4 lg:px-6">
            <div className="w-full max-w-[720px] text-center mx-auto">
              <h2 className="text-[#FFF] font-extrabold leading-[180%] text-[18px] lg:text-[24px] xl:text-[32px] tracking-[-0.5px]">
                Confused About Which IT Course Fits You?
                <br />
                <span className="text-[#E3E3E3]">
                  We&apos;ll Help You Choose the Right One.
                </span>
              </h2>

              <p className="text-[#FFF] mt-6 text-[18px] xl:text-[18px] leading-[180%] max-w-[680px] mx-auto">
                Choosing the wrong course wastes months. Choosing the right one
                builds your career. Let&apos;s understand your background,
                skills, and goals — and guide you to the perfect path.
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mt-4 flex-nowrap">
               <button className="flex-shrink-0 w-[140px] h-[42px] sm:w-[180px] sm:h-[48px] lg:w-[250px] lg:h-[54px] rounded-full bg-[#E4202C] text-white text-[12px] sm:text-[14px] lg:text-[16px] shadow-sm transition duration-300 hover:scale-[1.02] whitespace-nowrap cursor-pointer">
  Talk to Expert
</button>

<button className="flex-shrink-0 w-[150px] h-[42px] sm:w-[200px] sm:h-[48px] lg:w-[250px] lg:h-[54px] rounded-full border-2 border-white text-white flex items-center justify-center gap-2 text-[12px] sm:text-[14px] lg:text-[16px] transition duration-300 hover:bg-white hover:text-[#2E4378] whitespace-nowrap cursor-pointer">
  Download Syllabus
  <FaArrowRight size={16} />
</button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
         {/* RIGHT IMAGE */}
<div className="hidden lg:flex lg:w-[28%] xl:w-[28%] justify-end shrink-0 lg:-ml-18 2xl:-mr-8">
  <Image
    src="/Courses/right.png"
    alt="right"
    width={307}
    height={307}
    className="w-[260px] lg:w-[250px] xl:w-[280px] 2xl:w-[360px] h-auto object-contain"
  />
</div>
        </div>

        {/* MOBILE IMAGE SECTION */}
        <div className="lg:hidden flex justify-center w-full mt-6">
          <div className="relative w-[280px] h-[180px]">
            <Image
              src="/Courses/top.png"
              alt="top"
              width={120}
              height={120}
              className="absolute top-0 -left-5 object-contain"
            />

            <Image
              src="/Courses/center.png"
              alt="center"
              width={120}
              height={120}
              className="absolute top-0 -right-5 object-contain"
            />

            <Image
              src="/Courses/bottom.png"
              alt="bottom"
              width={120}
              height={120}
              className="absolute bottom-7 left-[80px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}