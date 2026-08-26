import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#222222]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#F7F7F8] border border-[#EAEAEA] flex items-center justify-center text-[#4F46E5] mb-6">
          <Compass size={32} />
        </div>

        <p className="text-sm font-bold tracking-widest text-[#4F46E5] uppercase font-en mb-2">
          404 ERROR
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222] mb-4">
          Page Not Found
        </h1>

        <p className="max-w-md text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
          お探しのページは見つかりませんでした。URLが変更されたか、削除された可能性があります。
        </p>

        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<ArrowLeft size={16} />}
          iconPosition="left"
        >
          トップページへ戻る (Back to Home)
        </Button>
      </main>

      <Footer />
    </div>
  );
}
