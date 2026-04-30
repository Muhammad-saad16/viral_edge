"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "1M+",   label: "Total Reach"    },
  { value: "5K+",   label: "Influencers"    },
  { value: "15K+",  label: "Campaigns Run"  },
  { value: "100K+", label: "Posts Published"},
];

const awards = [
  { label: "Top Agency Award",       icon: "🏆", year: "2024" },
  { label: "Partnership Award",      icon: "🤝", year: "2023" },
  { label: "Performance Excellence", icon: "📊", year: "2023" },
  { label: "Top 10 Software",        icon: "💻", year: "2024" },
];

const tools = [
  { name: "Dropbox",   icon: "📦" },
  { name: "Slack",     icon: "💬" },
  { name: "Email",     icon: "✉️"  },
  { name: "Semrush",   icon: "🔍" },
  { name: "Hootsuite", icon: "🦉" },
  { name: "Google",    icon: "🌐" },
];

const brands = [
  { name: "Mercedes",  icon: "⭐" },
  { name: "Nike",      icon: "✔️" },
  { name: "HBO",       icon: "🎬" },
  { name: "Samsung",   icon: "📱" },
  { name: "Coca-Cola", icon: "🥤" },
  { name: "Red Bull",  icon: "⚡" },
  { name: "Audi",      icon: "🚗" },
  { name: "Google",    icon: "🌐" },
  { name: "Uber",      icon: "🚘" },
  { name: "Canon",     icon: "📷" },
];

const caseStudies = [
  {
    title:  "Pepsi Hashtag Challenge",
    label:  "Social Media",
    result: "12M+ impressions, 800K+ UGC posts in 14 days",
    color:  "#7A9E7E",
    icon:   "🥤",
  },
  {
    title:  "HOJ Winners & Hajra Yamin Launch",
    label:  "Influencer",
    result: "5M+ reach, slots sold out within 48 hours",
    color:  "#E07A3B",
    icon:   "⭐",
  },
  {
    title:  "Shehnaz Lari Fashion Campaign",
    label:  "Performance",
    result: "3.2× ROAS, 40K new followers acquired",
    color:  "#2C2C2C",
    icon:   "👗",
  },
];

const barHeights = [60, 80, 45, 90, 70, 55, 95, 75, 85, 65];

