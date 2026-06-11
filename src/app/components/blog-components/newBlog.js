// "use client";
// import { useState } from "react";
// import { Manrope, Poppins } from "next/font/google";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
//   variable: "--font-poppins",
// });

// // ── Mock Data ──────────────────────────────────────────────────────────────────
// const CATEGORIES = [
//   "All Category",
//   "Career Advice",
//   "Layoffs & Workforce Trends",
//   "Salary & Compensation",
//   "Projects & Portfolios",
//   "Courses",
// ];

// const BLOG_POSTS = [
//   {
//     id: 1,
//     category: "Career Advice",
//     title: "How to Choose the Right Tech Career Path at 22",
//     excerpt:
//       "Dive deep into the world of React Hooks and discover how to effectively manage state in your applications, leading to cleaner, more maintainable code.",
//     image: "/Blog/ArtificialIntelligence.png",
//     date: "Oct 14, 2025",
//     tag: "Career Advice",
//     tagColor: "text-[#2E4378]",
//   },
//   {
//     id: 2,
//     category: "Layoffs & Workforce Trends",
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     excerpt:
//       "In an increasingly digital world, protecting your online presence is paramount. Learn practical tips and best practices for enhancing your digital security posture.",
//     image: "/Blog/DataScience-Questions.png",
//     date: "Oct 14, 2025",
//     tag: "Courses",
//     tagColor: "text-[#FF9000]",
//   },
//   {
//     id: 3,
//     category: "Salary & Compensation",
//     title: "How to Negotiate a 15% Pay Rise Without Burning Bridges",
//     excerpt:
//       "Boost your career by mastering effective communication skills. This blog post explores various techniques for clear, concise, and persuasive communication.",
//     image: "/Blog/softwareTesting-remaining.png",
//     date: "Oct 14, 2025",
//     tag: "Salary",
//     tagColor: "text-green-500",
//   },
//   {
//     id: 4,
//     category: "Projects & Portfolios",
//     title: "Building a Portfolio That Wins Junior Dev Roles – 5 Projects",
//     excerpt:
//       "Unlock the secrets of Search Engine Optimisation to rank for small businesses. This guide provides actionable strategies to improve your website's visibility.",
//     image: "/Blog/SoftwareTesting-remaining.png",
//     date: "Oct 14, 2025",
//     tag: "Projects",
//     tagColor: "text-[#E05C8A]",
//   },
// ];

// const RECENT_TRENDING = [
//   {
//     id: 1,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/ArtificialIntelligence.png",
//   },
//   {
//     id: 2,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/DataScience-Questions.png",
//   },
//   {
//     id: 3,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/softwareTesting-remaining.png",
//   },
//   {
//     id: 4,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/SoftwareTesting-remaining.png",
//   },
// ];

// // ── SideCard ───────────────────────────────────────────────────────────────────
// function SideCard({ item }) {
//   return (
//     <div className="flex items-center gap-4 p-[10px] rounded-lg bg-[#FFEDED] cursor-pointer hover:brightness-95 transition-all duration-200 shrink-0">
//       {/* Image: 115×81 */}
//       <div className="shrink-0 w-[115px] h-[81px] rounded-lg overflow-hidden border-0">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Text */}
//       <div className="flex flex-col flex-1 min-w-0">
//         <p className="line-clamp-2 text-[#1A1A1A] text-base font-medium leading-[25px] self-stretch">
//           {item.title}
//         </p>
//         <p className="text-[#1A1A1A] text-[10px] font-normal leading-[25px] h-[21px] self-stretch">
//           {item.date}
//         </p>
//         <span
//           className={`text-sm font-medium leading-[25px] text-center ${item.tagColor}`}
//         >
//           {item.tag}
//         </span>
//       </div>
//     </div>
//   );
// }

// // ── BlogCard (desktop) ─────────────────────────────────────────────────────────
// function BlogCard({ post }) {
//   return (
//     <div className="inline-flex items-center gap-[25px] p-[10px] rounded-lg bg-[#FFEDED] w-full">
//       {/* Image: 308×203 */}
//       <div className="relative shrink-0 w-[308px] min-w-[308px] h-[203px] rounded-lg overflow-hidden">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-full object-cover"
//         />
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//         {/* Category badge — top-left, Poppins */}
//         <span
//           className="absolute top-2 left-2 text-white text-xs font-semibold leading-5"
//           style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
//         >
//           {post.category}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 min-w-0 gap-[10px]">
//         <h3 className="line-clamp-3 w-full max-w-[326px] text-[#1A1A1A] text-xl font-semibold leading-[25px]">
//           {post.title}
//         </h3>
//         <p className="line-clamp-3 w-full max-w-[326px] text-[#383838] text-sm font-medium leading-5">
//           {post.excerpt}
//         </p>
//         <button className="w-full flex justify-center items-center py-[9px] rounded-md border border-[#E4202C] bg-transparent text-[#E4202C] text-lg font-semibold leading-[22px] text-center hover:bg-[#E4202C] hover:text-white transition-colors duration-200 cursor-pointer">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// }

// // ── BlogCard (mobile/tablet) ───────────────────────────────────────────────────
// function BlogCardMobile({ post }) {
//   return (
//     <div className="flex flex-col gap-3 p-[10px] rounded-lg bg-[#FFEDED] overflow-hidden">
//       <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//         <span
//           className="absolute top-2 left-2 text-white text-xs font-semibold leading-5"
//           style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
//         >
//           {post.category}
//         </span>
//       </div>
//       <h3 className="text-[#1A1A1A] text-lg font-semibold leading-[25px]">
//         {post.title}
//       </h3>
//       <p className="text-[#383838] text-sm font-medium leading-5">
//         {post.excerpt}
//       </p>
//       <button className="w-full flex justify-center items-center py-[9px] rounded-md border border-[#E4202C] bg-transparent text-[#E4202C] text-base font-semibold leading-[22px] hover:bg-[#E4202C] hover:text-white transition-colors duration-200 cursor-pointer">
//         View More
//       </button>
//     </div>
//   );
// }

