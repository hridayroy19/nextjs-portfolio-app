"use client";
import { FaDownload } from "react-icons/fa";
import { BaseInfo } from "../../../Data/data";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0715] overflow-hidden flex items-center py-32">
      <div className="w-[90%] md:w-4/5 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          animate={{ rotate: 360, transition: { duration: 1 } }}
          className="text-center lg:text-left"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold">
            I am {BaseInfo.name}
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {BaseInfo.position}
          </h1>
          <p className="text-white text-sm md:text-base mt-4 md:mt-6 leading-relaxed">
            {BaseInfo.description}
          </p>

          {/* Download Button */}
          <button className="border flex justify-center items-center gap-2 mt-5 py-2 px-4 md:px-6 md:py-2.5 bg-blue-950 text-white font-semibold text-sm md:text-lg rounded-md">
            <a href="/resume.pdf" download className="flex items-center gap-2">
              Resume
            </a>
            <FaDownload />
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-full lg:w-10/12 relative h-[400px]"
        >
          <Image
            src={BaseInfo.profilePic}
            alt="photo"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
