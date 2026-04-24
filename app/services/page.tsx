"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    icon: "📖",
    title: "Storytelling",
    desc: "Brand narratives that connect emotionally and build lasting loyalty across every platform.",
    color: "#7A9E7E",
    bg: "#7A9E7E",
  },
  {
    num: "02",
    icon: "🎬",
    title: "Video Content",
    desc: "Scroll-stopping reels, brand films and short-form video built to perform at every scroll.",
    color: "#E07A3B",
    bg: "#E07A3B",
  },
  {
    num: "03",
    icon: "✏️",
    title: "Design",
    desc: "Stunning visuals and identities that align with your brand and make you impossible to ignore.",
    color: "#5C7E60",
    bg: "#5C7E60",
  },
  {
    num: "04",
    icon: "📈",
    title: "Performance Marketing",
    desc: "Data-driven paid campaigns on Meta, Google and TikTok. Every rupee tracked and optimised.",
    color: "#E07A3B",
    bg: "#E07A3B",
  },
  {
    num: "05",
    icon: "📸",
    title: "In-house Photography",
    desc: "Professional shoots planned and delivered entirely by our internal creative team.",
    color: "#7A9E7E",
    bg: "#7A9E7E",
  },
  {
    num: "06",
    icon: "💻",
    title: "Website / Apps",
    desc: "Fast, modern websites and digital apps built for conversion and exceptional UX.",
    color: "#2C2C2C",
    bg: "#2C2C2C",
  },
  {
    num: "07",
    icon: "📰",
    title: "Digital PR",
    desc: "Strategic PR placements and influencer partnerships that amplify your message.",
    color: "#7A9E7E",
    bg: "#7A9E7E",
  },
];

const stats = [
  { val: "150+", label: "Happy Clients" },
  { val: "500+", label: "Projects Delivered" },
  { val: "7",    label: "Core Services" },
  { val: "98%",  label: "Retention Rate" },
];

const decorEmojis = [
  { e: "👍", x: "62%", y: "8%",  size: "text-3xl", delay: 0 },
  { e: "😍", x: "78%", y: "28%", size: "text-4xl", delay: 0.25 },
  { e: "❤️", x: "45%", y: "58%", size: "text-2xl", delay: 0.5 },
  { e: "⭐", x: "82%", y: "65%", size: "text-2xl", delay: 0.75 },
  { e: "🚀", x: "28%", y: "18%", size: "text-2xl", delay: 1.0 },
];

