import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-sand">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-bold">
            島宿ChuraChura。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sand/80">
            沖縄県八重山郡竹富町
            <br />
            小浜島 細崎地区
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm font-heading">
          <Link href="/" className="hover:text-coral transition-colors">
            HOME
          </Link>
          <Link href="/room" className="hover:text-coral transition-colors">
            お部屋について
          </Link>
          <Link href="/price" className="hover:text-coral transition-colors">
            料金について
          </Link>
          <Link href="/access" className="hover:text-coral transition-colors">
            アクセス
          </Link>
          <Link href="/guide" className="hover:text-coral transition-colors">
            宿泊前にお読みください
          </Link>
        </nav>

        <div className="text-xs leading-relaxed text-sand/70">
          <p className="font-heading text-sm text-sand mb-2">遊漁船登録情報</p>
          <p>登録番号：沖縄八355</p>
          <p>有効期限：令和6年7月27日〜令和11年7月26日</p>
          <p>所在地：沖縄県八重山郡竹富町字小浜1496地先</p>
          <p>業務主任者：伊良部哲也</p>
        </div>
      </div>

      <div className="border-t border-sand/15 py-4 text-center text-xs text-sand/60">
        © {new Date().getFullYear()} ChuraChura。
      </div>
    </footer>
  );
}
