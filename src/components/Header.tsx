"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "お部屋について", href: "/room" },
  { label: "料金について", href: "/price" },
  { label: "アクセス", href: "/access" },
  { label: "宿泊前にお読みください", href: "/guide" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/90 backdrop-blur-sm border-b border-ocean/15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-ocean-deep tracking-wide">
          島宿ChuraChura。
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8 font-heading text-sm font-medium text-ocean-deep">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-coral transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="http://lin.ee/pAD4PUj"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-coral px-5 py-2 font-heading text-sm font-bold text-sand shadow-sm hover:bg-coral/90 transition-colors"
            >
              予約・お問い合わせ
            </a>

            <button
              type="button"
              aria-label="メニューを開く"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex flex-col gap-1.5 p-2"
            >
              <span className={`block h-0.5 w-6 bg-ocean-deep transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ocean-deep transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ocean-deep transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ocean/15 bg-sand px-4 sm:px-6 py-4 flex flex-col gap-4 font-heading text-base font-medium text-ocean-deep">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href="http://lin.ee/pAD4PUj"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2.5 text-sand text-center"
          >
            予約・お問い合わせ
          </a>
        </nav>
      )}
    </header>
  );
}
