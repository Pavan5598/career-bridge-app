import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


// --- Custom SVGs extracted from your Figma --- //
const WhatsAppSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 75 76" fill="none">
    <g clipPath="url(#clip0_1424_1440)">
      <path d="M1.60059 37.3405C1.59883 43.6912 3.2582 49.8922 6.41348 55.3578L1.29883 74.0322L20.4098 69.0213C25.6956 71.8988 31.618 73.4066 37.6363 73.407H37.6521C57.5198 73.407 73.6926 57.2401 73.7011 37.3689C73.7049 27.7399 69.9584 18.6854 63.1516 11.8733C56.3459 5.06182 47.2946 1.30859 37.6507 1.3042C17.7807 1.3042 1.60908 17.4702 1.60088 37.3405" fill="url(#paint0_linear_1424_1440)"/>
      <path d="M0.313477 37.3289C0.311426 43.9081 2.03027 50.3309 5.29805 55.9922L0 75.336L19.7962 70.1455C25.2507 73.1194 31.3919 74.6874 37.6409 74.6897H37.657C58.2375 74.6897 74.9912 57.9413 75 37.3588C75.0035 27.3838 71.1223 18.0038 64.0723 10.9477C57.0214 3.89238 47.6464 0.00410156 37.657 0C17.073 0 0.32168 16.7461 0.313477 37.3289ZM12.1028 55.0172L11.3637 53.8438C8.25644 48.9032 6.61641 43.1938 6.61875 37.3312C6.6252 20.2233 20.5482 6.30469 37.6688 6.30469C45.9598 6.3082 53.7516 9.54023 59.6121 15.4043C65.4724 21.2689 68.6971 29.0648 68.695 37.3564C68.6874 54.4644 54.7641 68.3848 37.657 68.3848H37.6447C32.0745 68.3818 26.6115 66.8859 21.8473 64.0591L20.7135 63.3867L8.96602 66.4667L12.1028 55.0172Z" fill="url(#paint1_linear_1424_1440)"/>
      <path d="M28.3232 21.7233C27.6242 20.1697 26.8886 20.1383 26.2238 20.1111C25.6795 20.0876 25.0572 20.0894 24.4355 20.0894C23.8133 20.0894 22.8022 20.3235 21.9477 21.2566C21.0922 22.1906 18.6816 24.4476 18.6816 29.0381C18.6816 33.6286 22.0253 38.0654 22.4914 38.6885C22.9581 39.3105 28.9464 49.0324 38.4304 52.7724C46.3124 55.8805 47.9164 55.2623 49.6271 55.1065C51.338 54.9512 55.1478 52.85 55.925 50.6712C56.7028 48.4927 56.7028 46.6253 56.4696 46.2351C56.2364 45.8463 55.6142 45.6128 54.6811 45.1464C53.7479 44.68 49.1603 42.4224 48.3052 42.111C47.4497 41.7998 46.8277 41.6446 46.2055 42.5788C45.5832 43.5117 43.7964 45.6128 43.2518 46.2351C42.7077 46.8588 42.1631 46.9365 41.2303 46.4698C40.2966 46.0016 37.2916 45.0175 33.7265 41.8391C30.9526 39.3658 29.08 36.3117 28.5356 35.3774C27.9913 34.4446 28.4773 33.9389 28.9452 33.474C29.3645 33.0559 29.8786 32.3844 30.3456 31.8398C30.8108 31.2949 30.9661 30.9061 31.2772 30.2838C31.5887 29.661 31.4328 29.116 31.1999 28.6493C30.9661 28.1826 29.1529 23.5681 28.3232 21.7233Z" fill="white"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_1424_1440" x1="3621.41" y1="7274.11" x2="3621.41" y2="1.3042" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1FAF38"/>
        <stop offset="1" stopColor="#60D669"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1424_1440" x1="3750" y1="7533.6" x2="3750" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9F9F9"/>
        <stop offset="1" stopColor="white"/>
      </linearGradient>
      <clipPath id="clip0_1424_1440">
        <rect width="75" height="75.5859" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const PhoneCallSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 99 99" fill="none">
    <g clipPath="url(#clip0_1424_1445)">
      <path d="M60.22 13.7073C56.5684 13.3403 52.6558 14.5833 49.4705 17.0477C47.9183 18.2459 46.9211 20.0248 46.7042 21.9714L45.9574 28.6996C45.6914 31.0981 46.3606 33.5069 47.8257 35.4245C49.2908 37.3421 51.4389 38.6209 53.823 38.9947L57.2905 39.5399C58.7245 39.7629 59.6112 40.6736 59.7285 41.649C60.1495 45.1379 59.5993 49.4499 58.3767 52.7701C58.0146 53.7617 56.862 54.4591 55.3617 54.2813L53.4776 54.0577C52.2416 53.9116 50.9889 54.0131 49.7925 54.3563C48.5961 54.6995 47.4801 55.2774 46.5094 56.0564C45.5387 56.8355 44.7329 57.8 44.1389 58.8937C43.5449 59.9874 43.1747 61.1885 43.0497 62.4268L42.4268 68.5654C42.2251 70.575 42.916 72.5686 44.3107 74.0272C47.0862 76.9219 50.7547 78.6351 54.3832 78.7136C58.0687 78.7919 61.6371 77.171 63.947 73.5866C67.6066 67.9147 71.3022 59.4384 72.7356 47.3576C74.1845 35.1147 72.0048 26.1791 69.1489 20.0522C67.3218 16.1318 63.9352 14.0794 60.22 13.7073ZM28.0402 26.1438C28.1898 25.9483 28.3765 25.7841 28.5896 25.6607C28.8027 25.5374 29.038 25.4571 29.2821 25.4247C29.5262 25.3922 29.7743 25.4082 30.0122 25.4716C30.2501 25.535 30.4732 25.6447 30.6688 25.7943C30.8643 25.944 31.0285 26.1307 31.1519 26.3438C31.2753 26.5568 31.3555 26.7921 31.3879 27.0362C31.4204 27.2803 31.4045 27.5284 31.341 27.7663C31.2776 28.0043 31.1679 28.2274 31.0183 28.4229L30.0177 29.733C26.8885 33.8184 24.795 38.6007 23.9161 43.6711C23.0372 48.7416 23.399 53.9495 24.9706 58.8497L25.3315 59.9808C25.4194 60.2183 25.4582 60.4712 25.4456 60.7241C25.4331 60.977 25.3694 61.2247 25.2585 61.4524C25.1476 61.68 24.9917 61.8828 24.8003 62.0486C24.6088 62.2143 24.3858 62.3396 24.1446 62.4168C23.9035 62.494 23.6491 62.5216 23.397 62.4978C23.1449 62.4741 22.9002 62.3995 22.6777 62.2786C22.4552 62.1577 22.2595 61.993 22.1024 61.7944C21.9453 61.5958 21.8301 61.3674 21.7636 61.1231L21.4008 59.9969C19.6433 54.5194 19.2384 48.6977 20.2207 43.0296C21.203 37.3616 23.5433 32.0157 27.0415 27.449L28.0402 26.1438ZM36.0777 33.6082C35.6729 33.3195 35.17 33.2035 34.6797 33.2855C34.1893 33.3676 33.7516 33.6411 33.4629 34.0458L33.1471 34.4857C31.0946 37.3569 29.6902 40.6395 29.0309 44.1068C28.3715 47.574 28.473 51.143 29.3283 54.5672L29.5761 55.5512C29.6297 55.7964 29.732 56.0283 29.8769 56.2333C30.0218 56.4382 30.2063 56.612 30.4196 56.7443C30.6329 56.8766 30.8706 56.9647 31.1185 57.0034C31.3665 57.0421 31.6198 57.0307 31.8632 56.9698C32.1067 56.9088 32.3355 56.7996 32.5359 56.6486C32.7364 56.4976 32.9045 56.3079 33.0303 56.0907C33.1562 55.8736 33.2371 55.6333 33.2683 55.3843C33.2996 55.1353 33.2805 54.8825 33.2122 54.641L32.9693 53.6589C32.2443 50.762 32.1571 47.7422 32.7136 44.8082C33.2702 41.8743 34.4572 39.0961 36.1926 36.6659L36.5084 36.226C36.6518 36.0257 36.7542 35.7992 36.81 35.5593C36.8657 35.3194 36.8737 35.0709 36.8334 34.8279C36.793 34.5849 36.7053 34.3523 36.575 34.1433C36.4448 33.9343 36.2781 33.7514 36.0777 33.6082Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_1424_1445">
        <rect width="75" height="75" fill="white" transform="matrix(-0.917079 0.398705 0.398705 0.917079 68.7812 0)"/>
      </clipPath>
    </defs>
  </svg>
);

