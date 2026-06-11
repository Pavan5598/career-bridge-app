"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = ["Initiate", "Plan", "Execute", "Complete"];

export default function LoopingStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const totalDuration = 5000;
  const checkpoints = [0.12, 0.333, 0.666, 0.94];

  // 👇 Visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Animation loop ONLY when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = performance.now();

    const update = () => {
      const elapsed = (performance.now() - start) % totalDuration;
      const p = elapsed / totalDuration;

      setProgress(p);

      let currentStep = 0;

      checkpoints.forEach((point, index) => {
        if (p >= point) currentStep = index;
      });

      setActiveStep(currentStep);

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="bg-white p-12 rounded-2xl w-full max-w-lg mx-auto lg:pt-5"
    >
      <div className="relative flex items-center justify-between">

        {/* Background line */}
        <div className="absolute top-1/2 left-[12px] right-[30px] -translate-y-1/2 h-0.5 bg-slate-200 z-0" />

        {/* Progress line */}
        <motion.div
          className="absolute top-1/2 left-[5px] -translate-y-1/2 h-0.5 z-0 origin-left"
          style={{
            width: `${progress * 94}%`,
            background:
              "linear-gradient(90deg, #00C3DB 98.48%, #006875 100%)",
          }}
        />

        {/* Steps */}
        {steps.map((label, index) => {
          const isActive = index <= activeStep;

          return (
            <div
              key={label}
              className="relative z-10 flex flex-col items-center top-3"
            >
              <div
                className={`h-7 w-7 md:h-8 md:w-8 rounded-full border-[6px] bg-white transition-all duration-300 ${
                  isActive
                    ? "border-[#00AEC3] shadow-[0_0_14px_rgba(0,174,195,0.6)] scale-110"
                    : "border-slate-300 scale-100"
                }`}
              />

              <span
                className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-[#006875]" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}