"use client";

import { useState, useRef, useEffect } from "react";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// 1. ALTERNATING DATA: Photo -> Video -> Photo -> Video
const storiesData = [
  {
    id: 1,
    type: "photo",
    name: "Hasini",
    role: "Software Engineer at Accenture",
    quote: "The program's industry connections are incredible. I had multiple offers and chose the perfect fit for my career goals.",
    companyLogo: "/Home/placements/Company-1.png",
    studentImage: "/Home/placements/Student-1.png",
  },
   {
    id: 2,
    type: "video",
    name: "Hasini",
    role: "Software Engineer at Accenture",
    quote: "The program's industry connections are incredible. I had multiple offers and chose the perfect fit for my career goals.",
    companyLogo: "/Home/placements/Company-1.png",
    studentImage: "/Home/placements/Student-1.png",
    studentImageVideo: "/Home/placements/Student-1.png",
    videoUrl: "/placements/students-video.mp4",
  },
  {
    id: 3,
    type: "photo",
    name: "M.Kishore",
    role: "Software Engineer at Gisfy",
    quote: "I appreciate the personalized coaching I received. It helped me hone my analytical skills and secure a challenging role.",
    companyLogo: "/Home/placements/Company-2.png",
    studentImage: "/Home/placements/Student-2.png",
  },
  {
    id: 4,
    type: "video",
    name: "M.Kishore",
    role: "Software Engineer at Gisfy",
    quote: "I appreciate the personalized coaching I received. It helped me hone my analytical skills and secure a challenging role.",
    companyLogo: "/Home/placements/Company-2.png",
    studentImage: "/Home/placements/Student-2.png",
    studentImageVideo: "/placements/kishore.png",
    videoUrl: "/placements/students-video.mp4",
  },
  {
    id: 5,
    type: "photo",
    name: "Phani Kumar",
    role: "Software Engineer at Tech Solutions Inc.",
    quote: "The placement team provided invaluable support, from resume building to interview prep. I landed my dream job thanks to their guidance!",
    companyLogo: "/Home/placements/Company-3.png",
    studentImage: "/placements/phani.png",
  },
  {
    id: 6,
    type: "video",
    name: "Phani Kumar",
    role: "Software Engineer at Tech Solutions Inc.",
    quote: "The placement team provided invaluable support, from resume building to interview prep. I landed my dream job thanks to their guidance!",
    companyLogo: "/Home/placements/Company-3.png",
    studentImage: "/placements/phani.png",
    studentImageVideo: "/placements/phani.png",
    videoUrl: "/placements/students-video.mp4",
  },
];

