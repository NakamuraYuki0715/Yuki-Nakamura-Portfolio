"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { Send, CheckCircle2, AlertCircle, Info, Sparkles } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "Webサイト制作のご相談",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください。";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスの形式で入力してください。";
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください。";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "お問い合わせ内容は10文字以上で入力してください。";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // エラー解除
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // デモ送信シミュレーション
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Webサイト制作のご相談",
      message: "",
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16"
      aria-label="お問い合わせセクション"
    >
      <SectionHeading
        badge={siteConfig.contact.badge}
        title={siteConfig.contact.heading}
        subtitle={siteConfig.contact.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* 左側：ご相談内容の例 ＆ ご案内 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#F7F7F8] p-6 sm:p-8 rounded-2xl border border-[#EAEAEA]">
            <h3 className="text-base sm:text-lg font-bold text-[#222222] mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-[#4F46E5]" />
              ご相談いただける内容
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-5">
              以下のような制作・改善のご要望を承っています。まだ具体的な仕様が決まっていない段階でもお気軽にご相談ください。
            </p>
            <ul className="space-y-2.5">
              {siteConfig.contact.topics.map((topic, index) => (
                <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* デモ動作の明記（仕様遵守） */}
          <div className="p-4 rounded-xl bg-[#EEF2FF] border border-[#4F46E5]/20 text-xs text-[#4F46E5] leading-relaxed flex items-start gap-2.5">
            <Info size={16} className="shrink-0 mt-0.5" />
            <p>{siteConfig.contact.notice}</p>
          </div>
        </div>

        {/* 右側：コンタクトフォーム */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#EAEAEA] shadow-sm">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#222222]">
                入力内容を受け付けました（デモ）
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                フォームの入力確認が正常に完了しました。実際の運用時にはここに送信完了メッセージや自動返信メールの案内が表示されます。
              </p>
              <div className="pt-4">
                <Button variant="secondary" size="md" onClick={handleReset}>
                  フォームを再入力する
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* お名前 */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs sm:text-sm font-semibold text-[#222222] mb-1.5"
                >
                  お名前 <span className="text-[#4F46E5] ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="例：山田 太郎"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] placeholder:text-[#AAAAAA] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all ${
                    errors.name ? "border-red-500 ring-1 ring-red-500" : "border-[#EAEAEA]"
                  }`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs sm:text-sm font-semibold text-[#222222] mb-1.5"
                >
                  メールアドレス <span className="text-[#4F46E5] ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="例：your-name@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] placeholder:text-[#AAAAAA] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all ${
                    errors.email ? "border-red-500 ring-1 ring-red-500" : "border-[#EAEAEA]"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* ご相談種別 */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs sm:text-sm font-semibold text-[#222222] mb-1.5"
                >
                  ご相談種別
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] text-sm text-[#222222] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all"
                >
                  <option value="Webサイト制作のご相談">Webサイト制作のご相談</option>
                  <option value="LP制作のご相談">LP（ランディングページ）制作のご相談</option>
                  <option value="コーポレートサイト制作のご相談">コーポレートサイト制作のご相談</option>
                  <option value="サイトリニューアル・改善">サイトリニューアル・UI改善</option>
                  <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                </select>
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs sm:text-sm font-semibold text-[#222222] mb-1.5"
                >
                  お問い合わせ内容 <span className="text-[#4F46E5] ml-0.5">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ご希望の制作内容、目的、公開時期、ご予算感など、分かる範囲でご記入ください。"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-[#222222] placeholder:text-[#AAAAAA] bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] transition-all resize-y ${
                    errors.message ? "border-red-500 ring-1 ring-red-500" : "border-[#EAEAEA]"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* 送信ボタン */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? "送信処理中..." : "お問い合わせを送信"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
