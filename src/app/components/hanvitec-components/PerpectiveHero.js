// "use client";

// import Image from "next/image";
// import { Poppins, Merriweather } from "next/font/google";
// import { Box, Users, LayoutGrid, Flag, Database, Cpu, Target } from "lucide-react";
// import { motion } from "framer-motion";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });
// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["400", "700", "900"],
// });

// // 7 cards positioned around the image like the reference
// const floatingCards = [
//   {
//     title: "Planning",
//     desc: "Strategic roadmap",
//     icon: Flag,
//     // Top center
//     position: "top-[0%] left-1/2 -translate-x-1/2",
//     float: { y: [-6, 6, -6], x: [0, 0, 0] },
//     duration: 3.8,
//   },
//   {
//     title: "People",
//     desc: "Aligned teams",
//     icon: Users,
//     // Top left
//     position: "top-[10%] left-[10%]",
//     float: { y: [-5, 4, -5], x: [-4, 3, -4] },
//     duration: 4.2,
//   },
//   {
//     title: "Systems",
//     desc: "Integrated and reliable",
//     icon: Box,
//     // Top right
//     position: "top-[10%] right-[10%]",
//     float: { y: [-4, 6, -4], x: [3, -3, 3] },
//     duration: 3.5,
//   },
//   {
//     title: "Processes",
//     desc: "Structured workflows",
//     icon: LayoutGrid,
//     // Middle left
//     position: "bottom-[23%] -translate-y-1/2 left-[0%]",
//     float: { y: [-3, 5, -3], x: [-5, 5, -5] },
//     duration: 4.6,
//   },
//   {
//     title: "Data",
//     desc: "Measurable insights",
//     icon: Database,
//     // Middle right
//     position: "bottom-[20%] -translate-y-1/2 right-[0%]",
//     float: { y: [4, -5, 4], x: [4, -4, 4] },
//     duration: 3.9,
//   },
//   {
//     title: "Execution",
//     desc: "Consistent delivery",
//     icon: Cpu,
//     // Bottom left
//     position: "bottom-[0%] left-[20%]",
//     float: { y: [5, -4, 5], x: [-3, 4, -3] },
//     duration: 4.3,
//   },
//   {
//     title: "Outcomes",
//     desc: "Measurable and focused",
//     icon: Target,
//     // Bottom right
//     position: "bottom-[0%] left-2/3 -translate-x-1/2",
//     float: { y: [6, -5, 6], x: [3, -3, 3] },
//     duration: 3.6,
//   },
// ];

// export default function PerspectiveHeroSection() {
//   return (
//     <section className="relative 4xl:mx-auto 4xl:max-w-[2560px] w-full overflow-hidden bg-white">
//       {/* Main Content Container */}
//       <div
//         className="
//           relative z-10
//           w-full
//          max-w-[1440px]
//           2xl:max-w-[1400px]  3xl:max-w-[1600px] 4xl:max-w-[1700px]
//           mx-auto
//           pt-[110px]
//           pb-15 sm:pb-14 md:pb-20 xl:pb-26 2xl:pb-30 3xl:pb-35 4xl:pb-40
//           px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-10 3xl:px-0
//         "
//       >
//         {/* Layout */}
//         <div
//           className="
//             flex flex-col
//             lg:flex-row
//             items-center
//             justify-between
//             gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-30
//           "
//         >
//           {/* LEFT CONTENT */}
//           <div className="w-full lg:w-[45%] xl:w-[52%]">
//             {/* Badge */}
//             <div className="flex justify-center lg:block">
//               <div
//                 className="
//                   inline-flex items-center
//                   rounded-[16px] 3xl:rounded-[20px] 4xl:rounded-[24px]
//                   px-3 py-2 sm:px-4 sm:py-2 md:px-5 3xl:px-7  4xl:px-9 
//                   bg-[rgba(67,144,106,0.10)]
//                   mb-5
//                 "
//               >
//                 <span
//                   className={`
//                     ${poppins.className}
//                     uppercase text-[#08A800] font-semibold leading-normal
//                     text-[9px] tracking-[0.5px]
//                     sm:text-[10px] sm:tracking-[0.6px]
//                     md:text-[11px] md:tracking-[0.68px]
//                     xl:text-[12px] xl:tracking-[0.72px]
//                     3xl:text-[14px] 3xl:tracking-[1.1px]
//                     4xl:text-[16px] 4xl:tracking-[1.3px]
//                     flex items-center gap-2 4xl:gap-3
//                   `}
//                 >
//                   <span className="relative flex h-2 w-2 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#08A800] opacity-75" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-[#08A800] 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4" />
//                   </span>
//                   How We Think About Operations
//                 </span>
//               </div>
//             </div>