// 2. Marquee Photo Card
function MarqueePhotoCard({ story, onClick }) {
  const isEven = story.id % 2 === 0;
  return (
    <div onClick={onClick} className="relative w-[280px] sm:w-[320px] h-[340px] sm:h-[360px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20 shadow-md hover:shadow-xl">
      <div className="relative overflow-hidden rounded-[16px] bg-white w-full h-full flex flex-col">
        <div className={`relative h-[120px] sm:h-[135px] flex-shrink-0 ${isEven ? "bg-[#314A8A]" : "bg-[#EF1623]"}`}>
          <div className="absolute right-0 z-20 bg-white rounded-bl-lg px-2 sm:px-1 py-1">
            <Image src={story.companyLogo} alt="Logo" width={50} height={50} className="object-contain h-auto sm:w-[90px]" />
          </div>
          <div className="absolute -bottom-[1px] left-0 w-full">
            <svg viewBox="0 0 320 140" preserveAspectRatio="none" className="block w-full h-[85px] md:h-[100px]">
              <path d="M-5,135 C55,18 265,18 325,135 L325,140 L-5,140 Z" fill="#ffffff" />
              <path d="M-5,135 C55,18 265,18 325,135" fill="none" stroke={isEven ? "#FDEBEE" : "#E8F3FB"} strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] z-30 flex items-center justify-center w-full">
            <div className="relative -top-10 w-[72px] h-[72px] md:w-[85px] md:h-[85px] rounded-full overflow-hidden shadow-md flex-shrink-0 bg-white">
              <Image src={story.studentImage} alt={story.name} fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="pt-3 md:pt-4 pb-0 px-4 text-center flex flex-col justify-start flex-grow">
          <h3 className="text-[#111111] font-semibold text-[18px] md:text-[20px] leading-tight">{story.name}</h3>
          <p className="text-[#202020] text-[12px] mt-1">{story.role}</p>
          <p className="text-[#5F5F5F] text-[13px] leading-[22px] mt-3 line-clamp-4">&ldquo;{story.quote}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

// 3. Marquee Video Card
function MarqueeVideoCard({ story, onClick }) {
  const isEven = story.id % 2 === 0;
  const bgColor = isEven ? "bg-[#314A8A]" : "bg-[#EF1623]";
  const playIconColor = isEven ? "text-[#314A8A]" : "text-[#EF1623]";
  const borderColor = isEven ? "border-[#E8F3FB]" : "border-[#FDEBEE]";

  return (
    <div onClick={onClick} className="relative w-[280px] sm:w-[320px] h-[340px] sm:h-[360px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20 shadow-md hover:shadow-xl">
      <div className={`relative overflow-hidden rounded-[16px] w-full h-full flex flex-col ${bgColor}`}>
        <div className="p-4 relative z-10 w-[70%]">
          <h3 className="text-white font-semibold text-[18px] md:text-[20px] leading-tight">{story.name}</h3>
          <p className="text-white/90 text-[11px] md:text-[12px] mt-1">{story.role.split(" at ")[0]}</p>
        </div>
        <div className="absolute top-0 right-0 z-20">
          <div className="relative w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-white rounded-bl-[20px] rounded-tr-[16px] border-b-[4px] border-l-[4px] border-white overflow-hidden">
            <Image src={story.studentImageVideo || story.studentImage} alt={story.name} fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pb-8 z-20 pointer-events-none">
          <button className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:scale-110 transition-transform">
            <FaPlay className={`w-4 h-4 md:w-5 md:h-5 ml-1 ${playIconColor}`} />
          </button>
        </div>
        <div className={`absolute left-1/2 -translate-x-1/2 -bottom-[215px] md:-bottom-[210px] w-[325px] h-[325px] rounded-full bg-[#FFF] border-[5px] ${borderColor} z-10 flex justify-center pt-5 md:pt-6`}>
          <Image src="/Home/CB Logo.png" alt="Logo" width={140} height={70} className="object-contain h-[32px] md:h-[38px] w-auto relative z-20" />
        </div>
      </div>
    </div>
  );
}

// 4. Centered Zoomed Card (Scales up exact same design)
function CenteredOverlay({ story, onClose }) {
  const isVideo = story.type === "video";
  const isEven = story.id % 2 === 0;
  const bgColor = isEven ? "bg-[#314A8A]" : "bg-[#EF1623]";
  const playIconColor = isEven ? "text-[#314A8A]" : "text-[#EF1623]";
  const borderColor = isEven ? "border-[#E8F3FB]" : "border-[#FDEBEE]";

  const [isFlipped, setIsFlipped] = useState(false);
  const videoRef = useRef(null);

  // Auto-play when flipped
  useEffect(() => {
    if (videoRef.current) {
      if (isFlipped) {
        const playTimer = setTimeout(() => {
          videoRef.current.play().catch(e => console.log(e));
        }, 300);
        return () => clearTimeout(playTimer);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isFlipped]);

  const handleClose = (e) => {
    e.stopPropagation();
    if (isFlipped) {
      setIsFlipped(false); // If playing video, just close video first
    } else {
      onClose(); // Otherwise close the whole overlay
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300" onClick={onClose}>
      
      {/* This container holds the card and explicitly scales it up by 1.5x (50% larger).
        It renders the EXACT same layout as the normal cards.
      */}
      <div 
        className="relative w-[320px] h-[360px] scale-[1.1] sm:scale-[1.3] md:scale-[1.5] lg:scale-[1.6] [perspective:1000px] cursor-default" 
        onClick={e => e.stopPropagation()}
      >
        <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
          
          {/* FRONT FACE OF CARD */}
          <div className={`absolute inset-0 w-full h-full rounded-[16px] overflow-hidden flex flex-col [backface-visibility:hidden] bg-white shadow-2xl`}>
            
            {isVideo ? (
              /* --- EXACT VIDEO CARD FRONT --- */
              <div className={`w-full h-full flex flex-col ${bgColor}`}>
                <div className="p-4 relative z-10 w-[70%]">
                  <h3 className="text-white font-semibold text-[20px] leading-tight">{story.name}</h3>
                  <p className="text-white/90 text-[12px] mt-1">{story.role.split(" at ")[0]}</p>
                </div>
                <div className="absolute top-0 right-0 z-20">
                  <div className="relative w-[90px] h-[90px] bg-white rounded-bl-[20px] rounded-tr-[16px] border-b-[4px] border-l-[4px] border-white overflow-hidden">
                    <Image src={story.studentImageVideo || story.studentImage} alt={story.name} fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pb-8 z-20 pointer-events-none">
                  <button 
                    onClick={() => setIsFlipped(true)}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto hover:scale-110 transition-transform cursor-pointer"
                  >
                    <FaPlay className={`w-5 h-5 ml-1 ${playIconColor}`} />
                  </button>
                </div>
                <div className={`absolute left-1/2 -translate-x-1/2 -bottom-[210px] w-[325px] h-[325px] rounded-full bg-[#FFF] border-[5px] ${borderColor} z-10 flex justify-center pt-6`}>
                  <Image src="/Home/CB Logo.png" alt="Logo" width={140} height={70} className="object-contain h-[38px] w-auto relative z-20" />
                </div>
              </div>
            ) : (
              /* --- EXACT PHOTO CARD FRONT --- */
              <div className="w-full h-full flex flex-col bg-white">
                <div className={`relative h-[135px] flex-shrink-0 ${isEven ? "bg-[#314A8A]" : "bg-[#EF1623]"}`}>
                  <div className="absolute right-0 z-20 bg-white rounded-bl-lg px-2 py-1">
                    <Image src={story.companyLogo} alt="Logo" width={50} height={50} className="object-contain h-auto sm:w-[90px]" />
                  </div>
                  <div className="absolute -bottom-[1px] left-0 w-full">
                    <svg viewBox="0 0 320 140" className="block w-full h-[100px]" preserveAspectRatio="none">
                      <path d="M-5,135 C55,18 265,18 325,135 L325,140 L-5,140 Z" fill="#ffffff" />
                      <path d="M-5,135 C55,18 265,18 325,135" fill="none" stroke={isEven ? "#FDEBEE" : "#E8F3FB"} strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] z-30 flex items-center justify-center w-full">
                    <div className="relative -top-10 w-[85px] h-[85px] rounded-full overflow-hidden shadow-md flex-shrink-0 bg-white">
                      <Image src={story.studentImage} alt={story.name} fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="pt-4 pb-0 px-4 text-center flex flex-col justify-start flex-grow">
                  <h3 className="text-[#111111] font-semibold text-[20px] leading-tight">{story.name}</h3>
                  <p className="text-[#202020] text-[12px] mt-1">{story.role}</p>
                  <p className="text-[#5F5F5F] text-[13px] leading-[22px] mt-3 line-clamp-4">&ldquo;{story.quote}&rdquo;</p>
                </div>
              </div>
            )}

          </div>

          {/* BACK FACE (VIDEO PLAYER) */}
          {isVideo && (
            <div className="absolute inset-0 w-full h-full bg-black rounded-[16px] overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl flex items-center justify-center">
              
              <video 
                ref={videoRef} 
                src={story.videoUrl} 
                controls 
                // controlsList="nodownload" 
                className="w-full h-full object-contain bg-black rounded-[16px]" 
                playsInline 
              />
            </div>
          )}
        </div>

        {/* Global Close Button for Overlay */}
        <button 
          onClick={handleClose} 
          className="absolute -top-5 -right-5 z-[99999] text-white bg-red-600 hover:bg-red-700 rounded-full p-2 shadow-2xl transition-transform hover:scale-110 cursor-pointer"
        >
          <FaTimes className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}

// 5. Main Consolidated Component
export default function ConsolidateUI() {
  const [activeStory, setActiveStory] = useState(null);

  const repeatedStories = [
    ...storiesData,
    ...storiesData,
    ...storiesData,
  ];

  return (
    <section className={`${manrope.className} w-full bg-[#F5F5F5] py-6 md:py-10 overflow-hidden`}>
      <div className="text-center px-3">
        <h2 className="text-[#314A8A] font-bold text-[22px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] 2xl:text-[34px] leading-tight">
          <span className="text-[#EF1623]">Real Students. Real Placements. Real Transformations.</span>
        </h2>
        <p className="max-w-4xl mx-auto mt-3 sm:mt-2 text-[#2E4378] font-normal text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
          Each student has a different journey. But with the right training and guidance, they all reached the same destination: <span className="text-[#28A745] font-semibold">A Successful IT job</span>
        </p>
      </div>

      <div className="relative overflow-visible mt-10 w-full py-4 group">
        <div className={`flex items-center gap-5 sm:gap-6 lg:gap-8 w-max px-8 animate-marquee transition-all ${activeStory ? "![animation-play-state:paused]" : "group-hover:![animation-play-state:paused]"}`}>
          
          {/* Automatically handles rendering the correct card based on the alternating data */}
          {repeatedStories.map((story, idx) => (
            <div key={idx} className="flex">
              {story.type === "video" ? (
                <MarqueeVideoCard story={story} onClick={() => setActiveStory(story)} />
              ) : (
                <MarqueePhotoCard story={story} onClick={() => setActiveStory(story)} />
              )}
            </div>
          ))}

        </div>
      </div>

      <div className="flex justify-center mt-6 pb-6">
        <button className="bg-[#314A8A] text-white rounded-full px-8 md:px-12 py-3 md:py-4 text-[13px] sm:text-[14px] font-medium hover:opacity-90 transition cursor-pointer shadow-lg">
          See All Student Stories
        </button>
      </div>

      {/* Renders the beautifully centered version when clicked */}
      {activeStory && (
        <CenteredOverlay 
          story={activeStory} 
          onClose={() => setActiveStory(null)} 
        />
      )}
    </section>
  );
}