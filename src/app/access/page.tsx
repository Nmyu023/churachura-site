import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス | ChuraChura。",
  description: "沖縄本島から小浜島ChuraChura。までの行き方、フェリー・バスの時刻表のご案内。",
};

const ROUTE_STEPS = [
  { label: "沖縄（本島）", note: "国内線で石垣空港へ" },
  { label: "石垣空港", note: "バスで離島ターミナルへ" },
  { label: "石垣港離島ターミナル", note: "高速船で小浜港へ（約25〜30分）" },
  { label: "小浜港", note: "宿の送迎でお迎え" },
  { label: "ChuraChura。", note: "到着！" },
];

const FERRY_OPERATORS = [
  {
    name: "八重山観光フェリー",
    route: "石垣港離島ターミナル → 小浜港（約25〜30分）",
    note: "1日複数便運航。時刻表・料金は公式サイトをご確認ください。",
    link: "https://www.yaeyama.co.jp/",
    tel: "0980-82-5010",
  },
  {
    name: "安栄観光",
    route: "石垣港離島ターミナル → 小浜港（約25〜30分）",
    note: "1日複数便運航。時刻表・料金は公式サイトをご確認ください。",
    link: "https://www.aneikankou.co.jp/",
    tel: "0980-83-0055",
  },
];

const AIRPORT_BUS_OPERATORS = [
  {
    name: "東バス",
    routes: "2系統（西回り一周線）/ 4系統（平得・大浜・白保経由空港線）/ 5・6系統（平野線）/ 10系統（アートホテル・ANAインターコンチネンタル経由空港線）",
    note: "石垣空港から石垣港離島ターミナルまで運行。所要時間・運賃は時期により変動するため公式サイトをご確認ください。",
    link: "http://www.azumabus.co.jp/localbus/",
    tel: "0980-87-5423",
  },
  {
    name: "カリー観光",
    routes: "55系統（空港〜離島ターミナル直行バス）",
    note: "石垣空港と石垣港離島ターミナルを直行で結ぶバスです。",
    link: "https://karrykanko.com/ishigaki/",
    tel: "0980-88-0117",
  },
];

export default function AccessPage() {
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
          <p className="font-heading text-sm font-bold text-coral mb-2">ACCESS</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">アクセス</h1>
        </div>
      </section>

      {/* Route flow */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-10 text-center">
          沖縄本島からの行き方
        </h2>
        <div className="flex flex-wrap items-stretch justify-center gap-3">
          {ROUTE_STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="bg-white rounded-2xl shadow-sm border border-ocean/10 px-5 py-4 text-center w-40">
                <p className="font-heading text-sm font-bold text-ocean-deep">{step.label}</p>
                <p className="mt-1 text-xs text-foreground/65 leading-relaxed">{step.note}</p>
              </div>
              {i < ROUTE_STEPS.length - 1 && (
                <span className="text-coral text-xl font-bold" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-foreground/70">
          小浜港から宿までは無料送迎をご利用いただけます（迎車 13:00〜16:00ごろ / 送車 11:00ごろまで）。お越しの際は事前にご連絡ください。
        </p>
      </section>

      {/* Airport bus */}
      <section className="bg-ocean/5 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-2 text-center">
            石垣空港 → 石垣港離島ターミナル（バス）
          </h2>
          <p className="text-center text-sm text-foreground/70 mb-10">
            空港から離島ターミナルまでは、路線バスまたは直行バスをご利用いただけます。
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {AIRPORT_BUS_OPERATORS.map((bus) => (
              <div key={bus.name} className="bg-white rounded-2xl shadow-md border border-ocean/10 p-6">
                <h3 className="font-heading text-lg font-bold text-ocean-deep mb-2">{bus.name}</h3>
                <p className="text-sm text-foreground/80 mb-2">{bus.routes}</p>
                <p className="text-xs text-foreground/60 leading-relaxed mb-4">{bus.note}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <a
                    href={bus.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-bold text-ocean-deep hover:text-coral transition-colors"
                  >
                    時刻表を見る →
                  </a>
                  <span className="text-foreground/60">TEL: {bus.tel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferry */}
      <section className="bg-ocean-deep/5 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-2 text-center">
            石垣港離島ターミナル → 小浜港（フェリー）
          </h2>
          <p className="text-center text-sm text-foreground/70 mb-10">
            石垣港離島ターミナルから高速船で約25〜30分。2社が運航しています。
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {FERRY_OPERATORS.map((ferry) => (
              <div key={ferry.name} className="bg-white rounded-2xl shadow-md border border-ocean/10 p-6">
                <h3 className="font-heading text-lg font-bold text-ocean-deep mb-2">{ferry.name}</h3>
                <p className="text-sm font-medium text-foreground/80 mb-2">{ferry.route}</p>
                <p className="text-xs text-foreground/60 leading-relaxed mb-4">{ferry.note}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <a
                    href={ferry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-bold text-ocean-deep hover:text-coral transition-colors"
                  >
                    時刻表を見る →
                  </a>
                  <span className="text-foreground/60">TEL: {ferry.tel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center">
        <p className="leading-relaxed text-foreground/80 max-w-xl mx-auto mb-8">
          行き方やお迎えのご相談は、公式LINEからお気軽にお問い合わせください。
        </p>
        <a
          href="http://lin.ee/pAD4PUj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 font-heading font-bold text-sand shadow-lg hover:bg-coral/90 transition-colors"
        >
          公式LINEで相談する
        </a>
      </section>
    </div>
  );
}
