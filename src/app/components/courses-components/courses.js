"use client";

import { useState } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoStar, IoEyeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

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
  {
    title: "Data Analytics",
    image: "/Courses/ExtraCourses/DataAnalytics.png",
    duration: "4 Months",
    rating: "4.6",
    students: "690",
    description:
      "Master data analytics with Python, SQL, Databricks, Excel, Tableau, Power BI, and Statistics. Build real-...",
  },
  {
    title: "Digital Marketing with AI",
    image: "/Courses/ExtraCourses/DigitalMarketing.png",
    duration: "3 Months",
    rating: "4.5",
    students: "540",
    description:
      "Digital marketing with AI combines data, automation, and predictive analytics to reach the right audience...",
  },
  {
    title: "Azure Data Engineering",
    image: "/Courses/ExtraCourses/Azuredata.png",
    duration: "3 Months",
    rating: "4.4",
    students: "410",
    description:
      "Azure Data Engineering focuses on building scalable data pipelines on Microsoft Azure...",
  },
  {
    title: "UI Web Development",
    image: "/Courses/ExtraCourses/UIWeb.png",
    duration: "2 Months",
    rating: "4.6",
    students: "880",
    description:
      "UI Web Development focuses on building responsive and interactive user interfaces...",
  },
  {
    title: "Salesforce Full Stack",
    image: "/Courses/ExtraCourses/Salesforce.png",
    duration: "4 Months",
    rating: "4.7",
    students: "620",
    description:
      "Learn to build powerful CRM applications using Lightning Web Components...",
  },
  {
    title: "Business Analyst",
    image: "/Courses/ExtraCourses/BusinessAnalyst.png",
    duration: "2 Months",
    rating: "4.3",
    students: "390",
    description:
      "Business Analyst focuses on bridging business needs and technology...",
  },
  {
    title: "C Language & C++",
    image: "/Courses/ExtraCourses/c-c11.png",
    duration: "1 Month",
    rating: "4.5",
    students: "710",
    description:
      "C Language & C++ focuses on building strong programming fundamentals...",
  },
  {
    title: "Computer Basics & MS Office",
    image: "/Courses/ExtraCourses/ComputerBasics.png",
    duration: "1 Month",
    rating: "4.4",
    students: "560",
    description:
      "Learn Computer Basics & MS Office with practical hands-on training...",
  },
  {
    title: "Tally Prime ERP",
    image: "/Courses/ExtraCourses/TallyPrime.png",
    duration: "2 Months",
    rating: "4.6",
    students: "640",
    description:
      "Tally Prime ERP combines accounting fundamentals and taxation compliance...",
  },
  {
    title: "Data Structures & Algorithms (DSA)",
    image: "/Courses/ExtraCourses/DSA.png",
    duration: "1 Month",
    rating: "4.9",
    students: "1900",
    description:
      "Data Structures and Algorithms focuses on efficient organization and processing...",
  },
  {
    title: "Snowflake",
    image: "/Courses/ExtraCourses/Snowflake.png",
    duration: "2 Months",
    rating: "4.5",
    students: "430",
    description:
      "Snowflake Azure Data Engineering focuses on scalable cloud-native data solutions...",
  },
  {
    title: "Databricks with AI",
    image: "/Courses/ExtraCourses/DataBricks.png",
    duration: "2 Months",
    rating: "4.8",
    students: "850",
    description:
      "Databricks with AI focuses on building scalable data engineering pipelines...",
  },
  {
    title: "Cyber Security",
    image: "/Courses/ExtraCourses/CyberSecurity.png",
    duration: "2 Months",
    rating: "4.8",
    students: "1500",
    description:
      "Cyber Security focuses on protecting systems, networks, and data...",
  },
  {
    title: "Generative AI & Agentic AI Course",
    image: "/Courses/ExtraCourses/GenAI.png",
    duration: "2 Months",
    rating: "4.8",
    students: "1500",
    description:
      "This course covers Generative AI and Agentic AI...",
  },
  {
    title: "Selenium with Playwright Testing",
    image: "/Courses/ExtraCourses/DataBricks.png",
    duration: "2 Months",
    rating: "4.8",
    students: "1500",
    description:
      "This course covers Selenium and Playwright Testing...",
  },
];

