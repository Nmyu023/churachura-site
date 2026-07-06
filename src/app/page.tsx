import Image from "next/image";
import Link from "next/link";
import { lodgings } from "@/data/lodgings";
import PlaceholderImage from "@/components/PlaceholderImage";
import GreetingPager from "@/components/GreetingPager";
import BrandText from "@/components/BrandText";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/552267154313969704.jpg"
          alt="小浜島の海に浮かぶChuraChuraの船と夕日"
          fill
          priority
          className="hero-bg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-deep/10 to-ocean-deep/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-sand">
          <h1 className="hero-headline font-heading text-4xl sm:text-6xl font-bold tracking-wide drop-shadow-lg">
            なにもない贅沢を
          </h1>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-sand/80 text-xs tracking-widest">
          SCROLL
        </div>
      </section>

      {/* Greeting */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <GreetingPager />
      </section>

      {/* Room teaser */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <p className="font-heading text-sm font-bold text-coral mb-2 text-center">ROOM</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean-deep mb-12 text-center">
          お部屋について
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {lodgings.map((lodging) => (
            <Link
              key={lodging.slug}
              href={`/room/${lodging.slug}`}
              className="group bg-white rounded-2xl shadow-md overflow-hidden border border-ocean/10 hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] w-full">
                {lodging.heroImage ? (
                  <Image
                    src={lodging.heroImage}
                    alt={lodging.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <PlaceholderImage />
                )}
              </div>
              <div className="p-8">
                <span className="inline-block rounded-full bg-coral/10 px-3 py-1 font-heading text-sm sm:text-base font-bold text-coral mb-3">
                  {lodging.subtitle}
                </span>
                <h3 className="font-heading text-lg font-bold text-ocean-deep mb-3">{lodging.name}</h3>
                <p className="text-sm leading-relaxed text-foreground/75 mb-4">{lodging.tagline}</p>
                <span className="font-heading text-sm font-bold text-ocean-deep group-hover:text-coral transition-colors">
                  詳しく見る →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Access */}
      <section id="access" className="bg-ocean-deep text-sand py-20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold text-coral mb-2 text-center">ACCESS</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-12 text-center">
            アクセス
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-sand/5 rounded-2xl overflow-hidden border border-sand/15">
              <div className="relative h-48">
                <Image
                  src="/images/kubazaki-hamaya.jpg"
                  alt="くばざきの港家の外観"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-lg font-bold mb-4">くばざきの港家</h3>
                <p className="text-sm leading-relaxed text-sand/85">
                  <BrandText text="島宿ChuraChura。のすぐ近く、細崎地区にあるくばざきの港家（はまやー）。小浜島近海で採れた天然もずくを加工販売所です。ChuraChura。のオーナーが営んでいます。" />
                </p>
                <a
                  href="https://www.instagram.com/kubazaki.hamaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center font-heading text-sm font-bold text-sand hover:text-coral transition-colors"
                >
                  Instagramを見る →
                </a>
              </div>
            </div>
            <div className="bg-sand/5 rounded-2xl overflow-hidden border border-sand/15">
              <div className="relative h-48">
                {/* 📷 【ホーム アクセスカード】ホームのアクセスセクション右カード
                    おすすめ: 小浜港・送迎の様子・船から見た小浜島など
                    ファイルを public/images/ に入れたら PlaceholderImage を下記に差し替える */}
                    <Image src="/images/552267160102895653-edited.jpg" alt="小浜港" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-lg font-bold mb-4">アクセス</h3>
                <ul className="text-sm leading-relaxed text-sand/85 space-y-2">
                  <li>・石垣港離島ターミナルから高速船で約30分</li>
                  <li>・小浜港から無料送迎あり（迎車 13:00〜16:00ごろ / 送車 11:00ごろまで）</li>
                </ul>
                <Link
                  href="/access"
                  className="mt-4 inline-flex items-center font-heading text-sm font-bold text-sand hover:text-coral transition-colors"
                >
                  行き方・時刻表を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center">
        <p className="font-heading text-sm font-bold text-coral mb-2">CONTACT</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean-deep mb-6">
          お問い合わせ・ご予約
        </h2>
        <p className="leading-relaxed text-foreground/80 max-w-xl mx-auto mb-8">
          ご予約・お問い合わせは公式LINEにて承っております。お気軽にご連絡ください。
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-40 w-40 rounded-xl overflow-hidden shadow-md border border-ocean/10">
            <Image
              src="/images/churachura-LINE-1.png"
              alt="ChuraChura公式LINE QRコード"
              fill
              className="object-contain bg-white p-2"
            />
          </div>
          <a
            href="http://lin.ee/pAD4PUj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 font-heading font-bold text-sand shadow-lg hover:bg-coral/90 transition-colors"
          >
            公式LINEを開く
          </a>
        </div>
      </section>
    </div>
  );
}
