// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Poppins, Merriweather } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// const leftBenefits = [
//   "Work flows clearly through defined paths",
//   "Teams stay aligned without constant check-ins",
//   "Progress is visible at every stage",
//   "Decisions become faster and more confident",
// ];

// const rightCards = [
//   { title: "Operational\nStructure", position: "top-[20px] left-[30px]" },
//   { title: "Workflow\nDesign", position: "top-[20px] right-[15px]" },
//   { title: "Visibility & \nDesign System", position: "bottom-[25px] left-[35px]" },
//   { title: "Business\nAutomation", position: "bottom-[25px] right-[0px]" },
// ];

// export default function ConnectedSystemSection() {
//   const containerRef = useRef(null);
//   const [scale, setScale] = useState(1);
//   const [isMounted, setIsMounted] = useState(false);

//   // This hook perfectly calculates the scale down to the pixel based on screen size
//   useEffect(() => {
//     setIsMounted(true);
//     const observer = new ResizeObserver((entries) => {
//       if (entries[0]) {
//         // 540 is the native width of your diagram
//         const newScale = entries[0].contentRect.width / 540;
//         // Cap the scale at 1 so it doesn't grow infinitely large on huge screens
//         setScale(Math.min(newScale, 1)); 
//       }
//     });

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="w-full bg-white py-3 lg:py-3 overflow-hidden min-h-auto md:min-h-screen flex items-center">
//       <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-8 lg:px-16 xl:px-24">
//         <div className="grid items-center gap-1 lg:gap-10 xl:gap-10 lg:grid-cols-2">
          
//           {/* LEFT SIDE CONTENT - Kept Exactly Untouched */}
//           <div className="flex flex-col items-center lg:items-start w-full max-w-[643px] mx-auto lg:mx-0">
//             <div
//               className={`
//                 ${poppins.className}
//                 inline-flex h-8 w-[179px] items-center justify-center
//                 rounded-full border border-[#07464E] bg-[#E3FCFF] shadow-sm
//               `}
//             >
//               <span className="text-[12px] font-semibold tracking-wide uppercase text-[#07464E]">
//                 HOW IT ALL CONNECTS
//               </span>
//             </div>

//             <h2
//               className={`
//                 ${merriweather.className}
//                 mt-5 text-[22px] md:text-[28px] lg:text-[32px]
//                 font-bold leading-[1.3] text-[#161616] text-center lg:text-left
//               `}
//             >
//               Not Separate Services
//               <br />
//               <span className="text-[#006976]">One Connected System.</span>
//             </h2>

//             <div className="mt-2 flex">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="71"
//                 height="4"
//                 viewBox="0 0 71 4"
//                 fill="none"
//               >
//                 <rect width="71" height="4" rx="2" fill="#006875" />
//               </svg>
//             </div>

//             <p
//               className={`
//                 ${poppins.className}
//                 mt-2 w-full max-w-[540px] text-center lg:text-left
//                 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[25px]
//                 tracking-[0.35px] text-[#2A2A2A]
//               `}
//             >
//               These are not isolated offerings. They work together to create a
//               single outcome — one where your operations actually support your
//               growth.
//             </p>

//             <div className="mt-5 flex flex-col gap-4 w-full max-w-[507px]">
//               {leftBenefits.map((item, index) => {
//                 const isLeft = index % 2 === 0;

//                 return (
//                   <div
//                     key={index}
//                     className={`flex w-full ${
//                       isLeft
//                         ? "justify-start -pr-0 sm:-pr-0 pl-7"
//                         : "justify-end pr-5 sm:pr-7 "
//                     }`}
//                   >
//                     <div
//                       className={`
//                         relative flex items-center min-h-[60px] w-full bg-white
//                         border border-[#006875] shadow-[0_0_4px_2px_rgba(0,104,117,0.25)]
//                         ${
//                           isLeft
//                             ? "rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none pl-[47px] pr-[16px] py-[16px] sm:pr-[50px]"
//                             : "rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none pr-[47px] pl-[16px] py-[16px] sm:pl-[50px]"
//                         }
//                       `}
//                     >
//                       <div
//                         className={`
//                           absolute top-1/2 -translate-y-1/2 w-[64px] h-[45px]
//                           bg-[#006875] border-[2px] border-[#006875] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
//                           flex justify-center items-center z-10
//                           ${
//                             isLeft
//                               ? "left-[-24px] sm:left-[-32px] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none"
//                               : "right-[-24px] sm:right-[-32px] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none"
//                           }
//                         `}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 20 20"
//                           fill="none"
//                           className="flex-shrink-0"
//                         >
//                           <path
//                             d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C4.47 20 0 15.5 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10.5 5V10.25L15 12.92L14.25 14.15L9 11V5H10.5Z"
//                             fill="white"
//                           />
//                         </svg>
//                       </div>

//                       <p
//                         className={`
//                           ${poppins.className}
//                           w-full text-[14px] font-normal leading-[20px] text-black
//                           ${isLeft ? "text-left" : "text-right"}
//                         `}
//                       >
//                         {item}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT SIDE DIAGRAM - COMPLETELY RESPONSIVE USING REACT SCALER */}
//           <div className="flex justify-center items-center w-full mt-6 lg:mt-0 overflow-visible">
            
//             {/* The Outer Wrapper dynamically holds the fluid width and exact aspect ratio height */}
//             <div 
//               ref={containerRef}
//               className="relative w-full max-w-[540px] mx-auto transition-opacity duration-300"
//               style={{ 
//                 aspectRatio: "540 / 560",
//                 opacity: isMounted ? 1 : 0 // Prevents sudden layout jump on initial load
//               }}
//             >
              
//               {/* The Inner Wrapper uses your exact original code, scaled perfectly from the top-left */}
//               <div 
//                 className="absolute top-0 left-0 w-[540px] h-[560px] origin-top-left"
//                 style={{ transform: `scale(${scale})` }}
//               >
                
//                 {/* Soft background glow exactly centered */}
//                 <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#E3FCFF] rounded-full blur-[35px] opacity-90 z-0"></div>

//                 {/* Master SVG for Ring, Dots, and Arrows */}
//                 <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 540 460">
//                   <defs>
//                     <marker
//                       id="outwardArrow"
//                       viewBox="0 0 14 14"
//                       refX="11"
//                       refY="7"
//                       markerWidth="7"
//                       markerHeight="7"
//                       orient="auto"
//                     >
//                       <path
//                         d="M 2 2 L 12 7 L 2 12"
//                         fill="none"
//                         stroke="#006875"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </marker>
//                   </defs>

//                   <line x1="163.94" y1="123.94" x2="121.51" y2="81.51" stroke="#006875" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" markerEnd="url(#outwardArrow)" />
//                   <line x1="376.06" y1="123.94" x2="418.49" y2="81.51" stroke="#006875" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" markerEnd="url(#outwardArrow)" />
//                   <line x1="163.94" y1="336.06" x2="121.51" y2="378.49" stroke="#006875" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" markerEnd="url(#outwardArrow)" />
//                   <line x1="376.06" y1="336.06" x2="418.49" y2="378.49" stroke="#006875" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" markerEnd="url(#outwardArrow)" />

//                   <circle 
//                     cx="270" 
//                     cy="230" 
//                     r="130" 
//                     fill="none" 
//                     stroke="#006875" 
//                     strokeWidth="8" 
//                     strokeDasharray="177.48 16.72" 
//                     transform="rotate(12.5 270 230)"
//                     strokeLinecap="round"
//                   />
                  
//                   <g transform="translate(168.63, 128.53)">
//                     <ellipse cx="9.45652" cy="9.55897" rx="9.45652" ry="9.55897" fill="white"/>
//                     <path d="M16.2124 9.55635C16.2124 13.3273 13.1883 16.3842 9.45779 16.3842C5.72729 16.3842 2.70312 13.3273 2.70312 9.55635C2.70312 5.78544 5.72729 2.72852 9.45779 2.72852C13.1883 2.72852 16.2124 5.78544 16.2124 9.55635ZM6.41819 9.55635C6.41819 11.2533 7.77906 12.6289 9.45779 12.6289C11.1365 12.6289 12.4974 11.2533 12.4974 9.55635C12.4974 7.85944 11.1365 6.48383 9.45779 6.48383C7.77906 6.48383 6.41819 7.85944 6.41819 9.55635Z" fill="#006875"/>
//                   </g>

//                   <g transform="translate(352.47, 128.53)">
//                     <ellipse cx="9.45652" cy="9.55897" rx="9.45652" ry="9.55897" fill="white"/>
//                     <path d="M16.2124 9.55635C16.2124 13.3273 13.1883 16.3842 9.45779 16.3842C5.72729 16.3842 2.70312 13.3273 2.70312 9.55635C2.70312 5.78544 5.72729 2.72852 9.45779 2.72852C13.1883 2.72852 16.2124 5.78544 16.2124 9.55635ZM6.41819 9.55635C6.41819 11.2533 7.77906 12.6289 9.45779 12.6289C11.1365 12.6289 12.4974 11.2533 12.4974 9.55635C12.4974 7.85944 11.1365 6.48383 9.45779 6.48383C7.77906 6.48383 6.41819 7.85944 6.41819 9.55635Z" fill="#006875"/>
//                   </g>

