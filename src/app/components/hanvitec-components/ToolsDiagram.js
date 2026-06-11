"use client";

import { useEffect, useRef, useState } from "react";

const NODES = {
  slack: {
    label: "Slack",
    x: 50,
    y: 10,
    width: "w-20",
    border: "border-[#081E52]",
    text: "text-[#081E52]",
    shadow: "shadow-[0_0_4px_rgba(8,30,82,0.5)]",
  },
  crm: {
    label: "CRM",
    x: 25,
    y: 33,
    width: "w-16",
    border: "border-[#F79E07]",
    text: "text-[#F79E07]",
    shadow: "shadow-[0_0_4px_rgba(247,158,7,0.5)]",
  },
  drive: {
    label: "Drive",
    x: 75,
    y: 33,
    width: "w-16",
    border: "border-[#92001B]",
    text: "text-[#92001B]",
    shadow: "shadow-[0_0_4px_rgba(146,0,27,0.5)]",
  },
  email: {
    label: "Email",
    x: 50,
    y: 46,
    width: "w-[72px]",
    border: "border-[#F82D4E]",
    text: "text-[#F82D4E]",
    shadow: "shadow-[0_0_4px_rgba(248,45,78,0.5)]",
  },
  notion: {
    label: "Notion",
    x: 25,
    y: 62,
    width: "w-20",
    border: "border-[#006875]",
    text: "text-[#006875]",
    shadow: "shadow-[0_0_4px_rgba(0,104,117,0.5)]",
  },
  sheets: {
    label: "Sheets",
    x: 75,
    y: 62,
    width: "w-20",
    border: "border-[#2679D2]",
    text: "text-[#2679D2]",
    shadow: "shadow-[0_0_4px_rgba(38,121,210,0.5)]",
  },
};

const LINE_PHASES = {
  left: [["slack", "notion"]],
  right: [["slack", "sheets"]],
  cross: [
    ["crm", "email"],
    ["drive", "email"],
    ["email", "notion"],
    ["email", "sheets"],
  ],
};

const STEPS = [
  { nodes: ["slack"], lines: [], duration: 700 },
  {
    nodes: ["slack", "crm", "notion"],
    lines: ["left"],
    duration: 950,
  },
  {
    nodes: ["slack", "crm", "notion", "drive", "sheets"],
    lines: ["left", "right"],
    duration: 950,
  },
  {
    nodes: ["slack", "crm", "notion", "drive", "sheets", "email"],
    lines: ["left", "right", "cross"],
    duration: 1000,
  },
  {
    nodes: ["slack", "crm", "notion", "drive", "sheets", "email"],
    lines: ["left", "right", "cross"],
    showText: true,
    duration: 800,
  },
  {
    nodes: ["slack", "crm", "notion", "drive", "sheets", "email"],
    lines: ["left", "right", "cross"],
    showText: true,
    showTags: true,
    duration: 2000,
  },
];

function DashedArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 32"
      fill="none"
      className="w-4 h-6"
    >
      <path
        d="M12.5469 1.5C12.5469 0.671574 11.8753 3.62117e-08 11.0469 0C10.2184 -3.62117e-08 9.54688 0.671574 9.54688 1.5L11.0469 1.5L12.5469 1.5ZM9.98621 31.5607C10.572 32.1464 11.5217 32.1464 12.1075 31.5607L21.6535 22.0147C22.2393 21.4289 22.2393 20.4792 21.6535 19.8934C21.0677 19.3076 20.1179 19.3076 19.5322 19.8934L11.0469 28.3787L2.56159 19.8934C1.97581 19.3076 1.02606 19.3076 0.440274 19.8934C-0.145513 20.4792 -0.145513 21.4289 0.440274 22.0147L9.98621 31.5607ZM12.5469 27.5517C12.5469 26.7232 11.8753 26.0517 11.0469 26.0517C10.2184 26.0517 9.54688 26.0517 9.54688 27.5517L11.0469 27.5517L12.5469 27.5517ZM9.54688 21.655C9.54688 22.4834 10.2184 23.155 11.0469 23.155C11.8753 23.155 12.5469 22.4834 12.5469 21.655L11.0469 21.655L9.54688 21.655ZM12.5469 15.7583C12.5469 14.9299 11.8753 14.2583 11.0469 14.2583C10.2184 14.2583 9.54688 14.9299 9.54688 15.7583L11.0469 15.7583L12.5469 15.7583ZM9.54688 9.86167C9.54688 10.6901 10.2184 11.3617 11.0469 11.3617C11.8753 11.3617 12.5469 10.6901 12.5469 9.86167L11.0469 9.86167L9.54688 9.86167ZM12.5469 5.56C12.5469 4.73157 11.8753 4.06 11.0469 4.06C10.2184 4.06 9.54688 4.73157 9.54688 5.56L11.0469 5.56L12.5469 5.56ZM9.54688 2.85333C9.54688 3.68176 10.2184 4.35333 11.0469 4.35333C11.8753 4.35333 12.5469 3.68176 12.5469 2.85333L11.0469 2.85333L9.54688 2.85333ZM11.0469 30.5L12.5469 30.5L12.5469 27.5517L11.0469 27.5517L9.54688 27.5517L9.54688 30.5L11.0469 30.5ZM11.0469 21.655L12.5469 21.655L12.5469 15.7583L11.0469 15.7583L9.54688 15.7583L9.54688 21.655L11.0469 21.655ZM11.0469 9.86167L12.5469 9.86167L12.5469 6.91333L11.0469 6.91333L9.54688 6.91333L9.54688 9.86167L11.0469 9.86167ZM11.0469 6.91333L12.5469 6.91333L12.5469 5.56L11.0469 5.56L9.54688 5.56L9.54688 6.91333L11.0469 6.91333ZM11.0469 2.85333L12.5469 2.85333L12.5469 1.5L11.0469 1.5L9.54688 1.5L9.54688 2.85333L11.0469 2.85333Z"
        fill="#006875"
      />
    </svg>
  );
}
export default function ToolsDiagram() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(-1);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    if (!isVisible) {
      clearAll();
      setStep(-1);
      return;
    }

    const run = (s) => {
      setStep(s);

      timerRef.current = setTimeout(() => {
        const next = s + 1;

        if (next < STEPS.length) {
          run(next);
        } else {
          timerRef.current = setTimeout(() => {
            run(0);
          }, 500);
        }
      }, STEPS[s].duration);
    };

    setStep(-1);

    timerRef.current = setTimeout(() => {
      run(0);
    }, 200);

    return clearAll;
  }, [isVisible]);

  const current =
    step >= 0 ? STEPS[step] : { nodes: [], lines: [] };

  const visibleNodes = new Set(current.nodes || []);
  const activePhases = new Set(current.lines || []);
  const { showText, showTags } = current;

  const activeLines = Object.entries(LINE_PHASES)
    .filter(([phase]) => activePhases.has(phase))
    .flatMap(([, pairs]) => pairs);

  return (
    <div
      ref={containerRef}
      className="w-[360px] p-4 flex flex-col items-center bg-white overflow-hidden mx-auto"
    >
      <div className="relative w-full h-[180px]">
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          {activeLines.map(([a, b]) => {
            const na = NODES[a];
            const nb = NODES[b];

            return (
              <line
                key={`${a}-${b}`}
                x1={`${na.x}%`}
                y1={`${na.y}%`}
                x2={`${nb.x}%`}
                y2={`${nb.y}%`}
                stroke="#006875"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {Object.entries(NODES).map(([key, n]) => (
          <div
            key={key}
            className={`absolute transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
              visibleNodes.has(key)
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
            }}
          >
            <div
              className={`
                ${n.width}
                h-7
                rounded-md
                border
                bg-white
                flex
                items-center
                justify-center
                text-xs
                font-bold
                ${n.border}
                ${n.text}
                ${n.shadow}
              `}
            >
              {n.label}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`flex flex-col items-center transition-opacity duration-500 -mt-10 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-['Libre_Baskerville'] text-[10px] text-[#4C4C4C]">
          Structure
        </p>

        <DashedArrow />

        <p className="font-['Libre_Baskerville'] text-[10px] text-[#006875]">
          First
        </p>
      </div>

      <div
        className={`flex gap-2 w-full transition-opacity duration-500 ${
          showTags ? "opacity-100" : "opacity-0"
        }`}
      >
        {["Input", "Flow", "Output"].map((tag) => (
          <div
            key={tag}
            className="flex-1 py-2 text-white text-xs font-bold rounded-md text-center bg-[#006875]"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}