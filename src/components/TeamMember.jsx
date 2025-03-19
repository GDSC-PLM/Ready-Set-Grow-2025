"use client";
import { motion } from "framer-motion";

export default function TeamMember({ photo, name, position }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        className="overflow-hidden rounded-lg"
      >
        <motion.img
          src={photo}
          alt={`${name} - ${position}`}
          className="w-[270px] h-[336.73px] object-cover rounded-lg mb-4 transition-transform duration-300"
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.4 }
          }}
        />
      </motion.div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}