//                   <g transform="translate(168.63, 312.37)">
//                     <ellipse cx="9.45652" cy="9.55897" rx="9.45652" ry="9.55897" fill="white"/>
//                     <path d="M16.2124 9.55635C16.2124 13.3273 13.1883 16.3842 9.45779 16.3842C5.72729 16.3842 2.70312 13.3273 2.70312 9.55635C2.70312 5.78544 5.72729 2.72852 9.45779 2.72852C13.1883 2.72852 16.2124 5.78544 16.2124 9.55635ZM6.41819 9.55635C6.41819 11.2533 7.77906 12.6289 9.45779 12.6289C11.1365 12.6289 12.4974 11.2533 12.4974 9.55635C12.4974 7.85944 11.1365 6.48383 9.45779 6.48383C7.77906 6.48383 6.41819 7.85944 6.41819 9.55635Z" fill="#006875"/>
//                   </g>

//                   <g transform="translate(352.47, 312.37)">
//                     <ellipse cx="9.45652" cy="9.55897" rx="9.45652" ry="9.55897" fill="white"/>
//                     <path d="M16.2124 9.55635C16.2124 13.3273 13.1883 16.3842 9.45779 16.3842C5.72729 16.3842 2.70312 13.3273 2.70312 9.55635C2.70312 5.78544 5.72729 2.72852 9.45779 2.72852C13.1883 2.72852 16.2124 5.78544 16.2124 9.55635ZM6.41819 9.55635C6.41819 11.2533 7.77906 12.6289 9.45779 12.6289C11.1365 12.6289 12.4974 11.2533 12.4974 9.55635C12.4974 7.85944 11.1365 6.48383 9.45779 6.48383C7.77906 6.48383 6.41819 7.85944 6.41819 9.55635Z" fill="#006875"/>
//                   </g>
//                 </svg>

//                 {/* Center Inner Circle with Chart Icon */}
//                 <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex justify-center items-center z-20">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 30 30" fill="none">
//                     <g clipPath="url(#clip0_3948_2103)">
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M21.485 2.08991C23.0878 1.76718 24.7231 1.63501 26.3569 1.69616C26.7343 1.71082 27.0922 1.86731 27.3593 2.13436C27.6263 2.40142 27.7828 2.75939 27.7975 3.13678C27.835 4.02178 27.8394 5.88616 27.4037 8.00865C27.1475 9.26053 25.6419 9.59991 24.8119 8.76928L23.6137 7.57178C23.1472 7.99388 22.6861 8.42205 22.2306 8.85616C21.0487 9.98178 19.5662 11.4699 18.3156 12.9555C17.2519 14.2193 15.2112 14.2105 14.2125 12.8118C13.5809 11.925 12.9249 11.0559 12.245 10.2055C10.8487 11.1612 7.95 13.3605 4.69125 17.0868C4.48875 17.318 4.28542 17.5551 4.08125 17.798C3.86767 18.0516 3.56209 18.21 3.23173 18.2383C2.90137 18.2666 2.5733 18.1625 2.31969 17.949C2.06607 17.7354 1.90769 17.4298 1.87939 17.0994C1.85108 16.7691 1.95517 16.441 2.16875 16.1874C2.38375 15.9332 2.59708 15.6847 2.80875 15.4418C6.3025 11.4468 9.42562 9.09678 10.9294 8.07678C11.9812 7.36366 13.3612 7.60928 14.1331 8.56428C14.8643 9.47519 15.5689 10.407 16.2462 11.3587C16.2508 11.3644 16.2563 11.3692 16.2625 11.373C16.2769 11.3792 16.2924 11.3826 16.3081 11.383C16.3258 11.3842 16.3434 11.3815 16.3599 11.375C16.3763 11.3685 16.3911 11.3585 16.4031 11.3455C17.7381 9.7599 19.2944 8.20053 20.5056 7.04616C21.0262 6.55053 21.4869 6.12553 21.8437 5.80241L20.725 4.68116C19.8944 3.85116 20.2337 2.34616 21.4856 2.08928M21.1031 27.4455C21.0206 26.3143 20.9381 24.2962 20.9381 20.7424C20.9381 17.1887 21.0206 15.1712 21.1031 14.0387C21.1944 12.7824 22.1119 11.8024 23.4169 11.7224C23.8319 11.6974 24.3525 11.6799 25.0006 11.6799C25.6487 11.6799 26.1694 11.6974 26.5844 11.7224C27.8894 11.8024 28.8069 12.7824 28.8981 14.0387C28.9806 15.1712 29.0631 17.1887 29.0631 20.7424C29.0631 24.2962 28.9806 26.3137 28.8981 27.4462C28.8069 28.7024 27.8894 29.6824 26.5844 29.7624C26.1694 29.7874 25.6487 29.8049 25.0006 29.8049C24.3525 29.8049 23.8319 29.7874 23.4169 29.7624C22.1119 29.6824 21.1944 28.7018 21.1031 27.4455ZM1.04375 27.7868C0.983125 27.1968 0.9375 26.3468 0.9375 25.118C0.9375 23.8893 0.983125 23.0393 1.04313 22.4493C1.16875 21.2055 2.16687 20.4924 3.26 20.4555C3.83982 20.4376 4.4199 20.4292 5 20.4305C5.74187 20.4305 6.31062 20.4412 6.74 20.4555C7.83312 20.4924 8.83125 21.2055 8.95687 22.4493C9.01687 23.0393 9.0625 23.8893 9.0625 25.118C9.0625 26.3468 9.01687 27.1968 8.9575 27.7868C8.83125 29.0305 7.8325 29.7437 6.74 29.7805C6.31062 29.7949 5.74187 29.8055 5 29.8055C4.25812 29.8055 3.68937 29.7949 3.26 29.7805C2.16687 29.7437 1.16937 29.0305 1.04375 27.7868ZM10.9375 23.243C10.9375 25.3749 10.9994 26.7205 11.0706 27.5662C11.1781 28.8462 12.1581 29.7205 13.3956 29.7749C13.8106 29.793 14.3369 29.8055 15 29.8055C15.6631 29.8055 16.1894 29.793 16.6044 29.7743C17.8419 29.7205 18.8219 28.8462 18.9294 27.5662C19.0006 26.7205 19.0625 25.3749 19.0625 23.243C19.0625 21.1112 19.0006 19.7655 18.93 18.9199C18.8219 17.6399 17.8425 16.7655 16.6044 16.7112C16.1894 16.693 15.6631 16.6805 15 16.6805C14.3369 16.6805 13.8106 16.693 13.3962 16.7118C12.1581 16.7655 11.1775 17.6399 11.07 18.9199C11 19.7655 10.9375 21.1112 10.9375 23.243Z"
//                         fill="#006875"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_3948_2103">
//                         <rect width="30" height="30" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>

//                 {/* 4 Floating Cards mapping precisely to outer edge lines */}
//                 {rightCards.map((card, i) => (
//                   <div
//                     key={i}
//                     className={`
//                       absolute flex items-center justify-start gap-[12px] px-[18px]
//                       w-[170px] h-[76px] bg-[#006875] rounded-[14px]
//                       shadow-[0_8px_20px_rgba(0,104,117,0.3)] z-30
//                       ${card.position}
//                     `}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="22"
//                       height="22"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       className="flex-shrink-0 opacity-90"
//                     >
//                       <path
//                         d="M12.6997 12.8367C8.66967 16.8667 4.133 18.8626 2.5655 17.2951C0.998838 15.7284 2.99467 11.1917 7.02384 7.16172C11.0538 3.13172 15.5913 1.13505 17.1588 2.70255C18.7255 4.26922 16.7297 8.80672 12.6997 12.8367Z"
//                         stroke="white"
//                         strokeWidth="1.5"
//                       />
//                       <path
//                         d="M7.02549 12.8367C11.0555 16.8667 15.5922 18.8626 17.1597 17.2951C18.7263 15.7284 16.7305 11.1917 12.7013 7.16172C8.67049 3.13172 4.13299 1.13505 2.56549 2.70255C0.998828 4.26922 2.99466 8.80672 7.02466 12.8367H7.02549Z"
//                         stroke="white"
//                         strokeWidth="1.5"
//                       />
//                       <path
//                         d="M10 10H10.004V10.004H10V10Z"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     <span
//                       className={`
//                         ${poppins.className}
//                         text-[12px] font-semibold leading-[18px] text-white whitespace-pre-line text-left flex-1 tracking-wide
//                       `}
//                     >
//                       {card.title}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Poppins, Merriweather } from "next/font/google";
// import {
//   FiGitBranch,
//   FiUsers,
//   FiTrendingUp,
//   FiZap,
//   FiLayers,
//   FiLayout,
//   FiEye,
//   FiCpu,
// } from "react-icons/fi";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// const leftBenefits = [
//   { text: "Work flows clearly through defined paths", Icon: FiGitBranch },
//   { text: "Teams stay aligned without constant check-ins", Icon: FiUsers },
//   { text: "Progress is visible at every stage", Icon: FiTrendingUp },
//   { text: "Decisions become faster and more confident", Icon: FiZap },
// ];

