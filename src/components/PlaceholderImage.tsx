export default function PlaceholderImage({ label = "画像準備中" }: { label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300 text-zinc-500">
      <span className="font-heading text-sm font-medium">{label}</span>
    </div>
  );
}
