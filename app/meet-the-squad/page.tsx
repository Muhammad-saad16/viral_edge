"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function PersonCard({
  name,
  role,
  photo,
  initials,
  color,
  delay = 0,
}: {
  name: string;
  role: string;
  photo: string;
  initials: string;
  color: string;
  delay?: number;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay, duration: 0.42 }}
      className="group"
    >
      {/* Photo card */}
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
        {/* Gradient bg fallback */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${color}cc, ${color}44)` }} />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "14px 14px" }} />

        {/* Real photo */}
        {!broken ? (
          <img
            src={photo}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-black text-white/40">{initials}</span>
          </div>
        )}

        {/* Role badge top-left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[9px] font-black text-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm"
            style={{ background: color + "aa" }}>
            {initials}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-end justify-end p-4"
          style={{ background: `linear-gradient(to top, ${color}ee 0%, transparent 60%)` }}>
          <p className="text-white text-sm font-black leading-tight">{name}</p>
          <p className="text-white/70 text-[10px] mt-0.5">{role}</p>
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
  { initials: "SK", name: "Saqib Ahmed Khan",    role: "Co-founder, Sales Strategist", color: "#546b52", photo: "/Squad/Saqib Ahmed Khan _ Co-founder_ Sales Strategist.png" },
  { initials: "SI", name: "Syed Ibad ur Rehman", role: "Co-founder, Brand Manager",    color: "#ff6400", photo: "/Squad/Syed Ibad ur Rehman _ Co-founder_ Brand Manager.png"  },
  { initials: "FF", name: "Fizha Farukh",         role: "Creative Head",                color: "#3a4e39", photo: "/Squad/Fizha Farukh _ Creative Head.png"                       },
  { initials: "NA", name: "Nida Asim",             role: "Content Head",                 color: "#546b52", photo: "/Squad/Nida Asim _ Content Head.png"                           },
  { initials: "AA", name: "Agha Alamdar Abbas",   role: "Graphic Designer",             color: "#ff6400", photo: "/Squad/Agha Alamdar Abbas _ Graphic Designer.png"              },
  { initials: "SH", name: "Syed Assam Hassan",    role: "Operations Executive",         color: "#546b52", photo: "/Squad/Syed Assam Hassan _ Operations Executive.png"               },
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
                { val: "7",   label: "Departments",     color: "#3a4e39" },
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
                photo={member.photo}
                initials={member.initials}
                color={member.color}
                delay={(i % 5) * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CULTURE STRIP ══════════════ */}
      <section className="bg-sage-dark py-16">
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
