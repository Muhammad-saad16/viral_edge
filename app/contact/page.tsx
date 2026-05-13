"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useGeoRegion } from "@/hooks/useGeoRegion";

const uaeClients = ["Aqua Pure", "Beyjeem", "Specialty Cafe", "SQRD Digital", "Abu Dhabi Brands", "Gulf Markets"];
const pakClients = ["The Consorts Hotels", "Virconia Perfumes", "Bushirts by Mir Dilawer", "Proctor Exam Taker", "Travel Wala", "Power-EX Lubricants"];

const serviceOptions = [
  "Storytelling & Brand Narrative",
  "Video Content",
  "Design & Branding",
  "Performance Marketing",
  "In-house Photography",
  "Website & App Development",
  "Digital PR",
  "Full-Service Retainer",
];

// ← Paste your Formspree form ID here (get it from formspree.io/dashboard)
const FORMSPREE_URL = "https://formspree.io/f/xnjwbnww";

export default function ContactPage() {
  const region = useGeoRegion();
  const clients = region === "PAK" ? pakClients : uaeClients;
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sage-light min-h-screen pt-20">

      {/* ══ HERO HEADING ══ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pt-10 pb-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-3">Say Hello</p>
          <h1
            className="font-black text-sage uppercase leading-[0.88] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 9vw, 7rem)" }}
          >
            TELL US<br />
            ABOUT YOUR<br />
            <span style={{ WebkitTextStroke: "3px #ff6400", color: "transparent" }}>BRAND</span>
          </h1>
          <p className="text-charcoal/50 text-sm max-w-sm leading-relaxed mb-2">
            Whether you&apos;re looking to grow your brand, start a campaign, or just explore what&apos;s possible, we&apos;d love to hear from you.
          </p>
          <p className="text-sage text-xs font-bold tracking-wide">
            We respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* ══ INFO CARDS ══ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-10">
        <div>
          <p className="text-[10px] font-black tracking-[0.25em] uppercase text-orange mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-orange inline-block" /> UAE Office
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-orange"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>,
                title: "ADDRESS", lines: ["Building# 55, Floor# O-2", "Airport Road, Al Manhal", "Abu Dhabi, UAE"], sub: "UAE Office", delay: 0,
              },
              {
                icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-orange"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
                title: "PHONE", lines: ["+971 55 124 9617"], sub: "UAE business hours", delay: 0.08,
              },
              {
                icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-orange"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
                title: "EMAIL", lines: ["sqrd.ae@gmail.com"], sub: "Reply within 24 hours", delay: 0.14,
              },
            ].map((card) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 flex flex-col items-center text-center gap-1.5 border border-charcoal/5 hover:border-orange/25 hover:shadow-xl transition-all rounded-2xl">
                <div className="w-12 h-12 bg-orange/10 flex items-center justify-center rounded-full mb-1">{card.icon}</div>
                <h3 className="text-[10px] font-black text-orange uppercase tracking-widest">{card.title}</h3>
                {card.lines.map((line, j) => <p key={j} className="text-xs text-charcoal/50 leading-relaxed">{line}</p>)}
                <p className="text-[9px] text-orange/60 font-medium">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP — client logos ══ */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pb-8">
        <div className="bg-white border border-charcoal/8 px-6 py-4 overflow-hidden" style={{ borderRadius: "12px" }}>
          <p className="text-[10px] font-black tracking-[0.25em] uppercase text-charcoal/30 mb-3 text-center">
            Trusted by leading brands
          </p>
          <div className="flex gap-8 overflow-x-auto scrollbar-hide whitespace-nowrap justify-center flex-wrap">
            {clients.map((c) => (
              <span key={c} className="text-xs font-black text-charcoal/25 uppercase tracking-widest flex-shrink-0">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FORM SECTION ══ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative bg-sage overflow-hidden px-6 md:px-16 py-16"
          style={{ borderRadius: "24px" }}
        >
<div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #ffffff0D, transparent)" }} />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(58,78,57,0.18), transparent)" }} />

          <div className="relative">
            <h2 className="font-black text-white uppercase text-center mb-4"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
              LET&apos;S CONNECT
            </h2>
            <p className="text-white/60 text-xs text-center mb-10 tracking-wide">
              We respond within 24 hours. Pakistan & UAE clients welcome.
            </p>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-16 h-16 bg-white/20 flex items-center justify-center mx-auto mb-5" style={{ borderRadius: "8px" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition shadow-sm"
                    style={{ borderRadius: "12px" }}
                  />
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder="Company / Brand"
                    className="w-full px-5 py-4 bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition shadow-sm"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition shadow-sm"
                  style={{ borderRadius: "12px" }}
                />
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full px-5 py-4 bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition shadow-sm appearance-none"
                  style={{ borderRadius: "12px", color: form.service ? "#1a1a1a" : "#1a1a1a99" }}
                >
                  <option value="" disabled>Service Needed</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell us about your brand and what you're looking to achieve..."
                  className="w-full px-5 py-4 bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition resize-none shadow-sm"
                  style={{ borderRadius: "12px" }}
                />
                {error && (
                  <p className="text-red-300 text-xs text-center -mb-1">
                    Something went wrong. Please try again or WhatsApp us directly.
                  </p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button type="submit" disabled={loading}
                    className="flex-1 py-4 text-sm font-black text-sage bg-white hover:bg-white/92 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{ borderRadius: "40px" }}>
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                  <a href="https://wa.me/922135395533" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-black text-white border-2 border-white/40 hover:border-white hover:bg-white/15 hover:-translate-y-1 transition-all uppercase tracking-wide"
                    style={{ borderRadius: "40px" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </form>
            )}

            {/* Social icons */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <a href="https://www.instagram.com/sqrddigital" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-11 h-11 bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all"
                style={{ borderRadius: "10px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/sqrddigital" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-11 h-11 bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all"
                style={{ borderRadius: "10px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/sqrddigital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-11 h-11 bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all"
                style={{ borderRadius: "10px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@sqrddigital" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-11 h-11 bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all"
                style={{ borderRadius: "10px" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
