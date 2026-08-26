const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. プロフィール画像 SVG (1200x1500 - 4:5 比率)
const profileSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" width="1200" height="1500">
  <defs>
    <!-- 背景グラデーション（自然なスタジオ光とワークスペース） -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="40%" stop-color="#F1F5F9" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" />
      <stop offset="50%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="innerShirt" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FDE8D7" />
      <stop offset="70%" stop-color="#FCD5B5" />
      <stop offset="100%" stop-color="#F7C49D" />
    </linearGradient>
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D282A" />
      <stop offset="60%" stop-color="#1C1917" />
      <stop offset="100%" stop-color="#0C0A09" />
    </linearGradient>
    <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </linearGradient>
    <filter id="softBlur">
      <feGaussianBlur stdDeviation="16" />
    </filter>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- 全体背景 -->
  <rect width="1200" height="1500" fill="url(#bgGrad)" />

  <!-- ワークスペースの背景要素（ぼかしたミニマルインテリア） -->
  <rect x="0" y="0" width="1200" height="600" fill="#F8FAFC" />
  <!-- 窓からの自然光の陰影 -->
  <polygon points="0,0 700,0 450,900 0,900" fill="#FFFFFF" opacity="0.6" />
  <rect x="150" y="180" width="220" height="340" rx="8" fill="#E2E8F0" opacity="0.35" filter="url(#softBlur)" />
  <rect x="850" y="140" width="260" height="400" rx="12" fill="#CBD5E1" opacity="0.3" filter="url(#softBlur)" />

  <!-- ミニマルな観葉植物の柔らかなシルエット -->
  <circle cx="1080" cy="520" r="90" fill="#64748B" opacity="0.12" filter="url(#softBlur)" />
  <circle cx="1120" cy="440" r="70" fill="#64748B" opacity="0.1" filter="url(#softBlur)" />

  <!-- デスク（下部） -->
  <rect x="0" y="1020" width="1200" height="480" fill="url(#deskGrad)" />
  <line x1="0" y1="1020" x2="1200" y2="1020" stroke="#CBD5E1" stroke-width="2" />

  <!-- デスク上の薄型ノートPC（ミニマルなエッジ） -->
  <rect x="160" y="990" width="280" height="8" rx="4" fill="#94A3B8" />
  <polygon points="175,990 425,990 405,820 195,820" fill="#0F172A" opacity="0.85" rx="4" />
  <polygon points="178,988 422,988 403,824 197,824" fill="#1E293B" />
  <polygon points="182,984 418,984 400,828 200,828" fill="#38BDF8" opacity="0.3" />

  <!-- デスク上のデザインノートとペン -->
  <rect x="860" y="1040" width="180" height="240" rx="6" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.5" transform="rotate(-6 860 1040)" />
  <line x1="840" y1="1070" x2="845" y2="1230" stroke="#0F172A" stroke-width="5" stroke-linecap="round" />

  <!-- 人物の影 -->
  <ellipse cx="600" cy="1120" rx="340" ry="60" fill="url(#shadowGrad)" />

  <!-- 人物：体（チャコールグレーの上質なクルーネック＋ジャケットスタイル） -->
  <!-- 肩・胴体 -->
  <path d="M 280 1500 L 290 1020 C 300 880, 420 800, 490 770 L 600 750 L 710 770 C 780 800, 900 880, 910 1020 L 920 1500 Z" fill="url(#suitGrad)" />
  
  <!-- インナー（清潔感のあるオフホワイト・クリーンクルーネック） -->
  <path d="M 520 765 C 520 860, 680 860, 680 765 Z" fill="url(#innerShirt)" />

  <!-- 首元 -->
  <path d="M 525 610 L 525 760 C 560 780, 640 780, 675 760 L 675 610 Z" fill="url(#skinGrad)" />
  <!-- 首の自然な陰影 -->
  <path d="M 535 680 C 580 725, 620 725, 665 680 L 675 750 C 640 775, 560 775, 525 750 Z" fill="#E2A980" opacity="0.45" />

  <!-- 顔の輪郭（知的で落ち着いた20代後半日本人男性） -->
  <path d="M 450 430 C 450 330, 750 330, 750 430 C 750 560, 700 665, 600 670 C 500 665, 450 560, 450 430 Z" fill="url(#skinGrad)" />
  <!-- 頬とあごの自然なシェーディング -->
  <path d="M 460 510 C 490 610, 560 655, 600 660 C 640 655, 710 610, 740 510 C 710 635, 640 670, 600 670 C 560 670, 490 635, 460 510 Z" fill="#E2A980" opacity="0.35" />

  <!-- 耳 -->
  <path d="M 445 440 C 430 455, 430 510, 450 525 Z" fill="#F7C49D" />
  <path d="M 755 440 C 770 455, 770 510, 750 525 Z" fill="#F7C49D" />

  <!-- 髪型（清潔感のあるナチュラルな黒髪・サイドすっきり・自然な毛流れ） -->
  <path d="M 435 410 C 430 280, 540 210, 620 210 C 730 210, 770 290, 765 410 C 740 340, 720 330, 680 320 C 600 300, 530 330, 470 370 C 455 380, 445 395, 435 410 Z" fill="url(#hairGrad)" />
  <path d="M 440 370 C 460 300, 560 220, 650 220 C 740 220, 760 280, 760 370 C 740 320, 700 290, 640 285 C 570 280, 500 310, 440 370 Z" fill="#0C0A09" opacity="0.4" />
  <!-- 前髪の自然な流し -->
  <path d="M 445 380 C 480 340, 530 335, 570 360 C 540 350, 490 355, 460 395 Z" fill="url(#hairGrad)" />
  <path d="M 550 345 C 600 325, 660 330, 700 365 C 670 345, 620 340, 570 360 Z" fill="url(#hairGrad)" />

  <!-- 眉（整った自然な黒眉） -->
  <path d="M 485 415 C 515 405, 545 408, 565 420" stroke="#1E293B" stroke-width="5" stroke-linecap="round" fill="none" />
  <path d="M 635 420 C 655 408, 685 405, 715 415" stroke="#1E293B" stroke-width="5" stroke-linecap="round" fill="none" />

  <!-- 目（親しみやすく知性のある自然な眼差し） -->
  <!-- 左目 -->
  <ellipse cx="525" cy="455" rx="20" ry="12" fill="#FFFFFF" />
  <circle cx="527" cy="454" r="9" fill="#1C1917" />
  <circle cx="529" cy="452" r="3.5" fill="#FFFFFF" />
  <path d="M 505 450 C 520 440, 535 440, 548 450" stroke="#0F172A" stroke-width="3" stroke-linecap="round" fill="none" />
  <path d="M 508 460 C 522 466, 533 466, 545 460" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" fill="none" />

  <!-- 右目 -->
  <ellipse cx="675" cy="455" rx="20" ry="12" fill="#FFFFFF" />
  <circle cx="673" cy="454" r="9" fill="#1C1917" />
  <circle cx="675" cy="452" r="3.5" fill="#FFFFFF" />
  <path d="M 652 450 C 665 440, 680 440, 695 450" stroke="#0F172A" stroke-width="3" stroke-linecap="round" fill="none" />
  <path d="M 655 460 C 667 466, 678 466, 692 460" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" fill="none" />

  <!-- 鼻（立体的で自然なライン） -->
  <path d="M 596 440 L 594 515 C 585 522, 615 522, 606 515" stroke="#D97706" stroke-opacity="0.3" stroke-width="2.5" fill="none" stroke-linejoin="round" />
  <circle cx="587" cy="517" r="3" fill="#D97706" opacity="0.25" />
  <circle cx="613" cy="517" r="3" fill="#D97706" opacity="0.25" />

  <!-- 口（信頼感と親しみやすさのある微笑み） -->
  <path d="M 555 570 C 580 592, 620 592, 645 570" stroke="#B45309" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" fill="none" />
  <path d="M 565 575 C 585 590, 615 590, 635 575" stroke="#E11D48" stroke-opacity="0.15" stroke-width="3" stroke-linecap="round" fill="none" />

  <!-- オーバーレイ情報カード（プロフィール下部の上品なネームプレート） -->
  <g filter="url(#cardShadow)">
    <rect x="360" y="1320" width="480" height="96" rx="20" fill="#FFFFFF" fill-opacity="0.92" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="600" y="1358" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#0F172A" text-anchor="middle" letter-spacing="1.5">中村 優希</text>
    <text x="600" y="1390" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#64748B" text-anchor="middle" letter-spacing="2">WEB DESIGNER / FRONT-END</text>
  </g>
