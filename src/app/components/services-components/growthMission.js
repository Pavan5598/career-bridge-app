"use client";
import { Manrope } from "next/font/google";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineBackHand } from "react-icons/md";
import { PiCurrencyDollar } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { useId, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const leftFeatures = [
  {
    icon: <MdOutlineBackHand className="h-8 w-8" />,
    color: "text-[#00A150]",
    title: "Hands-on Learning",
    desc: "Practical exercises and real-world project experience",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    color: "text-[#FACC15]",
    title: "Topic-Based Training",
    desc: "Focused learning modules tailored to specific skills and technologies",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        />
      </svg>
    ),
    color: "text-[#2E4378]",
    title: "Global Exposure",
    desc: "Industry best practices and international standards",
  },
];

const rightFeatures = [
  {
    icon: <PiCurrencyDollar className="h-8 w-8" />,
    color: "text-[#FF7810]",
    title: "Budget-Friendly Models",
    desc: "Flexible pricing options that fit your budget",
  },
  {
    icon: <GoGoal className="h-8 w-8" />,
    color: "text-[#782200]",
    title: "Outcome-Driven Approach",
    desc: "Measurable results and performance metrics",
  },
  {
    icon: <MdAccessTime className="h-8 w-8" />,
    color: "text-[#E4202C]",
    title: "Flexible Batch Schedules",
    desc: "Convenient classroom timings for students and professionals",
  },
];

const allFeatures = [...leftFeatures, ...rightFeatures];

