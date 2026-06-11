import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const storiesData = [
  {
    id: 1,
    name: "Hasini",
    role: "Software Engineer at Accenture",
    quote:
      "The program's industry connections are incredible. I had multiple offers and chose the perfect fit for my career goals.",
    companyLogo: "/Home/placements/Company-1.png",
    studentImage: "/Home/placements/Student-1.png",
    // topBg: "#314A8A",
    //  svgBorder:"#E8F3FB",
  },
  {
    id:2,
    name: "M.Kishore",
    role: "Software Engineer at Gisfy",
    quote:
      "I appreciate the personalized coaching I received. It helped me hone my analytical skills and secure a challenging role.",
    companyLogo: "/Home/placements/Company-2.png",
    studentImage: "/Home/placements/Student-2.png",
    // topBg: "#EF1623",
    // svgBorder:"#FDEBEE",
  },
  {
    id:3,
    name: "P. Lakshmi Snehitha",
    role: "Software Engineer at Tech Solutions Inc.",
    quote:
      "The placement team provided invaluable support, from resume building to interview prep. I landed my dream job thanks to their guidance!",
    companyLogo: "/Home/placements/Company-3.png",
    studentImage: "/Home/placements/Student-3.png",
    // topBg: "#314A8A",
    // svgBorder:"#E8F3FB",
  },
];

function StudentCard({ story, id }) {
   const isEven = id % 2 === 0;
  return (
    <div className="w-[220px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[300px] 2xl:w-[320px] flex-shrink-0">
      {/* Card */}
      <div className="relative overflow-hidden rounded-[16px] bg-white h-[360px] sm:h-[380px] md:h-[340px] lg:h-[350px] xl:h-[360px] 2xl:h-[380px] flex flex-col">
        {/* Top Section */}
        <div
  className={`relative h-[130px] sm:h-[135px] md:h-[140px] lg:h-[150px] xl:h-[170px]  flex-shrink-0  ${
    isEven ? "bg-[#314A8A]" : "bg-[#EF1623]"
  }`}
>
          {/* Company Logo */}
          <div className="absolute right-0 z-20 bg-white rounded-bl-lg px-2 sm:px-1 py-1">
            <Image
              src={story.companyLogo}
              alt="Company Logo"
              width={50}
              height={50}
              className="object-contain h-auto sm:w-[100px]"
            />
          </div>

          <div className="absolute -bottom-[1px] left-0 w-full">
  <svg
    viewBox="0 0 320 140"
    xmlns="http://www.w3.org/2000/svg"
    className="block w-full h-[105px] sm:h-[95px] md:h-[125px]"
    preserveAspectRatio="none"
  >
    {/* White Fill */}
    <path
      d="M-5,135 C55,18 265,18 325,135 L325,140 L-5,140 Z"
      fill="#ffffff"
    />

    {/* Reverse U Border */}
    <path
      d="M-5,135 C55,18 265,18 325,135"
      fill="none"
      stroke={isEven ? "#FDEBEE" : "#E8F3FB"}
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
</div>

          {/* Student Image */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] z-30 flex items-center justify-center w-full">
            <div className="relative -top-10 w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] md:w-[78px] md:h-[78px] lg:w-[88px] lg:h-[88px] xl:w-[102px] xl:h-[102px] rounded-full overflow-hidden shadow-md flex-shrink-0">
              <Image
                src={story.studentImage}
                alt={story.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-3 sm:pt-3 md:pt-4 pb-0 px-3 text-center flex flex-col justify-start">
          <h3 className="text-[#111111] font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-tight">
            {story.name}
          </h3>

          <p className="text-[#202020] text-[12px] mt-1">{story.role}</p>

          <p className="text-[#5F5F5F] text-[14px] leading-[24px] sm:leading-[25px] mt-3">
            &ldquo;{story.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const repeatedStories = [
    ...storiesData,
    ...storiesData,
    ...storiesData,
    ...storiesData,
  ];

  return (
    <section
      className={`${manrope.className} w-full bg-[#F5F5F5] py-4 sm:py-6 overflow-hidden`}
    >
      {/* Heading */}
      <div className="text-center px-3">
        <h2 className="text-[#314A8A] font-bold text-[22px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] leading-tight">
          Real Students. Real Placements. Real Transformations.
        </h2>

        <p className="max-w-4xl mx-auto mt-3 sm:mt-2 text-[#2E4378] font-normal text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
          Each student has a different journey — non-IT, freshers, career gap,
          B.Com/B.Sc, or working professional. But with the right training and
          guidance, they all reached the same destination: A successful IT job.
        </p>
      </div>

      {/* Moving Cards */}
      <div className="relative overflow-hidden mt-10 w-full">
        <div className="flex gap-5 sm:gap-6 lg:gap-8  w-max px-4 animate-marquee">
          {repeatedStories.map((story, idx) => (
            <StudentCard key={idx} story={story} id={idx} />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#314A8A] text-white rounded-full px-5 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 py-4 text-[13px] sm:text-[14px] font-medium hover:opacity-90 transition cursor-pointer">
          See All Student Stories
        </button>
      </div>
    </section>
  );
}
