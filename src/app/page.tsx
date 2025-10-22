// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart,
  Clock,
  Bell,
  CalendarDays,
  Gift,
  Trophy,
  Code,
  RefreshCw,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LVLUP Learn｜学習をレベルアップする新しい勉強支援アプリ",
  description:
    "学習時間を記録してポイントを獲得。スケジュール登録・通知・ランキングで継続を楽しむ学習支援アプリ「LVLUP Learn」。報酬でモチベを保ちながら勉強を習慣化しましょう。",
  openGraph: {
    title: "LVLUP Learn｜学習をレベルアップする新しい勉強支援アプリ",
    description:
      "勉強時間をポイントに変換！ランキングと報酬でモチベーションを維持できる新感覚の学習アプリ。",
    url: "https://lvluplearn.oshama0850.workers.dev",
    siteName: "LVLUP Learn",
    /*images: [
      {
        //url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LVLUP Learn 紹介ページ",
      },
    ],*/
    locale: "ja_JP",
    type: "website",
  },
};

export const revalidate = false; // ✅ SSG

export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center px-4 md:px-8 dark:bg-background dark:text-foreground">
      {/* Hero Section */}
      <section className="w-full max-w-5xl py-20">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          LVLUP Learn
        </h1>
        <p className="mt-6 text-lg text-muted-foreground dark:text-gray-300">
          学習の記録を、あなたの力に。
          <br />
          スケジュール登録と通知で学習を継続し、
          <br />
          ポイントとランキングで「継続する楽しさ」を実感できます。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/sign-up">
            <Button size="lg" className="px-8 rounded-2xl">
              無料で始める
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button size="lg" variant="outline" className="px-8 rounded-2xl">
              ログイン
            </Button>
          </Link>
        </div>
      </section>

      <Separator className="my-10 w-2/3" />

      {/* Features Section */}
      <section className="w-full max-w-5xl py-10">
        <h2 className="text-3xl font-semibold mb-10">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "スケジュール登録",
              icon: <CalendarDays className="w-8 h-8 text-blue-500" />,
              desc: "1日の学習予定を登録し、効率的に計画的な学習をサポートします。",
            },
            {
              title: "通知機能",
              icon: <Bell className="w-8 h-8 text-green-500" />,
              desc: "毎朝7時に当日の予定を通知。有料プランでは柔軟な時間通知も可能です。",
            },
            {
              title: "勉強時間の可視化",
              icon: <BarChart className="w-8 h-8 text-purple-500" />,
              desc: "Chart.jsで学習時間をグラフ化し、日・週単位で進捗を確認できます。",
            },
            {
              title: "専用タイマーで記録",
              icon: <Clock className="w-8 h-8 text-indigo-500" />,
              desc: "専用タイマーで学習時間を自動的に記録。正確なデータが蓄積されます。",
            },
            {
              title: "ポイント報酬",
              icon: <Gift className="w-8 h-8 text-pink-500" />,
              desc: "勉強時間に応じてポイントを獲得。テーマやサブスククーポン、抽選に利用可能です。",
            },
            {
              title: "ランキングシステム",
              icon: <Trophy className="w-8 h-8 text-yellow-500" />,
              desc: "仲間と学習量を競い合い、月次ランキングで継続のモチベーションを維持。",
            },
          ].map((f, i) => (
            <Card
              key={i}
              className="border border-muted shadow-sm hover:shadow-md transition dark:bg-card dark:text-card-foreground"
            >
              <CardHeader className="flex flex-col items-center gap-2">
                {f.icon}
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground dark:text-gray-400">
                {f.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10 w-2/3" />

      {/* How to Use Section */}
      <section className="w-full max-w-4xl py-10 text-left">
        <h2 className="text-3xl font-semibold mb-8 text-center">使い方ガイド</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="step1">
            <AccordionTrigger>① アカウント登録と初期設定</AccordionTrigger>
            <AccordionContent>
              Google、GitHub、Facebook、Discord、メールアドレスでログインし、マイページで通知メールを設定します。
              有料プランでは通知のカスタマイズも可能です。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step2">
            <AccordionTrigger>② スケジュール登録</AccordionTrigger>
            <AccordionContent>
              今日の学習予定を登録すると、7:00のメール通知に自動で反映されます。
              計画的な学習をサポートします。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step3">
            <AccordionTrigger>③ タイマーで学習を記録</AccordionTrigger>
            <AccordionContent>
              タイマーを起動するだけで自動的に記録され、日・週単位のグラフに反映。
              無理のないペースで続けられます。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step4">
            <AccordionTrigger>④ ポイントと報酬でモチベ維持</AccordionTrigger>
            <AccordionContent>
              30分ごとに1ポイント（無料）／15分ごとに1ポイント（有料）を付与。
              貯めたポイントはテーマやサブスククーポン、抽選参加に利用可能です。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step5">
            <AccordionTrigger>⑤ ランキングで成長を実感</AccordionTrigger>
            <AccordionContent>
              ランキングは毎日更新。月次ランキング確定後には上位ユーザーに特典が贈られます。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-10 w-2/3" />

      {/* FAQ Section */}
      <section className="w-full max-w-4xl py-10 text-left">
        <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger>無料で使えますか？</AccordionTrigger>
            <AccordionContent>
              はい、基本機能（スケジュール登録・学習記録・ランキング参加など）はすべて無料で利用できます。
              有料プランでは通知やポイント上限が拡張される予定です。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>ポイントはどうやって貯まりますか？</AccordionTrigger>
            <AccordionContent>
              学習タイマーを起動して勉強時間を記録することで、自動的にポイントが貯まります。
              無料版は30分ごとに1ポイント、有料版では15分ごとに1ポイント獲得できます。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>通知機能はどのように動作しますか？</AccordionTrigger>
            <AccordionContent>
              毎朝7時に「本日の予定」をメールでお知らせします。
              有料プランではLINE通知や細かい時間指定も可能になる予定です。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>スマートフォンからも使えますか？</AccordionTrigger>
            <AccordionContent>
              はい、レスポンシブ対応しており、PC・スマートフォンのどちらからでも快適に利用できます。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>データは削除できますか？</AccordionTrigger>
            <AccordionContent>
              アカウント削除時に学習データは完全に削除されます（課金履歴など一部情報を除く）。
              安全なデータ管理を徹底しています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q6">
            <AccordionTrigger>サポートはありますか？</AccordionTrigger>
            <AccordionContent>
              ご質問や不具合報告は、マイページの「お問い合わせ」からお気軽にご連絡ください。
              迅速に対応いたします。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-10 w-2/3" />

      {/* Development Info Section */}
      <section className="w-full max-w-5xl py-10 text-left">
        <h2 className="text-3xl font-semibold mb-8 text-center">開発・更新情報</h2>
        <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">BETA</span>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Code className="w-10 h-10 text-blue-500 mb-3" />,
              title: "個人開発プロジェクト",
              desc: "本アプリは個人開発者 <strong>あさまは</strong> により設計・開発されています。実際の学習記録データをもとに改善を継続中です。",
            },
            {
              icon: <RefreshCw className="w-10 h-10 text-green-500 mb-3" />,
              title: "継続的なアップデート",
              desc: "UI改善・通知機能・ポイントシステムなど、毎月の更新を実施。最新情報は「開発ログ」で確認できます。",
              button: true,
            },
            {
              icon: <Rocket className="w-10 h-10 text-purple-500 mb-3" />,
              title: "ベータ版として運用中",
              desc: "現在はベータ版として公開中。ユーザーのフィードバックをもとに正式版へ進化します。",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-muted/30 shadow-sm hover:shadow-md transition rounded-2xl">
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
                {item.button && (
                  <Link href="/changelog">
                    <Button variant="outline" size="sm" className="mt-3">
                      開発ログを見る
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10 w-2/3" />

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          あなたの努力を「見える形」に。
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          スケジュール・通知・報酬・ランキング。<br />
          LVLUP Learn は継続のためのすべてを揃えています。
        </p>
        <Link href="/sign-up">
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg rounded-2xl">
            無料で始める
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 text-sm text-muted-foreground dark:text-gray-400">
        <p>© 2025 LVLUP Learn. All rights reserved.</p>
        <p className="mt-2">
          Developed by <span className="font-medium text-foreground dark:text-white">あさまは</span> 🧠
        </p>
      </footer>
    </main>
  );
}
