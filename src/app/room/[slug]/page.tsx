import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { lodgings, getLodging } from "@/data/lodgings";
import PlaceholderImage from "@/components/PlaceholderImage";

export function generateStaticParams() {
  return lodgings.map((lodging) => ({ slug: lodging.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lodging = getLodging(slug);
  if (!lodging) return {};
  return {
    title: `${lodging.name} | ChuraChura。`,
    description: lodging.tagline,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lodging = getLodging(slug);
  if (!lodging) notFound();

  return (
    <div>
      <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        {lodging.heroImage ? (
          <Image src={lodging.heroImage} alt={lodging.name} fill priority className="object-cover" />
        ) : (
          <PlaceholderImage />
        )}
        <div className="absolute inset-0 bg-ocean-deep/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-sand">
          <span className="inline-block rounded-full bg-coral px-4 py-1.5 font-heading text-base sm:text-lg font-bold text-sand mb-3">
            {lodging.subtitle}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">{lodging.name}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
        {lodging.description.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-foreground/80 mb-4">
            {paragraph}
          </p>
        ))}
      </section>

      <section
        className={`mx-auto max-w-6xl px-4 sm:px-6 pb-16 grid gap-10 ${
          lodging.facilities.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {lodging.facilities.map((facility) => (
          <div key={facility.title} className="bg-white rounded-2xl shadow-md overflow-hidden border border-ocean/10">
            <div className="relative aspect-[4/3] w-full">
              {facility.image ? (
                <Image src={facility.image} alt={facility.title} fill className="object-cover" />
              ) : (
                <PlaceholderImage />
              )}
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-ocean-deep mb-2">{facility.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{facility.body}</p>
            </div>
          </div>
        ))}
      </section>

      {lodging.amenities && (
        <section className="bg-ocean/5 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-8 text-center">
              アメニティ・設備
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {lodging.amenities.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-5 py-2 text-sm font-medium text-ocean-deep border border-ocean/15 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-ocean-deep mb-8 text-center">
          ご利用にあたって
        </h2>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 border border-ocean/10 shadow-sm">
            <dt className="font-heading font-bold text-ocean-deep mb-1">定員</dt>
            <dd className="text-sm text-foreground/75">{lodging.capacity}</dd>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-ocean/10 shadow-sm">
            <dt className="font-heading font-bold text-ocean-deep mb-1">お食事</dt>
            <dd className="text-sm text-foreground/75">{lodging.mealPlan}</dd>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-ocean/10 shadow-sm">
            <dt className="font-heading font-bold text-ocean-deep mb-1">チェックイン</dt>
            <dd className="text-sm text-foreground/75">{lodging.checkIn}</dd>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-ocean/10 shadow-sm">
            <dt className="font-heading font-bold text-ocean-deep mb-1">チェックアウト</dt>
            <dd className="text-sm text-foreground/75">{lodging.checkOut}</dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 text-center">
        <Link
          href="/price"
          className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 font-heading font-bold text-sand shadow-lg hover:bg-coral/90 transition-colors"
        >
          料金について見る →
        </Link>
      </section>
    </div>
  );
}
