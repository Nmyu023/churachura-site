"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import BrandText from "./BrandText";

type GreetingPage = {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  objectFit?: "cover" | "contain";
  placeholderLabel?: string;
};

const PAGES: GreetingPage[] = [
  {
    heading: "島宿ChuraChura。へようこそ",
    paragraphs: [
      "ChuraChura。は、沖縄・小浜島の細崎（くばざき）地区にある島宿です。目の前には西表島を望む絶景が広がり、周りには何もないからこそ味わえる贅沢な時間が流れています。",
      "素泊まり宿「ChuraChura」と、一棟貸切の「別館」をご用意し、今後も宿タイプを増やしていく予定です。",
    ],
    image: "/images/bekkan-hero.PNG",
    imageAlt: "ChuraChuraの建物外観とハイビスカス",
  },
  {
    heading: "父から受け継いだ想い",
    paragraphs: [
      "父がここ小浜島で大切に守り、営んできた「民宿大城荘」。私が生まれた年に開いたこの宿は、いつも島を訪れる人たちの笑い声と、温かい笑顔で溢れる、大好きな場所でした。",
      "あの日々の記憶は、消えることがありません。「もう一度、灯りを灯したい。」そんな想いを胸に、今度は私たちが父の後を継ぎ、この場所をよみがえらせることにしました。",
    ],
    // 📷 【Greeting 2ページ目】ホームのご挨拶スライド（父・民宿大城荘の想い）
    //    おすすめ: 民宿大城荘の外観・家族写真・当時の思い出の写真など
    //    ファイルを public/images/ に入れたら下2行を差し替える
       image: "/images/greeting-ooshiroso.jpg",
       imageAlt: "民宿大城荘の外観",
       objectFit: "contain",
  },
  {
    heading: "皆様をお迎えします",
    paragraphs: [
      "島風を感じながら、自分のペースで過ごす。優しい時間を、ここで一緒に紡いでいけたらと思います。",
      "お会いできることを心よりお待ちしております🌺",
    ],
    // 📷 【Greeting 3ページ目】ホームのご挨拶スライド（オーナーのウェルカム）
    //    おすすめ: オーナーの写真・宿の玄関前など
    //    ファイルを public/images/ に入れたら下2行を差し替える
       image: "/images/greeting-owner.jpg",
       imageAlt: "オーナーの笑顔",
    placeholderLabel: "オーナー写真準備中",
  },
];

export default function GreetingPager() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const go = (next: number) => {
    if (next < 0 || next >= PAGES.length) return;
    setDirection(next > index ? "next" : "prev");
    setIndex(next);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % PAGES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [index]);

  const page = PAGES[index];

  return (
    <div>
      <div
        key={index}
        className={`grid gap-10 md:grid-cols-2 items-center ${
          direction === "next" ? "page-turn-next" : "page-turn-prev"
        }`}
      >
        <div className="order-2 md:order-1">
          <p className="font-heading text-sm font-bold text-coral mb-2">GREETING</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean-deep mb-6">
            <BrandText text={page.heading} />
          </h2>
          {page.paragraphs.map((paragraph, i) => (
            <p key={i} className={i > 0 ? "mt-4 leading-relaxed text-foreground/80" : "leading-relaxed text-foreground/80"}>
              <BrandText text={paragraph} />
            </p>
          ))}
        </div>
        <div className={`order-1 md:order-2 relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl ${page.objectFit === "contain" ? "bg-sand/20" : ""}`}>
          {page.image ? (
            <Image src={page.image} alt={page.imageAlt ?? ""} fill className={page.objectFit === "contain" ? "object-contain" : "object-cover"} />
          ) : (
            <PlaceholderImage label={page.placeholderLabel} />
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="前のページ"
          className="font-heading text-sm font-bold text-ocean-deep disabled:opacity-30 hover:text-coral transition-colors"
        >
          ← 前へ
        </button>

        <div className="flex items-center gap-2">
          {PAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`${i + 1}ページ目を表示`}
              aria-current={i === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-coral" : "bg-ocean/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === PAGES.length - 1}
          aria-label="次のページ"
          className="font-heading text-sm font-bold text-ocean-deep disabled:opacity-30 hover:text-coral transition-colors"
        >
          次へ →
        </button>
      </div>
    </div>
  );
}
