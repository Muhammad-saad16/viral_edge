"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-sage-light min-h-screen pt-20">

      {/* ══════════════ HERO HEADING ══════════════ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-black tracking-[0.25em] uppercase text-sage mb-3">
            Say Hello
          </p>
          <h1
            className="font-black italic text-charcoal uppercase leading-[0.88] tracking-tight mb-3"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            GET IN
            <br />
            <span
              style={{ WebkitTextStroke: "3px #7A9E7E", color: "transparent" }}
            >
              TOUCH
            </span>
          </h1>
          <p className="text-charcoal/50 text-sm max-w-sm leading-relaxed">
            Whether you&apos;re looking to grow your brand, start a campaign, or just
            explore what&apos;s possible — we&apos;d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ══════════════ 3 INFO CARDS ══════════════ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-sage">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              ),
              title: "OUR MAIN OFFICE",
              lines: ["38 26TH Street, Block 4", "Clifton, Karachi City, Sindh 75000"],
              delay: 0,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-sage">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              ),
              title: "PHONE NUMBER",
              lines: ["(021) 35395533"],
              delay: 0.1,
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-sage">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
              title: "EMAIL",
              lines: ["info@viraledge.com.pk"],
              delay: 0.18,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-3 border border-charcoal/5 hover:border-sage/25 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-sage/12 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xs font-black text-charcoal uppercase tracking-widest">
                {card.title}
              </h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-xs text-charcoal/50 leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ FORM SECTION ══════════════ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-sage rounded-3xl overflow-hidden px-6 md:px-16 py-16"
        >
          {/* Watermark */}
          <div className="absolute inset-0 flex flex-col justify-around overflow-hidden select-none pointer-events-none">
            {[0, 1, 2].map((row) => (
              <p
                key={row}
                className="text-[70px] md:text-[110px] font-black text-white/[0.055] uppercase tracking-widest whitespace-nowrap"
                style={{ transform: "rotate(-5deg) translateX(-5%)" }}
              >
                CONTACT US &nbsp; CONTACT US &nbsp; CONTACT US
              </p>
            ))}
          </div>

          {/* Glow orbs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #ffffff0D, transparent)" }} />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #00000015, transparent)" }} />

          <div className="relative">
            <h2
              className="font-black italic text-white uppercase text-center mb-12"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
            >
              CONTACT US
            </h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-6xl mb-5">✅</div>
                <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 text-sm">
                  We&apos;ll get back to you within 12–24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-xl bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition shadow-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition shadow-sm"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition resize-none shadow-sm"
                />
                <div className="text-center mt-2">
                  <button
                    type="submit"
                    className="px-14 py-4 text-sm font-black text-sage bg-white rounded-full hover:bg-white/92 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}

            {/* Social icons */}
            <div className="flex items-center justify-center gap-4 mt-10">
              {[
                { label: "Facebook",  icon: "f"  },
                { label: "Instagram", icon: "in" },
                { label: "LinkedIn",  icon: "li" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-xs font-black text-white hover:bg-white/35 hover:scale-110 transition-all"
                >
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
