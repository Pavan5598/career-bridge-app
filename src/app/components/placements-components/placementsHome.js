import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function PlacementsHome() {
  return (
    <div className={manrope.className}>
      <section
        className="relative flex w-full items-center justify-center bg-cover bg-center bg-no-repeat min-h-[450px] md:min-h-[522px]"
        style={{
          backgroundImage: `url('/placements/image (3).png')`,
        }}
      >
        {/* Semi-transparent dark overlay mimicking the Figma linear-gradient */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 py-12">
          
          {/* Main Heading */}
          <h1 className="text-white text-center font-semibold text-[26px] leading-[38px] sm:text-[30px] sm:leading-[44px] md:text-[35px] md:leading-[51px] max-w-[1000px]">
            Your IT Career Starts Here — Our Students Are Working in Top Companies
          </h1>

          {/* Subheading */}
          <p className="text-white text-center font-normal mt-4 text-[15px] leading-[26px] sm:text-[18px] sm:leading-[32px] md:text-[20px] md:leading-[39px] max-w-[849px]">
            With 10+ years of experience and thousands of learners trained, Career Bridge helps freshers, non-IT students, and career-gap learners build successful IT careers.
          </p>

          {/* CTA Button */}
          <button className="mt-8 flex w-full cursor-pointer max-w-[280px] sm:max-w-[320px] h-[52px] items-center justify-center rounded-[40px] bg-[#E4202C] text-white text-center text-[14px] font-medium leading-[28px] hover:bg-red-700 transition-colors duration-300">
            Book Free Counselling
          </button>
        </div>
      </section>
    </div>
  );
}