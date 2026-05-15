"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGeoRegion } from "@/hooks/useGeoRegion";

const pakPortfolioClients = [
  "The Consorts Hotels & Resorts", "Virconia Perfumes", "Bushirts by Mir Dilawer", "Proctor Exam Taker", "Travel Wala", "Power-EX Lubricants"
];
const uaePortfolioClients = [
  "Aqua Pure Water Technologies", "Beyjeem Photography", "Aesthetic Clinic", "Specialty Cafe",
];

// Set logo to a path string when the image file exists, or null to show gradient+initial fallback
const uaeCaseStudies = [
  {
    title: "Aqua Pure Water Technologies",
    subtitle: "Brand identity & digital presence built for the UAE B2B market.",
    route: "/portfolio/aqua-pure",
    color: "#546b52",
    gradFrom: "#2a3a28",
    gradTo: "#1a2a18",
    initial: "AP",
    tags: ["Brand Identity", "Digital"],
    stat: "3×",
    statLabel: "ROI in 90 days",
    logo: "/logos/UAE Logos/logo transparent.png" as string | null,
  },
  {
    title: "Beyjeem Photography",
    subtitle: "Market entry strategy that earned UAE buyer credibility from day one.",
    route: "/portfolio/beyjeem",
    color: "#ff6400",
    gradFrom: "#3a1a00",
    gradTo: "#2a1000",
    initial: "BJ",
    tags: ["Social Media", "Strategy"],
    stat: "10K+",
    statLabel: "Followers gained",
    logo: "/logos/UAE Logos/beyjeem.jpg" as string | null,
  },
  {
    title: "Aesthetic Clinic",
    subtitle: "Premium social presence generating real Abu Dhabi enquiries within 5 months.",
    route: "/portfolio/aesthetic-clinic",
    color: "#3a4e39",
    gradFrom: "#1e2e1c",
    gradTo: "#121e10",
    initial: "AC",
    tags: ["Branding", "Social"],
    stat: "5×",
    statLabel: "Enquiries monthly",
    logo: null as string | null,
  },
  {
    title: "Specialty Cafe",
    subtitle: "Reels-led growth that turned Instagram followers into walk-in customers.",
    route: "/portfolio/specialty-cafe",
    color: "#546b52",
    gradFrom: "#2a3a28",
    gradTo: "#1a2a18",
    initial: "SC",
    tags: ["Content", "Reels"],
    stat: "200%",
    statLabel: "Footfall increase",
    logo: null as string | null,
  },
];

const pakCaseStudies = [
  {
    title: "The Consorts Hotels & Resorts",
    subtitle: "Luxury hospitality brand built for discerning Pakistani travellers seeking premium experiences.",
    route: "/portfolio/pakistan",
    color: "#546b52",
    gradFrom: "#2a3a28",
    gradTo: "#1a2a18",
    initial: "CH",
    tags: ["Hospitality", "Branding"],
    stat: "5★",
    statLabel: "Brand Positioning",
    logo: "/logos/pakistan_logos/The consorts.png" as string | null,
  },
  {
    title: "Virconia Perfumes",
    subtitle: "Fragrance identity and luxury social presence crafted to reach high-intent Pakistani buyers.",
    route: "/portfolio/pakistan",
    color: "#ff6400",
    gradFrom: "#3a1a00",
    gradTo: "#2a1000",
    initial: "VP",
    tags: ["Luxury", "Social Media"],
    stat: "40K+",
    statLabel: "Monthly Reach",
    logo: "/logos/pakistan_logos/Virconia.png" as string | null,
  },
  {
    title: "Bushirts by Mir Dilawer",
    subtitle: "Fashion-forward campaigns that tripled online sales for this emerging Pakistani clothing label.",
    route: "/portfolio/pakistan",
    color: "#3a4e39",
    gradFrom: "#1e2e1c",
    gradTo: "#121e10",
    initial: "BM",
    tags: ["Fashion", "Content"],
    stat: "3×",
    statLabel: "Sales Growth",
    logo: "/logos/pakistan_logos/Bushirts.png" as string | null,
  },
  {
    title: "Proctor Exam Taker",
    subtitle: "EdTech digital marketing driving student enrolments for Pakistan's leading exam platform.",
    route: "/portfolio/pakistan",
    color: "#546b52",
    gradFrom: "#2a3a28",
    gradTo: "#1a2a18",
    initial: "PE",
    tags: ["EdTech", "Digital"],
    stat: "10K+",
    statLabel: "Students Served",
    logo: "/logos/pakistan_logos/Proctor Exam Taker.png" as string | null,
  },
  {
    title: "Travel Wala",
    subtitle: "Campaign-led growth strategy putting Pakistan's top travel aggregator on every traveller's radar.",
    route: "/portfolio/pakistan",
    color: "#ff6400",
    gradFrom: "#3a1a00",
    gradTo: "#2a1000",
    initial: "TW",
    tags: ["Travel", "Campaigns"],
    stat: "200+",
    statLabel: "Destinations",
    logo: "/logos/pakistan_logos/Travel Wala.png" as string | null,
  },
  {
    title: "Power-EX Lubricants",
    subtitle: "B2B brand authority and digital pipeline built for Pakistan's high-performance lubricants market.",
    route: "/portfolio/pakistan",
    color: "#3a4e39",
    gradFrom: "#1e2e1c",
    gradTo: "#121e10",
    initial: "PX",
    tags: ["Industrial", "B2B"],
    stat: "50+",
    statLabel: "Business Partners",
    logo: "/logos/pakistan_logos/Power-Ex Lubricants.png" as string | null,
  },
];

function CaseStudyLogoImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) return null;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setBroken(true)}
    />
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 400, damping: 40 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioPage() {
  const region = useGeoRegion();
  const portfolioClients = region === "PAK" ? pakPortfolioClients : uaePortfolioClients;

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
                className="font-black text-sage uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(2rem, 8vw, 7rem)" }}
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

              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {portfolioClients.slice(0, 5).map((brand) => (
                  <span key={brand}
                    className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-lg bg-charcoal/6 text-charcoal/40 border border-charcoal/8">
                    {brand.length > 14 ? brand.slice(0, 14) + "…" : brand}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="flex-1 flex justify-end items-end"
            >
              <div className="relative w-72 h-56 lg:w-96 lg:h-72">
                {[
                  { label: "Aqua pure water",  color: "#546b52", rot: "-6deg",  z: 0, tx: "0px",  ty: "0px"   },
                  { label: "Beyjeem Photography",  color: "#ff6400", rot: "3deg",   z: 1, tx: "20px", ty: "-10px" },
                  { label: "Specialty Cafe",  color: "#3a4e39", rot: "10deg",  z: 2, tx: "40px", ty: "-24px" },
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
          {[...portfolioClients, ...portfolioClients, ...portfolioClients, ...portfolioClients, ...portfolioClients].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-7 text-sm font-bold text-white/75 uppercase tracking-wide">
              {c}
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════ UAE CASE STUDIES ══════════════ */}
      {region === "UAE" && (
        <section className="bg-sage-dark py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-end justify-between gap-6 mb-16 border-b border-white/8 pb-8"
            >
              <div>
                <p className="text-[10px] font-black tracking-[0.35em] uppercase text-sage mb-2">Selected Work</p>
                <h2 className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  UAE CASE STUDIES
                </h2>
              </div>
              <span className="hidden sm:block text-[10px] font-black tracking-[0.3em] uppercase text-white/20">
                04 Projects
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ perspective: "1400px" }}>
              {uaeCaseStudies.map((cs, i) => (
                <motion.div key={cs.title}
                  initial={{ opacity: 0, y: 70, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.13, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                >
                  <TiltCard>
                    <Link href={cs.route}
                      className="group relative flex flex-col h-full rounded-3xl overflow-hidden"
                      style={{ background: "#1a2a1a", border: `1.5px solid ${cs.color}33` }}
                    >
                      {/* ── Abstract art area ── */}
                      <div className="relative h-52 overflow-hidden flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${cs.gradFrom}, ${cs.gradTo})` }}>

                        {/* Dot grid */}
                        <div className="absolute inset-0"
                          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                        {/* Ghost initial — centred art */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black select-none pointer-events-none"
                          style={{ fontSize: 150, color: cs.logo ? "rgba(255,255,255,0.018)" : "rgba(255,255,255,0.045)", lineHeight: 1 }}>
                          {cs.initial}
                        </span>

                        {/* Client logo — full art area */}
                        {cs.logo && (
                          <div className="absolute inset-0 z-[5]">
                            <CaseStudyLogoImage src={cs.logo} alt={cs.title} />
                          </div>
                        )}

                        {/* Ring — top-right */}
                        <div className="absolute rounded-full border-2 opacity-25"
                          style={{ width: 110, height: 110, borderColor: cs.color, top: -28, right: -28 }} />
                        {/* Ring — inner */}
                        <div className="absolute rounded-full border opacity-15"
                          style={{ width: 65, height: 65, borderColor: "rgba(255,255,255,0.6)", top: 10, right: 10 }} />

                        {/* Soft orb glow — bottom-left */}
                        <div className="absolute w-32 h-32 rounded-full blur-3xl opacity-35"
                          style={{ background: cs.color, bottom: -16, left: -16 }} />

                        {/* Diagonal accent line */}
                        <div className="absolute opacity-[0.12]"
                          style={{ width: 1, height: 170, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)", top: 0, left: "58%", transform: "rotate(28deg)", transformOrigin: "top" }} />

                        {/* Animated shimmer */}
                        <motion.div
                          className="absolute inset-y-0 w-36 pointer-events-none"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
                          animate={{ x: ["-144px", "calc(100% + 144px)"] }}
                          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.5 + i * 0.35, ease: "easeInOut" }}
                        />

                        {/* Floating stat badge */}
                        <motion.div
                          className="absolute top-5 left-5 rounded-2xl px-4 py-2.5 z-10"
                          style={{ background: "rgba(26,26,26,0.72)", border: "1px solid rgba(255,255,255,0.18)" }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        >
                          <p className="font-black text-white text-lg leading-none">{cs.stat}</p>
                          <p className="text-[9px] text-white/60 font-semibold mt-0.5 whitespace-nowrap">{cs.statLabel}</p>
                        </motion.div>

                        {/* Number badge — top-right */}
                        <div className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center z-10"
                          style={{ background: "rgba(26,26,26,0.65)", border: "1px solid rgba(255,255,255,0.14)" }}>
                          <span className="text-[11px] font-black text-white/55">{String(i + 1).padStart(2, "0")}</span>
                        </div>

                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                          style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}44)` }} />

                        {/* Bottom dark fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-16"
                          style={{ background: "linear-gradient(to top, rgba(26,26,26,0.92), transparent)" }} />

                        {/* Hover colour wash */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `radial-gradient(ellipse at 65% 40%, ${cs.color}30, transparent 65%)` }} />
                      </div>

                      {/* ── Content area ── */}
                      <div className="flex flex-col flex-1 p-6 gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-px" style={{ backgroundColor: cs.color }} />
                          <span className="text-[9px] font-black tracking-[0.28em] uppercase text-white/30">
                            UAE Case Study
                          </span>
                        </div>

                        <h3
                          className="font-black text-white uppercase leading-[0.92] transition-all duration-300 group-hover:opacity-80"
                          style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                        >
                          {cs.title}
                        </h3>

                        <p className="text-white/38 text-sm leading-relaxed">{cs.subtitle}</p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
                          <div className="flex gap-3 flex-wrap">
                            {cs.tags.map((t) => (
                              <span key={t} className="text-[9px] font-black tracking-widest uppercase"
                                style={{ color: cs.color + "aa" }}>
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300"
                            style={{ color: cs.color }}>
                            View
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Card edge glow on hover */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ boxShadow: `inset 0 0 0 1.5px ${cs.color}55` }}
                      />
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ PAKISTAN PORTFOLIO ══════════════ */}
      {region === "PAK" && (
        <section className="bg-sage-dark py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-end justify-between gap-6 mb-16 border-b border-white/8 pb-8"
            >
              <div>
                <p className="text-[10px] font-black tracking-[0.35em] uppercase text-sage mb-2">Selected Work</p>
                <h2 className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  PAKISTAN CASE STUDIES
                </h2>
              </div>
              <span className="hidden sm:block text-[10px] font-black tracking-[0.3em] uppercase text-white/20">
                06 Projects
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ perspective: "1400px" }}>
              {pakCaseStudies.map((cs, i) => (
                <motion.div key={cs.title}
                  initial={{ opacity: 0, y: 70, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.13, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                >
                  <TiltCard>
                    <Link href={cs.route}
                      className="group relative flex flex-col h-full rounded-3xl overflow-hidden"
                      style={{ background: "#1a2a1a", border: `1.5px solid ${cs.color}33` }}
                    >
                      {/* ── Abstract art area ── */}
                      <div className="relative h-52 overflow-hidden flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${cs.gradFrom}, ${cs.gradTo})` }}>

                        {/* Dot grid */}
                        <div className="absolute inset-0"
                          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                        {/* Ghost initial — centred art */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black select-none pointer-events-none"
                          style={{ fontSize: 150, color: cs.logo ? "rgba(255,255,255,0.018)" : "rgba(255,255,255,0.045)", lineHeight: 1 }}>
                          {cs.initial}
                        </span>

                        {/* Client logo — full art area */}
                        {cs.logo && (
                          <div className="absolute inset-0 z-[5]">
                            <CaseStudyLogoImage src={cs.logo} alt={cs.title} />
                          </div>
                        )}

                        {/* Ring — top-right */}
                        <div className="absolute rounded-full border-2 opacity-25"
                          style={{ width: 110, height: 110, borderColor: cs.color, top: -28, right: -28 }} />
                        {/* Ring — inner */}
                        <div className="absolute rounded-full border opacity-15"
                          style={{ width: 65, height: 65, borderColor: "rgba(255,255,255,0.6)", top: 10, right: 10 }} />

                        {/* Soft orb glow — bottom-left */}
                        <div className="absolute w-32 h-32 rounded-full blur-3xl opacity-35"
                          style={{ background: cs.color, bottom: -16, left: -16 }} />

                        {/* Diagonal accent line */}
                        <div className="absolute opacity-[0.12]"
                          style={{ width: 1, height: 170, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)", top: 0, left: "58%", transform: "rotate(28deg)", transformOrigin: "top" }} />

                        {/* Animated shimmer */}
                        <motion.div
                          className="absolute inset-y-0 w-36 pointer-events-none"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
                          animate={{ x: ["-144px", "calc(100% + 144px)"] }}
                          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.5 + i * 0.35, ease: "easeInOut" }}
                        />

                        {/* Floating stat badge */}
                        <motion.div
                          className="absolute top-5 left-5 rounded-2xl px-4 py-2.5 z-10"
                          style={{ background: "rgba(26,26,26,0.72)", border: "1px solid rgba(255,255,255,0.18)" }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        >
                          <p className="font-black text-white text-lg leading-none">{cs.stat}</p>
                          <p className="text-[9px] text-white/60 font-semibold mt-0.5 whitespace-nowrap">{cs.statLabel}</p>
                        </motion.div>

                        {/* Number badge — top-right */}
                        <div className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center z-10"
                          style={{ background: "rgba(26,26,26,0.65)", border: "1px solid rgba(255,255,255,0.14)" }}>
                          <span className="text-[11px] font-black text-white/55">{String(i + 1).padStart(2, "0")}</span>
                        </div>

                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                          style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}44)` }} />

                        {/* Bottom dark fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-16"
                          style={{ background: "linear-gradient(to top, rgba(26,26,26,0.92), transparent)" }} />

                        {/* Hover colour wash */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `radial-gradient(ellipse at 65% 40%, ${cs.color}30, transparent 65%)` }} />
                      </div>

                      {/* ── Content area ── */}
                      <div className="flex flex-col flex-1 p-6 gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-4 h-px" style={{ backgroundColor: cs.color }} />
                          <span className="text-[9px] font-black tracking-[0.28em] uppercase text-white/30">
                            Pakistan Case Study
                          </span>
                        </div>

                        <h3
                          className="font-black text-white uppercase leading-[0.92] transition-all duration-300 group-hover:opacity-80"
                          style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                        >
                          {cs.title}
                        </h3>

                        <p className="text-white/38 text-sm leading-relaxed">{cs.subtitle}</p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
                          <div className="flex gap-3 flex-wrap">
                            {cs.tags.map((t) => (
                              <span key={t} className="text-[9px] font-black tracking-widest uppercase"
                                style={{ color: cs.color + "aa" }}>
                                {t}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300"
                            style={{ color: cs.color }}>
                            View
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Card edge glow on hover */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ boxShadow: `inset 0 0 0 1.5px ${cs.color}55` }}
                      />
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
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
