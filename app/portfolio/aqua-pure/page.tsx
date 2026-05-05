'use client';

import { useEffect } from 'react';

export default function BeyjeemCaseStudy() {
  
  useEffect(() => {
    // Filter script (agar zarurat ho)
    const script = document.createElement('script');
    script.innerHTML = `
        const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.result-card-fill').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setTimeout(() => e.target.classList.add('animated'), 300); });
    }, { threshold: 0.5 });
    obs.observe(el);
  });

    `;
    document.head.appendChild(script);   // head mein better

    return () => script.remove();
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: ` 
          <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aqua Pure Water Technologies, Case Study | SQRDDigital</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --black: #f4f0eb;
  --white: #1a1410;
  --red: #e03030;
  --red-dark: #b82222;
  --gray: #7a7068;
  --border: rgba(20,16,10,0.1);
}
html { scroll-behavior: smooth; }
body { background: var(--black); color: var(--white); font-family: 'DM Sans', sans-serif; font-weight: 300; overflow-x: hidden; }

nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 60px;
  background: rgba(244,240,235,0.97); backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-logo { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 3px; color: var(--white); text-decoration: none; }
.nav-logo span { color: var(--red); }
.nav-back { display: flex; align-items: center; gap: 8px; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gray); text-decoration: none; transition: color 0.2s; }
.nav-back:hover { color: var(--white); }
.nav-back::before { content: '←'; }

.case-hero {
  min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end;
  padding: 140px 60px 80px; position: relative; overflow: hidden; background: var(--black);
}
.hero-bg-text {
  position: absolute; top: 50%; right: -20px; transform: translateY(-50%);
  font-family: 'Bebas Neue', sans-serif; font-size: 240px; color: rgba(20,16,10,0.04);
  letter-spacing: 8px; line-height: 1; pointer-events: none; white-space: nowrap;
}
.hero-accent { position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--red); opacity: 0.5; }

.case-tag { display: inline-flex; align-items: center; gap: 10px; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--red); margin-bottom: 28px; }
.case-tag::before { content: ''; width: 24px; height: 1px; background: var(--red); }

.case-hero-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(60px, 7vw, 110px); line-height: 0.92; letter-spacing: 2px; margin-bottom: 16px; }
.case-hero-title .red { color: var(--red); }
.case-hero-title .italic { font-family: 'DM Serif Display', serif; font-style: italic; color: rgba(20,16,10,0.45); font-size: 0.82em; }

.case-hero-sub { font-size: 16px; color: rgba(20,16,10,0.45); max-width: 560px; line-height: 1.75; margin-bottom: 60px; }

.case-meta { display: flex; border: 1px solid var(--border); width: fit-content; flex-wrap: wrap; }
.meta-item { padding: 18px 32px; border-right: 1px solid var(--border); }
.meta-item:last-child { border-right: none; }
.meta-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--gray); margin-bottom: 6px; }
.meta-value { font-size: 13px; font-weight: 500; color: var(--white); }

.results-bar { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid rgba(224,48,48,0.2); border-bottom: 1px solid rgba(224,48,48,0.2); background: rgba(224,48,48,0.06); }
.result-item { padding: 40px; text-align: center; border-right: 1px solid var(--border); }
.result-item:last-child { border-right: none; }
.result-num { font-family: 'Bebas Neue', sans-serif; font-size: 56px; color: var(--white); letter-spacing: 1px; line-height: 1; }
.result-num span { color: var(--red); }
.result-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(20,16,10,0.45); margin-top: 8px; }
.result-note { font-size: 11px; color: var(--red); margin-top: 4px; font-style: italic; opacity: 0.65; }

.case-body { max-width: 1200px; margin: 0 auto; padding: 0 60px; }
section.case-section { padding: 110px 0; border-bottom: 1px solid var(--border); }
section.case-section:last-of-type { border-bottom: none; }

.section-label { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--red); margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
.section-label::before { content: ''; width: 20px; height: 1px; background: var(--red); }

.section-heading { font-family: 'Bebas Neue', sans-serif; font-size: clamp(36px,4vw,60px); letter-spacing: 1.5px; line-height: 1; margin-bottom: 40px; }
.section-heading em { font-family: 'DM Serif Display', serif; font-style: italic; color: rgba(20,16,10,0.35); }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }

.body-text { font-size: 15.5px; line-height: 1.9; color: rgba(20,16,10,0.6); }
.body-text strong { color: var(--white); font-weight: 400; }
.body-text p { margin-bottom: 20px; }
.body-text p:last-child { margin-bottom: 0; }

.challenge-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; background: var(--border); margin-top: 20px; }
.challenge-card { background: var(--black); padding: 36px 30px; transition: background 0.3s, transform 0.3s; }
.challenge-card:hover { background: rgba(20,16,10,0.03); transform: translateY(-2px); }
.challenge-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: rgba(20,16,10,0.06); line-height: 1; margin-bottom: 12px; }
.challenge-title { font-size: 14px; font-weight: 500; color: var(--white); margin-bottom: 8px; }
.challenge-desc { font-size: 13px; color: var(--gray); line-height: 1.65; }

.strategy-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); }
.strategy-item { background: var(--black); padding: 28px 32px; display: grid; grid-template-columns: 44px 1fr; gap: 20px; align-items: start; transition: background 0.3s; position: relative; }
.strategy-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--red); transform: scaleY(0); transition: transform 0.3s; transform-origin: bottom; }
.strategy-item:hover { background: rgba(20,16,10,0.02); }
.strategy-item:hover::before { transform: scaleY(1); }
.strategy-num { font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: rgba(20,16,10,0.12); line-height: 1; }
.strategy-title { font-size: 14px; font-weight: 500; color: var(--white); margin-bottom: 6px; }
.strategy-desc { font-size: 13px; color: var(--gray); line-height: 1.6; }

.timeline { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); margin-top: 40px; }
.timeline-phase { background: var(--black); padding: 36px 28px; position: relative; overflow: hidden; }
.timeline-phase::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--red); transform: scaleX(0); transition: transform 0.4s; transform-origin: left; }
.timeline-phase:hover::before { transform: scaleX(1); }
.phase-label { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--red); margin-bottom: 12px; }
.phase-title { font-family: 'Bebas Neue', sans-serif; font-size: 26px; letter-spacing: 1px; color: var(--white); margin-bottom: 16px; }
.phase-items { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.phase-items li { font-size: 13px; color: var(--gray); display: flex; align-items: flex-start; gap: 10px; }
.phase-items li::before { content: '◆'; font-size: 5px; color: var(--red); margin-top: 5px; flex-shrink: 0; }

.results-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: var(--border); margin-top: 40px; }
.result-card { background: var(--black); padding: 36px 28px; transition: background 0.3s, transform 0.3s; cursor: default; }
.result-card:hover { background: rgba(224,48,48,0.06); transform: translateY(-2px); }
.result-card-num { font-family: 'Bebas Neue', sans-serif; font-size: 52px; line-height: 1; color: var(--white); margin-bottom: 8px; }
.result-card-num span { color: var(--red); }
.result-card-label { font-size: 13px; font-weight: 500; color: var(--white); margin-bottom: 6px; }
.result-card-desc { font-size: 12px; color: var(--gray); line-height: 1.55; }
.result-card-bar { margin-top: 20px; height: 2px; background: rgba(20,16,10,0.08); overflow: hidden; border-radius: 2px; }
.result-card-fill { height: 100%; background: linear-gradient(90deg, var(--red-dark), var(--red)); transition: width 1.8s cubic-bezier(0.16,1,0.3,1); width: 0; border-radius: 2px; }
.result-card-fill.animated { width: var(--fill); }

.testimonial-block { margin-top: 60px; padding: 52px 64px; border-left: 3px solid var(--red); background: rgba(20,16,10,0.04); }
.testimonial-quote { font-family: 'DM Serif Display', serif; font-style: italic; font-size: 23px; line-height: 1.6; color: var(--white); margin-bottom: 32px; }
.testimonial-author { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--red); }
.testimonial-company { font-size: 12px; color: var(--gray); margin-top: 4px; letter-spacing: 1px; }

.next-case { background: rgba(20,16,10,0.02); border-top: 1px solid var(--border); padding: 80px 60px; display: flex; justify-content: space-between; align-items: center; text-decoration: none; color: inherit; transition: background 0.3s; }
.next-case:hover { background: rgba(20,16,10,0.04); }
.next-label { font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gray); margin-bottom: 12px; }
.next-title { font-family: 'Bebas Neue', sans-serif; font-size: 42px; letter-spacing: 1.5px; color: var(--white); }
.next-arrow { font-size: 32px; color: var(--red); transition: transform 0.3s; }
.next-case:hover .next-arrow { transform: translateX(8px); }

.cta-banner { background: var(--black); border-top: 1px solid var(--border); padding: 100px 60px; text-align: center; position: relative; overflow: hidden; }
.cta-banner::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 100%, rgba(224,48,48,0.07) 0%, transparent 60%); pointer-events: none; }
.cta-banner-headline { font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px,5vw,80px); letter-spacing: 2px; margin-bottom: 16px; position: relative; }
.cta-banner-headline em { font-family: 'DM Serif Display', serif; font-style: italic; color: rgba(20,16,10,0.35); }
.cta-banner-sub { font-size: 15px; color: rgba(20,16,10,0.45); margin-bottom: 40px; position: relative; }
.cta-buttons { display: flex; gap: 14px; justify-content: center; align-items: center; flex-wrap: wrap; position: relative; }
.btn-primary { background: var(--red); color: var(--white); text-decoration: none; padding: 14px 36px; font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; transition: all 0.2s; }
.btn-primary:hover { background: var(--red-dark); }
.btn-ghost { border: 1px solid rgba(20,16,10,0.2); color: rgba(20,16,10,0.65); text-decoration: none; padding: 14px 28px; font-size: 12px; font-weight: 400; letter-spacing: 1px; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
.btn-ghost:hover { border-color: rgba(20,16,10,0.4); color: var(--white); }

footer { background: #ece8e2; border-top: 1px solid var(--border); padding: 32px 60px; display: flex; justify-content: space-between; align-items: center; }
footer p { font-size: 12px; color: rgba(20,16,10,0.35); }
.footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 20px; letter-spacing: 3px; color: rgba(20,16,10,0.45); text-decoration: none; }
.footer-logo span { color: rgba(224,48,48,0.7); }

.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
.reveal.visible { opacity: 1; transform: translateY(0); }

.case-hero { animation: heroFadeIn 1s cubic-bezier(0.16,1,0.3,1) both; }
@keyframes heroFadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 900px) {
  nav { padding: 18px 24px; }
  .case-hero { padding: 120px 24px 60px; }
  .case-meta { flex-wrap: wrap; }
  .meta-item { border-right: none; border-bottom: 1px solid var(--border); }
  .results-bar { grid-template-columns: repeat(2,1fr); }
  .result-item { padding: 28px 20px; }
  .case-body { padding: 0 24px; }
  .two-col { grid-template-columns: 1fr; gap: 40px; }
  .challenge-grid { grid-template-columns: 1fr; }
  .timeline { grid-template-columns: 1fr; }
  .results-grid { grid-template-columns: repeat(2,1fr); }
  .testimonial-block { padding: 32px 24px; }
  .next-case { padding: 50px 24px; flex-direction: column; align-items: flex-start; gap: 20px; }
  .cta-banner { padding: 70px 24px; }
  footer { padding: 24px; flex-direction: column; gap: 12px; text-align: center; }
}
</style>
</head>
<body>

<nav>
  <a href="https://viral-edge.vercel.app/" class="nav-logo">SQRD<span>Digital</span></a>
  <a href="https://viral-edge.vercel.app/portfolio" class="nav-back">All Case Studies</a>
</nav>

<div class="case-hero">
  <div class="hero-bg-text">AQUA</div>
  <div class="hero-accent"></div>
  <div class="case-tag">Case Study · UAE Market</div>
  <h1 class="case-hero-title">
    Aqua Pure<br>
    <span class="red">Water</span> <span class="italic">Technologies</span>
  </h1>
  <p class="case-hero-sub">How SQRDDigital transformed a premium Abu Dhabi water brand from digital invisibility to market authority, through sharp positioning, performance marketing, and content that converts.</p>
  <div class="case-meta">
    <div class="meta-item"><div class="meta-label">Client</div><div class="meta-value">Aqua Pure Water Technologies</div></div>
    <div class="meta-item"><div class="meta-label">Location</div><div class="meta-value">Abu Dhabi, UAE</div></div>
    <div class="meta-item"><div class="meta-label">Industry</div><div class="meta-value">Water Technology · B2C & B2B</div></div>
    <div class="meta-item"><div class="meta-label">Services</div><div class="meta-value">Branding · Social · Performance · Content</div></div>
    <div class="meta-item"><div class="meta-label">Duration</div><div class="meta-value">1 Year · Ongoing</div></div>
  </div>
</div>

<div class="results-bar">
  <div class="result-item">
    <div class="result-num">312<span>%</span></div>
    <div class="result-label">Instagram Growth</div>
    <div class="result-note">Followers, first 12 months</div>
  </div>
  <div class="result-item">
    <div class="result-num">4.8<span>×</span></div>
    <div class="result-label">Return on Ad Spend</div>
    <div class="result-note">Meta & Google combined</div>
  </div>
  <div class="result-item">
    <div class="result-num">320<span>K+</span></div>
    <div class="result-label">Total Impressions</div>
    <div class="result-note">Across all platforms</div>
  </div>
  <div class="result-item">
    <div class="result-num">67<span>%</span></div>
    <div class="result-label">Lead Increase</div>
    <div class="result-note">Inbound enquiries vs prior period</div>
  </div>
</div>

<div class="case-body">

  <section class="case-section reveal">
    <div class="two-col">
      <div>
        <div class="section-label">The Brief</div>
        <h2 class="section-heading">A Premium Product.<br><em>Zero Presence.</em></h2>
      </div>
      <div class="body-text">
        <p>Aqua Pure Water Technologies had built a genuinely superior product, eco-friendly, cost-effective water purification systems for homes and businesses across the UAE. The technology was world-class. The brand was invisible.</p>
        <p>In a market flooded with generic water filter brands competing purely on price, Aqua Pure had no digital identity, no content strategy, and no way to communicate its premium positioning to the right buyers.</p>
        <p>They came to SQRDDigital with one clear goal: <strong>build a brand that commands premium prices in the UAE market</strong>, and make sure the right buyers in Abu Dhabi, Dubai, and Sharjah know it exists.</p>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="section-label">The Challenges</div>
    <h2 class="section-heading">Four Problems.<br><em>One Strategy.</em></h2>
    <div class="challenge-grid">
      <div class="challenge-card">
        <div class="challenge-num">01</div>
        <div class="challenge-title">Invisible in a Crowded Market</div>
        <div class="challenge-desc">The UAE water purification space is dominated by established international brands. Aqua Pure had no SEO presence, no brand recognition, and no content to differentiate it from lower-end competitors.</div>
      </div>
      <div class="challenge-card">
        <div class="challenge-num">02</div>
        <div class="challenge-title">Premium Product, Budget Brand Perception</div>
        <div class="challenge-desc">Existing brand materials looked indistinguishable from mass-market water filters. The pricing premium wasn't backed by a premium brand experience, creating constant sales friction.</div>
      </div>
      <div class="challenge-card">
        <div class="challenge-num">03</div>
        <div class="challenge-title">No Digital Lead Pipeline</div>
        <div class="challenge-desc">Almost all leads came through word of mouth. No paid media, no lead generation funnel, and no scalable way to drive inbound enquiries beyond organic referrals.</div>
      </div>
      <div class="challenge-card">
        <div class="challenge-num">04</div>
        <div class="challenge-title">Low Trust for an Unfamiliar Category</div>
        <div class="challenge-desc">Many UAE residents and businesses had never encountered under-tap purification systems. An education barrier had to be cleared before purchase intent could even begin to form.</div>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="two-col">
      <div>
        <div class="section-label">Our Approach</div>
        <h2 class="section-heading">Strategy<br>Before<br><em>Everything.</em></h2>
        <div class="body-text" style="margin-top:20px;">
          <p>Before running a single ad or publishing a single piece of content, we spent three weeks in discovery, mapping the competitive landscape, speaking with Aqua Pure's existing customers, and pinpointing the real drivers behind premium water purification decisions in the UAE.</p>
          <p>What we found: <strong>the purchase wasn't about water. It was about health, family, and sustainability.</strong> That insight became the foundation for everything.</p>
        </div>
      </div>
      <div>
        <div class="strategy-list">
          <div class="strategy-item">
            <div class="strategy-num">01</div>
            <div><div class="strategy-title">Brand Repositioning</div><div class="strategy-desc">Rebuilt the brand voice, visual identity, and messaging around the "clean water as care" emotional driver, moving Aqua Pure from functional to meaningful.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">02</div>
            <div><div class="strategy-title">Social Media Overhaul</div><div class="strategy-desc">Full Instagram and Facebook rebuild, content strategy, template system, posting cadence, and active community management from day one.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">03</div>
            <div><div class="strategy-title">Education-First Content</div><div class="strategy-desc">A targeted content series addressing water quality concerns specific to Abu Dhabi, turning the knowledge gap into a trust-building advantage.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">04</div>
            <div><div class="strategy-title">Performance Marketing</div><div class="strategy-desc">Meta and Google campaigns built around high-intent UAE search terms and retargeting warm audiences nurtured through organic content.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">05</div>
            <div><div class="strategy-title">Google Business & Local SEO</div><div class="strategy-desc">Full GBP optimisation and local SEO targeting Abu Dhabi, Dubai, and Sharjah, capturing high-intent, bottom-funnel searches at the point of decision.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">06</div>
            <div><div class="strategy-title">AI Search Visibility</div><div class="strategy-desc">Optimised brand presence for AI-powered recommendations, ensuring Aqua Pure surfaces when tools like ChatGPT, Gemini, and Perplexity suggest water purification solutions to UAE buyers.</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="section-label">The Execution</div>
    <h2 class="section-heading">Three Phases.<br><em>One Year.</em></h2>
    <div class="timeline">
      <div class="timeline-phase">
        <div class="phase-label">Phase 01 · Month 1–2</div>
        <div class="phase-title">Build the Foundation</div>
        <ul class="phase-items">
          <li>Brand audit and identity refinement</li>
          <li>Content strategy and template creation</li>
          <li>Social media profile optimisation</li>
          <li>Google Business Profile overhaul</li>
          <li>Website copy rewrite for UAE audience</li>
          <li>Keyword research and SEO groundwork</li>
        </ul>
      </div>
      <div class="timeline-phase">
        <div class="phase-label">Phase 02 · Month 3–4</div>
        <div class="phase-title">Launch and Amplify</div>
        <ul class="phase-items">
          <li>Education content series goes live</li>
          <li>Meta awareness campaign launch</li>
          <li>Google Search campaign launch</li>
          <li>Community engagement strategy</li>
          <li>WhatsApp Business integration</li>
          <li>Monthly performance reporting</li>
        </ul>
      </div>
      <div class="timeline-phase">
        <div class="phase-label">Phase 03 · Month 5–6</div>
        <div class="phase-title">Optimise and Scale</div>
        <ul class="phase-items">
          <li>Retargeting campaign build-out</li>
          <li>Top-performing content scaled with paid budget</li>
          <li>Lead generation form campaign</li>
          <li>WhatsApp warm lead nurturing flow</li>
          <li>Full performance review</li>
          <li>12-month growth roadmap delivery</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="section-label">The Results</div>
    <h2 class="section-heading">Numbers That<br><em>Speak.</em></h2>
    <div class="results-grid">
      <div class="result-card">
        <div class="result-card-num">312<span>%</span></div>
        <div class="result-card-label">Instagram Follower Growth</div>
        <div class="result-card-desc">Grew from 1,200 to 4,950 followers in the first year, all organic, all targeted UAE audience.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:88%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">4.8<span>×</span></div>
        <div class="result-card-label">ROAS, Combined Campaigns</div>
        <div class="result-card-desc">Every AED 1 spent on Meta and Google returned AED 4.80 in tracked revenue.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:78%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">320<span>K+</span></div>
        <div class="result-card-label">Total Campaign Impressions</div>
        <div class="result-card-desc">Across organic content, paid ads, and video campaigns in the first year.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:95%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">67<span>%</span></div>
        <div class="result-card-label">Inbound Lead Increase</div>
        <div class="result-card-desc">WhatsApp and form submissions up 67% vs the 6 months prior to campaign.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:67%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">2.1<span>%</span></div>
        <div class="result-card-label">Average Engagement Rate</div>
        <div class="result-card-desc">UAE industry average sits at 0.7%. Aqua Pure's content averaged 3× the benchmark, consistently.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:72%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">Top<span>3</span></div>
        <div class="result-card-label">Google Local Rankings</div>
        <div class="result-card-desc">Ranked top 3 for "water purification Abu Dhabi" within 4 months of SEO work.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:60%"></div></div>
      </div>
    </div>

    <div class="testimonial-block reveal">
      <p class="testimonial-quote">We had a great product but no voice in the market. SQRDDigital gave us both, a brand identity we're proud of and a digital presence that actually brings in customers. The UAE is now our fastest growing market.</p>
      <p class="testimonial-author">General Manager</p>
      <p class="testimonial-company">Aqua Pure Water Technologies, Abu Dhabi</p>
    </div>
  </section>

</div>

<a href="https://viral-edge.vercel.app/portfolio" class="next-case">
  <div>
    <div class="next-label">Next Case Study</div>
    <div class="next-title">Pepsi Pakistan, Content Campaign</div>
  </div>
  <div class="next-arrow">→</div>
</a>

<div class="cta-banner">
  <h2 class="cta-banner-headline">Want Results<br><em>Like These?</em></h2>
  <p class="cta-banner-sub">Tell us about your brand and we'll show you exactly what's possible in your market.</p>
  <div class="cta-buttons">
    <a href="https://viral-edge.vercel.app/contact" class="btn-primary">Brief Us In</a>
    <a href="https://wa.me/922135395533" class="btn-ghost" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      Chat on WhatsApp
    </a>
  </div>
</div>

<footer>
  <a href="https://viral-edge.vercel.app/" class="footer-logo">SQRD<span>Digital</span></a>
  <p>© SQRDDigital 2026 · Pakistan & UAE</p>
</footer>



</body>
</html>
        ` 
      }} 
    />
  );
}