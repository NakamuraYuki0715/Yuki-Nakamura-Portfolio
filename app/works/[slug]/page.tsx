import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { worksData } from "@/data/works";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import {
  ArrowLeft,
  Clock,
  UserCheck,
  CheckCircle2,
  ExternalLink,
  Target,
  HelpCircle,
  Lightbulb,
  Layers,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return worksData.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${work.title} | 制作実績`,
    description: work.description,
    openGraph: {
      title: `${work.title} | Yuki Nakamura Portfolio`,
      description: work.description,
      images: [work.image],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#222222]">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32 pb-24">
        {/* パンくず & Back to Works */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#666666] hover:text-[#4F46E5] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>制作実績一覧に戻る (Back to Works)</span>
          </Link>
        </div>

        {/* 記事メインヘッダー */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF2FF] text-[#4F46E5] font-en">
                {work.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F7F7F8] border border-[#EAEAEA] text-[#555555] font-en">
                {work.typeBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#222222] leading-tight mb-6">
              {work.title}
            </h1>

            <p className="text-base sm:text-xl text-[#666666] leading-relaxed max-w-3xl">
              {work.description}
            </p>
          </header>

          {/* メインヒーロー画像 */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#F7F7F8] border border-[#EAEAEA] mb-12 sm:mb-16 shadow-md">
            <Image
              src={work.image}
              alt={`${work.title}のメインビジュアル`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          {/* 基本スペック情報（グリッド） */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] mb-16">
            <div>
              <p className="text-xs text-[#888888] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <Clock size={13} />
                制作期間
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#222222]">{work.period}</p>
            </div>
            <div>
              <p className="text-xs text-[#888888] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <UserCheck size={13} />
                担当範囲
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#222222]">{work.role}</p>
            </div>
            <div>
              <p className="text-xs text-[#888888] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <Layers size={13} />
                ステータス
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#222222]">{work.typeBadge}</p>
            </div>
            <div>
              <p className="text-xs text-[#888888] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <ExternalLink size={13} />
                公開URL
              </p>
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold text-[#4F46E5] hover:underline inline-flex items-center gap-1"
                >
                  サイトを見る
                </a>
              ) : (
                <p className="text-sm sm:text-base font-medium text-[#888888]">公開URLなし（コンセプト設計）</p>
              )}
            </div>
          </div>

          {/* 使用技術 */}
          <div className="mb-16">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#888888] mb-3 font-en">
              TECHNOLOGIES USED
            </h2>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 rounded-lg bg-white border border-[#EAEAEA] text-xs sm:text-sm font-medium text-[#333333] shadow-xs font-en"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* プロジェクト詳細コンテンツ */}
          <div className="space-y-16">
            {/* 概要 */}
            <section className="border-t border-[#EAEAEA] pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-4">
                プロジェクト概要
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">
                {work.overview}
              </p>
            </section>

            {/* 目的と課題 */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#EAEAEA] pt-12">
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA]">
                <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#222222] mb-2">制作目的</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{work.purpose}</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA]">
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F8] text-[#222222] flex items-center justify-center mb-4">
                  <HelpCircle size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#222222] mb-2">課題</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{work.challenge}</p>
              </div>
            </section>

            {/* デザインコンセプト */}
            <section className="border-t border-[#EAEAEA] pt-12">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4F46E5] uppercase tracking-wider font-en mb-2">
                <Lightbulb size={16} />
                <span>DESIGN CONCEPT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-4">
                {work.concept}
              </h2>
              {work.features && (
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold text-[#222222]">主な機能・こだわりポイント：</p>
                  <ul className="space-y-2">
                    {work.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#555555]">
                        <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* 制作プロセス */}
            <section className="border-t border-[#EAEAEA] pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-8">
                制作プロセス
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {work.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-white border border-[#EAEAEA] relative"
                  >
                    <span className="text-3xl font-black text-[#4F46E5]/20 font-en mb-2 block">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#222222] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 成果または想定成果 */}
            <section className="border-t border-[#EAEAEA] pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-4">
                {work.resultType}
              </h2>
              <div className="p-6 rounded-2xl bg-[#EEF2FF]/60 border border-[#4F46E5]/20 text-sm sm:text-base text-[#444444] leading-relaxed">
                {work.result}
              </div>
            </section>
          </div>

          {/* 下部ナビゲーション & お問い合わせ誘導 */}
          <div className="mt-20 pt-12 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-6">
            <Button
              href="/#works"
              variant="secondary"
              size="md"
              icon={<ArrowLeft size={16} />}
              iconPosition="left"
            >
              実績一覧に戻る
            </Button>

            <Button
              href="/#contact"
              variant="primary"
              size="md"
            >
              このプロジェクトのような制作を相談する
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