//             {/* Heading */}
//             <h1
//               className={`
//                 ${merriweather.className}
//                 text-center lg:text-left
//                 text-[#303030] font-[600]
//                 text-[30px] leading-[36px]
//                 sm:text-[34px] sm:leading-[40px]
//                 md:text-[36px] md:leading-[46px]
//                 2xl:text-[40px] 2xl:leading-[56px]
//                 2xl:text-[42px] 2xl:leading-[60px]
//                 3xl:text-[44px] 3xl:leading-[62px]
//                 4xl:text-[46px] 4xl:leading-[66px]
//               `}
//             >
//               Clarity is not created by adding {" "}
//               <br className="hidden xl:block" />
//               <span className="text-[#026B78] font-[600]">more tools.</span>{" "}
             
//             </h1>

//             {/* Paragraph */}
//             <p
//               className={`
//                 ${poppins.className}
//                 text-center lg:text-left
//                 text-[#252525] font-normal
//                 max-w-[820px] 4xl:max-w-[900px]
//                 mx-auto lg:mx-0
//                 mt-5
//                 text-[15px] leading-[24px]
//                 sm:text-[16px] sm:leading-[32px]
//                 3xl:text-[18px] 3xl:leading-[36px]
//                 4xl:text-[20px] 4xl:leading-[38px]
//               `}
//             >
//               Most operational challenges are not caused by lack of effort, {" "}
//               <br className="hidden xl:block" />
//               but by lack of structure in how work flows across the business.
//             </p>
//           </div>

//           {/* RIGHT IMAGE & CARDS */}
//           <div
//             className="
//               relative w-full
//               max-w-[320px] h-[320px]
//               sm:max-w-[500px] sm:h-[420px]
//               lg:max-w-[450px] lg:h-[450px]
//                             xl:max-w-[480px] xl:h-[460px]

//               3xl:max-w-[620px] 3xl:h-[500px]
//               4xl:max-w-[700px] 4xl:h-[600px]
//               flex items-center justify-center
//               mx-auto
//             "
//           >
//             {/* Floating Cards */}
//             {floatingCards.map((card, index) => {
//               const Icon = card.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   className={`absolute z-20 ${card.position}`}
//                   animate={{
//                     y: card.float.y,
//                     x: card.float.x,
//                   }}
//                   transition={{
//                     duration: card.duration,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: index * 0.3,
//                   }}
//                 >
//                   <div
//                     className="
//                       flex flex-col items-center justify-center gap-1
//                       w-[72px] h-[72px]
//                       sm:w-[88px] sm:h-[88px]
//                       md:w-[96px] md:h-[96px]
//                       xl:w-[100px] xl:h-[100px]
//                       3xl:w-[118px] 3xl:h-[118px]
//                       4xl:w-[140px] 4xl:h-[140px]
//                       bg-white
//                       rounded-[8px]
//                       border-t border-r border-l border-[#006875]
//                       border-b-[4px] border-b-[#006875]
//                       shadow-[0_4px_4px_0_rgba(0,104,117,0.25)]
//                       px-2 py-2
//                       sm:px-3 sm:py-3
//                     "
//                   >
//                     {/* Icon */}
//                     <Icon
//                       className="
//                         text-[#006875]
//                         w-4 h-4
//                         sm:w-5 sm:h-5
//                         3xl:w-6 3xl:h-6
//                         4xl:w-7 4xl:h-7
//                         shrink-0
//                       "
//                     />
//                     {/* Title */}
//                     <span
//                       className={`
//                         ${poppins.className}
//                         text-[#006875]
//                         text-center
//                         font-bold
//                         text-[8px] leading-[16px]
//                         sm:text-[9px]
//                         md:text-[10px]
//                         3xl:text-[11px]
//                         4xl:text-[13px]
//                         uppercase
//                         tracking-[0.3px]
//                       `}
//                     >
//                       {card.title}
//                     </span>
//                   </div>
//                 </motion.div>
//               );
//             })}

//             {/* Main Image */}
//             <Image
//               src="/Proof/proof-hero.png"
//               alt="Operations Structure"
//               width={700}
//               height={700}
//               priority
//               className="
//                 relative z-10
//                 w-[50%] h-[50%]
//                 sm:w-[40%] sm:h-[40%]
//                 sm:w-[50%] sm:h-[55%]
//                 2xl:w-[50%] 2xl:h-[50%]
//                 object-fill
//               "
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom SVG Background */}
//     {/* BOTTOM BACKGROUND */}
// <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  


