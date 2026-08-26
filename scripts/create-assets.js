const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'images');
const worksDir = path.join(imagesDir, 'works');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(worksDir)) fs.mkdirSync(worksDir, { recursive: true });

// 1. Profile placeholder (Modern editorial SVG)
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750">
  <defs>
    <linearGradient id="pbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181B" />
      <stop offset="50%" stop-color="#27272A" />
      <stop offset="100%" stop-color="#09090B" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#4F46E5" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur" />
    </filter>
  </defs>
  <rect width="600" height="750" fill="url(#pbg)" />
  <circle cx="300" cy="280" r="160" fill="url(#accent)" opacity="0.15" filter="url(#glow)" />
  
  <line x1="0" y1="550" x2="600" y2="550" stroke="#3F3F46" stroke-width="1" opacity="0.4" />
  <line x1="150" y1="0" x2="150" y2="750" stroke="#3F3F46" stroke-width="1" stroke-dasharray="4 4" opacity="0.2" />
  <line x1="450" y1="0" x2="450" y2="750" stroke="#3F3F46" stroke-width="1" stroke-dasharray="4 4" opacity="0.2" />

  <circle cx="300" cy="270" r="85" fill="#3F3F46" opacity="0.6" />
  <circle cx="300" cy="270" r="75" fill="#52525B" />
  <path d="M 180 540 C 180 410, 420 410, 420 540 Z" fill="#3F3F46" opacity="0.8" />
  <path d="M 210 540 C 210 430, 390 430, 390 540 Z" fill="#52525B" />

  <text x="300" y="280" font-family="-apple-system, sans-serif" font-size="36" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">YN</text>
  
  <rect x="180" y="600" width="240" height="36" rx="18" fill="#18181B" stroke="#3F3F46" stroke-width="1" />
  <text x="300" y="623" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#E4E4E7" text-anchor="middle" letter-spacing="1.5">YUKI NAKAMURA</text>
  <text x="300" y="655" font-family="-apple-system, sans-serif" font-size="11" fill="#A1A1AA" text-anchor="middle">WEB DESIGNER / FRONT-END</text>
</svg>`;

// 2. Project 01: Artisan Coffee Roasters
const project01Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="cbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c1917" />
      <stop offset="100%" stop-color="#0c0a09" />
    </linearGradient>
    <linearGradient id="amber" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#cbg)" />
  <rect x="80" y="60" width="1040" height="630" rx="16" fill="#292524" stroke="#44403c" stroke-width="1.5" />
  <circle cx="115" cy="90" r="6" fill="#ef4444" opacity="0.8" />
  <circle cx="135" cy="90" r="6" fill="#eab308" opacity="0.8" />
  <circle cx="155" cy="90" r="6" fill="#22c55e" opacity="0.8" />
  <rect x="200" y="78" width="600" height="24" rx="6" fill="#1c1917" />
  <text x="500" y="94" font-family="-apple-system, sans-serif" font-size="11" fill="#a8a29e" text-anchor="middle">artisan-coffee-roasters.concept</text>

  <rect x="120" y="140" width="960" height="500" fill="#0c0a09" rx="8" />
  <text x="180" y="240" font-family="-apple-system, serif" font-size="44" font-weight="700" fill="#fafaf9" letter-spacing="1">Artisan Coffee Roasters</text>
  <text x="180" y="280" font-family="-apple-system, sans-serif" font-size="18" fill="#d6d3d1">Crafted with patience. Brewed with passion.</text>
  
  <rect x="180" y="320" width="160" height="44" rx="22" fill="url(#amber)" />
  <text x="260" y="347" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#ffffff" text-anchor="middle">VIEW MENU</text>

  <rect x="680" y="200" width="180" height="220" rx="12" fill="#1c1917" stroke="#44403c" stroke-width="1" />
  <rect x="700" y="220" width="140" height="110" rx="8" fill="#292524" />
  <text x="770" y="360" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#fafaf9" text-anchor="middle">Ethiopia Yirgacheffe</text>
  <text x="770" y="385" font-family="-apple-system, sans-serif" font-size="12" fill="#d97706" text-anchor="middle">Floral &amp; Citrus</text>

  <rect x="880" y="200" width="180" height="220" rx="12" fill="#1c1917" stroke="#44403c" stroke-width="1" />
  <rect x="900" y="220" width="140" height="110" rx="8" fill="#292524" />
  <text x="970" y="360" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#fafaf9" text-anchor="middle">Guatemala Antigua</text>
  <text x="970" y="385" font-family="-apple-system, sans-serif" font-size="12" fill="#d97706" text-anchor="middle">Chocolate &amp; Nut</text>
</svg>`;

