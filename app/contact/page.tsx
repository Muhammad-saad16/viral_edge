"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const clients = ["Pepsi", "Sunsilk", "Knorr", "Tapal", "Sooper", "Mortein", "Layers", "EBM", "Almirah", "Durex"];

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

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-sage-light min-h-screen pt-20">

      {/* ══ HERO HEADING ══ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pt-10 pb-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-3">Say Hello</p>
          <h1
            className="font-black text-charcoal uppercase leading-[0.88] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 9vw, 7rem)" }}
          >
            TELL US<br />
            ABOUT YOUR<br />
            <span style={{ WebkitTextStroke: "3px #546b52", color: "transparent" }}>BRAND</span>
          </h1>
          <p className="text-charcoal/50 text-sm max-w-sm leading-relaxed mb-2">
            Whether you&apos;re looking to grow your brand, start a campaign, or just explore what&apos;s possible, we&apos;d love to hear from you.
          </p>
          <p className="text-sage text-xs font-bold tracking-wide">
            We respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* ══ 3 INFO CARDS ══ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-sage">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              ),
              title: "OUR MAIN OFFICE",
              lines: ["38 26TH Street, Block 4", "Clifton, Karachi, Pakistan"],
              sub: "Serving clients in Pakistan & UAE",
              delay: 0,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-sage">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              ),
              title: "PHONE NUMBER",
              lines: ["(021) 35395533"],
              sub: "Mon to Sat, 10am to 7pm PKT",
              delay: 0.1,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-sage">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              ),
              title: "EMAIL",
              lines: ["info@viraledge.com.pk"],
              sub: "We respond within 24 hours",
              delay: 0.18,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white p-8 flex flex-col items-center text-center gap-2 border border-charcoal/5 hover:border-sage/25 hover:shadow-xl transition-all"
              style={{ borderRadius: "16px" }}
            >
              <div className="w-14 h-14 bg-sage/12 flex items-center justify-center" style={{ borderRadius: "50%" }}>
                {card.icon}
              </div>
              <h3 className="text-xs font-black text-charcoal uppercase tracking-widest mt-1">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-xs text-charcoal/50 leading-relaxed">{line}</p>
              ))}
              <p className="text-[10px] text-sage/70 font-medium">{card.sub}</p>
            </motion.div>
          ))}
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
          {/* Watermark */}
          <div className="absolute inset-0 flex flex-col justify-around overflow-hidden select-none pointer-events-none">
            {[0, 1, 2].map((row) => (
              <p key={row}
                className="text-[70px] md:text-[110px] font-black text-white/[0.05] uppercase tracking-widest whitespace-nowrap"
                style={{ transform: "rotate(-5deg) translateX(-5%)" }}>
                SQRD DIGITAL &nbsp; SQRD DIGITAL &nbsp; SQRD DIGITAL
              </p>
            ))}
          </div>

          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #ffffff0D, transparent)" }} />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #00000015, transparent)" }} />

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
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button type="submit"
                    className="flex-1 py-4 text-sm font-black text-sage bg-white hover:bg-white/92 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
                    style={{ borderRadius: "40px" }}>
                    Send Message
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
            <div className="flex items-center justify-center gap-4 mt-10">
              {[{ label: "Facebook", icon: "f" }, { label: "Instagram", icon: "in" }, { label: "LinkedIn", icon: "li" }].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-11 h-11 bg-white/20 flex items-center justify-center text-xs font-black text-white hover:bg-white/35 hover:scale-110 transition-all"
                  style={{ borderRadius: "8px" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
