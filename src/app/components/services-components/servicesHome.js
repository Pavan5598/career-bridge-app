import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const services = [
  "Class Room Training",
  "Online Training",
  "Self-Paced Training",
  "Corporate Training",
  "HTD Programs",
  "CRT Programs",
  "Development",
  "Overseas Training",
];

export default function ServicesHome() {
  return (
    <section
      className={`${manrope.className} relative w-full bg-[#2E4378] overflow-hidden flex flex-col items-center pt-8 pb-12 px-4 sm:px-6 lg:px-8`}
    >
      {/* Left Bottom Decorative Circles */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0">
        <div className="absolute bottom-[70px] -left-[50px] w-[140px] h-[140px] rounded-full bg-[#2A3D6F]" />
        <div className="absolute -bottom-[50px] -left-[40px] w-[206px] h-[206px] rounded-full bg-[#2A3D6F]" />
        <div className="absolute -bottom-[70px] left-[120px] w-[140px] h-[140px] rounded-full bg-[#2A3D6F]" />
      </div>

      {/* Dotted Square */}
      <div className="absolute bottom-8 left-5 md:left-8 z-0 w-[110px] sm:w-[140px] md:w-[177px] h-[110px] sm:h-[140px] md:h-[177px] pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 177 177"
          fill="none"
          className="w-full h-full"
        >
          <g clipPath="url(#clip0_6314_5695)">
            {Array.from({ length: 7 }).flatMap((_, row) =>
              Array.from({ length: 7 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={1.5 + col * 29}
                  cy={1.5 + row * 29}
                  r="1.5"
                  fill="#878CED"
                />
              ))
            )}
          </g>
          <defs>
            <clipPath id="clip0_6314_5695">
              <rect width="177" height="177" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Heading */}
      <div className="relative flex flex-col items-center mb-8 z-10">
        <h2 className="text-white text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-center">
          Our Services
        </h2>

        {/* Curved Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="143"
          height="18"
          viewBox="0 0 143 18"
          fill="none"
          className="mt-1 w-[120px] sm:w-[143px]"
        >
          <path
            d="M140.319 12.8087C139.168 12.1601 136.467 10.2783 134.268 8.63311C128.469 4.25609 126.213 3.36615 124.04 4.56964C122.928 5.20025 123.92 6.89398 126.569 8.97876C127.218 9.47806 127.768 9.97656 127.767 10.0347C127.767 10.0928 124.655 9.22513 120.892 8.11973C108.649 4.50528 96.9985 2.14539 84.3347 0.707561C76.7465 -0.166684 60.3489 -0.239051 51.8918 0.536566C37.0413 1.92982 25.1015 4.13104 10.3284 8.28621C3.16887 10.2929 0.19278 11.2866 0.038722 11.6632C-0.11631 12.1561 0.134936 12.1872 1.79574 12.0841C2.90302 12.0057 6.83355 11.165 10.5636 10.2355C25.6851 6.51911 42.3043 4.15168 59.3636 3.29919C74.1582 2.57401 87.68 3.66988 103.9 6.90905C109.424 7.9994 120.767 11.0254 123.273 12.0626C124.326 12.4779 124.276 12.5066 122.16 12.8095C118.837 13.2772 117.675 13.8202 117.667 14.8084C117.652 16.5813 123.126 17.584 132.785 17.4865C138.369 17.4438 139.376 17.3646 140.637 16.8514C141.698 16.3948 142.104 15.962 142.211 15.12C142.37 14.133 142.121 13.8403 140.319 12.8087Z"
            fill="#ECFFFC"
          />
        </svg>
      </div>

      {/* Cards Grid */}
      {/* Cards Grid */}
      {/* Cards Grid */}
      <div 
        className="
          relative z-10 
          grid grid-cols-2 md:grid-cols-4 
          gap-4 md:gap-6 lg:gap-8 2xl:gap-10 
          w-[95%]
          max-w-[1600px] 
          mx-auto 
          justify-items-center
        "
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="
              group
              w-full /* <-- Tells the card to fill the grid column */
              max-w-[300px] 
              lg:max-w-[340px]
              2xl:max-w-none /* <-- THE FIX: Removes the strict width limit on massive screens */
              rounded-[20px]
              bg-white
              p-3
              flex flex-col
              shadow-sm
              transition-all
              duration-500
              ease-out
              hover:-translate-y-3
              hover:scale-[1.03]
              hover:shadow-2xl
              hover:shadow-black/20
              cursor-pointer
            "
          >
            {/* Image Wrapper */}
            <div 
              className="
                relative w-full 
                h-[140px] sm:h-[150px] lg:h-[170px] 2xl:h-[210px] /* <-- Height grows with the wider cards */
                rounded-[12px] 
                overflow-hidden
              "
            >
              <Image
                src="/Services/image 373.png" 
                alt={service}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />
            </div>

            {/* Title container */}
            <div className="pt-2 pb-1  px-1 flex-grow flex items-center justify-center">
              <p
                className="
                  text-center
                  text-[14px]
                  sm:text-[14px]
                  xl:text-[18px]
                  2xl:text-[20px] /* <-- Optional: bumps text size up slightly on huge screens */
                  font-semibold
                  text-[#E4202C]
                  transition-all
                  duration-300
                  group-hover:text-[#c81822]
                  group-hover:tracking-wide
                "
              >
                {service}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="
          relative z-10 mt-12
          bg-[#F2212B]
          hover:bg-[#db1b24]
          hover:scale-105
          active:scale-95
          transition-all duration-300
          text-white
          text-[14px] sm:text-[16px]
          font-medium
          px-10 sm:px-14
          py-3 sm:py-4
          rounded-full
          shadow-lg
          hover:shadow-red-500/30
          cursor-pointer
        "
      >
        Talk to Our Team
      </button>
    </section>
  );
}