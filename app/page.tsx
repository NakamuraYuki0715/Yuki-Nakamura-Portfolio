import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";
import { Strength } from "@/components/Strength";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBF8] text-[#202620]">
      {/* 固定ヘッダー */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* ヒーローセクション (100svh) */}
        <Hero />

        {/* プロフィール・想い */}
        <About />

        {/* スキルスタック */}
        <Skills />

        {/* 制作実績 */}
        <Works />

        {/* 選ばれる理由 */}
        <Strength />

        {/* お問い合わせ誘導 */}
        <CTA />

        {/* お問い合わせフォーム */}
        <Contact />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}
