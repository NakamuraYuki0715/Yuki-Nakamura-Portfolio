const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. Project 01: カフェ・飲食店 KOMOREBI COFFEE ROASTERS
const project01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1500" width="2400" height="1500">
  <defs>
    <!-- 背景：温かみのあるアースカラーと自然光 -->
    <linearGradient id="cBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7F5F0" />
      <stop offset="50%" stop-color="#EFECE4" />
      <stop offset="100%" stop-color="#E3DDD0" />
    </linearGradient>
    <linearGradient id="woodTone" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3E2723" />
      <stop offset="100%" stop-color="#2D1E1B" />
    </linearGradient>
    <linearGradient id="coffeeTone" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#795548" />
      <stop offset="100%" stop-color="#4E342E" />
    </linearGradient>
    <linearGradient id="amberAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <filter id="cShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#1C1917" flood-opacity="0.16" />
    </filter>
    <filter id="itemShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#292524" flood-opacity="0.2" />
    </filter>
  </defs>

  <!-- 全体背景 -->
  <rect width="2400" height="1500" fill="url(#cBg)" />

  <!-- 柔らかい自然光の差し込み -->
  <polygon points="0,0 1200,0 800,1500 0,1500" fill="#FFFFFF" opacity="0.4" />

  <!-- ===== 背景のカフェ写真・商品エディトリアル要素 ===== -->
  <!-- 左上：カフェ空間・木製テーブルとラテアートカップのビジュアルカード -->
  <g filter="url(#itemShadow)" transform="translate(100, 100)">
    <rect width="360" height="460" rx="16" fill="#FFFFFF" />
    <!-- 写真エリア -->
    <rect x="16" y="16" width="328" height="300" rx="12" fill="#E8E2D5" />
    <!-- カフェ空間・コーヒーカップイラストレーション -->
    <circle cx="180" cy="166" r="85" fill="#D7CBB5" />
    <circle cx="180" cy="166" r="70" fill="#5D4037" />
    <!-- ラテアートハート -->
    <path d="M 180 180 C 160 155, 145 135, 160 120 C 172 108, 180 125, 180 135 C 180 125, 188 108, 200 120 C 215 135, 200 155, 180 180 Z" fill="#FFF8E7" opacity="0.9" />
    <circle cx="180" cy="275" r="28" fill="#BCAAA4" opacity="0.6" />
    <text x="32" y="350" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="16" font-weight="700" fill="#292524">自家製ラテ &amp; 焼き菓子</text>
    <text x="32" y="378" font-family="-apple-system, sans-serif" font-size="12" fill="#78716C">産地直送のシングルオリジン豆を使用</text>
    <text x="32" y="420" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#92400E">CAFE &amp; ROASTERY</text>
  </g>

  <!-- 右下：スイーツ＆コーヒー豆のビジュアルカード -->
  <g filter="url(#itemShadow)" transform="translate(1920, 920)">
    <rect width="380" height="480" rx="16" fill="#FFFFFF" />
    <rect x="16" y="16" width="348" height="310" rx="12" fill="#292524" />
    <!-- スイーツ（カヌレ・チーズケーキ）イメージ -->
    <circle cx="190" cy="170" r="80" fill="#44403C" />
    <polygon points="150,210 230,210 210,130 170,130" fill="#78350F" rx="4" />
    <circle cx="190" cy="120" r="18" fill="#D97706" />
    <text x="190" y="270" font-family="-apple-system, serif" font-size="14" fill="#FAF8F5" text-anchor="middle" letter-spacing="1">SEASONAL SWEETS</text>
    <text x="32" y="365" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="16" font-weight="700" fill="#292524">季節限定 ペアリングスイーツ</text>
    <text x="32" y="395" font-family="-apple-system, sans-serif" font-size="12" fill="#78716C">珈琲の香りを引き立てる自家製ベイク</text>
    <text x="32" y="440" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#92400E">¥550〜 / 数量限定</text>
  </g>

  <!-- 上部バッジ -->
  <rect x="520" y="70" width="340" height="44" rx="22" fill="#FFFFFF" stroke="#D7C9B8" stroke-width="1.5" />
  <circle cx="545" cy="92" r="6" fill="#92400E" />
  <text x="565" y="100" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#78350F" letter-spacing="1">CONCEPT PROJECT / CAFE</text>

  <!-- ==================== メイン：PC Webサイト モックアップ ==================== -->
  <g filter="url(#cShadow)" transform="translate(500, 140)">
    <rect width="1380" height="1220" rx="20" fill="#FFFFFF" stroke="#E2DCD2" stroke-width="2" />
    
    <!-- ブラウザヘッダー -->
    <path d="M 0 20 Q 0 0 20 0 L 1360 0 Q 1380 0 1380 20 L 1380 64 L 0 64 Z" fill="#F7F5F0" />
    <line x1="0" y1="64" x2="1380" y2="64" stroke="#E2DCD2" stroke-width="1" />
    <circle cx="36" cy="32" r="7" fill="#EF4444" opacity="0.8" />
    <circle cx="60" cy="32" r="7" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="32" r="7" fill="#10B981" opacity="0.8" />
    <rect x="140" y="16" width="560" height="32" rx="8" fill="#FFFFFF" stroke="#E2DCD2" stroke-width="1" />
    <text x="160" y="37" font-family="-apple-system, sans-serif" font-size="13" fill="#78716C">komorebi-coffee.concept.jp</text>

    <!-- サイト ナビゲーション -->
    <g transform="translate(0, 64)">
      <rect width="1380" height="80" fill="#FFFFFF" />
      <line x1="0" y1="80" x2="1380" y2="80" stroke="#F0EBE1" stroke-width="1" />
      <text x="50" y="48" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="22" font-weight="700" fill="#292524" letter-spacing="3">KOMOREBI COFFEE</text>
      <text x="350" y="48" font-family="-apple-system, sans-serif" font-size="11" fill="#A8A29E">木漏れ日珈琲 焙煎所</text>

      <text x="860" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#44403C">ABOUT</text>
      <text x="960" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#44403C">MENU</text>
      <text x="1050" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#44403C">ACCESS</text>

      <rect x="1170" y="18" width="160" height="44" rx="22" fill="url(#coffeeTone)" />
      <text x="1250" y="45" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">ONLINE SHOP</text>
    </g>

    <!-- ヒーローセクション（写真とキャッチコピー） -->
    <g transform="translate(0, 144)">
      <rect width="1380" height="540" fill="url(#woodTone)" />
      
      <!-- ヒーロー写真枠（カフェ店内とハンドドリップ） -->
      <rect x="660" y="40" width="670" height="460" rx="16" fill="#1C1917" stroke="#44403C" stroke-width="1" />
      <!-- ドリップケトルと湯気のイメージ -->
      <circle cx="995" cy="270" r="140" fill="#78350F" opacity="0.3" />
      <circle cx="1060" cy="230" r="80" fill="#D97706" opacity="0.2" />
      <text x="995" y="275" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="28" font-weight="400" fill="#FAF8F5" text-anchor="middle" letter-spacing="4">丁寧なハンドドリップで淹れる至福の一杯。</text>
      <rect x="895" y="340" width="200" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.15" />
      <text x="995" y="363" font-family="-apple-system, sans-serif" font-size="12" fill="#E7E5E4" text-anchor="middle" letter-spacing="1">SINGLE ORIGIN &amp; ROAST</text>

      <!-- キャッチコピー -->
      <text x="70" y="130" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#D97706" letter-spacing="3">AUTHENTIC JAPANESE CAFE</text>
      <text x="70" y="210" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="46" font-weight="700" fill="#FAFAF9" letter-spacing="2">日常に寄り添う、</text>
      <text x="70" y="275" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="46" font-weight="700" fill="#FAFAF9" letter-spacing="2">一杯の余白。</text>
      
      <text x="70" y="340" font-family="-apple-system, sans-serif" font-size="15" fill="#D6D3D1" line-height="26">店内に広がる芳醇な珈琲のアロマと、静かな木漏れ日。<br />心をほどく穏やかな時間をお届けします。</text>

      <rect x="70" y="420" width="180" height="48" rx="24" fill="url(#amberAccent)" />
      <text x="160" y="450" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">メニューを見る</text>
      
      <rect x="270" y="420" width="180" height="48" rx="24" fill="#292524" stroke="#57534E" stroke-width="1.5" />
      <text x="360" y="450" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#E7E5E4" text-anchor="middle">店舗アクセス</text>
    </g>

    <!-- 下部：メニュー写真カード 3枚 -->
    <g transform="translate(50, 720)">
      <text x="20" y="30" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="22" font-weight="700" fill="#292524">RECOMMENDED COFFEE &amp; SWEETS</text>
      
      <!-- メニュー1 -->
      <rect x="20" y="60" width="390" height="380" rx="14" fill="#FDFBF7" stroke="#E7E2D8" stroke-width="1" />
      <rect x="40" y="80" width="350" height="190" rx="10" fill="#EAE4D9" />
      <circle cx="215" cy="175" r="55" fill="#78350F" opacity="0.6" />
      <text x="215" y="180" font-family="-apple-system, serif" font-size="16" fill="#FFFFFF" text-anchor="middle">Hand Drip</text>
      <text x="40" y="305" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#292524">エチオピア イルガチェフェ</text>
      <text x="40" y="335" font-family="-apple-system, sans-serif" font-size="12" fill="#78716C">華やかな柑橘のアロマと豊かなコク</text>
      <text x="350" y="390" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#92400E" text-anchor="end">¥650 (税込)</text>

      <!-- メニュー2 -->
      <rect x="440" y="60" width="390" height="380" rx="14" fill="#FDFBF7" stroke="#E7E2D8" stroke-width="1" />
      <rect x="460" y="80" width="350" height="190" rx="10" fill="#EAE4D9" />
      <circle cx="635" cy="175" r="55" fill="#A1887F" opacity="0.8" />
      <text x="635" y="180" font-family="-apple-system, serif" font-size="16" fill="#FFFFFF" text-anchor="middle">Oat Latte</text>
      <text x="460" y="305" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#292524">自家製オーツミルクラテ</text>
      <text x="460" y="335" font-family="-apple-system, sans-serif" font-size="12" fill="#78716C">濃厚なエスプレッソと自然な甘み</text>
      <text x="770" y="390" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#92400E" text-anchor="end">¥700 (税込)</text>

      <!-- メニュー3 -->
      <rect x="860" y="60" width="390" height="380" rx="14" fill="#FDFBF7" stroke="#E7E2D8" stroke-width="1" />
      <rect x="880" y="80" width="350" height="190" rx="10" fill="#EAE4D9" />
      <circle cx="1055" cy="175" r="55" fill="#6D4C41" opacity="0.7" />
      <text x="1055" y="180" font-family="-apple-system, serif" font-size="16" fill="#FFFFFF" text-anchor="middle">Seasonal Cake</text>
      <text x="880" y="305" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#292524">塩キャラメルと胡桃のケーキ</text>
      <text x="880" y="335" font-family="-apple-system, sans-serif" font-size="12" fill="#78716C">珈琲に寄り添う香ばしい手作り焼き菓子</text>
      <text x="1190" y="390" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#92400E" text-anchor="end">¥550 (税込)</text>
    </g>
  </g>

  <!-- 手前スマートフォン（モバイルメニュー＆店舗マップ） -->
  <g filter="url(#itemShadow)" transform="translate(1820, 200)">
    <rect width="400" height="820" rx="44" fill="#1C1917" stroke="#44403C" stroke-width="6" />
    <rect x="12" y="12" width="376" height="796" rx="34" fill="#FDFBF7" />
    <rect x="140" y="22" width="120" height="24" rx="12" fill="#1C1917" />

    <g transform="translate(12, 55)">
      <rect width="376" height="50" fill="#FFFFFF" />
      <text x="20" y="32" font-family="-apple-system, serif" font-size="14" font-weight="700" fill="#292524">KOMOREBI COFFEE</text>
      <rect x="16" y="65" width="344" height="180" rx="12" fill="#292524" />
      <text x="32" y="115" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="20" font-weight="700" fill="#FAFAF9">日常に寄り添う、<br />一杯の余白。</text>
      <rect x="32" y="175" width="130" height="32" rx="16" fill="url(#amberAccent)" />
      <text x="97" y="196" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">メニューをみる</text>

      <rect x="16" y="260" width="344" height="70" rx="10" fill="#FFFFFF" stroke="#EAE4D9" stroke-width="1" />
      <text x="30" y="290" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#292524">エチオピア イルガチェフェ</text>
      <text x="330" y="295" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#92400E" text-anchor="end">¥650</text>

      <rect x="16" y="340" width="344" height="70" rx="10" fill="#FFFFFF" stroke="#EAE4D9" stroke-width="1" />
      <text x="30" y="370" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#292524">自家製オーツミルクラテ</text>
      <text x="330" y="375" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#92400E" text-anchor="end">¥700</text>

      <!-- 店舗情報 -->
      <rect x="16" y="430" width="344" height="150" rx="10" fill="#F5F3EF" />
      <text x="30" y="460" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#292524">SHOP INFO</text>
      <text x="30" y="485" font-family="-apple-system, sans-serif" font-size="11" fill="#78716C">東京都渋谷区神宮前 4-12-8</text>
      <text x="30" y="505" font-family="-apple-system, sans-serif" font-size="11" fill="#78716C">営業時間: 08:00 - 19:00 (水曜休)</text>
      <rect x="30" y="520" width="140" height="30" rx="6" fill="#78350F" />
      <text x="100" y="540" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">Google Maps</text>
    </g>
  </g>
