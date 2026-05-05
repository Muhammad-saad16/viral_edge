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
<title>Cafe, Abu Dhabi · Case Study | SQRDDigital</title>
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
.btn-primary { background: var(--red); color: #f4f0eb; text-decoration: none; padding: 14px 36px; font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; transition: all 0.2s; }
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
  <div class="hero-bg-text">CAFE</div>
  <div class="hero-accent"></div>
  <div class="case-tag">Case Study · Abu Dhabi</div>
  <h1 class="case-hero-title">
    Specialty<br>
    <span class="red">Cafe</span> <span class="italic">Abu Dhabi</span>
  </h1>
  <p class="case-hero-sub">How SQRDDigital transformed a neighbourhood specialty cafe in Abu Dhabi into a must-visit destination, turning foot traffic into followers and followers into loyal regulars through content that made people genuinely crave a visit.</p>
  <div class="case-meta">
    <div class="meta-item"><div class="meta-label">Industry</div><div class="meta-value">Food and Beverage</div></div>
    <div class="meta-item"><div class="meta-label">Location</div><div class="meta-value">Abu Dhabi, UAE</div></div>
    <div class="meta-item"><div class="meta-label">Services</div><div class="meta-value">Social · Content · Reels · Paid Ads</div></div>
    <div class="meta-item"><div class="meta-label">Duration</div><div class="meta-value">6 Months · Ongoing</div></div>
  </div>
</div>

<div class="results-bar">
  <div class="result-item">
    <div class="result-num">8.7<span>K</span></div>
    <div class="result-label">Instagram Followers</div>
    <div class="result-note">Built in 6 months, Abu Dhabi</div>
  </div>
  <div class="result-item">
    <div class="result-num">5.2<span>%</span></div>
    <div class="result-label">Engagement Rate</div>
    <div class="result-note">UAE F&B average is 1.1%</div>
  </div>
  <div class="result-item">
    <div class="result-num">1.2<span>M</span></div>
    <div class="result-label">Reel Views</div>
    <div class="result-note">Organic, first 6 months</div>
  </div>
  <div class="result-item">
    <div class="result-num">42<span>%</span></div>
    <div class="result-label">Walk-In Growth</div>
    <div class="result-note">Attributed to social media</div>
  </div>
</div>

<div class="case-body">

  <section class="case-section reveal">
    <div class="two-col">
      <div>
        <div class="section-label">The Brief</div>
        <h2 class="section-heading">Great Coffee.<br><em>Empty Feed.</em></h2>
      </div>
      <div class="body-text">
        <p>The cafe had everything going for it. A beautiful space, a thoughtful menu of specialty coffee and all-day brunch dishes, and a warm atmosphere that regulars genuinely loved. The problem was that nobody outside the immediate neighbourhood knew it existed.</p>
        <p>Abu Dhabi's cafe scene moves fast. New openings get viral moments and long queues. Established independents get forgotten. Without a consistent, visually compelling social presence, even the best cafes lose the discovery battle to places with a better-looking feed.</p>
        <p>The owner came to SQRDDigital with a simple ask: <strong>make people feel like they need to come in before they've even ordered their first cup.</strong></p>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="section-label">The Challenges</div>
    <h2 class="section-heading">Four Problems.<br><em>One Strategy.</em></h2>
    <div class="challenge-grid">
      <div class="challenge-card">
        <div class="challenge-num">01</div>
        <div class="challenge-title">No Consistent Visual Identity</div>
        <div class="challenge-desc">The existing Instagram was a mix of phone photos, random promotional posts, and no clear aesthetic. Nothing communicated the warmth and quality of the physical space, so followers had no reason to engage or visit.</div>
      </div>
      <div class="challenge-card">
        <div class="challenge-num">02</div>
        <div class="challenge-title">Competing Against Deep-Pocketed Chains</div>
        <div class="challenge-desc">Abu Dhabi is full of well-funded cafe chains with dedicated content teams. Competing as an independent required a smarter, more personal content approach rather than a bigger budget approach.</div>
      </div>
      <div class="challenge-card">
        <div class="challenge-num">03</div>
        <div class="challenge-title">Low Discoverability for New Visitors</div>
        <div class="challenge-desc">Most new visitors to Abu Dhabi's cafe scene discover places through Instagram Reels and location tags. The cafe had almost no Reels presence and no strategy to reach people outside its existing follower base.</div>
      </div>
      <div class="challenge-card">
        <div class="challenge-num">04</div>
        <div class="challenge-title">Inconsistent Posting, No Content Pipeline</div>
        <div class="challenge-desc">Posts were occasional and reactive, with no planning or consistency. The algorithm penalised the account for inactivity and the audience had no reason to keep checking back in between visits.</div>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="two-col">
      <div>
        <div class="section-label">Our Approach</div>
        <h2 class="section-heading">Make Them<br>Hungry<br><em>Before They Arrive.</em></h2>
        <div class="body-text" style="margin-top:20px;">
          <p>Food and beverage content lives and dies on craving. Before we touched a caption or planned a shoot, we spent time inside the cafe, understanding what made the regulars come back. Not the menu, but the feeling. The morning light through the window. The sound of the grinder. The way the latte art looked at 8am.</p>
          <p>We built a content identity around one idea: <strong>this is your third place, the spot between home and work where Abu Dhabi slows down for a moment.</strong> Everything we shot, wrote, and ran ads for was filtered through that lens.</p>
        </div>
      </div>
      <div>
        <div class="strategy-list">
          <div class="strategy-item">
            <div class="strategy-num">01</div>
            <div><div class="strategy-title">Visual Identity and Feed Redesign</div><div class="strategy-desc">Developed a warm, film-toned visual language for all content, consistent across Reels, static posts, and Stories, making the feed feel instantly cohesive and inviting.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">02</div>
            <div><div class="strategy-title">Reels-First Content Strategy</div><div class="strategy-desc">Built a weekly Reels calendar featuring coffee process videos, atmosphere captures, menu reveals, and trending audio, prioritising organic reach over follower-only content.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">03</div>
            <div><div class="strategy-title">Community and UGC Programme</div><div class="strategy-desc">Set up a user-generated content strategy encouraging customers to tag and share, turning regulars into ambassadors and creating a constant stream of authentic social proof.</div></div>
          </div>
          <div class="strategy-item">
            <div class="strategy-num">04</div>
            <div><div class="strategy-title">Hyper-Local Paid Campaigns</div><div class="strategy-desc">Meta campaigns targeting Abu Dhabi residents within a 5km radius, running during morning and weekend peak hours with creative built around seasonal menu items and limited offers.</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="section-label">The Execution</div>
    <h2 class="section-heading">Three Phases.<br><em>Six Months.</em></h2>
    <div class="timeline">
      <div class="timeline-phase">
        <div class="phase-label">Phase 01 · Month 1–2</div>
        <div class="phase-title">Set the Scene</div>
        <ul class="phase-items">
          <li>Visual identity and colour palette defined</li>
          <li>Instagram feed audit and overhaul</li>
          <li>Content pillars and calendar built</li>
          <li>First professional shoot executed</li>
          <li>Reels templates and editing style set</li>
          <li>Story highlight covers redesigned</li>
        </ul>
      </div>
      <div class="timeline-phase">
        <div class="phase-label">Phase 02 · Month 3–4</div>
        <div class="phase-title">Build the Crowd</div>
        <ul class="phase-items">
          <li>Weekly Reels cadence launched</li>
          <li>Behind-the-scenes barista series</li>
          <li>Paid reach campaign for Abu Dhabi locals</li>
          <li>UGC repost strategy activated</li>
          <li>Food blogger outreach for coverage</li>
          <li>Menu launch content for new items</li>
        </ul>
      </div>
      <div class="timeline-phase">
        <div class="phase-label">Phase 03 · Month 5–6</div>
        <div class="phase-title">Drive the Door</div>
        <ul class="phase-items">
          <li>Hyper-local retargeting campaigns</li>
          <li>Weekend offer paid promotions</li>
          <li>Ramadan and seasonal content series</li>
          <li>TikTok channel launch and cross-posting</li>
          <li>Monthly analytics review and optimisation</li>
          <li>Full 12-month content strategy delivered</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="case-section reveal">
    <div class="section-label">The Results</div>
    <h2 class="section-heading">Numbers That<br><em>Speak.</em></h2>
    <div class="results-grid">
      <div class="result-card">
        <div class="result-card-num">8.7<span>K</span></div>
        <div class="result-card-label">Instagram Followers</div>
        <div class="result-card-desc">Grew from 1,100 to 8,700 followers in 6 months, targeting Abu Dhabi residents and expats within the cafe's catchment area.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:87%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">5.2<span>%</span></div>
        <div class="result-card-label">Average Engagement Rate</div>
        <div class="result-card-desc">UAE food and beverage accounts average 1.1% engagement. The cafe ran consistently at nearly 5x that benchmark.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:80%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">1.2<span>M</span></div>
        <div class="result-card-label">Total Reel Views</div>
        <div class="result-card-desc">Entirely organic reach across 6 months of Reels content, with one video breaking 380K views and bringing in a wave of first-time visitors.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:92%"></div></div>
      </div>
      <div class="result-card">
        <div class="result-card-num">42<span>%</span></div>
        <div class="result-card-label">Walk-In Growth</div>
        <div class="result-card-desc">New walk-in customers grew by 42% over the 6-month period, with a significant portion citing Instagram as the reason they discovered the cafe.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:72%"></div></div>
      </div>
      <div class="result-card" style="grid-column: span 2;">
        <div class="result-card-num">4.8<span>x</span></div>
        <div class="result-card-label">Return on Ad Spend</div>
        <div class="result-card-desc">Hyper-local Meta campaigns delivered a 4.8x ROAS, with cost-per-visit tracking showing paid content consistently driving same-week foot traffic spikes.</div>
        <div class="result-card-bar"><div class="result-card-fill" style="--fill:84%"></div></div>
      </div>
    </div>

    <div class="testimonial-block reveal">
      <p class="testimonial-quote">I used to think Instagram was for big brands with big budgets. SQRDDigital showed me it's actually where independent places like ours can win, if the content is done right. We have people coming in specifically because they saw a Reel. That still amazes me every time it happens.</p>
      <p class="testimonial-author">Owner</p>
      <p class="testimonial-company">Specialty Cafe, Abu Dhabi</p>
    </div>
  </section>

</div>

<a href="./aesthetic-clinic-case-study.html" class="next-case">
  <div>
    <div class="next-label">Next Case Study</div>
    <div class="next-title">Aesthetic Clinic, Abu Dhabi</div>
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
  <p>© SQRDDigital 2026 · Pakistan &amp; UAE</p>
</footer>


</body>
</html>
        ` 
      }} 
    />
  );
}