// const rightCards = [
//   { title: "Operational\nStructure", position: "top-left", Icon: FiLayers },
//   { title: "Workflow\nDesign", position: "top-right", Icon: FiLayout },
//   { title: "Visibility & \nDesign System", position: "bottom-left", Icon: FiEye },
//   { title: "Business\nAutomation", position: "bottom-right", Icon: FiCpu },
// ];

// export default function ConnectedSystemSection() {

//   const ArrowSVG = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 35 35"
//     fill="none"
//     className="w-full h-full"
//   >
//     <path
//       d="M0.439848 32.2591C-0.145938 32.8449 -0.145939 33.7947 0.439848 34.3805C1.02563 34.9663 1.97538 34.9663 2.56117 34.3805L1.50051 33.3198L0.439848 32.2591ZM34.8203 1.5C34.8203 0.671573 34.1487 5.13428e-08 33.3203 9.34897e-08L19.8203 -2.43685e-07C18.9919 -2.43685e-07 18.3203 0.671572 18.3203 1.5C18.3203 2.32843 18.9919 3 19.8203 3L31.8203 3L31.8203 15C31.8203 15.8284 32.4919 16.5 33.3203 16.5C34.1487 16.5 34.8203 15.8284 34.8203 15L34.8203 1.5ZM30.1314 2.56764C29.5456 3.15342 29.5456 4.10317 30.1314 4.68896C30.7171 5.27475 31.6669 5.27475 32.2527 4.68896L31.192 3.6283L30.1314 2.56764ZM27.9961 8.94555C28.5819 8.35977 28.5819 7.41002 27.9961 6.82423C27.4103 6.23845 26.4605 6.23845 25.8748 6.82423L26.9354 7.88489L27.9961 8.94555ZM21.6182 11.0808C21.0324 11.6666 21.0324 12.6164 21.6182 13.2022C22.2039 13.7879 23.1537 13.7879 23.7395 13.2022L22.6788 12.1415L21.6182 11.0808ZM19.4829 17.4587C20.0687 16.873 20.0687 15.9232 19.4829 15.3374C18.8971 14.7516 17.9474 14.7516 17.3616 15.3374L18.4222 16.3981L19.4829 17.4587ZM13.105 19.594C12.5192 20.1798 12.5192 21.1296 13.105 21.7153C13.6908 22.3011 14.6405 22.3011 15.2263 21.7153L14.1656 20.6547L13.105 19.594ZM10.9697 25.9719C11.5555 25.3862 11.5555 24.4364 10.9697 23.8506C10.3839 23.2648 9.43415 23.2648 8.84837 23.8506L9.90903 24.9113L10.9697 25.9719ZM5.15001 27.549C4.56423 28.1348 4.56423 29.0845 5.15001 29.6703C5.7358 30.2561 6.68555 30.2561 7.27134 29.6703L6.21068 28.6096L5.15001 27.549ZM4.13122 32.8104C4.71701 32.2246 4.71701 31.2749 4.13122 30.6891C3.54544 30.1033 2.59569 30.1033 2.0099 30.6891L3.07056 31.7497L4.13122 32.8104ZM33.3203 1.5L32.2597 0.43934L30.1314 2.56764L31.192 3.6283L32.2527 4.68896L34.381 2.56066L33.3203 1.5ZM26.9354 7.88489L25.8748 6.82423L21.6182 11.0808L22.6788 12.1415L23.7395 13.2022L27.9961 8.94555L26.9354 7.88489ZM18.4222 16.3981L17.3616 15.3374L13.105 19.594L14.1656 20.6547L15.2263 21.7153L19.4829 17.4587L18.4222 16.3981ZM9.90903 24.9113L8.84837 23.8506L6.72007 25.9789L7.78073 27.0396L8.84139 28.1002L10.9697 25.9719L9.90903 24.9113ZM7.78073 27.0396L6.72007 25.9789L5.15001 27.549L6.21068 28.6096L7.27134 29.6703L8.84139 28.1002L7.78073 27.0396ZM3.07056 31.7497L2.0099 30.6891L0.439848 32.2591L1.50051 33.3198L2.56117 34.3805L4.13122 32.8104L3.07056 31.7497Z"
//       fill="#006875"
//     />
//   </svg>
//   );
//   const sectionRef = useRef(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const [animStep, setAnimStep] = useState(0); // 0: Hidden, 1: Circles, 2: Arrows, 3: Cards

//   useEffect(() => {
//     setIsMounted(true);

//     const viewObserver = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setAnimStep(1);
//           viewObserver.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       viewObserver.observe(sectionRef.current);
//     }

//     return () => {
//       viewObserver.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (animStep === 1) {
//       timer = setTimeout(() => setAnimStep(2), 1000);
//     } else if (animStep === 2) {
//       timer = setTimeout(() => setAnimStep(3), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [animStep]);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-white py-5 sm:py-8 md:py-10 lg:py-14 2xl:py-16 3xl:py-20 4xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 3xl:px-24 4xl:px-32 overflow-hidden flex items-center"
//     >
//       <div className="mx-auto w-full max-w-[1440px] xl:max-w-[1200px] 2xl:max-w-[1300px] 3xl:max-w-[1440px] 4xl:max-w-[1700px]">
//         <div className="grid items-center gap-1 lg:gap-10 xl:gap-10 lg:grid-cols-2">

//           {/* ─── LEFT SIDE CONTENT ─── */}
//           <div className="flex flex-col items-center lg:items-start w-full">
//             <div
//               className="
//                 flex
//                 h-[24px] lg:h-[30px]
//                 px-5 items-center
//                 justify-center
//                 rounded-[24px]
//                 border
//                 border-[#07464E]
//                 bg-[#E3FCFF]
//               "
//             >
//               <span
//                 className={`
//                   ${poppins.className}
//                   uppercase
//                   font-semibold
//                   text-[#07464E]
//                   text-[10px]
//                   md:text-[12px]
//                   3xl:text-[14px]
//                   4xl:text-[16px]
//                 `}
//               >
//                 HOW IT ALL CONNECTS
//               </span>
//             </div>

//             <h2
//               className={`
//                 ${merriweather.className}
//                 mt-5 text-center lg:text-left text-[#161616] font-semibold
//                 text-[20px] leading-[28px] sm:text-[22px] sm:leading-[31px] md:text-[24px] md:leading-[34px] lg:text-[26px] lg:leading-[37px] xl:text-[27px] xl:leading-[38px] 2xl:text-[28px] 2xl:leading-[40px] 3xl:text-[30px] 3xl:leading-[43px] 4xl:text-[32px] 4xl:leading-[45px]
//               `}
//             >
//               Not Separate Services
//               <br />
//               <span className="text-[#006976]">One Connected System.</span>
//             </h2>

//             <div className="mt-2 flex">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="71"
//                 height="4"
//                 viewBox="0 0 71 4"
//                 fill="none"
//               >
//                 <rect width="71" height="4" rx="2" fill="#006875" />
//               </svg>
//             </div>

//             <p
//               className={`
//                 ${poppins.className}
//                 mt-5 w-full text-center lg:text-left text-[#2A2A2A] font-normal tracking-[0.35px]
//                 text-[12px] leading-[22px] sm:text-[13px] sm:leading-[24px] md:text-[14px] md:leading-[26px] lg:text-[15px] lg:leading-[28px] xl:text-[15px] xl:leading-[28px] 2xl:text-[16px] 2xl:leading-[30px] 3xl:text-[18px] 3xl:leading-[34px] 4xl:text-[20px] 4xl:leading-[38px]
//               `}
//             >
//               These are not isolated offerings. They work together to create a
//               single{" "}
//               <br className="hidden xl:block" />
//               outcome — one where your operations actually support your growth.
//             </p>

//             <div className="mt-5 flex flex-col gap-4 2xl:gap-8 w-full max-w-[507px] 3xl:max-w-[600px] 4xl:max-w-[700px] md:mt-10">
//               {leftBenefits.map((item, index) => {
//                 const isLeft = index % 2 === 0;
//                 return (
//                   <div
//                     key={index}
//                     className={`flex w-full ${
//                       isLeft
//                         ? "justify-start -pr-0 sm:-pr-0 pl-7"
//                         : "justify-end pr-5 sm:pr-7"
//                     }`}
//                   >
//                     <div
//                       className={`
//                         relative flex items-center min-h-[60px] w-full bg-white
//                         border border-[#006875] shadow-[0_0_4px_2px_rgba(0,104,117,0.25)]
//                         ${
//                           isLeft
//                             ? "rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none pl-[47px] pr-[16px] py-[16px] sm:pr-[50px]"
//                             : "rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none pr-[47px] pl-[16px] py-[16px] sm:pl-[50px]"
//                         }
//                       `}
//                     >
//                       <div
//                         className={`
//                           absolute top-1/2 -translate-y-1/2 w-[64px] h-[45px]
//                           bg-[#006875] border-[2px] border-[#006875] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
//                           flex justify-center items-center z-10
//                           ${
//                             isLeft
//                               ? "left-[-24px] sm:left-[-32px] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none"
//                               : "right-[-24px] sm:right-[-32px] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none"
//                           }
//                         `}
//                       >
//                         <item.Icon size={20} className="flex-shrink-0 text-white" />
//                       </div>

