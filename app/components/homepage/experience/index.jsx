"use client";
// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { useState, useEffect } from "react";

function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    console.log('Experience component mounted');
    return () => console.log('Experience component unmounted');
  }, []);

  const handleToggle = (id) => {
    console.log('handleToggle called with id:', id);
    setExpandedId(prevId => {
      const newId = prevId === id ? null : id;
      console.log('Setting new expandedId:', newId);
      return newId;
    });
  };

  console.log('Rendering Experience with expandedId:', expandedId);

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map(experience => (
                <GlowCard 
                  key={experience.id} 
                  identifier={`experience-${experience.id}`}
                  isClickable={false}
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          {/* <button 
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleToggle(experience.id);
                            }}
                            className="p-2 rounded-full text-violet-500 hover:bg-violet-500/10 hover:text-violet-400 transition-all duration-300 flex items-center justify-center focus:outline-none"
                          >
                            {expandedId === experience.id ? (
                              <MdKeyboardArrowUp size={24} />
                            ) : (
                              <MdKeyboardArrowDown size={24} />
                            )}
                          </button> */}
                        </div>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                        {expandedId === experience.id && (
                          <div className="text-sm sm:text-base mt-4 text-gray-300 animate-fadeIn">
                            {experience.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;