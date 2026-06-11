import Image from "next/image";
import { Manrope } from "next/font/google";

import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const courses = [
  {
    title: "Java Full Stack with Gen AI",
    image: "/Home/courses/Java-Image.png",
    duration: "6 Months",
    rating: "4.8",
    students: "1200",
    description:
      "Learn Java Full Stack Development with Gen AI, building scalable web applications from frontend to backend....",
  },
  {
    title: "Python Full Stack with Gen AI",
    image: "/Home/courses/python-Image.png",
    duration: "6 Months",
    rating: "4.7",
    students: "980",
    description:
      "Designed for freshers and career-gap students to build intelligent full-stack web applications. Master front-....",
  },
  {
    title: "DotNet Full Stack with AI",
    image: "/Home/courses/Dotnet-Image.png",
    duration: "6 Months",
    rating: "4.6",
    students: "760",
    description:
      "Build modern, scalable web applications using .NET Full Stack combined with Generative AI integrations....",
  },
  {
    title: "Multi-Cloud (AWS/Azure) with DevOps Powered by AI",
    image: "/Home/courses/Devops-Image.png",
    duration: "5 Months",
    rating: "4.7",
    students: "870",
    description:
      "Master CI/CD pipelines, Docker, Kubernetes, cloud deployment and DevOps tools with AI integration....",
  },
  {
    title: "Data Science with AI & ML",
    image: "/Home/courses/DataScience-Image.png",
    duration: "7 Months",
    rating: "4.9",
    students: "1100",
    description:
      "Learn Machine Learning, Data Analytics, Python, AI tools and real-world data science projects...",
  },
  {
    title: "MERN Stack with Next JS",
    image: "/Home/courses/MernStack-Image.png",
    duration: "6 Months",
    rating: "4.8",
    students: "950",
    description:
      "Become a MERN Stack developer with React, Node.js, MongoDB and Generative AI integrations...",
  },
];

export default function CoursesSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#E8F3FB]`}>
      <div className="max-w-[1437px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-4 sm:py-2 lg:py-4">

        {/* HEADING */}
        <h1 className="text-center text-[#E4202C] font-bold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px] mt-[15px]">
          Explore Our Most Career-Focused Courses
        </h1>

        {/* SUBTEXT */}
        <p className="mt-3 text-center text-[#565D6D] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] max-w-[900px] mx-auto">
          Choose a learning path that matches your goals — we’ll guide you step-by-step until you become job-ready.
        </p>

        {/* GRID */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {courses.map((course, index) => (
  <div
    key={index}
    className="flex flex-col w-full h-full rounded-[20px] overflow-hidden bg-[#ffe6e6] border border-[#D8D8D8] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
  >
    
    {/* IMAGE (UNCHANGED) */}
    <div className="relative w-full h-fit">
      <Image
        src={course.image}
        alt={course.title}
        width={500}
        height={500}
        className="object-contain w-full h-fit"
      />

      {/* SHARE */}
      <button className="absolute top-1 right-3 w-[28px] h-[28px] rounded-[8px] bg-[#ffe6e6] flex items-center justify-center cursor-pointer">
        <RiShareForwardLine className="text-[#C91C26] text-[16px]" />
      </button>

      {/* LOGO */}
      <div
  className="
    absolute
    left-1/2
    top-full
    -translate-x-1/2
    -translate-y-1/2
    w-[64px]
    h-[64px]
    sm:w-[60px]
    sm:h-[60px]
    md:w-[70px]
    md:h-[70px]
    lg:w-[75px]
    lg:h-[75px]
    rounded-full
    bg-white
    flex
    items-center
    justify-center
    shadow-md
  "
>
  <Image
    src="/Home/courses/CBIcon-Image.png"
    alt="CB Logo"
    width={50}
    height={50}
    className="object-contain w-auto h-auto"
  />
</div>
    </div>

    {/* CONTENT */}
    <div className="flex flex-col flex-1 px-5 pt-11 pb-5 text-center">

      <h2 className="text-[#111] font-bold text-[18px] md:text-[20px]">
        {course.title}
      </h2>

      {/* STATS */}
      <div className="mt-2 flex items-center justify-center gap-2 text-[15px] ">
        <div className="flex items-center  gap-1">
          <MdOutlineAccessTime className="text-[20px] "  />
          {course.duration}
        </div>

        <span className="w-[1.5px] h-[14px] bg-black/40" />

        <div className="flex items-center gap-1">
          <IoStar className="text-yellow-500 w-[18px] h-[18px]" />
          {course.rating}
        </div>

        <span className="w-[1.5px] h-[14px] bg-black/40" />

        <div className="flex items-center gap-1">
          <IoEyeOutline className="text-[20px]" />
          {course.students}
        </div>
      </div>

      {/* DESCRIPTION (FIXED HEIGHT) */}
      <p className="mt-3 text-[#111] font-normal text-[14px] leading-[22px] line-clamp-2">
  {course.description}
</p>

      {/* BUTTONS PUSHED TO BOTTOM */}
      <div className="mt-auto flex gap-3 pt-4 font-semibold">
        <button className="flex-1 h-[40px] rounded-full border border-[#E4202C] text-[14px] cursor-pointer">
          View Course
        </button>

        <button className="flex-1 h-[40px] rounded-full bg-[#F0002F] text-white text-[14px] cursor-pointer">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
))}

        </div>

        <div className="mt-10 mb-4 flex justify-center">
  <button
    className="
      flex
      items-center
      justify-center
      gap-[10px]

      px-[40px] sm:px-[80px] lg:px-[90px]
      py-[15px]

      rounded-[30px]

      bg-[#2E4378]
      border border-[#000000]

      text-white
      font-medium
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]

      leading-[18px]

      hover:opacity-90
      transition-all
      cursor-pointer
    "
  >
    <span>View All Courses</span>
    <FaArrowRight className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]" />
  </button>
</div>

      </div>
    </section>
  );
}
