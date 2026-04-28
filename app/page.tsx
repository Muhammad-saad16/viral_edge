"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } };

/* ── Clean SVG icons — stroke style ── */
const StoryIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const VideoIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="3"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>;
const DesignIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const ChartIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const CameraIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
const WebIcon      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;

function LogoImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  const [broken, setBroken] = useState(false);
  if (!src || broken) {
    return (
      <div className="w-16 h-16 rounded-xl border-2 border-dashed flex items-center justify-center"
        style={{ borderColor: accent + "55" }}>
        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: accent }}>Logo</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className="w-20 h-12 object-contain" onError={() => setBroken(true)} />
  );
}

const services = [
  { Icon: StoryIcon,  title: "Storytelling",          desc: "Brand narratives that connect emotionally and build lasting loyalty." },
  { Icon: VideoIcon,  title: "Video Content",         desc: "Scroll-stopping reels, films and short-form video built to perform."  },
  { Icon: DesignIcon, title: "Design",                desc: "Stunning visuals and identities that make you impossible to ignore."  },
  { Icon: ChartIcon,  title: "Performance Marketing", desc: "Data-driven ads on Meta, Google & TikTok with transparent ROAS."     },
  { Icon: CameraIcon, title: "Photography",           desc: "Professional shoots planned and delivered by our internal team."      },
  { Icon: WebIcon,    title: "Websites & Apps",       desc: "Fast, modern websites built for conversion and great UX."            },
];

const works = [
  { title: "Jeeviez Kitchen", cat: "Branding", bg: "#546b5228", border: "#546b52", logo: "/logos/jeeviez.jpg"  },
  { title: "Pepsi",           cat: "Content",  bg: "#ff640018", border: "#ff6400", logo: "/logos/pepsi.png"    },
  { title: "Mortein",         cat: "Digital",  bg: "#2c2c2c14", border: "#3a3a3a", logo: "/logos/mortein.jpg"  },
  { title: "Sunsilk",         cat: "Video",    bg: "#546b5220", border: "#546b52", logo: "/logos/sunsilk.jpg"  },
  { title: "Knorr",           cat: "Social",   bg: "#ff640014", border: "#ff6400", logo: "/logos/knorr.jpg"    },
  { title: "Tapal",           cat: "Ads",      bg: "#546b5230", border: "#546b52", logo: "/logos/tapal.jpg"    },
];

const team = [
  { initials: "AS", name: "Ahmad Shah",    role: "CEO",           color: "#546b52" },
  { initials: "SJ", name: "Sara Javed",    role: "Creative Lead", color: "#ff6400" },
  { initials: "OM", name: "Omar Malik",    role: "Strategist",    color: "#3a4e39" },
  { initials: "NB", name: "Nadia Bukhari", role: "Designer",      color: "#546b52" },
  { initials: "ZR", name: "Zaid Raza",     role: "Dev Lead",      color: "#ff6400" },
  { initials: "HK", name: "Hira Khan",     role: "Social Media",  color: "#3a4e39" },
];

const clients = ["Pepsi", "Sunsilk", "Knorr", "Tapal", "Sooper", "Durex", "Mortein", "Layers", "EBM", "Almirah"];