</svg>
`;

// 2. Project 02: 日本の美容室・ヘアサロン LUMEN HAIR & SPA TOKYO
const project02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1500" width="2400" height="1500">
  <defs>
    <linearGradient id="sBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF8F5" />
      <stop offset="50%" stop-color="#F2EFE9" />
      <stop offset="100%" stop-color="#E5E0D8" />
    </linearGradient>
    <linearGradient id="salonDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181B" />
      <stop offset="100%" stop-color="#27272A" />
    </linearGradient>
    <filter id="sShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#18181B" flood-opacity="0.14" />
    </filter>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#18181B" flood-opacity="0.18" />
    </filter>
  </defs>

  <rect width="2400" height="1500" fill="url(#sBg)" />
  <polygon points="0,0 1200,0 800,1500 0,1500" fill="#FFFFFF" opacity="0.45" />

  <!-- 左上：ヘアスタイル写真カード -->
  <g filter="url(#cardShadow)" transform="translate(100, 100)">
    <rect width="360" height="460" rx="16" fill="#FFFFFF" />
    <rect x="16" y="16" width="328" height="300" rx="12" fill="#EAE5DC" />
    <circle cx="180" cy="166" r="85" fill="#D5CBBF" />
    <path d="M 125 150 C 135 90, 225 90, 235 150 C 240 210, 190 240, 180 240 C 170 240, 120 210, 125 150 Z" fill="#4B3D3D" opacity="0.8" />
    <text x="32" y="350" font-family="-apple-system, serif" font-size="16" font-weight="700" fill="#18181B">シースルーボブ / グレージュ</text>
    <text x="32" y="378" font-family="-apple-system, sans-serif" font-size="12" fill="#71717A">骨格にフィットするニュアンスカット</text>
    <text x="32" y="420" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#18181B">HAIR CATALOG 2026</text>
  </g>

  <!-- 右下：オーガニックヘアケア＆スパ カード -->
  <g filter="url(#cardShadow)" transform="translate(1920, 920)">
    <rect width="380" height="480" rx="16" fill="#FFFFFF" />
    <rect x="16" y="16" width="348" height="310" rx="12" fill="#F4F0EA" />
    <!-- ヘアケアオイルボトル -->
    <rect x="160" y="100" width="60" height="130" rx="8" fill="#D4AF37" opacity="0.8" />
    <rect x="175" y="75" width="30" height="25" rx="4" fill="#27272A" />
    <text x="190" y="170" font-family="-apple-system, serif" font-size="11" fill="#18181B" text-anchor="middle">LUMEN OIL</text>
    <text x="32" y="365" font-family="-apple-system, serif" font-size="16" font-weight="700" fill="#18181B">個室オーガニックヘッドスパ</text>
    <text x="32" y="395" font-family="-apple-system, sans-serif" font-size="12" fill="#71717A">100%植物由来オイルによる頭皮ケア</text>
    <text x="32" y="440" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#18181B">60min / ¥9,900 (税込)</text>
  </g>

  <!-- バッジ -->
  <rect x="520" y="70" width="370" height="44" rx="22" fill="#FFFFFF" stroke="#D5CBBF" stroke-width="1.5" />
  <circle cx="545" cy="92" r="6" fill="#18181B" />
  <text x="565" y="100" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#18181B" letter-spacing="1">CONCEPT PROJECT / SALON</text>

  <!-- ==================== メイン：PC Webサイト モックアップ ==================== -->
  <g filter="url(#sShadow)" transform="translate(500, 140)">
    <rect width="1380" height="1220" rx="20" fill="#FFFFFF" stroke="#E5E0D8" stroke-width="2" />
    
    <!-- ブラウザヘッダー -->
    <path d="M 0 20 Q 0 0 20 0 L 1360 0 Q 1380 0 1380 20 L 1380 64 L 0 64 Z" fill="#F8F6F2" />
    <line x1="0" y1="64" x2="1380" y2="64" stroke="#E5E0D8" stroke-width="1" />
    <circle cx="36" cy="32" r="7" fill="#EF4444" opacity="0.8" />
    <circle cx="60" cy="32" r="7" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="32" r="7" fill="#10B981" opacity="0.8" />
    <rect x="140" y="16" width="560" height="32" rx="8" fill="#FFFFFF" stroke="#E5E0D8" stroke-width="1" />
    <text x="160" y="37" font-family="-apple-system, sans-serif" font-size="13" fill="#71717A">lumen-hair-spa.tokyo.concept</text>

    <!-- ナビゲーション -->
    <g transform="translate(0, 64)">
      <rect width="1380" height="80" fill="#FFFFFF" />
      <line x1="0" y1="80" x2="1380" y2="80" stroke="#F4F0EA" stroke-width="1" />
      <text x="50" y="48" font-family="-apple-system, serif" font-size="24" font-weight="300" fill="#18181B" letter-spacing="4">L U M E N</text>
      <text x="200" y="48" font-family="-apple-system, sans-serif" font-size="11" fill="#A1A1AA" letter-spacing="2">HAIR &amp; SPA TOKYO</text>

      <text x="860" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#3F3F46">STYLE</text>
      <text x="960" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#3F3F46">MENU</text>
      <text x="1050" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#3F3F46">STAFF</text>

      <rect x="1160" y="18" width="170" height="44" rx="22" fill="#18181B" />
      <text x="1245" y="45" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">24h WEB予約</text>
    </g>

    <!-- ヒーローセクション -->
    <g transform="translate(0, 144)">
      <rect width="1380" height="540" fill="#FAF8F5" />
      
      <!-- サロン空間ビジュアル -->
      <rect x="660" y="40" width="670" height="460" rx="16" fill="#F4F0EA" stroke="#E5E0D8" stroke-width="1" />
      <circle cx="995" cy="270" r="140" fill="#E5E0D8" />
      <path d="M 940 210 C 970 180, 1020 180, 1050 210 C 1080 240, 1080 290, 1050 320 Z" fill="#D5CBBF" opacity="0.8" />
      <text x="995" y="275" font-family="-apple-system, serif" font-size="26" font-weight="300" fill="#18181B" text-anchor="middle" letter-spacing="3">NATURAL &amp; ELEGANT</text>
      <text x="995" y="310" font-family="-apple-system, sans-serif" font-size="12" fill="#71717A" text-anchor="middle" letter-spacing="2">OMOTESANDO / TOKYO</text>

      <!-- 左側キャッチコピー -->
      <text x="70" y="130" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#71717A" letter-spacing="3">HAIR DESIGN &amp; HEAD SPA</text>
      <text x="70" y="210" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="46" font-weight="600" fill="#18181B" letter-spacing="3">髪と心が整う、</text>
      <text x="70" y="275" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="46" font-weight="600" fill="#18181B" letter-spacing="3">特別な時間。</text>
      
      <text x="70" y="340" font-family="-apple-system, sans-serif" font-size="15" fill="#71717A" line-height="26">一人ひとりの骨格と髪質に寄り添うオートクチュールカットと、<br />極上のリラクゼーションを届ける個室ヘッドスパサロン。</text>

      <rect x="70" y="420" width="190" height="48" rx="24" fill="#18181B" />
      <text x="165" y="450" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">WEBで予約する</text>
      
      <rect x="280" y="420" width="180" height="48" rx="24" fill="#FFFFFF" stroke="#18181B" stroke-width="1.5" />
      <text x="370" y="450" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#18181B" text-anchor="middle">スタイル一覧</text>
    </g>

    <!-- 下部：ヘアカタログ 3枚 -->
    <g transform="translate(50, 720)">
      <text x="20" y="30" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#18181B">FEATURED STYLES</text>
      
      <!-- スタイル1 -->
      <rect x="20" y="60" width="390" height="380" rx="14" fill="#FFFFFF" stroke="#E5E0D8" stroke-width="1" />
      <rect x="40" y="80" width="350" height="200" rx="10" fill="#F4F0EA" />
      <text x="215" y="185" font-family="-apple-system, sans-serif" font-size="15" fill="#71717A" text-anchor="middle">Short Bob Style</text>
      <text x="40" y="315" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#18181B">シースルーショートボブ</text>
      <text x="40" y="345" font-family="-apple-system, sans-serif" font-size="12" fill="#71717A">スタイリングが簡単に決まる骨格補正カット</text>

      <!-- スタイル2 -->
      <rect x="440" y="60" width="390" height="380" rx="14" fill="#FFFFFF" stroke="#E5E0D8" stroke-width="1" />
      <rect x="460" y="80" width="350" height="200" rx="10" fill="#F4F0EA" />
      <text x="635" y="185" font-family="-apple-system, sans-serif" font-size="15" fill="#71717A" text-anchor="middle">Medium Layer</text>
      <text x="460" y="315" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#18181B">レイヤーミディアム / アッシュ</text>
      <text x="460" y="345" font-family="-apple-system, sans-serif" font-size="12" fill="#71717A">透明感と柔らかな動きを演出するパーマ</text>

      <!-- スタイル3 -->
      <rect x="860" y="60" width="390" height="380" rx="14" fill="#FFFFFF" stroke="#E5E0D8" stroke-width="1" />
      <rect x="880" y="80" width="350" height="200" rx="10" fill="#F4F0EA" />
      <text x="1055" y="185" font-family="-apple-system, sans-serif" font-size="15" fill="#71717A" text-anchor="middle">Head Spa</text>
      <text x="880" y="315" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#18181B">個室オーガニックヘッドスパ</text>
      <text x="880" y="345" font-family="-apple-system, sans-serif" font-size="12" fill="#71717A">頭皮環境を整え、根本からハリ・ツヤのある髪へ</text>
    </g>
  </g>

  <!-- 手前スマートフォン -->
  <g filter="url(#cardShadow)" transform="translate(1820, 200)">
    <rect width="400" height="820" rx="44" fill="#18181B" stroke="#3F3F46" stroke-width="6" />
    <rect x="12" y="12" width="376" height="796" rx="34" fill="#FFFFFF" />
    <rect x="140" y="22" width="120" height="24" rx="12" fill="#18181B" />

    <g transform="translate(12, 55)">
      <rect width="376" height="50" fill="#FFFFFF" />
      <text x="20" y="32" font-family="-apple-system, serif" font-size="15" font-weight="600" fill="#18181B">L U M E N</text>
      <rect x="250" y="12" width="110" height="30" rx="15" fill="#18181B" />
      <text x="305" y="32" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">WEB予約</text>

      <rect x="16" y="65" width="344" height="180" rx="12" fill="#FAF8F5" stroke="#E5E0D8" stroke-width="1" />
      <text x="30" y="115" font-family="-apple-system, 'Hiragino Mincho ProN', serif" font-size="20" font-weight="600" fill="#18181B">髪と心が整う、<br />特別な時間。</text>
      <text x="30" y="165" font-family="-apple-system, sans-serif" font-size="11" fill="#71717A">表参道駅 徒歩3分 / 個室スパ完備</text>
      <rect x="30" y="185" width="150" height="32" rx="16" fill="#18181B" />
      <text x="105" y="206" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">初回限定プラン</text>

      <rect x="16" y="260" width="344" height="75" rx="10" fill="#F4F0EA" />
      <text x="30" y="295" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#18181B">カット＋プレミアムトリートメント</text>
      <text x="330" y="300" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#18181B" text-anchor="end">¥8,800</text>

      <rect x="16" y="350" width="344" height="75" rx="10" fill="#F4F0EA" />
      <text x="30" y="385" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#18181B">個室オーガニックヘッドスパ (60分)</text>
      <text x="330" y="390" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#18181B" text-anchor="end">¥9,900</text>

      <g transform="translate(0, 480)">
        <rect x="16" y="0" width="165" height="48" rx="24" fill="#06C755" />
        <text x="98" y="30" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">LINEで相談</text>

        <rect x="195" y="0" width="165" height="48" rx="24" fill="#18181B" />
        <text x="277" y="30" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">即時WEB予約</text>
      </g>
    </g>
  </g>
</svg>
`;

