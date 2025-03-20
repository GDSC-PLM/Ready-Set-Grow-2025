"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Activities() {
  const [activeTab, setActiveTab] = useState("ready");

  const tabs = [
    { id: "ready", label: "Ready", color: "bg-[#EA4335]" },
    { id: "set", label: "Set", color: "bg-[#FDB528]" },
    { id: "grow", label: "Grow", color: "bg-[#34A853]" }
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = currentIndex + newDirection;
    
    if (nextIndex >= 0 && nextIndex < tabs.length) {
      setPage([page + newDirection, newDirection]);
      setActiveTab(tabs[nextIndex].id);
    }
  };

  return (
    <div className="bg-[#FDEFE6]">
      <div className="container mx-auto px-4 md:px-4 py-12">
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-16 py-1 rounded-full text-md font-semibold transition-all duration-300
                ${activeTab === tab.id 
                  ? `${tab.color} text-white` 
                  : 'bg-white text-black border-2 border-black hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 }, // Increased stiffness and damping for faster animation
              opacity: { duration: 0.15 } // Reduced opacity transition duration
            }}
            className="w-full"
          >
            {activeTab === "ready" && (
              <div className="min-h-[500px]">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
                  {/* Left Side */}
                  <div className="flex-1 space-y-8">
                    {/* Top - Heading */}
                    <div>
                      <img 
                        src="/images/assets/READY-HEADING.svg" 
                        alt="Ready Heading" 
                        className="w-full max-w-[320px]" 
                      />
                    </div>
                    
                    {/* Bottom - Description */}
                    <div className="text-lg text-black max-w-[80%]"> 
                      <p>
                        READY in overcoming self-doubt and focusing on building confidence to develop innate skills for career growth.
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Floating Image */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <img 
                      src="/images/assets/READY-FLOATING.svg" 
                      alt="Ready Floating Elements" 
                      className="w-full max-w-[453px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "set" && (
              <div className="min-h-[500px]">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
                  {/* Left Side */}
                  <div className="flex-1 space-y-8">
                    {/* Top - Heading */}
                    <div>
                      <img 
                        src="/images/assets/SET-HEADING.svg" 
                        alt="Set Heading" 
                        className="w-full max-w-[240px]"
                      />
                    </div>
                    
                    {/* Bottom - Description */}
                    <div className="text-lg text-black max-w-[80%]">
                      <p>
                      SET the pace in preparing for career success by developing professional profiles, networking strategies, and excelling in interviews.
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Floating Image */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <img 
                      src="/images/assets/SET-FLOATING.svg" 
                      alt="Set Floating Elements" 
                      className="w-full max-w-[453px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "grow" && (
              <div className="min-h-[500px]">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
                  {/* Left Side */}
                  <div className="flex-1 space-y-8">
                    {/* Top - Heading */}
                    <div>
                      <img 
                        src="/images/assets/GROW-HEADING.svg" 
                        alt="Grow Heading" 
                        className="w-full max-w-[280px]"
                      />
                    </div>
                    
                    {/* Bottom - Description */}
                    <div className="text-lg text-gray-700 max-w-[82%]">
                      <p>
                        Introducing students to career development, overcoming self-doubt, and understanding trends in the professional landscape.
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Floating Image */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <img 
                      src="/images/assets/GROW-FLOATING.svg" 
                      alt="Grow Floating Elements" 
                      className="w-full max-w-[453px]"
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Optional: Navigation arrows */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-2 disabled:opacity-50"
            disabled={tabs.findIndex(tab => tab.id === activeTab) === 0}
          >
            ← Previous
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-2 disabled:opacity-50"
            disabled={tabs.findIndex(tab => tab.id === activeTab) === tabs.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
