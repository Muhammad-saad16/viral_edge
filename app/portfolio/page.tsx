"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clients = [
  "Jeeviez Kitchen", "Pepsi", "Mortein", "Knorr",
  "Tapal", "Sunsilk", "Sooper", "Durex", "Layers",
  "Almirah", "EBM", "J. Junaid Jamshed",
];

const projects = [
  { title: "Jeeviez Kitchen",   cat: "Branding",   size: "large",  bg: "#ff6400", accent: "#ff6400" },
  { title: "Pepsi",             cat: "Content",    size: "normal", bg: "#546b52", accent: "#546b52" },
  { title: "Mortein",           cat: "Digital",    size: "normal", bg: "#1a1a1a", accent: "#1a1a1a" },
  { title: "Pepsico",           cat: "Social",     size: "normal", bg: "#ff6400", accent: "#ff6400" },
  { title: "Pepsi Ramzan",      cat: "Video",      size: "large",  bg: "#546b52", accent: "#546b52" },
  { title: "No-No",             cat: "Ads",        size: "normal", bg: "#3a4e39", accent: "#3a4e39" },
  { title: "Sunsilk",           cat: "Branding",   size: "normal", bg: "#546b52", accent: "#546b52" },
  { title: "Knorr",             cat: "Content",    size: "normal", bg: "#ff6400", accent: "#ff6400" },
  { title: "Layers",            cat: "Design",     size: "normal", bg: "#1a1a1a", accent: "#1a1a1a" },
  { title: "J. Junaid Jamshed", cat: "Video",      size: "large",  bg: "#546b52", accent: "#546b52" },
  { title: "Tapal 70 Years",    cat: "Campaign",   size: "normal", bg: "#ff6400", accent: "#ff6400" },
  { title: "Tapal",             cat: "Social",     size: "normal", bg: "#3a4e39", accent: "#3a4e39" },
  { title: "Sooper",            cat: "Branding",   size: "normal", bg: "#1a1a1a", accent: "#1a1a1a" },
  { title: "5 Rupees Band",     cat: "Performance",size: "normal", bg: "#ff6400", accent: "#ff6400" },
  { title: "Almirah",           cat: "Design",     size: "normal", bg: "#546b52", accent: "#546b52" },
  { title: "Tapal Mezban",      cat: "Video",      size: "normal", bg: "#1a1a1a", accent: "#1a1a1a" },
  { title: "EBM",               cat: "Content",    size: "normal", bg: "#ff6400", accent: "#ff6400" },
  { title: "Yuc! Bites",        cat: "Social",     size: "normal", bg: "#546b52", accent: "#546b52" },
];

const categories = ["All", "Branding", "Content", "Video", "Social", "Design", "Performance"];

export default function PortfolioPage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-beige pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-end gap-6 pt-8 pb-14">

            {/* Left */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4"
              >
                Our Work
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="font-black text-charcoal uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
              >
                WHAT
                <br />
                <span className="text-orange">WE</span>
                <br />
                DO
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-5 text-charcoal/55 text-base max-w-xs leading-relaxed"
              >
                From captivating brand experiences to results-driven digital
                campaigns. Every project is a story we&apos;re proud to tell.
              </motion.p>
            </div>

            {/* Right — abstract composition of brand tiles */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex-1 flex justify-end items-end"
            >
              <div className="relative w-72 h-56 lg:w-96 lg:h-72">
                {/* Stacked brand card stack */}
                {[
                  { label: "Pepsi", color: "#546b52", rot: "-6deg", z: 0, tx: "0px",  ty: "0px"   },
                  { label: "Knorr", color: "#ff6400", rot: "3deg",  z: 1, tx: "20px", ty: "-10px" },
                  { label: "Tapal", color: "#1a1a1a", rot: "10deg", z: 2, tx: "40px", ty: "-24px" },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
                    className="absolute w-48 h-32 lg:w-56 lg:h-36 rounded-2xl flex items-end p-4 shadow-xl"
                    style={{
                      backgroundColor: card.color,
                      rotate: card.rot,
                      left: card.tx,
                      top: card.ty,
                      zIndex: card.z,
                    }}
                  >
                    <span className="text-white/90 font-black text-base">{card.label}</span>
                  </motion.div>
                ))}

                {/* Floating metric badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 260 }}
                  className="absolute bottom-0 right-0 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-charcoal/8"
                >
                  <p className="text-2xl font-black text-charcoal">500+</p>
                  <p className="text-[10px] text-charcoal/50 font-medium">Projects Delivered</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ CLIENT STRIP ══════════════ */}
      <section className="bg-sage py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-3">
          <p className="text-center text-xs font-black tracking-[0.18em] uppercase text-white">
            WE WORK WITH 150+ SATISFIED CLIENTS
          </p>
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-7 text-sm font-bold text-white/75 uppercase tracking-wide"
            >
              {c}
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════ CATEGORY ROW ══════════════ */}
      <section className="bg-beige pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <h2
              className="font-black text-charcoal uppercase text-center"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              RECENT <span className="text-orange">WORK</span>
            </h2>
            {/* Category pills — decorative */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-default ${
                    i === 0
                      ? "bg-charcoal text-white"
                      : "bg-charcoal/8 text-charcoal/55 hover:bg-charcoal/15"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ MASONRY GRID ══════════════ */}
      <section className="bg-beige pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "130px",
            }}
          >
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title + i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.04 }}
                className="group relative rounded-2xl flex flex-col items-center justify-center overflow-hidden cursor-default"
                style={
                  proj.size === "large"
                    ? {
                        gridColumn: "span 2",
                        gridRow: "span 2",
                        backgroundColor: proj.bg + "28",
                        border: `1.5px solid ${proj.accent}30`,
                      }
                    : {
                        backgroundColor: proj.bg + "1A",
                        border: `1.5px solid ${proj.accent}25`,
                      }
                }
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl opacity-25"
                  style={{ backgroundColor: proj.accent }}
                />
                <div
                  className="absolute bottom-0 left-0 w-8 h-8 rounded-tr-2xl opacity-15"
                  style={{ backgroundColor: proj.accent }}
                />

                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: proj.accent + "CC" }}
                >
                  {proj.cat}
                </span>

                <p
                  className="font-black text-charcoal text-center px-4 leading-tight z-10 relative"
                  style={{ fontSize: proj.size === "large" ? "1.1rem" : "0.75rem" }}
                >
                  {proj.title}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl"
                  style={{ backgroundColor: proj.accent + "E8" }}>
                  <span className="text-white text-xs font-black tracking-wide">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="bg-sage py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-white uppercase mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            WANT TO BE ON
            <br />
            THIS LIST?
          </motion.h2>
          <p className="text-white/65 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
            Let&apos;s build something incredible together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 text-sm font-black text-sage bg-white rounded-full hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wide"
          >
            Work with SQRD
          </Link>
        </div>
      </section>
    </>
  );
}
