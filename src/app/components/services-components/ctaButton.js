import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function CtaButton() {
    return (
        <div className={manrope.className}>
            {/* Background uses a blue gradient, with responsive padding */}
            <section className="w-full py-6 px-3 md:py-14 flex flex-col items-center justify-center bg-gradient-to-r from-[#2b4172] via-[#354f8a] to-[#2b4172] text-white">
              
              {/* Responsive Heading */}
              <h2 className=" text-[#FFFFFF] text-xl sm:text-xl md:text-4xl lg:text-[2.5rem] font-semibold mb-8 md:mb-10 text-center tracking-wide">
                Let’s Build a Skilled Workforce Together
              </h2>
              
              {/* Button Container: Column on mobile, Row from 'md' onwards */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-6 items-center justify-center w-full max-w-6xl">
                
                {/* Red Primary Button */}
                <button className="w-full md:w-auto bg-[#E4202C] hover:bg-[#f91d25] text-[#FFFFFF] font-normal py-3 px-6 md:py-3 md:px-4 lg:px-8 rounded-full transition-all duration-300 whitespace-nowrap text-sm sm:text-base cursor-pointer">
                  Request a corporate Training
                </button>
                
                {/* Transparent Outline Button 1 */}
                <button className="w-full md:w-auto bg-transparent border-[1.5px] border-[#FFF] hover:bg-white/10 text-[#FFFFFF] font-normal py-3 px-6 md:py-3 md:px-4 lg:px-8 rounded-full transition-all duration-300 whitespace-nowrap text-sm sm:text-base cursor-pointer">
                  Contact Our Business Team
                </button>
                
                {/* Transparent Outline Button 2 */}
                <button className="w-full md:w-auto bg-transparent border-[1.5px] border-[#FFF] hover:bg-white/10 text-[#FFFFFF] font-normal py-3 px-6 md:py-3 md:px-4 lg:px-8 rounded-full transition-all duration-300 whitespace-nowrap text-sm sm:text-base cursor-pointer">
                  Contact Overseas Team
                </button>
                
              </div>
            </section>
        </div>
    );
}