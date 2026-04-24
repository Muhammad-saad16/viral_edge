"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <div
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}
        aria-hidden={loading}
      >
        {children}
      </div>
    </>
  );
}
