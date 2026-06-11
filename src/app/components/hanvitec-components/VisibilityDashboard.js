"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Uptime", value: "98.2%" },
  { label: "Avg.Resp", value: "4.2S" },
  { label: "Active", value: "1.4k" },
];

const bars = [45, 75, 49, 65, 70, 75, 50, 68, 55, 65];

const delays = ["delay-0", "delay-150", "delay-300"];

const barHeights = [
  "h-[45%]",
  "h-[75%]",
  "h-[49%]",
  "h-[65%]",
  "h-[70%]",
  "h-[75%]",
  "h-[50%]",
  "h-[68%]",
  "h-[55%]",
  "h-[65%]",
];

export default function VisibilityDashboard() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-4 py-2 sm:px-5 md:px-6 lg:px-8"
    >
      <div className="flex items-center justify-center">
        <div className="flex h-[230px] w-full max-w-[320px] flex-col justify-between rounded-2xl border border-[#006875] bg-white p-4 shadow-[0_0_4px_2px_rgba(0,104,117,0.25)]">
          {/* Top Stat Cards */}
          <div className="flex items-center justify-between gap-2">
            {stats.map((item, i) => (
              <div
                key={item.label}
                className={`
                  flex h-[46px] w-[70px] flex-col items-center justify-center gap-[2px]
                  rounded-md border border-[#C7C7C7] bg-white
                  shadow-[0_0_4px_rgba(0,0,0,0.25)]
                  transition-all duration-700
                  ${delays[i]}
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }
                `}
              >
                <span className="text-[9px] font-medium uppercase text-[#006875]">
                  {item.label}
                </span>

                <span className="text-[11px] font-bold text-slate-700">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Graph */}
          <div className="mt-2 flex h-[135px] w-full items-end justify-between gap-[6px]">
            {bars.map((_, i) => (
              <div
                key={i}
                className={`
    w-full origin-bottom rounded-t-[5px]
    bg-gradient-to-r from-[#006875] to-[#00C3DB]
    shadow-[0_3px_4px_rgba(0,104,117,0.25)]
    transition-all duration-700
    ${isVisible ? `${barHeights[i]} animate-bar-wave` : "h-0"}
    ${delays[i % delays.length]}
  `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
