"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function PersonCard({
  name,
  role,
  initials,
  gradientFrom,
  gradientTo,
  delay = 0,
}: {
  name: string;
  role: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay, duration: 0.42 }}
      className="group"
    >
      {/* Photo card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ aspectRatio: "3 / 4" }}
      >
        {/* Gradient bg */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${gradientFrom}, ${gradientTo})`,
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* SVG person silhouette */}
        <svg
          viewBox="0 0 100 133"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect  x="43"  y="48" width="14" height="16" rx="5"  fill="rgba(255,255,255,0.30)" />
          <circle cx="50" cy="35" r="22" fill="rgba(255,255,255,0.32)" />
          <ellipse cx="50" cy="14" rx="22" ry="8" fill="rgba(255,255,255,0.18)" />
          <path
            d="M10 133 Q10 85 50 72 Q90 85 90 133 Z"
            fill="rgba(255,255,255,0.22)"
          />
          <path d="M10 100 Q0 115 5 133"  stroke="rgba(255,255,255,0.15)" strokeWidth="14" strokeLinecap="round" fill="none" />
          <path d="M90 100 Q100 115 95 133" stroke="rgba(255,255,255,0.15)" strokeWidth="14" strokeLinecap="round" fill="none" />
        </svg>

        {/* Initials badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-black text-white/60 bg-white/15 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {initials}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-4 backdrop-blur-sm">
          <p className="text-white text-sm font-black text-center leading-tight">{name}</p>
          <p className="text-white/55 text-[10px] text-center">{role}</p>
          <div className="flex gap-2 mt-2">
            {["IG", "LI"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[10px] font-bold text-white hover:bg-sage transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Name + role */}
      <div className="mt-2.5 px-0.5">
        <p className="text-sm font-black text-charcoal leading-tight truncate">{name}</p>
        <p className="text-[11px] text-charcoal/40 truncate mt-0.5">{role}</p>
      </div>
    </motion.div>
  );
}

const team = [
  { initials: "AS", name: "Ahmad Shah",     role: "CEO & Founder",        gFrom: "#546b52CC", gTo: "#3a4e3955" },
  { initials: "SJ", name: "Sara Javed",     role: "Creative Director",    gFrom: "#ff6400CC", gTo: "#ff640044" },
  { initials: "OM", name: "Omar Malik",     role: "Head of Strategy",     gFrom: "#3a4e39CC", gTo: "#546b5244" },
  { initials: "NB", name: "Nadia Bukhari",  role: "Lead Designer",        gFrom: "#ff6400AA", gTo: "#546b5255" },
  { initials: "ZR", name: "Zaid Raza",      role: "Dev Lead",             gFrom: "#546b52AA", gTo: "#ff640044" },
  { initials: "HK", name: "Hira Khan",      role: "Social Media Manager", gFrom: "#546b52BB", gTo: "#546b5233" },
  { initials: "AR", name: "Ali Rauf",       role: "Video Director",       gFrom: "#ff6400BB", gTo: "#1a1a1a33" },
  { initials: "MF", name: "Maria Farooq",   role: "Ads Manager",          gFrom: "#3a4e39BB", gTo: "#546b5233" },
  { initials: "TA", name: "Taha Abbasi",    role: "Copywriter",           gFrom: "#ff6400AA", gTo: "#ff640033" },
  { initials: "RK", name: "Rida Khan",      role: "Graphic Designer",     gFrom: "#546b52AA", gTo: "#ff640044" },
  { initials: "YS", name: "Yousaf Saeed",   role: "Photographer",         gFrom: "#ff6400BB", gTo: "#ff640033" },
  { initials: "AM", name: "Ayesha Mir",     role: "Community Manager",    gFrom: "#546b52BB", gTo: "#546b5233" },
  { initials: "FK", name: "Farhan Khalid",  role: "SEO Specialist",       gFrom: "#1a1a1a88", gTo: "#546b5244" },
  { initials: "SB", name: "Sana Butt",      role: "Brand Strategist",     gFrom: "#ff6400AA", gTo: "#546b5244" },
  { initials: "IM", name: "Imran Malik",    role: "Motion Designer",      gFrom: "#546b52CC", gTo: "#1a1a1a33" },
  { initials: "ZF", name: "Zara Fatima",    role: "Account Manager",      gFrom: "#ff6400BB", gTo: "#ff640033" },
  { initials: "NA", name: "Noman Ahmed",    role: "Frontend Dev",         gFrom: "#546b52AA", gTo: "#546b5233" },
  { initials: "BH", name: "Bilal Hassan",   role: "Video Editor",         gFrom: "#1a1a1a77", gTo: "#ff640033" },
  { initials: "SA", name: "Shanzay Ali",    role: "PR Specialist",        gFrom: "#546b52BB", gTo: "#546b5233" },
  { initials: "KR", name: "Kamran Raza",    role: "Performance Manager",  gFrom: "#ff6400BB", gTo: "#1a1a1a33" },
  { initials: "LJ", name: "Laiba Javed",    role: "UX Designer",          gFrom: "#546b52AA", gTo: "#ff640044" },
  { initials: "WA", name: "Waqas Ahmed",    role: "Backend Dev",          gFrom: "#1a1a1a66", gTo: "#546b5244" },
  { initials: "DK", name: "Dania Khan",     role: "Content Writer",       gFrom: "#ff6400BB", gTo: "#ff640033" },
  { initials: "AB", name: "Asad Baig",      role: "3D Artist",            gFrom: "#546b52CC", gTo: "#546b5233" },
  { initials: "MQ", name: "Maham Qureshi",  role: "Influencer Manager",   gFrom: "#ff6400AA", gTo: "#1a1a1a33" },
];

const marqueeWords = [
  "CREATORS", "STRATEGISTS", "DESIGNERS", "DEVELOPERS",
  "STORYTELLERS", "MARKETERS", "INNOVATORS", "VISIONARIES",
];

export default function MeetTheSquadPage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-beige pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-8">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 pb-0">

            {/* Left: huge heading */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4"
              >
                The People
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="font-black text-charcoal uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(2rem, 11vw, 8.5rem)" }}
              >
                THE SQRD
                <br />
                <span style={{ WebkitTextStroke: "3px #546b52", color: "transparent" }}>SQUAD</span>
              </motion.h1>
            </div>

            {/* Right: stat chips */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col gap-3 pb-4"
            >
              {[
                { val: "25+", label: "Team Members",    color: "#546b52" },
                { val: "5+",  label: "Years Together",  color: "#ff6400" },
                { val: "7",   label: "Departments",     color: "#1a1a1a" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-charcoal/8 shadow-sm"
                >
                  <span className="text-xl font-black" style={{ color: chip.color }}>
                    {chip.val}
                  </span>
                  <span className="text-xs text-charcoal/55 font-medium">{chip.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-6 overflow-hidden bg-sage py-3.5">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-6 text-sm font-black text-white/75 uppercase tracking-widest"
              >
                {marqueeWords.join(" · ")}
                <span className="w-2 h-2 rounded-full bg-white/40 inline-block" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ OUR TEAM HEADING ══════════════ */}
      <section className="bg-beige pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-charcoal uppercase inline-block relative"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            OUR TEAM
            <span className="block h-1.5 bg-orange rounded-full mt-3" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-charcoal/50 text-sm max-w-sm mx-auto leading-relaxed"
          >
            Talented strategists, creatives, and builders united by one goal:
            making your brand impossible to ignore.
          </motion.p>
        </div>
      </section>

      {/* ══════════════ TEAM GRID ══════════════ */}
      <section className="bg-beige pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {team.map((member, i) => (
              <PersonCard
                key={member.name}
                name={member.name}
                role={member.role}
                initials={member.initials}
                gradientFrom={member.gFrom}
                gradientTo={member.gTo}
                delay={(i % 5) * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CULTURE STRIP ══════════════ */}
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Team Events",
                color: "#546b52",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                label: "Creative Sessions",
                color: "#ff6400",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>,
              },
              {
                label: "Behind The Scenes",
                color: "#3a4e39",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
              },
              {
                label: "Office Vibes",
                color: "#546b52",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 flex flex-col items-center gap-3 text-center border border-white/8 hover:border-white/20 transition-all"
                style={{ backgroundColor: item.color + "22" }}
              >
                <span className="text-white/75">{item.icon}</span>
                <p className="text-sm font-black text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ JOIN CTA ══════════════ */}
      <section className="bg-sage py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-white uppercase mb-4"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            WANT TO JOIN THE TEAM?
          </motion.h2>
          <p className="text-white/60 mb-8 text-sm max-w-xs mx-auto leading-relaxed">
            We&apos;re always looking for passionate people who want to do work that
            matters.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 text-sm font-black text-sage bg-white rounded-full hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wide"
          >
            Send Your Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
