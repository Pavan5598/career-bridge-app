// "use client";

// import Image from "next/image";
// import { Manrope } from "next/font/google";
// import {
//   FaYoutube,
//   FaInstagram,
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa6";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// const companyLinks = [
//   "Home",
//   "About Us",
//   "Courses",
//   "Services",
//   "Blogs",
//   "Contact Us",
//   "Branches",
// ];

// const coursesCol1 = [
//   "Java Full Stack with Gen AI",
//   "Dot Net Full Stack with Gen AI",
//   "Cyber Security",
//   "Data Analytics",
//   "Digital Marketing with AI",
//   "UI Web Development",
//   "C Language & C++",
//   "Data Structures & Algorithms",
//   "Generative AI course",
// ];

// const coursesCol2 = [
//   "Python Full Stack with Gen AI",
//   "MERN Stack",
//   "Data Science with AI & ML",
//   "Salesforce Full Stack",
//   "Azure Data Engineering",
//   "Business Analyst",
//   "Tally Prime ERP",
//   "Snowflake",
//   "Databricks with AI",
// ];

// const services = [
//   "Class room Training",
//   "Online Training",
//   "Self-paced Training",
//   "Corporate Training",
//   "HTD Programs",
//   "CRT Programs",
//   "Web/App Development",
//   "Overseas Education",
// ];

// const support = [
//   "Help Center",
//   "Terms of Service",
//   "Privacy Policy",
//   "Refund Policy",
// ];

// export default function Footer() {
//   return (
//     <footer
//       className={manrope.className + " relative overflow-hidden text-white"}
//     >
//       {/* Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#2E4378] via-[#6A3D6E] to-[#E4202C]" />

//       {/* Background Image */}
//       <div className="pointer-events-none absolute inset-0">
//         <Image
//           src="/Home/Capa 1.png"
//           alt="background"
//           fill
//           sizes="100vw"
//           className="object-cover opacity-80"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-[1280px] px-5 pt-12 sm:px-8 lg:px-10 lg:pt-14">
//         <div className="grid grid-cols-1 items-start gap-y-9 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[240px_90px_1fr_140px_130px] lg:gap-x-4">
//           {/* BRAND */}
//           <div className="min-w-0 sm:col-span-2 lg:col-span-1">
//             <div className="mb-5 flex items-center gap-3">
//               <Image
//                 src="/Home/Carrer Bridge logo 1.png"
//                 alt="Career Bridge Logo"
//                 width={62}
//                 height={62}
//                 className="flex-shrink-0 rounded-[10px]"
//               />

//               <span className="text-[21px] font-extrabold tracking-tight">
//                 Career Bridge
//               </span>
//             </div>

//             <p className="mb-5 max-w-[320px] text-[13px] leading-[1.75] text-white/85">
//               Career Bridge offers industry-crafted training, real projects,
//               modern labs, and strong placement support — making us one of
//               Hyderabad&apos;s top IT institutes.
//             </p>

//             <div className="mb-5 h-px w-full bg-white/30" />

//             <div className="flex gap-9">
//               <div>
//                 <h4 className="mb-2.5 text-[13.5px] font-bold">Follow us</h4>

//                 <div className="flex gap-2.5 text-[15px] text-white/88">
//                   <a
//                     href="https://www.youtube.com/@careerbridgeinstitute"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaYoutube />
//                   </a>

//                   <a
//                     href="https://www.instagram.com/careerbridgeinstitute/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram />
//                   </a>

//                   <a
//                     href="https://x.com/careerbridgeit"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaTwitter />
//                   </a>

//                   <a
//                     href="https://www.facebook.com/careerbridgeinstitute/photos/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebookF />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn />
//                   </a>
//                 </div>
//               </div>

//               {/* CALL US */}
//               <div>
//                 <h4 className="mb-2.5 text-[13.5px] font-bold">Call us</h4>

//                 <p className="text-[12.5px] leading-[1.85] text-white/88 md:whitespace-nowrap">
//                   <span className="block md:inline">+91 81430 90660,</span>{" "}
//                   <span className="block md:inline">+91 97053 23377</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* COMPANY */}
//           <div className="min-w-0">
//             <h3 className="mb-[18px] text-[15px] font-bold">Company</h3>

