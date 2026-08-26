/**
 * Yuki Nakamura スキルデータ
 * 編集することで、Skillsセクションの内容を更新できます。
 */

export interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Design" | "Tools & CMS" | "Core & Architecture";
  description: string;
  iconName: string; // lucide icon identifier
}

export const skillCategories = [
  "All",
  "Frontend",
  "Design",
  "Tools & CMS",
  "Core & Architecture",
] as const;

export const skillsData: SkillItem[] = [
  {
    id: "html",
    name: "HTML",
    category: "Core & Architecture",
    description: "Webページの構造を設計し、検索エンジンにも理解されやすいセマンティックなマークアップを行います。",
    iconName: "Code",
  },
  {
    id: "css",
    name: "CSS",
    category: "Frontend",
    description: "レイアウト、レスポンシブ対応、アニメーションまで洗練されたUIを実装します。",
    iconName: "Palette",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    description: "動的なインタラクションやAPI連携など、リッチなWeb体験を柔軟に構築します。",
    iconName: "FileCode",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    description: "型安全性を確保した堅牢な開発を行い、保守性の高いフロントエンドを構築します。",
    iconName: "FileCheck",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "コンポーネント指向による再利用性の高いUI設計と高速なユーザー体験を実現します。",
    iconName: "Atom",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description: "App Routerを活用した高速なページレンダリングと高度なSEO最適化を実装します。",
    iconName: "Layers",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "デザインシステムに基づいた一貫性のあるスタイルを迅速かつ軽量に構築します。",
    iconName: "Wind",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    description: "ワイヤーフレームから高精度なUIプロトタイプまで、直感的なデザインを作成します。",
    iconName: "Figma",
  },
  {
    id: "responsive-design",
    name: "Responsive Design",
    category: "Design",
    description: "スマートフォンから大型ディスプレイまで、あらゆる端末で美しい閲覧体験を最適化します。",
    iconName: "Smartphone",
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "Tools & CMS",
    description: "クライアント様自身で簡単にお知らせや記事を更新できるCMS環境を構築します。",
    iconName: "Globe",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools & CMS",
    description: "適切なバージョン管理を行い、安全かつスムーズなコード管理を実施します。",
    iconName: "GitBranch",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools & CMS",
    description: "チーム開発やGitHub Actionsによる自動化、継続的なデプロイパイプラインを活用します。",
    iconName: "GitPullRequest",
  },
  {
    id: "seo",
    name: "SEO",
    category: "Core & Architecture",
    description: "構造化マークアップやメタデータ、Core Web Vitalsを意識した検索最適化を設計します。",
    iconName: "Search",
  },
];
