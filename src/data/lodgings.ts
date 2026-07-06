export type PriceRow = {
  label: string;
  price: string;
};

export type Facility = {
  title: string;
  body: string;
  image?: string;
};

export type Lodging = {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  heroImage?: string;
  description: string[];
  capacity: string;
  mealPlan: string;
  checkIn: string;
  checkOut: string;
  facilities: Facility[];
  amenities?: string[];
  priceRows?: PriceRow[];
  priceNotes?: string[];
};

export const lodgings: Lodging[] = [
  {
    slug: "chura-chura",
    name: "ChuraChura。（ちゅらちゅら）",
    subtitle: "素泊まり宿",
    tagline: "島の集落に佇む、静かな素泊まりの宿",
    // 📷 【本館 トップ画像】ホームの「お部屋について」カード＆本館詳細ページのヒーロー
    //    おすすめ: 本館の外観・玄関まわり
    //    ファイルを public/images/ に入れたら下の行を有効にする
    heroImage: "/images/chura-chura-hero.png",
    description: [
      "小浜島の静かな集落の中にある、素泊まりの宿です。お部屋でのお食事のご準備はございません。",
      "朝・昼・夕食をご希望の場合は、予約時にお食事のご予約をお願いいたします（要予約）。",
    ],
    capacity: "最大４組・１室２名様まで",
    mealPlan: "素泊まり（食事は要予約、または近隣の店舗をご利用ください）",
    checkIn: "13:00〜16:00",
    checkOut: "11:00まで",
    facilities: [
      {
        title: "客室",
        body: "島の暮らしを感じられる、シンプルなお部屋です。",
        // 📷 【本館 客室】本館詳細ページの「客室」施設カード
        //    おすすめ: お部屋内（布団・窓まわりなど）
        //    ファイルを public/images/ に入れたら下の行を有効にする
        image: "/images/chura-chura-room.PNG",
      },
      {
        title: "シャワースペース",
        body: "シャワーのみで湯船はありません。ボディソープ・シャンプー・コンディショナーを完備。",
        // 📷 【本館 シャワースペース】本館詳細ページの「シャワースペース」施設カード
        //    おすすめ: シャワールーム内の写真
        //    ファイルを public/images/ に入れたら下の行を有効にする
        image: "/images/chura-chura-shower.PNG",
      },
      {
        title: "洗濯スペース",
        body: "洗濯機を備え、長期滞在にも対応します。",
        // 📷 【本館 洗濯スペース】本館詳細ページの「洗濯スペース」施設カード
        //    おすすめ: 洗濯機まわりの写真
        //    ファイルを public/images/ に入れたら下の行を有効にする
        image: "/images/chura-chura-washroom.PNG",
      },
    ],
    amenities: [
      "タオル",
      "ボディソープ",
      "シャンプー",
      "コンディショナー",
      "ドライヤー",
      "ハンガー",
      "電気ケトル",
      "電子レンジ",
    ],
    priceRows: [
      { label: "一律料金", price: "5,500円" },
    ],
    priceNotes: [
      "最大２名様の宿泊です。(中学生から）",
      "お食事は島料理でいずれも要予約です。ご希望の場合は、予約時にお知らせください。",
      "朝食：1,000円（要予約）",
      "昼食：1,000円（要予約）",
      "夕食：1,500円（要予約）",
      "焼肉：天候次第で可能（要予約・別途料金）",
    ],
  },
  {
    slug: "bekkan",
    name: "ChuraChura。 別館",
    subtitle: "一棟貸切・朝食付き",
    tagline: "一棟貸切で、最大7名までゆったりと",
    heroImage: "/images/bekkan-hero.PNG",
    description: [
      "別館は一棟貸切のお宿です。お部屋を独占できるので、グループやご家族だけのプライベートな時間をお過ごしいただけます。最大7名まで宿泊可能です。",
    ],
    capacity: "最大7名",
    mealPlan: "朝食付き（昼食・夕食は要予約、日替わり幕の内弁当をご用意します）",
    checkIn: "13:00〜16:00",
    checkOut: "11:00まで",
    facilities: [
      {
        title: "リビングスペース",
        body: "最大7名まで対応できる広々としたリビング。お布団を完備しています。",
        image: "/images/bekkan-living.PNG",
      },
      {
        title: "シャワースペース",
        body: "シャワーのみで湯船はありません。ボディソープ・シャンプー・コンディショナーを完備。",
        image: "/images/bekkan-shower.PNG",
      },
      {
        title: "洗面スペース",
        body: "広々とした洗面台と洗濯機を備え、長期滞在にも対応します。",
        image: "/images/bekkan-bathroom.PNG",
      },
    ],
    amenities: [
      "タオル",
      "ボディソープ",
      "シャンプー",
      "コンディショナー",
      "ドライヤー",
      "ハンガー",
      "電気ケトル",
    ],
    priceRows: [
      { label: "大人", price: "7,000円" },
      { label: "高校生(大人料金）", price: "7,000円" },
      { label: "小中学生", price: "4,000円" },
      { label: "未就学児", price: "無料" },
    ],
    priceNotes: [
      "3名様以上の宿泊です。",
      "朝イチ便でお帰りの場合、朝食のご用意はございません。",
      "幼児用寝具が必要な場合は別途1,000円かかります。",
      "昼食：1,000円（要予約） / 夕食：1,500円（要予約）",
      "焼肉：天候次第で可能（要予約・別途料金）",
    ],
  },
];

export function getLodging(slug: string) {
  return lodgings.find((lodging) => lodging.slug === slug);
}
