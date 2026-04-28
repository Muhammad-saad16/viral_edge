"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const rx = useSpring(mx, { stiffness: 90,  damping: 18, mass: 0.6 });
  const ry = useSpring(my, { stiffness: 90,  damping: 18, mass: 0.6 });
  const dx = useSpring(mx, { stiffness: 600, damping: 30 });
  const dy = useSpring(my, { stiffness: 600, damping: 30 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const down = (e: MouseEvent) => {
      setClicked(true);
      const id = Date.now();
      setRipples((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((p) => p.filter((r) => r.id !== id)), 900);
      setTimeout(() => setClicked(false), 200);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!t.closest("a, button, [role='button'], input, textarea, select"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseover", over);
      document.documentElement.style.cursor = "";
    };
  }, [mx, my, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Square outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] border-2"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "4px",
          borderColor: hovered ? "#ff6400" : "#546b52",
          width:  hovered ? 52 : 36,
          height: hovered ? 52 : 36,
          backgroundColor: hovered ? "#ff640014" : "transparent",
        }}
        animate={{ scale: clicked ? 0.75 : 1 }}
        transition={{ duration: 0.12 }}
      />

      {/* Square inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] bg-orange"
        style={{
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "2px",
          width: 7,
          height: 7,
        }}
        animate={{ scale: clicked ? 1.8 : 1 }}
        transition={{ duration: 0.12 }}
      />

      {/* Square click ripples */}
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998] border border-sage"
          style={{ x: r.x, y: r.y, translateX: "-50%", translateY: "-50%", borderRadius: "6px" }}
          initial={{ width: 0, height: 0, opacity: 0.9 }}
          animate={{ width: 90, height: 90, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