//   {/* MAIN WAVE SVG */}
//   <svg
//     viewBox="0 0 1440 749"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     preserveAspectRatio="none"
//     className="
//       absolute
//       bottom-0 
//       left-0
//       w-full
//       h-auto
//       min-h-[180px]
//       sm:min-h-[220px]
//       md:min-h-[260px]
//       lg:min-h-[320px]
//       xl:min-h-[360px]
//       2xl:min-h-[420px]
//     "
//   >
//     <g filter="url(#filter0_d_1989_1985)">
//       <path
//         d="M1 0H1439V638.585L1238.68 695.249C1106.36 732.68 967.73 742.416 831.47 723.848L710.014 707.298L543.84 675.269C418.123 651.038 288.923 651.174 163.257 675.67L1 707.298V0Z"
//         fill="url(#paint0_radial_1989_1985)"
//         fillOpacity="0.2"
//       />
//     </g>

//     <defs>
//       <filter
//         id="filter0_d_1989_1985"
//         x="-9"
//         y="-4"
//         width="1458"
//         height="753.006"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix" />

//         <feColorMatrix
//           in="SourceAlpha"
//           type="matrix"
//           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//           result="hardAlpha"
//         />

//         <feOffset dy="6" />

//         <feGaussianBlur stdDeviation="5" />

//         <feComposite in2="hardAlpha" operator="out" />

//         <feColorMatrix
//           type="matrix"
//           values="0 0 0 0 0 0 0 0 0 0.407843 0 0 0 0 0.458824 0 0 0 0.25 0"
//         />

//         <feBlend
//           mode="normal"
//           in2="BackgroundImageFix"
//           result="effect1_dropShadow_1989_1985"
//         />

//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="effect1_dropShadow_1989_1985"
//           result="shape"
//         />
//       </filter>

//       <radialGradient
//         id="paint0_radial_1989_1985"
//         cx="0"
//         cy="0"
//         r="1"
//         gradientTransform="matrix(10.4963 575.785 -1344.2 10.8026 784.728 515.054)"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00E5FF" />
//         <stop offset="1" stopColor="#F3FFFF" />
//       </radialGradient>
//     </defs>
//   </svg>
// </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { Poppins, Merriweather } from "next/font/google";
import { Box, Users, LayoutGrid, Flag, Database, Cpu, Target } from "lucide-react";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// 7 cards positioned around the image like the reference
const floatingCards = [
  {
    title: "Planning",
    desc: "Strategic roadmap",
    icon: Flag,
    // Top center
    position: "top-[0%] left-1/2 -translate-x-1/2",
    float: { y: [-6, 6, -6], x: [0, 0, 0] },
    duration: 3.8,
  },
  {
    title: "People",
    desc: "Aligned teams",
    icon: Users,
    // Top left
    position: "top-[10%] left-[10%]",
    float: { y: [-5, 4, -5], x: [-4, 3, -4] },
    duration: 4.2,
  },
  {
    title: "Systems",
    desc: "Integrated and reliable",
    icon: Box,
    // Top right
    position: "top-[10%] right-[10%]",
    float: { y: [-4, 6, -4], x: [3, -3, 3] },
    duration: 3.5,
  },
  {
    title: "Processes",
    desc: "Structured workflows",
    icon: LayoutGrid,
    // Middle left
    position: "bottom-[23%] -translate-y-1/2 left-[0%]",
    float: { y: [-3, 5, -3], x: [-5, 5, -5] },
    duration: 4.6,
  },
  {
    title: "Data",
    desc: "Measurable insights",
    icon: Database,
    // Middle right
    position: "bottom-[20%] -translate-y-1/2 right-[0%]",
    float: { y: [4, -5, 4], x: [4, -4, 4] },
    duration: 3.9,
  },
  {
    title: "Execution",
    desc: "Consistent delivery",
    icon: Cpu,
    // Bottom left
    position: "bottom-[0%] left-[20%]",
    float: { y: [5, -4, 5], x: [-3, 4, -3] },
    duration: 4.3,
  },
  {
    title: "Outcomes",
    desc: "Measurable and focused",
    icon: Target,
    // Bottom right
    position: "bottom-[0%] left-2/3 -translate-x-1/2",
    float: { y: [6, -5, 6], x: [3, -3, 3] },
    duration: 3.6,
  },
];

