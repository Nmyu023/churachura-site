import Image from "next/image";
import type { Metadata } from "next";
import { lodgings } from "@/data/lodgings";

export const metadata: Metadata = {
  title: "料金について |島宿ChuraChura。",
  description: "宿タイプ別の宿泊料金、お食事、キャンセルポリシーのご案内。",
};

const CANCEL_ROWS = [
  { label: "1週間前", rate: "無料" },
  { label: "3日前", rate: "50%" },
  { label: "前日・当日", rate: "100%" },
];

export default function PricePage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/552267160102895653-edited.jpg"
          alt="小浜島の海とボート"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ocean-deep/55" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-sand">
          <p className="font-heading text-sm font-bold text-coral mb-2">PRICE</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">料金について</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
        <p className="leading-relaxed text-foreground/80">
          宿タイプによって料金体系が異なります。それぞれの料金は以下をご確認ください。
        </p>
      </section>

      {lodgings.map((lodging) => (
        <section key={lodging.slug} className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
          <div className="text-center mb-3">
            <span className="inline-block rounded-full bg-coral/10 px-3 py-1 font-heading text-sm sm:text-base font-bold text-coral">
              {lodging.subtitle}
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-8 text-center">
            {lodging.name}
          </h2>

          {lodging.priceRows ? (
            <>
              <div className="overflow-hidden rounded-2xl border border-ocean/15 shadow-sm">
                <table className="w-full text-left">
                  <tbody>
                    {lodging.priceRows.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-ocean/5"}>
                        <td className="px-6 py-4 font-heading font-bold text-ocean-deep">{row.label}</td>
                        <td className="px-6 py-4 text-right font-bold text-ocean-deep">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {lodging.priceNotes && (
                <ul className="mt-4 text-xs text-foreground/60 leading-relaxed space-y-1">
                  {lodging.priceNotes.map((note) => (
                    <li key={note}>※{note}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-ocean/15 bg-ocean/5 px-6 py-8 text-center text-sm text-foreground/70">
              料金はお問い合わせください。
            </div>
          )}

          <p className="mt-4 text-sm text-foreground/75 text-center">{lodging.mealPlan}</p>
        </section>
      ))}

      <section className="bg-ocean/5 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-10 text-center">
            お食事について
          </h2>
          <div className="relative h-72 rounded-2xl overflow-hidden shadow-md mb-8 bg-sand/30">
            <Image
              src="/images/churachura-dinner.jpg"
              alt="日替わり幕の内弁当"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-ocean/10 p-6">
            <p className="text-sm leading-relaxed text-foreground/80">
              お食事は島料理でいずれも要予約です。ご希望の場合は、予約時にお知らせください。
            </p>
            <ul className="mt-4 text-sm text-foreground/80 space-y-1">
              <li>朝食：1,000円（要予約）</li>
              <li>昼食：1,000円（要予約）</li>
              <li>夕食：1,500円（要予約）</li>
              <li>焼肉：天候次第で可能（要予約・別途料金）</li>
            </ul>
            <p className="mt-4 text-xs text-foreground/60 leading-relaxed">
              ※別館は朝食が宿泊料に含まれるため、朝食代はかかりません。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-8 text-center">
          キャンセルポリシー
        </h2>
        <div className="overflow-hidden rounded-2xl border border-ocean/15 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ocean-deep text-sand">
                <th className="px-6 py-3 font-heading text-sm">期限</th>
                <th className="px-6 py-3 font-heading text-sm text-right">料金</th>
              </tr>
            </thead>
            <tbody>
              {CANCEL_ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-ocean/5"}>
                  <td className="px-6 py-4 text-sm text-foreground/85">{row.label}</td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-ocean-deep">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 text-center">
        <p className="leading-relaxed text-foreground/80 max-w-xl mx-auto mb-8">
          ご予約・お問い合わせは公式LINEにて承っております。
        </p>
        <a
          href="http://lin.ee/pAD4PUj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 font-heading font-bold text-sand shadow-lg hover:bg-coral/90 transition-colors"
        >
          公式LINEで予約する
        </a>
      </section>
    </div>
  );
}