</svg>
`;

// 2. Project 01: 日本のカフェ・コーヒーショップ KOMOREBI COFFEE ROASTERS (2400x1500)
const project01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1500" width="2400" height="1500">
  <defs>
    <!-- 背景：落ち着いたモダンアースカラー -->
    <linearGradient id="bg01" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F3EF" />
      <stop offset="100%" stop-color="#E8E2D8" />
    </linearGradient>
    <linearGradient id="coffeeBrown" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350F" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="warmWood" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#292524" />
      <stop offset="100%" stop-color="#1C1917" />
    </linearGradient>
    <filter id="shadow01" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#1C1917" flood-opacity="0.14" />
    </filter>
    <filter id="phoneShadow" x="-10%" y="-5%" width="120%" height="120%">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#1C1917" flood-opacity="0.22" />
    </filter>
  </defs>

  <!-- 全体背景 -->
  <rect width="2400" height="1500" fill="url(#bg01)" />

  <!-- 装飾：柔らかな円とグリッド -->
  <circle cx="300" cy="300" r="280" fill="#D7C9B8" opacity="0.3" />
  <circle cx="2100" cy="1200" r="360" fill="#D7C9B8" opacity="0.3" />

  <!-- カテゴリ＆タイトルバッジ（上部ヘッダー） -->
  <rect x="160" y="80" width="340" height="44" rx="22" fill="#FFFFFF" stroke="#D7C9B8" stroke-width="1.5" />
  <circle cx="185" cy="102" r="6" fill="#92400E" />
  <text x="205" y="110" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#78350F" letter-spacing="1">CONCEPT PROJECT / CAFE</text>

  <!-- ==================== PCブラウザ モックアップ ==================== -->
  <g filter="url(#shadow01)" transform="translate(160, 160)">
    <!-- ウィンドウ外枠 -->
    <rect width="1540" height="1180" rx="20" fill="#FFFFFF" stroke="#E2DCD2" stroke-width="2" />
    
    <!-- ブラウザヘッダーバー -->
    <path d="M 0 20 Q 0 0 20 0 L 1520 0 Q 1540 0 1540 20 L 1540 64 L 0 64 Z" fill="#F7F5F0" />
    <line x1="0" y1="64" x2="1540" y2="64" stroke="#E2DCD2" stroke-width="1" />
    
    <!-- ウィンドウボタン -->
    <circle cx="36" cy="32" r="7" fill="#EF4444" opacity="0.8" />
    <circle cx="60" cy="32" r="7" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="32" r="7" fill="#10B981" opacity="0.8" />
    
    <!-- URLバー -->
    <rect x="140" y="16" width="600" height="32" rx="8" fill="#FFFFFF" stroke="#E2DCD2" stroke-width="1" />
    <text x="160" y="37" font-family="-apple-system, sans-serif" font-size="13" fill="#78716C">komorebi-coffee-roasters.concept</text>

    <!-- ===== Webサイトコンテンツ ===== -->
    <!-- ナビゲーションバー -->
    <g transform="translate(0, 64)">
      <rect width="1540" height="80" fill="#FFFFFF" />
      <line x1="0" y1="80" x2="1540" y2="80" stroke="#F0EBE1" stroke-width="1" />
      
      <!-- ロゴ -->
      <text x="60" y="48" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="22" font-weight="700" fill="#292524" letter-spacing="3">KOMOREBI COFFEE</text>
      <text x="360" y="48" font-family="-apple-system, sans-serif" font-size="11" fill="#A8A29E" letter-spacing="1">木漏れ日珈琲 焙煎所</text>

      <!-- メニューリンク -->
      <text x="960" y="47" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="#44403C">ABOUT</text>
      <text x="1060" y="47" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="#44403C">MENU</text>
      <text x="1150" y="47" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="#44403C">BEANS</text>
      <text x="1240" y="47" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="#44403C">ACCESS</text>

      <rect x="1350" y="20" width="130" height="40" rx="20" fill="url(#coffeeBrown)" />
      <text x="1415" y="45" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">ONLINE SHOP</text>
    </g>

    <!-- ヒーローセクション -->
    <g transform="translate(0, 144)">
      <rect width="1540" height="520" fill="url(#warmWood)" />
      
      <!-- ヒーロー写真風エリア（温かいカフェ店内の抽象ビジュアル） -->
      <rect x="740" y="40" width="740" height="440" rx="16" fill="#1C1917" stroke="#44403C" stroke-width="1" />
      <circle cx="1110" cy="240" r="160" fill="#B45309" opacity="0.25" />
      <circle cx="1200" cy="280" r="100" fill="#D97706" opacity="0.2" />
      <text x="1110" y="245" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="28" font-weight="400" fill="#FAF8F5" text-anchor="middle" letter-spacing="4">一杯の珈琲が繋ぐ、穏やかな時間。</text>
      <rect x="1000" y="320" width="220" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.12" stroke="#FFFFFF" stroke-opacity="0.2" />
      <text x="1110" y="343" font-family="-apple-system, sans-serif" font-size="12" fill="#E7E5E4" text-anchor="middle" letter-spacing="1">SPECIALTY COFFEE &amp; BAKE</text>

      <!-- 左側キャッチコピー -->
      <text x="80" y="140" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#D97706" letter-spacing="3">CRAFTED WITH PATIENCE</text>
      <text x="80" y="220" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="44" font-weight="700" fill="#FAFAF9" letter-spacing="2">日常に寄り添う、</text>
      <text x="80" y="280" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="44" font-weight="700" fill="#FAFAF9" letter-spacing="2">一杯の余白。</text>
      
      <text x="80" y="340" font-family="-apple-system, sans-serif" font-size="16" fill="#D6D3D1" line-height="26">厳選されたシングルオリジンと、丁寧に焼き上げた自家製ベイク。<br />静かな木漏れ日が差し込む店内で、心ほどけるひとときをお届けします。</text>

      <!-- CTAボタン -->
      <rect x="80" y="410" width="180" height="48" rx="24" fill="url(#coffeeBrown)" />
      <text x="170" y="440" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">メニューを見る</text>
      
      <rect x="280" y="410" width="180" height="48" rx="24" fill="#292524" stroke="#57534E" stroke-width="1.5" />
      <text x="370" y="440" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#E7E5E4" text-anchor="middle">店舗・アクセス</text>
    </g>

    <!-- 下部：メニュー紹介カード 3枚 -->
    <g transform="translate(60, 700)">
      <text x="20" y="30" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="22" font-weight="700" fill="#292524">RECOMMENDED MENU</text>
      
      <!-- カード1 -->
      <rect x="20" y="60" width="440" height="320" rx="14" fill="#FDFBF7" stroke="#E7E2D8" stroke-width="1" />
      <rect x="40" y="80" width="400" height="150" rx="10" fill="#EAE4D9" />
      <text x="240" y="165" font-family="-apple-system, serif" font-size="18" fill="#78350F" text-anchor="middle">Hand Drip Coffee</text>
      <text x="40" y="265" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#292524">深煎り エチオピア・イルガチェフェ</text>
      <text x="40" y="295" font-family="-apple-system, sans-serif" font-size="13" fill="#78716C">華やかな柑橘のアロマと豊かなコク</text>
      <text x="400" y="350" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#92400E" text-anchor="end">¥650 (tax incl.)</text>

      <!-- カード2 -->
      <rect x="490" y="60" width="440" height="320" rx="14" fill="#FDFBF7" stroke="#E7E2D8" stroke-width="1" />
      <rect x="510" y="80" width="400" height="150" rx="10" fill="#EAE4D9" />
      <text x="710" y="165" font-family="-apple-system, serif" font-size="18" fill="#78350F" text-anchor="middle">Cafe Latte</text>
      <text x="510" y="265" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#292524">自家製オーツミルクラテ</text>
      <text x="510" y="295" font-family="-apple-system, sans-serif" font-size="13" fill="#78716C">自然な甘みとシルキーなマイクロフォーム</text>
      <text x="870" y="350" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#92400E" text-anchor="end">¥700 (tax incl.)</text>

      <!-- カード3 -->
      <rect x="960" y="60" width="440" height="320" rx="14" fill="#FDFBF7" stroke="#E7E2D8" stroke-width="1" />
      <rect x="980" y="80" width="400" height="150" rx="10" fill="#EAE4D9" />
      <text x="1180" y="165" font-family="-apple-system, serif" font-size="18" fill="#78350F" text-anchor="middle">Seasonal Bake</text>
      <text x="980" y="265" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#292524">塩キャラメルと胡桃のパウンドケーキ</text>
      <text x="980" y="295" font-family="-apple-system, sans-serif" font-size="13" fill="#78716C">コーヒーとのペアリングを追求した焼き菓子</text>
      <text x="1340" y="350" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#92400E" text-anchor="end">¥550 (tax incl.)</text>
    </g>
  </g>

  <!-- ==================== スマートフォン モックアップ ==================== -->
  <g filter="url(#phoneShadow)" transform="translate(1780, 260)">
    <!-- スマホ本体フレーム -->
    <rect width="460" height="960" rx="48" fill="#1C1917" stroke="#44403C" stroke-width="6" />
    <rect x="15" y="15" width="430" height="930" rx="36" fill="#FDFBF7" />
    
    <!-- ノッチ / ダイナミックアイランド -->
    <rect x="170" y="25" width="120" height="26" rx="13" fill="#1C1917" />
    
    <!-- スマホ画面内UI -->
    <g transform="translate(15, 60)">
      <!-- モバイルヘッダー -->
      <rect width="430" height="56" fill="#FFFFFF" />
      <text x="24" y="35" font-family="-apple-system, serif" font-size="15" font-weight="700" fill="#292524">KOMOREBI COFFEE</text>
      <circle cx="390" cy="28" r="16" fill="#F5F3EF" />
      <line x1="382" y1="23" x2="398" y2="23" stroke="#292524" stroke-width="2" />
      <line x1="382" y1="28" x2="398" y2="28" stroke="#292524" stroke-width="2" />
      <line x1="382" y1="33" x2="398" y2="33" stroke="#292524" stroke-width="2" />

      <!-- スマホ ヒーローバナー -->
      <rect x="16" y="70" width="398" height="240" rx="16" fill="#292524" />
      <text x="36" y="130" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="24" font-weight="700" fill="#FAFAF9">日常に寄り添う、<br />一杯の余白。</text>
      <rect x="36" y="210" width="140" height="36" rx="18" fill="url(#coffeeBrown)" />
      <text x="106" y="233" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">メニューをみる</text>

      <!-- カテゴリ切り替えタブ -->
      <g transform="translate(16, 330)">
        <rect x="0" y="0" width="90" height="32" rx="16" fill="#78350F" />
        <text x="45" y="21" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">COFFEE</text>

        <rect x="100" y="0" width="75" height="32" rx="16" fill="#EAE4D9" />
        <text x="137" y="21" font-family="-apple-system, sans-serif" font-size="12" fill="#57534E" text-anchor="middle">LATTE</text>

        <rect x="185" y="0" width="75" height="32" rx="16" fill="#EAE4D9" />
        <text x="222" y="21" font-family="-apple-system, sans-serif" font-size="12" fill="#57534E" text-anchor="middle">BAKE</text>

        <rect x="270" y="0" width="75" height="32" rx="16" fill="#EAE4D9" />
        <text x="307" y="21" font-family="-apple-system, sans-serif" font-size="12" fill="#57534E" text-anchor="middle">BEANS</text>
      </g>

      <!-- スマホ メニューリスト -->
      <g transform="translate(16, 380)">
        <rect width="398" height="85" rx="12" fill="#FFFFFF" stroke="#EAE4D9" stroke-width="1" />
        <rect x="12" y="12" width="60" height="60" rx="8" fill="#EAE4D9" />
        <text x="85" y="38" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#292524">エチオピア イルガチェフェ</text>
        <text x="85" y="58" font-family="-apple-system, sans-serif" font-size="11" fill="#78716C">華やかな香りの深煎り</text>
        <text x="375" y="48" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#92400E" text-anchor="end">¥650</text>

        <rect y="95" width="398" height="85" rx="12" fill="#FFFFFF" stroke="#EAE4D9" stroke-width="1" />
        <rect x="12" y="107" width="60" height="60" rx="8" fill="#EAE4D9" />
        <text x="85" y="133" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#292524">自家製オーツミルクラテ</text>
        <text x="85" y="153" font-family="-apple-system, sans-serif" font-size="11" fill="#78716C">シルキーな口当たり</text>
        <text x="375" y="143" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#92400E" text-anchor="end">¥700</text>
      </g>

      <!-- 店舗アクセス情報ミニカード -->
      <rect x="16" y="590" width="398" height="150" rx="12" fill="#FFFFFF" stroke="#EAE4D9" stroke-width="1" />
      <text x="32" y="620" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#292524">SHOP INFO / ACCESS</text>
      <text x="32" y="645" font-family="-apple-system, sans-serif" font-size="12" fill="#57534E">東京都渋谷区神宮前 4-12-8</text>
      <text x="32" y="668" font-family="-apple-system, sans-serif" font-size="12" fill="#57534E">OPEN: 08:00 - 19:00 (水曜定休)</text>
      <rect x="32" y="685" width="130" height="32" rx="6" fill="#F5F3EF" stroke="#D7C9B8" stroke-width="1" />
      <text x="97" y="705" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#78350F" text-anchor="middle">Google Mapsを開く</text>

      <!-- スマホ固定下部バー -->
      <g transform="translate(0, 800)">
        <rect width="430" height="70" fill="#FFFFFF" stroke="#EAE4D9" stroke-width="1" />
        <rect x="20" y="10" width="390" height="50" rx="25" fill="url(#coffeeBrown)" />
        <text x="215" y="41" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">オンライン豆購入 / テイクアウト</text>
      </g>
    </g>
  </g>
</svg>
`;

