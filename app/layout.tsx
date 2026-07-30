import { Montserrat, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SplashScreen } from "@/components/splash-screen"

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
  title: "Muhammad Ega · Senior AI Product Manager",
  description:
    "Senior AI Product Manager shipping AI products across dev tools, consumer SaaS, and vertical voice AI. Previously Senior PM at Mekari, PM at Shopee, Software Specialist at IBM.",
  keywords:
    "Senior AI Product Manager, agentic AI, generative AI, LLM products, AI PM, evals, RAG, voice AI, product strategy, Muhammad Ega",
  metadataBase: new URL("https://itsega.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsega.xyz",
    siteName: "Muhammad Ega · AI PM Portfolio",
    title: "Muhammad Ega · Senior AI Product Manager",
    description:
      "AI PM who ships. Products across AI dev tools (codehere), consumer AI (ravenote), and vertical voice AI (beeready).",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ega · AI Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ega · Senior AI Product Manager",
    description:
      "AI PM who ships. Products: codehere, ravenote, beeready.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable,
          merriweather.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SplashScreen />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
