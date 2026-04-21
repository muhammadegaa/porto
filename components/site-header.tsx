"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const WorkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8Z" />
    <path d="M8 5v14" />
    <path d="M16 5v14" />
    <path d="M4 9h16" />
    <path d="M4 15h16" />
  </svg>
)

const AboutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
    <path d="M12 11.25v5.25" />
    <path d="M12 8.25a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75" fill="currentColor" />
  </svg>
)

const ThoughtsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M9 7h6" />
    <path d="M9 11h6" />
    <path d="M9 15h4" />
  </svg>
)

const ProjectsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M7.5 7.5l9 9" />
    <path d="M7.5 16.5l9-9" />
  </svg>
)

const navigation = [
  { name: "Work", href: "/work", icon: <WorkIcon /> },
  { name: "Who am I?", href: "/about", icon: <AboutIcon /> },
  { name: "Thoughts", href: "/thoughts", icon: <ThoughtsIcon /> },
  { name: "Projects", href: "/projects", icon: <ProjectsIcon /> },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between sm:px-4">
        <Link href="/" className="font-heading text-xl font-bold ml-4">
          Muhammad Ega
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-6 pr-1 sm:pr-2 md:pr-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center justify-center",
                "w-8 h-8 sm:w-10 sm:h-10 md:min-w-[40px] md:h-10",
                "md:hover:min-w-[100px]",
                "transition-all duration-300 ease-in-out",
                "rounded-full",
                pathname === item.href ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <div 
                className={cn(
                  "absolute left-0 right-0 flex items-center justify-center",
                  "transition-all duration-300 ease-in-out",
                  "group-hover:opacity-0 group-hover:scale-50",
                  "md:group-hover:opacity-0 md:group-hover:scale-50"
                )}
              >
                {item.icon}
              </div>
              <div 
                className={cn(
                  "absolute left-0 right-0 hidden md:flex items-center justify-center",
                  "opacity-0 scale-50",
                  "group-hover:opacity-100 group-hover:scale-100",
                  "transition-all duration-300 ease-in-out",
                  "px-2"
                )}
              >
                <span className="text-sm font-medium truncate">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

