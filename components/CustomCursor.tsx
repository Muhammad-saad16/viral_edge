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

  /* Large ring follows with spring lag */
  const rx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 });
  const ry = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 });

  /* Small dot follows instantly */
  const dx = useSpring(mx, { stiffness: 600, damping: 30 });
  const dy = useSpring(my, { stiffness: 600, damping: 30 });

  useEffect(() => {
    /* Hide on touch devices */
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
      {/* Large ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovered ? "#E07A3B" : "#7A9E7E",
          width: hovered ? 56 : 38,
          height: hovered ? 56 : 38,
          backgroundColor: hovered ? "#E07A3B18" : "transparent",
        }}
        animate={{ scale: clicked ? 0.75 : 1 }}
        transition={{ duration: 0.12 }}
      />

      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-orange"
        style={{
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
        }}
        animate={{ scale: clicked ? 1.8 : 1 }}
        transition={{ duration: 0.12 }}
      />

      {/* Click ripples */}
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-sage"
          style={{ x: r.x, y: r.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 0, height: 0, opacity: 0.9 }}
          animate={{ width: 100, height: 100, opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
