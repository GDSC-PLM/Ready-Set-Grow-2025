"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { readyActivities, setActivities, growActivities } from "../../data/activities-data";
import ActivityCard from "../../components/ActivityCard";
import Modal from "../../components/Modal";

export default function Activities() {
  const [activeTab, setActiveTab] = useState("ready");
  const [selectedActivity, setSelectedActivity] = useState(null);

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

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="bg-[#FDEFE6]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-8 sm:px-12 md:px-16 py-1.5 rounded-full text-sm md:text-md font-semibold transition-all duration-300
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
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.15 }
            }}
            className="w-full"
          >
            {/* READY Section */}
            {activeTab === "ready" && (
              <>
                <div className="min-h-[400px] md:min-h-[500px]">
                  <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
                    {/* Left Side */}
                    <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start">
                        <img 
                          src="/images/assets/READY-HEADING.svg" 
                          alt="Ready Heading" 
                          className="w-[280px] sm:w-[300px] md:w-full md:max-w-[320px]" 
                        />
                      </div>
                      <div className="text-base md:text-lg text-black w-[90%] md:max-w-[80%] mx-auto lg:mx-0"> 
                        <p>
                          READY in overcoming self-doubt and focusing on building confidence to develop innate skills for career growth.
                        </p>
                      </div>
                    </div>
                    {/* Right Side - Floating Image */}
                    <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                      <img 
                        src="/images/assets/READY-FLOATING.svg" 
                        alt="Ready Floating Elements" 
                        className="w-[300px] sm:w-[350px] md:w-full md:max-w-[453px]"
                      />
                    </div>
                  </div>
                </div>
                {/* Activities Grid */}
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {readyActivities.map((activity) => (
                      <ActivityCard
                        key={activity.id}
                        image={activity.image}
                        title={activity.title}
                        description={activity.description}
                        titleColor="text-[#E9452A]"
                        onClick={() => handleActivityClick(activity)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* SET Section */}
            {activeTab === "set" && (
              <>
                <div className="min-h-[400px] md:min-h-[500px]">
                  <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
                    <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start">
                        <img 
                          src="/images/assets/SET-HEADING.svg" 
                          alt="Set Heading" 
                          className="w-[200px] sm:w-[220px] md:w-full md:max-w-[240px]"
                        />
                      </div>
                      <div className="text-base md:text-lg text-black w-[90%] md:max-w-[80%] mx-auto lg:mx-0">
                        <p>
                          SET the pace in preparing for career success by developing professional profiles, networking strategies, and excelling in interviews.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                      <img 
                        src="/images/assets/SET-FLOATING.svg" 
                        alt="Set Floating Elements" 
                        className="w-[300px] sm:w-[350px] md:w-full md:max-w-[453px]"
                      />
                    </div>
                  </div>
                </div>
                {/* Activities Grid */}
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {setActivities.map((activity) => (
                      <ActivityCard
                        key={activity.id}
                        image={activity.image}
                        title={activity.title}
                        description={activity.description}
                        titleColor="text-[#FFA726]"
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* GROW Section */}
            {activeTab === "grow" && (
              <>
                <div className="min-h-[400px] md:min-h-[500px]">
                  <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
                    <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start">
                        <img 
                          src="/images/assets/GROW-HEADING.svg" 
                          alt="Grow Heading" 
                          className="w-[240px] sm:w-[260px] md:w-full md:max-w-[280px]"
                        />
                      </div>
                      <div className="text-base md:text-lg text-black w-[90%] md:max-w-[82%] mx-auto lg:mx-0">
                        <p>
                          Introducing students to career development, overcoming self-doubt, and understanding trends in the professional landscape.
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                      <img 
                        src="/images/assets/GROW-FLOATING.svg" 
                        alt="Grow Floating Elements" 
                        className="w-[300px] sm:w-[350px] md:w-full md:max-w-[453px]"
                      />
                    </div>
                  </div>
                </div>
                {/* Activities Grid */}
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {growActivities.map((activity) => (
                      <ActivityCard
                        key={activity.id}
                        image={activity.image}
                        title={activity.title}
                        description={activity.description}
                        titleColor="text-[#1E7A44]"
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-6 md:mt-8">
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

        {/* Modal */}
        <Modal
          isOpen={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
        >
          {selectedActivity && (
            <div className="space-y-6">
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.title}
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <h2 className="text-2xl font-bold">{selectedActivity.title}</h2>
              <p className="text-gray-700">{selectedActivity.description}</p>
              
              {/* Additional Details - Only show if details exist */}
              {selectedActivity.details && (
                <div className="space-y-4 border-t pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold">Date</h3>
                      <p>{selectedActivity.details.date}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Time</h3>
                      <p>{selectedActivity.details.time}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Venue</h3>
                    <p>{selectedActivity.details.venue}</p>
                  </div>

                  {selectedActivity.details.keyPoints && (
                    <div>
                      <h3 className="font-semibold">Key Points Covered</h3>
                      <ul className="list-disc list-inside mt-2">
                        {selectedActivity.details.keyPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