// // ── SidebarPanel ───────────────────────────────────────────────────────────────
// function SidebarPanel({ title, items }) {
//   return (
//     <div className="flex flex-col w-full max-w-[477px] p-[10px] gap-[17px] rounded-2xl bg-[#FFD0D0]">
//       {/* Heading */}
//       <h2 className="self-stretch text-[#2E4378] text-2xl font-bold leading-[25px]">
//         {title}
//       </h2>
//       {/* Cards */}
//       <div className="flex flex-col gap-[17px]">
//         {items.map((item) => (
//           <SideCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Main Page ──────────────────────────────────────────────────────────────────
// export default function BlogPage() {
//   const [activeCategory, setActiveCategory] = useState("All Category");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const filtered =
//     activeCategory === "All Category"
//       ? BLOG_POSTS
//       : BLOG_POSTS.filter((p) => p.category === activeCategory);

//   return (
//     <div
//       className={`${manrope.className} ${poppins.variable} w-full max-w-[1440px] mx-auto min-h-[2006px] bg-[#FFFBFC] flex flex-col`}
//     >
//       <div className="w-full px-4 sm:px-6 xl:px-10 py-8 sm:py-10 flex flex-col flex-1">
//         {/* ── Heading + Dropdown — static, never scrolls ── */}
//         <div className="relative flex flex-col items-center mb-6 shrink-0">
//           {/* Heading */}
//           <h1 className="text-center leading-[40px]">
//             <span className="text-[#1A1A1A] text-[clamp(22px,3vw,32px)] font-extrabold leading-[40px]">
//               Latest{" "}
//             </span>
//             <span className="text-[#2E4378] text-[clamp(22px,3vw,32px)] font-semibold leading-[40px]">
//               Blog Posts
//             </span>
//           </h1>

//           {/* SVG swoosh underline */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 294 25"
//             fill="none"
//             className="mt-1 w-[160px] sm:w-[220px] md:w-[294px]"
//           >
//             <path
//               d="M294 25C128.871 -18.9735 29.1963 4.91407 0 22.3545C126.97 -11.7426 248.508 19.4151 260.051 21.4727L294 25Z"
//               fill="#7D6CE2"
//             />
//           </svg>

