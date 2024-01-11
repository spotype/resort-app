"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
export default function Cover() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-screen relative bg-black bg-[url('/resort.mp4')]"
    >
      <video
        src="/resort.mp4"
        loop
        autoPlay
        muted
        className="absolute h-screen w-full object-cover opacity-60"
      ></video>
      <div
        className=""
        style={{
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="mx-auto flex h-screen w-11/12 items-center justify-center md:w-[768px]">
          <div className=" text-center gap-7 flex flex-col">
            <motion.span
              variants={slideInFromTop}
              className={`text-white text-3xl sm:text-5xl font-bold select-none`}
            >
              4 Beach Rentals for the summer (Long and short term)
            </motion.span>

            <span className={` text-4xl font-bold text-white select-none`}>
              3 houses from Beach! Brand new and newly renovated!
            </span>
            <span className="text-2xl font-bold text-white select-none">
              (Total 12 bedrooms on 4 Units rent 2,3 or 4 Bedrooms or rent them
              all)
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
