import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { lodgings } from "@/data/lodgings";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "お部屋について | 島宿ChuraChura。",
  description: "素泊まりの宿ChuraChuraと、一棟貸切の別館。宿タイプをご紹介します。",
};

export default function RoomListPage() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/bekkan-hero.PNG"
          alt="ChuraChuraの建物外観"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ocean-deep/55" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-sand">
          <p className="font-heading text-sm font-bold text-coral mb-2">ROOM</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">お部屋について</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
        <p className="leading-relaxed text-foreground/80">
          島宿ChuraChura。では、素泊まりの宿「ChuraChura（ちゅらちゅら）」と、一棟貸切の「別館」をご用意しています。
          今後も新しい宿タイプを追加予定です。ご旅行のスタイルに合わせてお選びください。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 grid gap-10 md:grid-cols-2">
        {lodgings.map((lodging) => (
          <Link
            key={lodging.slug}
            href={`/room/${lodging.slug}`}
            className="group bg-white rounded-2xl shadow-md overflow-hidden border border-ocean/10 hover:shadow-xl transition-shadow"
          >
            <div className="relative h-56">
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
              <h2 className="font-heading text-xl font-bold text-ocean-deep mb-3">{lodging.name}</h2>
              <p className="text-sm leading-relaxed text-foreground/75 mb-4">{lodging.tagline}</p>
              <span className="font-heading text-sm font-bold text-ocean-deep group-hover:text-coral transition-colors">
                詳しく見る →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
