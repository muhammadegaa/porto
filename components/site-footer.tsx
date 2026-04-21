import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Muhammad Ega | Tech Product Enthusiast
        </p>
      </div>
    </footer>
  )
}

