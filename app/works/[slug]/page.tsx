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
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBF8] text-[#202620]">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32 pb-24">
        {/* パンくず & Back to Works */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#70776F] hover:text-[#174C3C] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>制作実績一覧に戻る (Back to Works)</span>
          </Link>
        </div>

        {/* 記事メインヘッダー */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DCE8DC]/80 text-[#174C3C] font-en border border-[#E0E6DE]/80">
                {work.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E0E6DE] text-[#70776F] font-en">
                {work.typeBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#202620] leading-tight mb-6">
              {work.title}
            </h1>

            <p className="text-base sm:text-xl text-[#70776F] leading-relaxed max-w-3xl">
              {work.description}
            </p>
          </header>

          {/* メインヒーロー画像 */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-white border border-[#E0E6DE] mb-12 sm:mb-16 shadow-md">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-[#E0E6DE] mb-16 shadow-xs">
            <div>
              <p className="text-xs text-[#70776F] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <Clock size={13} className="text-[#174C3C]" />
                制作期間
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#202620]">{work.period}</p>
            </div>
            <div>
              <p className="text-xs text-[#70776F] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <UserCheck size={13} className="text-[#174C3C]" />
                担当範囲
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#202620]">{work.role}</p>
            </div>
            <div>
              <p className="text-xs text-[#70776F] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <Layers size={13} className="text-[#174C3C]" />
                ステータス
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#202620]">{work.typeBadge}</p>
            </div>
            <div>
              <p className="text-xs text-[#70776F] uppercase tracking-wider font-en flex items-center gap-1.5 mb-1">
                <ExternalLink size={13} className="text-[#174C3C]" />
                公開URL
              </p>
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold text-[#174C3C] hover:underline inline-flex items-center gap-1"
                >
                  サイトを見る
                </a>
              ) : (
                <p className="text-sm sm:text-base font-medium text-[#70776F]">公開URLなし（コンセプト設計）</p>
              )}
            </div>
          </div>

          {/* 使用技術 */}
          <div className="mb-16">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#70776F] mb-3 font-en">
              TECHNOLOGIES USED
            </h2>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 rounded-lg bg-white border border-[#E0E6DE] text-xs sm:text-sm font-medium text-[#202620] shadow-xs font-en"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* プロジェクト詳細コンテンツ */}
          <div className="space-y-16">
            {/* 概要 */}
            <section className="border-t border-[#E0E6DE] pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#202620] mb-4">
                プロジェクト概要
              </h2>
              <p className="text-base text-[#70776F] leading-relaxed">
                {work.overview}
              </p>
            </section>

            {/* 目的と課題 */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E0E6DE] pt-12">
              <div className="p-6 rounded-2xl bg-white border border-[#E0E6DE] shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#DCE8DC]/70 text-[#174C3C] flex items-center justify-center mb-4">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#202620] mb-2">制作目的</h3>
                <p className="text-sm text-[#70776F] leading-relaxed">{work.purpose}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E0E6DE] shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#FAFBF8] border border-[#E0E6DE] text-[#202620] flex items-center justify-center mb-4">
                  <HelpCircle size={20} className="text-[#174C3C]" />
                </div>
                <h3 className="text-lg font-bold text-[#202620] mb-2">課題</h3>
                <p className="text-sm text-[#70776F] leading-relaxed">{work.challenge}</p>
              </div>
            </section>

            {/* デザインコンセプト */}
            <section className="border-t border-[#E0E6DE] pt-12">
              <div className="flex items-center gap-2 text-xs font-bold text-[#174C3C] uppercase tracking-wider font-en mb-2">
                <Lightbulb size={16} />
                <span>DESIGN CONCEPT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#202620] mb-4">
                {work.concept}
              </h2>
              {work.features && (
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold text-[#202620]">主な機能・こだわりポイント：</p>
                  <ul className="space-y-2">
                    {work.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#70776F]">
                        <CheckCircle2 size={16} className="text-[#174C3C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* 制作プロセス */}
            <section className="border-t border-[#E0E6DE] pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#202620] mb-8">
                制作プロセス
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {work.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-white border border-[#E0E6DE] relative shadow-xs"
                  >
                    <span className="text-3xl font-black text-[#174C3C]/20 font-en mb-2 block">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#202620] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#70776F] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 成果または想定成果 */}
            <section className="border-t border-[#E0E6DE] pt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-[#202620] mb-4">
                {work.resultType}
              </h2>
              <div className="p-6 rounded-2xl bg-[#DCE8DC]/40 border border-[#174C3C]/20 text-sm sm:text-base text-[#202620] leading-relaxed">
                {work.result}
              </div>
            </section>
          </div>

          {/* 下部ナビゲーション & お問い合わせ誘導 */}
          <div className="mt-20 pt-12 border-t border-[#E0E6DE] flex flex-col sm:flex-row items-center justify-between gap-6">
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
