"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── Stagger children helper ───────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const services = [
  { icon: "📖", title: "Storytelling",           desc: "Brand narratives that connect emotionally and build lasting loyalty."   },
  { icon: "🎬", title: "Video Content",           desc: "Scroll-stopping reels, films and short-form video built to perform."    },
  { icon: "✏️", title: "Design",                  desc: "Stunning visuals and identities that make you impossible to ignore."    },
  { icon: "📈", title: "Performance Marketing",   desc: "Data-driven ads on Meta, Google & TikTok with transparent ROAS."       },
  { icon: "📸", title: "In-house Photography",    desc: "Professional shoots planned and delivered by our internal team."       },
  { icon: "💻", title: "Website / Apps",           desc: "Fast, modern websites built for conversion and great UX."             },
];

const works = [
  { title: "Jeeviez Kitchen", cat: "Branding", bg: "#7A9E7E33", border: "#7A9E7E" },
  { title: "Pepsi",           cat: "Content",  bg: "#E07A3B22", border: "#E07A3B" },
  { title: "Mortein",         cat: "Digital",  bg: "#2C2C2C18", border: "#2C2C2C" },
  { title: "Sunsilk",         cat: "Video",    bg: "#7A9E7E22", border: "#7A9E7E" },
  { title: "Knorr",           cat: "Social",   bg: "#E07A3B18", border: "#E07A3B" },
  { title: "Tapal",           cat: "Ads",      bg: "#7A9E7E30", border: "#7A9E7E" },
];

const team = [
  { initials: "AS", name: "Ahmad Shah",    role: "CEO",              color: "#7A9E7E" },
  { initials: "SJ", name: "Sara Javed",    role: "Creative Lead",    color: "#E07A3B" },
  { initials: "OM", name: "Omar Malik",    role: "Strategist",       color: "#5C7E60" },
  { initials: "NB", name: "Nadia Bukhari", role: "Designer",         color: "#7A9E7E" },
  { initials: "ZR", name: "Zaid Raza",     role: "Dev Lead",         color: "#E07A3B" },
  { initials: "HK", name: "Hira Khan",     role: "Social Media",     color: "#5C7E60" },
];