export default function ExploreCoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedTrainingType, setSelectedTrainingType] =
    useState("");
  const [selectedDuration, setSelectedDuration] =
    useState("");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCourse =
      !selectedCourse ||
      course.title === selectedCourse;

    const matchesDuration =
      !selectedDuration ||
      course.duration === selectedDuration;

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return (
      matchesCourse &&
      matchesDuration &&
      matchesSearch
    );
  });

  return (
  <>
    {/* TOP FILTER BAR */}
    <section className="w-full bg-[#FFF] border-b border-[#E5E5E5]">
      <div className="max-w-[1437px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-6">
        <div className="flex flex-wrap items-center gap-4">

          {/* Course */}
          <div className="relative w-[220px]">
            <select
              value={selectedCourse}
              onChange={(e) =>
                setSelectedCourse(
                  e.target.value
                )
              }
              className="w-full h-[56px] rounded-[14px] border border-[#D1D1D2] bg-[#FFF] px-5 pr-12 text-[16px] text-[#171A1F] outline-none appearance-none cursor-pointer"
            >
              <option value="">
                Course
              </option>

              {courses.map((course) => (
                <option
                  key={course.title}
                  value={course.title}
                >
                  {course.title}
                </option>
              ))}
            </select>

            <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[24px] text-[#171A1F] pointer-events-none" />
          </div>

          {/* Training Type */}
          <div className="relative w-[220px]">
            <select
              value={
                selectedTrainingType
              }
              onChange={(e) =>
                setSelectedTrainingType(
                  e.target.value
                )
              }
              className="w-full h-[56px] rounded-[14px] border border-[#D1D1D2] bg-[#FFF] px-5 pr-12 text-[16px] text-[#171A1F] outline-none appearance-none cursor-pointer"
            >
              <option value="">
                Training Type
              </option>

              <option value="Online">
                Online
              </option>

              <option value="Offline">
                Offline
              </option>
            </select>

            <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[24px] text-[#171A1F] pointer-events-none" />
          </div>

          {/* Duration */}
          <div className="relative w-[220px]">
            <select
              value={selectedDuration}
              onChange={(e) =>
                setSelectedDuration(
                  e.target.value
                )
              }
              className="w-full h-[56px] rounded-[14px] border border-[#D1D1D2] bg-[#FFF] px-5 pr-12 text-[16px] text-[#171A1F] outline-none appearance-none cursor-pointer"
            >
              <option value="">
                Duration
              </option>

              <option value="1 Month">
                1 Month
              </option>

              <option value="2 Months">
                2 Months
              </option>

              <option value="3 Months">
                3 Months
              </option>

              <option value="4 Months">
                4 Months
              </option>

              <option value="5 Months">
                5 Months
              </option>

              <option value="6 Months">
                6 Months
              </option>
            </select>

            <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[24px] text-[#171A1F] pointer-events-none" />
          </div>

          
          {/* Search */}
{/* Search */}
<div className="relative w-[280px] group text-[#171A1F]">
  <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[20px] " />

  <input
    type="text"
    placeholder="Search course"
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="w-full h-[56px] rounded-[14px] border border-[#D1D1D2] bg-[#FFF] pl-14 pr-5 text-[16px] outline-none transition-all duration-300 hover:border-[#31498D] focus:border-[#31498D]"
  />
</div>
        </div>
      </div>
    </section>

    {/* COURSE SECTION */}
    <section
      className={`${manrope.className} w-full bg-[#E8F3FB]`}
    >
      <div className="max-w-[1437px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-10">

        {/* HEADING */}
        <h1 className="text-center text-[#E4202C] font-bold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
          Explore Our Most Career-Focused
          Courses
        </h1>

        {/* SUBTEXT */}
        <p className="mt-3 text-center text-[#565D6D] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] max-w-[900px] mx-auto">
          Choose a learning path that
          matches your goals — we’ll
          guide you step-by-step until
          you become job-ready.
        </p>

        {/* GRID */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCourses.map(
            (course, index) => (
              <div
                key={index}
                className="flex flex-col w-full h-full rounded-[20px] overflow-hidden bg-[#ffe6e6] border border-[#D8D8D8] shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
              >
                {/* IMAGE */}
                <div className="relative w-full h-fit">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={500}
                    className="object-contain w-full h-fit"
                  />

                  <button className="absolute top-1 right-3 w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] rounded-[8px] bg-[#ffe6e6] flex items-center justify-center cursor-pointer">
        <RiShareForwardLine className="text-[#C91C26] text-[16px]" />
      </button>

                  <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full bg-white flex items-center justify-center shadow-md">
                    <Image
                      src="/Home/courses/CBIcon-Image.png"
                      alt="CB Logo"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 px-5 pt-11 pb-5 text-center">
                  <h2 className="text-[#111] font-bold text-[18px] md:text-[20px]">
                    {course.title}
                  </h2>

                  <div className="mt-2 flex items-center justify-center gap-2 text-[15px]">
                    <div className="flex items-center gap-1">
                      <MdOutlineAccessTime className="text-[20px]" />
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

                  <p className="mt-3 text-[#000] font-normal text-[14px] leading-[22px] line-clamp-2">
                    {course.description}
                  </p>

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
            )
          )}
        </div>
      </div>
    </section>
  </>
);
}