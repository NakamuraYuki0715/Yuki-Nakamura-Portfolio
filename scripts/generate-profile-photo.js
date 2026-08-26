const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1200 x 1500 (4:5 縦長ポートレート)
const profilePortraitSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" width="1200" height="1500">
  <defs>
    <!-- 背景：明るく清潔感のあるスタジオ・ワークスペース光 -->
    <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAFAFA" />
      <stop offset="50%" stop-color="#F4F4F5" />
      <stop offset="100%" stop-color="#E4E4E7" />
    </linearGradient>

    <!-- 自然光の柔らかいボケ -->
    <linearGradient id="windowLight" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </linearGradient>

    <!-- 人物の服（ダークネイビー・上質なテーラードジャケット） -->
    <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" />
      <stop offset="40%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="jacketLapel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <!-- インナーTシャツ（清潔感のあるクリーンホワイト） -->
    <linearGradient id="innerShirt" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>

    <!-- 自然で健康的な肌トーン（日本人男性・20代後半） -->
    <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FCE7D6" />
      <stop offset="65%" stop-color="#F7D3B6" />
      <stop offset="100%" stop-color="#E8B896" />
    </linearGradient>

    <!-- 髪の質感・自然な毛流れ -->
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D2727" />
      <stop offset="50%" stop-color="#1C1917" />
      <stop offset="100%" stop-color="#0A0A0A" />
    </linearGradient>

    <!-- ノートPC（スペースグレー / アルミニウム） -->
    <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="50%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#64748B" />
    </linearGradient>
    <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F8FAFC" />
    </linearGradient>

    <!-- ドロップシャドウ＆ブラー -->
    <filter id="bgBokeh">
      <feGaussianBlur stdDeviation="24" />
    </filter>
    <filter id="subtleBokeh">
      <feGaussianBlur stdDeviation="12" />
    </filter>
    <filter id="laptopShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.25" />
    </filter>
    <filter id="handShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0F172A" flood-opacity="0.18" />
    </filter>
  </defs>

  <!-- ==================== 背景：清潔感のあるスタジオ・ワークスペース ==================== -->
  <rect width="1200" height="1500" fill="url(#studioBg)" />

  <!-- 柔らかな自然光の差し込み -->
  <polygon points="0,0 800,0 400,1200 0,1200" fill="url(#windowLight)" opacity="0.6" />

  <!-- 背景のボケたワークスペースインテリア -->
  <!-- デスク＆シェルフ -->
  <rect x="80" y="300" width="280" height="400" rx="16" fill="#CBD5E1" opacity="0.25" filter="url(#bgBokeh)" />
  <rect x="840" y="240" width="300" height="500" rx="20" fill="#E2E8F0" opacity="0.4" filter="url(#bgBokeh)" />
  
  <!-- 観葉植物の柔らかなボケ -->
  <circle cx="1060" cy="450" r="100" fill="#10B981" opacity="0.08" filter="url(#bgBokeh)" />
  <circle cx="1120" cy="380" r="80" fill="#059669" opacity="0.06" filter="url(#bgBokeh)" />
  <circle cx="120" cy="500" r="90" fill="#10B981" opacity="0.07" filter="url(#bgBokeh)" />

  <!-- 下部デスクの柔らかな陰影 -->
  <rect x="0" y="1180" width="1200" height="320" fill="#F1F5F9" opacity="0.7" />
  <line x1="0" y1="1180" x2="1200" y2="1180" stroke="#E2E8F0" stroke-width="2" />


  <!-- ==================== 人物（上半身〜腰） ==================== -->
  <!-- 胴体・ジャケット -->
  <g id="body">
    <!-- 背中・肩の広がり -->
    <path d="M 220 1500 L 250 1050 C 270 820, 390 730, 480 690 L 600 670 L 720 690 C 810 730, 930 820, 950 1050 L 980 1500 Z" fill="url(#jacketGrad)" />
    
    <!-- ジャケットのラペル（襟元） -->
    <path d="M 480 690 L 530 920 L 600 1080 L 540 1080 L 440 820 Z" fill="url(#jacketLapel)" />
    <path d="M 720 690 L 670 920 L 600 1080 L 660 1080 L 760 820 Z" fill="url(#jacketLapel)" />

    <!-- インナー：クリーンホワイト クルーネック -->
    <path d="M 505 680 C 505 820, 695 820, 695 680 Z" fill="url(#innerShirt)" />
    <!-- 首元のリブ編みライン -->
    <path d="M 505 680 C 530 710, 670 710, 695 680" stroke="#E2E8F0" stroke-width="3" fill="none" />
  </g>

  <!-- 首 -->
  <g id="neck">
    <path d="M 515 510 L 515 675 C 555 700, 645 700, 685 675 L 685 510 Z" fill="url(#skinBase)" />
    <!-- 首の自然な陰影 -->
    <path d="M 525 580 C 570 635, 630 635, 675 580 L 685 670 C 640 695, 560 695, 515 670 Z" fill="#D99B72" opacity="0.4" />
  </g>

  <!-- 頭部・顔（日本人男性・20代後半・親しみやすく知的な表情） -->
  <g id="head">
    <!-- 顔の輪郭 -->
    <path d="M 430 360 C 430 220, 770 220, 770 360 C 770 510, 715 615, 600 620 C 485 615, 430 510, 430 360 Z" fill="url(#skinBase)" />
    
    <!-- 頬・顎周りの自然なシェーディング -->
    <path d="M 440 430 C 470 540, 550 605, 600 610 C 650 605, 730 540, 760 430 C 730 560, 650 615, 600 615 C 550 615, 470 560, 440 430 Z" fill="#D99B72" opacity="0.3" />

    <!-- 耳 -->
    <path d="M 425 365 C 410 380, 410 440, 430 460 Z" fill="#F7D3B6" />
    <path d="M 775 365 C 790 380, 790 440, 770 460 Z" fill="#F7D3B6" />

    <!-- 髪型（清潔感のあるナチュラルな黒髪・トップに適度なボリューム・毛流れ） -->
    <path d="M 415 330 C 405 180, 525 100, 620 100 C 735 100, 795 180, 785 330 C 755 250, 730 230, 690 220 C 600 195, 520 230, 455 285 C 435 300, 425 315, 415 330 Z" fill="url(#hairGrad)" />
    <!-- サイド・もみあげ -->
    <path d="M 425 320 C 415 360, 420 420, 435 440 C 430 400, 430 360, 435 330 Z" fill="url(#hairGrad)" />
    <path d="M 775 320 C 785 360, 780 420, 765 440 C 770 400, 770 360, 765 330 Z" fill="url(#hairGrad)" />
    <!-- 前髪の自然な分け目・スタイリング -->
    <path d="M 425 295 C 465 245, 535 240, 580 270 C 545 255, 485 260, 445 315 Z" fill="url(#hairGrad)" />
    <path d="M 560 250 C 620 230, 690 235, 735 280 C 700 255, 645 250, 585 270 Z" fill="url(#hairGrad)" />

    <!-- 眉（整った清潔感のある黒眉） -->
    <path d="M 470 340 C 505 325, 545 330, 565 345" stroke="#1C1917" stroke-width="6" stroke-linecap="round" fill="none" />
    <path d="M 635 345 C 655 330, 695 325, 730 340" stroke="#1C1917" stroke-width="6" stroke-linecap="round" fill="none" />

    <!-- 目（自然で親しみやすい眼差し・自信と誠実さ） -->
    <!-- 左目 -->
    <ellipse cx="518" cy="385" rx="22" ry="13" fill="#FFFFFF" />
    <circle cx="520" cy="384" r="10" fill="#1C1917" />
    <circle cx="522" cy="382" r="3.5" fill="#FFFFFF" />
    <path d="M 495 380 C 512 368, 532 368, 545 380" stroke="#0F172A" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <path d="M 498 392 C 515 398, 530 398, 542 392" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" fill="none" />

    <!-- 右目 -->
    <ellipse cx="682" cy="385" rx="22" ry="13" fill="#FFFFFF" />
    <circle cx="680" cy="384" r="10" fill="#1C1917" />
    <circle cx="682" cy="382" r="3.5" fill="#FFFFFF" />
    <path d="M 655 380 C 668 368, 688 368, 705 380" stroke="#0F172A" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <path d="M 658 392 C 670 398, 685 398, 702 392" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" fill="none" />

    <!-- 鼻（端正で立体的なライン） -->
    <path d="M 598 360 L 595 450 C 585 458, 615 458, 605 450" stroke="#B45309" stroke-opacity="0.3" stroke-width="3" fill="none" stroke-linejoin="round" />
    <circle cx="585" cy="452" r="3.5" fill="#B45309" opacity="0.25" />
    <circle cx="615" cy="452" r="3.5" fill="#B45309" opacity="0.25" />

    <!-- 口（爽やかで親しみやすい笑顔・口角が上がった表情） -->
    <path d="M 545 515 C 575 545, 625 545, 655 515" stroke="#991B1B" stroke-opacity="0.7" stroke-width="4.5" stroke-linecap="round" fill="none" />
    <!-- 自然な白い歯のライン -->
    <path d="M 560 522 C 585 536, 615 536, 640 522 Z" fill="#FFFFFF" opacity="0.9" />
    <path d="M 555 525 C 580 546, 620 546, 645 525" stroke="#E11D48" stroke-opacity="0.2" stroke-width="3" stroke-linecap="round" fill="none" />
  </g>


  <!-- ==================== 薄型ノートPC（両手で前に持っている構図） ==================== -->
  <g id="laptopAndHands" transform="translate(0, 50)">
    <!-- ノートPCのドロップシャドウ -->
    <rect x="220" y="860" width="760" height="480" rx="20" fill="#000000" opacity="0.25" filter="url(#laptopShadow)" />

    <!-- ノートPC本体（画面ベゼル・スペースグレー） -->
    <rect x="220" y="850" width="760" height="490" rx="16" fill="#1E293B" stroke="#64748B" stroke-width="3" />
    <circle cx="600" cy="866" r="4" fill="#0F172A" /> <!-- Webカメラ -->

    <!-- ===== PC画面：Yuki Nakamuraポートフォリオサイト画面 ===== -->
    <g transform="translate(240, 880)">
      <!-- 画面内キャンバス (720 x 430) -->
      <rect width="720" height="430" rx="6" fill="#FFFFFF" />
      
      <!-- 画面内ヘッダー -->
      <rect width="720" height="40" fill="#FFFFFF" />
      <line x1="0" y1="40" x2="720" y2="40" stroke="#F1F5F9" stroke-width="1" />
      <text x="24" y="26" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="#0F172A" letter-spacing="1">YUKI NAKAMURA</text>
      <text x="440" y="25" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="#64748B">WORKS</text>
      <text x="500" y="25" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="#64748B">ABOUT</text>
      <text x="560" y="25" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="#64748B">SKILLS</text>
      <rect x="620" y="10" width="80" height="22" rx="11" fill="#4F46E5" />
      <text x="660" y="25" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="#FFFFFF" text-anchor="middle">CONTACT</text>

      <!-- 画面内ヒーロー -->
      <rect y="40" width="720" height="190" fill="#F8FAFC" />
      <rect x="24" y="60" width="130" height="18" rx="9" fill="#EEF2FF" />
      <text x="89" y="73" font-family="-apple-system, sans-serif" font-size="8" font-weight="700" fill="#4F46E5" text-anchor="middle">WEB DESIGNER / DEV</text>
      
      <text x="24" y="115" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="20" font-weight="800" fill="#0F172A">想いを、デザインに。</text>
      <text x="24" y="135" font-family="-apple-system, 'Hiragino Sans', sans-serif" font-size="20" font-weight="800" fill="#0F172A">成果を、技術で。</text>
      <text x="24" y="165" font-family="-apple-system, sans-serif" font-size="10" fill="#64748B">洗練されたWebデザインと高速なフロントエンド実装で、</text>
      <text x="24" y="180" font-family="-apple-system, sans-serif" font-size="10" fill="#64748B">店舗・企業の魅力を最大限に引き出します。</text>

      <rect x="24" y="195" width="110" height="26" rx="13" fill="#0F172A" />
      <text x="79" y="212" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="#FFFFFF" text-anchor="middle">制作実績を見る</text>

      <!-- ヒーロー右側モックアップカード -->
      <rect x="420" y="55" width="276" height="160" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
      <rect x="435" y="70" width="246" height="75" rx="6" fill="#1E293B" />
      <text x="558" y="112" font-family="-apple-system, serif" font-size="12" fill="#FFFFFF" text-anchor="middle">KOMOREBI CAFE</text>
      <rect x="435" y="155" width="110" height="12" rx="3" fill="#E2E8F0" />
      <rect x="435" y="172" width="180" height="8" rx="2" fill="#F1F5F9" />

      <!-- 画面内Worksプレビュー（3枚のカード） -->
      <g transform="translate(24, 245)">
        <text x="0" y="16" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#0F172A">SELECTED WORKS</text>
        
        <!-- Works 1 (Cafe) -->
        <rect x="0" y="28" width="216" height="135" rx="6" fill="#FDFBF7" stroke="#E2DCD2" stroke-width="1" />
        <rect x="8" y="36" width="200" height="60" rx="4" fill="#78350F" />
        <text x="108" y="71" font-family="-apple-system, serif" font-size="9" fill="#FFFFFF" text-anchor="middle">CAFE WEBSITE</text>
        <text x="12" y="112" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#292524">Komorebi Coffee</text>
        <text x="12" y="127" font-family="-apple-system, sans-serif" font-size="8" fill="#78716C">カフェブランドサイト</text>

        <!-- Works 2 (Salon) -->
        <rect x="228" y="28" width="216" height="135" rx="6" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <rect x="236" y="36" width="200" height="60" rx="4" fill="#0F172A" />
        <text x="336" y="71" font-family="-apple-system, serif" font-size="9" fill="#FFFFFF" text-anchor="middle">HAIR SALON</text>
        <text x="240" y="112" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#0F172A">LUMEN Tokyo</text>
        <text x="240" y="127" font-family="-apple-system, sans-serif" font-size="8" fill="#64748B">美容室オフィシャル</text>

        <!-- Works 3 (Corporate) -->
        <rect x="456" y="28" width="216" height="135" rx="6" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
        <rect x="464" y="36" width="200" height="60" rx="4" fill="#1E3A8A" />
        <text x="564" y="71" font-family="-apple-system, sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle">CORPORATE</text>
        <text x="468" y="112" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#0F172A">VERTEX Inc.</text>
        <text x="468" y="127" font-family="-apple-system, sans-serif" font-size="8" fill="#64748B">日本企業コーポレート</text>
      </g>
    </g>

    <!-- ノートPCの下部キーボード・ヒンジ部 -->
    <polygon points="180,1340 1020,1340 1000,1400 200,1400" fill="url(#laptopBody)" stroke="#475569" stroke-width="1.5" />
    <line x1="200" y1="1340" x2="1000" y2="1340" stroke="#334155" stroke-width="3" />

    <!-- ===== ノートPCを両手で持っている手・指 ===== -->
    <!-- 左手（PCの左下エッジを支える自然な手と親指） -->
    <g filter="url(#handShadow)">
      <!-- 左親指（PC前面に乗る） -->
      <path d="M 210 1280 C 235 1250, 270 1250, 280 1285 C 285 1315, 250 1340, 220 1340 Z" fill="url(#skinBase)" />
      <!-- 親指の爪 -->
      <ellipse cx="255" cy="1275" rx="10" ry="14" fill="#FCE7D6" stroke="#E8B896" stroke-width="1" transform="rotate(-20 255 1275)" />
      <!-- 左手の手のひら・手首（ジャケットの袖から出る） -->
      <path d="M 120 1480 L 160 1350 C 180 1320, 220 1320, 230 1360 L 210 1500 Z" fill="url(#skinBase)" />
      <!-- 左袖口 -->
      <path d="M 100 1500 L 140 1370 C 150 1340, 200 1340, 210 1370 L 190 1500 Z" fill="url(#jacketGrad)" />
    </g>

    <!-- 右手（PCの右下エッジを支える自然な手と親指） -->
    <g filter="url(#handShadow)">
      <!-- 右親指（PC前面に乗る） -->
      <path d="M 990 1280 C 965 1250, 930 1250, 920 1285 C 915 1315, 950 1340, 980 1340 Z" fill="url(#skinBase)" />
      <!-- 親指の爪 -->
      <ellipse cx="945" cy="1275" rx="10" ry="14" fill="#FCE7D6" stroke="#E8B896" stroke-width="1" transform="rotate(20 945 1275)" />
      <!-- 右手の手のひら・手首 -->
      <path d="M 1080 1480 L 1040 1350 C 1020 1320, 980 1320, 970 1360 L 990 1500 Z" fill="url(#skinBase)" />
      <!-- 右袖口 -->
      <path d="M 1100 1500 L 1060 1370 C 1050 1340, 1000 1340, 990 1370 L 1010 1500 Z" fill="url(#jacketGrad)" />
    </g>
  </g>
</svg>
`;

async function generateProfileImage() {
  const outputPath = path.join(__dirname, '../public/images/profile.jpg');
  console.log('Rendering authentic JPEG profile portrait with Sharp...');

  const jpegBuffer = await sharp(Buffer.from(profilePortraitSvg), { density: 300 })
    .resize(1200, 1500, { fit: 'cover' })
    .jpeg({
      quality: 95,
      mozjpeg: true,
      chromaSubsampling: '4:4:4',
    })
    .toBuffer();

  fs.writeFileSync(outputPath, jpegBuffer);
  console.log(`Successfully generated ${outputPath} (${jpegBuffer.length} bytes, Magic: ${jpegBuffer.subarray(0, 4).toString('hex')})`);
}

generateProfileImage().catch((err) => {
  console.error(err);
  process.exit(1);
});