function polarToCartesian(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;

  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function arcPath(cx, cy, startDeg, endDeg, radius) {
  const start = polarToCartesian(cx, cy, radius, startDeg);

  const end = polarToCartesian(cx, cy, radius, endDeg);

  return `
    M ${start.x} ${start.y}
    A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}
  `;
}

function GrowthCircle({ activeIndex }) {
  const id = useId();

  const cx = 240;
  const cy = 240;
  const r = 185;

  const blueGradientId = `${id}-growthBlueGradient`;
  const redGradientId = `${id}-growthRedGradient`;

  const segments = [
    {
      start: 248,
      end: 291,
      color: `url(#${blueGradientId})`,
    },
    {
      start: 291,
      end: 334,
      color: "#FACC15",
    },
    {
      start: 334,
      end: 377,
      color: "#00A150",
    },
    {
      start: 377,
      end: 420,
      color: "#FF7810",
    },
    {
      start: 420,
      end: 463,
      color: "#782200",
    },
    {
      start: 463,
      end: 506,
      color: `url(#${redGradientId})`,
    },
  ];

  return (
    <svg
      viewBox="0 0 500 400"
      className="h-[300px] w-[320px] xl:h-[400px] xl:w-[450px]"
      aria-hidden="true"
    >
      <defs>
        {/* CHANGED: exact working blue gradient */}
        <linearGradient
          id={blueGradientId}
          x1="120"
          y1="315"
          x2="102.3"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2E4378" stopOpacity="0" />
          <stop offset="100%" stopColor="#2E4378" stopOpacity="1" />
        </linearGradient>

        {/* CHANGED: exact working red gradient */}
        <linearGradient
          id={redGradientId}
          x1="397.7"
          y1="214"
          x2="280"
          y2="315"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E4202C" stopOpacity="1" />
          <stop offset="100%" stopColor="#E4202C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g transform={`rotate(343 ${cx} ${cy})`}>
        {segments.map((seg, index) => {
          const isActive = activeIndex === index;

          return (
            <path
              key={index}
              d={arcPath(cx, cy, seg.start, seg.end, r)}
              fill="none"
              stroke={seg.color}
              strokeWidth={isActive ? 24 : 16}
              className="transition-all duration-500 ease-out"
            />
          );
        })}

        {segments.map((seg, index) => {
          const centerDeg = (seg.start + seg.end) / 2;

          const point = polarToCartesian(cx, cy, r, centerDeg);

          const isActive = activeIndex === index;

          return (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={isActive ? 18 : 8}
              fill={
                index === 0 ? "#2E4378" : index === 5 ? "#E4202C" : seg.color
              }
              stroke="white"
              strokeWidth={isActive ? "4" : "2"}
              className="transition-all duration-500 ease-out"
              style={{
                filter: isActive
                  ? "drop-shadow(0 0 10px rgba(0,0,0,.18))"
                  : "none",
              }}
            />
          );
        })}
      </g>

      <circle cx={cx} cy={cy} r="102" fill="#E8F3FB" />

      <foreignObject x={cx - 42} y={cy - 42} width={74} height={74}>
        <div className="flex items-center justify-center text-[#E4202C] text-3xl">
          <HiUserGroup />
        </div>
      </foreignObject>

      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#304A90"
      >
        Your Growth
      </text>

      <text
        x={cx}
        y={cy + 36}
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="#304A90"
      >
        Our Mission
      </text>

      <line
        x1={cx - 44}
        y1={cy + 48}
        x2={cx + 42}
        y2={cy + 48}
        stroke="#E4202C"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeatureCard({
  icon,
  color,
  title,
  desc,
  mobile = false,
  index,
  setActiveIndex,
  segmentMap,
}) {
  const borderColor = color.includes("[")
    ? color.replace("text-[", "").replace("]", "")
    : undefined;

  return (
    <div
      onMouseEnter={() => setActiveIndex(segmentMap[index])}
      onMouseLeave={() => setActiveIndex(null)}
      className={`
        group
        rounded-[16px]
        transition-all duration-300 ease-out
        hover:scale-[1.05]
        hover:-translate-y-1
        cursor-pointer
        ${
          mobile
            ? "grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 w-full border border-gray-200 bg-white p-5 border-l-[6px]"
            : "flex flex-col items-start w-[240px]"
        }
      `}
      style={mobile ? { borderLeftColor: borderColor } : undefined}
    >
      {/* ICON */}
      <span
        className={`
          inline-flex items-center justify-center
          rounded-[10px] bg-[#F2F2F2] p-2
          transition-all duration-300
          group-hover:scale-125
          ${mobile ? "col-start-1 row-span-2 mt-3" : "mb-3"}
          ${color}
        `}
      >
        {icon}
      </span>

      {/* TITLE */}
      <h3
        className={`
          font-bold text-[#111827] 
          ${mobile ? "col-start-2 text-[16px]" : "mb-2 text-[18px]"}
        `}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className={`
          text-[14px] leading-[1.6] text-[#6B7280] 
          ${mobile ? "col-start-2" : ""}
        `}
      >
        {desc}
      </p>
    </div>
  );
}

export default function GrowthMission() {
  const [activeIndex, setActiveIndex] = useState(null);
  const segmentMap = [2, 1, 0, 3, 4, 5];
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-[47px] pb-[72px] md:px-[120px]">
        <h2 className="mb-2 text-center text-[25px] font-extrabold text-[#EF2B2D] lg:text-[40px]">
          How We Are Different
        </h2>

        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-16">
          {/* MOBILE + TABLET */}
          <div className="flex w-full flex-col items-center gap-3 lg:hidden">
            <GrowthCircle activeIndex={activeIndex} />

            <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
              {allFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                  mobile
                  index={index}
                  setActiveIndex={setActiveIndex}
                  segmentMap={segmentMap}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex lg:items-center lg:gap-16">
            {/* LEFT */}
            <div className="flex flex-col gap-12">
              {leftFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={index === 1 ? "-translate-x-8" : ""}
                >
                  <FeatureCard
                    {...feature}
                    index={index}
                    setActiveIndex={setActiveIndex}
                    segmentMap={segmentMap}
                  />
                </div>
              ))}
            </div>

            <GrowthCircle activeIndex={activeIndex} />

            {/* RIGHT */}
            <div className="flex flex-col gap-12">
              {rightFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={index === 1 ? "translate-x-8" : ""}
                >
                  <FeatureCard
                    {...feature}
                    index={index + 3}
                    setActiveIndex={setActiveIndex}
                    segmentMap={segmentMap}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}