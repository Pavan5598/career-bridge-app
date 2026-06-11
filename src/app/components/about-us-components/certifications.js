// components/CertificationsSection.tsx

import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const certifications = [
  "/AboutUs/certifications/image 72.png",
  "/AboutUs/certifications/image 74.png",
  "/AboutUs/certifications/image 75.png",
  "/AboutUs/certifications/image 77.png",
  "/AboutUs/certifications/image 76.png",
  "/AboutUs/certifications/image 79.png",
];

export default function CertificationsSection() {
  return (
    <section
      className={`w-full bg-white py-[38px] overflow-hidden ${manrope.className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[40px]">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[#17548D] font-bold leading-[180%] text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]">
            Certifications
          </h2>

          <p className="text-black font-semibold leading-[180%] tracking-[0.42px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px]">
            Recognized. Trusted. Quality Assured
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-marquee">
            {/* First Set */}
            {certifications.map((image, index) => (
              <div
                key={`first-${index}`}
                className="relative flex-shrink-0 mx-3 sm:mx-5 md:mx-6 
                h-[70px] w-[90px] 
                sm:h-[90px] sm:w-[110px] 
                md:h-[100px] md:w-[130px] 
                lg:h-[110px] lg:w-[140px]"
              >
                <Image
                  src={image}
                  alt={`Certification ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {certifications.map((image, index) => (
              <div
                key={`second-${index}`}
                className="relative flex-shrink-0 mx-3 sm:mx-5 md:mx-6 
                h-[70px] w-[90px] 
                sm:h-[90px] sm:w-[110px] 
                md:h-[100px] md:w-[130px] 
                lg:h-[110px] lg:w-[140px]"
              >
                <Image
                  src={image}
                  alt={`Certification ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}