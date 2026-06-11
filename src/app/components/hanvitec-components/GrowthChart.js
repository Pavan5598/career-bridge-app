"use client";

import { useEffect, useRef, useState } from "react";

const DATA = [
  { year: "Y1", complexity: 58, clarity: 32 },
  { year: "Y2", complexity: 72, clarity: 48 },
  { year: "Y3", complexity: 95, clarity: 55 },
  { year: "Y4", complexity: 110, clarity: 58 },
  { year: "Y5", complexity: 132, clarity: 84 },
];

const SPEED = 0.0012;

export default function GrowthChart() {
  const progressRef = useRef(0);
  const dirRef = useRef(1);
  const rafRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let last = null;
    let phase = "enter";
    let enterStart = null;

    const tick = (ts) => {
      if (!last) last = ts;

      const dt = ts - last;
      last = ts;

      if (phase === "enter") {
        if (!enterStart) enterStart = ts;

        const t = Math.min((ts - enterStart) / 500, 1);

        const eased =
          t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;

        progressRef.current = eased;
        setProgress(eased);

        if (t >= 1) {
          phase = "loop";
          dirRef.current = -1;
        }
      } else {
        progressRef.current += dirRef.current * SPEED * dt;

        if (progressRef.current >= 1) {
          progressRef.current = 1;
          dirRef.current = -1;
        }

        if (progressRef.current <= 0) {
          progressRef.current = 0;
          dirRef.current = 1;
        }

        setProgress(progressRef.current);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="w-full px-4 py-4 sm:px-5 sm:py-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-16 4xl:px-20">
      <div className="mx-auto flex h-[260px] w-full max-w-[390px] items-center justify-center rounded-[20px] border border-[#006875] bg-white p-5 shadow-[0_0_4px_2px_rgba(0,104,117,0.25)] sm:h-[288px] sm:p-6">
        <div className="flex w-full flex-col gap-5">
          {/* Legend */}
          <div className="flex items-center gap-4">
            <LegendItem
              colorClass="bg-teal-500"
              label="Complexity"
            />
            <LegendItem
              colorClass="bg-slate-800"
              label="Clarity"
            />
          </div>

          {/* Bars */}
          <div className="flex h-[160px] w-full items-end gap-4">
            {DATA.map((d) => (
              <div
                key={d.year}
                className="flex h-full flex-1 flex-col items-center"
              >
                <div className="flex w-full flex-1 items-end gap-1">
                  <div
                    className="flex-1 rounded-t-md rounded-b-sm bg-teal-500 transition-all duration-300 h-[calc(var(--h)*1%)]"
                    style={{
                      "--h": d.complexity * progress,
                    }}
                  />

                  <div
                    className="flex-1 rounded-t-md rounded-b-sm bg-slate-800 transition-all duration-300 h-[calc(var(--h)*1%)]"
                    style={{
                      "--h": d.clarity * progress,
                    }}
                  />
                </div>

                <p className="mt-1 text-center text-[11px] font-medium text-slate-400">
                  {d.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Legend */
function LegendItem({ colorClass, label }) {
  return (
    <span className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
      <span
        className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${colorClass}`}
      />
      {label}
    </span>
  );
}