export default function ContactUsHeroSection() {
  return (
    <section className="w-full bg-[#2E4378] flex justify-center overflow-hidden font-sans pt-5 md:pt-0 lg:pt-0">
      
      <div className="max-w-[1440px] w-full px-2 flex flex-col md:flex-row items-center md:items-stretch justify-between 2xl:justify-center 2xl:gap-32 md:h-[400px] lg:h-[450px] xl:h-[540px]">        
        
        {/* Left Content (Text & Buttons) */}
        {/* Animated from top on md and larger via standard Tailwind config class */}
        <div className={`${manrope.className} flex flex-col justify-center text-white w-full md:w-1/2 lg:max-w-xl z-10 text-center md:text-left mb-10 md:mb-0 lg:pl-16 md:opacity-0 md:animate-slide-from-top`}>
          
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-[35px] font-semibold leading-[1.4] xl:leading-[50px] mb-4" >
            Start Your IT Career With <br className="hidden md:block" />
            the Right Guidance
          </h1>
          
          <p className="text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-normal leading-[1.4] xl:leading-[35px] mb-8 text-gray-100">
            Talk to our mentors and get honest, personalized course suggestions
            <br className="hidden xl:block" /> perfect for beginners & non-IT students.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-2">
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 h-[48px] rounded-full bg-[#E4202C] text-white text-[14px] font-medium shadow-sm hover:bg-red-700 transition-colors cursor-pointer">
              Book a Free Counselling Call
              <ArrowRight size={16} />
            </button>

            <button className="flex items-center justify-center w-full sm:w-auto px-6 h-[48px] rounded-full border border-white text-white text-[14px] font-medium shadow-sm hover:bg-white/10 transition-colors cursor-pointer">
              Talk on WhatsApp
            </button>
          </div>
        </div>

        {/* Right Content (Visuals) */}
        {/* Animated from left (delayed) on md and larger via standard Tailwind config class */}
        <div className="relative flex justify-center items-end w-full md:w-1/2 lg:w-[500px] xl:w-[600px] h-[300px] md:h-full md:opacity-0 md:animate-slide-from-left-delayed">
          
          <div className="absolute -bottom-10 lg:-bottom-7 2xl:-bottom-14 left-1/2 -translate-x-1/2 translate-y-[15%] lg:translate-y-[20%] w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] xl:w-[560px] xl:h-[560px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-[rgba(248,206,219,0.60)] z-0" />

          <div className="relative z-10 w-[240px] h-[264px] md:w-[280px] md:h-[308px] lg:w-[363px] lg:h-[400px] xl:w-[420px] xl:h-[460px]">
            <Image
              src="/ContactUs/Image 48.png" 
              alt="Student with headphones"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          <div 
            className="absolute z-20 left-[6%] md:left-[0%] lg:left-0 xl:left-2 top-[50%] md:top-[50%] -translate-y-1/2 drop-shadow-lg w-[45px] h-[45px] md:w-[55px] md:h-[55px] xl:w-[75px] xl:h-[75.586px]"
            style={{ aspectRatio: '75.00/75.59' }}
          >
            <WhatsAppSVG />
          </div>

          <div 
            className="absolute z-20 right-[20%] md:right-[10%] lg:right-18 xl:right-6 top-[25%] md:top-[35%] lg:top-[25%] xl:top-[35%] drop-shadow-lg w-[50px] h-[50px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] xl:w-[105px] xl:h-[105px]"
            style={{ 
              aspectRatio: '1/1',
              transform: 'rotate(356.503deg)'
            }}
          >
            <PhoneCallSVG />
          </div>
          
        </div>
      </div>
    </section>
  );
}