"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-beige"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Spinning ring container */}
      <div className="relative flex items-center justify-center w-52 h-52">

        {/* Outer spinning ring — sage arc */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 208 208"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="104" cy="104" r="96" stroke="#E07A3B" strokeWidth="2" strokeOpacity="0.15" />
          <circle
            cx="104" cy="104" r="96"
            stroke="#7A9E7E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="150 452"
          />
        </motion.svg>

        {/* Counter-spinning inner ring */}
        <motion.svg
          className="absolute inset-6 w-auto h-auto"
          viewBox="0 0 140 140"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="70" cy="70" r="64"
            stroke="#E07A3B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="60 342"
            strokeOpacity="0.5"
          />
        </motion.svg>

        {/* Logo centered inside rings */}
        <div className="relative flex items-center justify-center select-none z-10">
          <Logo className="w-32 h-auto" variant="dark" />
        </div>
      </div>

      {/* Loading dots below */}
      <div className="flex gap-1.5 mt-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-sage"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
