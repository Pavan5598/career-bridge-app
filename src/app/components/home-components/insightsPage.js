import { Manrope } from "next/font/google";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const blogPosts = [
  {
    image: "/Home/insights/Rectangle 38.png",
    category: "Career Growth",
    title: "5 Essential Tips for a Successful Career Change",
    date: "October 26, 2025",
    excerpt:
      "Navigating a career transition can be challenging but rewarding. Discover key strategies to make your shift smooth and successful ...",
  },
  {
    image: "/Home/insights/Rectangle 38 (1).png",
    category: "Skill Development",
    title: "The Future of Learning: In-Demand Skills for 2025",
    date: "October 26, 2025",
    excerpt:
      "Stay ahead in the competitive job market by focusing on these crucial skills that employers will seek in the coming year. ...",
  },
  {
    image: "/Home/insights/Rectangle 38 (2).png",
    category: "Job Search",
    title: "Crafting the Perfect Resume: A Step-by-Step Guide",
    date: "October 26, 2025",
    excerpt:
      "Your resume is your first impression. Learn how to create a compelling document that highlights your strengths and lands ...",
  },
];

export default function InsightsPage() {
  return (
    <div className={manrope.className}>
      <section className="max-w-[1920px] mx-auto px-[24px] sm:px-[60px] lg:px-[70px] py-[20px] mt-8 bg-white">
        
        {/* Heading */}
        <h2 className="text-center text-[20px] md:text-[28px] lg:text-[28px] font-bold text-[#181A2A] leading-tight mb-6 sm:mb-5">
          Latest Insights from Our Blog
        </h2>

        {/* Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="
                flex flex-col h-full w-full
                bg-white
                border border-[#483BDE]
                rounded-[20px]
                overflow-hidden
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              
              {/* Image */}
              <div className="relative mx-3 mt-3 h-[170px] sm:h-[190px] md:h-[210px] lg:h-[190px] xl:h-[220px] overflow-hidden rounded-[14px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-3 pt-2 pb-2">

                {/* Category */}
                <span
                  className="
                    w-fit
                    rounded-full
                    border border-[#BFDBFE]
                    bg-[#EFF6FF]
                    px-2 py-1
                    text-[11px]
                    font-semibold
                    text-[#2563EB]
                    mb-1
                  "
                >
                  {post.category}
                </span>

                {/* Title */}
                <h3
                  className="
                    text-[#181A2A]
                    text-[15px]
                    font-medium
                    leading-[28px]
                    mb-0
                  "
                >
                  {post.title}
                </h3>

                {/* Date */}
                <p
                  className="
                    text-[#757575]
                    text-[11px]
                    font-normal
                    leading-[28px]
                    mb-0
                  "
                >
                  {post.date}
                </p>

                {/* Excerpt */}
               {/* Excerpt + Read More */}
<p
  className="
    text-[#181A2A]
    text-[13px]
    font-normal
    leading-[20px]
    flex-1
  "
>
  {post.excerpt.replace(" ...", "")}
  <span className="text-[#181A2A]">...</span>{" "}
  <a
    href="#"
    className="
      text-[#122BEF]
      text-[14px]
      font-normal
      leading-[25px]
      hover:underline
      inline
    "
  >
    Readmore
  </a>
</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-8">
  <a
    href="#"
    className="
      inline-flex items-center gap-2
      bg-[#1E3A5F]
      hover:bg-[#162D4A]
      transition-all duration-300
      text-white
      text-[15px]
      font-semibold
      px-10
      py-4
      rounded-full
      shadow-md hover:shadow-lg
    "
  >
    <span>Explore Career Tips</span>
    <FaArrowRight className="text-[14px]" />
  </a>
</div>
      </section>

    </div>
  );
}