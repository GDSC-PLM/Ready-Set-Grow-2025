"use client"; 

import { motion } from "framer-motion";
import { executiveTeamMembers, coreLeadMembers } from "../../data/team-members"; 
import TeamMember from "../../components/TeamMember";

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-4 py-12">
      <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
        {/* Logo with bounce animation */}
        <motion.img 
          src="/images/assets/ABOUT-GDSC-LOGO.svg"
          alt="GDSC Logo"
          className="w-full max-w-[400px] md:max-w-[500px] mb-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.8
          }}
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 self-start">
          About GDGoC PLM
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-justify leading-relaxed mb-4">
          Google Developer Student Clubs – Pamantasan ng Lungsod ng Maynila (GDSC PLM) is a non-profit organization and a premiere student community of Haribons who share a common goal of uplifting the community through technology. GDSC PLM promotes best practices in the use of digital technologies on its campus with over 200 student members.
        </p>
        <p className="text-base md:text-lg text-justify leading-relaxed">
          As a part of Google Developer Student Clubs (GDSC), we are helping students bridge the gap between theory and practice and establish camaraderie while continuously building each other's career.
        </p>

        {/* Meet the Awesome Team */}
        <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 self-start">
          Meet the awesome team behind!
        </h2>
        
        <div className="inline-block px-14 py-2 border-1 mb-8 border-[#FDB528] rounded-full">
          <span className="text-xl md:text-2xl font-bold">The Executives</span>
        </div>

        {/* Executive Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 w-full">
          {executiveTeamMembers.map((member) => (
            <TeamMember
              key={member.id}
              photo={member.photo}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>

        <div className="inline-block px-14 py-2 border-1 mb-8 border-[#FDB528] rounded-full">
          <span className="text-xl md:text-2xl font-bold">Core Leads</span>
        </div>

        {/* Core Leads Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 w-full">
          {coreLeadMembers.map((member) => (
            <TeamMember
              key={member.id}
              photo={member.photo}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
