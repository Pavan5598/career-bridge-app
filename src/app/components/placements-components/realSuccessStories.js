"use client"; // Required for useState and interactivity

import { useState, useRef, useEffect } from "react"; // Consolidated imports here!
import { Manrope } from "next/font/google";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

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
    studentImageVideo: "/Home/placements/Student-1.png",
    videoUrl: "/placements/students-video.mp4",
  },
  {
    id: 2,
    name: "M.Kishore",
    role: "Software Engineer at Gisfy",
    quote:
      "I appreciate the personalized coaching I received. It helped me hone my analytical skills and secure a challenging role.",
    companyLogo: "/Home/placements/Company-2.png",
    studentImage: "/Home/placements/Student-2.png",
    studentImageVideo: "/placements/kishore.png",
    videoUrl: "/placements/students-video.mp4",
  },
  {
    id: 3,
    name: "Phani Kumar",
    role: "Software Engineer at Tech Solutions Inc.",
    quote:
      "The placement team provided invaluable support, from resume building to interview prep. I landed my dream job thanks to their guidance!",
    companyLogo: "/Home/placements/Company-3.png",
    studentImage: "/placements/phani.png",
    studentImageVideo: "/placements/phani.png",
    videoUrl: "/placements/students-video.mp4",
  },
];

// 1. Photo Card Component
function StudentCard({ story, id, onClick }) {
  const isEven = id % 2 === 0;
  return (
    <div 
      onClick={onClick}
      className="w-[220px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[300px] 2xl:w-[320px] flex-shrink-0 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[16px] bg-white h-[320px] sm:h-[330px] md:h-[300px] lg:h-[310px] xl:h-[320px] 2xl:h-[340px] flex flex-col shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
        <div
          className={`relative h-[110px] sm:h-[120px] md:h-[125px] lg:h-[130px] xl:h-[145px] flex-shrink-0 ${
            isEven ? "bg-[#314A8A]" : "bg-[#EF1623]"
          }`}
        >
          <div className="absolute right-0 z-20 bg-white rounded-bl-lg px-2 sm:px-1 py-1">
            <Image src={story.companyLogo} alt="Company Logo" width={50} height={50} className="object-contain h-auto sm:w-[100px]" />
          </div>
          <div className="absolute -bottom-[1px] left-0 w-full">
            <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="block w-full h-[85px] sm:h-[85px] md:h-[105px]" preserveAspectRatio="none">
              <path d="M-5,135 C55,18 265,18 325,135 L325,140 L-5,140 Z" fill="#ffffff" />
              <path d="M-5,135 C55,18 265,18 325,135" fill="none" stroke={isEven ? "#FDEBEE" : "#E8F3FB"} strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] z-30 flex items-center justify-center w-full">
            <div className="relative -top-10 w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] md:w-[78px] md:h-[78px] lg:w-[88px] lg:h-[88px] xl:w-[102px] xl:h-[102px] rounded-full overflow-hidden shadow-md flex-shrink-0">
              <Image src={story.studentImage} alt={story.name} width={112} height={112} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        <div className="pt-3 sm:pt-3 md:pt-4 pb-0 px-3 text-center flex flex-col justify-start">
          <h3 className="text-[#111111] font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-tight">{story.name}</h3>
          <p className="text-[#202020] text-[12px] mt-1">{story.role}</p>
          <p className="text-[#5F5F5F] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] mt-2 sm:mt-3 line-clamp-4">&ldquo;{story.quote}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

// 2. Video Card Component
function VideoCard({ story, id, onClick }) {
  const isEven = id % 2 === 0;
  const bgColor = isEven ? "bg-[#314A8A]" : "bg-[#EF1623]";
  const playIconColor = isEven ? "text-[#314A8A]" : "text-[#EF1623]";
  const borderColor = isEven ? "border-[#E8F3FB]" : "border-[#FDEBEE]";

  return (
    <div 
      onClick={onClick}
      className="w-[220px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[300px] 2xl:w-[320px] flex-shrink-0 cursor-pointer"
    >
      <div className={`relative overflow-hidden rounded-[16px] h-[320px] sm:h-[330px] md:h-[300px] lg:h-[310px] xl:h-[320px] 2xl:h-[340px] flex flex-col shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 ${bgColor}`}>
        <div className="p-4 sm:p-5 relative z-10 w-[70%]">
          <h3 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-tight">{story.name}</h3>
          <p className="text-white/90 text-[11px] sm:text-[12px] mt-1">{story.role.split(" at ")[0]}</p>
        </div>
        <div className="absolute top-0 right-0 z-20">
          <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] bg-white rounded-bl-[20px] rounded-tr-[16px] border-b-[4px] border-l-[4px] border-white overflow-hidden">
            <Image src={story.studentImageVideo || story.studentImage} alt={story.name} fill className="object-cover" />
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pb-8 z-20 pointer-events-none">
          <button className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:scale-110 transition-transform cursor-pointer">
            <FaPlay className={`w-4 h-4 sm:w-5 sm:h-5 ml-1 ${playIconColor}`} />
          </button>
        </div>

        <div className={`absolute left-1/2 -translate-x-1/2 -bottom-[220px] sm:-bottom-[215px] w-[325px] h-[325px] rounded-full bg-[#FFF] border-[5px] ${borderColor} z-10 flex justify-center pt-5 sm:pt-6`}>
          <Image src="/Home/CB Logo.png" alt="Career Bridge Logo" width={160} height={80} className="object-contain h-[35px] sm:h-[38px] w-auto relative z-20" />
        </div>
      </div>
    </div>
  );
}