//           {/* Dropdown — absolutely right, vertically centred with heading */}
//           <div className="absolute right-0 top-[10px]">
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen((p) => !p)}
//                 className="flex items-center gap-2 bg-[#2E4378] hover:bg-[#243660] text-white text-[13px] font-semibold px-4 py-2 rounded-xl shadow-md transition-colors cursor-pointer border-0"
//               >
//                 {activeCategory === "All Category" ? "Courses" : activeCategory}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-20">
//                   {CATEGORIES.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => {
//                         setActiveCategory(cat);
//                         setDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-pink-50 transition-colors cursor-pointer border-0 block
//                         ${activeCategory === cat ? "font-bold text-[#2E4378] bg-blue-50" : "font-medium text-gray-700 bg-transparent"}`}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ── Main Grid ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_477px] gap-6 flex-1">
//           {/* Left: Blog Cards */}
//           <div className="flex flex-col gap-5">
//             {filtered.length > 0 ? (
//               filtered.map((post) => (
//                 <div key={post.id}>
//                   <div className="hidden lg:block">
//                     <BlogCard post={post} />
//                   </div>
//                   <div className="block lg:hidden">
//                     <BlogCardMobile post={post} />
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex items-center justify-center h-40 rounded-2xl bg-[#FFEDED] text-gray-400 text-sm">
//                 No posts in this category.
//               </div>
//             )}
//           </div>

//           {/* Right: Sidebar — two panels stacked */}
//           <div className="flex flex-col gap-5 w-full sm:flex-row lg:flex-col">
//             <SidebarPanel title="Most Recent Blogs" items={RECENT_TRENDING} />
//             <SidebarPanel title="Trending Blogs" items={RECENT_TRENDING} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// // ── Mock Data ──────────────────────────────────────────────────────────────────
// const CATEGORIES = [
//   "All Category",
//   "Career Advice",
//   "Layoffs & Workforce Trends",
//   "Salary & Compensation",
//   "Projects & Portfolios",
//   "Courses",
// ];

// const BLOG_POSTS = [
//   {
//     id: 1,
//     category: "Career Advice",
//     title: "How to Choose the Right Tech Career Path at 22",
//     excerpt:
//       "Dive deep into the world of React Hooks and discover how to effectively manage state in your applications, leading to cleaner, more maintainable code.",
//     image: "/Blog/ArtificialIntelligence.png",
//     date: "Oct 14, 2025",
//     tag: "Career Advice",
//     tagColor: "text-[#2E4378]",
//   },
//   {
//     id: 2,
//     category: "Layoffs & Workforce Trends",
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     excerpt:
//       "In an increasingly digital world, protecting your online presence is paramount. Learn practical tips and best practices for enhancing your digital security posture.",
//     image: "/Blog/DataScience-Questions.png",
//     date: "Oct 14, 2025",
//     tag: "Courses",
//     tagColor: "text-[#FF9000]",
//   },
//   {
//     id: 3,
//     category: "Salary & Compensation",
//     title: "How to Negotiate a 15% Pay Rise Without Burning Bridges",
//     excerpt:
//       "Boost your career by mastering effective communication skills. This blog post explores various techniques for clear, concise, and persuasive communication.",
//     image: "/Blog/softwareTesting-remaining.png",
//     date: "Oct 14, 2025",
//     tag: "Salary",
//     tagColor: "text-green-500",
//   },
//   {
//     id: 4,
//     category: "Projects & Portfolios",
//     title: "Building a Portfolio That Wins Junior Dev Roles – 5 Projects",
//     excerpt:
//       "Unlock the secrets of Search Engine Optimisation to rank for small businesses. This guide provides actionable strategies to improve your website's visibility.",
//     image: "/Blog/SoftwareTesting-remaining.png",
//     date: "Oct 14, 2025",
//     tag: "Projects",
//     tagColor: "text-[#E05C8A]",
//   },
// ];

// const RECENT_TRENDING = [
//   {
//     id: 1,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/Lock Image.png",
//   },
//   {
//     id: 2,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/Lock Image.png",
//   },
//   {
//     id: 3,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/Lock Image.png",
//   },
//   {
//     id: 4,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     tagColor: "text-[#FF9000]",
//     image: "/Blog/Lock Image.png",
//   },
// ];

// // ── SideCard ───────────────────────────────────────────────────────────────────
// function SideCard({ item }) {
//   return (
//     <div className="flex items-center gap-[10px] p-[10px] rounded-lg bg-[#FFEDED] cursor-pointer hover:brightness-95 transition-all duration-200">
//       {/* Image: 115×81 */}
//       <div className="shrink-0 w-[115px] h-[81px] rounded-lg overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       {/* Text */}
//       <div className="flex flex-col flex-1 min-w-0 gap-[2px]">
//         <p className="line-clamp-2 text-[#1A1A1A] text-[15px] font-medium leading-[22px]">
//           {item.title}
//         </p>
//         <p className="text-[#1A1A1A] text-[10px] font-normal leading-[18px]">
//           {item.date}
//         </p>
//         <button className="flex items-center justify-center w-[69px] h-[22px] px-[10px] rounded-[8px] bg-[#FFE4AF] text-[#FF9000] text-center font-[Manrope] text-[14px] font-medium leading-[25px] shrink-0">
//           {item.tag}
//         </button>
//       </div>
//     </div>
//   );
// }

// // ── BlogCard — 1536px: card 892×232, image 430×200, content 414×200 ───────────
// function BlogCard({ post }) {
//   return (
//     <div className="flex flex-col rounded-xl bg-[#FFEDED] w-full overflow-hidden">
//       {/* Top row: image + content side by side */}
//       <div className="flex items-stretch gap-0 p-[16px] pb-[12px]">
//         {/* Image block — shrink-0 so it never squishes */}
//         <div
//           className="relative shrink-0 rounded-xl overflow-hidden mr-[16px]"
//           style={{ width: "clamp(240px, 46%, 430px)", height: "200px" }}
//         >
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-full object-cover"
//           />
//           {/* gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//           {/* category badge */}
//           <span className="absolute top-[5px] left-[10px] text-white text-[11px] font-bold leading-[18px] bg-[#2E4378] backdrop-blur-sm px-[8px] py-[3px] rounded-md">
//             {post.category}
//           </span>
//         </div>

//         {/* Content block — fills remaining width */}
//         <div
//           className="flex flex-col justify-between flex-1 min-w-0"
//           style={{ height: "200px" }}
//         >
//           <div className="flex flex-col gap-[20px]">
//             <h3 className="line-clamp-2 text-[#1A1A1A] font-semibold leading-[26px] text-[clamp(20px,1.3vw,24px)]">
//               {post.title}
//             </h3>
//             <p className="line-clamp-3 text-[#383838] font-medium leading-[20px] text-[clamp(16px,1vw,18px)]">
//               {post.excerpt}
//             </p>
//           </div>
//           {/* CTA — sits at bottom of content column */}
//           <button className="w-full flex justify-center items-center py-[9px] rounded-md border border-[#E4202C] bg-transparent text-[#E4202C] text-[clamp(18px,1.1vw,20px)] font-semibold leading-[22px] hover:bg-[#E4202C] hover:text-white transition-colors duration-200 cursor-pointer">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── BlogCard Mobile ────────────────────────────────────────────────────────────
// function BlogCardMobile({ post }) {
//   return (
//     <div className="flex flex-col gap-[12px] p-[10px] rounded-xl bg-[#FFEDED]">
//       <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//         <span className="absolute top-[10px] left-[10px] text-white text-[11px] font-bold bg-black/30 backdrop-blur-[2px] px-[8px] py-[3px] rounded-md">
//           {post.category}
//         </span>
//       </div>
//       <h3 className="text-[#1A1A1A] text-[17px] font-semibold leading-[24px] line-clamp-2">
//         {post.title}
//       </h3>
//       <p className="text-[#383838] text-[13px] font-medium leading-[20px] line-clamp-3">
//         {post.excerpt}
//       </p>
//       <button className="w-full flex justify-center items-center py-[9px] rounded-md border border-[#E4202C] bg-transparent text-[#E4202C] text-[15px] font-semibold hover:bg-[#E4202C] hover:text-white transition-colors duration-200 cursor-pointer">
//         View More
//       </button>
//     </div>
//   );
// }

// // ── SidebarPanel ───────────────────────────────────────────────────────────────
// function SidebarPanel({ title, items }) {
//   return (
//     <div className="flex flex-col w-full p-[14px] gap-[14px] rounded-2xl bg-[#FFD0D0]">
//       <h2 className="text-[#2E4378] text-[22px] font-bold leading-[28px]">
//         {title}
//       </h2>
//       <div className="flex flex-col gap-[12px]">
//         {items.map((item) => (
//           <SideCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Main Page ──────────────────────────────────────────────────────────────────
// export default function BlogPage() {
//   const [activeCategory, setActiveCategory] = useState("All Category");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const filtered =
//     activeCategory === "All Category"
//       ? BLOG_POSTS
//       : BLOG_POSTS.filter((p) => p.category === activeCategory);

//   return (
//     <div
//       className="
//         w-full max-w-[1536px] mx-auto bg-[#FFFBFC]
//         font-[Manrope,sans-serif]
//       "
//       style={{ fontFamily: "'Manrope', sans-serif" }}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 sm:py-10">
//         {/* ── Heading + Dropdown ── */}
//         <div className="relative flex flex-col items-center mb-8">
//           <h1 className="text-center">
//             <span className="text-[#1A1A1A] font-extrabold leading-[44px] text-[clamp(24px,2.5vw,36px)]">
//               Latest{" "}
//             </span>
//             <span className="text-[#2E4378] font-semibold leading-[44px] text-[clamp(24px,2.5vw,36px)]">
//               Blog Posts
//             </span>
//           </h1>

//           {/* Swoosh underline */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 294 25"
//             fill="none"
//             className="mt-1 w-[clamp(140px,18vw,294px)]"
//           >
//             <path
//               d="M294 25C128.871 -18.9735 29.1963 4.91407 0 22.3545C126.97 -11.7426 248.508 19.4151 260.051 21.4727L294 25Z"
//               fill="#7D6CE2"
//             />
//           </svg>

//           {/* Dropdown */}
//           <div className="absolute right-0 top-[8px]">
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen((p) => !p)}
//                 className="
//                   flex items-center gap-2
//                   bg-[#2E4378] hover:bg-[#243660]
//                   text-white text-[13px] font-semibold
//                   px-4 py-[9px] rounded-xl shadow-md
//                   transition-colors cursor-pointer border-0
//                 "
//               >
//                 {activeCategory === "All Category" ? "Courses" : activeCategory}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-30">
//                   {CATEGORIES.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => {
//                         setActiveCategory(cat);
//                         setDropdownOpen(false);
//                       }}
//                       className={`
//                         w-full text-left px-4 py-[10px] text-[13px]
//                         hover:bg-pink-50 transition-colors cursor-pointer border-0 block
//                         ${
//                           activeCategory === cat
//                             ? "font-bold text-[#2E4378] bg-blue-50"
//                             : "font-medium text-gray-700 bg-transparent"
//                         }
//                       `}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ── Main Grid ── */}
//         {/*
//           Breakpoints:
//           - mobile (<768px): single column, mobile cards
//           - tablet (768–1023px): single col, desktop card layout (stacked)
//           - lg (1024–1279px): 2-col grid
//           - xl+ (1280px+): 2-col grid with sidebar fixed at ~477px
//           - 2xl (1536px): card 892px, sidebar 477px
//         */}
//         <div
//           className="
//             grid grid-cols-1
//             lg:grid-cols-[1fr_420px]
//             xl:grid-cols-[1fr_450px]
//             2xl:grid-cols-[1fr_477px]
//             gap-5 lg:gap-6
//           "
//         >
//           {/* ── Left: Blog Cards ── */}
//           <div className="flex flex-col gap-[16px]">
//             {filtered.length > 0 ? (
//               filtered.map((post) => (
//                 <div key={post.id}>
//                   {/* Desktop card: shown at lg+ */}
//                   <div className="hidden lg:block">
//                     <BlogCard post={post} />
//                   </div>
//                   {/* Mobile/tablet card */}
//                   <div className="block lg:hidden">
//                     <BlogCardMobile post={post} />
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex items-center justify-center h-40 rounded-2xl bg-[#FFEDED] text-gray-400 text-sm">
//                 No posts in this category.
//               </div>
//             )}
//           </div>

//           {/* ── Right: Sidebar ── */}
//           {/*
//             Mobile/tablet: two panels side by side (sm:flex-row)
//             lg+: stacked vertically
//           */}
//           <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
//             <div className="flex-1 lg:flex-none">
//               <SidebarPanel title="Most Recent Blogs" items={RECENT_TRENDING} />
//             </div>
//             <div className="flex-1 lg:flex-none">
//               <SidebarPanel title="Trending Blogs" items={RECENT_TRENDING} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Manrope } from "next/font/google";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

// // ── Mock Data ──────────────────────────────────────────────────────────────────
// const CATEGORIES = [
//   "All Category",
//   "Career Advice",
//   "Layoffs & Workforce Trends",
//   "Salary & Compensation",
//   "Projects & Portfolios",
//   "Courses",
// ];

// const BLOG_POSTS = [
//   {
//     id: 1,
//     category: "Career Advice",
//     title: "How to Choose the Right Tech Career Path at 22",
//     excerpt:
//       "Dive deep into the world of React Hooks and discover how to effectively manage state in your applications, leading to cleaner, more maintainable code.",
//     image: "/Blog/ArtificialIntelligence.png",
//     date: "Oct 14, 2025",
//     tag: "Career Advice",
//   },
//   {
//     id: 2,
//     category: "Layoffs & Workforce Trends",
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     excerpt:
//       "In an increasingly digital world, protecting your online presence is paramount. Learn practical tips and best practices for enhancing your digital security posture.",
//     image: "/Blog/ArtificialIntelligence.png",
//     date: "Oct 14, 2025",
//     tag: "Courses",
//   },
//   {
//     id: 3,
//     category: "Salary & Compensation",
//     title: "How to Negotiate a 15% Pay Rise Without Burning Bridges",
//     excerpt:
//       "Boost your career by mastering effective communication skills. This blog post explores various techniques for clear, concise, and persuasive communication.",
//     image: "/Blog/softwareTesting-remaining.png",
//     date: "Oct 14, 2025",
//     tag: "Salary",
//   },
//   {
//     id: 4,
//     category: "Projects & Portfolios",
//     title: "Building a Portfolio That Wins Junior Dev Roles – 5 Projects",
//     excerpt:
//       "Unlock the secrets of Search Engine Optimisation to rank for small businesses. This guide provides actionable strategies to improve your website's visibility.",
//     image: "/Blog/SoftwareTesting-remaining.png",
//     date: "Oct 14, 2025",
//     tag: "Projects",
//   },
// ];

// const RECENT_TRENDING = [
//   {
//     id: 1,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     image: "/Blog/Lock Image.png",
//   },
//   {
//     id: 2,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     image: "/Blog/Lock Image.png",
//   },
//   {
//     id: 3,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     image: "/Blog/Lock Image.png",
//   },
//   {
//     id: 4,
//     title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
//     date: "Dec 14, 2025",
//     tag: "Course",
//     image: "/Blog/Lock Image.png",
//   },
// ];

// // ── SideCard ───────────────────────────────────────────────────────────────────
// function SideCard({ item }) {
//   return (
//     <div className="flex items-center gap-[10px] rounded-lg bg-[#FFEDED] p-[10px] transition-all duration-200 hover:brightness-95 cursor-pointer">
//       <div className="h-[70px] w-[95px] shrink-0 overflow-hidden rounded-lg sm:h-[76px] sm:w-[105px] md:h-[81px] md:w-[115px] xl:h-[88px] xl:w-[125px] 3xl:h-[96px] 3xl:w-[135px] 4xl:h-[104px] 4xl:w-[145px]">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
//         <p className="line-clamp-2 text-[15px] font-medium leading-[22px] text-[#1A1A1A] xl:text-[16px] 3xl:text-[17px] 4xl:text-[18px]">
//           {item.title}
//         </p>

//         <p className="text-[10px] font-normal leading-[18px] text-[#1A1A1A] xl:text-[11px] 3xl:text-[12px]">
//           {item.date}
//         </p>

//         <button className="flex h-[22px] w-[69px] shrink-0 items-center justify-center rounded-[8px] bg-[#FFE4AF] px-[10px] text-center text-[14px] font-medium leading-[25px] text-[#FF9000] cursor-pointer 3xl:h-[24px] 3xl:w-[76px] 3xl:text-[15px] 4xl:h-[26px] 4xl:w-[82px] 4xl:text-[16px]">
//           {item.tag}
//         </button>
//       </div>
//     </div>
//   );
// }

// // ── BlogCard ───────────────────────────────────────────────────────────────────
// function BlogCard({ post }) {
//   return (
//     <div className="w-full overflow-hidden rounded-xl bg-[#FFEDED]">
//       <div className="flex items-stretch p-[16px] pb-[12px] 3xl:p-[20px] 4xl:p-[24px]">
//         <div className="relative mr-[12px] h-[160px] w-[36%] shrink-0 overflow-hidden rounded-xl lg:mr-[14px] lg:h-[170px] lg:w-[46%] xl:mr-[16px] xl:h-[200px] xl:w-[42%] 2xl:w-[480px] 3xl:h-[230px] 3xl:w-[460px] 4xl:h-[260px] 4xl:w-[500px]">
//           <img
//             src={post.image}
//             alt={post.title}
//             className="h-full w-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
//           <span className="absolute left-[10px] top-[5px] rounded-md bg-[#2E4378] px-[8px] py-[3px] text-[11px] font-bold leading-[18px] text-white backdrop-blur-sm 3xl:text-[12px] 4xl:text-[13px]">
//             {post.category}
//           </span>
//         </div>

//         <div className="flex h-[170px] min-w-0 flex-1 flex-col justify-between lg:h-[170px] xl:h-[200px] 3xl:h-[230px] 4xl:h-[260px]">
//           <div className="flex flex-col gap-[12px] lg:gap-[10px] xl:gap-[20px] 3xl:gap-[24px]">
//             <h3 className="line-clamp-2 text-[16px] font-semibold leading-[22px] text-[#1A1A1A] lg:text-[17px] lg:leading-[24px] xl:text-[clamp(20px,1.3vw,24px)] xl:leading-[26px] 3xl:text-[26px] 3xl:leading-[32px] 4xl:text-[28px] 4xl:leading-[36px]">
//               {post.title}
//             </h3>

//             <p className="line-clamp-2 text-[13px] font-medium leading-[18px] text-[#383838] lg:text-[13px] lg:leading-[19px] xl:line-clamp-3 xl:text-[clamp(16px,1vw,18px)] xl:leading-[20px] 3xl:text-[20px] 3xl:leading-[24px] 4xl:text-[22px] 4xl:leading-[28px]">
//               {post.excerpt}
//             </p>
//           </div>

//           <button className="flex w-full cursor-pointer items-center justify-center rounded-md border border-[#E4202C] bg-transparent py-[7px] text-[14px] font-semibold leading-[20px] text-[#E4202C] transition-colors duration-200 hover:bg-[#E4202C] hover:text-white lg:py-[7px] lg:text-[14px] xl:py-[9px] xl:text-[clamp(18px,1.1vw,20px)] xl:leading-[22px] 3xl:py-[11px] 3xl:text-[22px] 4xl:py-[13px] 4xl:text-[24px]">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── BlogCard Mobile ────────────────────────────────────────────────────────────
// function BlogCardMobile({ post }) {
//   return (
//     <div className="flex flex-col gap-[12px] rounded-xl bg-[#FFEDED] p-[10px] xs:p-[12px] sm:p-[14px]">
//       <div className="relative h-[180px] w-full overflow-hidden rounded-xl xs:h-[195px] sm:h-[210px] md:h-[300px]">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

//         <span className="absolute left-[10px] top-[10px] rounded-md bg-[#2E4378] px-[8px] py-[3px] text-[11px] font-bold text-white backdrop-blur-[2px]">
//           {post.category}
//         </span>
//       </div>

//       <h3 className="line-clamp-2 text-[17px] font-semibold leading-[28px] text-[#1A1A1A] sm:text-[19px] md:text-[21px]">
//         {post.title}
//       </h3>

//       <p className="line-clamp-3 text-[13px] font-medium leading-[22px] text-[#383838] sm:text-[14px] md:text-[15px]">
//         {post.excerpt}
//       </p>

//       <button className="flex w-full cursor-pointer items-center justify-center rounded-md border border-[#E4202C] bg-transparent py-[9px] text-[15px] font-semibold text-[#E4202C] transition-colors duration-200 hover:bg-[#E4202C] hover:text-white sm:py-[10px] sm:text-[16px] md:text-[17px]">
//         View More
//       </button>
//     </div>
//   );
// }

// // ── SidebarPanel ───────────────────────────────────────────────────────────────
// function SidebarPanel({ title, items }) {
//   return (
//     <div className="flex h-full min-h-0 w-full flex-col gap-[14px] overflow-hidden rounded-2xl bg-[#FFD0D0] p-[14px] 3xl:gap-[16px] 3xl:p-[18px] 4xl:gap-[18px] 4xl:p-[22px]">
//       <h2 className="text-[22px] font-bold leading-[28px] text-[#2E4378] 3xl:text-[26px] 3xl:leading-[32px] 4xl:text-[30px] 4xl:leading-[36px]">
//         {title}
//       </h2>

//       {/* Scrollable content */}
//       <div className="min-h-0 flex-1 overflow-y-auto pr-1 flex flex-col gap-[12px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 3xl:gap-[14px] 4xl:gap-[16px]">
//         {items.map((item) => (
//           <SideCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Main Page ──────────────────────────────────────────────────────────────────
// export default function BlogPage() {
//   const [activeCategory, setActiveCategory] = useState("All Category");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const filtered =
//     activeCategory === "All Category"
//       ? BLOG_POSTS
//       : BLOG_POSTS.filter((p) => p.category === activeCategory);

//   return (
//     <div className={`${manrope.className} mx-auto h-screen w-full max-w-[1536px] overflow-hidden bg-[#FFFBFC] 3xl:max-w-[1920px] 4xl:max-w-[2560px]`}>
//       <div className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 3xl:py-12 4xl:px-24 4xl:py-16">
//         {/* ── Header ── */}
//         <div className="relative mb-8 flex flex-col items-center 3xl:mb-10 4xl:mb-12">
//           <h1 className="text-center">
//             <span className="text-[clamp(24px,2.5vw,36px)] font-extrabold leading-[44px] text-[#1A1A1A] 3xl:text-[42px] 3xl:leading-[52px] 4xl:text-[52px] 4xl:leading-[64px]">
//               Latest{" "}
//             </span>

//             <span className="text-[clamp(24px,2.5vw,36px)] font-semibold leading-[44px] text-[#2E4378] 3xl:text-[42px] 3xl:leading-[52px] 4xl:text-[52px] 4xl:leading-[64px]">
//               Blog Posts
//             </span>
//           </h1>

//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 294 25"
//             fill="none"
//             className="mt-1 w-[clamp(140px,18vw,294px)] 3xl:w-[360px] 4xl:w-[440px]"
//           >
//             <path
//               d="M294 25C128.871 -18.9735 29.1963 4.91407 0 22.3545C126.97 -11.7426 248.508 19.4151 260.051 21.4727L294 25Z"
//               fill="#7D6CE2"
//             />
//           </svg>

//           {/* ── Dropdown ── */}
//           <div className="absolute right-0 top-[8px]">
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen((p) => !p)}
//                 className="flex cursor-pointer items-center gap-2 rounded-xl border-0 bg-[#2E4378] px-4 py-[9px] text-[13px] font-semibold text-white shadow-md transition-colors hover:bg-[#243660] sm:text-[14px] 3xl:px-5 3xl:py-[11px] 3xl:text-[16px] 4xl:px-6 4xl:py-[13px] 4xl:text-[18px]"
//               >
//                 {activeCategory === "All Category" ? "Courses" : activeCategory}

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-4 w-4 transition-transform 4xl:h-5 4xl:w-5 ${dropdownOpen ? "rotate-180" : ""}`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl 3xl:w-64 4xl:w-72">
//                   {CATEGORIES.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => {
//                         setActiveCategory(cat);
//                         setDropdownOpen(false);
//                       }}
//                       className={`block w-full cursor-pointer border-0 px-4 py-[10px] text-left text-[13px] transition-colors hover:bg-pink-50 3xl:py-[12px] 3xl:text-[15px] 4xl:py-[14px] 4xl:text-[16px] ${
//                         activeCategory === cat
//                           ? "bg-blue-50 font-bold text-[#2E4378]"
//                           : "bg-transparent font-medium text-gray-700"
//                       }`}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ── Main Grid ── */}
//           <div className="grid h-[calc(100vh-170px)] grid-cols-1 gap-5 overflow-hidden lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_420px] 2xl:grid-cols-[minmax(0,1fr)_450px] 3xl:grid-cols-[minmax(0,1fr)_500px] 4xl:grid-cols-[minmax(0,1fr)_560px]">   
//                    {/* ── Blog List ── */}
//           <div className="min-h-0 overflow-y-auto pr-2 flex flex-col gap-[16px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 3xl:gap-[20px] 4xl:gap-[24px]">
//             {filtered.length > 0 ? (
//               filtered.map((post) => (
//                 <div key={post.id}>
//                   <div className="hidden lg:block">
//                     <BlogCard post={post} />
//                   </div>

//                   <div className="block lg:hidden">
//                     <BlogCardMobile post={post} />
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex h-40 items-center justify-center rounded-2xl bg-[#FFEDED] text-sm text-gray-400 3xl:h-52 4xl:h-64 3xl:text-base 4xl:text-lg">
//                 No posts in this category.
//               </div>
//             )}
//           </div>

//           {/* ── Sidebar ── */}
//           <div className="min-h-0 h-full overflow-hidden flex flex-col">
//            <div className="h-full min-h-[260px] overflow-hidden sm:min-h-[320px] md:min-h-[420px] lg:min-h-0">
//               <SidebarPanel title="Most Recent Blogs" items={RECENT_TRENDING} />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// ── Mock Data ──────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All Category",
  "Career Advice",
  "Layoffs & Workforce Trends",
  "Salary & Compensation",
  "Projects & Portfolios",
  "Courses",
];

const BLOG_POSTS = [
  {
    id: 1,
    category: "Career Advice",
    title: "How to Choose the Right Tech Career Path at 22",
    excerpt:
      "Dive deep into the world of React Hooks and discover how to effectively manage state in your applications, leading to cleaner, more maintainable code.",
    image: "/Blog/ArtificialIntelligence.png",
    date: "Oct 14, 2025",
    tag: "Career Advice",
  },
  {
    id: 2,
    category: "Layoffs & Workforce Trends",
    title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
    excerpt:
      "In an increasingly digital world, protecting your online presence is paramount. Learn practical tips and best practices for enhancing your digital security posture.",
    image: "/Blog/ArtificialIntelligence.png",
    date: "Oct 14, 2025",
    tag: "Courses",
  },
  {
    id: 3,
    category: "Salary & Compensation",
    title: "How to Negotiate a 15% Pay Rise Without Burning Bridges",
    excerpt:
      "Boost your career by mastering effective communication skills. This blog post explores various techniques for clear, concise, and persuasive communication.",
    image: "/Blog/softwareTesting-remaining.png",
    date: "Oct 14, 2025",
    tag: "Salary",
  },
  {
    id: 4,
    category: "Projects & Portfolios",
    title: "Building a Portfolio That Wins Junior Dev Roles – 5 Projects",
    excerpt:
      "Unlock the secrets of Search Engine Optimisation to rank for small businesses. This guide provides actionable strategies to improve your website's visibility.",
    image: "/Blog/SoftwareTesting-remaining.png",
    date: "Oct 14, 2025",
    tag: "Projects",
  },
];

const RECENT_TRENDING = [
  {
    id: 1,
    title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
    date: "Dec 14, 2025",
    tag: "Course",
    image: "/Blog/Lock Image.png",
  },
  {
    id: 2,
    title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
    date: "Dec 14, 2025",
    tag: "Course",
    image: "/Blog/Lock Image.png",
  },
  {
    id: 3,
    title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
    date: "Dec 14, 2025",
    tag: "Course",
    image: "/Blog/Lock Image.png",
  },
  {
    id: 4,
    title: "What to Do After a Layoff: Rebuild, Re-skill, Rebound",
    date: "Dec 14, 2025",
    tag: "Course",
    image: "/Blog/Lock Image.png",
  },
];

// ── SideCard ───────────────────────────────────────────────────────────────────
function SideCard({ item }) {
  return (
    <div className="flex items-center gap-[10px] rounded-lg bg-[#FFEDED] p-[10px] transition-all duration-200 hover:brightness-95 cursor-pointer shrink-0">
      <div className="h-[70px] w-[95px] shrink-0 overflow-hidden rounded-lg sm:h-[76px] sm:w-[105px] md:h-[81px] md:w-[115px] xl:h-[88px] xl:w-[125px] 3xl:h-[96px] 3xl:w-[135px] 4xl:h-[104px] 4xl:w-[145px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <p className="line-clamp-2 text-[15px] font-medium leading-[22px] text-[#1A1A1A] xl:text-[16px] 3xl:text-[17px] 4xl:text-[18px]">
          {item.title}
        </p>

        <p className="text-[10px] font-normal leading-[18px] text-[#1A1A1A] xl:text-[11px] 3xl:text-[12px]">
          {item.date}
        </p>

        <button className="flex h-[22px] w-[69px] shrink-0 items-center justify-center rounded-[8px] bg-[#FFE4AF] px-[10px] text-center text-[14px] font-medium leading-[25px] text-[#FF9000] cursor-pointer 3xl:h-[24px] 3xl:w-[76px] 3xl:text-[15px] 4xl:h-[26px] 4xl:w-[82px] 4xl:text-[16px]">
          {item.tag}
        </button>
      </div>
    </div>
  );
}

// ── BlogCard (md and above) ────────────────────────────────────────────────────
function BlogCard({ post }) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#FFEDED] shrink-0">
      <div className="flex items-stretch p-[16px] pb-[12px] 3xl:p-[20px] 4xl:p-[24px]">
        {/* Image */}
        <div className="relative mr-[12px] h-[180px] w-[36%] md:w-[50%] shrink-0 overflow-hidden rounded-xl lg:mr-[14px] lg:h-[170px] lg:w-[46%] xl:mr-[16px] xl:h-[200px] xl:w-[42%] 2xl:w-[480px] 3xl:h-[230px] 3xl:w-[460px] 4xl:h-[260px] 4xl:w-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <span className="absolute left-[10px] top-[5px] rounded-md bg-[#2E4378] px-[8px] py-[3px] text-[11px] font-bold leading-[18px] text-white backdrop-blur-sm 3xl:text-[12px] 4xl:text-[13px]">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex h-[170px] min-w-0 flex-1 flex-col justify-between lg:h-[170px] xl:h-[200px] 3xl:h-[230px] 4xl:h-[260px]">
          <div className="flex flex-col gap-[12px] lg:gap-[10px] xl:gap-[20px] 3xl:gap-[24px]">
            <h3 className="line-clamp-2 text-[16px] font-semibold leading-[22px] text-[#1A1A1A] md:text-[18px] lg:text-[18px] lg:leading-[24px] xl:text-[clamp(20px,1.3vw,24px)] xl:leading-[26px] 3xl:text-[26px] 3xl:leading-[32px] 4xl:text-[28px] 4xl:leading-[36px]">
              {post.title}
            </h3>
            <p className="line-clamp-2 text-[13px] font-medium leading-[18px] text-[#383838] lg:text-[13px] lg:leading-[19px] xl:line-clamp-3 xl:text-[clamp(16px,1vw,18px)] xl:leading-[20px] 3xl:text-[20px] 3xl:leading-[24px] 4xl:text-[22px] 4xl:leading-[28px]">
              {post.excerpt}
            </p>
          </div>

          <button className="inline-flex w-fit self-start cursor-pointer items-center justify-center rounded-md border border-[#E4202C] bg-transparent px-4 py-[4px] text-[14px] font-semibold leading-[20px] text-[#E4202C] transition-colors duration-200 hover:bg-[#E4202C] hover:text-white lg:py-[5px] lg:text-[14px] xl:py-[6px] xl:text-[clamp(18px,1.1vw,20px)] xl:leading-[22px] 3xl:py-[8px] 3xl:text-[22px] 4xl:py-[10px] 4xl:text-[24px]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

// ── BlogCard Mobile (below md) ─────────────────────────────────────────────────
function BlogCardMobile({ post }) {
  return (
    <div className="flex flex-col gap-[12px] rounded-xl bg-[#FFEDED] p-[10px] xs:p-[12px] sm:p-[14px] shrink-0">
      <div className="relative h-[180px] w-full overflow-hidden rounded-xl xs:h-[195px] sm:h-[210px] md:h-[320px]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span className="absolute left-[10px] top-[10px] rounded-md bg-[#2E4378] px-[8px] py-[3px] text-[11px] font-bold text-white backdrop-blur-[2px]">
          {post.category}
        </span>
      </div>

      <h3 className="line-clamp-2 text-[17px] font-semibold leading-[28px] text-[#1A1A1A] sm:text-[19px]">
        {post.title}
      </h3>

      <p className="line-clamp-3 text-[13px] font-medium leading-[22px] text-[#383838] sm:text-[14px]">
        {post.excerpt}
      </p>

      <button className="inline-flex w-fit self-start cursor-pointer items-center justify-center rounded-md border border-[#E4202C] bg-transparent px-4 py-[5px] text-[15px] font-semibold text-[#E4202C] transition-colors duration-200 hover:bg-[#E4202C] hover:text-white sm:py-[6px] sm:text-[16px] md:text-[17px]">
       View More
      </button>
    </div>
  );
}

// ── SidebarPanel ───────────────────────────────────────────────────────────────
function SidebarPanel({ title, items }) {
  return (
    <div className="flex w-full h-[300px] sm:h-[250px] md:h-[280px] lg:h-[300px] 3xl:h-[400px] flex-col gap-[14px] overflow-hidden rounded-2xl bg-[#FFD0D0] p-[14px] 3xl:gap-[16px] 3xl:p-[18px] 4xl:gap-[18px] 4xl:p-[22px]">
      <h2 className="shrink-0 text-[22px] font-bold leading-[28px] text-[#2E4378] 3xl:text-[26px] 3xl:leading-[32px] 4xl:text-[30px] 4xl:leading-[36px]">
        {title}
      </h2>

      <div
        className="
          flex min-h-0 flex-1 flex-col gap-[12px] overflow-y-auto
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          3xl:gap-[14px] 4xl:gap-[16px] "
      >
        {items.map((item) => (
          <SideCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Category");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered =
    activeCategory === "All Category"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div
      className={`${manrope.className} mx-auto w-full max-w-[1536px] bg-[#FFFBFC] 3xl:max-w-[1920px] 4xl:max-w-[2560px]`}
    >
      <div className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 3xl:py-12 4xl:px-24 4xl:py-16">

        {/* ── Header ── */}
        <div className="relative mb-16 md:mb-6 flex flex-col items-center 3xl:mb-10 4xl:mb-12">
          <h1 className="text-center">
            <span className="text-[clamp(24px,2.5vw,36px)] font-extrabold leading-[44px] text-[#1A1A1A] 3xl:text-[42px] 3xl:leading-[52px] 4xl:text-[52px] 4xl:leading-[64px]">
              Latest{" "}
            </span>
            <span className="text-[clamp(24px,2.5vw,36px)] font-semibold leading-[44px] text-[#2E4378] 3xl:text-[42px] 3xl:leading-[52px] 4xl:text-[52px] 4xl:leading-[64px]">
              Blog Posts
            </span>
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 294 25"
            fill="none"
            className="mt-1 w-[clamp(140px,18vw,294px)] 3xl:w-[360px] 4xl:w-[440px]"
          >
            <path
              d="M294 25C128.871 -18.9735 29.1963 4.91407 0 22.3545C126.97 -11.7426 248.508 19.4151 260.051 21.4727L294 25Z"
              fill="#7D6CE2"
            />
          </svg>

          {/* ── Dropdown ── */}
          <div className="absolute right-0 top-[70px] md:top-[8px]">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((p) => !p)}
                className="flex cursor-pointer items-center gap-6 md:gap-10 rounded-xl border-0 bg-[#2E4378] px-4 py-[9px] text-[13px] font-semibold text-white shadow-md transition-colors hover:bg-[#243660] sm:text-[14px] 3xl:px-5 3xl:py-[11px] 3xl:text-[16px] 4xl:px-6 4xl:py-[13px] 4xl:text-[18px]"
              >
                {activeCategory === "All Category" ? "All Category" : activeCategory}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform 4xl:h-5 4xl:w-5 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl 3xl:w-64 4xl:w-72">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full cursor-pointer border-0 px-4 py-[10px] text-left text-[13px] transition-colors hover:bg-pink-50 3xl:py-[12px] 3xl:text-[15px] 4xl:py-[14px] 4xl:text-[16px] ${
                        activeCategory === cat
                          ? "bg-blue-50 font-bold text-[#2E4378]"
                          : "bg-transparent font-medium text-gray-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div
          className="
            grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_420px] 2xl:grid-cols-[minmax(0,1fr)_450px] 3xl:grid-cols-[minmax(0,1fr)_500px] 4xl:grid-cols-[minmax(0,1fr)_560px]">
          {/* ── Blog List ── */}
          {/* Mobile / tablet (below md): fixed height shows ~2 mobile cards */}
          <div
            className="flex flex-col gap-[12px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden h-[800px] sm:h-[860px] md:hidden">
            {filtered.length > 0 ? (
              filtered.map((post) => (
                <BlogCardMobile key={post.id} post={post} />
              ))
            ) : (
              <div className="flex h-40 items-center justify-center rounded-2xl bg-[#FFEDED] text-sm text-gray-400">
                No posts in this category.
              </div>
            )}
          </div>

          {/* Desktop & Tablet (md+): fixed height shows exactly 2 BlogCards side-by-side style */}
          <div
            className="
              hidden md:flex flex-col gap-[16px] overflow-y-auto
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
              3xl:gap-[20px] 4xl:gap-[24px]
              md:h-[412px]
              lg:h-[412px]
              xl:h-[480px]
              3xl:h-[544px]
              4xl:h-[608px] ">
            {filtered.length > 0 ? (
              filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div className="flex h-40 items-center justify-center rounded-2xl bg-[#FFEDED] text-sm text-gray-400 3xl:h-52 3xl:text-base 4xl:h-64 4xl:text-lg">
                No posts in this category.
              </div>
            )}
          </div>

          {/* ── Sidebar (lg+ only side by side) ── */}
          {/* Height matches blog list: lg:412px / xl:480px / 3xl:544px / 4xl:608px */}
          <div
            className="
              hidden lg:block
              lg:h-[412px]
              xl:h-[480px]
              3xl:h-[544px]
              4xl:h-[608px]
            "
          >
            <SidebarPanel title="Most Recent Blogs" items={RECENT_TRENDING} />
          </div>
        </div>

        {/* ── Sidebar for tablet / mobile (below lg, right section at bottom) ── */}
        <div className="mt-5 block lg:hidden">
          <SidebarPanel title="Most Recent Blogs" items={RECENT_TRENDING} />
        </div>
      </div>
    </div>
  );
}