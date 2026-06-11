import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function HomeHero() {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden bg-[#F5F5F5]`}
    >
      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden
       mt-0 sm:mt-0 lg:mt-6 md:mt-0
        min-h-[600px]
        sm:min-h-[620px]
        md:min-h-0
        lg:min-h-[620px]
        xl:min-h-[640px]
        2xl:min-h-[560px]
      ">

        {/* BLUE WAVE — visible on mobile + lg+, hidden on tablet (md < lg) */}
        <div className="absolute left-0 bottom-[60px] xs:bottom-[50px] sm:bottom-[30px] md:bottom-[-2px] w-full z-0 pointer-events-none md:hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 327"
            preserveAspectRatio="none"
            className="
              w-full
              h-[160px]
              xs:h-[175px]
              sm:h-[190px]
              lg:h-[200px]
              xl:h-[215px]
              2xl:h-[230px]
            "
          >
            <path
              d="M-24 0C-24 0 146.833 7.9099 282.5 40.5C438.7 78.0226 536.358 156.43 697 157C859.509 157.577 998.624 76.9228 1157 40.5C1312.86 4.65495 1523 0 1523 0V327H-24V0Z"
              fill="#2E4378"
            />
          </svg>
        </div>

        {/* ── LAYOUT GRID ── */}
        <div className="
          relative z-10
          grid
          grid-cols-1
          md:grid-cols-[1fr_auto]
          lg:grid-cols-[22%_56%_22%]
          xl:grid-cols-[22%_56%_22%]
          2xl:grid-cols-[22%_56%_22%]
          gap-0
          lg:gap-4
          xl:gap-6
          2xl:gap-0
          px-4
          sm:px-6
          md:px-10
          lg:px-8
          xl:px-12
          2xl:px-0
          pt-1
         sm:pt-2
         md:pt-4
          2xl:pt-0
          items-center
        ">

          {/* ── LEFT IMAGE (hidden on mobile/tablet, visible lg+) ── */}
<div className="hidden lg:flex justify-center items-center relative">

  {/* decorative circle behind card */}
  <div
    className="
      absolute

      -left-2
      xl:-left-4
      2xl:-left-[-75px]

      top-[22px]
      xl:top-[25px]
      2xl:top-[5px]

      w-[130px] h-[130px]
      xl:w-[130px] xl:h-[130px]
      2xl:w-[130px] 2xl:h-[130px]

      rounded-full
      bg-[#2E4378]
    "
  />

  {/* portrait wrapper */}
  <div
    className="
      relative
      z-10

      translate-y-[45px]
      xl:translate-y-[35px]
      2xl:translate-y-[25px]
    "
  >

    {/* OUTER BORDER */}
    <div
      className="
        relative

        w-[174px] h-[466px]

        xl:w-[240px] xl:h-[466px]

        2xl:w-[318px] 2xl:h-[480px]

      "
    >
      {/* BORDER */}
      <div
        className="
          absolute
          inset-0
          z-0
          rounded-[70px]
          xl:rounded-[88px]
          2xl:rounded-[160px]
          2xl:left-38
          border-[1px]
          border-[#2E4378]"/>

      {/* IMAGE */}
      <div
        className="
          absolute
          top-[1px]
          left-[0px]
          right-[5px]
          2xl:top-[-1px]
          2xl:left-[85px]
          overflow-hidden
          w-[168px] h-[458px]
          xl:w-[235px] xl:h-[458px]
          2xl:w-[225px] 2xl:h-[458px]
          rounded-[70px]
          xl:rounded-[88px]
          2xl:rounded-[100px]">
        <Image
          src="/Home/image 1.png"
          alt="students collaborating"
          fill
          sizes="(max-width: 1280px) 170px, (max-width: 1536px) 240px, 246px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
</div>
          {/* ── CENTER CONTENT ──
              2xl ONLY CHANGE: text-center (overrides md:text-left),
              buttons centered, px reduced so text stays tight in column
          ── */}
          <div className="
            text-center md:text-left 2xl:text-center
            lg:ml-8 xl:ml-12 2xl:ml-0 lg:mt-3 2xl:mt-[-100px]
            py-8
            sm:py-10
            md:py-12
            lg:py-10
            xl:py-12
            2xl:py-12
            px-2
            sm:px-4
            md:px-5
            lg:px-6
            xl:px-10
            2xl:px-10
          ">

            {/* HEADLINE */}
            <h1 className="
              font-bold text-[#252525] leading-[118%]
              text-[28px]
              mt-0
              xs:text-[32px]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[44px]
              xl:text-[50px]
              2xl:text-[53px]
            ">
              <span className="block text-[#E4202C]">Struggling to Start</span>
              <span className="block">Your IT Career?</span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="
              mt-3 mb-2
              font-bold text-[#515151]
              text-[14px]
              xs:text-[15px]
              sm:text-[17px]
              md:text-[18px]
              lg:text-[17px]
              xl:text-[19px]
              2xl:text-[20px]
            ">
              We'll Guide You Step-By-Step Until You Become Job-Ready.
            </p>

            {/* BODY COPY */}
            <p className="
              font-normal text-[#414141] leading-relaxed
              text-[12px]
              xs:text-[13px]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[13px]
              xl:text-[14px]
              2xl:text-[14px]
              max-w-[320px]
              xs:max-w-[360px]
              sm:max-w-[420px]
              md:max-w-[460px]
              lg:max-w-[500px]
              2xl:max-w-[480px]
              mx-auto md:mx-0 2xl:mx-auto
            ">
              Perfect for beginners, non-IT students &amp; anyone who needs real clarity.
              <br className="hidden sm:block" />
              We teach you step-by-step, at your pace, until you feel fully confident.
            </p>

            {/* CTA BUTTONS */}
            <div className="
  mt-5 sm:mt-3 
  flex flex-col min-[321px]:flex-row
  gap-2 xs:gap-3 sm:gap-3 md:gap-4
  justify-center md:justify-start 2xl:justify-center
  items-center
">
  
  <button className="
    w-[220px] min-[321px]:w-auto
    bg-[#E4202C] text-white font-semibold
    px-4 py-2.5
    xs:px-5
    sm:px-5 sm:py-3
    md:px-6
    2xl:px-10 2xl:py-3
    rounded-full
    hover:bg-red-600
    active:scale-95
    transition-all duration-200
    text-[11px]
    xs:text-[12px]
    sm:text-[13px]
    md:text-[14px]
    xl:text-[15px]
    whitespace-nowrap
    flex-shrink-0
    cursor-pointer
  ">
    Book Free Career Counselling
  </button>

  <button className="
  cursor-pointer
    w-[220px] min-[321px]:w-auto
    border border-[#E4202C] text-[#E4202C] font-semibold
    px-4 py-2.5
    xs:px-5
    sm:px-5 sm:py-3
    md:px-6
    2xl:px-10 2xl:py-3
    rounded-full
    hover:bg-red-50
    active:scale-95
    transition-all duration-200
    flex items-center justify-center gap-1.5 sm:gap-2
    text-[11px]
    xs:text-[12px]
    sm:text-[13px]
    md:text-[14px]
    xl:text-[15px]
    whitespace-nowrap
    flex-shrink-0
  ">
    Become a Trainer
    <FaArrowRight className="text-[10px] sm:text-[12px]" />
  </button>

</div>
          </div>

          {/* ── RIGHT SIDE — stacked circles (tablet md+ and desktop lg+) ── */}
          <div className="hidden md:flex justify-center items-start pt-[30px] pb-12 lg:pb-0 lg:pt-[80px] xl:pt-[100px] 2xl:pt-[80px] z-20">
            <div className="relative flex flex-col items-center">

              {/* navy rectangle bleeding off right edge */}
              <div className="
                absolute
                right-[-50px] md:right-[-80px] lg:right-[-140px] xl:right-[-180px] 2xl:right-[-120px]
                top-[1px]
                w-[140px] md:w-[150px] lg:w-[220px] xl:w-[276px] 2xl:w-[200px]
                h-[360px] md:h-[375px] lg:h-[450px] xl:h-[531px] 2xl:h-[480px]
                bg-[#2E4378]
              " />

              {/* TOP circle */}
              <div className="
                relative
                w-[70px] h-[70px]
                md:w-[125px] md:h-[125px]
                lg:w-[110px] lg:h-[110px]
                xl:w-[130px] xl:h-[130px]
                2xl:w-[130px] 2xl:h-[130px]
                rounded-full overflow-hidden
                border-[3px] md:border-[4px] xl:border-[5px] border-[#2E4378]
                bg-white z-20
              ">
                <Image src="/Home/image 1.png" alt="mentor" fill sizes="120px" className="object-cover" priority />
              </div>

              {/* CENTER circle */}
              <div className="
                relative
                w-[120px] h-[120px]
                md:w-[190px] md:h-[190px]
                lg:w-[200px] lg:h-[200px]
                xl:w-[230px] xl:h-[230px]
                2xl:w-[210px] 2xl:h-[210px]
                -mt-6 md:-mt-8 xl:-mt-10 2xl:-mt-8
                -ml-8 md:-ml-12 xl:-ml-16 2xl:-ml-14
                rounded-full overflow-hidden
                border-[4px] md:border-[5px] xl:border-[6px] border-[#2E4378]
                bg-white z-10
              ">
                <Image src="/Home/image 2.png" alt="students walking" fill sizes="210px" className="object-cover" />
              </div>

              {/* BOTTOM circle */}
              <div className="
                relative
                w-[75px] h-[75px]
                md:w-[125px] md:h-[125px]
                lg:w-[130px] lg:h-[130px]
                xl:w-[150px] xl:h-[150px]
                2xl:w-[130px] 2xl:h-[130px]
                -mt-6 md:-mt-8 xl:-mt-10 2xl:-mt-8
                -ml-2 md:-ml-4
                rounded-full overflow-hidden
                border-[3px] md:border-[4px] xl:border-[5px] border-[#2E4378]
                bg-white z-20
              ">
                <Image src="/Home/image 3.png" alt="career success" fill sizes="135px" className="object-cover" priority  />
              </div>

            </div>
          </div>

        </div>

        {/* ── MOBILE IMAGE ROW (< 768px only) ── */}
         {/* ── MOBILE IMAGE ROW (< 768px only) ── */}
        <div className="
          md:hidden
          relative z-10
          flex justify-center items-center
          px-4 pb-4 pt-2
        ">
          {/* LEFT circle — negative right margin pulls it toward center */}
          <div className="relative w-[85px] h-[85px] xs:w-[80px] xs:h-[80px] sm:w-[110px] sm:h-[110px]
            -mr-4 xs:-mr-3 sm:-mr-5
            rounded-full overflow-hidden border-[3px] border-[#2E4378] bg-white flex-shrink-0 z-20">
            <Image src="/Home/image 1.png" alt="mentor" fill sizes="110px" className="object-cover" priority  />
          </div>

          {/* CENTER circle — sits on top */}
          <div className="relative w-[150px] h-[150px] xs:w-[135px] xs:h-[135px] sm:w-[155px] sm:h-[155px]
            rounded-full overflow-hidden border-[4px] border-[#2E4378] bg-white flex-shrink-0 z-10">
            <Image src="/Home/image 2.png" alt="students" fill sizes="155px" className="object-cover" priority  />
          </div>

          {/* RIGHT circle — negative left margin pulls it toward center */}
          <div className="relative w-[85px] h-[85px] xs:w-[80px] xs:h-[80px] sm:w-[110px] sm:h-[110px]
            -ml-4 xs:-ml-3 sm:-ml-5
            rounded-full overflow-hidden border-[3px] border-[#2E4378] bg-white flex-shrink-0 z-20">
            <Image src="/Home/image 3.png" alt="career" fill sizes="110px" className="object-cover" priority  />
          </div>
        </div>


      </div>
    </section>
  );
}