// 3. Full Screen Modal Component with Flip Logic & Guaranteed Autoplay
function CardModal({ data, onClose }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isVideo = data.type === "video";
  const videoRef = useRef(null);

  // Automatically trigger play/pause based on the flip state
  useEffect(() => {
    if (videoRef.current) {
      if (isFlipped) {
        // A 400ms delay lets the card rotate halfway through its 3D transition 
        // so the video starts playing precisely as it becomes visible to the user!
        const playTimer = setTimeout(() => {
          videoRef.current.play().catch((error) => {
            console.log("Autoplay prevented by browser security rules:", error);
          });
        }, 400);
        
        return () => clearTimeout(playTimer);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isFlipped]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] text-white bg-black/50 hover:bg-red-500 rounded-full p-3 transition-colors"
      >
        <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Modal Box (50% on Desktop) */}
      <div className="relative w-[95%] md:w-[75%] lg:w-[50vw] h-[60vh] lg:h-[50vh] [perspective:1000px]">
        
        {/* Flipping Inner Container */}
        <div 
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT FACE: Image and Student Text Details */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl overflow-hidden [backface-visibility:hidden] shadow-2xl flex flex-col md:flex-row">
            
            {/* Left/Top Area: Image with play button */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-gray-100">
              <Image 
                src={isVideo ? (data.story.studentImageVideo || data.story.studentImage) : data.story.studentImage} 
                alt={data.story.name} 
                fill 
                className="object-cover"
              />
              
              {/* Play Button Overlay (Triggers Flip) */}
              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button 
                    onClick={() => setIsFlipped(true)}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform cursor-pointer"
                  >
                    <FaPlay className="w-6 h-6 ml-1 text-[#EF1623]" />
                  </button>
                </div>
              )}
            </div>

            {/* Right/Bottom Area: Text Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white overflow-y-auto">
              <div className="mb-4">
                <Image src={data.story.companyLogo} alt="Company Logo" width={100} height={50} className="object-contain" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-1">{data.story.name}</h2>
              <p className="text-base text-[#314A8A] font-medium mb-4">{data.story.role}</p>
              <div className="w-10 h-1 bg-[#EF1623] mb-4"></div>
              <p className="text-[#5F5F5F] text-sm md:text-base leading-relaxed italic">
                &ldquo;{data.story.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* BACK FACE: The Video Player */}
          {isVideo && (
            <div className="absolute inset-0 w-full h-full bg-black rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl flex items-center justify-center">
              <video 
                ref={videoRef} 
                src={data.story.videoUrl} 
                controls 
                className="w-full h-full object-contain bg-black"
                playsInline
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

// 4. Main Section Assembly
export default function RealSuccessStories() {
  const [activeModalData, setActiveModalData] = useState(null);

  const repeatedStories = [
    ...storiesData,
    ...storiesData,
    ...storiesData,
    ...storiesData,
  ];

  return (
    <section className={`${manrope.className} w-full bg-[#F5F5F5] py-4 sm:py-6 overflow-hidden`}>
      <div className="text-center px-3">
        <h2 className="text-[#314A8A] font-bold text-[22px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] leading-tight">
          <span className="text-[#EF1623]">Real Students. Real Placements. Real Transformations.</span>
        </h2>
        <p className="max-w-4xl mx-auto mt-3 sm:mt-2 text-[#2E4378] font-normal text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
          Each student has a different journey — non-IT, freshers, career gap, B.Com/B.Sc, or working professional. But with the right training and guidance, they all reached the same destination: <span className="text-[#28A745] font-semibold">A Successful IT job</span>
        </p>
      </div>

      <div className="relative overflow-hidden mt-10 w-full group">
        <div className="flex gap-5 sm:gap-6 lg:gap-8 w-max px-4 animate-marquee group-hover:!-[animation-play-state:paused] hover:[animation-play-state:paused]">
          {repeatedStories.map((story, idx) => (
            <div key={idx} className="flex gap-5 sm:gap-6 lg:gap-8">
              <StudentCard 
                story={story} 
                id={idx} 
                onClick={() => setActiveModalData({ story, type: "photo" })} 
              />
              <VideoCard 
                story={story} 
                id={idx} 
                onClick={() => setActiveModalData({ story, type: "video" })} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[#314A8A] text-white rounded-full px-5 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 py-4 text-[13px] sm:text-[14px] font-medium hover:opacity-90 transition cursor-pointer">
          See All Student Stories
        </button>
      </div>

      {activeModalData && (
        <CardModal 
          data={activeModalData} 
          onClose={() => setActiveModalData(null)} 
        />
      )}
    </section>
  );
}