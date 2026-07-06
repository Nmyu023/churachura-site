import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "宿泊前にお読みください | ChuraChura。",
  description: "ご宿泊の前に、必ず一読ください。島宿ChuraChura。のご利用ガイドです。",
};

const GUIDE_SECTIONS = [
  {
    emoji: "🕐",
    title: "チェックイン・チェックアウト",
    items: [
      "チェックイン：13:00〜16:00頃",
      "チェックアウト：11:00頃まで",
      "到着時刻が決まりましたら、事前にご連絡ください。",
      "小浜港から宿までの送迎は無料です。",
    ],
  },
  {
    emoji: "🍽",
    title: "お食事について（素泊まりの宿です）",
    items: [
      "本宿は素泊まりの宿です。お部屋での食事の準備はございません。",
      "朝・昼・夕食をご希望の方は、ご予約時にお申し込みください。外食される方は必ず旅行前に各自でご予約をお願いいたします。",
    ],
  },
  {
    emoji: "🌿",
    title: "島の自然について",
    items: [
      "島の自然環境上、虫がお部屋内に現れることがあります。虫が苦手なお客様は宿泊をご遠慮ください。島の豊かさとしてご理解いただけると幸いです。",
    ],
  },
  {
    emoji: "🌙",
    title: "夜間の過ごし方",
    items: [
      "本宿は静かな集落の中にあります。夜は島の静けさを感じながら、お静かにお過ごしください。",
      "洗濯機のご利用は8:00〜21:00の間でお願いいたします。",
    ],
  },
  {
    emoji: "🏠",
    title: "ご宿泊いただける方について",
    items: [
      "本宿は未成年のみでの宿泊を禁止しております。",
      "宿泊者以外の方の入室はお断りしております。",
    ],
  },
  {
    emoji: "✨",
    title: "施設内について",
    items: [
      "ホテルのような完全な防音ではございませんので、隣室の音が聞こえることがございます。お静かにお過ごしいただける方におすすめです。",
      "施設内は禁煙です。喫煙される場合は屋外でお願いします。",
      "盗難防止のため、持ち物・貴重品等の管理は各自の責任で行ってください。当施設敷地内で起こった盗難・紛失については一切の責任を負いません。",
      "宿泊者同士のトラブルによって生じた損害については、一切の責任を負いません。",
      "ペットの同伴はお断りしております。",
      "お部屋の設備・備品は丁寧にご使用ください。万が一、紛失・破損された場合は、実費をご負担いただきます。",
      "アクティビティをされる方は、お部屋の鍵をくばざきの港家（はまやー）にお預けいただくことをおすすめしております。",
    ],
  },
];

export default function GuidePage() {
  return (
    <div>
      <section className="bg-ocean-deep text-sand py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="font-heading text-sm font-bold text-coral mb-2">GUIDE</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            ご宿泊の前に、必ず一読ください
          </h1>
          <p className="text-sand/85">島宿ChuraChura。</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
        <h2 className="font-heading text-xl font-bold text-ocean-deep mb-4">
          島宿ChuraChura。へようこそ
        </h2>
        <p className="leading-relaxed text-foreground/80">
          小浜島の静かな場所で、「なにもない贅沢」をゆっくりお楽しみください。この宿を気持ちよく使っていただくために、はじめにいくつかの注意事項がございます。
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-16 space-y-8">
        {GUIDE_SECTIONS.map((section) => (
          <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-ocean/10 p-8">
            <h3 className="font-heading text-lg font-bold text-ocean-deep mb-4 flex items-center gap-2">
              <span aria-hidden>{section.emoji}</span>
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-foreground/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-20 text-center">
        <p className="leading-relaxed text-foreground/80 mb-2">
          何かご不明な点やお困りのことがあれば、いつでもお声がけください。島での時間が、大切な記憶になりますように。
        </p>
        <p className="font-heading font-bold text-ocean-deep mt-6">島宿ChuraChura。</p>
      </section>
    </div>
  );
}
