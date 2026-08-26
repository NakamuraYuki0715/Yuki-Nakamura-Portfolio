/**
 * Yuki Nakamura サイト全体設定・テキストデータ
 * 編集することで、サイト基本情報、ナビゲーション、強み（Strength）、CTA、お問い合わせ設定などを一括変更できます。
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface StrengthItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SiteConfig {
  siteName: string;
  brandName: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  role: string;
  navLinks: NavItem[];
  hero: {
    badge: string;
    mainCopy: string;
    subCopy: string;
    description: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
  };
  strengths: {
    badge: string;
    heading: string;
    subHeading: string;
    items: StrengthItem[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  contact: {
    badge: string;
    heading: string;
    description: string;
    topics: string[];
    notice: string;
  };
  footer: {
    copyrightYear: number;
    copyrightName: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "Yuki Nakamura Portfolio",
  brandName: "YUKI NAKAMURA",
  title: "Yuki Nakamura | Web Designer / Front-end Developer",
  description:
    "Yuki NakamuraのWeb制作ポートフォリオ。WebサイトやLPのデザインからフロントエンド実装まで、目的やブランドに合わせたWeb制作を提供します。",
  keywords: [
    "Yuki Nakamura",
    "Webデザイナー",
    "フロントエンドエンジニア",
    "Web制作",
    "LP制作",
    "ポートフォリオ",
    "Next.js",
    "Tailwind CSS",
  ],
  author: "Yuki Nakamura",
  role: "Web Designer / Front-end Developer",
  navLinks: [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Works", href: "/#works" },
    { label: "Strength", href: "/#strength" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    badge: "Web Designer & Front-end Developer",
    mainCopy: "想いを、伝わるデザインへ。",
    subCopy: "Web Design × Front-end Development",
    description:
      "Webサイト・LPのデザインからフロントエンド実装まで。企業の魅力や想いを整理し、成果につながる洗練されたWeb体験を創り出します。",
    ctaPrimary: {
      label: "制作実績を見る",
      href: "#works",
    },
    ctaSecondary: {
      label: "お問い合わせ",
      href: "#contact",
    },
  },
  strengths: {
    badge: "WHY YUKI",
    heading: "選ばれる理由。",
    subHeading: "デザインと実装の両面から、ビジネスの成長を支援する制作体制。",
    items: [
      {
        number: "01",
        title: "丁寧なヒアリング",
        description: "目的やターゲットを整理し、ただ作るだけではないWeb制作を行います。",
        iconName: "MessageSquare",
      },
      {
        number: "02",
        title: "デザインからコーディングまで対応",
        description: "デザインと実装を一貫して行い、イメージのズレを減らします。",
        iconName: "Layers",
      },
      {
        number: "03",
        title: "スマートフォン最適化",
        description: "PCだけでなく、スマートフォンでも快適に閲覧できるUIを設計します。",
        iconName: "Smartphone",
      },
      {
        number: "04",
        title: "SEOを意識した制作",
        description: "検索エンジンに理解されやすい構造を意識して制作します。",
        iconName: "SearchCheck",
      },
      {
        number: "05",
        title: "スムーズなコミュニケーション",
        description: "進捗や確認事項を分かりやすく共有します。",
        iconName: "Send",
      },
      {
        number: "06",
        title: "納品後もサポート",
        description: "公開して終わりではなく、必要に応じて改善や更新にも対応できる構成にします。",
        iconName: "ShieldCheck",
      },
    ],
  },
  cta: {
    heading: "Webサイトから、ビジネスを変える。",
    description: "Web制作について、まずはお気軽にご相談ください。",
    buttonText: "お問い合わせ",
    buttonHref: "#contact",
  },
  contact: {
    badge: "CONTACT",
    heading: "お気軽にご相談ください。",
    description:
      "Webサイト制作、LP制作、リニューアルなど、まずはお気軽にお問い合わせください。ご予算や公開時期が決まっていなくても丁寧にお答えいたします。",
    topics: [
      "Webサイト制作",
      "LP（ランディングページ）制作",
      "コーポレートサイト制作",
      "店舗サイト制作",
      "Webサイトリニューアル",
      "スマートフォン対応・UI改善",
    ],
    notice:
      "※現在はお問い合わせフォームのUIのみ実装されています（デモ表示用）。実際の送信機能はFormspree等のサービス接続後に有効化されます。",
  },
  footer: {
    copyrightYear: new Date().getFullYear(),
    copyrightName: "Yuki Nakamura. All rights reserved.",
  },
};