//                       <p
//                         className={`
//                           ${poppins.className}
//                           w-full font-normal text-black text-center
//                           text-[11px] leading-[16px] sm:text-[12px] sm:leading-[17px] md:text-[13px] md:leading-[18px] lg:text-[13px] lg:leading-[18px] xl:text-[14px] xl:leading-[20px] 2xl:text-[14px] 2xl:leading-[20px] 3xl:text-[16px] 3xl:leading-[23px] 4xl:text-[18px] 4xl:leading-[26px]
//                         `}
//                       >
//                         {item.text}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ─── RIGHT SIDE DIAGRAM ─── */}
//           <div
//       className="
//         flex justify-center items-center w-full mt-8 lg:mt-0
//         transition-opacity duration-300 opacity-100
//       "
//     >
//       <div
//         className="
//           relative
//           w-[320px] h-[320px]
//           sm:w-[380px] sm:h-[380px]
//           md:w-[420px] md:h-[420px]
//           lg:w-[440px] lg:h-[440px]
//           xl:w-[480px] xl:h-[480px]
//           2xl:w-[520px] 2xl:h-[520px]
//           3xl:w-[560px] 3xl:h-[560px]
//           4xl:w-[650px] 4xl:h-[650px]
//           flex-shrink-0
//         "
//       >
//         {/* ========================================= */}
//         {/* 1. INNER CIRCLE */}
//         {/* ========================================= */}
//         <div
//           className="
//             absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//             flex justify-center items-center
//             bg-white rounded-full z-20
//             shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
//             w-[80px] h-[80px]
//             sm:w-[80px] sm:h-[80px]
//             md:w-[90px] md:h-[90px]
//             lg:w-[110px] lg:h-[110px]
//             xl:w-[120px] xl:h-[120px]
//             2xl:w-[126px] 2xl:h-[126px]
//             3xl:w-[140px] 3xl:h-[140px]
//             4xl:w-[160px] 4xl:h-[160px]
//           "
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 30 30"
//             fill="none"
//             className="
//               flex-shrink-0 aspect-square
//               w-[20px] h-[20px]
//               sm:w-[26px] sm:h-[26px]
//               md:w-[30px] md:h-[30px]
//               lg:w-[34px] lg:h-[34px]
//               xl:w-[38px] xl:h-[38px]
//               2xl:w-[42px] 2xl:h-[42px]
//               3xl:w-[46px] 3xl:h-[46px]
//               4xl:w-[50px] 4xl:h-[50px]
//             "
//           >
//             <g clipPath="url(#clip0_4015_5656)">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M21.485 2.09186C23.0878 1.76913 24.7231 1.63697 26.3569 1.69811C26.7343 1.71277 27.0922 1.86926 27.3593 2.13632C27.6263 2.40337 27.7828 2.76134 27.7975 3.13873C27.835 4.02373 27.8394 5.88811 27.4037 8.01061C27.1475 9.26248 25.6419 9.60186 24.8119 8.77123L23.6137 7.57373C23.1472 7.99584 22.6861 8.424 22.2306 8.85811C21.0487 9.98373 19.5662 11.4719 18.3156 12.9575C17.2519 14.2212 15.2112 14.2125 14.2125 12.8137C13.5809 11.9269 12.9249 11.0578 12.245 10.2075C10.8487 11.1631 7.95 13.3625 4.69125 17.0887C4.48875 17.32 4.28542 17.5571 4.08125 17.8C3.86767 18.0536 3.56209 18.212 3.23173 18.2403C2.90137 18.2686 2.5733 18.1645 2.31969 17.9509C2.06607 17.7373 1.90769 17.4318 1.87939 17.1014C1.85108 16.771 1.95517 16.443 2.16875 16.1894C2.38375 15.9352 2.59708 15.6866 2.80875 15.4437C6.3025 11.4487 9.42562 9.09873 10.9294 8.07873C11.9812 7.36561 13.3612 7.61123 14.1331 8.56623C14.8643 9.47714 15.5689 10.409 16.2462 11.3606C16.2508 11.3663 16.2563 11.3712 16.2625 11.375C16.2769 11.3812 16.2924 11.3845 16.3081 11.385C16.3258 11.3862 16.3434 11.3835 16.3599 11.377C16.3763 11.3705 16.3911 11.3604 16.4031 11.3475C17.7381 9.76186 19.2944 8.20248 20.5056 7.04811C21.0262 6.55248 21.4869 6.12748 21.8437 5.80436L20.725 4.68311C19.8944 3.85311 20.2337 2.34811 21.4856 2.09123M21.1031 27.4475C21.0206 26.3162 20.9381 24.2981 20.9381 20.7444C20.9381 17.1906 21.0206 15.1731 21.1031 14.0406C21.1944 12.7844 22.1119 11.8044 23.4169 11.7244C23.8319 11.6994 24.3525 11.6819 25.0006 11.6819C25.6487 11.6819 26.1694 11.6994 26.5844 11.7244C27.8894 11.8044 28.8069 12.7844 28.8981 14.0406C28.9806 15.1731 29.0631 17.1906 29.0631 20.7444C29.0631 24.2981 28.9806 26.3156 28.8981 27.4481C28.8069 28.7044 27.8894 29.6844 26.5844 29.7644C26.1694 29.7894 25.6487 29.8069 25.0006 29.8069C24.3525 29.8069 23.8319 29.7894 23.4169 29.7644C22.1119 29.6844 21.1944 28.7037 21.1031 27.4475ZM1.04375 27.7887C0.983125 27.1987 0.9375 26.3487 0.9375 25.12C0.9375 23.8912 0.983125 23.0412 1.04313 22.4512C1.16875 21.2075 2.16687 20.4944 3.26 20.4575C3.83982 20.4395 4.4199 20.4312 5 20.4325C5.74187 20.4325 6.31062 20.4431 6.74 20.4575C7.83312 20.4944 8.83125 21.2075 8.95687 22.4512C9.01687 23.0412 9.0625 23.8912 9.0625 25.12C9.0625 26.3487 9.01687 27.1987 8.9575 27.7887C8.83125 29.0325 7.8325 29.7456 6.74 29.7825C6.31062 29.7969 5.74187 29.8075 5 29.8075C4.25812 29.8075 3.68937 29.7969 3.26 29.7825C2.16687 29.7456 1.16937 29.0325 1.04375 27.7887ZM10.9375 23.245C10.9375 25.3769 10.9994 26.7225 11.0706 27.5681C11.1781 28.8481 12.1581 29.7225 13.3956 29.7769C13.8106 29.795 14.3369 29.8075 15 29.8075C15.6631 29.8075 16.1894 29.795 16.6044 29.7762C17.8419 29.7225 18.8219 28.8481 18.9294 27.5681C19.0006 26.7225 19.0625 25.3769 19.0625 23.245C19.0625 21.1131 19.0006 19.7675 18.93 18.9219C18.8219 17.6419 17.8425 16.7675 16.6044 16.7131C16.1894 16.695 15.6631 16.6825 15 16.6825C14.3369 16.6825 13.8106 16.695 13.3962 16.7137C12.1581 16.7675 11.1775 17.6419 11.07 18.9219C11 19.7675 10.9375 21.1131 10.9375 23.245Z"
//                 fill="#006875"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_4015_5656">
//                 <rect width="30" height="30" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </div>

//         {/* ========================================= */}
//         {/* 2. OUTER RING (SVG Arcs & Nodes) */}
//         {/* ========================================= */}
//         <div
//           className="
//             absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-85 z-10
//             w-[120px] h-[120px]
//             sm:w-[130px] sm:h-[130px]
//             md:w-[140px] md:h-[140px]
//             lg:w-[150px] lg:h-[150px]
//             xl:w-[150px] xl:h-[150px]
//             2xl:w-[180px] 2xl:h-[180px]
//             3xl:w-[200px] 3xl:h-[200px]
//             4xl:w-[240px] 4xl:h-[240px]
//           "
//         >
//           {/* 4 Quarter Arcs with gaps */}
//           {[0, 90, 180, 270].map((rotation, i) => (
//             <div
//               key={`arc-${i}`}
//               className="absolute inset-0 origin-center"
//               style={{ transform: `rotate(${rotation}deg)` }}
//             >
//               {/* Padding creates the precise visual gap between arc segments */}
//               <div 
//                 className="
//                   absolute top-0 left-0 w-1/2 h-1/2 flex items-end justify-end
//                   p-[3px] sm:p-[3px] md:p-[2px] lg:p-[3px]
//                 "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 83 82"
//                   fill="none"
//                   className="w-full h-full object-contain"
//                 >
//                   <path
//                     d="M82.2963 2.33867C82.2963 1.02764 81.2328 -0.038763 79.9224 -0.000624364C59.2663 0.600527 39.5526 9.02986 24.7258 23.6636C9.88654 38.3095 1.07684 58.0506 0.0010169 78.9294C-0.0656945 80.2242 0.963251 81.3006 2.25939 81.3319C3.55647 81.3632 4.62957 80.336 4.69856 79.0404C5.74424 59.4019 14.0458 40.8399 28.007 27.0605C41.9564 13.2928 60.4928 5.3488 79.9224 4.74912C81.2328 4.70868 82.2963 3.6497 82.2963 2.33867Z"
//                     fill="#006875"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}