export default function ServicesPage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-beige pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 pt-8 pb-14">

            {/* Left */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4"
              >
                What We Offer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="font-black italic text-charcoal uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
              >
                OUR
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    WebkitTextStroke: "3px #E07A3B",
                    color: "transparent",
                  }}
                >
                  SERVICES
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
                className="mt-6 text-charcoal/55 text-base max-w-sm leading-relaxed"
              >
                From captivating brand experiences to results-driven digital
                campaigns — our full-service suite is tailored to make your brand
                dominate every channel.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 text-sm font-black text-white bg-orange rounded-full hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 transition-all uppercase tracking-wide"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 text-sm font-black text-charcoal border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white hover:-translate-y-0.5 transition-all uppercase tracking-wide"
                >
                  See Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right — phone mockup with floating emojis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex-1 flex justify-center items-end self-end"
            >
              <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                {/* Glow bg */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: "radial-gradient(circle, #7A9E7E, #E07A3B)" }}
                />

                {/* Phone body */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-64 lg:w-44 lg:h-72 bg-charcoal rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10">
                  {/* Notch */}
                  <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                  </div>
                  {/* Screen content */}
                  <div className="flex-1 flex flex-col gap-2 px-3 pb-4">
                    <div className="h-16 rounded-xl bg-gradient-to-br from-sage/50 to-sage/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-white/80">Campaign Live</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full" />
                    <div className="h-2 bg-white/8 rounded-full w-2/3" />
                    <div className="flex gap-1.5 mt-1">
                      {[60, 80, 45, 95, 70].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{ height: `${h * 0.45}px`, backgroundColor: i % 2 === 0 ? "#7A9E7E" : "#7A9E7E55" }}
                        />
                      ))}
                    </div>
                    <div className="h-2 bg-white/10 rounded-full" />
                    <div className="h-10 rounded-xl bg-gradient-to-br from-orange/50 to-orange/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white/80">+24% ROAS ↑</span>
                    </div>
                  </div>
                </div>

                {/* Floating emoji reactions */}
                {decorEmojis.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${item.size} select-none`}
                    style={{ left: item.x, top: item.y }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: item.delay }}
                  >
                    {item.e}
                  </motion.div>
                ))}

                {/* Connecting dots */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 384">
                  <line x1="80"  y1="80"  x2="220" y2="200" stroke="#7A9E7E" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
                  <line x1="240" y1="100" x2="160" y2="290" stroke="#E07A3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.35" />
                  <circle cx="80"  cy="80"  r="3.5" fill="#7A9E7E" opacity="0.6" />
                  <circle cx="240" cy="100" r="3.5" fill="#E07A3B" opacity="0.6" />
                  <circle cx="220" cy="200" r="3.5" fill="#7A9E7E" opacity="0.5" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <div className="bg-charcoal py-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl md:text-4xl font-black text-white">{s.val}</span>
                <span className="text-xs text-white/40 mt-1 font-medium tracking-wide">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════ SERVICE CARDS ══════════════ */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="font-black text-charcoal uppercase inline-block"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              WHAT WE <span className="text-sage">DELIVER</span>
            </h2>
            <div className="h-1.5 bg-orange rounded-full mt-3 max-w-[120px] mx-auto" />
          </motion.div>

          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {services.slice(0, 4).map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-7 border border-charcoal/8 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden"
              >
                {/* Color accent bar at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: svc.bg }}
                />
                {/* Number tag */}
                <span
                  className="text-[10px] font-black tracking-widest mb-5 block"
                  style={{ color: svc.color + "99" }}
                >
                  {svc.num}
                </span>
                <span className="text-4xl block mb-5">{svc.icon}</span>
                <h3
                  className="text-sm font-black uppercase tracking-wide mb-3 transition-colors"
                  style={{ color: svc.color }}
                >
                  {svc.title}
                </h3>
                <p className="text-xs text-charcoal/50 leading-relaxed">{svc.desc}</p>

                {/* Hover arrow */}
                <div className="mt-5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-black" style={{ color: svc.color }}>
                    Learn More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.slice(4).map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-7 border border-charcoal/8 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: svc.bg }}
                />
                <span
                  className="text-[10px] font-black tracking-widest mb-5 block"
                  style={{ color: svc.color + "99" }}
                >
                  {svc.num}
                </span>
                <span className="text-4xl block mb-5">{svc.icon}</span>
                <h3
                  className="text-sm font-black uppercase tracking-wide mb-3 transition-colors"
                  style={{ color: svc.color }}
                >
                  {svc.title}
                </h3>
                <p className="text-xs text-charcoal/50 leading-relaxed">{svc.desc}</p>
                <div className="mt-5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-black" style={{ color: svc.color }}>
                    Learn More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS SECTION ══════════════ */}
      <section className="bg-sage py-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-white uppercase text-center mb-14"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            HOW WE <span className="text-charcoal">WORK</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Discovery",   desc: "We learn your brand, goals and audience inside out." },
              { step: "02", label: "Strategy",    desc: "We build a data-backed plan tailored to your market." },
              { step: "03", label: "Execution",   desc: "Our team creates, launches and manages everything." },
              { step: "04", label: "Optimise",    desc: "We measure, iterate and scale what delivers ROI." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-0px)] h-px bg-white/20 z-0"
                    style={{ width: "calc(100% - 24px)", left: "calc(50% + 24px)" }} />
                )}
                <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 text-center relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center font-black text-white text-lg mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wide mb-2">{s.label}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-charcoal rounded-3xl px-8 md:px-20 py-16 overflow-hidden text-center"
          >
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, #7A9E7E25, transparent)" }} />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, #E07A3B20, transparent)" }} />
            <div className="relative">
              <h2
                className="font-black text-white uppercase leading-[0.9] mb-6"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
              >
                READY TO
                <br />
                <span className="text-orange">GROW?</span>
              </h2>
              <p className="text-white/45 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Let&apos;s talk about your brand and build a custom strategy that actually moves the needle.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 text-sm font-black text-charcoal bg-white rounded-full hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wide"
              >
                Get In Touch →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