//             <ul className="space-y-[8px] text-[12px] text-#FFFFFF lg:text-[10px] 2xl:text-[14px]">
//               {companyLinks.map((item, i) => (
//                 <li
//                   key={i}
//                   className="cursor-pointer whitespace-nowrap hover:text-white"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* COURSES */}
//           <div className="min-w-0 sm:col-span-2 lg:col-span-1">
//             <h3 className="mb-[18px] text-[15px] font-bold">Courses</h3>

//             <div className="grid grid-cols-1 gap-x-4 text-[12px] text-#FFFFFF md:grid-cols-2 lg:gap-x-10 lg:text-[10px] 2xl:text-[14px]">
//               <ul className="space-y-[10px]">
//                 {coursesCol1.map((item, i) => (
//                   <li
//                     key={i}
//                     className="cursor-pointer whitespace-nowrap hover:text-white"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>

//               <ul className="space-y-[10px]">
//                 {coursesCol2.map((item, i) => (
//                   <li
//                     key={i}
//                     className="cursor-pointer whitespace-nowrap hover:text-white"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div className="min-w-0">
//             <h3 className="mb-[18px] text-[15px] font-bold">Services</h3>

//             <ul className="space-y-[10px] text-[12px] text-#FFFFFF lg:text-[10px] 2xl:text-[14px]">
//               {services.map((item, i) => (
//                 <li
//                   key={i}
//                   className="cursor-pointer whitespace-nowrap hover:text-white"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SUPPORT */}
//           <div className="min-w-0">
//             <h3 className="mb-[18px] text-[15px] font-bold">Support</h3>

//             <ul className="space-y-[10px] text-[12px] text-[12px] lg:text-[10px] 2xl:text-[14px]">
//               {support.map((item, i) => (
//                 <li
//                   key={i}
//                   className="cursor-pointer whitespace-nowrap hover:text-white"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="mt-11 flex flex-wrap items-center justify-center gap-1.5 border-t border-white/20 py-4 text-center text-[12.5px] text-white/75">
//           <FaRegCopyright className="text-[12px]" />

//           <span>
//             2026 Career Bridge All Rights Reserved. Developed by{" "}
//             <a
//               href="#"
//               className="font-semibold text-white underline underline-offset-2 hover:opacity-90"
//             >
//               Hanvitec Solutions
//             </a>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Manrope } from "next/font/google";
// import {
//   FaYoutube,
//   FaInstagram,
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaChevronDown,
// } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa6";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// const companyLinks = [
//   "Home",
//   "About Us",
//   "Courses",
//   "Services",
//   "Blogs",
//   "Become a trainer",
//   "Contact Us",
// ];

// const coursesCol1 = [
//   "Java Full Stack with Gen AI",
//   "Dot Net Full Stack with Gen AI",
//   "Cyber Security",
//   "Data Analytics",
//   "Digital Marketing with AI",
//   "UI Web Development",
//   "C Language & C++",
//   "Data Structures & Algorithms (DSA)",
//   "Generative AI course",
// ];

// const coursesCol2 = [
//   "Python Full Stack with Gen AI",
//   "MERN Stack",
//   "Data Science with AI & ML",
//   "Salesforce Full Stack",
//   "Azure Data Engineering",
//   "Business Analyst",
//   "Tally Prime ERP",
//   "Snowflake",
//   "Databricks with AI",
// ];

// const allCourses = [...coursesCol1, ...coursesCol2];

// const services = [
//   "Class room Training",
//   "Online Training",
//   "Self-placed Training",
//   "Corporate Training",
//   "HTD Programs",
//   "CRT Programs",
//   "Website/WebApp Development",
//   "Overseas Education",
// ];

// const support = [
//   "Help Center",
//   "Terms of Service",
//   "Privacy Policy",
//   "Refund Policy",
// ];