// 3. Project 02: 日本の美容室・ヘアサロン LUMEN HAIR & SPA TOKYO (2400x1500)
const project02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1500" width="2400" height="1500">
  <defs>
    <linearGradient id="bg02" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#EDF2F7" />
    </linearGradient>
    <linearGradient id="salonAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <filter id="shadow02" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#0F172A" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="2400" height="1500" fill="url(#bg02)" />

  <!-- バッジ -->
  <rect x="160" y="80" width="370" height="44" rx="22" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
  <circle cx="185" cy="102" r="6" fill="#0F172A" />
  <text x="205" y="110" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#0F172A" letter-spacing="1">CONCEPT PROJECT / HAIR SALON</text>

  <!-- ==================== PCブラウザ モックアップ ==================== -->
  <g filter="url(#shadow02)" transform="translate(160, 160)">
    <rect width="1540" height="1180" rx="20" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
    
    <!-- ブラウザヘッダー -->
    <path d="M 0 20 Q 0 0 20 0 L 1520 0 Q 1540 0 1540 20 L 1540 64 L 0 64 Z" fill="#F8FAFC" />
    <line x1="0" y1="64" x2="1540" y2="64" stroke="#E2E8F0" stroke-width="1" />
    <circle cx="36" cy="32" r="7" fill="#EF4444" opacity="0.8" />
    <circle cx="60" cy="32" r="7" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="32" r="7" fill="#10B981" opacity="0.8" />
    <rect x="140" y="16" width="600" height="32" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="160" y="37" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B">lumen-hair-spa-tokyo.concept</text>

    <!-- ナビゲーション -->
    <g transform="translate(0, 64)">
      <rect width="1540" height="80" fill="#FFFFFF" />
      <line x1="0" y1="80" x2="1540" y2="80" stroke="#F1F5F9" stroke-width="1" />
      
      <text x="60" y="48" font-family="-apple-system, serif" font-size="24" font-weight="300" fill="#0F172A" letter-spacing="4">L U M E N</text>
      <text x="210" y="48" font-family="-apple-system, sans-serif" font-size="11" fill="#94A3B8" letter-spacing="2">HAIR &amp; SPA TOKYO</text>

      <text x="940" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">CONCEPT</text>
      <text x="1050" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">STYLE</text>
      <text x="1140" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">MENU</text>
      <text x="1220" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">STAFF</text>

      <rect x="1330" y="18" width="160" height="44" rx="22" fill="#0F172A" />
      <text x="1410" y="45" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">24h WEB予約</text>
    </g>

    <!-- ヒーローセクション -->
    <g transform="translate(0, 144)">
      <rect width="1540" height="520" fill="#F8FAFC" />
      
      <!-- メインビジュアルエリア（スタイリッシュなサロン空間） -->
      <rect x="740" y="40" width="740" height="440" rx="16" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1" />
      <circle cx="1110" cy="240" r="160" fill="#E2E8F0" />
      <path d="M 1040 180 C 1080 140, 1140 140, 1180 180 C 1220 220, 1220 280, 1180 320 Z" fill="#CBD5E1" opacity="0.6" />
      <text x="1110" y="245" font-family="-apple-system, serif" font-size="28" font-weight="300" fill="#0F172A" text-anchor="middle" letter-spacing="4">NATURAL &amp; ELEGANT</text>
      <text x="1110" y="280" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B" text-anchor="middle" letter-spacing="2">OMOTESANDO / TOKYO</text>

      <!-- 左側キャッチコピー -->
      <text x="80" y="140" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#64748B" letter-spacing="3">HAIR DESIGN &amp; HEAD SPA</text>
      <text x="80" y="220" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="44" font-weight="600" fill="#0F172A" letter-spacing="3">髪と心が整う、</text>
      <text x="80" y="280" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="44" font-weight="600" fill="#0F172A" letter-spacing="3">特別な時間。</text>
      
      <text x="80" y="340" font-family="-apple-system, sans-serif" font-size="16" fill="#64748B" line-height="26">一人ひとりの骨格・髪質に寄り添うオートクチュールカットと、<br />極上のリラクゼーションを届ける個室ヘッドスパサロン。</text>

      <rect x="80" y="410" width="200" height="48" rx="24" fill="#0F172A" />
      <text x="180" y="440" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">WEBで予約する</text>
      
      <rect x="300" y="410" width="180" height="48" rx="24" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5" />
      <text x="390" y="440" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#0F172A" text-anchor="middle">スタイル一覧</text>
    </g>

    <!-- 下部：ヘアカタログ 3枚 -->
    <g transform="translate(60, 700)">
      <text x="20" y="30" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#0F172A" letter-spacing="1">FEATURED STYLES</text>
      
      <!-- スタイル1 -->
      <rect x="20" y="60" width="440" height="320" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <rect x="40" y="80" width="400" height="170" rx="10" fill="#F1F5F9" />
      <text x="240" y="175" font-family="-apple-system, sans-serif" font-size="15" fill="#64748B" text-anchor="middle">Short &amp; Bob Style</text>
      <text x="40" y="285" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#0F172A">シースルーショートボブ / グレージュ</text>
      <text x="40" y="315" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B">スタイリングが簡単に決まる骨格補正カット</text>

      <!-- スタイル2 -->
      <rect x="490" y="60" width="440" height="320" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <rect x="510" y="80" width="400" height="170" rx="10" fill="#F1F5F9" />
      <text x="710" y="175" font-family="-apple-system, sans-serif" font-size="15" fill="#64748B" text-anchor="middle">Medium Wave Style</text>
      <text x="510" y="285" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#0F172A">レイヤーミディアム / アッシュベージュ</text>
      <text x="510" y="315" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B">透明感と柔らかな動きを演出するニュアンスパーマ</text>

      <!-- スタイル3 -->
      <rect x="960" y="60" width="440" height="320" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <rect x="980" y="80" width="400" height="170" rx="10" fill="#F1F5F9" />
      <text x="1180" y="175" font-family="-apple-system, sans-serif" font-size="15" fill="#64748B" text-anchor="middle">Organic Head Spa</text>
      <text x="980" y="285" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#0F172A">深層リフトアップ 個室オーガニックヘッドスパ</text>
      <text x="980" y="315" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B">頭皮環境を整え、根本からハリ・コシのある髪へ</text>
    </g>
  </g>

  <!-- ==================== スマートフォン モックアップ ==================== -->
  <g filter="url(#shadow02)" transform="translate(1780, 260)">
    <rect width="460" height="960" rx="48" fill="#0F172A" stroke="#334155" stroke-width="6" />
    <rect x="15" y="15" width="430" height="930" rx="36" fill="#FFFFFF" />
    <rect x="170" y="25" width="120" height="26" rx="13" fill="#0F172A" />

    <g transform="translate(15, 60)">
      <rect width="430" height="56" fill="#FFFFFF" />
      <text x="24" y="35" font-family="-apple-system, serif" font-size="16" font-weight="600" fill="#0F172A">L U M E N</text>
      <rect x="300" y="14" width="105" height="32" rx="16" fill="#0F172A" />
      <text x="352" y="35" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">WEB予約</text>

      <!-- ヒーロー -->
      <rect x="16" y="70" width="398" height="230" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
      <text x="36" y="125" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="22" font-weight="600" fill="#0F172A">髪と心が整う、<br />特別な時間。</text>
      <text x="36" y="185" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">表参道駅 徒歩3分 / 完全個室スパ完備</text>
      <rect x="36" y="210" width="160" height="36" rx="18" fill="#0F172A" />
      <text x="116" y="233" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">初回限定クーポン</text>

      <!-- メニュー・プライスリスト -->
      <g transform="translate(16, 320)">
        <text x="10" y="20" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#0F172A">MENU &amp; PRICE</text>
        
        <rect y="35" width="398" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="20" y="65" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#0F172A">カット ＋ プレミアムトリートメント</text>
        <text x="375" y="65" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="end">¥8,800</text>

        <rect y="115" width="398" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="20" y="145" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#0F172A">カット ＋ イルミナカラー ＋ 保湿スパ</text>
        <text x="375" y="145" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="end">¥14,300</text>

        <rect y="195" width="398" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="20" y="225" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#0F172A">極上オーガニック個室ヘッドスパ (60min)</text>
        <text x="375" y="225" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="end">¥9,900</text>
      </g>

      <!-- 追従フッター予約ボタン -->
      <g transform="translate(0, 800)">
        <rect width="430" height="70" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <rect x="20" y="10" width="185" height="50" rx="25" fill="#06C755" />
        <text x="112" y="41" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">LINEで予約・相談</text>

        <rect x="225" y="10" width="185" height="50" rx="25" fill="#0F172A" />
        <text x="317" y="41" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">24h 即時WEB予約</text>
      </g>
    </g>
  </g>
