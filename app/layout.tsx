import { Montserrat, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { IdleTimer } from "@/components/idle-timer"
import { AnnouncementBar } from "@/components/announcement-bar"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata = {
  title: "Muhammad Ega - Product Manager Portfolio",
  description:
    "Expert in Product Strategy, Agile Development, and Data-Driven Solutions. Explore Muhammad Ega's portfolio showcasing innovative product management projects and skills.",
  keywords: "Product Manager, Muhammad Ega, Portfolio, Product Strategy, Agile Development, Data-Driven Solutions",
  metadataBase: new URL("https://muhammadegaa.vercel.app"),
  verification: {
    google: "4e7LNBnsugazqo7jPczHzllvK1nKNBtkbubIKFUDGHM",
  },
  author: "Muhammad Ega",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadegaa.vercel.app",
    site_name: "Muhammad Ega Portfolio",
    title: "Muhammad Ega - Product Manager Portfolio",
    description: "Expert in Product Strategy, Agile Development, and Data-Driven Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ega Portfolio",
      },
    ],
  },
  twitter: {
    handle: "@muhammadegaa",
    site: "@muhammadegaa",
    cardType: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
    generator: 'v0.app'
}

async function getContent() {
  const docRef = doc(db, "content", "website")
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }
  return null
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const content = await getContent()
  const announcement = content?.announcement || {
    text: "🚀 Need a personal website? I can help you build one!",
    buttonText: "Learn More",
    buttonLink: "/services",
    isVisible: true,
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", montserrat.variable, merriweather.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <AnnouncementBar content={announcement} />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <IdleTimer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