// /* ─── Accordion (mobile only) ───────────────────────────────── */
// function AccordionSection({ title, children }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div >
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex w-full items-center justify-between py-4 text-left"
//         aria-expanded={open}
//       >
//         <span className="text-[16px] font-bold">{title}</span>
//         <FaChevronDown
//           className={
//             "text-[13px] text-white/70 transition-transform duration-300 " +
//             (open ? "rotate-180" : "rotate-0")
//           }
//         />
//       </button>
//       <div
//         className={
//           "overflow-hidden transition-all duration-300 " +
//           (open ? "max-h-[700px] pb-4" : "max-h-0")
//         }
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// /* ─── Social icons ──────────────────────────────────────────── */
// function SocialIcons() {
//   return (
//     <div className="flex gap-3 text-[18px] text-white/90">
//       <a href="https://www.youtube.com/@careerbridgeinstitute" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
//       <a href="https://www.instagram.com/careerbridgeinstitute/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
//       <a href="https://x.com/careerbridgeit" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
//       <a href="https://www.facebook.com/careerbridgeinstitute/photos/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
//       <a href="https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
//     </div>
//   );
// }

// /* ─── Brand block (shared across tablet + desktop) ──────────── */
// function BrandBlock({ imgSize = 56, nameSize = "text-[20px]", descSize = "text-[13px]", maxDesc = "" }) {
//   return (
//     <>
//       <div className="mb-4 flex items-center gap-3">
//         <Image
//           src="/Home/Carrer Bridge logo 1.png"
//           alt="Career Bridge Logo"
//           width={imgSize}
//           height={imgSize}
//           className="flex-shrink-0 rounded-[10px]"
//         />
//         <span className={nameSize + " font-extrabold tracking-tight leading-tight"}>
//           Career Bridge
//         </span>
//       </div>
//       <p className={"mb-5 leading-[1.75] text-white/85 " + descSize + (maxDesc ? " " + maxDesc : "")}>
//         Career Bridge offers industry-crafted training, real projects,
//         modern labs, and strong placement support — making us one of
//         Hyderabad&apos;s top IT institutes.
//       </p>
//       <div className="mb-5 h-px w-full bg-white/30" />
//     </>
//   );
// }

// /* ─── Main Footer ───────────────────────────────────────────── */
// export default function Footer() {
//   return (
//     <footer className={manrope.className + " relative overflow-hidden text-white"}>

//       {/* Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#2E4378] via-[#6A3D6E] to-[#E4202C]" />

//       {/* Texture */}
//       <div className="pointer-events-none absolute inset-0">
//         <Image src="/Home/Capa 1.png" alt="" fill sizes="100vw" className="object-cover opacity-80" priority />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1536px] px-4 pt-10 sm:px-6 md:px-8 lg:px-10 lg:pt-12">

//         {/* ══════════════════════════════════════════════
//             MOBILE  < 768px — accordions
//             ══════════════════════════════════════════════ */}
//         <div className="md:hidden">
//           <BrandBlock imgSize={54} nameSize="text-[19px]" descSize="text-[13px]" />

//           {/* Follow + Call side by side */}
//           <div className="mb-6 flex gap-10">
//             <div>
//               <h4 className="mb-2.5 text-[13px] font-bold">Follow us</h4>
//               <SocialIcons />
//             </div>
//             <div>
//               <h4 className="mb-2.5 text-[13px] font-bold">Call us</h4>
//               <p className="text-[13px] leading-[1.85] text-white/85">
//                 +91 81430 90660<br />+91 97053 23377
//               </p>
//             </div>
//           </div>

//           <AccordionSection title="Company">
//             <ul className="space-y-3 text-[13px] text-white/85">
//               {companyLinks.map((item, i) => (
//                 <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//               ))}
//             </ul>
//           </AccordionSection>

//           <AccordionSection title="Courses">
//             <ul className="space-y-3 text-[13px] text-white/85">
//               {allCourses.map((item, i) => (
//                 <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//               ))}
//             </ul>
//           </AccordionSection>

//           <AccordionSection title="Services">
//             <ul className="space-y-3 text-[13px] text-white/85">
//               {services.map((item, i) => (
//                 <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//               ))}
//             </ul>
//           </AccordionSection>

//           <AccordionSection title="Support">
//             <ul className="space-y-3 text-[13px] text-white/85">
//               {support.map((item, i) => (
//                 <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//               ))}
//             </ul>
//           </AccordionSection>
//         </div>

//         {/* ══════════════════════════════════════════════
//             TABLET  768px–1023px
//             Brand full-width → Follow+Call → nav grid
//             Nav: 2-row layout
//               Row 1: Company | Courses (2-col inside) | Services | Support
//             The key fix: use flex instead of fixed-col grid so Courses
//             can take as much space as it needs without wrapping.
//             ══════════════════════════════════════════════ */}
//         <div className="hidden md:block lg:hidden">
//           <BrandBlock imgSize={58} nameSize="text-[21px]" descSize="text-[13.5px]" maxDesc="max-w-[600px]" />