const testimonials = [
  {
    quote: "SQRD transformed how we approach digital storytelling. Our engagement went up 3x in just two months. Real results, no fluff.",
    author: "Bilal R.", role: "Brand Manager, Pepsi Pakistan", color: "#546b52",
  },
  {
    quote: "From strategy to execution, SQRD delivered above expectations. They genuinely understand brand and performance at the same time.",
    author: "Sana M.", role: "Head of Digital, Knorr Pakistan", color: "#ff6400",
  },
  {
    quote: "Finally an agency that understands premium brand positioning. Sharp team, fast turnarounds, and results that speak.",
    author: "Khalid A.", role: "CMO, Regional FMCG Group, UAE", color: "#3a4e39",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section ref={heroRef} className="relative bg-beige min-h-screen flex flex-col overflow-hidden pt-16">

        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, #546b5215 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, #ff640010 0%, transparent 70%)" }} />
        </motion.div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative flex-1 max-w-7xl mx-auto px-5 lg:px-10 w-full flex flex-col justify-center">
          <motion.div variants={container} initial="hidden" animate="show"
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ── Left ── */}
            <div className="flex-1 max-w-2xl">
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/12 text-sage text-xs font-bold tracking-widest uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-sm bg-sage animate-pulse" />
                  Digital Agency · Pakistan & UAE
                </span>
              </motion.div>

              <motion.h1 variants={item}
                className="font-black text-charcoal uppercase leading-[0.9] tracking-tight mb-6"
                style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
                WE SQUARE<br />
                <span className="relative inline-block">
                  CHAOS INTO<br />CLARITY
                  <motion.span
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.7, ease: "circOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-orange origin-left rounded-sm"
                  />
                </span>
              </motion.h1>

              <motion.p variants={item} className="text-charcoal/55 text-lg max-w-md leading-relaxed mb-8">
                We shape strategy, content, design &amp; growth crafted for brands that want presence, not just visibility.
              </motion.p>

              {/* Service tags */}
              <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
                {services.slice(0, 5).map((svc) => (
                  <span key={svc.title}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-charcoal/8 text-sm font-semibold text-charcoal/60 hover:border-sage/40 hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-default">
                    <span className="text-sage"><svc.Icon /></span>
                    {svc.title}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={item} className="flex flex-wrap gap-3">
                <Link href="/portfolio"
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-orange hover:bg-orange/90 hover:shadow-lg hover:shadow-orange/25 hover:-translate-y-0.5 transition-all uppercase tracking-wider">
                  See what we&apos;ve built
                </Link>
                <Link href="/contact"
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-charcoal border-2 border-charcoal/20 bg-white hover:border-charcoal hover:shadow-md hover:-translate-y-0.5 transition-all uppercase tracking-wider">
                  Let&apos;s talk about your Brand
                </Link>
              </motion.div>
            </div>

            {/* ── Right visual ── */}
            <motion.div variants={item} className="flex-1 flex justify-center items-center">
              <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px]">
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} className="absolute rounded-2xl border"
                    style={{
                      inset: `${i * 44}px`,
                      borderColor: i === 0 ? "#546b5238" : i === 1 ? "#ff640025" : "#1a1a1a12",
                      borderWidth: i === 0 ? 2 : 1,
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
                  />
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-36 h-36 bg-charcoal rounded-2xl flex flex-col items-center justify-center gap-2 shadow-2xl"
                  >
                    {/* Q mark */}
                    <div className="relative" style={{ width: 40, height: 46 }}>
                      <div className="bg-[#ff6400]" style={{ width: 32, height: 32, borderRadius: 2 }} />
                      <div className="absolute bg-[#1a1a1a]" style={{ width: 14, height: 14, top: 5, left: 9, borderRadius: 1 }} />
                      <div className="absolute bg-[#ff6400]" style={{ width: 11, height: 11, top: 34, left: 0, borderRadius: 1 }} />
                    </div>
                    <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase">SQRD Digital</span>
                  </motion.div>
                </div>

                {[
                  { label: "150+ Clients",  top: "4%",  left: "56%", bg: "#546b52", delay: 0   },
                  { label: "500+ Projects", top: "80%", left: "2%",  bg: "#ff6400", delay: 0.5 },
                  { label: "98% Retention", top: "76%", left: "55%", bg: "#1a1a1a", delay: 1.0 },
                  { label: "5+ Years",      top: "8%",  left: "2%",  bg: "#3a4e39", delay: 1.5 },
                ].map((chip) => (
                  <motion.div key={chip.label}
                    className="absolute px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap shadow-md"
                    style={{ top: chip.top, left: chip.left, backgroundColor: chip.bg }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: chip.delay }}>
                    {chip.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="relative flex justify-center pb-8">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <div className="w-6 h-9 rounded-full border-2 border-charcoal/20 flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-charcoal/25" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════ TRUSTED BRANDS ════════════════ */}
      <div className="bg-sage-light border-y border-sage/15 py-5 overflow-hidden">
        <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-charcoal/35 mb-4">
          Trusted by 150+ Brands across Pakistan & UAE
        </p>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8 text-sm font-bold text-charcoal/25 uppercase tracking-widest">
              {c}
              <span className="inline-block w-1 h-1 rounded-sm bg-sage/40" />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════ DARK MARQUEE ════════════════ */}
      <div className="bg-charcoal py-3.5 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(22)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-[11px] font-bold text-white/35 uppercase tracking-widest">
              {["Storytelling", "Video", "Branding", "Websites", "Performance", "Digital PR"][i % 6]}
              <span className="inline-block w-1 h-1 bg-sage" />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════ END-TO-END, DONE PROPERLY ════════════════ */}
      <section className="relative bg-sage overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/6" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-black/8" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="flex-1">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
                What We Do
              </motion.p>
              <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="font-black text-white uppercase leading-[0.9] mb-6"
                style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
                END-TO-END,<br />DONE PROPERLY.
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="text-white/70 text-base max-w-sm leading-relaxed mb-8">
                Social, websites, branding, video, paid marketing built for presence and growth.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.28 }}>
                <Link href="/services"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-sage bg-white hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wider">
                  Our Services
                </Link>
              </motion.div>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((svc, i) => (
                <motion.div key={svc.title}
                  initial={{ opacity: 0, y: 24, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                  whileHover={{ y: -5, scale: 1.04 }}
                  className="bg-white/10 backdrop-blur border border-white/12 rounded-2xl p-5 text-center hover:bg-white/18 transition-colors">
                  <span className="flex items-center justify-center w-9 h-9 mx-auto mb-3 text-white/75">
                    <svc.Icon />
                  </span>
                  <p className="text-xs font-bold text-white/90 leading-tight">{svc.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ HOW WE WORK ════════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sage mb-3">Our Process</p>
            <h2 className="font-black text-charcoal uppercase" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              HOW WE <span className="text-sage">WORK</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: "01", label: "Discovery",  desc: "We learn your brand, goals and audience inside out." },
              { step: "02", label: "Strategy",   desc: "We build a data-backed plan tailored to your market." },
              { step: "03", label: "Execution",  desc: "Our team creates, launches and manages everything." },
              { step: "04", label: "Optimise",   desc: "We measure, iterate and scale what delivers ROI." },
            ].map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-7 h-px bg-charcoal/10 z-0"
                    style={{ left: "calc(50% + 30px)", width: "calc(100% - 30px)" }} />
                )}
                <div className="bg-white rounded-2xl border border-charcoal/6 hover:border-sage/25 hover:shadow-lg transition-all p-6 text-center z-10 relative">
                  <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center font-black text-sage text-lg mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-sm font-black text-charcoal uppercase tracking-wide mb-2">{s.label}</h3>
                  <p className="text-xs text-charcoal/50 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <Link href="/process"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-bold text-charcoal border-2 border-charcoal/20 hover:border-charcoal hover:shadow-md hover:-translate-y-0.5 transition-all uppercase tracking-wider">
              Full Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ THE SQRD SQUAD ════════════════ */}
      <section className="bg-charcoal py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="flex-1 grid grid-cols-3 gap-3">
              {team.map((m, i) => (
                <motion.div key={m.name}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default"
                  style={{ backgroundColor: m.color + "22", border: `1.5px solid ${m.color}35` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white"
                    style={{ backgroundColor: m.color }}>
                    {m.initials}
                  </div>
                  <p className="text-xs font-bold text-white text-center leading-tight">{m.name}</p>
                  <p className="text-[10px] text-white/50 text-center">{m.role}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex-1">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-3">
                The People
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="font-black text-white uppercase leading-[0.9] mb-5"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
                THE SQRD<br />
                <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)", color: "transparent" }}>SQUAD</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }}
                className="text-white/60 text-base leading-relaxed max-w-sm mb-8">
                A team of strategists, creatives, and builders shaping brands that stand out.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Link href="/meet-the-squad"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold text-sage bg-white hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wider">
                  Meet the Squad
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FEATURED PROJECTS ════════════════ */}
      <section className="bg-charcoal py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-black text-white uppercase leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              FEATURED<br />
              <span className="text-orange">PROJECTS</span>
            </motion.h2>
            <Link href="/portfolio"
              className="flex-shrink-0 inline-flex items-center px-6 py-3 rounded-full text-sm font-bold text-charcoal bg-white hover:bg-white/90 hover:-translate-y-0.5 transition-all uppercase tracking-wider">
              See more work
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {works.map((w, i) => (
              <motion.div key={w.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }} transition={{ delay: (i % 3) * 0.08, duration: 0.45 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group aspect-square rounded-2xl relative overflow-hidden cursor-default flex flex-col justify-between p-5"
                style={{ backgroundColor: w.bg, border: `1.5px solid ${w.border}28` }}>
                <div className="h-0.5 w-10 rounded-full" style={{ backgroundColor: w.border }} />

                {/* Logo */}
                <div className="flex items-center justify-center flex-1 py-2">
                  <LogoImage src={w.logo} alt={w.title} accent={w.border} />
                </div>

                <div>
                  <p className="text-sm font-black text-charcoal leading-tight mb-2">{w.title}</p>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold text-white"
                    style={{ backgroundColor: w.border + "cc" }}>
                    {w.cat}
                  </span>
                </div>
                <div className="absolute inset-0 bg-charcoal/88 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <span className="text-white text-sm font-bold tracking-wide">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sage mb-3">What Clients Say</p>
            <h2 className="font-black text-charcoal uppercase" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              CLIENT <span className="text-orange">STORIES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-charcoal/6 hover:border-sage/25 hover:shadow-xl transition-all p-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: t.color + "18" }}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill={t.color} fillOpacity="0.35"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill={t.color} fillOpacity="0.35"/>
                  </svg>
                </div>
                <p className="text-charcoal/65 text-sm leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{ backgroundColor: t.color }}>
                    {t.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-xs font-black text-charcoal">{t.author}</p>
                    <p className="text-[11px] text-charcoal/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ DONE PLAYING SMALL? ════════════════ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-charcoal rounded-3xl overflow-hidden px-8 md:px-20 py-16 text-center">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full"
              style={{ background: "radial-gradient(circle, #546b5218, transparent)" }} />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full"
              style={{ background: "radial-gradient(circle, #ff640018, transparent)" }} />

            <div className="relative">
              <h2 className="font-black text-white uppercase leading-[0.9] mb-5"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                DONE PLAYING<br />
                <span className="text-orange">SMALL?</span>
              </h2>
              <p className="text-white/40 text-sm mb-10 max-w-md mx-auto leading-relaxed">
                Your brand deserves more than average marketing. Let&apos;s build something the market can&apos;t ignore.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"
                  className="px-10 py-4 rounded-full text-sm font-bold text-charcoal bg-white hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wider">
                  Brief Us In
                </Link>
                <a href="https://wa.me/922135395533" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-bold text-white border-2 border-white/25 hover:border-white/60 hover:bg-white/8 hover:-translate-y-1 transition-all uppercase tracking-wider">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