//           {/* 4 Nodes (Dot Circles) exactly at the gaps */}
//           {[45, 135, 225, 315].map((rotation, i) => (
//             <div
//               key={`node-${i}`}
//               className="absolute inset-0 origin-center"
//               style={{ transform: `rotate(${rotation}deg)` }}
//             >
//               <div
//                 className="
//                   absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 -translate-y-1/2
//                   w-[10px] h-[10px]
//                   sm:w-[12px] sm:h-[12px]
//                   md:w-[14px] md:h-[14px]
//                   lg:w-[16px] lg:h-[16px]
//                   xl:w-[18px] xl:h-[18px]
//                   2xl:w-[20px] 2xl:h-[20px]
//                   3xl:w-[22px] 3xl:h-[22px]
//                   4xl:w-[24px] 4xl:h-[24px]
//                 "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 19 20"
//                   fill="none"
//                   className="w-full h-full"
//                 >
//                   <ellipse cx="9.45652" cy="9.55897" rx="9.45652" ry="9.55897" fill="white" />
//                   <path
//                     d="M16.2124 9.56221C16.2124 13.3331 13.1883 16.39 9.45779 16.39C5.72729 16.39 2.70312 13.3331 2.70312 9.56221C2.70312 5.7913 5.72729 2.73438 9.45779 2.73438C13.1883 2.73438 16.2124 5.7913 16.2124 9.56221ZM6.36459 9.56221C6.36459 11.289 7.74946 12.6889 9.45779 12.6889C11.1661 12.6889 12.551 11.289 12.551 9.56221C12.551 7.83538 11.1661 6.4355 9.45779 6.4355C7.74946 6.4355 6.36459 7.83538 6.36459 9.56221Z"
//                     fill="#006875"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ========================================= */}
//         {/* 3. ARROWS (Pointing Outward) */}
//         {/* ========================================= */}
//         {/* This container defines the diagonal distance for the arrows. 
//             By mapping to corners, they inherently push outward correctly. */}
//         <div
//           className="
//             absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
//             w-[140px] h-[140px]
//             sm:w-[190px] sm:h-[190px]
//             md:w-[230px] md:h-[230px]
//             lg:w-[270px] lg:h-[270px]
//             xl:w-[310px] xl:h-[310px]
//             2xl:w-[350px] 2xl:h-[350px]
//             3xl:w-[450px] 3xl:h-[450px]
//             4xl:w-[550px] 4xl:h-[550px]
//           "
//         >
//           {/* Top-Right Arrow (Points ↗) */}
//           <div className="absolute top-2 right-4 sm:top-7 sm:right-8 md:top-10 md:right-12  lg:top-14 lg:right-16 xl:top-18 xl:right-20 2xl:top-20 2xl:right-22 3xl:top-30 3xl:right-32 4xl:top-38 4xl:right-40 translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] rotate-0">
//              <ArrowSVG />
//           </div>

//           {/* Bottom-Right Arrow (Points ↘) */}
//           <div className="absolute bottom-3.5 right-2 sm:bottom-9 sm:right-7 md:bottom-12 md:right-11 lg:bottom-16 lg:right-14 xl:bottom-20 xl:right-18 2xl:bottom-22 2xl:right-20 3xl:bottom-32 3xl:right-30 4xl:bottom-40 4xl:right-36 translate-x-1/2 translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] rotate-90">
//              <ArrowSVG />
//           </div>

//           {/* Bottom-Left Arrow (Points ↙) */}
//           <div className="absolute bottom-2 left-4 sm:bottom-7 sm:left-9 md:bottom-10 md:left-13 lg:bottom-14 lg:left-16 xl:bottom-18 xl:left-20 2xl:bottom-20 2xl:left-23 3xl:bottom-30 3xl:left-32 4xl:bottom-36 4xl:left-40 -translate-x-1/2 translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[34px] 2xl:w-[34px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] rotate-180">
//              <ArrowSVG />
//           </div>

//           {/* Top-Left Arrow (Points ↖) */}
//           <div className="absolute top-3.5 left-2 sm:top-8 sm:left-7 md:top-12 md:left-10 lg:top-16 lg:left-14 xl:top-20 xl:left-19 2xl:top-22 2xl:left-20 3xl:top-33 3xl:left-30 4xl:top-40 4xl:left-38 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] -rotate-90">
//              <ArrowSVG />
//           </div>
//         </div>

//         {/* ========================================= */}
//         {/* 4. CORNER CARDS */}
//         {/* ========================================= */}
//         {rightCards.map((card, i) => {
//           const posClasses =
//             card.position === "top-left"
//               ? "top-7 left-0 sm:top-12 sm:left-0 md:top-12 md:left-0 lg:top-11 lg:left-0 xl:top-14 xl:left-0 2xl:top-17 2xl:-left-5 3xl:top-6 3xl:left-0 4xl:top-16 4xl:left-0"
//               : card.position === "top-right"
//               ? "top-6 right-4 sm:top-10 sm:right-0 md:top-10 md:right-0 lg:top-9 lg:right-0 xl:top-13 xl:right-0 2xl:top-16 2xl:right-0 3xl:top-5 3xl:right-0 4xl:top-16 4xl:right-4"
//               : card.position === "bottom-left"
//               ? "bottom-7 left-0 sm:bottom-9 sm:left-0 md:bottom-10 md:left-0 lg:bottom-9 lg:left-0 xl:bottom-13 xl:left-0 2xl:bottom-16 2xl:left-0 3xl:bottom-5 3xl:left-0 4xl:bottom-14 4xl:left-0"
//               : "bottom-7 right-4 sm:bottom-11 sm:right-0 md:bottom-12 md:right-0 lg:bottom-10 lg:right-0 xl:bottom-14 xl:right-0 2xl:bottom-17 2xl:right-0 3xl:bottom-5 3xl:right-0 4xl:bottom-16 4xl:right=0";

//           return (
//             <div
//               key={i}
//               className={`
//                 absolute ${posClasses} z-30
//                 flex items-center justify-center
//                 bg-[#006875] rounded-[16px]
//                 shadow-[0_0_6px_2px_rgba(0,104,117,0.50)]
//                 w-[130px] h-[55px] px-[4px] py-[3px] gap-[6px]
//                 sm:w-[140px] sm:h-[65px] sm:px-[6px] sm:gap-[8px]
//                 md:w-[145px] md:h-[75px] md:px-[15px] md:gap-[10px]
//                 lg:w-[150px] lg:h-[80px] lg:px-[10px] lg:py-[10px]
//                 xl:w-[160px] xl:h-[85px] xl:px-[20px] xl:gap-[12px]
//                 2xl:w-[180px] 2xl:h-[80px] 2xl:px-[22px]
//                 3xl:w-[180px] 3xl:h-[100px] 3xl:px-[25px] 3xl:gap-[14px]
//                 4xl:w-[200px] 4xl:h-[110px] 4xl:px-[30px] 4xl:gap-[16px]
//               `}
//             >
//               <card.Icon
//                 className="
//                   flex-shrink-0 text-white
//                   w-[14px] h-[14px]
//                   sm:w-[16px] sm:h-[16px]
//                   md:w-[18px] md:h-[18px]
//                   lg:w-[20px] lg:h-[20px]
//                   xl:w-[22px] xl:h-[22px]
//                   2xl:w-[24px] 2xl:h-[24px]
//                   3xl:w-[26px] 3xl:h-[26px]
//                   4xl:w-[28px] 4xl:h-[28px]
//                 "
//               />

//               <div
//                 className="
//                   flex flex-col justify-center flex-shrink-0 font-semibold text-white whitespace-pre-line text-left
//                   w-[80px] text-[10px] leading-[12px]
//                   sm:w-[80px] sm:text-[10px] sm:leading-[14px]
//                   md:w-[85px] md:text-[11px] md:leading-[16px]
//                   lg:w-[95px] lg:text-[12px] lg:leading-[20px]
//                   xl:w-[95px] xl:text-[12px] xl:leading-[22px]
//                   2xl:w-[100px] 2xl:text-[12px] 2xl:leading-[24px]
//                   3xl:w-[120px] 3xl:text-[14px] 3xl:leading-[26px]
//                   4xl:w-[130px] 4xl:text-[16px] 4xl:leading-[28px]
//                 "
//                 style={{ fontFamily: 'Poppins, sans-serif' }}
//               >
//                 {card.title}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>