// 3. Project 02: SaaS Analytics LP
const project02Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="sbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#sbg)" />
  <rect x="80" y="60" width="1040" height="630" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" />
  <circle cx="115" cy="90" r="6" fill="#ef4444" opacity="0.8" />
  <circle cx="135" cy="90" r="6" fill="#eab308" opacity="0.8" />
  <circle cx="155" cy="90" r="6" fill="#22c55e" opacity="0.8" />
  <rect x="200" y="78" width="600" height="24" rx="6" fill="#020617" />
  <text x="500" y="94" font-family="-apple-system, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">saas-analytics-preview.concept</text>

  <rect x="120" y="140" width="960" height="500" fill="#020617" rx="8" />
  <text x="180" y="220" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" letter-spacing="2">NEXT-GEN ANALYTICS</text>
  <text x="180" y="265" font-family="-apple-system, sans-serif" font-size="38" font-weight="700" fill="#f8fafc">Data-Driven Insights for Fast Teams</text>
  
  <rect x="180" y="320" width="560" height="260" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
  <path d="M 220 500 Q 300 420, 380 460 T 540 380 T 700 360" fill="none" stroke="#4f46e5" stroke-width="3" />
  <path d="M 220 500 Q 300 420, 380 460 T 540 380 T 700 360 L 700 540 L 220 540 Z" fill="#4f46e5" opacity="0.1" />

  <rect x="770" y="320" width="270" height="120" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
  <text x="800" y="355" font-family="-apple-system, sans-serif" font-size="12" fill="#94a3b8">Active Users</text>
  <text x="800" y="395" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#38bdf8">+142.8%</text>

  <rect x="770" y="460" width="270" height="120" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
  <text x="800" y="495" font-family="-apple-system, sans-serif" font-size="12" fill="#94a3b8">Conversion Rate</text>
  <text x="800" y="535" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#10b981">4.82%</text>
</svg>`;

// 4. Project 03: Studio Arch Architects
const project03Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="abg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#abg)" />
  <rect x="80" y="60" width="1040" height="630" rx="16" fill="#27272a" stroke="#3f3f46" stroke-width="1.5" />
  <circle cx="115" cy="90" r="6" fill="#ef4444" opacity="0.8" />
  <circle cx="135" cy="90" r="6" fill="#eab308" opacity="0.8" />
  <circle cx="155" cy="90" r="6" fill="#22c55e" opacity="0.8" />
  <rect x="200" y="78" width="600" height="24" rx="6" fill="#18181b" />
  <text x="500" y="94" font-family="-apple-system, sans-serif" font-size="11" fill="#a1a1aa" text-anchor="middle">studio-arch-architects.concept</text>

  <rect x="120" y="140" width="960" height="500" fill="#18181b" rx="8" />
  <text x="180" y="240" font-family="-apple-system, serif" font-size="44" font-weight="300" fill="#f4f4f5" letter-spacing="4">STUDIO ARCH</text>
  <text x="180" y="280" font-family="-apple-system, sans-serif" font-size="14" fill="#a1a1aa" letter-spacing="1">ARCHITECTURAL DESIGN &amp; SPATIAL STRUCTURES</text>

  <rect x="180" y="320" width="400" height="260" rx="8" fill="#27272a" stroke="#3f3f46" stroke-width="1" />
  <line x1="180" y1="450" x2="580" y2="350" stroke="#71717a" stroke-width="1.5" opacity="0.5" />
  <text x="210" y="550" font-family="-apple-system, sans-serif" font-size="13" fill="#e4e4e7" font-weight="600">House of Light / 2024</text>

  <rect x="610" y="320" width="430" height="260" rx="8" fill="#27272a" stroke="#3f3f46" stroke-width="1" />
  <line x1="610" y1="350" x2="1040" y2="500" stroke="#71717a" stroke-width="1.5" opacity="0.5" />
  <text x="640" y="550" font-family="-apple-system, sans-serif" font-size="13" fill="#e4e4e7" font-weight="600">Monolith Pavilion / 2023</text>
</svg>`;

fs.writeFileSync(path.join(imagesDir, 'profile.jpg'), profileSvg);
fs.writeFileSync(path.join(worksDir, 'project-01.jpg'), project01Svg);
fs.writeFileSync(path.join(worksDir, 'project-02.jpg'), project02Svg);
fs.writeFileSync(path.join(worksDir, 'project-03.jpg'), project03Svg);

console.log('Images created successfully in public/images');
