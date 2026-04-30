"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── SVG icons (stroke, no emojis) ── */
const StoryIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const VideoIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="2"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>;
const DesignIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const MarketingIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const CameraIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
const WebIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const PRIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M3 11l19-9v18L3 11z"/><line x1="11" y1="17" x2="11" y2="21"/></svg>;

const services = [
  { num: "01", Icon: StoryIcon,     title: "Storytelling",           desc: "Brand narratives that connect emotionally and build lasting loyalty across every platform.", color: "#546b52", bg: "#546b52" },
  { num: "02", Icon: VideoIcon,     title: "Video Content",          desc: "Scroll-stopping reels, brand films and short-form video built to perform at every scroll.",  color: "#ff6400", bg: "#ff6400" },
  { num: "03", Icon: DesignIcon,    title: "Design",                 desc: "Stunning visuals and identities that align with your brand and make you impossible to ignore.", color: "#3a4e39", bg: "#3a4e39" },
  { num: "04", Icon: MarketingIcon, title: "Performance Marketing",  desc: "Data-driven paid campaigns on Meta, Google and TikTok. Every rupee tracked and optimised.",  color: "#ff6400", bg: "#ff6400" },
  { num: "05", Icon: CameraIcon,    title: "In-house Photography",   desc: "Professional shoots planned and delivered entirely by our internal creative team.",           color: "#546b52", bg: "#546b52" },
  { num: "06", Icon: WebIcon,       title: "Websites & Apps",        desc: "Fast, modern websites and digital apps built for conversion and exceptional UX.",              color: "#1a1a1a", bg: "#1a1a1a" },
  { num: "07", Icon: PRIcon,        title: "Digital PR",             desc: "Strategic PR placements and influencer partnerships that amplify your message.",               color: "#546b52", bg: "#546b52" },
];

const stats = [
  { val: "150+", label: "Happy Clients" },
  { val: "500+", label: "Projects Delivered" },
  { val: "7",    label: "Core Services" },
  { val: "98%",  label: "Retention Rate" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="bg-beige pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 pt-8 pb-14">
            <div className="flex-1">
              <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4">
                What We Offer
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}
                className="font-black text-charcoal uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(2rem, 10vw, 8.5rem)" }}>
                OUR<br />
                <span className="relative inline-block" style={{ WebkitTextStroke: "3px #ff6400", color: "transparent" }}>SERVICES</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }}
                className="mt-6 text-charcoal/55 text-base max-w-sm leading-relaxed">
                From captivating brand experiences to results-driven digital campaigns, our full-service suite is tailored to make your brand dominate every channel.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.44 }}
                className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact"
                  className="px-8 py-4 text-sm font-black text-white bg-orange hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 transition-all uppercase tracking-wide"
                  style={{ borderRadius: "40px" }}>
                  Work with SQRD
                </Link>
                <Link href="/portfolio"
                  className="px-8 py-4 text-sm font-black text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white hover:-translate-y-0.5 transition-all uppercase tracking-wide"
                  style={{ borderRadius: "40px" }}>
                  View Projects
                </Link>
              </motion.div>
            </div>

            {/* Right — phone mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
              className="flex-1 flex justify-center items-end self-end">
              <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: "radial-gradient(circle, #546b52, #ff6400)" }} />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-64 lg:w-44 lg:h-72 bg-charcoal rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10">
                  <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 px-3 pb-4">
                    <div className="h-16 rounded-xl bg-gradient-to-br from-sage/50 to-sage/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-white/80">Campaign Live</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full" />
                    <div className="h-2 bg-white/8 rounded-full w-2/3" />
                    <div className="flex gap-1.5 mt-1">
                      {[60, 80, 45, 95, 70].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm"
                          style={{ height: `${h * 0.45}px`, backgroundColor: i % 2 === 0 ? "#546b52" : "#546b5255" }} />
                      ))}
                    </div>
                    <div className="h-2 bg-white/10 rounded-full" />
                    <div className="h-10 rounded-xl bg-gradient-to-br from-orange/50 to-orange/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white/80">+24% ROAS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <div className="bg-charcoal py-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-white"
                  style={{  }}>{s.val}</span>
                <span className="text-xs text-white/40 mt-1 font-medium tracking-wide">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SERVICE CARDS ══ */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-black text-charcoal uppercase inline-block"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              WHAT WE <span className="text-sage">DELIVER</span>
            </h2>
            <div className="h-1.5 bg-orange mt-3 max-w-[120px] mx-auto" style={{ borderRadius: "4px" }} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {services.slice(0, 4).map((svc, i) => (
              <motion.div key={svc.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white border border-charcoal/8 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden p-7"
                style={{ borderRadius: "16px" }}>
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: svc.bg, borderRadius: "16px 16px 0 0" }} />
                <span className="text-[10px] font-black tracking-widest mb-5 block" style={{ color: svc.color + "99" }}>{svc.num}</span>
                <span className="w-10 h-10 block mb-5" style={{ color: svc.color }}><svc.Icon /></span>
                <h3 className="text-sm font-black uppercase tracking-wide mb-3 transition-colors" style={{ color: svc.color }}>{svc.title}</h3>
                <p className="text-xs text-charcoal/50 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.slice(4).map((svc, i) => (
              <motion.div key={svc.title}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white border border-charcoal/8 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden p-7"
                style={{ borderRadius: "16px" }}>
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: svc.bg, borderRadius: "16px 16px 0 0" }} />
                <span className="text-[10px] font-black tracking-widest mb-5 block" style={{ color: svc.color + "99" }}>{svc.num}</span>
                <span className="w-10 h-10 block mb-5" style={{ color: svc.color }}><svc.Icon /></span>
                <h3 className="text-sm font-black uppercase tracking-wide mb-3" style={{ color: svc.color }}>{svc.title}</h3>
                <p className="text-xs text-charcoal/50 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS SECTION ══ */}
      <section className="bg-sage py-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-black text-white uppercase text-center mb-14"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            HOW WE <span className="text-charcoal">WORK</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Discovery",  desc: "We learn your brand, goals and audience inside out." },
              { step: "02", label: "Strategy",   desc: "We build a data-backed plan tailored to your market." },
              { step: "03", label: "Execution",  desc: "Our team creates, launches and manages everything." },
              { step: "04", label: "Optimise",   desc: "We measure, iterate and scale what delivers ROI." },
            ].map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 h-px bg-white/20 z-0"
                    style={{ left: "calc(50% + 24px)", width: "calc(100% - 24px)" }} />
                )}
                <div className="bg-white/10 backdrop-blur border border-white/15 p-6 text-center relative z-10"
                  style={{ borderRadius: "16px" }}>
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center font-black text-white text-lg mx-auto mb-4"
                    style={{ borderRadius: "8px" }}>
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

      {/* ══ BOTTOM CTA ══ */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-charcoal px-8 md:px-20 py-16 overflow-hidden text-center"
            style={{ borderRadius: "24px" }}>
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, #546b5225, transparent)" }} />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, #ff640020, transparent)" }} />
            <div className="relative">
              <h2 className="font-black text-white uppercase leading-[0.9] mb-6"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
                LET&apos;S GROW<br />
                <span className="text-orange">YOUR BRAND</span>
              </h2>
              <p className="text-white/45 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Let&apos;s talk about your brand and build a custom strategy that actually moves the needle.
              </p>
              <Link href="/contact"
                className="inline-flex items-center px-10 py-4 text-sm font-black text-charcoal bg-white hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wide"
                style={{ borderRadius: "40px" }}>
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