</svg>
`;

// 4. Project 03: 日本の企業・コーポレートサイト VERTEX INNOVATION Inc. (2400x1500)
const project03Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1500" width="2400" height="1500">
  <defs>
    <linearGradient id="bg03" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F1F5F9" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="corpNavy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <linearGradient id="corpBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <filter id="shadow03" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#0F172A" flood-opacity="0.14" />
    </filter>
  </defs>

  <rect width="2400" height="1500" fill="url(#bg03)" />

  <!-- バッジ -->
  <rect x="160" y="80" width="370" height="44" rx="22" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
  <circle cx="185" cy="102" r="6" fill="#2563EB" />
  <text x="205" y="110" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#1E293B" letter-spacing="1">CONCEPT PROJECT / CORPORATE</text>

  <!-- ==================== PCブラウザ モックアップ ==================== -->
  <g filter="url(#shadow03)" transform="translate(160, 160)">
    <rect width="1540" height="1180" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    
    <!-- ブラウザヘッダー -->
    <path d="M 0 20 Q 0 0 20 0 L 1520 0 Q 1540 0 1540 20 L 1540 64 L 0 64 Z" fill="#F8FAFC" />
    <line x1="0" y1="64" x2="1540" y2="64" stroke="#CBD5E1" stroke-width="1" />
    <circle cx="36" cy="32" r="7" fill="#EF4444" opacity="0.8" />
    <circle cx="60" cy="32" r="7" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="32" r="7" fill="#10B981" opacity="0.8" />
    <rect x="140" y="16" width="600" height="32" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="160" y="37" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B">vertex-innovation.co.jp.concept</text>

    <!-- ナビゲーション -->
    <g transform="translate(0, 64)">
      <rect width="1540" height="80" fill="#FFFFFF" />
      <line x1="0" y1="80" x2="1540" y2="80" stroke="#F1F5F9" stroke-width="1" />
      
      <!-- コーポレートロゴ -->
      <text x="60" y="48" font-family="-apple-system, sans-serif" font-size="22" font-weight="800" fill="#0F172A" letter-spacing="1">VERTEX</text>
      <text x="175" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">株式会社バーテックス</text>

      <text x="860" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">企業理念</text>
      <text x="960" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">事業案内</text>
      <text x="1060" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">会社概要</text>
      <text x="1160" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#2563EB">採用情報</text>

      <rect x="1270" y="18" width="210" height="44" rx="8" fill="#0F172A" />
      <text x="1375" y="45" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">お問い合わせ / 資料請求</text>
    </g>

    <!-- ヒーローセクション -->
    <g transform="translate(0, 144)">
      <rect width="1540" height="520" fill="url(#corpNavy)" />
      
      <!-- 背景幾何学ライン -->
      <line x1="740" y1="0" x2="1540" y2="520" stroke="#334155" stroke-width="1.5" opacity="0.6" />
      <line x1="900" y1="0" x2="1540" y2="400" stroke="#334155" stroke-width="1.5" opacity="0.4" />
      <circle cx="1200" cy="260" r="180" fill="#2563EB" opacity="0.2" />

      <!-- 左側キャッチコピー -->
      <rect x="80" y="90" width="160" height="30" rx="4" fill="#2563EB" />
      <text x="160" y="110" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">INNOVATION &amp; DX</text>

      <text x="80" y="180" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="46" font-weight="700" fill="#FFFFFF" letter-spacing="1">確かな技術で、</text>
      <text x="80" y="240" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="46" font-weight="700" fill="#FFFFFF" letter-spacing="1">ビジネスを前進させる。</text>
      
      <text x="80" y="310" font-family="-apple-system, sans-serif" font-size="16" fill="#94A3B8" line-height="26">企業のデジタル変革（DX）と事業成長を支えるソリューションパートナー。<br />戦略設計からシステム実装・運用まで、一気通貫で伴走します。</text>

      <rect x="80" y="380" width="220" height="48" rx="8" fill="url(#corpBlue)" />
      <text x="190" y="410" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">事業内容を見る</text>
      
      <rect x="320" y="380" width="200" height="48" rx="8" fill="#1E293B" stroke="#475569" stroke-width="1.5" />
      <text x="420" y="410" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">2026年度 新卒・中途採用</text>
    </g>

    <!-- 下部：事業ソリューション 3領域 -->
    <g transform="translate(60, 700)">
      <text x="20" y="30" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#0F172A" letter-spacing="1">OUR SOLUTIONS</text>
      
      <!-- ソリューション1 -->
      <rect x="20" y="60" width="440" height="320" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
      <rect x="40" y="80" width="60" height="60" rx="8" fill="#DBEAFE" />
      <text x="70" y="118" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#2563EB" text-anchor="middle">01</text>
      <text x="40" y="180" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#0F172A">DXコンサルティング</text>
      <text x="40" y="215" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B" line-height="20">業務プロセスの可視化とデジタルツールの導入・定着支援により、組織の生産性を最大化。</text>
      <line x1="40" y1="280" x2="420" y2="280" stroke="#E2E8F0" stroke-width="1" />
      <text x="40" y="315" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#2563EB">詳しく見る →</text>

      <!-- ソリューション2 -->
      <rect x="490" y="60" width="440" height="320" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
      <rect x="510" y="80" width="60" height="60" rx="8" fill="#DBEAFE" />
      <text x="540" y="118" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#2563EB" text-anchor="middle">02</text>
      <text x="510" y="180" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#0F172A">Web・クラウド開発</text>
      <text x="510" y="215" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B" line-height="20">最新のクラウドネイティブ技術を用いた堅牢で拡張性の高いWebシステム・アプリケーション構築。</text>
      <line x1="510" y1="280" x2="890" y2="280" stroke="#E2E8F0" stroke-width="1" />
      <text x="510" y="315" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#2563EB">詳しく見る →</text>

      <!-- ソリューション3 -->
      <rect x="960" y="60" width="440" height="320" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
      <rect x="980" y="80" width="60" height="60" rx="8" fill="#DBEAFE" />
      <text x="1010" y="118" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#2563EB" text-anchor="middle">03</text>
      <text x="980" y="180" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#0F172A">セキュリティ＆保守運用</text>
      <text x="980" y="215" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B" line-height="20">24時間365日の安定稼働を支える監視体制と、強固な情報セキュリティマネジメントの提供。</text>
      <line x1="980" y1="280" x2="1360" y2="280" stroke="#E2E8F0" stroke-width="1" />
      <text x="980" y="315" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#2563EB">詳しく見る →</text>
    </g>
  </g>

  <!-- ==================== スマートフォン モックアップ ==================== -->
  <g filter="url(#shadow03)" transform="translate(1780, 260)">
    <rect width="460" height="960" rx="48" fill="#0F172A" stroke="#334155" stroke-width="6" />
    <rect x="15" y="15" width="430" height="930" rx="36" fill="#FFFFFF" />
    <rect x="170" y="25" width="120" height="26" rx="13" fill="#0F172A" />

    <g transform="translate(15, 60)">
      <rect width="430" height="56" fill="#FFFFFF" />
      <text x="24" y="35" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#0F172A">VERTEX</text>
      <circle cx="390" cy="28" r="16" fill="#F1F5F9" />
      <line x1="382" y1="23" x2="398" y2="23" stroke="#0F172A" stroke-width="2" />
      <line x1="382" y1="28" x2="398" y2="28" stroke="#0F172A" stroke-width="2" />
      <line x1="382" y1="33" x2="398" y2="33" stroke="#0F172A" stroke-width="2" />

      <!-- スマホ ヒーロー -->
      <rect x="16" y="70" width="398" height="230" rx="14" fill="url(#corpNavy)" />
      <rect x="36" y="95" width="120" height="22" rx="4" fill="#2563EB" />
      <text x="96" y="110" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">INNOVATION &amp; DX</text>
      <text x="36" y="155" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">確かな技術で、<br />ビジネスを前進させる。</text>
      <rect x="36" y="220" width="140" height="34" rx="6" fill="#2563EB" />
      <text x="106" y="242" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">資料請求・相談</text>

      <!-- ニュース・IR -->
      <g transform="translate(16, 320)">
        <text x="8" y="20" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#0F172A">NEWS &amp; TOPICS</text>
        <rect y="35" width="398" height="64" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="16" y="58" font-family="-apple-system, sans-serif" font-size="11" fill="#64748B">2026.04.15 / お知らせ</text>
        <text x="16" y="80" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#0F172A">新世代クラウドDX支援サービスの提供を開始</text>

        <rect y="110" width="398" height="64" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="16" y="133" font-family="-apple-system, sans-serif" font-size="11" fill="#64748B">2026.03.01 / 採用</text>
        <text x="16" y="155" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#0F172A">2027年度 新卒採用エントリー受付を開始しました</text>
      </g>

      <!-- 採用特設バナー -->
      <rect x="16" y="520" width="398" height="110" rx="10" fill="#1E293B" />
      <text x="36" y="555" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">RECRUITMENT 2026-2027</text>
      <text x="36" y="580" font-family="-apple-system, sans-serif" font-size="11" fill="#94A3B8">挑戦を恐れないエンジニア・デザイナーを募集</text>
      <text x="36" y="605" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#38BDF8">採用特設サイトはこちら →</text>

      <!-- 固定フッター -->
      <g transform="translate(0, 800)">
        <rect width="430" height="70" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <rect x="20" y="10" width="390" height="50" rx="8" fill="#0F172A" />
        <text x="215" y="41" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Webからのお問い合わせ・資料請求</text>
      </g>
    </g>
  </g>
</svg>
`;

