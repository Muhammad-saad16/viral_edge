"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faebd7]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Q Mark orbit animation */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Dashed orbit ring */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160" fill="none">
          <circle
            cx="80" cy="80" r="62"
            stroke="#546b52"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="5 5"
          />
        </svg>

        {/* Q mark orbiting the circle */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          <svg
            className="absolute"
            style={{ top: 8, left: "50%", transform: "translateX(-50%)" }}
            width="32" height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            {/* Outer orange square frame */}
            <rect width="32" height="32" fill="#ff6400" />
            {/* Inner cutout */}
            <rect x="8" y="6" width="16" height="16" fill="#faebd7" />
          </svg>
        </motion.div>

        {/* Tab that drops down and reverses */}
        <motion.div
          style={{
            position: "absolute",
            width: 12,
            height: 12,
            backgroundColor: "#ff6400",
          }}
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.55, 1],
          }}
        />

        {/* Center dot */}
        <div style={{ width: 5, height: 5, backgroundColor: "#546b52", opacity: 0.35 }} />
      </div>

      {/* Pulsing dots */}
      <div className="flex gap-2 mt-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{ width: 6, height: 6, backgroundColor: "#546b52" }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.22 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
