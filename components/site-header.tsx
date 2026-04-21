"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "mailto:simatupang.ega@gmail.com?subject=AI%20PM%20role", external: true },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4">
        <Link href="/" className="font-serif text-base sm:text-lg font-bold">
          Muhammad Ega
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition",
                  pathname === item.href || pathname?.startsWith(item.href + "/")
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
