"use client";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [drop, setDrop] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="h-20 flex bg-white items-center fixed top-0 left-0 w-full z-50 border-b-2"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className={`mx-auto flex w-11/12`}>
        <div className="flex justify-between w-full items-center">
          <motion.div variants={slideInFromLeft(0.2)}>
            <span className="font-semibold text-xl">Shore Rentals</span>
          </motion.div>
          <motion.button
            variants={slideInFromRight(0.2)}
            onClick={() => setDrop(!drop)}
            className=" border-2 px-2 rounded-lg md:hidden"
          >
            <img src="/menu.svg" className="w-10 flex" alt="" />
          </motion.button>
          <div
            className={
              drop
                ? "absolute top-16 left-0 bg-white w-full"
                : "hidden md:block"
            }
          >
            <ul
              className={` flex flex-col md:flex-row mx-0 items-center justify-center gap-10 font-bold text-xl`}
            >
              <li className="mt-10 md:m-0">
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>Features</Link>
              </li>
              <li>
                <Link href={""}>How to Book</Link>
              </li>
              <li>
                <Link href={""}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
