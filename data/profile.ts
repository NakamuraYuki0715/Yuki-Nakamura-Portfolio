/**
 * Yuki Nakamura プロフィールデータ
 * 編集することで、Aboutセクション等のプロフィール情報を更新できます。
 */

export interface ProfileData {
  name: {
    en: string;
    ja: string;
  };
  role: {
    en: string;
    ja: string;
  };
  image: string;
  shortBio: string;
  introduction: string[];
  philosophy: {
    title: string;
    heading: string;
    paragraphs: string[];
  };
  details: {
    label: string;
    value: string;
  }[];
}

export const profileData: ProfileData = {
  name: {
    en: "Yuki Nakamura",
    ja: "中村 優希",
  },
  role: {
    en: "Web Designer / Front-end Developer",
    ja: "Webデザイナー / フロントエンドエンジニア",
  },
  image: "/images/profile.webp",
  shortBio:
    "Webサイトのデザインからフロントエンド実装まで、ユーザーにとって分かりやすく、企業や店舗の魅力が伝わるWebサイトを制作します。",
  introduction: [
    "Webサイトのデザインからフロントエンド実装まで、ユーザーにとって分かりやすく、企業や店舗の魅力が伝わるWebサイトを制作します。",
    "デザインの美しさだけで終わらず、「見た目」「使いやすさ」「スマートフォン対応」「表示速度」「SEO」まで深く考慮した、成果につながるWeb制作を心がけています。",
  ],
  philosophy: {
    title: "WHY I BUILD WEBSITES",
    heading: "想いのあるサービスを、もっと多くの人に届けたい。",
    paragraphs: [
      "素晴らしい商品やサービス、熱い想いを持っている事業者様でも、Web上での伝え方が分からず魅力を届けきれていないケースが多くあります。",
      "私は、デザインとテクノロジーの力でその想いを形にし、訪れたユーザーの心に真っ直ぐ届くWebサイトを創り出したいと考えています。ただ作るだけでなく、クライアントのビジネスの成長に寄り添うパートナーとして制作に向き合っています。",
    ],
  },
  details: [
    { label: "拠点", value: "日本（リモート対応可能）" },
    { label: "対応領域", value: "Webデザイン / LP制作 / コーポレートサイト / フロントエンド開発" },
    { label: "制作スタイル", value: "ヒアリングからデザイン・コーディング・公開まで一貫対応" },
  ],
};