//         </div>
//       </div>
//     </section>

//   );
// }



"use client";

import React, { useEffect, useRef, useState } from "react";
import { Poppins, Merriweather } from "next/font/google";
import {
  FiGitBranch,
  FiUsers,
  FiTrendingUp,
  FiZap,
  FiLayers,
  FiLayout,
  FiEye,
  FiCpu,
} from "react-icons/fi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const leftBenefits = [
  { text: "Work flows clearly through defined paths", Icon: FiGitBranch },
  { text: "Teams stay aligned without constant check-ins", Icon: FiUsers },
  { text: "Progress is visible at every stage", Icon: FiTrendingUp },
  { text: "Decisions become faster and more confident", Icon: FiZap },
];

const rightCards = [
  { title: "Operational\nStructure", position: "top-left", Icon: FiLayers },
  { title: "Workflow\nDesign", position: "top-right", Icon: FiLayout },
  { title: "Visibility & \nDesign System", position: "bottom-left", Icon: FiEye },
  { title: "Business\nAutomation", position: "bottom-right", Icon: FiCpu },
];

export default function ConnectedSystemSection() {

  const ArrowSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
    fill="none"
    className="w-full h-full"
  >
    <path
      d="M0.439848 32.2591C-0.145938 32.8449 -0.145939 33.7947 0.439848 34.3805C1.02563 34.9663 1.97538 34.9663 2.56117 34.3805L1.50051 33.3198L0.439848 32.2591ZM34.8203 1.5C34.8203 0.671573 34.1487 5.13428e-08 33.3203 9.34897e-08L19.8203 -2.43685e-07C18.9919 -2.43685e-07 18.3203 0.671572 18.3203 1.5C18.3203 2.32843 18.9919 3 19.8203 3L31.8203 3L31.8203 15C31.8203 15.8284 32.4919 16.5 33.3203 16.5C34.1487 16.5 34.8203 15.8284 34.8203 15L34.8203 1.5ZM30.1314 2.56764C29.5456 3.15342 29.5456 4.10317 30.1314 4.68896C30.7171 5.27475 31.6669 5.27475 32.2527 4.68896L31.192 3.6283L30.1314 2.56764ZM27.9961 8.94555C28.5819 8.35977 28.5819 7.41002 27.9961 6.82423C27.4103 6.23845 26.4605 6.23845 25.8748 6.82423L26.9354 7.88489L27.9961 8.94555ZM21.6182 11.0808C21.0324 11.6666 21.0324 12.6164 21.6182 13.2022C22.2039 13.7879 23.1537 13.7879 23.7395 13.2022L22.6788 12.1415L21.6182 11.0808ZM19.4829 17.4587C20.0687 16.873 20.0687 15.9232 19.4829 15.3374C18.8971 14.7516 17.9474 14.7516 17.3616 15.3374L18.4222 16.3981L19.4829 17.4587ZM13.105 19.594C12.5192 20.1798 12.5192 21.1296 13.105 21.7153C13.6908 22.3011 14.6405 22.3011 15.2263 21.7153L14.1656 20.6547L13.105 19.594ZM10.9697 25.9719C11.5555 25.3862 11.5555 24.4364 10.9697 23.8506C10.3839 23.2648 9.43415 23.2648 8.84837 23.8506L9.90903 24.9113L10.9697 25.9719ZM5.15001 27.549C4.56423 28.1348 4.56423 29.0845 5.15001 29.6703C5.7358 30.2561 6.68555 30.2561 7.27134 29.6703L6.21068 28.6096L5.15001 27.549ZM4.13122 32.8104C4.71701 32.2246 4.71701 31.2749 4.13122 30.6891C3.54544 30.1033 2.59569 30.1033 2.0099 30.6891L3.07056 31.7497L4.13122 32.8104ZM33.3203 1.5L32.2597 0.43934L30.1314 2.56764L31.192 3.6283L32.2527 4.68896L34.381 2.56066L33.3203 1.5ZM26.9354 7.88489L25.8748 6.82423L21.6182 11.0808L22.6788 12.1415L23.7395 13.2022L27.9961 8.94555L26.9354 7.88489ZM18.4222 16.3981L17.3616 15.3374L13.105 19.594L14.1656 20.6547L15.2263 21.7153L19.4829 17.4587L18.4222 16.3981ZM9.90903 24.9113L8.84837 23.8506L6.72007 25.9789L7.78073 27.0396L8.84139 28.1002L10.9697 25.9719L9.90903 24.9113ZM7.78073 27.0396L6.72007 25.9789L5.15001 27.549L6.21068 28.6096L7.27134 29.6703L8.84139 28.1002L7.78073 27.0396ZM3.07056 31.7497L2.0099 30.6891L0.439848 32.2591L1.50051 33.3198L2.56117 34.3805L4.13122 32.8104L3.07056 31.7497Z"
      fill="#006875"
    />
  </svg>
  );
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [animStep, setAnimStep] = useState(0); // 0: Hidden, 1: Circles, 2: Arrows, 3: Cards

  useEffect(() => {
    setIsMounted(true);

    const viewObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimStep(1);
          viewObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      viewObserver.observe(sectionRef.current);
    }

    return () => {
      viewObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let timer;
    if (animStep === 1) {
      timer = setTimeout(() => setAnimStep(2), 1000);
    } else if (animStep === 2) {
      timer = setTimeout(() => setAnimStep(3), 1000);
    }
    return () => clearTimeout(timer);
  }, [animStep]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-5 sm:py-8 md:py-10 lg:py-14 2xl:py-16 3xl:py-20 4xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 3xl:px-24 4xl:px-32 overflow-hidden flex items-center"
    >
      <div className="mx-auto w-full max-w-[1440px] xl:max-w-[1200px] 2xl:max-w-[1300px] 3xl:max-w-[1440px] 4xl:max-w-[1700px]">
        <div className="grid items-center gap-1 lg:gap-10 xl:gap-10 lg:grid-cols-2">

          {/* ─── LEFT SIDE CONTENT ─── */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <div
              className="
                flex
                h-[24px] lg:h-[30px]
                px-5 items-center
                justify-center
                rounded-[24px]
                border
                border-[#07464E]
                bg-[#E3FCFF]
              "
            >
              <span
                className={`
                  ${poppins.className}
                  uppercase
                  font-semibold
                  text-[#07464E]
                  text-[10px]
                  md:text-[12px]
                  3xl:text-[14px]
                  4xl:text-[16px]
                `}
              >
                HOW IT ALL CONNECTS
              </span>
            </div>

            <h2
              className={`
                ${merriweather.className}
                mt-5 text-center lg:text-left text-[#161616] font-semibold
                text-[20px] leading-[28px] sm:text-[22px] sm:leading-[31px] md:text-[24px] md:leading-[34px] lg:text-[26px] lg:leading-[37px] xl:text-[27px] xl:leading-[38px] 2xl:text-[28px] 2xl:leading-[40px] 3xl:text-[30px] 3xl:leading-[43px] 4xl:text-[32px] 4xl:leading-[45px]
              `}
            >
              Not Separate Services
              <br />
              <span className="text-[#006976]">One Connected System.</span>
            </h2>

            <div className="mt-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="4"
                viewBox="0 0 71 4"
                fill="none"
              >
                <rect width="71" height="4" rx="2" fill="#006875" />
              </svg>
            </div>

            <p
              className={`
                ${poppins.className}
                mt-5 w-full text-center lg:text-left text-[#2A2A2A] font-normal tracking-[0.35px]
                text-[12px] leading-[22px] sm:text-[13px] sm:leading-[24px] md:text-[14px] md:leading-[26px] lg:text-[15px] lg:leading-[28px] xl:text-[15px] xl:leading-[28px] 2xl:text-[16px] 2xl:leading-[30px] 3xl:text-[18px] 3xl:leading-[34px] 4xl:text-[20px] 4xl:leading-[38px]
              `}
            >
              These are not isolated offerings. They work together to create a
              single{" "}
              <br className="hidden xl:block" />
              outcome — one where your operations actually support your growth.
            </p>

            <div className="mt-5 flex flex-col gap-4 2xl:gap-8 w-full max-w-[507px] 3xl:max-w-[600px] 4xl:max-w-[700px] md:mt-10">
              {leftBenefits.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex w-full ${
                      isLeft
                        ? "justify-start -pr-0 sm:-pr-0 pl-7"
                        : "justify-end pr-5 sm:pr-7"
                    }`}
                  >
                    <div
                      className={`
                        relative flex items-center min-h-[60px] w-full bg-white
                        border border-[#006875] shadow-[0_0_4px_2px_rgba(0,104,117,0.25)]
                        ${
                          isLeft
                            ? "rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none pl-[47px] pr-[16px] py-[16px] sm:pr-[50px]"
                            : "rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none pr-[47px] pl-[16px] py-[16px] sm:pl-[50px]"
                        }
                      `}
                    >
                      <div
                        className={`
                          absolute top-1/2 -translate-y-1/2 w-[64px] h-[45px]
                          bg-[#006875] border-[2px] border-[#006875] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
                          flex justify-center items-center z-10
                          ${
                            isLeft
                              ? "left-[-24px] sm:left-[-32px] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none"
                              : "right-[-24px] sm:right-[-32px] rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none"
                          }
                        `}
                      >
                        <item.Icon size={20} className="flex-shrink-0 text-white" />
                      </div>

                      <p
                        className={`
                          ${poppins.className}
                          w-full font-normal text-black text-center
                          text-[11px] leading-[16px] sm:text-[12px] sm:leading-[17px] md:text-[13px] md:leading-[18px] lg:text-[13px] lg:leading-[18px] xl:text-[14px] xl:leading-[20px] 2xl:text-[14px] 2xl:leading-[20px] 3xl:text-[16px] 3xl:leading-[23px] 4xl:text-[18px] 4xl:leading-[26px]
                        `}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT SIDE DIAGRAM ─── */}
          <div
      className="
        flex justify-center items-center w-full mt-8 lg:mt-0
        transition-opacity duration-300 opacity-100
      "
    >
      <div
        className="
          relative
          w-[280px] h-[320px]
          sm:w-[400px] sm:h-[400px]
          md:w-[420px] md:h-[420px]
          lg:w-[440px] lg:h-[440px]
          xl:w-[480px] xl:h-[480px]
          2xl:w-[520px] 2xl:h-[520px]
          3xl:w-[560px] 3xl:h-[560px]
          4xl:w-[650px] 4xl:h-[650px]
          flex-shrink-0
        "
      >
        {/* ========================================= */}
        {/* 1. INNER CIRCLE */}
        {/* ========================================= */}
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex justify-center items-center
            bg-white rounded-full z-20
            shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
            w-[80px] h-[80px]
            sm:w-[80px] sm:h-[80px]
            md:w-[90px] md:h-[90px]
            lg:w-[110px] lg:h-[110px]
            xl:w-[120px] xl:h-[120px]
            2xl:w-[126px] 2xl:h-[126px]
            3xl:w-[140px] 3xl:h-[140px]
            4xl:w-[160px] 4xl:h-[160px]
            transition-all duration-700 ease-out
            ${animStep >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="none"
            className="
              flex-shrink-0 aspect-square
              w-[20px] h-[20px]
              sm:w-[26px] sm:h-[26px]
              md:w-[30px] md:h-[30px]
              lg:w-[34px] lg:h-[34px]
              xl:w-[38px] xl:h-[38px]
              2xl:w-[42px] 2xl:h-[42px]
              3xl:w-[46px] 3xl:h-[46px]
              4xl:w-[50px] 4xl:h-[50px]
            "
          >
            <g clipPath="url(#clip0_4015_5656)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.485 2.09186C23.0878 1.76913 24.7231 1.63697 26.3569 1.69811C26.7343 1.71277 27.0922 1.86926 27.3593 2.13632C27.6263 2.40337 27.7828 2.76134 27.7975 3.13873C27.835 4.02373 27.8394 5.88811 27.4037 8.01061C27.1475 9.26248 25.6419 9.60186 24.8119 8.77123L23.6137 7.57373C23.1472 7.99584 22.6861 8.424 22.2306 8.85811C21.0487 9.98373 19.5662 11.4719 18.3156 12.9575C17.2519 14.2212 15.2112 14.2125 14.2125 12.8137C13.5809 11.9269 12.9249 11.0578 12.245 10.2075C10.8487 11.1631 7.95 13.3625 4.69125 17.0887C4.48875 17.32 4.28542 17.5571 4.08125 17.8C3.86767 18.0536 3.56209 18.212 3.23173 18.2403C2.90137 18.2686 2.5733 18.1645 2.31969 17.9509C2.06607 17.7373 1.90769 17.4318 1.87939 17.1014C1.85108 16.771 1.95517 16.443 2.16875 16.1894C2.38375 15.9352 2.59708 15.6866 2.80875 15.4437C6.3025 11.4487 9.42562 9.09873 10.9294 8.07873C11.9812 7.36561 13.3612 7.61123 14.1331 8.56623C14.8643 9.47714 15.5689 10.409 16.2462 11.3606C16.2508 11.3663 16.2563 11.3712 16.2625 11.375C16.2769 11.3812 16.2924 11.3845 16.3081 11.385C16.3258 11.3862 16.3434 11.3835 16.3599 11.377C16.3763 11.3705 16.3911 11.3604 16.4031 11.3475C17.7381 9.76186 19.2944 8.20248 20.5056 7.04811C21.0262 6.55248 21.4869 6.12748 21.8437 5.80436L20.725 4.68311C19.8944 3.85311 20.2337 2.34811 21.4856 2.09123M21.1031 27.4475C21.0206 26.3162 20.9381 24.2981 20.9381 20.7444C20.9381 17.1906 21.0206 15.1731 21.1031 14.0406C21.1944 12.7844 22.1119 11.8044 23.4169 11.7244C23.8319 11.6994 24.3525 11.6819 25.0006 11.6819C25.6487 11.6819 26.1694 11.6994 26.5844 11.7244C27.8894 11.8044 28.8069 12.7844 28.8981 14.0406C28.9806 15.1731 29.0631 17.1906 29.0631 20.7444C29.0631 24.2981 28.9806 26.3156 28.8981 27.4481C28.8069 28.7044 27.8894 29.6844 26.5844 29.7644C26.1694 29.7894 25.6487 29.8069 25.0006 29.8069C24.3525 29.8069 23.8319 29.7894 23.4169 29.7644C22.1119 29.6844 21.1944 28.7037 21.1031 27.4475ZM1.04375 27.7887C0.983125 27.1987 0.9375 26.3487 0.9375 25.12C0.9375 23.8912 0.983125 23.0412 1.04313 22.4512C1.16875 21.2075 2.16687 20.4944 3.26 20.4575C3.83982 20.4395 4.4199 20.4312 5 20.4325C5.74187 20.4325 6.31062 20.4431 6.74 20.4575C7.83312 20.4944 8.83125 21.2075 8.95687 22.4512C9.01687 23.0412 9.0625 23.8912 9.0625 25.12C9.0625 26.3487 9.01687 27.1987 8.9575 27.7887C8.83125 29.0325 7.8325 29.7456 6.74 29.7825C6.31062 29.7969 5.74187 29.8075 5 29.8075C4.25812 29.8075 3.68937 29.7969 3.26 29.7825C2.16687 29.7456 1.16937 29.0325 1.04375 27.7887ZM10.9375 23.245C10.9375 25.3769 10.9994 26.7225 11.0706 27.5681C11.1781 28.8481 12.1581 29.7225 13.3956 29.7769C13.8106 29.795 14.3369 29.8075 15 29.8075C15.6631 29.8075 16.1894 29.795 16.6044 29.7762C17.8419 29.7225 18.8219 28.8481 18.9294 27.5681C19.0006 26.7225 19.0625 25.3769 19.0625 23.245C19.0625 21.1131 19.0006 19.7675 18.93 18.9219C18.8219 17.6419 17.8425 16.7675 16.6044 16.7131C16.1894 16.695 15.6631 16.6825 15 16.6825C14.3369 16.6825 13.8106 16.695 13.3962 16.7137C12.1581 16.7675 11.1775 17.6419 11.07 18.9219C11 19.7675 10.9375 21.1131 10.9375 23.245Z"
                fill="#006875"
              />
            </g>
            <defs>
              <clipPath id="clip0_4015_5656">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#E3FCFF] rounded-full blur-[35px] opacity-90 z-0"></div>

        {/* ========================================= */}
        {/* 2. OUTER RING (SVG Arcs & Nodes) */}
        {/* ========================================= */}
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-85 z-10
            w-[120px] h-[120px]
            sm:w-[130px] sm:h-[130px]
            md:w-[140px] md:h-[140px]
            lg:w-[150px] lg:h-[150px]
            xl:w-[150px] xl:h-[150px]
            2xl:w-[180px] 2xl:h-[180px]
            3xl:w-[200px] 3xl:h-[200px]
            4xl:w-[240px] 4xl:h-[240px]
            transition-all duration-700 ease-out delay-150
            ${animStep >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          {/* 4 Quarter Arcs with gaps */}
          {[0, 90, 180, 270].map((rotation, i) => (
            <div
              key={`arc-${i}`}
              className="absolute inset-0 origin-center"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Padding creates the precise visual gap between arc segments */}
              <div 
                className="
                  absolute top-0 left-0 w-1/2 h-1/2 flex items-end justify-end
                  p-[3px] sm:p-[3px] md:p-[2px] lg:p-[3px]
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 83 82"
                  fill="none"
                  className="w-full h-full object-contain"
                >
                  <path
                    d="M82.2963 2.33867C82.2963 1.02764 81.2328 -0.038763 79.9224 -0.000624364C59.2663 0.600527 39.5526 9.02986 24.7258 23.6636C9.88654 38.3095 1.07684 58.0506 0.0010169 78.9294C-0.0656945 80.2242 0.963251 81.3006 2.25939 81.3319C3.55647 81.3632 4.62957 80.336 4.69856 79.0404C5.74424 59.4019 14.0458 40.8399 28.007 27.0605C41.9564 13.2928 60.4928 5.3488 79.9224 4.74912C81.2328 4.70868 82.2963 3.6497 82.2963 2.33867Z"
                    fill="#006875"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* 4 Nodes (Dot Circles) exactly at the gaps */}
          {[45, 135, 225, 315].map((rotation, i) => (
            <div
              key={`node-${i}`}
              className="absolute inset-0 origin-center"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className="
                  absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[10px] h-[10px]
                  sm:w-[12px] sm:h-[12px]
                  md:w-[14px] md:h-[14px]
                  lg:w-[16px] lg:h-[16px]
                  xl:w-[18px] xl:h-[18px]
                  2xl:w-[20px] 2xl:h-[20px]
                  3xl:w-[22px] 3xl:h-[22px]
                  4xl:w-[24px] 4xl:h-[24px]
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 20"
                  fill="none"
                  className="w-full h-full"
                >
                  <ellipse cx="9.45652" cy="9.55897" rx="9.45652" ry="9.55897" fill="white" />
                  <path
                    d="M16.2124 9.56221C16.2124 13.3331 13.1883 16.39 9.45779 16.39C5.72729 16.39 2.70312 13.3331 2.70312 9.56221C2.70312 5.7913 5.72729 2.73438 9.45779 2.73438C13.1883 2.73438 16.2124 5.7913 16.2124 9.56221ZM6.36459 9.56221C6.36459 11.289 7.74946 12.6889 9.45779 12.6889C11.1661 12.6889 12.551 11.289 12.551 9.56221C12.551 7.83538 11.1661 6.4355 9.45779 6.4355C7.74946 6.4355 6.36459 7.83538 6.36459 9.56221Z"
                    fill="#006875"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================= */}
        {/* 3. ARROWS (Pointing Outward) */}
        {/* ========================================= */}
        {/* This container defines the diagonal distance for the arrows. 
            By mapping to corners, they inherently push outward correctly. */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
            w-[140px] h-[140px]
            sm:w-[190px] sm:h-[190px]
            md:w-[230px] md:h-[230px]
            lg:w-[270px] lg:h-[270px]
            xl:w-[310px] xl:h-[310px]
            2xl:w-[350px] 2xl:h-[350px]
            3xl:w-[450px] 3xl:h-[450px]
            4xl:w-[550px] 4xl:h-[550px]
          "
        >
          {/* Top-Right Arrow (Points ↗) */}
          <div className={`absolute top-2 right-4 sm:top-7 sm:right-9 md:top-10 md:right-12 lg:top-14 lg:right-16 xl:top-18 xl:right-20 2xl:top-20 2xl:right-22 3xl:top-30 3xl:right-32 4xl:top-38 4xl:right-40 translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] rotate-0 transition-all duration-500 ease-out ${animStep >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
             <ArrowSVG />
          </div>

          {/* Bottom-Right Arrow (Points ↘) */}
          <div className={`absolute bottom-3.5 right-2 sm:bottom-9 sm:right-7 md:bottom-12 md:right-11 lg:bottom-16 lg:right-14 xl:bottom-20 xl:right-18 2xl:bottom-22 2xl:right-20 3xl:bottom-32 3xl:right-30 4xl:bottom-40 4xl:right-36 translate-x-1/2 translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] rotate-90 transition-all duration-500 ease-out delay-75 ${animStep >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
             <ArrowSVG />
          </div>

          {/* Bottom-Left Arrow (Points ↙) */}
          <div className={`absolute bottom-2 left-4 sm:bottom-7 sm:left-9 md:bottom-10 md:left-13 lg:bottom-14 lg:left-16 xl:bottom-18 xl:left-20 2xl:bottom-20 2xl:left-23 3xl:bottom-30 3xl:left-32 4xl:bottom-36 4xl:left-40 -translate-x-1/2 translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[34px] 2xl:w-[34px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] rotate-180 transition-all duration-500 ease-out delay-150 ${animStep >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
             <ArrowSVG />
          </div>

          {/* Top-Left Arrow (Points ↖) */}
          <div className={`absolute top-3.5 left-2 sm:top-8 sm:left-7 md:top-12 md:left-10 lg:top-16 lg:left-14 xl:top-20 xl:left-19 2xl:top-22 2xl:left-20 3xl:top-32 3xl:left-30 4xl:top-40 4xl:left-38 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] 4xl:w-[48px] 4xl:h-[48px] -rotate-90 transition-all duration-500 ease-out delay-[225ms] ${animStep >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
             <ArrowSVG />
          </div>
        </div>

        {/* ========================================= */}
        {/* 4. CORNER CARDS */}
        {/* ========================================= */}
        {rightCards.map((card, i) => {
          const posClasses =
            card.position === "top-left"
              ? "top-7 -left-3 sm:top-15 sm:left-0 md:top-14 md:left-0 lg:top-14 lg:left-0 xl:top-18 xl:left-0 2xl:top-21 2xl:-left-5 3xl:top-18 3xl:left-0 4xl:top-22 4xl:left-0"
              : card.position === "top-right"
              ? "top-6 -right-3 sm:top-14 sm:right-0 md:top-12 md:right-0 lg:top-12 lg:right-0 xl:top-17 xl:right-0 2xl:top-18 2xl:right-0 3xl:top-16 3xl:right-0 4xl:top-20 4xl:right-4"
              : card.position === "bottom-left"
              ? "bottom-7 -left-3 sm:bottom-14 sm:left-0 md:bottom-12 md:left-0 lg:bottom-13 lg:left-0 xl:bottom-17 xl:left-0 2xl:bottom-18 2xl:left-0 3xl:bottom-17 3xl:left-0 4xl:bottom-19 4xl:left-0"
              : "bottom-7 -right-3 sm:bottom-15 sm:right-0 md:bottom-14 md:right-0 lg:bottom-14 lg:right-0 xl:bottom-18 xl:right-0 2xl:bottom-18 2xl:right-0 3xl:bottom-18 3xl:right-0 4xl:bottom-20 4xl:right=0";

          // Stagger delay per card: 0, 100ms, 200ms, 300ms
          const delayClass =
            i === 0 ? "delay-0" :
            i === 1 ? "delay-100" :
            i === 2 ? "delay-200" :
            "delay-300";

          return (
            <div
              key={i}
              className={`
                absolute ${posClasses} z-30
                flex items-center justify-center
                bg-[#006875] rounded-[16px]
                shadow-[0_0_6px_2px_rgba(0,104,117,0.50)]
                w-[130px] h-[55px] px-[4px] py-[3px] gap-[6px]
                sm:w-[140px] sm:h-[60px] sm:px-[6px] sm:gap-[8px]
                md:w-[145px] md:h-[70px] md:px-[15px] md:gap-[10px]
                lg:w-[150px] lg:h-[70px] lg:px-[10px] lg:py-[10px]
                xl:w-[160px] xl:h-[70px] xl:px-[20px] xl:gap-[12px]
                2xl:w-[180px] 2xl:h-[70px] 2xl:px-[22px]
                3xl:w-[180px] 3xl:h-[80px] 3xl:px-[25px] 3xl:gap-[14px]
                4xl:w-[200px] 4xl:h-[90px] 4xl:px-[30px] 4xl:gap-[16px]
                transition-all duration-500 ease-out ${delayClass}
                ${animStep >= 3 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4"}
              `}
            >
              <card.Icon
                className="
                  flex-shrink-0 text-white
                  w-[14px] h-[14px]
                  sm:w-[16px] sm:h-[16px]
                  md:w-[18px] md:h-[18px]
                  lg:w-[20px] lg:h-[20px]
                  xl:w-[22px] xl:h-[22px]
                  2xl:w-[24px] 2xl:h-[24px]
                  3xl:w-[26px] 3xl:h-[26px]
                  4xl:w-[28px] 4xl:h-[28px]
                "
              />

              <div
                className={`
                  ${poppins.className}
                  flex flex-col justify-center flex-shrink-0 font-semibold text-white whitespace-pre-line text-left
                  w-[80px] text-[10px] leading-[12px]
                  sm:w-[80px] sm:text-[10px] sm:leading-[14px]
                  md:w-[85px] md:text-[11px] md:leading-[16px]
                  lg:w-[95px] lg:text-[12px] lg:leading-[20px]
                  xl:w-[95px] xl:text-[12px] xl:leading-[22px]
                  2xl:w-[100px] 2xl:text-[12px] 2xl:leading-[24px]
                  3xl:w-[120px] 3xl:text-[14px] 3xl:leading-[26px]
                  4xl:w-[130px] 4xl:text-[16px] 4xl:leading-[28px]
                `}
              >
                {card.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>

        </div>
      </div>
    </section>

  );
}