//           {/* Follow + Call */}
//           <div className="mb-8 flex gap-16">
//             <div>
//               <h4 className="mb-2.5 text-[13.5px] font-bold">Follow us</h4>
//               <SocialIcons />
//             </div>
//             <div>
//               <h4 className="mb-2.5 text-[13.5px] font-bold">Call us</h4>
//               <p className="text-[13.5px] leading-[1.85] text-white/85">
//                 +91 81430 90660<br />+91 97053 23377
//               </p>
//             </div>
//           </div>

//           {/*
//             Nav sections — flex row, no wrapping.
//             Company and Services/Support have fixed min widths.
//             Courses gets all remaining space via flex-1.
//           */}
//           <div className="flex items-start gap-6">

//             {/* Company — fixed width */}
//             <div className="w-[140px] shrink-0">
//               <h3 className="mb-4 text-[14px] font-bold">Company</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85">
//                 {companyLinks.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Courses — flex-1, single column */}
//             <div className="flex-1 min-w-0">
//               <h3 className="mb-4 text-[14px] font-bold">Courses</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85">
//                 {allCourses.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services — fixed width */}
//             <div className="w-[145px] shrink-0">
//               <h3 className="mb-4 text-[14px] font-bold">Services</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85">
//                 {services.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support — fixed width */}
//             <div className="w-[120px] shrink-0">
//               <h3 className="mb-4 text-[14px] font-bold">Support</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85">
//                 {support.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* ══════════════════════════════════════════════
//             DESKTOP  ≥ 1024px — 5-col grid
//             Brand | Company | Courses | Services | Support
//             Courses: 1-col on lg/xl, 2-col on 2xl
//             ══════════════════════════════════════════════ */}
//         <div className="hidden lg:block">
//           <div className="grid items-start gap-x-5
//             lg:grid-cols-[minmax(200px,230px)_minmax(95px,115px)_1fr_minmax(130px,155px)_minmax(115px,135px)]
//             xl:grid-cols-[minmax(220px,250px)_minmax(100px,120px)_1fr_minmax(140px,160px)_minmax(120px,140px)]
//             xl:gap-x-8
//             2xl:grid-cols-[minmax(240px,270px)_minmax(110px,130px)_1fr_minmax(150px,170px)_minmax(130px,150px)]
//             2xl:gap-x-10
//           ">

//             {/* Brand */}
//             <div className="min-w-0">
//               <BrandBlock imgSize={56} nameSize="text-[20px]" descSize="text-[12.5px]" />
//               <div className="mb-4">
//                 <h4 className="mb-2.5 text-[13px] font-bold">Follow us</h4>
//                 <SocialIcons />
//               </div>
//               <div>
//                 <h4 className="mb-2.5 text-[13px] font-bold">Call us</h4>
//                 <p className="text-[12.5px] leading-[1.85] text-white/85">
//                   +91 81430 90660<br />+91 97053 23377
//                 </p>
//               </div>
//             </div>

//             {/* Company */}
//             <div className="min-w-0">
//               <h3 className="mb-4 text-[14px] font-bold">Company</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85 xl:text-[13px]">
//                 {companyLinks.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Courses */}
//             <div className="min-w-0">
//               <h3 className="mb-4 text-[14px] font-bold">Courses</h3>
//               {/* lg only → single merged list */}
//               <ul className="xl:hidden space-y-[7px] text-[11.5px] text-white/85">
//                 {allCourses.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//               {/* xl and above → 2 columns */}
//               <div className="hidden xl:grid grid-cols-2 gap-x-6 text-[12px] text-white/85 2xl:text-[13px] 2xl:gap-x-8">
//                 <ul className="space-y-2.5">
//                   {coursesCol1.map((item, i) => (
//                     <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                   ))}
//                 </ul>
//                 <ul className="space-y-2.5">
//                   {coursesCol2.map((item, i) => (
//                     <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Services */}
//             <div className="min-w-0">
//               <h3 className="mb-4 text-[14px] font-bold">Services</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85 xl:text-[13px]">
//                 {services.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support */}
//             <div className="min-w-0">
//               <h3 className="mb-4 text-[14px] font-bold">Support</h3>
//               <ul className="space-y-2.5 text-[12.5px] text-white/85 xl:text-[13px]">
//                 {support.map((item, i) => (
//                   <li key={i} className="cursor-pointer hover:text-white transition-colors">{item}</li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* ── BOTTOM BAR ── */}
//         <div className="mt-10 flex flex-col items-center gap-1.5 border-t border-white/20 py-4 text-center text-[12.5px] text-white/75 sm:flex-row sm:justify-between sm:text-left">
//           <div className="flex items-center gap-1.5">
//             <FaRegCopyright className="flex-shrink-0 text-[11px]" />
//             <span>2026 Career Bridge All Rights Reserved.</span>
//           </div>
//           <span>
//             Developed by{" "}
//             <a href="#" className="font-semibold text-white underline underline-offset-2 hover:opacity-90">
//               Hanvitec Solutions
//             </a>
//           </span>
//         </div>

