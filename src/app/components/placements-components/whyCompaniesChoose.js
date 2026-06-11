import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
import React from 'react';
import { Lightbulb, Settings, ShieldCheck } from 'lucide-react';
import { LuRocket } from "react-icons/lu";

export default function WhyCompaniesChooseUs() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Fresh Perspectives',
      description:
        'Students bring innovative ideas and a fresh outlook, driving creativity and problem-solving.',
    },
    {
      icon: <LuRocket className="w-8 h-8" />,
      title: 'Future Talent Pipeline',
      description:
        'Identify and nurture promising talent early, building a strong pipeline for future leadership.',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Adaptability & Tech-Savvy',
      description:
        'Graduates are quick learners, adaptable, and proficient with the latest technologies and tools.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Cost-Effective Solutions',
      description:
        'Hiring new graduates can be a cost-effective way to fill entry-level positions and fuel growth.',
    },
  ];

  return (
    <section className={`${manrope.className} bg-[#2a3b63] py-8 px-6 md:px-8 lg:px-14 font-sans`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-12 md:mb-16">
          Why Companies Choose Our Talented Students
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon Container */}
              <div className="flex-shrink-0 text-white mt-1">
                {feature.icon}
              </div>
              
              {/* Text Container */}
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}