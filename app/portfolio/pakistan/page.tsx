// app/portfolio/page.tsx
'use client';

import { useEffect } from 'react';

export default function Portfolio() {
  
  useEffect(() => {
    // Yeh script filter ke liye hai
    const script = document.createElement('script');
    script.innerHTML = `
      function filter(type, btn) {
        document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        document.querySelectorAll('.card').forEach(card => {
          if (type === 'all' || card.dataset.type === type) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      }
    `;
    document.body.appendChild(script);

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
<title>SQRD Digital — Creative Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #F4EDE3;
    --dark: #1B2416;
    --orange: #E55A1C;
    --sage: #7A9B5F;
    --muted: #9A9080;
    --card-bg: #FFFFFF;
    --border: rgba(27,36,22,0.10);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Instrument Sans', sans-serif;
    background: var(--cream);
    color: var(--dark);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── NAV ── */
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 60px;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: var(--cream);
    z-index: 100;
    backdrop-filter: blur(8px);
  }

  .nav-logo img {
    height: 52px;
    object-fit: contain;
    filter: none;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    font-size: 13px;
    font-weight: 400;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.15s;
  }

  .nav-links a:hover, .nav-links a.active { color: var(--dark); }

  .nav-cta {
    background: var(--dark);
    color: var(--cream);
    border: none;
    border-radius: 100px;
    padding: 10px 24px;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.3px;
    transition: background 0.15s, transform 0.1s;
  }

  .nav-cta:hover { background: var(--orange); transform: scale(1.02); }

  /* ── HERO ── */
  .hero {
    padding: 80px 60px 64px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 48px;
    border-bottom: 1px solid var(--border);
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--orange);
    font-weight: 500;
    margin-bottom: 20px;
  }

  .hero-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--orange);
  }

  h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(56px, 7vw, 88px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -3px;
    text-transform: uppercase;
    color: var(--dark);
  }

  h1 .line-accent {
    color: var(--orange);
    display: block;
  }

  .hero-desc {
    margin-top: 24px;
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    max-width: 420px;
    line-height: 1.7;
    font-style: italic;
  }

  .hero-stats {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 28px;
  }

  .stat {
    text-align: right;
  }

  .stat .num {
    font-family: 'Syne', sans-serif;
    font-size: 52px;
    font-weight: 700;
    line-height: 1;
    color: var(--dark);
    letter-spacing: -2px;
  }

  .stat .lbl {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--muted);
    margin-top: 2px;
  }

  /* ── FILTER ── */
  .filter-strip {
    padding: 20px 60px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 80px;
    background: var(--cream);
    z-index: 90;
  }

  .fl {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--muted);
    margin-right: 8px;
  }

  .fb {
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: 7px 18px;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 12px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 0.3px;
  }

  .fb:hover { border-color: var(--dark); color: var(--dark); }

  .fb.on {
    background: var(--dark);
    border-color: var(--dark);
    color: var(--cream);
  }

  /* ── GRID ── */
  .grid {
    padding: 48px 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  /* ── CARD ── */
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
    cursor: pointer;
    position: relative;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(27,36,22,0.10);
    border-color: rgba(27,36,22,0.22);
  }

  .card-logo-area {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    position: relative;
    overflow: hidden;
  }

  .card-logo-area img {
    max-height: 100px;
    max-width: 200px;
    object-fit: contain;
    position: relative;
    z-index: 1;
    transition: transform 0.25s ease;
  }

  .card:hover .card-logo-area img {
    transform: scale(1.06);
  }

  /* per-brand BG tints */
  .bg-consorts   { background: linear-gradient(135deg, #E8F4F8 0%, #C5E0EF 100%); }
  .bg-virconia   { background: linear-gradient(135deg, #2C2016 0%, #4A3018 100%); }
  .bg-bushirts   { background: linear-gradient(135deg, #1A1A1A 0%, #2E2E2E 100%); }
  .bg-proctors   { background: linear-gradient(135deg, #E8F2FB 0%, #C8DFFE 100%); }
  .bg-travelwala { background: linear-gradient(135deg, #EFF6FF 0%, #DBEEFF 100%); }
  .bg-powerex    { background: linear-gradient(135deg, #FFFAEB 0%, #FFF0C2 100%); }

  .card-body {
    padding: 24px 24px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  .brand-name {
    font-family: 'Syne', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.2;
    letter-spacing: -0.3px;
  }

  .tag {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 4px 10px;
    border-radius: 100px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .tag-social  { background: #E0F5EE; color: #0D6E52; }
  .tag-fashion { background: #FCE8DF; color: #963C1A; }
  .tag-edu     { background: #DBF0FF; color: #1860A8; }
  .tag-travel  { background: #E0F0FF; color: #1456A0; }
  .tag-auto    { background: #FFF5D6; color: #8A6100; }
  .tag-luxury  { background: #F5ECD5; color: #7A5500; }

  .industry {
    font-size: 11px;
    color: var(--muted);
    font-weight: 300;
    letter-spacing: 0.2px;
  }

  .divider {
    height: 1px;
    background: var(--border);
    margin: 4px 0;
  }

  .card-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .chip {
    font-size: 10px;
    background: rgba(27,36,22,0.055);
    color: var(--dark);
    border-radius: 100px;
    padding: 4px 10px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  .card-footer {
    padding: 0 24px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .posts-count {
    font-size: 11px;
    color: var(--muted);
    font-weight: 300;
  }

  .arrow {
    width: 32px;
    height: 32px;
    background: var(--dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .card:hover .arrow {
    opacity: 1;
    transform: scale(1);
  }

  .arrow svg {
    fill: none;
    stroke: var(--cream);
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* accent bar */
  .card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    border-radius: 0 0 16px 16px;
  }

  .card:hover::after { transform: scaleX(1); }
  .card[data-accent="teal"]::after   { background: #1DA67A; }
  .card[data-accent="gold"]::after   { background: #C4971A; }
  .card[data-accent="white"]::after  { background: #FFFFFFAA; }
  .card[data-accent="blue"]::after   { background: #2C7ADA; }
  .card[data-accent="navy"]::after   { background: #1258B5; }
  .card[data-accent="amber"]::after  { background: #D4A012; }

  .hidden { display: none !important; }

  /* ── CTA ── */
  .cta-section {
    margin: 0 60px 60px;
    background: var(--dark);
    border-radius: 20px;
    padding: 64px 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: 'SQRD';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Syne', sans-serif;
    font-size: 160px;
    font-weight: 800;
    color: rgba(255,255,255,0.03);
    pointer-events: none;
    letter-spacing: -6px;
    white-space: nowrap;
  }

  .cta-left h2 {
    font-family: 'Syne', sans-serif;
    font-size: 40px;
    font-weight: 700;
    color: var(--cream);
    line-height: 1.1;
    letter-spacing: -1px;
  }

  .cta-left h2 em {
    font-style: normal;
    color: #A8C87A;
  }

  .cta-left p {
    margin-top: 12px;
    font-size: 14px;
    color: rgba(244,237,227,0.45);
    font-weight: 300;
    font-style: italic;
  }

  .cta-btn {
    background: var(--orange);
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 18px 42px;
    font-family: 'Instrument Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.3px;
    transition: transform 0.15s, background 0.15s;
    white-space: nowrap;
    position: relative;
    z-index: 1;
  }

  .cta-btn:hover { transform: scale(1.04); background: #c94c14; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(2, 1fr); padding: 40px 40px; }
    .hero { padding: 60px 40px 48px; }
    nav, .filter-strip, .cta-section { padding-left: 40px; padding-right: 40px; }
    .cta-section { margin: 0 40px 40px; }
  }

  @media (max-width: 640px) {
    .grid { grid-template-columns: 1fr; padding: 24px; }
    .hero { grid-template-columns: 1fr; padding: 40px 24px; }
    .hero-stats { flex-direction: row; align-items: flex-start; }
    nav { padding: 16px 24px; }
    nav ul { display: none; }
    .filter-strip { padding: 14px 24px; flex-wrap: wrap; }
    .cta-section { margin: 0 24px 32px; padding: 40px 28px; }
    .cta-section::before { display: none; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#">
    <img src="data:image/png;base64,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770xNGSkSRBgtFZWvp19B1DCjOO5OcvYVuc//sqXnJahhNdODu4kIWYdQ4Sz5K5IMss3jWx/6PHH73/q8UefePyp557Znp2pyXu31lzWih6rXeuBsdFtomhYkUahxBhI+Nbt27Y8/+yq1c/d8WCjXsPJ9t1zySF773fIfvsfuHS/GcPDRhkEwj0XNUuA3vR2vrMIueT1ysIRAJ+73++/rL/OMthlRJjgSfSyGksw3+84HNKZl28/CssTm6Rc7ezyQPAKaSGgMYUeJYMuAGap+dwF2Pbs969a+eCqVbr26pS4bL/9jjvosBOWHT5vxgyIgJvktKJerSyGtYVtXCiPPlmisyo/u5cH45s9pRCzDmLJIdgz69fceM9dd6146NGVK0t5UQktGpLnVs4rO0wA3Ms1amS5XsfGBMqnkASyCBMawTM13082aziNCo+sXPnIypUXXP9TMzt46dIjDzjouIMP22vhQlhyyqmK1mdRRkAGoys7YUqU9V0kNHgzUBCETAMFCg7VqWMZLREkM7IJTsDFZrk2QMuhol4NZTcF+M+sbgnIaycMRZboXrMsbsHadd+jj9776KNf+fH5B+y999uXH3fS4cunT51SChzVKvoY95JmUs2PVoQs11VV1bl+89WVIWYd44VNm6+967Zr7779qdWrAQAGUKTJVcoRmYhWTJzNE/uVNfoYE3D4mT+SBHdc9c2/ZZMRk5CYALg7wAdXPPnA409++7KL99l995MPX37K0ccsmDUH7uizxDgtZygxJVemJRvNUKWBehYFr4PgoJmQ4aSBJh9y1B16eUNyycoan25kHrNdGwTcm63ky6CKZhUlMxHe1N033yCBTC1hUGsJaAAeW/n0YytX/tNPfnTCkUe+59i3LlmyxMZs/l71mdMzSkrFBAgumNmoZxrf/AI2xOz1GNvdVfZD8NaKQrmVi0r3PPboT2689vaHH279ux2PYQolET32Wm2iaR17WreLIdF0bFhpO/Ok5M6n1q57/KpL/vmqy5YfcOBZJ5yy/C37y9gucWz+uVHKJVfX1AcTdHr3NUUqS/YMlt9vSuTLl6rBYGMQBBAltgDQO7eg8qbE30q7i4tEDy7bDmKvurxsFx236+9ftpId88/x6veKba3rq26//arbbz3igLd86O3vOHTvpaXHC2QWrfV8G9OO1ptlrklZMBAEBRlSR272ELPXpAhWWROJhDKQPdG8WdOI6fr77vnBlZc+tXaNCPbb/eMSmhSC0TJ12yMP3fboA0sW7PG+U99+6hHLKxOI0i2Q3EDLQkWTS1Iyq+nJ+66SPwiCNw6B+1Y8du9jjx627/6/+K73HrBkiaRKLmOp74eTYG5CSd5vOfU3TojZayKJiSViwdKtYURpHXPc9OB9373i4qfXrgWTShNYn0E2618KLFWNgGBPr1n3/33/O+dfffmHTjvz9KOPNXmGPMlklr02gjTCgcrVk71ZEATdQjB3maU7n3j8vr//n6cddtS573j33NmzknsyyznDkgOVmXunQr/jQ4jZa5LFiuZey0iALKF5PrJq1Vcv+uFDT68EDDS4N60cffbQL1UiJfDIZHBBMpOApPT8ug1/e/4///imaz/9rvcduf9bcq5FMTF50y0Hd1kifLwTxkEQvClKIDEJyvjpvXfe9tB9n3jHu9953IlZSKlyr2GlBSgNdOlViNlrUhXHl2QpS4RDW0dGv3nxhZfdfmu7YoqkEl25D3dmYLv9H0JjjlNkCkaJhvTUM8//6Vf/7uQjjvr0OR+YO32qIJass5yNl2MEGYNgsBFBIdEcWVlbfeTLPzr/pvvu/uwHPrZ4t91KP2umqoGWsn7bTPQVzCLJ2j0RsLseefj3v/AXV9x2c5EHwgmX13BRxr7rRUYucVFr7B+t1ZwoS8XGVMqWQPK6u+/8vb/+f6+7/25v2b+WRhbTuLmRBkHQEUiaHMqO7JCZQQbYA088/h/+11/ecN89lMFFV22DVQX6s/TdI7h/UBIAtzQyqn/40fl//o0vb9y8xWkt22840RT+4VUqa8edJDLL3dud/03hSnGOkQCMUrUcTFu2v/TX//ztL37v2y9tH4Wz/Fy1jVv9bhAEHcEhIpUHVKJJLXNzppHt9V9+75v/8JMf1plmlbmyDUyn+SuJMONrImVKaza++Dff+frDz6xKrNzdigEjABiFTEB5KKUR5H7zEmw2ZCJM7pmklfolmQjBSFRNd4oPiTWqa+65e8Wqp377k/9i6W4L1SoeiWrGIBhczJFNZIK3l6Zl8oYBZhmX3HzD02ue/61zPz1vyjCLq9xgMqjn3UHKBLCW/42jaWCsger+p576gy/9j0eefTopNYZmTXVfq7VLIFP2/nXFFYtnSEITQnxZqX3btr8GgZrCqg0b/vP/+ttbHnnEYQkUnRRb8cZWy4sPkFdQEExmSsJsx1xDYMwTzEUkt3tXPP5nX/7i2k2bBAOczdSq0hDrwGCkG/r0EdxL6KRcuRYTBZgcoKrr77nrT7/+v7dseanKlqlEEydyOUTZsZl868j2//dbX7745uuVG+Oc4mpKeS6jkga2EyUIgkJpkjZHNlTiE8899wd//z/Xv7jF3GBlMGNTECAmeGeGz3WVeCqBxWg+mZUUKMnsl9x2819/71t5BLJUpzLTUoYJnkGSsjeOafzqj374vWuucFDZiy1INlRQVg3gzU/SC4JgPHECVgrEPNGQXnhx0598+Uurt2yqvcSc2Mfj6V+FeCQBgFdGwZHLiuSyW2/68gXnw5JUdmllCplL6sOqxU7hRciLl7FMxvOuuvwbl10ES7AqyxNYU4nGwQ2rB0EAoAwzcEhKorsrkZmrXlj3J1/+4vat27PBy/jfZO4OG4CYVDyUIGU6a5BkyvrpXXf+/UU/dIONOiokOZTV2JhO5F8X5YBRBiY3h0vShddeff61V5VxahTKEA+1fLuDIBhQdoxIRDbKvWayJD63fv1/++5XfXtOoBNZmsKUB6EDbSI/nd8gTdGqIPGexx/7XxecByfluVIz5rXMynNR6Nc6j47hrbxvSqkUbX7n8ot+esdtiazBkjgseeMgCAaXZBjNNYxqhqcRyply8KEnnviHiy+gjM5EZdV9W+A2lgE4xW4jCZ5FPL9hw3//53+qawfAVlU6AXdnqsA0QOHjXcJaAwEkIudsSABc6UsXfv/hp55yyFtjayb6ryIIJjjZvbIyJc0IiMhQoiUxg1fcevPlt90C2zEnZLzP9+cTYoZMS2bb6+1/9a1/3Lpte6lkLZuSKpucZhVcWW5mg9xT+HOQxCzARafMkBylMBe15//+ra9s2bTZBBkzNNBOAUEQNEvS2kkKZm6GJEl0Zon2jxefv3rtmuJXPhCRmMkmZl66KEipNeQuyZ32jYsveeK51VQzWqekx7KhXc9Tpn8NxJu6a5TipSZttmOckpFi5sato1/4/rdqwbIS0gT+PQTB5MCaasbiEMQxXzdRvm3Uv/D9b2fBBEmUlyn1pcmUJDz3Vb/p5BKzpCRjtrL9EOUymXDnY49cdsv1Zkahbmb8xNajodQy0fP9K1b8+KbrAHOvY2cWBBMYIwF/cuWqi2++wdycrtbs30SinXzpJyaRmFGeKc8g0o4ocPato/7lC84T4JAbEjhqOar1xmCEOzJg37n8kudfWNdyQgmCYOLhlJWBGzX0vSsv27B1qwlOyEg5XAaIY+bU9wd9dCrdpuyjK2umj7l7KTH/4Q1XP7d+PWDt3ZiFIeFYjKUzgcJo7V86/3uUdXDsfRAE/UMpBnEU+7q0edv2b19xEYDkKHmWMn2j2Z+N77m+nEkkZhlq8l4qb4ZJWrd1y4XXXp3MysO6lH5Y878AKJPUi6kjMoX7Vj5x80P3x68nCCYqZKlyLN6tduUdtz674QUCCUXABLi791uuYRKJWbu6tKnPkYY4dN5Vl42OjrooCVb0zATTAFiR9QqJpEM0K7bF37j4wolcCRMEkxjB3Euth5kZ4JJ+cNUVToMTrdFXqZmS2Ef01cl0lwQ2bVJyAGRau3nT1XfcTjVeVu0WK6AZVBYAxZE0J3FUxX47r96w4aq77hjv0wqCoPM080PKEtZddEjX333PsxvXw9joWZmSaGI/7c4m0SNbas00MCaHQz+68Zq69lYgmO41ExyC0b2vosHjSbZSnu+VA0YjzXX+NVeO93kFQdB53D2ZqfXABABy1HXFDdeWoRnl20qTdV+ZJ0wiMQOsOH2gvBO1rrrzDikXD03KyCTRiqtw5zreRTeqcaF2Uc0UsbKmUZNGbT5E6DVbFL1s+ZtvaBpEui66yU1jWlIEy7Tn162/+f77W+OOYGifSSwCgkmBo3RZuVGij7mLdxJlYuw/L7d5bt9cL/teZbTGEI414ulg9TVJF8eMbLRSz3zZ7XduGxl180osTq2m/pqe0Uen0gusKQChcNMDd2/evLkH4UQKLolwd5pQPsrQPDSxacrgJBOzTG5yKbcv61avtxkSBXOkWqjdzMbR+/iim66B00CRbZsrRJljMDlISoCV2bxiKiNwKcMrlOn1P2TJaa2Bmc0EXTJ5a3Ag4WwtZBMrtNL/rXHBkBqfua6yffv2G+++A8W+taWmfaUffXUyXSdDLfWya8sb0/1wIgHRxMbnzN1NqCEAGZQIeGZWknuNCgKGhoeTWQlbl/2iaCRrOBNEVwWlRpXHiweefOLZdescHLvRHIhREUHw5mmFT7yCDA6TIyvt9A1Jz+3FaykjbMqtlUqzkLM1jYWNaJUbvyk4zD2az+LQ1XffRib16z3eXy3cXaXkKt1rAzePbLv38ccAmFXdDvvKErIzGetsxpyozCFBRAVz5N3mzD7ukMMP2mufvffYc+Hs2cNTpxpg4Eg9uuaFDc9uWPf48888tOLR+598ErlUyUOSySQpjVsKVsQ199zxsTPfacoGZjil8CAOJgsmuI4+8JC3H3M8S2yOlLSzsYl2RqOu683bXtq0dcuaDS88t3r1Y6uf9u1C44Na4ogt31SzEmEyMzODxuS3uoaZPbzyiedeeGGPuXNZtmYSpf4ZjDWJxExSkpVL8M6HHxqt6x7Vl5erPLtbIsnaIXki4Ifud8CHTjnzsP0OcJOQh2CSICfp8KqyxbvvtnjB/GPfcjBOOWPzyMiNd91+8U3XPbV+bXG4bwn0+EDZdXff+ZG3n1UBQrmXXBN3eGkQjMXdK9qiefOPP+TQMtq2RPx29nXapq9kidO0kmGuJ1c/f8cjD1x/9x2r1qyBTLRyv5cAo5k1kUapyFvHf8axuDvMbrnv7vef/Da1opp91aEzicTMiSExCzS787GHG/sxeLdjrRSUaBlOqDRuV9p9+qzPfOCDRxy8LAlUTgLMaigJYulIpgMQkhkASdOH0ztOPOnM40669p47vn7xhRu2bk4aT8Nf0Ve/sO7ZtWv3WrgbBTIBDu+v6zsIugSZXO5NYBAOQbuSNq7NQSSQgjzD6EguJeNee+yxdNGiD512xgNPPnHe1Zfd89ijTBV8R/yjsXrovpKVY0G8/eEH3n/q6RDIlHNOif0TiJlEYlb6zChk6P4Vj5Uuih6M6REdDlgygLX7EPZdvPjf/8KvzJ05DfLW94AwK43bnstXisaWa4UkaVKW2WlHHHXMQcu++P1v3froQ+NbcCHYbQ/cu/fubwfL7VQ60WJzFkx8rL1uc7VqCQ2OnbUtNVl5FgGwVEkyV6KNUgkikaFD99nn0E9/9vZHH/mH73/7hc0vZYjWbMhczp6EGQFIemTVyi3bt00bqgCllKSMvrGxnVzPHcFgXL/hhfUvbnT3XnlWWTGcVnYfsgP2XPx/fvqz82dOL8VLDss0MjX2MC6xqVEs9lpNBX/Tzm2JguWZU4d+/xd/5QMnnj6O2yATYLzn8UclZYlqAibjdkJB0ENEFx3tgJsRbyLsZmY78s0mR67cUWrWBNEysfzgt/zF5//NQQcemLAjGlk0rDfDM0mO5Pr+Rx+2VrioBwd940wqMTNhFPCHV60CjGRS6knazBtZSjZ76vC//YV/OW3qcPu4pSC3XJQv7zCzompqle2SKt4lGQQwBJ377nM+dPLJpRml3a9W3JPRfT8uweD54adWbR/NoIO1UA3ERNqfQ0lLAKXjr2kdGvwfC4CjtDG2fpwyST3YVagKaCZI0NlqC7Od/EDbMLbQWKHSADM132MAndOnz/yDX/rk8sMOoZrLk/De3HSiUzCkB1atLD633q5h7g8mlZg165dVzz1b/pjVm+uguV4d+vQ5H5wza8auufKr3axGeuIoZa6Pv+u9Jx12hIHMgiVIBpah2J3/OV6Nuq6fevZZAHIKE8LR0oAyprQ4dQJGZjcQg/1R6oVMKE9dVR5j+waRZL/98U8dtHTpkBMwkDmP9uA5VuQTrsdWPplAqQyC6fZhd4JJJ2bKeGrNc+0/9ui4gBn2Xrjg1MOXq/Ht3QWs2VCCyF4mZU/J+JUPfmTBrFmlYFKlxZLMvVpyi3h41ZMJnAh7MgCAl1It7diiuZDoTb/PwH44QRkyIMoqsDZE7engUSlNrdJvn/vJ6TOmUoDE1IsCEAClE+7JZ5/ePtoyTuqnu34SXcyN9wf5zPo15Ss9aopqDSY/5/iTrXRtu9LOXwStHb3BZSCyk8r02VOmfPrd7xPBZIlVzhnW02bqJ59/VmJfrdHeDIZiPA2AaIK8pQhHA/1h3ioroqhaBrV2bMEAISLn0d2mz/iV931IdGul1buPldEiL43WazasL1+KMOO4UXbK5Z2gIOUerCzc3cxAP37ZYW7FbTq9mfgOmQCQzFA2uPtxhxy6dPc9ipW1pfQzIfgu0bqO/anVq7EjGzwRrqgmSUZ5O4s5IR762TLQaDTL+EVNonrmiYFMBmbzk5Ydfsg+Sx0G793kd4eY7Jm1ayX16JBvmInw6HnDOIBNL20brcuyu0fvRZkCunjhHrNnzmynsnZBRB0tiwE0XfcmNPE949knnmSQG7J8SOyBw017K/b8+rW5mUjQo1x0V3F4ybk7aAK9VTQx8CQjindgqSSCw1GP91kFO4ck0SpR9I+cdpboqHr0GC89r5Q9t37tjkBR39BHp9ITbP2LG4szTHkvehAcK7ukfRctKWmtsq/K2umHiFlrk9f6AoBmh+f5+MMOrxLNYWa1nD1cNm17aeTFzZu8VefSs+N2CStFpd5EFzMk67tF6K5AsS4laAYAhKyKieEDh8nYqiA74oC3LJo/X8rsSfbT1Qz9eH7dunICPTA4fuNMuiDDtpHt7o2i9AYpk2mPufPhaufPZDvvROUiIantfyMr5WhmpplTpxy4z74PPP6kRCPBHnXmlyzw+o0b5sya3YvjdR+n+M7fqvc/0TQiJheoLKReNNh3kwwHK/p22FC668e88VtEPTHCp5MKCp5K+ZeROOnwo37w08sh603Suhgcb9z0Ytedk3aeSSRmlMG0aesWM4PKjsao7ttZMTnyrOnTHbmSjQJJ2AV/4Lahp6NxHKAToEi5E7Zs730fePxxykoHGLou2C4aQVN+7sWNB4K1ocrwfrvGdxIDfNHB2O84b3JnJsgnyFO/uez96QeS2F/p++CN4qaUJYNTOObAg8+75vJeXZ1NdmPdS1uTHFYcQPrlhu+X8+gBxQZUkntPu2uKf1pVVaVkw4DOTrKmMslM7L1o8Y59W2/GNLgkZWLz1i1ltE3PEtFBMDkZa2dMculeew+nHu1JSDqUoS1btvRh9fIkErPC9u3be1ykIMnIkZHRklUqQecOToYtUFowe2652hoTkJ0cErjzHzvKWLZu3dr8sV9nHQXBhKF4G5ebvbK0dNHi3hy37Z61ZdtL6L8E+WQKM5IScs49n7nlAjZv2ZJa7tpE57uySC6YO+fQffdzCGbM3u0wI+GN1an77OnTmEyNh1boWRB0E1eiuTIASovmL3hs5TM92yqJGK1r9ior/8aZRGJWBGx4eLj3CwqHnlrzHLOQCIi0jp6CZWUkmzdj1h/88q+WvTZ7EPFzwppjUKI8ExaeEkHQfSSBZYvG+bPm9Djol3M/GtdNukdPVY2DfpPpkWdWOYqlUIe35yQNpAumSg64lHswtdMqAp7kFUS5Q2lch4UGwWSgRBdLuK+k3mdMm97yOO7VCeTcbzFGTEIxSyn1OGdWWkBe3LTpkaefkhc/7E4+9L2YdgtlZHsmSNbdV5URzzJ6YpYztS+kKAAJgm7iTWy/mRpDVKlHjUbtJ2dqHbGvTBImkZiVx/vUqVNLRUaPjy7pyltusJcXI3UEejM+plxYSWZuCV2/vodRJTc6SZYRoZLyJLqggmB8aMzK3TGmKKM3xwUA1/Dw8Mu+0h9MomdPySHNnT6TgDc9W73o/CtzE5Sqa+6+c9XatZleQaIZ1N6gOeDc5fCgOQhYGYMEwK1cZDs7V2nnPhxq9f8byzSKZvxSEARdJDdzQc1LrBHek7mMAJwy0adUQ1SxyOmj+72PTqU3zJk5C60FRa/KGp0sg8jwpfO/Y3VRHfdmWotIJXlymFW5D9s3giDoG0QYWZIXJsi4ecuW3swvJEvDD6YMDXc8wvTmmVxiRnLalKlDQ0Nl/9PDHbobmB2PPvX0Vy//Udt7IRMZbYf7XRwNEwTB5MEJy62maUHOF7ds6Y2uNC56xJxZM5oT6Kfn1eQSM0kGXzBvbvljz1wyRRCeaAB+csO1373qskwD3ODNWHRLIhzKE2NYcxAEXcRIlsqvRK7Z+EJPDuqNr6w0f/bcnhxx55hUYmbFemPJwj3KH9nRqsLXOS4Fl2rUMCal8666/Mvnn5dH67FO8zKZIUXHcRAEr40JpeCrjMpUxqrVq3t2dFJkmj9jVjNeop8ijZNKzJok2V7zFrK4MfWkWkGSITlkZlLOcsguvfOW//ilv3nimWesnFSu6QLAHGIWBMFrUh5iJUWSoQ1bN7+w6cUeiIokMkmisHDO3G4fbheYdGLmyAcs2QutSWY9qLcgmeWVDTGXAvpSeWQr16z7g7/7my/96PubtrxkVpGEM6cQsyAIfj4JNOGexx5BT3JXYw+xT6/cIHeKSWRnhRLQS3bA3kvR+P9aD1Y0hMvM3Umam5vDZaIIOC+79aYb7r3zvSe97Zy3njJ9eCh5u20gCILgZ8lQxdJ8IwB3PHw/Gvu6Hp0AhT0XLSKp7s/P2in66FS6TbGmsKx5s2buuWCBNW6/XXesEKxMtEOpBFHTt19qGs3tpW31d6689Hf/6r9+78orN2wdAVym0i1WvKnK61A/a1dvoEHtFx+7dOqrWHYQBDuLWrdz+wYvnyeHQ26Ea/PWbbc+dF+J/nX/fIwkYHNnT587bQrljmHrp0nTk0jM0JpRImnZfgcA7u69twJpI2XR1QyPThs2bzrvmit+66/+9KsXXrh6/UZDKkstMytlS5lGpjFvmTtytlexFCHZVyWzQRDsLMWUvr3laq+GRVBunpmqK++8dSS7u3d9EG85k+wwHrBkHwCSEtWzgvA3wiQSs/KjloLGty47ovjzysftoV8KF0V3SFJi5bVGRkd/fNtNv/eF//o/vvvN+1c84Q6JJgCeVLrTXKZadTN+M+/YlpWccNvnJgiCgabUWpdbu+QpAADmiQA2b932g2uvpqws0Lt9MtaMUdPh+x9Ywlq9dNJ6I0yinJlBNWSApEP23m/6tClbt26DJYxTRK6Rn/ZMaKNcxgRll11/773X33vv4gULzjzmuNOXHztr2lRHNhoE1j5k5i4ylcKm9qvV7pWZmVG966ILgqDjlD0ZyZxz4ync3OnK7mQ674pLtry0DcpGU/e3Je4OIzwfvv9bJNEIlLRZv+jZJNqZNesIF4zDyd562JF5XB/3GY2VYrPygmBy5HYmT8Qza9d+9aILP//f/+R/fP/bDz75xGgWYDA6REHKuSTeQGUnWZmVst1QsiAYbKzZCY21qipfqZTueezRH998XdkYZXkP+mWZTMRus2btuWBB2QtKOXZm4wadZlX2mpbecexJl992i2qHjc/7Ua6/ZgwYSe2IDZL01gVaVcPb6nzD3fdef8/du82adeoRx5x6+PKle+7pFKnK3WmQSMpVlnJFtqMGJAgGl/ZdPDaPICkpPbl29Rf++ZsoXV9kInPLIa97ODJgxy473OBS+3xCzMaDZs/uXqRj6R57HLLXPg89uXIcH/kkTSjXKHb0vRkAQkZmd/caoBspe2Hjlguv/+kPr7t6ycKFpx559GlHHrtg9uxMGAn3RHN5yFgQTAzKtqxtIuUAjE89+9yfffPvN2/bDiOyE9Ybo4WSsD/5sKPQKCudqsT+CQJNIjFrL3MMyO5m1QdOOeMvVn51vIYjE65WghetYQoGSlkiaC4YkuCkzLMA0SRKeHrd+m9ffsl3L7vkLUv3O+vIo44+/MiZU6e1L30z691QiCAIukDJmb1svofxznvu/psLvrt1+whh9Ayaw8wd1loOd+98gHnz5h20975kdpdZhdIC1DfPmUkkZnC6uQkAHVY5jj5o2bK993rwqVXFGQQulhJXF03dzqm2X79crq3PBezoF2hv1MYKbpP5g2XioaeefOCpJ6Zf9KOjDzr0tKOPPWr/AyvCUXtie7QY5U11byul/PKtm5UhNaF+QfDGKZO9yo2TiJq+a8P8mvzCyysSSQqtZIEL5OpNm//50ouvu/tOEWyeCSWE42InrYxEMIupFTEympsIAacddlQyUCZTa2JiH/VNTyIxE2GtNJUlZhelc9/xnv/85S/SjbSWoDgTHTZeO7adxcCXRkeuf+Cu6x+4Y96MWaccvvzU5cftu8disG56U2BN5N0ECU6aeaux2trq2E+53CDoc9zKoGc3M+XajK1F4c49OEQDIBe5o2RRgmies5k9ueb5y265/po7bh1xiT2Zh2mUZ5BGejO/Sqmys044ySFRxezYsiOxb6KMk0nMSMJbHYgu0Sgdus++Zx5z/BW335KUHGrtYARhcB7uThICYRs2b7ngxmt/dMO1b9lr6duPPe7kw5bPmDKcmStQchcTk1OQrBXhLF1utD66KIOg/2EmTQCzVCGVtqtdem44ypoSVjL6kja8+OLjzz7zwJMrbn/soafXrEGZEdV9uyK0cmM0c4heissA03GHHrb7rNmii6QTBEmn+mfRP4nEDOVdkJd2aVcWAdm/fOf773rkwXUbN5dOQKo0VlvfvEc/H5LuQDJJdBntkVUrH3161dcu/fEphx159jEn7LNoEYxGuDS2CklNxi7V7mFxHARvHCbL8rtXPPql87/bVGcAaed3ZkW9RkdHR3PeNlqv37jhhc0vvvTSS0yAzL1skJjlpIm9qMKHipmEOdSM9QDPOeFkJlOdrVhtScnM8yh64D7yxphMYgY4mjrX5mFudNO0qcP/+oOf+LOv/4MEZTeDSFnJSw0EVsLX7s38z2LdZp5Hto5cecutl992676L9nzviSeffNiR1XDKkLXyZ04AMmkYNr5dd0EwWFiWjM+uWfvM88+BZR28KwFA0Q0s7j1NjJGAJXirmjE7CGtq77seY5RkLNHMcmbMno864MBlS/evVVdmKibppb+tn8JX/ZK76wGie6sbo2bTQE2XIx91wIEffftZoltFwQypVj3e57sTlLKOBKHxe/QkZzKayl7zqWee/Z/f/87n/8eff+vKy7du2kqmEqlPYAkb5P4JFgTBIJDNpSzlxgtVRmEXVsAlFES4vCaccMpL0RaTSZkJooNeZol1mx2JmJb9Qqr4ibPOgeficYyeTJzZBSbXzgxNLSlJuiQowRxy5A+fdsaKZ1be/tBDIuWq+qfg9OdBipJKALGodanmcHopdipqh7Rh80s/uOrKC6+54qTDl7/npLftt8diyM0qKVNNIjoIgjeItQx3yAQoU5aAnXZGbZUrj0lbl2pGZSdLThsZZgTR9S7SHZ3apAmkjjvw0LfstRfgdAlggte1UmWuvnpo9NGpdBsK9OINYyajDFY5CJgTlfF3PvKpfXffM9G8g4Wu3adtzohmdraZVe06e8EAE601PsZHMq655+7/8P/91V/8098/9PST5V9HxiwIdhKDE7AygaU4mL/J3ERLqFzKJrfSegqjrPKyh8udOPPXo2z+1DqZ4aGhT77rfUWyZclhys5krhp9tkWbRGImGpm83dHFZsgCABPcfeqUod/91C/PnTmNFGQlXlcyrk0DY0/mn+08NuYDaLtQjoHa8W0GlY662x5+5D//3Rf//Gv/cM8TTySkMi+NpANoxTqwY45aY5vtZS/oXb+pgqDPGbvmbVva7/zHq7+IYGNbP1ufdv2J/fJIpn/g9DMWzZ9bHgWSrGXdkJBeOXxqfJlEYvZaeNm0JauhPebM+cNP/9rsWTPcPClRZm6O7MgmTxDGb2RMR/FiT+zEXY898v985Ut/+Pd/+9BzzxoSPCd5qWUSTaZSJ7LDGo5UBlJcOUEwAckUYIYEYOkee3zgpLdJcuuXksXXIR5JqMBskJTkcC3afcEf/tLn5k6fXmp1MmVmRmaolnOiPMSbJZUTsBrpoSdX/l9f/Ou/+t4/rdm8qWbb+xjITpU2BRfhgLszWR6kQGwQBK/H2ECOQSKyfIj41Q98dCjRIRuE0u4J8mh+M0hKYAJhrJnhWrLnHv/XZz+/cN5c82yQO+TFnDpNjLmXxXy7mPHs+Gqy6++969/+zV9efett7nBkmMoCrVSB0nMiS59aXDdBMGF4mZOWGvOjj7/z7P2XLHF3VomDUO0cD6UmGD0CpyuBpRpp8dx5/+Uzv773nnuglPcQSZQ0ATZmDsIIl4FQLlsuGOkyt23bR790wXl//rV/eGHTZnfAWGwNHDIzei49aoNwbQdB8HN4ZQWHJFLLDznofSed5oRZxRo1ByBHPvjP5g7gGTKz2mCCCIOTmj97xn/5zG+cuOxQ0cs8zCFnHvydmYEUjCxT0Iw0uXItmJuXdsm7V6z4j1/863tXPFbmJ5lTxgw1k9M5UOWeQRC8BmP3ZE3LdtKi+fN/+8O/QKpYJ2ciDcLiNcSsCTPSZUKGAKOa3sChqUP/5uOf+tS73lMlwVSzCbsNNIRTBiYXZalufChZWjJrz2Un+sKWLX/xjS9fcMO1o1Si0ZmJmpLk9IEIOwRB8AZpz5qZM23af/zUZ2dOGXbCwCwNoesjRDrCAJxit2nG37kMyZAouKXS20GXJ73/raf90Wc+v2TefJh88H9hMqq4CZBwJRplxe8bsAoVAMoN8oxvXvyTf7jwuyOezZGE5Cj1IKFlQTCRIGlmw8PD//Ff/Oruc+cKMJlDlXyUIobG+wR/PoP/bH7TSAQM1rjmt/vPRAdgQjbff/GiP/uN3/3Y284cThCMQqnsKwNXG9Pe0n2MjMaTBhgztKyPcI593xvTYWu+OKadxcrnl996xxf++ZvblQFzS425ZT91/gdB8Np4exh0uzOs5YzlxUCr/O3wFPuDT/3KvosWiTtucKdZCVr1PfFIeh2MMgPLRmSI9vEzzvmL3/j9E5YdDDpIwByEM4mOnAxSLts7F90AuGGQPB5fFcJveeC+L3z766M5U9kdhvRKJ4JiUDcuZxgEwWshsYJJAtzkxUGyrMLJ5DQXRZ85a+of//JvHrz3PuN9vrtOiNlrombWFyVmmhuFvHi33X7/Fz79R//qN47c/y1lPoKBDiWw7HAa29CWN39fdcjvGk5IvPnRR77w7a8rg+nVPXUmwE8aBBMPAyUZywCs5ibNBpQpIjIDF8/f7U8/85t777HQB2EH9lqEmL0mlGAmwsAKNLhMUs7S/nvv/R8+/Zm/+LXfOnHZMpjc61JPASYYHZkUPBsSB79gxJBImedbH37wSxecV3uJSb4KoWdB0Ic45ISkZAbSwSo3T36iXn7IQX/0rz6/+9z5IvQat/ZAMOlc8984lEtSMmZKAs0kCKmZcen7LV70bz7+yafXr7vguquuueuOLBgpr80sy2nJGzezAb4+ALh7Mro7rbryjlsXzp//0dPPonZ4gOzCqPggCHqDQ0wGF4UsGTgkZAMsDXn9sXec856TTpsyNKTsEpObD+xcwxCz1yOl5O4wA5AhOCpLUqaVRmKR2HP+/M994KOfPPPsS++49Ypbbliz6UVISak1xNk14GJmoAuyRGWS/3TlJXstWHTSoct8AoVSg2DCYmIWSadoJlcmRN9z7oLf/Mi5b9lrsYGqR8FkZj7I93KI2WtjyV0UoAxjkmiJag1bYeODYSbJp8+a/pG3nfGBk0+746EHL7rl+vseXwEAGthFzhhEp0xEdiTDEKr/+YNvL9n9txbvtpuZxbYsCPoZCrQmy13VyuZV4vtOfvuHTz+rqirKncqGqgwrtgG+nUPMXpPmTbUkZeyYM8SWDUbpMZQ7zJJJQk6JJxx66PHLDnt6/bor77jl+rvvXLdp0wRoyXJzc0Macq/J0ZHtI3/1nW/82a/+JgCzSLsGQf8iIkPmFFEnP+6gZb/0rvcuWbAAntXqsUmAlMFiQjuokaQQs5+DpDFzwoAxLWVAMYRq/9FQBsoYl8zf7VPvfPe5Z77rgUcfvuLuu+564L6t9QhTpVy8fb39/QBgVC4ls8XS95Xy8PLv7zVWxrlBmSRUgVi1evV3rr7yk2e+0+lwNytt13TkqCoKJgNlJhIAwEoBc6lkVmJJk5f5EpKkbGAP7gvRS+1ia/h1aRst/aO+bOnSc89+z8GL96FcyvjZVlFDE3UaVELMOgxJdzczd08pHXbQIUccdNCW7R+8/p67rrv7rkdXPVl897XjZjDUXrZ2DplYNOPl27mWnPQTF1171QkHLysxd5dAToioahC8IcaE49yMWRmEJUuS5JLMTJ7lbtabx6wX0wcBqQy/plOwhOUHHPLut5565AEHy2sBMGJgY4mvQ4hZxygy1u4wK1s2SAbMmDL8zuOOf9exx6/btOmmB++79u47VqxaVUZewpoGNYdSShrNsB1K1o5n9puSARiBf/3SC//zv/w1GCQ3IJsnpMGNuQfBzrBjZ+MuYyKJrJrZzNxVmnJSSj27IQwUYTSXnHn6tCmnH3nsOceftOfC3eGSj3hjcGSkTbz7NMSsY5S1GNpmj8UUQ6hNFc3ds2G3ObPfc/zJ7z7h5DUvbrjp3vtvuvfOR55+CkYpV6RyDYPY1NECpe2jFb/os/AdhYdWPnXHIw8tX3YwPbHVOT7e5xUEvaN917fXsomVZ69YZXfS1GQPuu5sJ8IckmyIxxy07OQjlh974MHD1VA2LwXYEohWzEeDXmT9KoSYdYwSbWui52wFzcmKlbtTGCrhOAOkhbNnv/+UU9538slrN7xw4wP33vLAvY+sXOk0CuYQCUKSkSX8CPadt69EOv/piouOOvgQlR7zphmvz040CLpA8W4lIGWpdOKYQ6ZmAiLHVIr14JYoJce7z5v3p7/2O9OnT2Guk1kuS+pWUDRDpa2ov9bFHSLErGM4RMFoDpW02VhJAzmKXB72ZIJTqCUtmDvnfSee+v63nv7Clk03P3jfTfffdf+KFa2XLJagDlkJIPQVZd+58vnnH3h8xbL99i/x0gkZiw+CV2LeGHNLOaWhkgs3MDmyIcubRIMLBkfXh7OLgGv1hvWPPvX4EYccmMxGqCRapgiWqkXJxJZn1URTtBCzjmKUiwDN2vkzgwTVDrMhA0rFk1tOSKUSkklSPWfG1HOOO/7dx564btOmm+6765p773js2VXZ3UiDZTn7LC7gkJGUXXTLjYftt7+7IxndJ95NEgSvgjV22yTdd/iJ18kJJCSVZ0ECnBVTD5w1zEzKX7n0gv920O8LqkiUGbwC2Kyqy5qbJfQ5sQgx6xgO0J2kobRWN0GGGjRhiJRnsZlTnhxAFuGECQY64RCoOXNnnH3SSe85+bRV69Zee8dtP73r9jUbNxZDmvH+EV8GScpFu/3hB7du3Tpz+jRvLUaDYMIzipFh2jEHHnzKsccPi1AWkA2UJVDC488/c/4Vl42mZo3b7bWoyQWj7Lm16664+cZ3vfXkjFxlubmMdLeStBBFZMIm3H0aYtYx2m0a3nL+KHHqsk9xqDR2NM/6VkNHuaQcQOtiT25Z9SjrxfPmnnvGOz925jvufmLFFTddd8sjDym3Gs5cZlbCBaK1rfqbshH2IuFMFSV2d930wP1nHHuc05MPuhVlELwhKtHBBfN3e+vBhwAADPDSRQOje33cIQffeN9dz6xdX6rkux6xYILXImHpn6+67OTlR8+YMiyCTPDSCsQd9frdPZXxYUL+UIONQyzTGgiYDDxqvwN+99xf/uvf/vcfOu3tM6YMl4HXma1ubs9FxES4oeSuehRDcIGE8+YH7ol5ZkEAwFOTMhdx7lnnqFelW45ivejuvumlrT/86ZVJSXQpGwR4zdysnW1i3qohZv0IhUQrk9IyAcDkc+fM+IUzz/7C7/7BR047c+a0qYCThKXSoG2UyeHZkWHp1WxEOn+SJY4q6b6nHntp+3a6Xms6TBBMEhoPEBiAEw4+dP/FezrUgyctBXckGyIF48U3Xv/8xg0AVDpZW+rV2JRMxGRAiFnfIRJGh0rG2OBOrw0JdOTpU6tzT3/HFz7/++845gQpo/biIyWjl4ScK4nJu3+epdlbgnFkND/5/HPUq8/tDILJQ6Uy1LcJlvzSWe82683mzElmuQnu2J7921dcVJabnkghOdy9FEX3YLHbeybgjzToMO8QolJOkhxJDpiYAMA0Y8a0z73vw//lM7++9x4LRMCSMgwJMEMqDdpdx1g6RimYcN+KR0SbkOGLIHjjSAK83MMyHb7v/oct3c979aBtnhAgYNfefecjT68ymQllZczWxI8enU1vCTHrO8yg7O0gXi4FvtbOIJuDgHnSAUv3+r8/++snHXoEPMPE2gGIYLJs3d+alciGREHOx599RjEOJpj0FB96g1NmAky/+M73tLzCu3pcAA6XmlhilvRPF/2YApwOK6kyGd09T0Q5CzHrO2oK1ng2ojVjRVKi2reEgXRV4LQpU3/n3F/85DnvTZAPNa8gKXW/plCEtdXL+Oy6Na31aBBMXnZkp0g4ndh/z8XHH7Ks68eVoSmJNodgMvKBp5648cH7yjdkqN3eMyE3ZyFmfUdJdxVDfbKUclirvrZ4q3lWTUFiDUr5Ayec+q8/dG5FA5roPHvSlFba6USIeHb9GmWfeJ2YQbBzNPcpJeVEyzLDJ846uwdHLkXQaMrwIcBRfeuyH2WHASZjqz6FEzGCMonErOwamhEtjeGms9nudPGDFOWAU07K6dTr7WDUlEI1GzJvTK1Uvl4K9snUimaAQm14+5HHfP6jn6BlN7D7MQ0AgLeEVnDJ0zMbNky8Tswg2CnKCLHSm2wu0Rzce8Eeb1t+VPlbR27VZ3X4PpVYxpi1HiBG+HPrNl582/XlWSRLJhPhnIBBlEkkZkkOuJRZMasGnExFG7r6UTtgyWGiNZ3NHb2YiqtIpo477MiPnv4ug9TD7v7WJEBK2rx5c68OGwQDxkfOODslmiPR6lSsXO1nBxd2geT43lWXbts24sW7HJRkUc040Ii2IwiWjEyt9ovu7swqsAlVl1ERTpIdVBsywetS9/iRt52x3557duyl39DRm/ooSS9serGXhw6CAWLR7DlnHXu8m0uE53YuvNvH9aStL20/76dXEIlyR5Y4IX16JpGYUTCZuVkmvTWaoRexY29aQHIup9EeV9YpDMzI5iL1qbPf33sT0bIs2PLS1t4eNggGBhEfftuZ04aHJKUyKaknDgPuLvGim29Ys2F9cdY3s/y6mY4BZRKJWdvkV/SMDGunr7obZhSRDQZPreRZSXt17OfK3h4M6PRlS/fdb9GSnsxPGnMOEoCXRrZ3/7BBMKjMmzXz3SecYlSGmNUbJw4jYayzvn3pT8qiM48xBJlITCIxc5N7rSQAQzAK9JLC8i5/mAnIbmC2xnoxd3A6mTEbhmwoy5MbqVOOXA5LHXv916Z9S5SYyWhdv+63B8FkxiW999TTpw8NyQhT6SXt+lEJZmX59ffdteLpZ8sz//Vr0AaUSeSanwTSHn561bbRuvJeRuLo1IGLFk8dHiq9WZRZJ4cbOd0yVNEcGdIRBxyIS37Sudd/TSQJat+PEzJ2EQSdgsKMKcPvP/3Mb112sViqjnvg2WiZ2ZCI9LWLL/jDf/Wbhom56JxEYsbM2uyrP7ng4VUrzU2J8NyDUSmim/zfffqzyw84kCiV82LqmFkGSQlJpds6mee9FyxM7FFYnGWEmZplJoV+m4gdBP2ARFAkzznxtB/deN3mLVvErDIypptQSKTg7nx41crb77/nmMOWTciI3IT8oV4dN1TQjGnTKXOIcge7P828TOocWrd+PSmSDorewUmbRUgcOZHmAmBVmjdnVqde/7Ux0AHPRcXoQGmGG3BEQIZSpGOAC1Xq/pjgbpNprQZELx4yAHpQ1ObNuPXyewUA2A4vm8kDKTfCNbXiJ952lsSMyuRopZw5xg2us9WGAggwmcRvXHaRRl/m0FgS+QnKA95JPfiPnp1B0tThKWXyVjNzCL1weZe08vnnAKBlIqyONi02rWbIBhpYu0+fOq2Dr/+axx1zE0qaPm3aREgsU07UKIMzVH6xefDFjKilYQNlrXYUlowKuvrRTKQl4JBVUDFWGh7v30evIWlOGEWcdvTxu8+fV7WKqMpdU2q4SmDDO3e9ia37NAvA8+vXXnzb9YbUGh1czCNQy4cGfCU6icKMAGCaMWVqefKaWfYyG6G7lDDgiuefLst8khBk7KCclUMAcHeYSOtN13Rjn9OUibKyNBGMhgW77yqsf45wk2XkVJr5BnwzYYDBs2hG27Q6H/sBskwH6fr6g/ASTxMtI5PCHnt3+6D9hiSKtVAZpwzZx04/62+//532doJqps8rO1InY48OpdLhmhuD1x9cddlpRx47a9owAHe5JRNkFEAf4DTB5BIzSfNnz245VrjB1P0Vt7ubVY+uWrV128i0KUOtKWBiRyMJFNgq90/k5p60fBX7yCwJkDR7xkz0JKfdXQje/v3KBQmGVIZR5YH/sQoVASEf90F97M9rWlIP7DTNoFF4AkuTE5zZzAZ8cbCzUIDRQOValb3t8OU/vO6qlc+vAWBmZWSmmZkZQZd3apFhoOSSzJIIc9v00rYfXHPFv3jnOZ5IILG4OkgAbYCT3hPiBt0ZFs1fUOrI0SvraDNTdofuWfFwa8FlHXS1Z3Mtgi4mA5BH641be+QsVWK2pQ903qzZEyHMqNK1JzdCYKaL6EWnQ9cRgZyAShIsJXkPHlwiayqBBsJSltcGcGIW1L0OJdxHCZbogunjZ57d5NHdAZSR8WiWv517MiujPCWMZaCupEtuuv7ZDS+wLGS8aRQqTlcdO27PmXRittvsuWXSD5m8JyNLykAWyq699872/NkOHrpJ5xS/X8CJtS9u2F6Pdur1X4ciY+3Ra3Nmzhrom6GBAmEwg5Qgk6n3nipdgKAMlqE6QZIyjTIydfXDXMnhMHc4YFYleerZtMp+QiZJ3po1ccIhhx64ZK/2clCNc+vLKkE6QPNqJikV+2OrRl3fueyiptHNiJan+UAvRifRJVXepz3mzSNp1hQB9gYnSN72wP0btjfRvw6uvEpgoMnxSgnpnidWtMyzu8vYNHVFWzBnXg8O2m1EZKHUR8hLjp4lSDTYH07AcynZQZIyWErpcnc/6GjOgIY6lzj75NuZkaQrEYnMTa2sf+Jd77EseGPV3S4A6eyisC1RYz38brjv3odXrZRYyw0yMzf2ZnRUl5hEYgaA5Lw5c2ZMn/7KWtiuIkKiu198zVWl6LaD1XGNR5cRzYRZ3frAPb3R6ZZTMygsXLhwqCe2I92GKksNQ4YREJ0lHtNdQ+quf1AAkkHGLCRWUCV23c4NpStAcIMspWIgx6Gf8zZMOCSW21NSQhIh42H77HvQgQemJlrPdsCmszskNdFkh8kcrQE09rVLLgCQwLIaloTYmQ0K5Q3bb9GeZSqr6D3YwVCljstF+8mtN6/duIlkgproFeV0p6M18Oy1X6e55DFmDJsDUiZpXolG8rkX1t396KM9eGcJJ1Nu3Sn7LFgojPZmR9htSucNrHToyJAnwpy2Zs1f3jg6cq9KMMxaB6ezdCJOhHD0ziPamB/fygCNT551lps7BOWWwVVnc5nWkkZDyyqWAoUHn1553f33lHvWoArqYEtA75lEYtbajWn/PffyZpvfi5uqmaaZBWD7yMhXLvqBOSTSSRldydHUg1jS61zFJX+rjNaWyJCSYBhyr6lRUjX0/auvcPWoKbXcEsX1Y59Fe2KyPqSCYJc5YPHexyw71EBjpUT3mi938e4SDlWO71zy4+2jWWJN0aWeGPl3iUkkZqXqz92XLd0PplbPYE+mMKBJ7QJ284P3XXTbjYABLrqzyWdQptd1s5ZyqX0iE2ASHcqEQwbW5u7+4IoVP73zdvZu8p43bQbUwfvsN9DZ4yAYFyj8wpnnAL5jV9ST8AZJp63duPHim681M7po1hMPiW4xicSsDBBKtIP22a8imOAgejU+3K29j7Gv/PiHd69Ygdb6qzZkFksoz69zNbnaMXcABlKe5N6a1L5u44t/fd63AIOxbOC6SrnzigAns/0XL4ltWRDsLCL2WbjgbcuPaZ4PbArou49LcvH8qy/fuGWzmeWcO9kS0HMG+NR3DUnTpgwdvM9+tefUyYHPr4lDSaRcbLZokv7ym1+5+5GHR0kAFQi6I4t4nf4zpko0tJxJy/d7YiUH7Pn1G//4H//+hS1byvy9Hsz9UzMCgAD2X7JkxpSp3T5iEEw8JNXMHzv9nSmldmEavBdbpPIk2Twyct7VlzOTyXqwCO4ek0jMSHpTwu5HHXCQmfVmOF5icyBJVqUsl7jN6z/7xj9efP11FJDr4mNrSK/Tz1RDtXs7mJ5FMrFGTrxrxaN/9L//9rkNL1Qw8w4bP74mRmUv+bljDz4059EIMwbBzkIyIS2cM+fME46HCU53t17cSlaaU+G69JabntvwQieHLI4Hk0jMpGxC8ch465FHFwOZHlw07u4Qk5HyOhuYCboA+/olP/ovX/lfK9asASrAarxeeCEJqdRB0klVZp6x6aVtf/eD8/78a/97w9atVUbtuaQDrfuWFU11ZaoIHHvwYUzm3iNTlSCYQLhE0T942tunpSEmSz2pKSx5DdENKWd9/dIfFT+t7h+5Wwzwqe8sJV+VIZJ7zJ6z/9J9e/PkbXrsXSIqCK4kqFjdy+5/4sn/84tf+MvvfOOBxx83f70qxFIv3jhuCI8/s+ofLz7/t//yTy6/41aoklSXuhDJrOqNuUmp/li8x6Il83eTVPagPThuEEwYnCX/jbkzZ7znpNMcylUvcmbtW1V0Sbc8cN8jK59CHuBm9klkNNyM2lIZreSnH3b4Y08+IVRAjTLXSeaGlulLJw1zSx0jhcz2BKnSfAaCGbjpgXtvuvfu3WbPPeLgZYftvddeey7efe786cNTyu7HIadv3rxt7YsbVj7/3MNPP3n/ihXPr18rWFFEFMls5m/t6GXuMi4YXGccdYwnmUDBza13tZRBMPAkh1MgkuO9p5x20a03bN2yjQmksjd2w6XCy4qpfaeXi6IRkPC1Sy7843/1G4Q7MSSOUkSiVNpk+3/nM4nErFD6N2U85chjv375RSPbHTBHTjQI5lDLUaYXuMzMJUg0W79p4zW33HjlbVamUQ8PDw+nikOs63pkZCTnUYeINMbJrZxwr8721Riq7OTlx1YOWRqRp9iYBcHO0LSTk5CmTp36gZNP/6crLqJbTVmq2jXMpbEo0ToVgxw7FL4MoFmx8skb7rvnlCOOSp5zU2bmBGEciF7qfhfbjuKty0KWNWPK1LOOeWs2B5BYOeTY0Y/cg31+SaS1LSIdcqI2JEjKjjxSb9+4bdPGzZu2bt9W5yxUxmE4S1NambDVo1qPV8ekfMKyw+ZNnw7A3SuzCeDHGwS9xUraDJYSefaJJ82fOdOhRIOrZY/Ath9xBw/c6Ki8eehZ+s6lP94+OgpL5aHUNtkaiGbqSSVmcORiMQwpE+858dRhlDyUDAlGNzezrI6OYHgNzODIjtxs4YtEtVqni6CWrzQt1WzMRJpPxh8z8r0nnSqTE2YG10SwfQqCHsLG+RNwwfO0oeqDp51ZHB6KTWgNb8/Z8M51NXuz3wMAWLGFtOde3Hjxzdc3naxqdK60VHfquN1jEokZBSVTdgAgE7lwzpzTjjymbI+UvbXw8d7M9XH3Mbql1tILxROkbA1bZoxoF9Hi5Sak41hwIfph++7/liX7SMpi7qGjShBMGJoRUe3cmOnMY09YNGcuTF4mdra2ZQA62D9KMrF5/otuVhpY7fs/vXzz1m1uqSTsc1to+55JJGYimJ3JSnmhey3io2e9KxmYyghNGGivEIwuUdHKxeStNK+7i2U1lI0inPAyRMORi7Nw+dyRpQzYOBr7Uv7ht7+jNDyU0VXl9huv8wmCQYRk6VQWm8+HUvrIme9wiAnFfbjpUsXr+JDvCsWjvN0FSyGJL42MfvfqSympFCfTKe+BCcObZxKJmcMMzM2FIVhFcuHMOe896TQKWZ5oQMn6eA92PNl9R8M/MOYTA0ztDxbFslIIWYoGE60Hcvv6HH3gwYct3U+EIZF0r+HShHDND4Ke4V5bVQYFe9NXA5x81JH7Lthd2WnWhO47LyduZHa3KhkaAzyHmHnJrTc+vW4dgOJJNCj9NpNIzBIpoirhuzLzVRnwD5525m6zZpVUmdh0gPXCdd5SY0/F9HJlevkYKs/Itcmd5jQwAebNvMPxLAD5xXe9t9k8ulPNQLVJdD0FQScwsHYvsUS4HDKggj521ruNGqWyNR7EnW0ebbIqltxbVW/0MqkK2b912Y+aDh9XHpC7ekBOsxOUGUJetjcsP7mJNmNK9ZkPfqxUyTNLNHPrQYVF6X0GdngHt3jZbEMygUmwZtjKyzZz1guDfNalm01EywTVz3nrW/deuBCAyWB0yGSKpukg2EnEZt5bKWhsvojq+IMPOmDx3pUbmShvVdJ37H6X2H6qlNhP63lSO+2WBx966Mknm6imxjOd8caZRGL2Wjh09AEHnn7sMbWPwmgOpV54Ng4Kauu+UPJ0u82dc+6Z7x7v8wqCiUxN/dLZ73PkllWj9yazIAkuc3z90guzkA2Jg/E8DDErDhr+6Xe9d8nChSJoUvbESddO/tpYgrJqA72yBP3aez86dTiunCDoIhXt4L33Wb7/gTC2pmD0IqdgZkYJ+ZGnV91w3z3WNhjqe+KRVMaXY+bUKf/m458eKmX6tIEoRe0NFOgiWRus9neffNpRbzkomqODoLu4UuK5Z51Tigl79jwqCTqaGdK3Lr1odHS0N9NF3jwhZshScdDfd9Hun3vfh51ItHF11ug7MgGXuQ5cute5Z75r1HIYMAZBVxFB136LFx936GEtW6JeKArJ0qNt4JqNG39047WlXLkHh36TxCMJBjckEZLetvyYj5x2pjTok306SdF1krOnT/udj/3ScGsgZxAE3cQEmOETZ5xtEBr38J5MwxCYzCG4Lrj+mvWbN/duY/gmCDFDaTIjk4EOfOKMs08/6piwZWpjgkNDQ0P/6ZOf2W3WLBgtx28nCLqLgdkgaenC3U89cnlCLwxjG7zxQiK5adv28665fCDMEELMIJpZ6eEwA4j6s+/76FEHHzre59UvCKgs/c7HPrnP4j2ZTKJovVkhBsGkRRKRADjyx886p5g89Oa4MJpQ9oJJuOzWm55bvboHh36ThJgBzbtGh0jCUqr4f3zil45ddqhRoku5ZTnobaPP4r5f2pZFnwgPd9aAq23FZmIZtGT69Q99/LiDDiZV7FHI3sxLC4LJSzanZG6ALZw9+53HHQc4PBVLB8LRsr1P6uTzpzG4goEpywHYKL58xaXmcLrT255aFPrquRdi9jJac8JoZr//sU+efMRRpaNwBI3ZTNVsStwoiRINiTLDADQV/hxUAWbyJC/jZQSD8Tc+9AunHHV043XqIpPEPAhhhyAYaAwUGyugD7ztrOHhYbIMmm/SIM30qE4vLM1s7IBfJ+67//77nnwcMhMyVBb3xUyyw8d+E4SYvTpmZua/+eFf/NBpZ4g+BBFIrOqWZ0d5F1NKOWdJeSAypK9LcgMgoDY4RKbhofT7v/Dp045YnoSsGqUnz9X+5iAIukRyOCSiMqPyvFkz333CyW5e5k2XyFCpbxQ677yTaD5mznU2fP3iC0oEqyTRUYbXdNRh600Sj6Qd/OwqwxKUP/GOs3/9w5+oqkqwUSqpmUNdLiB3T7SOu1mPC2VOqaExtpk7c8Yf/fK/Puagg0oc1czKpVyWY+yn8EIQTEjUDNOoDczSh045Y9aUKTWcpFklKRkowNhBu6kSZmzLFVpzplasXn3DXXeUtayjZa2X+khB+uhU+oG2njUzFwzw+rSjjvqjz/7mogXzhCyCmYmVe3m+SwToUMeG5o0jFEYpZh28ZMkff+7zS5csNoOMUhmzxlG5TO71QEyeDYLBRQTG7I2SfOq04fef8nYzE1HmMmb34ljUyeO2wk5mVmYuticVf+vyH49mB5Ba89X6qrA5xGwHr2x0d5Bkcuy/aI8/+9XfPmv5caUywqEyWJlkzSwj+il2vGuIcKiSv+fUU//wV35t3oxpzdRrlzVVVbIEunozvDQIJjNOtG+0Zt4h8J6TTp03bXopuyATmcYmtzp2aAgtVSvxRgBwrd286cIbrjGkMnmxr6o/EGL2OngxAXFmg0PThqp//cGP/d4nP71g9tymiFEysFLKOQ+8lAGUz58949//4i//i7PezYoYSpabadcldk8S2al2KDIIgm5hKn4FThmcmVZBKfFDbz+LrqZEiyhlx52lOPS3N4XtehAK51979bqtW8ws59HEMoSkX4hH0mtiMsBhMpnDzCp4Pv7gg//8N37v7BNPNhDW7OTMKg3+b/LMY47/r5//t0cedJAPATJ6UTIBcDoFei4hjkz54P+8QdDPsOXw2wT0yuRM8qyjT9h9t/kv72Lu5DDhkv4vKbH2HGqSUhZtZGTkvCsuAZBYkiwhZgNDGSoGA7IclgCbMXXol9/9/r/4zd854ZBlYK3yoGciXMpi06rVDApq0qUv+2jZrI394pvhZ1+/DB3NRHsEWlniGTWmr6DUZWZS++25xx/+yuc+94GPzJgyTJLOclmUGUsSTaXpzCS2fiEdizAYUrl/DIkYKsKJ8BPrOGW9rTLRVQ7zXrmhkzK5yNKlRHkHF0OtWVxOSuUT9aapvzi4Ck3nlaOjVYVlepnUxEXKEQGrkj7y9ndmCEa4SDX/7eRxW5+/4sdx8Yrbb1m5enXJSuzau8hUlSdPaWwl2kHLN/URg052GlIZ2me3PX7v3F9+aOUT37360ntXPCaNilbmfro7kwkZTRv/EAApl916EZtk9NwUB75pXnZFiRAkIMlLhX2CZXcZM0CQQg0lkNTc2bM/esa7zjzq2HHUDsdoqfOnZ0BkchT9HLdTmpiUZRdoEEBp1Fi5SHX3uS8aBacVOyanVXRqxDs0ZalUkJeZyGyOiGYn001ac3HLXdzqI+7J4uC0w4+64Lqrnlm9xkB3tUoZu/vzJjWGEbXnb172o3937r/MSUPSzkYaKTfPJFHSga2Vh/hm1zchZjuNpCTUlsl00D77/KdPfW7F80//+Jorb3jgAZdnuRWPzrI/M4M3Rr3tmGTOOZO0ptux+TqI1up5l0+MpDlAkXSVeqTsTBQIunspVEnEbnPnvOek08449oRpKamEFMct/G0mZMkTzGuqIhJRnDKDziEANBCQgY7kEMvAo27iQFNk7sw0U5YgG0KHNjEGCXT31NxBJpro3R7CLlojXUxAGcLupSKjq8eFccjt3DPO/u/f/pqhZWbgzi6/j+26gATe+dAD9z35+BH7HeBet6djv0HKPHoZ3WFmyk6iIxvLELNdQYQJKHuvpAP2XPxbH/ulX9yy+erbbvrpnbc9+8LaxhZEyBDNAZTIGQUvJZJFtkp4rby7pSrJuPM3ubdcSyi5Q0bLXoIeaFZtJveaJKF9Fy9653Enn7r8uKHEVgMmi9fAOOEGEpQDMqWyXgsl6zBexvZIognKHEqs1f0VTCJVEjCglZQMCY129uFD0oEMsYT6JXb5R3PIJAC16kSWe7DdaNw9JGXmEw869IC9ljyx6hl3iE7b5ZjfGz4urTGHIAH7xiUX/vFnf7saSjvbNk2KlOfRxEq5Tqycox0xFAox2wVKYlZNjjTLUZPcbeb0j77trI+cftZ9j6+44f67b773nk3bX5KIdp+1ZLQiKhIMrUVcCYk31be7pCklG1a8/5stoLVrkNxrJkybMuXkw4468+gT91uyJJH0LGmUSqDB3Mhxq7a3rFxZuSuMXtdmw+yCS8/kxiSvwBqEZ+QKtWdH9/sFJSM8o6pIeS1LgmdWqUOXW/uGITl/5syPnvEOgE51e3VWDnDgXntXYCmhl9SD8IaYDO7mn3vfR265/z6zRMjd2eUCCJXaRlJZqgzZX9i8Yf7sWTvbr107MitjJZgM2R2idaImkyNrHnyzrzHJaPLojdEwqKZ4vbTiZzEJFEaAB5947I6H7r9rxWPPrX4+N3F8oOVLLZVYY6M9b+Z8ygm0X7wU0YIuYPq0accdeMhJhx556P77Dw8Py5qYonvNKjVNY8SbPIc3A5FAV3YYKZDifZfbM/eHlnUWU6U0ykxPSUy+eV3F0pnb/V+0THRzuSWjKNSHn6X9TujIazs9Ibm7QQDckrl6MFyXKs9fN6G2EqpBD8KMTjdBRhuFEgHAZWZtD/TuYWhvPQ2A6Ea5dtJ8RPZSPfInf/fFDHkiZdJoQgd+byFmO00RjzLAs50JcxhJuBs0RlpK4R+ff/GFe1c89uiqpx5b+eTTz6/OhGNH4r1V/WilcW2nVyjG4qrlXiczd582PLR0732O2PeAI/Y78IDFe1tqUsOJkkRZJhIJz2gFP0tmvjO/oJ0kIw8RntGaL5PMs7cTeUHHaMrtzBw//Ub14z+FACWwyw9BAWAzFs+McjjyB/7AT/10hw7gVAktZDMbzTIzV526vEmSNU/2BGbCXKUIpds5SMphyd1hVoq8ZJSzgwXGr35cUtk9EWTKapIm0M7uzAwSslCRUnYyid6Rgp0IM+40LQ9DoFW7wfIYdokqZe8JO6bbuXz3OXPOWH70mUcfJ+ml0ZEnnln1zOo1T61d+/zaNU+vef6FzS/WOe/yrZeg3efP333u/H0WLdp3jz33WbR4ycKFQ7TW4tS9uCm64GY0Z05krUwmSmApV/Hxqh4cQpW9tlS1CmFGRCZPAzEPcIBwWAWCzO6JbP12u5+bJACiWak5YEpQ5+zfDK36JUHZK0vuXpl1fcfpGEIlL3U1BLIkb23RuocItbz0RuBDIrxsErtcAAIkJgiWBRqFTFTgzt6nDspScrocNjbYHNWMPcdekWhtvKsJwOho1eYUj04AbP1XAKYNDS9buv+ypfsbytggjmZt2rJ53YsbXtj04tZtL23aNrJly5bR0dEMjYyMjOa6eKMNDw8nWlWlmVOnzZ42Y/q0aXNnzpg7e87uc+a9MufcNG41J9ysjkvVfikMSWVmDdlk7LqcPX4dyuKuHWSQGuus8TqfiYoBJRJFpiY522qE7D4OtA/l9CYQ3qGXLkWMrS1R0+Hbi+LcHUXLrSh9T1aExiYvgAqpycd3/4e1UviGJkOPVh/3LrwUvUhg+5nTmYdPiNm4IaIktoYtzZ85e96s2SSzVGGHRWQTgSSlHQaJrRdor6kjHBcEwWQnHEDGjfZ+rsQDyyo5qViNEDZm/+6liL+x9mibhhhYJjIEQRBMcmJnNv5I2pGwIhKqdiqu+YZmglpTvt8eMuTAznYsBkEQTEhCzMaNYvlRtl87tEzQy6vLxnh9pmZunjvKQNCmYiIIgmCyE2I2bjSJsTEJr6boH2pX/GNHwSQBb/4FYXLsCFSGnAVBMNkJMRs/jO3Bes2QBcgN9OKS00QUx/QSNhUfJFuyBu6osQ6CIJi8hJiNGxmy9sZLRrAU9WuMOrX+FkCTHivTsIup6CsmYwdBEExSQszGjbH9ak0H2GsoU2uyxc+KXBAEQVCIdEsQBEEw8ISYBUEQBANPiFkQBEEw8ISYBUEQBANPiFkQBEEw8Pz/dOgQJ+1u1CkAAAAASUVORK5CYII=" alt="SQRD Digital">
  </a>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#" class="active">Portfolio</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="nav-cta">Let's Talk →</button>
</nav>

<!-- HERO -->
<section class="hero">
  <div>
    <div class="hero-eyebrow">Our Work</div>
    <h1>Creative<span class="line-accent">Portfolio</span></h1>
    <p class="hero-desc">From luxury perfumes to mountain resorts — social media designs crafted for brands that refuse average.</p>
  </div>
  <div class="hero-stats">
    <div class="stat">
      <div class="num">6+</div>
      <div class="lbl">Active Brands</div>
    </div>
    <div class="stat">
      <div class="num">500+</div>
      <div class="lbl">Designs Delivered</div>
    </div>
  </div>
</section>

<!-- FILTER -->
<div class="filter-strip">
  <span class="fl">Filter</span>
  <button class="fb on" onclick="filter('all',this)">All</button>
  <button class="fb" onclick="filter('social',this)">Social Media</button>
  <button class="fb" onclick="filter('fashion',this)">Fashion</button>
  <button class="fb" onclick="filter('travel',this)">Travel</button>
  <button class="fb" onclick="filter('edu',this)">Education</button>
</div>

<!-- GRID -->
<div class="grid" id="grid">

  <!-- THE CONSORTS -->
  <div class="card" data-type="social" data-accent="teal">
    <div class="card-logo-area bg-consorts">
      <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCACiAMYDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAwQHAggB/8QATxAAAQMDAQUDBwYGEAYDAAAAAQIDBAAFEQYHEiExURNBYRQicYGhsbIVIzI2Y5EIJFJywcIWFyUzNDU3QmJzgqKzw9HhJidDU3SSZNLT/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMCBAUBBv/EAEARAAEDAQQGBgkBBgcBAAAAAAEAAgMRBBIhMQUyQVFxgRMUM2GhsSI0coKRssHR4fAVIzVCQ3NERVJTg8LS8f/aAAwDAQACEQMRAD8A+MqUpQhKUpQhKUpQhKUpQhKUrbt1unXFakQorj5SMq3RwHpPIV1rS40aKlcJAFStSlbHkMzy/wAgMZ0St7d7IpO9n0Vczsv1AbH8pNjfwMkBs7no3+Xr5eNOis0stbja0SpbTFFS+4CuSolXLZ3pf5TfTc57f4k2r5tCv+sofqj28utaekNJzrvevJZEZ5pppYS6ndIUtR5IT4n2Dj0ruF2t8axsxrGwlsPMpCpRR9FKyPNaT4JHPqTWnoywdI4SSDDYN/4+qztIaQbGRCw+k7wG/wDW9SWm7AxerBPW2vFwadCWRvebjdzukf0uPHuxXAdoenFWW5GQwypuI8sgIIx2Lg5oPTvx/tX0JbNQWrT2h516EB2ROtzZ8pbYHzjqFLG6o9xSCeJ/m4NVi5S7LtL0tLvkGOplQIaukVRBWyr+Y8Mcx447vA1oW1rLQ4wOPpZj9bivO6Nt1ogtUjntPRXqVOw4YcDmD302r54pW7e7bItNzegyU+e2eChyWnuUPA1pV5dzS0lrswvcNIcKhKUpUV1KUpQhKUpQhKUpQhKUpQhKUpQhKUrLFYelSW48dtTjriglCU8ya6ASaBBNFKaQsEnUV3RCYCwgYLikjJGTgAeJPAff3VfdoWyCXp+3MzLdIMwKT5wCgoFXekEAed07j3dKmNI2VqwWhLAUC+rz33U8Mqx3HoOQ/wB67VYILbmjoNvnMhbS4oDjZ6Ekj0EZBBr0TNGxxwjpRic+7hwXj9MadlscrJIz6FaEb+9fIOl9OzL5OLSAWWG1YedUOCfAdVeFfROyG0wbdIVDh2lhxppsqdkukqKM8MYxgqUe893LAqedtGntKWaQuUw1OkSSoNh1A3nCeQAHIDmVVG7NIj7lyelJlqbajoAdaSf34qBAyOg69asWWyRwROIxO/7KjpPTH7QskrmgtYMAccfhj3Y4b9q17vpe1WfWUK5SobbltfcDfaqHFsH/AKajzwDxHUVatbavsui7e1KvLqm23Fdkyy03vFfDiAnlu49X31s6iuenocVcXUFwt8dh9OC3KfS3vjqMn2iuX7TYdnvuk0WpGo7bOZjuBdsnJloW4wrGOxdAOSgjgFDiCBkcMVGaQuYblLw8fz5rDsw/ab4hab1Bge8bx379pGWOCntLXjTPyfP1ZY5LUk9otMRp35tMEYBUp0q4JAzz5YwBnNYtM/JOoNN3KVanXbpPekmOqY40UNBQwtxaM8d0DmogE8gK+dLpKvdvt37GpnaxYzTxeVHA3Q4s8AskfT4AAHiMcufGc0BridZbtbGrhLdctMRDzLbI4JZ7VKgXMD6RBVnjk4yBVJmlX3wH4b/1uC9VNoGVsbpYn3nVqO8NyGGeOzDMkkru2lIkWNbLlqC7rQi0txXWV744OoI8847xjhjvJr520HqiXpLUrV0h5WwT2cqOril9knzkH1cuhxVg2qa0ulxaj6WaxFtUBtCezbXveUrxntFKHAjJyBy7+fKmWG3qul3jQhvJQ44kOLSM7iM+cr1CkaQtLprRRmYNAtDR+jy2OWS04iTZuaK05mtSuybVtIxbk9uWxaQtKEPw1r4ZacG8EKPh3f7mq4xsrccsT0xL0pa2uC5CUDsEK6Hv6cav+s58Gyyo719dVFkTFJ7KE1hTjLIACEnJwDjHfhIyTxIBgrjttZs8puzWOyxp1ojJLTrj6yFSSfpqTjgATnBIJIweHKtG19Tab8oq40BWfZrTb+rxtszb52nZhnjkccthzyXEpLLsaQ5HfQUOtqKVpPMEcxWOr/rmBbNQRVal03vqQkfjDC/3xAxyVjvSO/vSAe41QKwLRD0TqDEHI7wvVQTCZl6lDtG5KUpSE5KUpQhKUpQhKUpQhKUr2z2XaDtisI790cfVQELLAhyp8pMaGyt51XJKR7T0HjXZdmmho0El6dcIEWT2ZW6/IdALaBzDaM7yvTiuTLvUhqKYdtQIEdX0+yPzjn5y+Z9AwPCteHcpsNLgivqZU59NxAAWf7XMeo1fs08NndepU793AfU/BUbXBPaIy1jrvKv68V3W5XvS9qmKkXKU43b2zvNx+CpMkDkAkct7mScJA4ZJqv3Pbfcp93EhLDsC3xlBxiHHI3pCgfNS64eSOqUjjy8a5A4tbi1LcWpa1HJUo5JNfiUlRwkEnoBU7TpOWZ2GACpjQdmcQ6b0iBQV2fk7891Fd7xtP1Jc7guY95MVq4ecgnA6DjwHgMVM6K2rP2u5NyZ0cIUPNWWh5jiDzSpPMekE46VzyNZ7tJx2FtluA96WVY+/FScbReo3z/F/Zjq44kfpzXYrTbiatqeWCsS2OxGPonABuVO5a2s5Uubqe4TJslUlx95TiXSrIWgnKSPDGMDu5d1Q9XJjZ3e1gdrIhNdAVqJ9gpI2dXpCctSIbp6BagfaKU6wWlxLrhT47RAxoYHDBVoXOYY6YzzvlDKPoIeG+EejPEeqtNZClEhITnuHKpuXpLUUYnftjqwO9ohefuOaiZEWTGVuyIzzJ6OIKffVeRkre0B5p7HRnUIXhxxxzd31qVup3U5OcDpWRmU8hgxu1WmOtWXEJ4b3p6+usFKUHEGqnQLbuU+RPlB99ZJS2lptOeCEJG6lI8AABWpSlBJJqUAACgUjp+7yrLcUTIxzjg42TwWnvBqVv9oizIyr5p8FyIrjIjgefGV38Pyfd6KrNbVsuEy2y0yoT62XU945EdCO8eFPjmF3o5MW+I4fZKfGb19ufmtWlTch21Xj5zdRa55+lj+Dunr1bP3j0VESGHY7hbdRuq9OQfQRwNLfHdxBqFNr654FY6UpS1NKUpQhKUpQhKUpQhK2bW02/c4rDoJbceQhQBxkFQBrWrbsvC8Qj/8AIb+IVJmLgou1SujvR7VF1AmxWbR5us7cCwhKd7A55yrPAdTVgh6d2kOIzC0dbbek8AXZCMj1JUD7KmtBOrhzNf3GOEJmRrawth0pBKCG3ld/dlKSR4CuMzNf61lpKXtUXTB5huQpHw4rbtFpMDyAaCppQAZGm5eXYbVapnxw3aMu1LrxJJFcACAutN6A2oyuLt3scFJ5hG8oj+4ffXl/ZddknN62loioP0koTuZ8OK0j2VxCXebxLGJV1nSB9rIWr3mtEkk5Jyaput17Op94q0NGW85ztbwYPMkrp+ttLWDTkyzSLTrMXqY5OQlxkOpWpKc538pJxxGOPPPgaw3V51G1eCkOrCS2kY3jjBSrhVAsxxd4R6SEfEKvd94bV7ceqUe5VPs0l5lQKek1WRA+EBkj75uuxIA8lK2m5TndoV1guSFKjMx8ttfzUnzOPtP31r2nUk17Q868TGmZDzDxQEbu6kjzcZ9G97K82X+VS8DrG/Q3UPZx/wAr7ynpJP8Al1e6aQVof9zwy+CX0bDTD/R4qauj2nzabVPnWGOtVxKEns0hJRkcTkYJrXnaZ0ku+osyBLjS3Gy4kNrJTjj3qz0Nad+OdIaXV0cb91Sk3htaheMQ/CuuOLXmjmg4s2bxiui80Va4jW27slDDQsKYuQm131Dio6yh1C2/oK6Eg+B7u6o97Qd8CA5FVEmNnilTTwwfvxU/pcZXrJP2jn+ZWkHXWdkjS2XVtq7cjKVEHHaGq7rPZ3MvFlMHHA7jTbVOE0wdQOriBiN4qqvL09fIoy/a5QHVLZUPvGajFpUhRStJSocwRgiuqXy63CPfdNsMylIak7nbJwPPyUg5++qVtE+uVw9KPgTVO2WSOFpcwnAgY94qrFntD5CA4ZivjRV+v3eVuhJJwOQr8pWcriUpShCUpShCUpShCUpShCVtWjhdYZ+3R8QrVrZtfC5xT9sj4hUmawUXZFfQOjfpbQk/lWpn/Dfr51r6K0Z/C9eJ/KtDXwPV861o6T7TmfNYOh/WrR7nyBKUpWYvQLZthxcop+2R8Qq+6i4bVbZ+a371VQLfwnxz9qn3ir/qXhtStX5rXxKrTsfZH2m/VUrT2g9ly2rTw2s3QdY36G6ibN/J1f09JKv1Klrf5u1u4eMYfCiouxj/AIE1Ino+r3Jq+cyO+RVBkPcS+H/gjTSujyPcalrhw2tW7xiH4XKiL39QtOHo+n9apa7Hd2sWvxikexyug4jjGg5Hg9YtLD8f1in7VXvcqMVx2Qp8JH+YaldLfxzq9P2ive5USnjsiV4SP8yonsvdf8y6Nfm3yW/qX+PNIK69n8SKrO0YY1lO/sfAmrLqc/upo5Xi3726rm0kY1lN9DfwJpFv1H+035U2yazeB81XKUpWKtJKUpQhKUpQhKUpQhKUpQhK2LdwuEY/ap94rXrNB4TmP6xPvqTdYLjsl9CaKP7r61R+VZmz/dd/1r51r6I0V9aNVt/l2JJ+4rH6a+d60dJ9pzPmsDRHrU/ufKlKUrMXoFmg8JrB+0T766BqnhtQtH5rXxqrn0ThKZP9NPvroOreG06znqGf8RVaVj7J3tN+qpWjtBwctyLw2ty/GKPhRUVY/qVqYdHl+4VKs8NrT/jFHwpqLsf1R1SOjq/dWidY8ZPJUxqjgzzWK9/yeafPSQP16l75w2qWg9Y//wClQ97P/LaxHpJH69TOoRjadZD1Zx7V1wbP+NdP/tedLfWDVo6rPvXUOzx2RveEkfGKmdLfWbVY6r/SuoaNx2RyvCSPjTXD2fKTzXRr82eS3dUH8c0ar+r97dQG0v64y/zW/gFT+pkqUvRikpKh83yGf+3UDtN+uEr8xv4BSLd2b+LflTbLrN4HzVZpSlYq0kpSlCEpSlCEpSlCEpSlCErLD4S2T9on31ir9BIIIOCORroNCgrtR1EvS2qLlLXaJs9mdaPJkFhHBLm8rAUenXv8K4u6060d1xtaD0UkirExrjUbSQkzUOAfltJJ+/Fbre0O743X4kF4eKFD9Nadoks9pdeLyOX5WZZ7M+zuc5rQSaVx3ZbFTaVdRraA6fxvS8F0HmRu59qTX58vaNe/f9MqRnn2ZH6CKR1aE6so5gj6K100gzjPxCp8fhIb/PHvroWseG0qyHqGf8RVRgk7PlLSsQri1g5xkkfEal5uqNHSrnHub8aU7KjgBtW5ywcjhnBwSat2eJkcZaZG4kHPcq8z3PeCGHI7N62EHG1pfjF/VFaWnYkp3T2qI6GHC4484lCd3BUcHgPGskraDaESFSItoddf3d0OuBKFEdMjJxUVN2i3Z3IjRYscdSCtQ/R7KtPtFla4kvri44DekNincAA2mAzO5TMjT9zn6CtdvbaS1KYdDi0OndwMr/8AsDU1ebQh3UsC9uzmmGoiClSV8N7n358a5lN1TqCXkO3R9IPc2Qgf3cVEOuuvL33XFuKPepRJqsdIwNFGsJyzNNXLJOFjlOs4DPLvzXVmp2lrPc7lON4Q6uaQXG0ntAOeQN0eNRSdVaUt1sVbINtflRlEqKHEjdUSc8d4k9O7urndKS7Skn8jQM9lc8800WFn8xJ/CvcnaNJ3QiFao7KUjCe0UVY9QxiqheblJu1wcnSykurAB3RgAAYFadKqzWuacUkdUJ8dnjiNWBKUpVZOSlKUISlKUISlTbWk9RONpcRa3t1QyMlIP3E1qXWy3S1oQufCcYQs4So4IJ6ZFNdBK0Xi004JYlYTQOCj6VtzrZPhMMPy4rrLb43mlKH0hX7brZcLiHTBiOyAynec3BnA/wBfCo9G+9dpipX20rXBadK9stOPOpaabW44o4SlKcknwFSy9L6gRHVIXa3w2lJUc4yB6M5oZE9+LQShz2tzNFDUpWSMw9JeSzHaW66o4ShCSSfUKiBXAKWSx0qWk6av0djt3bXJDYGSQnJA8QOIqJqT43swcKKLXtdqmqUqXj6av0hjt2rXJLZGQSnBI8AeJqMkMPRnlMyGltOoOFIWkgj1Gh0T2CrgQhr2uNAVjpWaRGkRw2ZDDrQcTvo30EbyeozzFZLdbp1xW4iDFckKbRvqCBnArgY4m6BiulwArVatK3LZbJ9zdU1AiOvqT9LdHBPpPIVInSGpAM/JTv8A7p/1qbIJXirWkjgoulY00JAUFSsimXUvlhTSw6FbhRu+dvZxjHWpT9i+oOw7b5Jk7vTd87/15+yotie/VBK657W5lQ9K/VpUhRQtJSpJwQRgg1Nab0nqPUaXF2S0SZiGzhbiAAgHpvHAz4ZqIaSaAKMkrIm33uAG84KEpU3qbSeotNBlV8tT8JL+Q2pRCkqI5jKSRnwrxE0xfpcZuSxbXVtODeQokDI68TU2wyON0NNeCi20RPYHtcCDtqKKHpUnc7BeLZHEidAcZaJ3d8kEZ9R4Vjtdmul0ClQITr6UnBUBhIPTJ4UdDJeu3TXdRT6RlL1cFoUrfutnudq3PlCG4wHM7pOCDjxFKi5rmGjhQqTXBwqCuhbNr/c7w9JYnupcSw0ndO7hROcZJ76p2r9QXO5yHYMp1BYYfVuJSgDiCQCfV76ndjv8PuH9Uj3mqbef44m/+Q58RrVtE8jrHHVxxrVUIYmC0voMqLputLJPvlltzUENlTeFK314/mivWzuw3CxompnpaHbFBRuL3uW9n3itbX9zn2yx2xyBKWwpeAopxxG6Otetl91uN0buBny1yC2Wwjex5ud7PL0CtMGDrwFDfpyyVEiXqpxF3xzXjZxbERrG9emo4kTHyvsgVBPmgkBIJ5ZIOT6KitU6i1fbHCxNRHipkJPZ9kkKwORwcniM1IbObuzItT1hVJMaS2pfYKBGSlRJ83PAkEnh/vWlqfSeppgcly7nHnJjoJRnKFbo4nCQMA+uq7rxsjer1y2Uz212pzbotDulpz8KbFQa6XpwRdL6G+W1MpdlyEgjPM5OEpz3DHE+vwrmldJ0nIgal0idOyneykspwnqQDlKgO/HIj/Ws/RhHSOprUNOKt27UFdWuPBREbaJekPKU8zEdQeSN0px6DmtjZrb2rrept5mNtnsV76UbvmhaiTnHhjh6fCjGzeb2q/KbnGbaHJSElRPpBxj76xbO7tGst7mWyU+2WHl7iXgfM3kkgHPQg8/RVmITtnj63lU0rvSX9EYn9Xz7l6ue0O5G4qMBphEVKsIS4kkrHUnPDPhUnqlMXU2iEX5tkNSmBk9QAcKST3jvH+5rVuWzp9y4KXb5rCYi1ZAczvIB7hgcfZWfWEmDp3SSdNxHe0kOJAX1AJypR6Z5AdD4U2lpDJetatD8dlEv9yXM6DOvhtqrNd7LEvliaiyRurDYLToHnNqxzHh1HfUJs0tcu0y7vEmNFK0qaAWB5qx53EHvFYto0t+DarNIjPFqQ24FIIPHgjj6Rx9tTmkNSRr9B3iUtS2h881n+8P6Pu994GF9rAOD2+NR9FWIkbZzTFp8MVF6J7YaEUbOGDcd9e/v8u03u/8As4x6q1LhM2gw4ypDjEZaEDKuzSlRA64zmq5oqDfpkuU5Y5yYvZ47RSl4SrOcDGDnke6ugacjaihuvu366xpEcN5SEgDdI45J3RgYzVazOdPEwC82gpUUphtTpw2J7jgdtDnwVe2fssM224asuPzz+84reIBIAGVEeJJx6vGoz9sS7+Xdr5PG8nz+84OcfndfH2VK6Nu1qmLutgdIbjSn3VRgfNCkL4bo6HvHp8K1P2tpfl2PlFjyTe+luntMejln10mloMLOqnjTf3plYhI7pxw4dy97SoUObaIepIaAlT26HOGCpKhkE+Ixj1+FdpsnyyzscsX7XjUBySWGirtyAOIPanpv7+c5/peFcT2lXOE1Ai6dt6gpMcp7TByEhIwlOe8959Aq9fg32i9s217UEm/rhWBtaz5JvjccUkectW9wQkdRgnHHAHGErm9bc1uZGJG/asXTcVbAyV5HoOqA6pDtwoPBVvbKnac/a4rmsIrSbcy5lCooQWw4RgFW6SQccBnhxrQ2Z3+5TJ6LTIdQuMzGO55g3hggAZ9BrtOtb7bNUbH9RXG3bzsMNOttrcTgLKFDzgOmRkZwfCuA7JvrQ5/4q/iTUIqxWtl1xIcm6HtBtFhkbJGGFhIoBTvy2HevOvtQXORcJtncdQIjb+AlKMEgcsmrjbvLhoa3fsZEYvdmje7TlyO/4b2918a5zrX613L+vNS+hrdqeRCdkWa4txGO03CHF8FKwM+bgjvHGuwWh/WnggurUYZjHYtmWFvQNIoKUOORWxqu3a1uTbKbhFS+2gkpTH3Tg9SBxpV40xGvsZl4XyezLUpQ7Ls043R35OB4d1KunRTJ/wB45zgTvpVVRb3Reg0DkuLRJcqG4XIkh5hZG6VNrKSR04ViJJOTxNflK8zU0otugzWaRLlSG2m5El51DQ3W0rWSEDoM8q/YsuVE3/JZLzHaJ3V9msp3h0OKsmn9LsXjRsu5pmxYkti4NMBcyUllktqbWogFXNWUjv5ZrxqjTkeJtDOmbc8UNLfYYbceWFAFxKMqJAGU5UTnpTLr8HqoLXCZHRbRUnlT7qsJJSQQSCOII7q3l3m7rjqjrucxTShulBeUQR051bJ2n9OSv2QWy1s3KLPsLLjypEp5JRKDawhwFASC2rJ80ZPQ8TmtPZ9A09cot2Td7bMkPQYLs9LjMwNBSUBPzZBQeZJ87PqrrWvaaA0qoG2xmMyXThTDCuORzVQr0hakLC0KKVA5BBwRVh0RbbZfNaNwpLTjVvcTId7PygIKUoaWtKS4U4A80AqxyycVrayj26LdwzbGGmWQ0kqDVxTMSVHPEOJSkcscMcMVC4bt5P6w0zdDTGldn37lpSLtdJLPYyLjLdaxjcW8og+rNaVTWs7ZFtF7EOIXC35JGeO+rJ3nGELV6sqOPCpzTtgsdy0n2sZD90viw8XIrc1DDscIGUFtpSSXwQCpW6cgAjHfUi173EE4hQdao44my0wdTxxx2D9DNVaPd7rHY7Bi5S2msYCEPKAHqzWmtSlqK1qKlE5JJyTX5V12aaYt19YuEm7CUGWtxtjsnAjtXDkqQ3kHfe3UkpbA848yOGeNvyENqp2iaOzRmV2SqEmVJkpbTIkOvBpO62FrKt0dBnkKxpUpBJSopyMHBxkVluESRAmvQ5TSmX2VlDjavpJUOYPiKm9nVnjX3VTNulsPyG1MPuBlhwIW6pDS1pQFEEDJSBnHfXAHOdTapSSsiiMp1QK8s1CwZ02CtS4Ut+OpQwotLKcjxxWaXd7rLZLMq5S3mzzQt5RB9WanNolgh2N63FhiTAkSmC5It0h4OuRSFEJysAAhQG8OGR91Sep9P2C06QgymmA5OlW6PJK3LqhLiVuAE4j7m8U9DnlxplJAC2uAVbrkLgxwFbxoMtnPyrXZVUKt75Yu3Ydh8pzOyxjc7dWMdOdWHQNnsV1jSROJlXLtUNxoPlyIfaJVnKkOLSUqXndARwznPHlWjpuwN3HVjtqneVxGYwfdkNhAMgJZSpam0pOAXMJI9PoqLQ8UunNTdaoqvDhqYn8bfDgq9W21c7k1bXbY1PlNwXlBbkdLqg2tQ7ynOCeX3Cp29W6yS9KnUNkiz4CWJqYb0eS8HkrK0KWlaFhKeOEHeTjhlJzxqwaI0XbbxpeBPkW24SBKlPtS5rMtDTdvbQEYcUlSTvDClE8RwTQ2JxNAlzW6Fkd+QbaUNMDnvp8DwxVCaudxatrtsanykQXVhbkZLqg2tQ5EpzgngPuFYIz78Z5L0d5xlxPJaFFJHrFTuiYlnmauiWm5x35kebJbiNuMP9iUFbgSHOKTkYJO7w9NYry1ZDqzyOO1JtttbkBh5a3fKFpSF4U4MJTnhx3fbXKGgdVOEzBIYw05VJw/+15KFWpS1qWtRUpRypROST1rZg3K4QUqTCnSI6VHKg04Ugn1VZNoFktlubYlWOK4q3qdWyiam4IlNP4AKc7qUltzByUK6jFVCg3o3YHFTglZaIw8DA8PytyXdLnLATKuEp8J4gLdUQPbStOlRL3E1JTg0DIJSlKiuqwsrX+1xKb31bnyuyrdzwz2LvHFfu0dxx3WU1x1xa1lLOVKOT+9I76Up7uz+H1WVD62ff8A+iv+1KVKVsk06+qS8p2d2RlrKzvSMNkjtD/PweIzmqFoV1xsX7s3Fo37LISrdOMg7uQfClKdN2w4LL0Z/Dn+19ln2RKUnaLaN1RGVrScHmC2oEesHFT/AOELHYj6tgojsNspMBJIQgJBPaL6UpSx6ueP2V2T+Lt9j6uVn2gstL2IwZS2kKkFiIC6UgrxgDGefLhUfop11Ow67SUuLS/FDyY7gUQpoKxvBJ5pzk5xzyaUqz/V5LF/wA/ufRcerp+wtxwxtRNlaihmKJDSc8G3U7264noodyhxFKVUs3aBeg056k7l5hVHaKSrWdwWokqWUKUo81KLaSSepJJNedBqUi+uFCik+QyxkHHAx3KUrn9bmmf5f7n0WfU61u6O0qt1alrDMhsKUckJS8cJ9AycDxrqU1tuRsEEl9tDrzdsbQhxY3lJSCnABPEAdKUp8ebuH0WRbNWD+4fmKhPwfSVwL62slSGkoebSeIQ4AcLHRQ6865pZpktGpYk1Ep9MoykrLwcIWVFXE73PJyeNKVw6kadH61a+A8l0H8IpSmr3bYbSiiMIxcDKThAWVHKt3lk4HGojS0mQ0NClp91vdvDyRurIwFLYCh6wSD1FKVJ3bnl5hIg/hjPf+V6gdPfNbQbcW/M3Lq1u7vDdw6MYrXLrqNYF5Di0upuG8FhRCgrtM5z1pSqw1RxW0/tHex910D8IglqfaI7RKGVsreU2nglThIBWRyKiAOPOuU0pU7T2hSNBeos5+ZSlKVXWuv/Z" alt="The Consorts Hotels & Resorts">
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="brand-name">The Consorts Hotels & Resorts</div>
        <span class="tag tag-social">Social Media</span>
      </div>
      <div class="industry">Hospitality · Hunza Valley</div>
      <div class="divider"></div>
      <div class="card-chips">
        <span class="chip">World Health Day</span>
        <span class="chip">Zipline Campaign</span>
        <span class="chip">Honeymoon Packages</span>
        <span class="chip">Hunza Poetic</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="posts-count">6 posts delivered</span>
      <div class="arrow">
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M11 3H6M11 3V8"/></svg>
      </div>
    </div>
  </div>

  <!-- VIRCONIA -->
  <div class="card" data-type="social" data-accent="gold">
    <div class="card-logo-area bg-virconia">
      <img src="data:image/png;base64,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" alt="Virconia Perfumes">
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="brand-name">Virconia Perfumes</div>
        <span class="tag tag-luxury">Luxury</span>
      </div>
      <div class="industry">Fragrance · Premium Brand</div>
      <div class="divider"></div>
      <div class="card-chips">
        <span class="chip">Identity Campaign</span>
        <span class="chip">Essence of Elegance</span>
        <span class="chip">Brand Storytelling</span>
        <span class="chip">Product Launch</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="posts-count">6 posts delivered</span>
      <div class="arrow">
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M11 3H6M11 3V8"/></svg>
      </div>
    </div>
  </div>

  <!-- BUSHIRTS -->
  <div class="card" data-type="fashion" data-accent="white">
    <div class="card-logo-area bg-bushirts">
      <img src="data:image/png;base64,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" alt="Bushirts by Mir Dilawer">
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="brand-name">Bushirts by Mir Dilawer</div>
        <span class="tag tag-fashion">Fashion</span>
      </div>
      <div class="industry">Menswear · Lifestyle</div>
      <div class="divider"></div>
      <div class="card-chips">
        <span class="chip">Festive Collection '25</span>
        <span class="chip">Daily Energy</span>
        <span class="chip">Elevated Style</span>
        <span class="chip">Coming Soon</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="posts-count">6 posts delivered</span>
      <div class="arrow">
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M11 3H6M11 3V8"/></svg>
      </div>
    </div>
  </div>

  <!-- PROCTOR -->
  <div class="card" data-type="edu" data-accent="blue">
    <div class="card-logo-area bg-proctors">
      <img src="data:image/png;base64,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PMWxtABPuvk60203QXM0UP40N5fX5frx7ZXeKj5QFxexr2FjwC1wwQfK5Ig8w2CyGjNGbXSmnL+cx+mOXm98e6+htNs/HRV5oofxUTORkvL9TW+wK7yEdEEIURBBTwpUIAPuum22W5tzNyFHCK0jlM3KOYj2yu58pjKCE+VKIOnT2y3U9fLXwUcMdXKMSTBuHO+5UXO02y5vhkuFFDUPgdzROe3JYfcLup4QQOmAB08KURB1ILZbobhJcIaOGOrlGHzNbhzvuVxktNslubLlJQwurWDDZ+UcwH3XdRAQ9e6IEFOV+hdHV1Q+oq9PUE0rzlz3RDJK9OxWS0WKmdTWe3wUcLjzOZE3AJXodkQF86qnhq6eSmqYmywyDlexwyCF9UQdaloKKloRQ09NFHSgcoia3DcfZRbbbQWyEw2+kipo3HmLY24GV2kQSnlApQFHhE+EBFKIIUqAmUEoiICeEQ/ZBIRQpQEREBERAREQEREBERAREQEREBERAREQEREAoieEEIhQoCIiDjhPCnsVCAiIgg9lA6FckQR26op6dkQQECjypQEQJ2KCM4UphMeUDygUqD7oJHVQpCgoJRQfdSgIieEEjunhOynwggIiIJREQcQpChEEoilAREQO6lQpQEREBERAREQEREBERAREQEREBERAREQEREBERAHZR4QJlAUKfCIIQ9k8oghCiICJ90QQe/RT4REA9VGFKIHlE6ogjyg90KIJRQECCUREBERARFOEDuiYRAx1UoiAiIg4p5wiIJQIiCUREBERBKYREBERAREQEREBERAREQEREBERAREQEREAoiIIHdMIiAgREEHuhREAoQiIIAREQEREDCjPVEQB3UoiCB7KURAREQEREBAiIJ8oiIBUoiAiIgIiIP/Z" alt="Proctor Exam Taker">
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="brand-name">Proctor Exam Taker</div>
        <span class="tag tag-edu">Education</span>
      </div>
      <div class="industry">Exam Assistance · Certification</div>
      <div class="divider"></div>
      <div class="card-chips">
        <span class="chip">HESI Exam</span>
        <span class="chip">TEAS Exam</span>
        <span class="chip">Nursing Exams</span>
        <span class="chip">GED · CNA</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="posts-count">6 posts delivered</span>
      <div class="arrow">
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M11 3H6M11 3V8"/></svg>
      </div>
    </div>
  </div>

  <!-- TRAVEL WALA -->
  <div class="card" data-type="travel" data-accent="navy">
    <div class="card-logo-area bg-travelwala">
      <img src="data:image/png;base64,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" alt="Travel Wala">
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="brand-name">Travel Wala</div>
        <span class="tag tag-travel">Travel</span>
      </div>
      <div class="industry">Tourism · Packages · Karachi</div>
      <div class="divider"></div>
      <div class="card-chips">
        <span class="chip">Trip to Bali</span>
        <span class="chip">Umrah Visa</span>
        <span class="chip">Thailand '26</span>
        <span class="chip">Dream Trips</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="posts-count">6 posts delivered</span>
      <div class="arrow">
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M11 3H6M11 3V8"/></svg>
      </div>
    </div>
  </div>

  <!-- POWER-EX -->
  <div class="card" data-type="social" data-accent="amber">
    <div class="card-logo-area bg-powerex">
      <img src="data:image/png;base64,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" alt="Power-EX Lubricants">
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="brand-name">Power-EX Lubricants</div>
        <span class="tag tag-auto">Automotive</span>
      </div>
      <div class="industry">Lubricants · Engine Performance</div>
      <div class="divider"></div>
      <div class="card-chips">
        <span class="chip">Smooth Riding</span>
        <span class="chip">Feel the Power</span>
        <span class="chip">Don't Compromise</span>
        <span class="chip">Engine Quality</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="posts-count">3 posts delivered</span>
      <div class="arrow">
        <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 11L11 3M11 3H6M11 3V8"/></svg>
      </div>
    </div>
  </div>

</div>

<!-- CTA -->
<div class="cta-section">
  <div class="cta-left">
    <h2>Want your brand<br>on <em>this list?</em></h2>
    <p>Let's build something your audience won't scroll past.</p>
  </div>
  <button class="cta-btn">Work with SQRD Digital →</button>
</div>

<script>
function filter(type, btn) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.card').forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
</script>
</body>
</html>
        ` 
      }}
    />
  );
}