//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { Manrope } from "next/font/google";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const companyLinks = [
  "Home",
  "About Us",
  "Courses",
  "Services",
  "Blogs",
  "Become a trainer",
  "Contact Us",
];

const coursesCol1 = [
  "Java Full Stack with Gen AI",
  "Dot Net Full Stack with Gen AI",
  "Cyber Security",
  "Data Analytics",
  "Digital Marketing with AI",
  "UI Web Development",
  "C Language & C++",
  "Data Structures & Algorithms (DSA)",
  "Generative AI course",
];

const coursesCol2 = [
  "Python Full Stack with Gen AI",
  "MERN Stack",
  "Data Science with AI & ML",
  "Salesforce Full Stack",
  "Azure Data Engineering",
  "Business Analyst",
  "Tally Prime ERP",
  "Snowflake",
  "Databricks with AI",
];

const allCourses = [...coursesCol1, ...coursesCol2];

const services = [
  "Class room Training",
  "Online Training",
  "Self-placed Training",
  "Corporate Training",
  "HTD Programs",
  "CRT Programs",
  "Website/WebApp Development",
  "Overseas Education",
];

const support = [
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Refund Policy",
];

/* ─── Accordion (mobile only) ───────────────────────────────── */
function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-2 text-left"
        aria-expanded={open}
      >
        <span className="text-[16px] font-bold">{title}</span>
        <FaChevronDown
          className={
            "text-[13px] text-[#FFF] transition-transform duration-300 " +
            (open ? "rotate-180" : "rotate-0")
          }
        />
      </button>
      <div
        className={
          "overflow-hidden transition-all duration-300 " +
          (open ? "max-h-[700px] pb-4" : "max-h-0")
        }
      >
        {children}
      </div>
    </div>
  );
}

