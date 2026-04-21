import Link from "next/link"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>Muhammad Ega · AI Product Manager · Manchester, UK</p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/mesimatupang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:simatupang.ega@gmail.com"
            className="hover:text-foreground transition"
          >
            Email
          </a>
          <Link href="/work" className="hover:text-foreground transition">
            Work
          </Link>
        </div>
      </div>
    </footer>
  )
}