const clients = ["Pepsi","Sunsilk","Knorr","Tapal","Sooper","Durex","Mortein","Layers","EBM","Almirah"];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — full viewport, massive "WE CREATE"
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative bg-beige min-h-screen flex flex-col overflow-hidden pt-16">

        {/* Parallax bg blob */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, #7A9E7E22 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, #E07A3B18 0%, transparent 70%)" }} />
        </motion.div>

        {/* Dot-grid texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#2C2C2C 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative flex-1 max-w-7xl mx-auto px-5 lg:px-10 w-full flex flex-col justify-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Left */}
            <div className="flex-1">
              {/* Label pill */}
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/15 text-sage text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                  Digital Agency · Pakistan
                </span>
              </motion.div>

              {/* HUGE headline */}
              <motion.h1
                variants={item}
                className="font-black text-charcoal uppercase leading-[0.88] tracking-tight"
                style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
              >
                WE{" "}
                <span className="relative">
                  CREATE
                  <motion.span
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.6, ease: "circOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-2.5 bg-orange origin-left rounded-sm"
                  />
                </span>
              </motion.h1>

              {/* Sub-heading */}
              <motion.p variants={item} className="mt-6 text-charcoal/55 text-lg max-w-md leading-relaxed">
                Strategy, content, design & growth — we&apos;re the team behind brands
                that don&apos;t just show up online, they own their space.
              </motion.p>

              {/* Service type icons — same as reference, below heading */}
              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                {services.slice(0, 5).map((svc) => (
                  <div key={svc.title}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-charcoal/8 hover:border-sage/40 hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-semibold text-charcoal/60">
                    <span>{svc.icon}</span>
                    <span>{svc.title}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <Link href="/portfolio"
                  className="px-8 py-4 text-sm font-black text-white bg-orange rounded-full hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 transition-all uppercase tracking-wide">
                  Our Work →
                </Link>
                <Link href="/contact"
                  className="px-8 py-4 text-sm font-black text-charcoal border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white hover:-translate-y-0.5 transition-all uppercase tracking-wide">
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            {/* Right — bold abstract visual */}
            <motion.div
              variants={item}
              className="flex-1 flex justify-center items-center min-h-[380px]"
            >
              <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
                {/* Concentric animated rings */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border"
                    style={{
                      inset: `${i * 48}px`,
                      borderColor: i === 0 ? "#7A9E7E40" : i === 1 ? "#E07A3B30" : "#2C2C2C18",
                      borderWidth: i === 0 ? 2 : 1,
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 18 + i * 8, repeat: Infinity, ease: "linear" }}
                  />
                ))}

                {/* Center hero badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-40 bg-charcoal rounded-3xl flex flex-col items-center justify-center gap-1 shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
                  >
                    <span className="text-5xl font-black text-white -rotate-6">V</span>
                    <span className="text-[10px] font-bold text-white/40 -rotate-6 tracking-widest uppercase">VIRAL EDGE</span>
                  </motion.div>
                </div>

                {/* Floating metric chips */}
                {[
                  { label: "150+ Clients",  top: "4%",  left: "58%", bg: "#7A9E7E", delay: 0    },
                  { label: "500+ Projects", top: "82%", left: "2%",  bg: "#E07A3B", delay: 0.4  },
                  { label: "98% Retention", top: "78%", left: "56%", bg: "#2C2C2C", delay: 0.8  },
                  { label: "5+ Years",      top: "8%",  left: "2%",  bg: "#5C7E60", delay: 1.2  },
                ].map((chip) => (
                  <motion.div
                    key={chip.label}
                    className="absolute px-3 py-1.5 rounded-full text-xs font-black text-white whitespace-nowrap shadow-lg"
                    style={{ top: chip.top, left: chip.left, backgroundColor: chip.bg }}
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: chip.delay }}
                  >
                    {chip.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="relative flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-6 h-9 rounded-full border-2 border-charcoal/25 flex items-start justify-center pt-1.5">
              <div className="w-1.5 h-2 rounded-full bg-charcoal/30" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          MARQUEE STRIP — dark bar
      ══════════════════════════════════════════════ */}
      <div className="bg-charcoal py-4 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-sm font-bold text-white/40 uppercase tracking-widest">
              {["Storytelling", "Video", "Branding", "Web", "Performance", "Digital PR"][i % 6]}
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          WE DO IT ALL — bold sage section
      ══════════════════════════════════════════════ */}
      <section className="relative bg-sage overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/8" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-black text-white uppercase leading-[0.88]"
                style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
              >
                WE DO
                <br />
                IT ALL!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="mt-6 text-white/75 text-base max-w-sm leading-relaxed"
              >
                Social media, websites, branding, video, paid ads — everything your brand
                needs to dominate, in one place.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black text-sage bg-white rounded-full hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase">
                  Explore Services →
                </Link>
              </motion.div>
            </div>

            {/* Right — service cards grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="bg-white/12 backdrop-blur border border-white/15 rounded-2xl p-5 text-center hover:bg-white/22 transition-colors"
                >
                  <span className="text-3xl block mb-2">{svc.icon}</span>
                  <p className="text-xs font-black text-white leading-tight">{svc.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR TEAM preview — beige, two-col
      ══════════════════════════════════════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: stacked member cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex-1 grid grid-cols-3 gap-3"
            >
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default"
                  style={{ backgroundColor: m.color + "22", border: `1.5px solid ${m.color}40` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-base text-white"
                    style={{ backgroundColor: m.color }}>
                    {m.initials}
                  </div>
                  <p className="text-xs font-bold text-charcoal text-center leading-tight">{m.name}</p>
                  <p className="text-[10px] text-charcoal/45 text-center">{m.role}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: text */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.2em] uppercase text-sage mb-3"
              >
                The People
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="font-black text-charcoal uppercase leading-[0.9] mb-5"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                OUR
                <br />
                <span className="text-sage">TEAM</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-charcoal/55 text-base leading-relaxed max-w-sm mb-8"
              >
                Meet the talented strategists, creatives, and builders behind every
                campaign and every result we deliver.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 }}
              >
                <Link href="/meet-the-squad"
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-black text-white bg-orange rounded-full hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/25 hover:-translate-y-0.5 transition-all uppercase">
                  Meet The Squad →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          JUST SOME OF OUR WORK — dark bold section
      ══════════════════════════════════════════════ */}
      <section className="bg-charcoal py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-black text-white uppercase leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              JUST SOME
              <br />
              OF OUR <span className="text-orange">WORK...</span>
            </motion.h2>
            <Link href="/portfolio"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-black text-charcoal bg-white rounded-full hover:bg-white/90 hover:-translate-y-0.5 transition-all uppercase">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {works.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="group aspect-square rounded-2xl relative overflow-hidden cursor-default flex items-center justify-center"
                style={{ backgroundColor: w.bg, border: `1.5px solid ${w.border}40` }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-30"
                  style={{ backgroundColor: w.border }} />
                <div className="absolute bottom-0 left-0 w-10 h-10 rounded-tr-3xl opacity-20"
                  style={{ backgroundColor: w.border }} />

                <div className="relative text-center px-4 z-10">
                  <p className="text-base font-black text-charcoal leading-tight">{w.title}</p>
                  <span className="mt-1.5 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: w.border }}>
                    {w.cat}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <span className="text-white text-sm font-black">View Project →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR CULTURE
      ══════════════════════════════════════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-charcoal uppercase text-center mb-12"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            OUR <span className="text-orange">CULTURE</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Team Events",       color: "#7A9E7E", pattern: "◆" },
              { label: "Creative Sessions", color: "#E07A3B", pattern: "●" },
              { label: "Behind The Scenes", color: "#5C7E60", pattern: "▲" },
              { label: "Office Vibes",      color: "#2C2C2C", pattern: "■" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl aspect-[4/3] relative overflow-hidden flex items-center justify-center cursor-default"
                style={{ backgroundColor: item.color + "25", border: `1.5px solid ${item.color}35` }}
              >
                <span className="text-7xl font-black absolute opacity-[0.06]"
                  style={{ color: item.color }}>{item.pattern}</span>
                <p className="relative text-sm font-black text-charcoal/70 text-center">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CLIENT LOGOS MARQUEE
      ══════════════════════════════════════════════ */}
      <div className="bg-sage-light border-y border-sage/15 py-5 overflow-hidden">
        <p className="text-center text-[10px] font-black tracking-[0.3em] uppercase text-charcoal/30 mb-4">
          Trusted by 150+ Brands
        </p>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8 text-sm font-black text-charcoal/25 uppercase tracking-widest">
              {c} <span className="w-1.5 h-1.5 rounded-full bg-sage/40" />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          NEWSLETTER CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-charcoal rounded-3xl overflow-hidden px-8 md:px-20 py-16 flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, #7A9E7E20, transparent)" }} />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, #E07A3B20, transparent)" }} />

            <div className="relative text-center lg:text-left flex-1">
              <h2 className="font-black text-white uppercase leading-[0.9] mb-4"
                style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
                GET LATEST
                <br />
                <span className="text-sage">NEWSLETTER</span>
              </h2>
              <p className="text-white/40 text-sm mb-8 max-w-xs mx-auto lg:mx-0">
                Stay updated with the latest campaigns, insights & marketing tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 rounded-full bg-white/8 border border-white/12 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-sage transition-colors" />
                <button type="submit"
                  className="px-6 py-4 text-sm font-black text-white bg-orange rounded-full hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/30 transition-all flex-shrink-0 uppercase">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Decorative rings */}
            <div className="relative hidden lg:flex flex-shrink-0 w-48 h-48 items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border"
                  style={{ inset: `${i * 16}px`, borderColor: i === 0 ? "#7A9E7E50" : i === 1 ? "#E07A3B35" : "#ffffff20" }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 12 + i * 6, repeat: Infinity, ease: "linear" }}
                />
              ))}
              <span className="text-4xl">💌</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
