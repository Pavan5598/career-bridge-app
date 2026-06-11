"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";
import toast from "react-hot-toast";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

export default function GetInTouchWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        course: "",
        message: "",
      });
    } else {
      toast.error(result.message || "Failed to send message");
    }
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      className={`min-h-screen w-full bg-[#E8F3FB] flex justify-center items-center p-4 md:p-6 lg:p-14 ${manrope.className}`}
    >
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-12 lg:gap-4">
        {/* Left Section */}
        <div className="flex w-full lg:w-[492px] flex-col items-center lg:items-start gap-2 shrink-0 h-full py-4 text-center lg:text-left">
          {" "}
          {/* Text Content */}
          <div className="flex flex-col gap-4 items-center lg:items-start px-4 md:px-8 lg:pl-20 2xl:pl-40">
            <h1 className="text-2xl md:text-3xl font-bold leading-[1.3] bg-gradient-to-r from-[#2E4378] from-[26.92%] to-[#E4202C] to-[54.33%] bg-clip-text text-transparent">
              Get in Touch With Us
            </h1>
            <p className="text-[#2E4378] text-lg leading-relaxed">
              Have doubts about course selection, fees, career options, or
              placements?
              <br />
              <strong>
                We’re happy to guide you — no pressure, no sales talk.
              </strong>
            </p>
          </div>
          {/* Image & Background Element */}
          <div className="relative mt-0 mb-2 flex justify-center w-full lg:justify-start lg:pl-20 2xl:pl-50">
            {/* Red Background Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 left-5 sm:left-5 md:left-46 lg:left-10 2xl:left-45 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-[#E4202C] z-0"></div>

            {/* Main Image */}
            <div className="relative z-10 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-t-[40px] overflow-hidden">
              <img
                src="/ContactUs/Image 44.png"
                alt="Support representative on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Social Links - Replaced mt-auto with mt-4 to hug the bottom of the image */}
          <div className="flex flex-col items-center lg:items-start gap-3 mt-0 mb-2 lg:pl-20 2xl:pl-40">
            <span className="text-[#2E4378] text-base font-bold">
              Follow us
            </span>
            <div className="flex gap-4 text-[#2E4378] text-2xl">
              <a
                href="https://www.youtube.com/@careerbridgeinstitute"
                className="hover:text-[#E4202C] transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/careerbridgeinstitute/"
                className="hover:text-[#E4202C] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/careerbridgeit"
                className="hover:text-[#E4202C] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/careerbridgeinstitute/photos/"
                className="hover:text-[#E4202C] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/school/career-bridge-it-services-pvt-ltd/posts/?feedView=all"
                className="hover:text-[#E4202C] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Arrow */}
        {/* Middle Arrow */}
        <div className="hidden xl:flex items-center justify-center self-center shrink-0 mt-16 -mx-10 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 219 217"
            fill="none"
            className="-rotate-12 w-[220px] xl:w-[280px] h-auto"
          >
            <path
              d="M45.2778 93.7148C49.1689 145.572 119.072 187.517 164.266 107.428"
              stroke="#2E4378"
              strokeWidth="3.9"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M173.598 88.5868L147.603 107.201L163.527 108.744L173.186 122.823L173.598 88.5868Z"
              fill="#2E4378"
            />
          </svg>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-[400px] lg:w-[458px] bg-[#2E4378] rounded-[20px] border-[0.5px] border-white p-6 md:p-8 lg:p-10 flex flex-col justify-center gap-5 md:gap-4 lg:gap-6 shrink-0 shadow-xl">
          {" "}
          {/* Changed text-center to text-left to match new screenshot */}
          <h2 className="text-white text-left text-2xl font-bold leading-tight mb-1">
            Tell us what you need help with.
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-base">Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="w-full h-[43px] px-4 bg-transparent border border-[#BCC1CA] rounded-xl text-white placeholder:text-[#BCC1CA] text-sm focus:outline-none focus:border-[#E4202C] transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-base">Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourmail@email.com"
                required
                className="w-full h-[43px] px-4 bg-transparent border border-[#BCC1CA] rounded-xl text-white placeholder:text-[#BCC1CA] text-sm focus:outline-none focus:border-[#E4202C] transition-colors"
              />
            </div>

            {/* Course Select/Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-base">
                Select Course of Interest
              </label>

              {/* Added a relative wrapper and an SVG icon for the dropdown arrow */}
              <div className="relative w-full">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full h-[43px] px-4 pr-10 bg-transparent border border-[#BCC1CA] rounded-xl text-[#BCC1CA] text-sm focus:outline-none focus:border-[#E4202C] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" hidden>
                    Select a course
                  </option>

                  <option
                    value="Java Full Stack with Gen AI"
                    className="text-black"
                  >
                    Java Full Stack with Gen AI
                  </option>

                  <option
                    value="Python Full Stack with Gen AI"
                    className="text-black"
                  >
                    Python Full Stack with Gen AI
                  </option>

                  <option
                    value="DotNet Full Stack with AI"
                    className="text-black"
                  >
                    DotNet Full Stack with AI
                  </option>

                  <option
                    value="Multi-Cloud (AWS/Azure) with DevOps Powered by AI"
                    className="text-black"
                  >
                    Multi-Cloud (AWS/Azure) with DevOps Powered by AI
                  </option>

                  <option
                    value="Data Science with AI & ML"
                    className="text-black"
                  >
                    Data Science with AI & ML
                  </option>

                  <option
                    value="MERN Stack with Next JS"
                    className="text-black"
                  >
                    MERN Stack with Next JS
                  </option>

                  <option value="Data Analytics" className="text-black">
                    Data Analytics
                  </option>

                  <option
                    value="Digital Marketing with AI"
                    className="text-black"
                  >
                    Digital Marketing with AI
                  </option>

                  <option value="Azure Data Engineering" className="text-black">
                    Azure Data Engineering
                  </option>

                  <option value="UI Web Development" className="text-black">
                    UI Web Development
                  </option>

                  <option value="Salesforce Full Stack" className="text-black">
                    Salesforce Full Stack
                  </option>

                  <option value="Business Analyst" className="text-black">
                    Business Analyst
                  </option>

                  <option value="C Language & C++" className="text-black">
                    C Language & C++
                  </option>

                  <option
                    value="Computer Basics & MS Office"
                    className="text-black"
                  >
                    Computer Basics & MS Office
                  </option>

                  <option value="Tally Prime ERP" className="text-black">
                    Tally Prime ERP
                  </option>

                  <option
                    value="Data Structures & Algorithms (DSA)"
                    className="text-black"
                  >
                    Data Structures & Algorithms (DSA)
                  </option>

                  <option value="Snowflake" className="text-black">
                    Snowflake
                  </option>

                  <option value="Databricks with AI" className="text-black">
                    Databricks with AI
                  </option>

                  <option value="Cyber Security" className="text-black">
                    Cyber Security
                  </option>

                  <option
                    value="Generative AI & Agentic AI Course"
                    className="text-black"
                  >
                    Generative AI & Agentic AI Course
                  </option>

                  <option
                    value="Selenium with Playwright Testing"
                    className="text-black"
                  >
                    Selenium with Playwright Testing
                  </option>
                </select>
                {/* Dropdown SVG Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#BCC1CA]">
                  <RiArrowDropDownLine className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-base">How can we help?</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                rows={4}
                required
                className="w-full p-4 bg-transparent border border-[#BCC1CA] rounded-xl text-white placeholder:text-[#BCC1CA] text-sm focus:outline-none focus:border-[#E4202C] transition-colors resize-none"
              />
            </div>

            {/* Added Checkbox Agreement */}
            <div className="flex items-start gap-3 mt-1">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-4 h-4 shrink-0 cursor-pointer accent-[#E4202C]"
              />
              <label
                htmlFor="consent"
                className="text-white text-sm cursor-pointer leading-tight"
              >
                I agree to be contacted regarding course details, and career
                guidance.
              </label>
            </div>

            {/* Submit Button */}
            <button
               type="submit"
               disabled={loading}
               className="mt-2 w-full py-3.5 bg-[#E4202C] hover:bg-red-700 disabled:opacity-50 text-white text-lg font-medium rounded-[30px] transition-colors flex justify-center items-center cursor-pointer"
               >
               {loading ? "Sending..." : "Send my message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