export default function PerspectiveHeroSection() {
  return (
    <section className="relative 4xl:mx-auto 4xl:max-w-[2560px] w-full overflow-hidden bg-white">
      {/* Main Content Container */}
      <div
        className="
          relative z-10
          w-full
          max-w-[1440px]
          2xl:max-w-[1400px]  3xl:max-w-[1600px] 4xl:max-w-[1700px]
          mx-auto
          pt-[110px]
          pb-15 sm:pb-14 md:pb-20 xl:pb-26 2xl:pb-30 3xl:pb-35 4xl:pb-40
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-10 3xl:px-0
        "
      >
        {/* Layout */}
        <div
          className="
            flex flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-30
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[45%] xl:w-[52%]">
            {/* Badge */}
            <div className="flex justify-center lg:block">
              <div
                className="
                  inline-flex items-center
                  rounded-[16px] 3xl:rounded-[20px] 4xl:rounded-[24px]
                  px-3 py-2 sm:px-4 sm:py-2 md:px-5 3xl:px-7  4xl:px-9 
                  bg-[rgba(67,144,106,0.10)]
                  mb-5
                "
              >
                <span
                  className={`
                    ${poppins.className}
                    uppercase text-[#08A800] font-semibold leading-normal
                    text-[9px] tracking-[0.5px]
                    sm:text-[10px] sm:tracking-[0.6px]
                    md:text-[11px] md:tracking-[0.68px]
                    xl:text-[12px] xl:tracking-[0.72px]
                    3xl:text-[14px] 3xl:tracking-[1.1px]
                    4xl:text-[16px] 4xl:tracking-[1.3px]
                    flex items-center gap-2 4xl:gap-3
                  `}
                >
                  <span className="relative flex h-2 w-2 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#08A800] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#08A800] 3xl:h-3 3xl:w-3 4xl:h-4 4xl:w-4" />
                  </span>
                  How We Think About Operations
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className={`
                ${merriweather.className}
                text-center lg:text-left
                text-[#303030] font-[600]
                text-[30px] leading-[36px]
                sm:text-[34px] sm:leading-[40px]
                md:text-[36px] md:leading-[46px]
                2xl:text-[40px] 2xl:leading-[56px]
                2xl:text-[42px] 2xl:leading-[60px]
                3xl:text-[44px] 3xl:leading-[62px]
                4xl:text-[46px] 4xl:leading-[66px]
              `}
            >
              Clarity is not created by adding{" "}
              <br className="hidden xl:block" />
              <span className="text-[#026B78] font-[600]">more tools.</span>{" "}
            </h1>

            {/* Paragraph */}
            <p
              className={`
                ${poppins.className}
                text-center lg:text-left
                text-[#252525] font-normal
                max-w-[820px] 4xl:max-w-[900px]
                mx-auto lg:mx-0
                mt-5
                text-[15px] leading-[24px]
                sm:text-[16px] sm:leading-[32px]
                3xl:text-[18px] 3xl:leading-[36px]
                4xl:text-[20px] 4xl:leading-[38px]
              `}
            >
              Most operational challenges are not caused by lack of effort,{" "}
              <br className="hidden xl:block" />
              but by lack of structure in how work flows across the business.
            </p>
          </div>

          {/* RIGHT IMAGE & CARDS */}
          <div
            className="
              relative w-full
              max-w-[320px] h-[320px]
              sm:max-w-[500px] sm:h-[420px]
              lg:max-w-[450px] lg:h-[450px]
              xl:max-w-[480px] xl:h-[460px]
              3xl:max-w-[620px] 3xl:h-[500px]
              4xl:max-w-[700px] 4xl:h-[600px]
              flex items-center justify-center
              mx-auto
            "
          >
            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  className={`absolute z-20 ${card.position}`}
                  animate={{
                    y: card.float.y,
                    x: card.float.x,
                  }}
                  transition={{
                    duration: card.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <div
                    className="
                      flex flex-col items-center justify-center gap-1
                      w-[72px] h-[72px]
                      sm:w-[88px] sm:h-[88px]
                      md:w-[96px] md:h-[96px]
                      xl:w-[100px] xl:h-[100px]
                      3xl:w-[118px] 3xl:h-[118px]
                      4xl:w-[140px] 4xl:h-[140px]
                      bg-white
                      rounded-[8px]
                      border-t border-r border-l border-[#006875]
                      border-b-[4px] border-b-[#006875]
                      shadow-[0_4px_4px_0_rgba(0,104,117,0.25)]
                      px-2 py-2
                      sm:px-3 sm:py-3
                    "
                  >
                    {/* Icon */}
                    <Icon
                      className="
                        text-[#006875]
                        w-4 h-4
                        sm:w-5 sm:h-5
                        3xl:w-6 3xl:h-6
                        4xl:w-7 4xl:h-7
                        shrink-0
                      "
                    />
                    {/* Title */}
                    <span
                      className={`
                        ${poppins.className}
                        text-[#006875]
                        text-center
                        font-bold
                        text-[8px] leading-[16px]
                        sm:text-[9px]
                        md:text-[10px]
                        3xl:text-[11px]
                        4xl:text-[13px]
                        uppercase
                        tracking-[0.3px]
                      `}
                    >
                      {card.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Main Image */}
            <Image
              src="/Proof/proof-hero.png"
              alt="Operations Structure"
              width={700}
              height={700}
              priority
              className="
                relative z-10
                w-[50%] h-[50%]
                sm:w-[40%] sm:h-[40%]
                sm:w-[50%] sm:h-[55%]
                2xl:w-[50%] 2xl:h-[50%]
                object-fill
              "
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        
        {/* MAIN WAVE SVG & CLIPPED CIRCLES */}
        <svg
          viewBox="0 0 1440 749"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="
            absolute
            bottom-0 
            left-0
            w-full
            h-auto
            min-h-[180px]
            sm:min-h-[220px]
            md:min-h-[260px]
            lg:min-h-[320px]
            xl:min-h-[360px]
            2xl:min-h-[420px]
          "
        >
          <defs>
            <filter
              id="filter0_d_1989_1985"
              x="-9"
              y="-4"
              width="1458"
              height="753.006"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.407843 0 0 0 0 0.458824 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1989_1985"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1989_1985"
                result="shape"
              />
            </filter>

            <radialGradient
              id="paint0_radial_1989_1985"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(10.4963 575.785 -1344.2 10.8026 784.728 515.054)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="1" stopColor="#F3FFFF" />
            </radialGradient>

            <clipPath id="wave-clip">
              <path d="M1 0H1439V638.585L1238.68 695.249C1106.36 732.68 967.73 742.416 831.47 723.848L710.014 707.298L543.84 675.269C418.123 651.038 288.923 651.174 163.257 675.67L1 707.298V0Z" />
            </clipPath>
          </defs>

          {/* Main Wave Background */}
          <g filter="url(#filter0_d_1989_1985)">
            <path
              d="M1 0H1439V638.585L1238.68 695.249C1106.36 732.68 967.73 742.416 831.47 723.848L710.014 707.298L543.84 675.269C418.123 651.038 288.923 651.174 163.257 675.67L1 707.298V0Z"
              fill="url(#paint0_radial_1989_1985)"
              fillOpacity="0.2"
            />
          </g>

          {/* Concentric Circles moved down and right */}
          {/* SM screens (640px - 768px) */}
           <g clipPath="url(#wave-clip)" className="hidden md:block lg:hidden">
            <circle cx="1350" cy="620" r="620" fill="rgba(0,104,117,0.02)" />
            <circle cx="1350" cy="620" r="520" fill="rgba(0,104,117,0.04)" />
            <circle cx="1350" cy="620" r="470" fill="rgba(0,104,117,0.06)" />
          </g>

          {/* MD screens (768px - 1024px) */}
          <g clipPath="url(#wave-clip)" className="hidden md:block lg:hidden">
            <circle cx="1350" cy="620" r="620" fill="rgba(0,104,117,0.02)" />
            <circle cx="1350" cy="620" r="520" fill="rgba(0,104,117,0.04)" />
            <circle cx="1350" cy="620" r="470" fill="rgba(0,104,117,0.06)" />
          </g>

          {/* LG screens (1024px - 1280px) */}
          <g clipPath="url(#wave-clip)" className="hidden lg:block xl:hidden">
            <circle cx="1350" cy="620" r="510" fill="rgba(0,104,117,0.02)" />
            <circle cx="1350" cy="620" r="460" fill="rgba(0,104,117,0.04)" />
            <circle cx="1350" cy="620" r="415" fill="rgba(0,104,117,0.06)" />
          </g>

          {/* XL, 2XL, 3XL, 4XL screens (1280px+) */}
          <g clipPath="url(#wave-clip)" className="hidden xl:block">
            <circle cx="1320" cy="580" r="364.5" fill="rgba(0,104,117,0.02)" />
            <circle cx="1320" cy="580" r="311.5" fill="rgba(0,104,117,0.04)" />
            <circle cx="1320" cy="580" r="264" fill="rgba(0,104,117,0.06)" />
          </g>
        </svg>
      </div>
    </section>
  );
}