async function generateAllVisuals() {
  const images = [
    {
      svg: profileSvg,
      output: path.join(__dirname, '../public/images/profile.jpg'),
      density: 300,
      width: 1200,
      height: 1500,
      quality: 94,
    },
    {
      svg: project01Svg,
      output: path.join(__dirname, '../public/images/works/project-01.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
      quality: 92,
    },
    {
      svg: project02Svg,
      output: path.join(__dirname, '../public/images/works/project-02.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
      quality: 92,
    },
    {
      svg: project03Svg,
      output: path.join(__dirname, '../public/images/works/project-03.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
      quality: 92,
    },
  ];

  for (const img of images) {
    const svgBuffer = Buffer.from(img.svg);
    console.log(`Generating authentic JPEG for ${path.basename(img.output)}...`);

    const jpegBuffer = await sharp(svgBuffer, { density: img.density })
      .resize(img.width, img.height, { fit: 'cover' })
      .jpeg({
        quality: img.quality,
        mozjpeg: true,
        chromaSubsampling: '4:4:4',
      })
      .toBuffer();

    fs.writeFileSync(img.output, jpegBuffer);
    console.log(`Saved ${img.output} (${jpegBuffer.length} bytes, Header: ${jpegBuffer.subarray(0, 4).toString('hex')})`);
  }

  console.log('All authentic JPEG visuals generated successfully!');
}

generateAllVisuals().catch((err) => {
  console.error(err);
  process.exit(1);
});