// 3. Project 03: 日本のフィットネス・トレーニングジム FORGE FITNESS & TRAINING
const project03Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1500" width="2400" height="1500">
  <defs>
    <linearGradient id="fBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F1F5F9" />
      <stop offset="50%" stop-color="#E2E8F0" />
      <stop offset="100%" stop-color="#CBD5E1" />
    </linearGradient>
    <linearGradient id="gymDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <linearGradient id="energyBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <filter id="fShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#0F172A" flood-opacity="0.16" />
    </filter>
    <filter id="gymCardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.2" />
    </filter>
  </defs>

  <rect width="2400" height="1500" fill="url(#fBg)" />
  <polygon points="0,0 1200,0 800,1500 0,1500" fill="#FFFFFF" opacity="0.4" />

  <!-- 左上：トレーニング器具＆ジム空間カード -->
  <g filter="url(#gymCardShadow)" transform="translate(100, 100)">
    <rect width="360" height="460" rx="16" fill="#FFFFFF" />
    <rect x="16" y="16" width="328" height="300" rx="12" fill="#0F172A" />
    <!-- ダンベル・ケトルベルのアイコン/イラストレーション -->
    <circle cx="180" cy="166" r="60" fill="#1E293B" stroke="#334155" stroke-width="2" />
    <rect x="110" y="160" width="140" height="12" rx="6" fill="#94A3B8" />
    <rect x="110" y="130" width="24" height="72" rx="6" fill="#2563EB" />
    <rect x="226" y="130" width="24" height="72" rx="6" fill="#2563EB" />
    <text x="32" y="350" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#0F172A">完全個室パーソナルジム</text>
    <text x="32" y="378" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">最新マシンと専属トレーナーによる指導</text>
    <text x="32" y="420" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#2563EB">FREE TRIAL AVAILABLE</text>
  </g>

  <!-- 右下：プロテイン・ボディメイク成果 カード -->
  <g filter="url(#gymCardShadow)" transform="translate(1920, 920)">
    <rect width="380" height="480" rx="16" fill="#FFFFFF" />
    <rect x="16" y="16" width="348" height="310" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
    <!-- シェイカー＆プログラム -->
    <rect x="155" y="80" width="70" height="150" rx="10" fill="#1E293B" />
    <rect x="165" y="60" width="50" height="25" rx="6" fill="#2563EB" />
    <text x="190" y="165" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">FORGE</text>
    <text x="32" y="365" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#0F172A">無料カウンセリング＆体験</text>
    <text x="32" y="395" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">ウェア・シューズ無料レンタル完備</text>
    <text x="32" y="440" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#2563EB">初回体験 ¥0 / 手ぶらOK</text>
  </g>

  <!-- バッジ -->
  <rect x="520" y="70" width="390" height="44" rx="22" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
  <circle cx="545" cy="92" r="6" fill="#2563EB" />
  <text x="565" y="100" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#0F172A" letter-spacing="1">CONCEPT PROJECT / FITNESS</text>

  <!-- ==================== メイン：PC Webサイト モックアップ ==================== -->
  <g filter="url(#fShadow)" transform="translate(500, 140)">
    <rect width="1380" height="1220" rx="20" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    
    <!-- ブラウザヘッダー -->
    <path d="M 0 20 Q 0 0 20 0 L 1360 0 Q 1380 0 1380 20 L 1380 64 L 0 64 Z" fill="#F8FAFC" />
    <line x1="0" y1="64" x2="1380" y2="64" stroke="#E2E8F0" stroke-width="1" />
    <circle cx="36" cy="32" r="7" fill="#EF4444" opacity="0.8" />
    <circle cx="60" cy="32" r="7" fill="#F59E0B" opacity="0.8" />
    <circle cx="84" cy="32" r="7" fill="#10B981" opacity="0.8" />
    <rect x="140" y="16" width="560" height="32" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
    <text x="160" y="37" font-family="-apple-system, sans-serif" font-size="13" fill="#64748B">forge-fitness-training.concept.jp</text>

    <!-- ナビゲーション -->
    <g transform="translate(0, 64)">
      <rect width="1380" height="80" fill="#FFFFFF" />
      <line x1="0" y1="80" x2="1380" y2="80" stroke="#F1F5F9" stroke-width="1" />
      <text x="50" y="48" font-family="-apple-system, sans-serif" font-size="22" font-weight="800" fill="#0F172A" letter-spacing="2">FORGE FITNESS</text>
      <text x="290" y="48" font-family="-apple-system, sans-serif" font-size="11" fill="#64748B">パーソナルジム＆スタジオ</text>

      <text x="860" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">PROGRAM</text>
      <text x="970" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">TRAINER</text>
      <text x="1060" y="47" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155">PRICE</text>

      <rect x="1170" y="18" width="160" height="44" rx="22" fill="url(#energyBlue)" />
      <text x="1250" y="45" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">無料体験予約</text>
    </g>

    <!-- ヒーローセクション -->
    <g transform="translate(0, 144)">
      <rect width="1380" height="540" fill="url(#gymDark)" />
      
      <!-- ジム空間ビジュアル -->
      <rect x="660" y="40" width="670" height="460" rx="16" fill="#1E293B" stroke="#334155" stroke-width="1" />
      <circle cx="995" cy="270" r="140" fill="#2563EB" opacity="0.2" />
      <text x="995" y="265" font-family="-apple-system, sans-serif" font-size="32" font-weight="800" fill="#F8FAFC" text-anchor="middle" letter-spacing="2">BUILD YOUR BEST SELF</text>
      <text x="995" y="305" font-family="-apple-system, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">科学的アプローチ×完全個室空間</text>

      <!-- 左側キャッチコピー -->
      <rect x="70" y="85" width="180" height="28" rx="4" fill="#2563EB" />
      <text x="160" y="104" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">PERSONAL TRAINING</text>

      <text x="70" y="180" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="44" font-weight="800" fill="#FFFFFF" letter-spacing="1">身体が変わる、</text>
      <text x="70" y="245" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="44" font-weight="800" fill="#FFFFFF" letter-spacing="1">毎日が動き出す。</text>
      
      <text x="70" y="315" font-family="-apple-system, sans-serif" font-size="15" fill="#94A3B8" line-height="26">専属トレーナーによる無理のないオーダーメイドプログラム。<br />初心者でも確実に成果を実感できる理想のボディメイク。</text>

      <rect x="70" y="390" width="220" height="50" rx="25" fill="url(#energyBlue)" />
      <text x="180" y="421" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">無料カウンセリング体験</text>
      
      <rect x="310" y="390" width="180" height="50" rx="25" fill="#1E293B" stroke="#475569" stroke-width="1.5" />
      <text x="400" y="421" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">料金プランを見る</text>
    </g>

    <!-- 下部：プログラム紹介 3枚 -->
    <g transform="translate(50, 720)">
      <text x="20" y="30" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#0F172A">TRAINING PROGRAMS</text>
      
      <!-- プログラム1 -->
      <rect x="20" y="60" width="390" height="380" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
      <rect x="40" y="80" width="350" height="200" rx="10" fill="#DBEAFE" />
      <text x="215" y="185" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#1D4ED8" text-anchor="middle">Body Make 60</text>
      <text x="40" y="315" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#0F172A">ボディメイク＆引き締め</text>
      <text x="40" y="345" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">理想の筋肉美・くびれを作る集中プラン</text>

      <!-- プログラム2 -->
      <rect x="440" y="60" width="390" height="380" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
      <rect x="460" y="80" width="350" height="200" rx="10" fill="#DBEAFE" />
      <text x="635" y="185" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#1D4ED8" text-anchor="middle">Diet &amp; Detox</text>
      <text x="460" y="315" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#0F172A">健康的な減量・食事管理</text>
      <text x="460" y="345" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">リバウンドしない正しい食習慣と代謝UP</text>

      <!-- プログラム3 -->
      <rect x="860" y="60" width="390" height="380" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
      <rect x="880" y="80" width="350" height="200" rx="10" fill="#DBEAFE" />
      <text x="1055" y="185" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#1D4ED8" text-anchor="middle">Conditioning</text>
      <text x="880" y="315" font-family="-apple-system, sans-serif" font-size="17" font-weight="700" fill="#0F172A">姿勢改善・肩こり解消</text>
      <text x="880" y="345" font-family="-apple-system, sans-serif" font-size="12" fill="#64748B">デスクワークの疲労回復と柔軟性向上</text>
    </g>
  </g>

  <!-- 手前スマートフォン -->
  <g filter="url(#gymCardShadow)" transform="translate(1820, 200)">
    <rect width="400" height="820" rx="44" fill="#0F172A" stroke="#334155" stroke-width="6" />
    <rect x="12" y="12" width="376" height="796" rx="34" fill="#FFFFFF" />
    <rect x="140" y="22" width="120" height="24" rx="12" fill="#0F172A" />

    <g transform="translate(12, 55)">
      <rect width="376" height="50" fill="#FFFFFF" />
      <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="#0F172A">FORGE</text>
      <rect x="250" y="12" width="110" height="30" rx="15" fill="#2563EB" />
      <text x="305" y="32" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">無料体験</text>

      <rect x="16" y="65" width="344" height="180" rx="12" fill="#0F172A" />
      <text x="30" y="115" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">身体が変わる、<br />毎日が動き出す。</text>
      <text x="30" y="165" font-family="-apple-system, sans-serif" font-size="11" fill="#94A3B8">完全個室 / シャワー完備 / 手ぶらOK</text>
      <rect x="30" y="185" width="160" height="32" rx="16" fill="#2563EB" />
      <text x="110" y="206" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" text-anchor="middle">Webから簡単予約</text>

      <rect x="16" y="260" width="344" height="75" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
      <text x="30" y="295" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#0F172A">月4回コース (1回60分)</text>
      <text x="330" y="300" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#2563EB" text-anchor="end">¥28,000〜</text>

      <rect x="16" y="350" width="344" height="75" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
      <text x="30" y="385" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#0F172A">月8回 集中ボディメイク</text>
      <text x="330" y="390" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#2563EB" text-anchor="end">¥52,000〜</text>

      <g transform="translate(0, 480)">
        <rect x="16" y="0" width="344" height="50" rx="25" fill="#2563EB" />
        <text x="188" y="31" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">まずは無料体験レッスンを予約</text>
      </g>
    </g>
  </g>
</svg>
`;

async function generateRichWorks() {
  const images = [
    {
      svg: project01Svg,
      output: path.join(__dirname, '../public/images/works/project-01.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
      quality: 93,
    },
    {
      svg: project02Svg,
      output: path.join(__dirname, '../public/images/works/project-02.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
      quality: 93,
    },
    {
      svg: project03Svg,
      output: path.join(__dirname, '../public/images/works/project-03.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
      quality: 93,
    },
  ];

  for (const img of images) {
    const svgBuffer = Buffer.from(img.svg);
    console.log(`Generating rich visual for ${path.basename(img.output)}...`);

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

  console.log('All rich works visuals generated successfully!');
}

generateRichWorks().catch((err) => {
  console.error(err);
  process.exit(1);
});
