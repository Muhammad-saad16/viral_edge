"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DiscoveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

const ExecutionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const OptimiseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const steps = [
  {
    num: "01",
    Icon: DiscoveryIcon,
    label: "Discovery",
    color: "#546b52",
    headline: "We learn everything about you.",
    desc: "Before we write a single word or design a single pixel, we spend time understanding your brand, your audience, your competitors, and your goals. This phase is non-negotiable. Great work starts with deep understanding.",
    deliverables: ["Brand audit", "Competitor research", "Audience mapping", "Goal setting & KPIs"],
  },
  {
    num: "02",
    Icon: StrategyIcon,
    label: "Strategy",
    color: "#ff6400",
    headline: "We build your playbook.",
    desc: "Using everything we learned in discovery, we craft a tailored strategy that aligns your content, design, and marketing with real business outcomes. No generic templates. Every plan is built for your brand specifically.",
    deliverables: ["Content strategy", "Channel plan", "Creative direction", "Campaign roadmap"],
  },
  {
    num: "03",
    Icon: ExecutionIcon,
    label: "Execution",
    color: "#3a4e39",
    headline: "We bring it to life.",
    desc: "Our in-house team of creatives, strategists, and developers executes the plan end-to-end. From content production to campaign launches, every deliverable goes through a rigorous quality check before it reaches your audience.",
    deliverables: ["Content creation", "Design & branding", "Campaign launch", "Website development"],
  },
  {
    num: "04",
    Icon: OptimiseIcon,
    label: "Optimise",
    color: "#546b52",
    headline: "We scale what works.",
    desc: "After launch, the real work begins. We track performance data, run A/B tests, identify what's driving ROI, and scale it. Everything that isn't working gets fixed or replaced. This is how we consistently deliver above-average results.",
    deliverables: ["Performance reporting", "A/B testing", "Budget optimisation", "Monthly strategy reviews"],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="bg-beige pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}
            className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-4">How We Work</p>
            <h1 className="font-black text-charcoal uppercase leading-[0.88] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 10vw, 8rem)" }}>
              THE SQRD<br />
              <span style={{ WebkitTextStroke: "3px #546b52", color: "transparent" }}>PROCESS</span>
            </h1>
            <p className="text-charcoal/55 text-lg max-w-xl leading-relaxed">
              Four deliberate steps from brief to results. No shortcuts, no templates, no guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS STEPS ══ */}
      <section className="bg-beige pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white hover:shadow-xl transition-all p-8 lg:p-12"
                style={{ borderRadius: "20px", border: `1.5px solid ${s.color}20` }}>

                {/* Step number + label */}
                <div className="lg:col-span-2 flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{ backgroundColor: s.color, color: "#fff" }}>
                      <s.Icon />
                    </div>
                    <span className="text-sm font-black" style={{ color: s.color }}>{s.num}</span>
                  </div>
                  <h2 className="text-lg font-black uppercase text-charcoal leading-tight">
                    {s.label}
                  </h2>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <p className="text-base font-bold mb-3" style={{ color: s.color }}>{s.headline}</p>
                  <p className="text-charcoal/60 text-base leading-relaxed">{s.desc}</p>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-charcoal/30 mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-charcoal/65">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="bg-beige py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-sage px-8 md:px-20 py-16 overflow-hidden text-center"
            style={{ borderRadius: "24px" }}>
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, #ffffff18, transparent)" }} />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, #ff640025, transparent)" }} />
            <div className="relative">
              <h2 className="font-black text-white uppercase leading-[0.9] mb-4"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
                READY TO<br />
                <span className="text-orange">START?</span>
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Brief us in and we&apos;ll get the process moving within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"
                  className="px-10 py-4 text-sm font-black text-sage bg-white hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-wide"
                  style={{ borderRadius: "40px" }}>
                  Brief Us In
                </Link>
                <a href="https://wa.me/922135395533" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-10 py-4 text-sm font-black text-white border-2 border-white/30 hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all uppercase tracking-wide"
                  style={{ borderRadius: "40px" }}>
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
