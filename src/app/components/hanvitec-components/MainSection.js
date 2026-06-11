
// "use client";

// import { useEffect, useRef, useState, cloneElement } from "react";
// import { Merriweather, Poppins } from "next/font/google";
// import { motion, useScroll, useSpring } from "framer-motion";

// import GrowthChart from "./GrowthChart";
// import ToolsDiagram from "./ToolsDiagram";
// import VisibilityDashboard from "./VisibilityDashboard";
// import StepperAnimation from "./StepperAnimation";
// import HierarchyChart from "./ScalableComponent";

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["500"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const SECTIONS = [
//   {
//     id: "growth",
//     number: "01",
//     label: "Growth",
//     bgWord: "Growth",
//     heading: ["Growth increases", "complexity", "faster than clarity"],
//     accentIndex: 1,
//     body: [
//       "As businesses scale, teams expand and processes evolve. But clarity does not grow at the same pace.",
//       "This gap is where inefficiencies begin — not from failure, but from the natural friction of expanding systems without structural rhythm.",
//     ],
//     visualRight: true,
//     ExternalComponent: <GrowthChart />,
//   },
//   {
//     id: "tools",
//     number: "02",
//     label: "Tools",
//     bgWord: "Tools",
//     heading: ["Tools do not solve", "structural", "problems"],
//     accentIndex: 1,
//     body: [
//       "Organizations often introduce new tools to manage complexity.",
//       "Without defined workflows, tools create fragmentation instead of clarity.",
//       "Structure precedes software. Always.",
//     ],
//     visualRight: false,
//     ExternalComponent: <ToolsDiagram />,
//   },
//   {
//     id: "visibility",
//     number: "03",
//     label: "Visibility",
//     bgWord: "Vision",
//     heading: ["Visibility changes how", "decisions", "are made"],
//     accentIndex: 1,
//     body: [
//       "When operations are visible, decisions become faster and more confident.",
//       "Without visibility, decisions rely on updates, assumptions, and follow-ups — compounding delay at every layer.",
//     ],
//     visualRight: true,
//     ExternalComponent: <VisibilityDashboard />,
//   },
//   {
//     id: "execution",
//     number: "04",
//     label: "Execution",
//     bgWord: "Flow",
//     heading: ["Execution improves when", "flow", "is defined"],
//     accentIndex: 1,
//     body: [
//       "Work moves better when there is a clear path — from initiation to completion.",
//       "Defined flow reduces delays and improves consistency across every team, every project, every handoff.",
//     ],
//     visualRight: false,
//     ExternalComponent: <StepperAnimation />,
//   },
//   {
//     id: "scale",
//     number: "05",
//     label: "Scale",
//     bgWord: "Scale",
//     heading: ["Scalable business are", "structured", "businesses"],
//     accentIndex: 1,
//     body: [
//       "Growth without structure creates complexity. Structure enables consistency, predictability, and control.",
//       "The most resilient organizations are not the fastest — they are the most structured.",
//     ],
//     visualRight: true,
//     ExternalComponent: <HierarchyChart />,
//   },
// ];

// function EmptySlot({ label }) {
//   return (
//     <div className="flex h-full w-full items-center justify-center">
//       <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-300">
//         [ {label} Component ]
//       </p>
//     </div>
//   );
// }

// function SectionCard({
//   section,
//   index,
//   progress,
//   revealedSections,
// }) {
//   const beforeAccent = section.heading
//     .slice(0, section.accentIndex)
//     .join(" ");

//   const accentWord = section.heading[section.accentIndex];

//   const afterAccent = section.heading
//     .slice(section.accentIndex + 1)
//     .join(" ");

//   const isActive =
//   progress >= index + 0.25 ||
// revealedSections.includes(index);

//   const textBlock = (
//     <div
//       className={`relative flex flex-col justify-center overflow-hidden transition-all duration-700 ${
//         isActive
//           ? "opacity-100"
//           : "pointer-events-none opacity-0"
//       }`}
//     >
//       <span
//         aria-hidden
//         className={`
//           absolute top-1/2 z-0 pointer-events-none select-none whitespace-nowrap
//           -translate-y-1/2 leading-none
//           text-[clamp(5rem,12vw,18rem)]
//           3xl:text-[10rem]
//           4xl:text-[20rem]
//           text-[rgba(39,39,39,0.08)]
//           ${merriweather.className}
//           left-1/2 -translate-x-1/2
//           lg:left-auto lg:translate-x-0
//           ${index % 2 === 0 ? "lg:left-0" : "lg:right-0"}
//         `}
//       >
//         {section.bgWord}
//       </span>

//       <div
//   className="mx-auto flex flex-col justify-center px-4 sm:px-8 md:px-10 text-center md:items-center lg:items-start lg:text-left 3xl:px-20 4xl:px-28 ">
//         <p className="relative z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-600 lg:text-sm">
//           — {section.number} — {section.label}
//         </p>

//         <h2
//           className={`
//             relative z-10 mb-3 max-w-lg
//             text-[34px] font-medium leading-[1.15] text-[#272727]
//             lg:text-[42px]
//             3xl:max-w-3xl 3xl:text-[56px]
//             4xl:text-[68px]
//             ${merriweather.className}
//           `}
//         >
//           {beforeAccent}{" "}
//           <span className="text-[#006875]">
//             {accentWord}
//           </span>{" "}
//           {afterAccent}
//         </h2>

//         <div className="relative z-10 max-w-md space-y-1 3xl:max-w-2xl 3xl:space-y-4 4xl:max-w-3xl">
//           {section.body.map((para, i) => (
//             <p
//               key={i}
//               className={`
//                 text-[14px] leading-[1.75] text-[#4C4C4C]
//                 3xl:text-[18px]
//                 4xl:text-[22px]
//                 ${poppins.className}
//               `}
//             >
//               {para}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const visualBlock = (
//     <div
//       className={`flex h-full w-full items-center justify-center transition-all duration-700 ${
//         isActive
//           ? "opacity-100"
//           : "pointer-events-none opacity-0"
//       }`}
//     >
//       {section.ExternalComponent ? (
//         cloneElement(section.ExternalComponent, {
//           play: isActive,
//         })
//       ) : (
//         <EmptySlot label={section.label} />
//       )}
//     </div>
//   );

//   return (
//     <div className="relative flex h-fit items-center">
//       <div className="relative grid w-full grid-cols-1 gap-y-4 pt-2 pb-2 sm:gap-y-8 md:gap-y-6 md:pt-4 md:pb-4 lg:grid-cols-2 lg:gap-y-0 lg:pt-6 lg:pb-6 3xl:gap-20 4xl:gap-36">
//         <div
//           className={`
//             absolute left-1/2 top-0 z-30 hidden h-2 w-2
//             -translate-x-1/2 -translate-y-1/2 rounded-full
//             transition-colors duration-300 lg:block
//             ${
//               isActive
//                 ? "bg-[#006875]"
//                 : "bg-[#4c4c4c]"
//             }
//           `}
//         />

//         {section.visualRight ? (
//           <>
//             <div>{textBlock}</div>
//             <div>{visualBlock}</div>
//           </>
//         ) : (
//           <>
//             <div className="order-2 lg:order-1">
//               {visualBlock}
//             </div>
//             <div className="order-1 lg:order-2">
//               {textBlock}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function ProblemSection() {
//   const sectionRef = useRef(null);

//   const [progressState, setProgressState] =
//     useState({
//       progress: 0,
//     });

//   const [revealedSections, setRevealedSections] =
//     useState([]);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   useEffect(() => {
//     return scaleY.on("change", (v) => {
//       const progress = v * SECTIONS.length;

//       setProgressState({
//         progress,
//       });

//       setRevealedSections((prev) => {
//         const next = [...prev];

//         SECTIONS.forEach((_, index) => {
//           if (progress >= index + 0.25 && !next.includes(index)){
//             next.push(index);
//           }
//         });

//         return next;
//       });
//     });
//   }, [scaleY]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-x-hidden bg-white"
//     >
//       <motion.div
//   aria-hidden
//   style={{ scaleY }}
//   className="absolute left-1/2 top-0 z-10 hidden h-full origin-top -translate-x-1/2 lg:block"
// >
//   <div className="h-full w-[3px] bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
// </motion.div>

//       <div className="relative z-20">
//         {SECTIONS.map((section, index) => (
//           <SectionCard
//             key={section.id}
//             section={section}
//             index={index}
//             progress={progressState.progress}
//             revealedSections={revealedSections}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState, cloneElement } from "react";
import { Merriweather, Poppins } from "next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";

import GrowthChart from "./GrowthChart";
import ToolsDiagram from "./ToolsDiagram";
import VisibilityDashboard from "./VisibilityDashboard";
import StepperAnimation from "./StepperAnimation";
import HierarchyChart from "./ScalableComponent";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const SECTIONS = [
  {
    id: "growth",
    number: "01",
    label: "Growth",
    bgWord: "Growth",
    heading: ["Growth increases", "complexity", "faster than clarity"],
    accentIndex: 1,
    body: [
      "As businesses scale, teams expand and processes evolve. But clarity does not grow at the same pace.",
      "This gap is where inefficiencies begin — not from failure, but from the natural friction of expanding systems without structural rhythm.",
    ],
    visualRight: true,
    ExternalComponent: <GrowthChart />,
  },
  {
    id: "tools",
    number: "02",
    label: "Tools",
    bgWord: "Tools",
    heading: ["Tools do not solve", "structural", "problems"],
    accentIndex: 1,
    body: [
      "Organizations often introduce new tools to manage complexity.",
      "Without defined workflows, tools create fragmentation instead of clarity.",
      "Structure precedes software. Always.",
    ],
    visualRight: false,
    ExternalComponent: <ToolsDiagram />,
  },
  {
    id: "visibility",
    number: "03",
    label: "Visibility",
    bgWord: "Vision",
    heading: ["Visibility changes how", "decisions", "are made"],
    accentIndex: 1,
    body: [
      "When operations are visible, decisions become faster and more confident.",
      "Without visibility, decisions rely on updates, assumptions, and follow-ups — compounding delay at every layer.",
    ],
    visualRight: true,
    ExternalComponent: <VisibilityDashboard />,
  },
  {
    id: "execution",
    number: "04",
    label: "Execution",
    bgWord: "Flow",
    heading: ["Execution improves when", "flow", "is defined"],
    accentIndex: 1,
    body: [
      "Work moves better when there is a clear path — from initiation to completion.",
      "Defined flow reduces delays and improves consistency across every team, every project, every handoff.",
    ],
    visualRight: false,
    ExternalComponent: <StepperAnimation />,
  },
  {
    id: "scale",
    number: "05",
    label: "Scale",
    bgWord: "Scale",
    heading: ["Scalable business are", "structured", "businesses"],
    accentIndex: 1,
    body: [
      "Growth without structure creates complexity. Structure enables consistency, predictability, and control.",
      "The most resilient organizations are not the fastest — they are the most structured.",
    ],
    visualRight: true,
    ExternalComponent: <HierarchyChart />,
  },
];

function EmptySlot({ label }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-300">
        [ {label} Component ]
      </p>
    </div>
  );
}

function SectionCard({
  section,
  index,
  progress,
  revealedSections,
}) {
  const beforeAccent = section.heading
    .slice(0, section.accentIndex)
    .join(" ");

  const accentWord = section.heading[section.accentIndex];

  const afterAccent = section.heading
    .slice(section.accentIndex + 1)
    .join(" ");

  const isActive =
  progress >= index + 0.25 ||
revealedSections.includes(index);

  const textBlock = (
    <div
      className={`relative flex flex-col justify-center overflow-hidden transition-all duration-700 ${
        isActive
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <span
        aria-hidden
        className={`
          absolute top-1/2 z-0 pointer-events-none select-none whitespace-nowrap
          -translate-y-1/2 leading-none
          text-[clamp(5rem,12vw,18rem)]
          3xl:text-[10rem]
          4xl:text-[20rem]
          text-[rgba(39,39,39,0.08)]
          ${merriweather.className}
          left-1/2 -translate-x-1/2
          lg:left-auto lg:translate-x-0
          ${index % 2 === 0 ? "lg:left-0" : "lg:right-0"}
        `}
      >
        {section.bgWord}
      </span>

      <div
  className="mx-auto flex flex-col justify-center px-4 sm:px-8 md:px-10 text-center md:items-center lg:items-start lg:text-left 3xl:px-20 4xl:px-28 ">
        <p className="relative z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-600 lg:text-sm">
          — {section.number} — {section.label}
        </p>

        <h2
          className={`
            relative z-10 mb-3 max-w-lg
            text-[34px] font-medium leading-[1.15] text-[#272727]
            lg:text-[42px]
            3xl:max-w-3xl 3xl:text-[56px]
            4xl:text-[68px]
            ${merriweather.className}
          `}>
          {beforeAccent}{" "}
          <span className="text-[#006875]">
            {accentWord}
          </span>{" "}
          {afterAccent}
        </h2>

        <div className="relative z-10 max-w-md space-y-1 3xl:max-w-2xl 3xl:space-y-4 4xl:max-w-3xl">
          {section.body.map((para, i) => (
            <p
              key={i}
              className={`
                text-[14px] leading-[1.75] text-[#4C4C4C]
                3xl:text-[18px]
                4xl:text-[22px]
                ${poppins.className}
              `}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const visualBlock = (
    <div
      className={`flex h-full w-full items-center justify-center transition-all duration-700 ${
        isActive
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {section.ExternalComponent ? (
        cloneElement(section.ExternalComponent, {
          play: isActive,
        })
      ) : (
        <EmptySlot label={section.label} />
      )}
    </div>
  );

  return (
    <div className="relative flex h-fit items-center">
      <div className="relative grid w-full grid-cols-1 gap-y-4 pt-2 pb-2 sm:gap-y-8 md:gap-y-6 md:pt-4 md:pb-4 lg:grid-cols-2 lg:gap-y-0 lg:pt-6 lg:pb-12 3xl:gap-20 4xl:gap-36">
        <div
          className={`
            absolute left-1/2 top-0 z-30 hidden h-2 w-2
            -translate-x-1/2 -translate-y-1/2 rounded-full
            transition-colors duration-300 lg:block
            ${
              isActive
                ? "bg-[#006875]"
                : "bg-[#4c4c4c]"
            }
          `}
        />

        {section.visualRight ? (
          <>
            <div>{textBlock}</div>
            <div>{visualBlock}</div>
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">
              {visualBlock}
            </div>
            <div className="order-1 lg:order-2">
              {textBlock}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef(null);

  const [progressState, setProgressState] =
    useState({
      progress: 0,
    });

  const [revealedSections, setRevealedSections] =
    useState([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scaleY.on("change", (v) => {
      const progress = v * SECTIONS.length;

      setProgressState({
        progress,
      });

      setRevealedSections((prev) => {
        const next = [...prev];

        SECTIONS.forEach((_, index) => {
          if (progress >= index + 0.25 && !next.includes(index)){
            next.push(index);
          }
        });

        return next;
      });
    });
  }, [scaleY]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-hidden bg-white py-4 lg:py-40"
    >
      <motion.div
  aria-hidden
  style={{ 
    scaleY,
    originY: 0,    // Replaces Tailwind's origin-top (forces it to scale from the top)
    x: "-50%"      // Replaces Tailwind's -translate-x-1/2 (keeps it perfectly centered)
  }}
  className="absolute left-1/2 top-0 z-10 hidden h-full lg:block"
>
  <div className="h-full w-[3px] bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
</motion.div>

      <div className="relative z-20">
        {SECTIONS.map((section, index) => (
          <SectionCard
            key={section.id}
            section={section}
            index={index}
            progress={progressState.progress}
            revealedSections={revealedSections}
          />
        ))}
      </div>
    </section>
  );
}