export default function PostForRentPage() {
  return (
    <>
      {/* ══════════════ DARK HERO ══════════════ */}
      <section className="bg-charcoal pt-16 min-h-[72vh] flex items-center overflow-hidden relative">
        {/* Bg decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, #7A9E7E18 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, #E07A3B12 0%, transparent 65%)" }} />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 w-full py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left */}
            <div className="flex-1">
              {/* Label */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/20 text-sage text-xs font-black tracking-widest uppercase mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                Influencer Marketing Platform
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-black italic text-white uppercase leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 7vw, 5.8rem)" }}
              >
                RESHAPING
                <br />
                THE WORLD
                <br />
                OF{" "}
                <span className="text-sage">INFLUENCER</span>
                <br />
                MARKETING.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="mt-6 text-white/45 text-sm max-w-sm leading-relaxed"
              >
                Our technology-powered platform connects brands with the right
                creators, tracks every campaign in real-time and ensures maximum
                ROI on every rupee spent.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 text-sm font-black text-charcoal bg-sage rounded-full hover:bg-sage/90 hover:shadow-xl hover:shadow-sage/30 hover:-translate-y-0.5 transition-all uppercase tracking-wide"
                >
                  Get Started →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 text-sm font-black text-white border border-white/25 rounded-full hover:bg-white/8 hover:-translate-y-0.5 transition-all uppercase tracking-wide"
                >
                  Case Studies
                </Link>
              </motion.div>
            </div>

            {/* Right — dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex-1 flex justify-center items-center"
            >
              <div className="relative w-72 lg:w-84">
                {/* Main card */}
                <div className="bg-white/8 border border-white/12 rounded-3xl p-5 backdrop-blur">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold text-white/60">Campaign Dashboard</p>
                    <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                  </div>

                  {/* Bar chart */}
                  <div className="flex items-end gap-1.5 h-20 mb-4">
                    {barHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.6 + i * 0.06, duration: 0.5 }}
                        style={{ backgroundColor: i % 2 === 0 ? "#7A9E7E" : "#7A9E7E55" }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {["12M Reach", "4.8% ER", "3.2× ROAS"].map((m) => (
                      <div key={m} className="bg-white/8 rounded-xl p-2 text-center">
                        <p className="text-[10px] font-bold text-white/70">{m}</p>
                      </div>
                    ))}
                  </div>

                  {/* Influencer row */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/8">
                    <div className="flex -space-x-2">
                      {["#7A9E7E", "#E07A3B", "#5C7E60", "#2C2C2C"].map((c, i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-charcoal flex items-center justify-center text-[9px] font-bold text-white"
                          style={{ backgroundColor: c }}>
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-white/50 font-medium">+5K creators matched</p>
                  </div>
                </div>

                {/* Platform chips */}
                {[
                  { label: "Instagram", bg: "#E07A3B", top: "-14px", right: "-14px" },
                  { label: "TikTok",    bg: "#7A9E7E", bottom: "24px", left: "-22px" },
                  { label: "YouTube",   bg: "#2C2C2C", bottom: "-14px", right: "20px" },
                ].map((chip) => (
                  <div
                    key={chip.label}
                    className="absolute px-3 py-1.5 rounded-full text-xs font-black text-white border border-white/15 shadow-lg"
                    style={{
                      backgroundColor: chip.bg,
                      top: chip.top,
                      right: chip.right,
                      bottom: chip.bottom,
                      left: chip.left,
                    }}
                  >
                    {chip.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="bg-beige py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center bg-white rounded-2xl py-8 border border-charcoal/5 hover:border-sage/25 hover:shadow-lg transition-all"
              >
                <p className="text-5xl md:text-6xl font-black text-charcoal">{s.value}</p>
                <p className="text-sm text-charcoal/45 mt-2 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ AWARDS ══════════════ */}
      <section className="bg-sage-light py-10 border-y border-sage/15">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <p className="text-center text-xs font-black tracking-[0.25em] uppercase text-charcoal/30 mb-8">
            Recognition & Awards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {awards.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-charcoal/5 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{a.icon}</span>
                <p className="text-xs font-bold text-charcoal/70 leading-tight">{a.label}</p>
                <span className="text-[10px] text-sage font-black">{a.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ DATA / TOOLS ══════════════ */}
      <section className="bg-charcoal py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #7A9E7E15 0%, transparent 65%)" }} />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4"
              >
                Data-Driven Results
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-black italic text-white uppercase leading-[0.9]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}
              >
                Data is your
                <br />
                best friend to
                <br />
                <span className="text-sage">enhance ROI!</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                className="mt-6 text-white/45 text-sm max-w-xs leading-relaxed"
              >
                We use industry-leading tools and real-time analytics to track
                every metric — reach, engagement, conversions and ROAS — so you
                always know exactly what your spend is delivering.
              </motion.p>
            </div>

            {/* Right */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.06 }}
                  className="aspect-square rounded-2xl bg-white/8 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/15 hover:border-sage/30 transition-all"
                >
                  <span className="text-3xl">{tool.icon}</span>
                  <p className="text-[10px] font-bold text-white/45 text-center">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TRUSTED BRANDS ══════════════ */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-charcoal uppercase text-center mb-12"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            TRUSTED BY THE BIGGEST
            <br />
            <span className="text-sage">BRANDS IN THE WORLD</span>
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="bg-white rounded-2xl py-6 flex flex-col items-center justify-center gap-2 border border-charcoal/5 hover:border-sage/25 hover:shadow-lg transition-all"
              >
                <span className="text-2xl">{b.icon}</span>
                <p className="text-xs font-bold text-charcoal/40">{b.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CASE STUDIES ══════════════ */}
      <section className="bg-beige pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-charcoal uppercase text-center mb-12"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            CASE <span className="text-orange">STUDIES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden border border-charcoal/8 bg-white hover:shadow-2xl transition-all"
              >
                {/* Visual placeholder */}
                <div
                  className="aspect-video flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: cs.color + "22" }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: `radial-gradient(circle at 70% 30%, ${cs.color}, transparent 60%)` }}
                  />
                  <span className="text-5xl relative z-10">{cs.icon}</span>
                </div>

                <div className="p-6">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest"
                    style={{ color: cs.color }}
                  >
                    {cs.label}
                  </span>
                  <h3 className="text-sm font-black text-charcoal mt-2 mb-3 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-charcoal/50 leading-relaxed">{cs.result}</p>
                  <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-black text-orange">Read Full Case →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
