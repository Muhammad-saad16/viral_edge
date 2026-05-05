"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useGeoRegion } from "@/hooks/useGeoRegion";

const clients = [
  "Jeeviez Kitchen", "Pepsi", "Mortein", "Knorr",
  "Tapal", "Sunsilk", "Sooper", "Durex", "Layers",
  "Almirah", "EBM", "J. Junaid Jamshed",
];

const uaeCaseStudies = [
  {
    title: "Aqua Pure Water Technologies",
    subtitle: "Brand identity & digital presence built for the UAE B2B market.",
    route: "/portfolio/aqua-pure",
    color: "#546b52",
    tags: ["Brand Identity", "Digital"],
  },
  {
    title: "Beyjeem",
    subtitle: "Market entry strategy that earned UAE buyer credibility from day one.",
    route: "/portfolio/beyjeem",
    color: "#ff6400",
    tags: ["Social Media", "Strategy"],
  },
  {
    title: "Aesthetic Clinic",
    subtitle: "Premium social presence generating real Abu Dhabi enquiries within 5 months.",
    route: "/portfolio/aesthetic-clinic",
    color: "#3a4e39",
    tags: ["Branding", "Social"],
  },
  {
    title: "Specialty Cafe",
    subtitle: "Reels-led growth that turned Instagram followers into walk-in customers.",
    route: "/portfolio/specialty-cafe",
    color: "#546b52",
    tags: ["Content", "Reels"],
  },
];

const pakPortfolio = { route: "/portfolio/pakistan" };

export default function PortfolioPage() {
  const region = useGeoRegion();

  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-beige pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-end gap-6 pt-8 pb-14">

            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}
                className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4"
              >
                Our Work
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}
                className="font-black text-charcoal uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(2rem, 11vw, 9rem)" }}
              >
                WHAT <span className="text-orange">WE</span>
                <br />DO
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
                className="mt-5 text-charcoal/55 text-base max-w-xs leading-relaxed"
              >
                From captivating brand experiences to results-driven digital
                campaigns. Every project is a story we&apos;re proud to tell.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="flex-1 flex justify-end items-end"
            >
              <div className="relative w-72 h-56 lg:w-96 lg:h-72">
                {[
                  { label: "Pepsi", color: "#546b52", rot: "-6deg", z: 0, tx: "0px",  ty: "0px"   },
                  { label: "Knorr", color: "#ff6400", rot: "3deg",  z: 1, tx: "20px", ty: "-10px" },
                  { label: "Tapal", color: "#1a1a1a", rot: "10deg", z: 2, tx: "40px", ty: "-24px" },
                ].map((card, i) => (
                  <motion.div key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
                    className="absolute w-48 h-32 lg:w-56 lg:h-36 rounded-2xl flex items-end p-4 shadow-xl"
                    style={{ backgroundColor: card.color, rotate: card.rot, left: card.tx, top: card.ty, zIndex: card.z }}
                  >
                    <span className="text-white/90 font-black text-base">{card.label}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
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
            <span key={i} className="inline-flex items-center gap-5 px-7 text-sm font-bold text-white/75 uppercase tracking-wide">
              {c}
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════ UAE CASE STUDIES ══════════════ */}
      {region === "UAE" && (
        <section className="bg-beige py-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">

            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-end justify-between gap-6 mb-14 border-b border-charcoal/8 pb-8"
            >
              <div>
                <p className="text-[10px] font-black tracking-[0.35em] uppercase text-sage mb-2">Selected Work</p>
                <h2 className="font-black text-charcoal uppercase leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                  UAE CASE STUDIES
                </h2>
              </div>
              <span className="hidden sm:block text-[10px] font-black tracking-[0.3em] uppercase text-charcoal/20">
                04 Projects
              </span>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {uaeCaseStudies.map((cs, i) => (
                <motion.div key={cs.title}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}>
                  <Link href={cs.route}
                    className="group relative flex flex-col bg-white overflow-hidden rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    style={{ border: `1.5px solid ${cs.color}18` }}
                  >
                    {/* Top accent */}
                    <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}44)` }} />

                    {/* Ghost number */}
                    <span
                      className="absolute top-5 right-6 font-black leading-none select-none pointer-events-none tabular-nums"
                      style={{ fontSize: 88, color: `${cs.color}07` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="px-8 pt-8 pb-6 flex-1 relative z-10">
                      {/* Label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-5 h-px" style={{ backgroundColor: cs.color }} />
                        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-charcoal/35">
                          UAE Case Study
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-black text-charcoal uppercase leading-[0.9] mb-4 group-hover:text-sage transition-colors duration-300"
                        style={{ fontSize: "clamp(1.45rem, 2.6vw, 2rem)" }}
                      >
                        {cs.title}
                      </h3>

                      <p className="text-charcoal/45 text-sm leading-relaxed">{cs.subtitle}</p>
                    </div>

                    {/* Bottom row */}
                    <div className="px-8 py-4 flex items-center justify-between border-t"
                      style={{ borderColor: `${cs.color}12` }}>
                      <div className="flex gap-4 flex-wrap">
                        {cs.tags.map((t) => (
                          <span key={t} className="text-[9px] font-black tracking-widest uppercase text-charcoal/25">{t}</span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider transition-all duration-300"
                        style={{ color: cs.color }}>
                        View
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ PAKISTAN PORTFOLIO ══════════════ */}
      {region === "PAK" && (
        <section className="bg-beige py-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">

            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-end justify-between gap-6 mb-14 border-b border-charcoal/8 pb-8"
            >
              <div>
                <p className="text-[10px] font-black tracking-[0.35em] uppercase text-sage mb-2">Our Work</p>
                <h2 className="font-black text-charcoal uppercase leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                  PAKISTAN PORTFOLIO
                </h2>
              </div>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <Link href={pakPortfolio.route}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{ border: "1.5px solid #546b5220" }}
              >
                {/* Left sage stripe */}
                <div className="w-full h-[3px] sm:h-auto sm:w-[4px] bg-sage flex-shrink-0" />

                {/* Main content */}
                <div className="px-10 py-10 flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-5 h-px bg-sage" />
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase text-charcoal/35">Pakistan</span>
                  </div>
                  <h3 className="font-black text-charcoal uppercase leading-[0.9] mb-4 group-hover:text-sage transition-colors duration-300"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                    Complete Pakistan Work
                  </h3>
                  <p className="text-charcoal/45 text-sm leading-relaxed mb-8 max-w-md">
                    150+ brands — FMCG giants, premium lifestyle labels, hospitality, education. Our full Pakistan portfolio in one place.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-sage group-hover:gap-3 transition-all duration-300">
                    View Full Portfolio
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>

                {/* Stats sidebar */}
                <div className="flex sm:flex-col justify-around sm:justify-center gap-8 px-10 py-8 border-t sm:border-t-0 sm:border-l"
                  style={{ borderColor: "#546b5215" }}>
                  {[
                    { val: "150+", lbl: "Brands" },
                    { val: "500+", lbl: "Projects" },
                    { val: "5+",   lbl: "Years"   },
                  ].map((s) => (
                    <div key={s.lbl} className="text-center sm:text-left">
                      <p className="font-black text-sage leading-none mb-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{s.val}</p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-charcoal/25">{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════ CTA ══════════════ */}
      <section className="bg-sage py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-black text-white uppercase mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            WANT TO BE ON<br />THIS LIST?
          </motion.h2>
          <p className="text-white/65 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
            Let&apos;s build something incredible together.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-10 py-4 text-sm font-black text-sage bg-white rounded-full hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wide">
            Work with SQRD
          </Link>
        </div>
      </section>
    </>
  );
}
