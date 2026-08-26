/**
 * Yuki Nakamura 制作実績データ
 * 編集・追加することで、Works一覧およびWorks詳細ページ（/works/[slug]）に自動反映されます。
 * ※本制作実績はすべて架空の制作事例（CONCEPT PROJECT）です。
 */

export interface WorkItem {
  slug: string;
  title: string;
  category: "Website" | "LP (Landing Page)" | "Corporate" | "EC / Media" | "Salon / Clinic" | "Restaurant / Cafe" | "Fitness / Sports";
  description: string;
  image: string;
  technologies: string[];
  period: string;
  role: string;
  url?: string; // 公開URL（ない場合は未設定または空文字）
  type: "concept" | "sample" | "client";
  typeBadge: string; // "CONCEPT PROJECT" | "SAMPLE WORK" 等
  overview: string;
  purpose: string;
  challenge: string;
  concept: string;
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  result: string;
  resultType: string; // "想定効果" | "制作実績" 等
  features?: string[];
}

export const worksData: WorkItem[] = [
  {
    slug: "project-01",
    title: "KOMOREBI COFFEE ROASTERS",
    category: "Website",
    description:
      "落ち着いた和モダン空間と自家焙煎珈琲・スイーツの魅力を伝える、日本のカフェ・飲食店向けオフィシャルサイト＆オンラインメニュー設計。",
    image: "/images/works/project-01.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    period: "2 Weeks",
    role: "Design / Coding",
    url: "",
    type: "concept",
    typeBadge: "CONCEPT PROJECT",
    overview:
      "日本の街並みに溶け込む落ち着いたカフェ＆ロースタリーを想定したコンセプトプロジェクト。木材の温もりや自然光、挽きたてのコーヒーや自家製スイーツのシズル感を活かしたトーン＆マナーで、店舗の空気感を丁寧に届け、来店意欲を高めるデザインを設計しました。",
    purpose:
      "店舗のこだわり・自家焙煎ストーリーを直感的に伝え、新規来客およびテイクアウト・豆の購入へスムーズに誘導すること。",
    challenge:
      "スマートフォンでの閲覧時に、メニューやアクセス・営業時間、混雑状況などの実用的な情報へストレスなく到達できる情報構造の構築。",
    concept:
      "「日常に寄り添う、一杯の余白」。温かみのあるアースカラーと計算された余白で、店内の心地よさがそのまま伝わる洗練されたUIを追求。",
    process: [
      {
        step: "01",
        title: "ターゲット設計・店舗導線分析",
        description: "近隣住民やカフェ巡り愛好家の利用シーンを想定し、アクセスとメニュー閲覧の優先順位を策定。",
      },
      {
        step: "02",
        title: "モバイルファーストUI設計",
        description: "片手でも操作しやすいスマートフォン向けメニュー切り替えタブと地図連携UIをFigmaで制作。",
      },
      {
        step: "03",
        title: "フロントエンド実装",
        description: "Next.jsとTailwind CSSによる高速な表示と、写真が引き立つ滑らかなフェードアニメーションを実装。",
      },
    ],
    result:
      "※日本のカフェを想定したコンセプトプロジェクトです。店舗ブランディングの確立と、スマホからのスムーズな来店導線設計を検証しています。",
    resultType: "想定成果",
    features: [
      "スマートフォン最適化メニュー表示（カテゴリ別タブ切り替え）",
      "Google Maps連携・営業時間・アクセス情報のワンタップ確認",
      "Core Web Vitalsを意識した画像遅延読み込みと高速レスポンス",
    ],
  },
  {
    slug: "project-02",
    title: "LUMEN HAIR & SPA TOKYO",
    category: "Website",
    description:
      "清潔感と上質さを兼ね備えた、日本の美容室・ヘアサロン向けオフィシャルサイト。ヘアカタログギャラリーと24h即時WEB予約導線を設計。",
    image: "/images/works/project-02.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    period: "2 Weeks",
    role: "Design / Coding",
    url: "",
    type: "concept",
    typeBadge: "CONCEPT PROJECT",
    overview:
      "都内のヘアサロン＆ヘッドスパを想定したコンセプトプロジェクト。サロンの上質な施術空間とスタイリストの技術力を引き立てるミニマルな構成で、初めての顧客でも安心して予約できる導線を構築しました。",
    purpose:
      "サロンのトリートメント技術やカットスタイルを視覚的に訴求し、24時間WEB予約およびLINE予約への転換を促進すること。",
    challenge:
      "豊富なメニューや料金表、スタイリスト一覧を分かりやすく整理し、ユーザーが迷わずに予約完了まで進めるシンプルなUXの提供。",
    concept:
      "「髪と心が整う、特別な時間」。グレージュとオフホワイトを基調とした透明感のあるデザインで、安心感とプレミアム感を両立。",
    process: [
      {
        step: "01",
        title: "予約導線とメニュー構造の整理",
        description: "初回来店客が気になる料金体系・スタッフ指名・予約システムへの導線を最短タップ数で結ぶ設計。",
      },
      {
        step: "02",
        title: "スタイルギャラリーUI制作",
        description: "レングス別・テイスト別で探しやすい直感的なヘアカタログUIとスタッフ紹介カードを設計。",
      },
      {
        step: "03",
        title: "コーディング・アクセシビリティ",
        description: "どの端末でも崩れない堅牢なレスポンシブコーディングと、視認性の高いコントラスト比を確保。",
      },
    ],
    result:
      "※日本の美容室・サロンを想定したコンセプトプロジェクトです。WEB予約率の向上とサロンのブランディング向上を意識したUI構造です。",
    resultType: "想定成果",
    features: [
      "常時追従する『WEB予約 / LINE相談』固定フローティングボタン",
      "レングス・雰囲気で絞り込めるスタイルカタログギャラリー",
      "スタイリストごとの得意技術とプロフィール詳細モーダル",
    ],
  },
  {
    slug: "project-03",
    title: "FORGE FITNESS & TRAINING",
    category: "Website",
    description:
      "健康的で洗練されたライフスタイルを提案する、パーソナルトレーニングジム向けブランドサイト。無料カウンセリング予約への導線を最適化。",
    image: "/images/works/project-03.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive"],
    period: "2.5 Weeks",
    role: "Design / Coding",
    url: "",
    type: "concept",
    typeBadge: "CONCEPT PROJECT",
    overview:
      "日本国内のモダンなパーソナルフィットネスジムを想定したコンセプトプロジェクト。高品質なトレーニング空間と専門トレーナーによる指導の魅力を伝え、運動初心者から本格派まで安心して体験予約ができる導線を設計しました。",
    purpose:
      "ジムの設備・プログラム・トレーナーの信頼性を伝え、無料体験・カウンセリング申し込みへのコンバージョンを高めること。",
    challenge:
      "料金プランやトレーニング内容の分かりやすさを担保しつつ、モチベーションを高めるダイナミックかつ清潔感のあるビジュアル演出。",
    concept:
      "「身体が変わる、毎日が動き出す」。ディープチャコールとクリーンホワイトにエナジーブルーの差し色を加え、健康的でスタイリッシュな世界観を構築。",
    process: [
      {
        step: "01",
        title: "体験予約ファネルの最適化",
        description: "ジム検討者の不安を解消するため、トレーナー紹介・設備紹介・料金の透明性を重視した構成を策定。",
      },
      {
        step: "02",
        title: "プログラム・設備紹介UI設計",
        description: "初心者向けコースからボディメイクまで、目的に応じて選べるプランカードとスケジュール一覧をデザイン。",
      },
      {
        step: "03",
        title: "レスポンシブ実装と高速化",
        description: "モバイルからのスムーズな予約フォーム入力と、高解像度写真の高速ロードを実現。",
      },
    ],
    result:
      "※日本のフィットネスジムを想定したコンセプトプロジェクトです。入会検討者の安心感醸成と体験予約率向上を目指したUI設計です。",
    resultType: "想定成果",
    features: [
      "3ステップで完了する無料体験・カウンセリング予約フォーム",
      "充実した最新マシン設備と個室シャワールームのギャラリー",
      "料金プランの分かりやすい比較表と月額シミュレーション",
    ],
  },
];