/* ─── Social icons ──────────────────────────────────────────── */
function SocialIcons() {
  return (
    <div className="flex gap-3 text-[18px] text-white/90">
      <a
        href="https://www.youtube.com/@careerbridgeinstitute"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.instagram.com/careerbridgeinstitute/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/careerbridgeit"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.facebook.com/careerbridgeinstitute/photos/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}

/* ─── Brand block (shared across tablet + desktop) ──────────── */
function BrandBlock({
  imgSize = 56,
  nameSize = "text-[20px]",
  descSize = "text-[13px]",
  maxDesc = "",
}) {
  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <Image
          src="/Home/Carrer Bridge logo 1.png"
          alt="Career Bridge Logo"
          width={imgSize}
          height={imgSize}
          className="flex-shrink-0 rounded-[10px]"
        />
        <span
          className={nameSize + " font-extrabold tracking-tight leading-tight"}
        >
          Career Bridge
        </span>
      </div>
      <p
        className={
          "mb-5 leading-[1.75] text-[#FFF] " +
          descSize +
          (maxDesc ? " " + maxDesc : "")
        }
      >
        Career Bridge offers industry-crafted training, real projects, modern
        labs, and strong placement support — making us one of Hyderabad&apos;s
        top IT institutes.
      </p>
      <div className="mb-5 h-px w-full bg-white/30" />
    </>
  );
}

/* ─── Main Footer ───────────────────────────────────────────── */
export default function Footer() {
    const pathname = usePathname();
    if(pathname.startsWith("/login") || pathname.startsWith("/dashboard")|| pathname.startsWith("/user/dashboard") ){
    return null;
  }

  return (
    <footer
      className={manrope.className + " relative overflow-hidden text-[#FFF]"}
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E4378] via-[#6A3D6E] to-[#E4202C]" />

      {/* Texture */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/Home/Capa 1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-10 sm:px-6 md:px-8 lg:px-12 xl:px-[72px] 2xl:px-[72px] lg:pt-12">
        {/* ══════════════════════════════════════════════
            MOBILE  < 768px — accordions
            ══════════════════════════════════════════════ */}
        <div className="sm:hidden">
          <BrandBlock
            imgSize={54}
            nameSize="text-[19px]"
            descSize="text-[13px]"
          />

          {/* Follow + Call side by side */}
          <div className="mb-6 flex gap-10">
            <div>
              <h4 className="mb-2.5 text-[13px] font-bold">Follow us</h4>
              <SocialIcons />
            </div>
            <div>
              <h4 className="mb-2.5 text-[13px] font-bold">Call us</h4>
              <p className="text-[13px] leading-[1.85] text-[#FFF]">
                +91 81430 90660
                <br />
                +91 97053 23377
              </p>
            </div>
          </div>

          <AccordionSection title="Company">
            <ul className="space-y-3 text-[13px] text-[#FFF]">
              {companyLinks.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Courses">
            <ul className="space-y-3 text-[13px] text-[#FFF]">
              {allCourses.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Services">
            <ul className="space-y-3 text-[13px] text-[#FFF]">
              {services.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Support">
            <ul className="space-y-3 text-[13px] text-[#FFF]">
              {support.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionSection>
        </div>

        {/* ══════════════════════════════════════════════
            SM  640px–767px
            Brand → Follow+Call → 2-col nav grid
            Row 1: Company | Courses
            Row 2: Services | Support
            ══════════════════════════════════════════════ */}
        <div className="hidden sm:block md:hidden">
          <BrandBlock
            imgSize={54}
            nameSize="text-[19px]"
            descSize="text-[13px]"
          />

          {/* Follow + Call */}
          <div className="mb-8 flex gap-12">
            <div>
              <h4 className="mb-2.5 text-[13px] font-bold">Follow us</h4>
              <SocialIcons />
            </div>
            <div>
              <h4 className="mb-2.5 text-[13px] font-bold">Call us</h4>
              <p className="text-[13px] leading-[1.85] text-[#FFF]">
                +91 81430 90660
                <br />
                +91 97053 23377
              </p>
            </div>
          </div>

          {/* Row 1: Company | Courses */}
          <div className="mb-8 grid grid-cols-2 gap-x-6 items-start">
            <div>
              <h3 className="mb-4 text-[15px] font-bold">Company</h3>
              <ul className="space-y-2.5 text-[13px] text-[#FFF]">
                {companyLinks.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[15px] font-bold">Courses</h3>
              <ul className="space-y-2.5 text-[13px] text-[#FFF]">
                {allCourses.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Services | Support */}
          <div className="grid grid-cols-2 gap-x-6 items-start">
            <div>
              <h3 className="mb-4 text-[15px] font-bold">Services</h3>
              <ul className="space-y-2.5 text-[13px] text-[#FFF]">
                {services.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[15px] font-bold">Support</h3>
              <ul className="space-y-2.5 text-[13px] text-[#FFF]">
                {support.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            TABLET  768px–1023px
            Brand full-width → Follow+Call → nav grid
            Nav: 2-row layout
              Row 1: Company | Courses (2-col inside) | Services | Support
            The key fix: use flex instead of fixed-col grid so Courses
            can take as much space as it needs without wrapping.
            ══════════════════════════════════════════════ */}
        <div className="hidden md:block lg:hidden">
          <BrandBlock
            imgSize={58}
            nameSize="text-[21px]"
            descSize="text-[13.5px]"
            maxDesc="max-w-[600px]"
          />

          {/* Follow + Call */}
          <div className="mb-8 flex gap-16">
            <div>
              <h4 className="mb-2.5 text-[13.5px] font-bold">Follow us</h4>
              <SocialIcons />
            </div>
            <div>
              <h4 className="mb-2.5 text-[13.5px] font-bold">Call us</h4>
              <p className="text-[13.5px] leading-[1.85] text-[#FFF]">
                +91 81430 90660
                <br />
                +91 97053 23377
              </p>
            </div>
          </div>

          {/*
            Nav sections — flex row, no wrapping.
            Company and Services/Support have fixed min widths.
            Courses gets all remaining space via flex-1.
          */}
          <div className="flex items-start gap-6">
            {/* Company — fixed width */}
            <div className="w-[140px] shrink-0">
              <h3 className="mb-4 text-[14px] font-bold">Company</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF]">
                {companyLinks.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses — flex-1, single column */}
            <div className="flex-1 min-w-0">
              <h3 className="mb-4 text-[14px] font-bold">Courses</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF]">
                {allCourses.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services — fixed width */}
            <div className="w-[145px] shrink-0">
              <h3 className="mb-4 text-[14px] font-bold">Services</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF]">
                {services.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support — fixed width */}
            <div className="w-[120px] shrink-0">
              <h3 className="mb-4 text-[14px] font-bold">Support</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF]">
                {support.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            DESKTOP  ≥ 1024px — 5-col grid
            Brand | Company | Courses | Services | Support
            Courses: 1-col on lg/xl, 2-col on 2xl
            ══════════════════════════════════════════════ */}
        <div className="hidden lg:block">
          <div
            className="grid items-start gap-x-5
            lg:grid-cols-[minmax(200px,230px)_minmax(95px,115px)_1fr_minmax(130px,155px)_minmax(115px,135px)]
            xl:grid-cols-[minmax(220px,250px)_minmax(100px,120px)_1fr_minmax(140px,160px)_minmax(120px,140px)]
            xl:gap-x-8
            2xl:grid-cols-[minmax(240px,270px)_minmax(110px,130px)_1fr_minmax(150px,170px)_minmax(130px,150px)]
            2xl:gap-x-10
          "
          >
            {/* Brand */}
            <div className="min-w-0">
              <BrandBlock
                imgSize={56}
                nameSize="text-[20px]"
                descSize="text-[12.5px]"
              />
              <div className="mb-4">
                <h4 className="mb-2.5 text-[13px] font-bold">Follow us</h4>
                <SocialIcons />
              </div>
              <div>
                <h4 className="mb-2.5 text-[13px] font-bold">Call us</h4>
                <p className="text-[12.5px] leading-[1.85] text-[#FFF]">
                  +91 81430 90660
                  <br />
                  +91 97053 23377
                </p>
              </div>
            </div>

            {/* Company */}
            <div className="min-w-0">
              <h3 className="mb-4 text-[14px] font-bold">Company</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF] xl:text-[13px]">
                {companyLinks.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="min-w-0">
              <h3 className="mb-4 text-[14px] font-bold">Courses</h3>
              {/* lg only → single merged list */}
              <ul className="xl:hidden space-y-[7px] text-[11.5px] text-[#FFF]">
                {allCourses.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* xl and above → 2 columns */}
              <div className="hidden xl:grid grid-cols-2 gap-x-6 text-[12px] text-[#FFF] 2xl:text-[13px] 2xl:gap-x-8">
                <ul className="space-y-2.5">
                  {coursesCol1.map((item, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:text-white transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2.5">
                  {coursesCol2.map((item, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:text-white transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="min-w-0">
              <h3 className="mb-4 text-[14px] font-bold">Services</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF] xl:text-[13px]">
                {services.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-0">
              <h3 className="mb-4 text-[14px] font-bold">Support</h3>
              <ul className="space-y-2.5 text-[12.5px] text-[#FFF] xl:text-[13px]">
                {support.map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-10 border-t border-white/20 py-4">
          <div className="mx-auto flex flex-col items-center gap-2 text-center text-[12.5px] text-[#FFF] sm:flex-row sm:justify-center sm:gap-8 lg:gap-16 xl:gap-34 2xl:gap-44">
            <div className="flex items-center gap-1.5">
              <FaRegCopyright className="flex-shrink-0 text-[11px]" />
              <span>2026 Career Bridge All Rights Reserved.</span>
            </div>

            <span>
              Developed by{" "}
              <a
                href="#"
                className="font-semibold text-[#FFF] underline underline-offset-2 hover:opacity-90"
              >
                Hanvitec Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}