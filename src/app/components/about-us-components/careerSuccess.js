import { Manrope } from "next/font/google";
import { FaMinus } from "react-icons/fa";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function CareerSuccessSection() {
  const testimonials = [
    {
      text: "I was a B.Com student afraid of coding. Today I work as a Java Developer at Infosys.",
      name: "Radhika",
    },
    {
      text: "I had a 3-year career gap. Career Bridge helped me regain confidence and get placed.",
      name: "Azeem",
    },
    {
      text: "I tried online tutorials but couldn’t understand. Here, everything made sense.",
      name: "Sai Kumar",
    },
  ];

  return (
    <section
      className={`${manrope.className} relative w-full max-w-[1536px] 
      min-h-[500px] sm:min-h-[520px] md:min-h-[450px] lg:h-[390px]
      rounded-[6px] bg-[#2E4378] overflow-hidden mx-auto 
      flex justify-center items-center 
      px-4 sm:px-6 md:px-10 lg:px-12 py-10 lg:py-0`}
    >
      {/* Top Left Dotted Square - lg+ only */}
      <div
        className="hidden lg:block absolute top-3 left-3 w-[120px] xl:w-[140px] 2xl:w-[180px] h-[120px] xl:h-[140px] 2xl:h-[180px] opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bottom Right Dotted Square - lg+ only */}
      <div
        className="hidden lg:block absolute bottom-4 right-4 w-[80px] xl:w-[140px] 2xl:w-[180px] h-[80px] xl:h-[140px] 2xl:h-[180px] opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10 text-center w-full max-w-[1100px]">
        {/* Heading */}
        <h2
          className="text-white font-bold leading-[140%]
          text-[22px] xs:text-[24px] sm:text-[28px] 
          md:text-[30px] lg:text-[32px]"
        >
          Thousands of Students. One Common Result —{" "}
          <span className="text-[#7DF514]">
            a Better Career
          </span>
        </h2>

        {/* Testimonials */}
        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 md:space-y-6">
  {testimonials.map((item, index) => (
    <p
      key={index}
      className="text-[#DEE1E6]
      text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]
      leading-[26px] sm:leading-[28px] md:leading-[30px]"
    >
      “{item.text}”

      <span className="inline-flex items-center text-[#FFF] font-bold ml-2 sm:ml-3 md:ml-5 lg:ml-9 gap-1">
        <FaMinus className="text-[10px] sm:text-[12px]" />
        {item.name}
      </span>
    </p>
  ))}
</div>

        {/* Button */}
        <button
          className="mt-8 sm:mt-10 bg-[#E4202C]
          hover:scale-105 transition duration-300
          text-[#FFF] font-semibold rounded-full
          px-6 sm:px-8 md:px-10
          py-3 sm:py-3
          text-[14px] sm:text-[16px] md:text-[18px]
          cursor-pointer"
        >
          See Placement Success Stories
        </button>
      </div>
    </section>
  );
}