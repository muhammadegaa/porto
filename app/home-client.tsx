"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export function HomeClient({ initialContent }: { initialContent: any }) {
  const homeContent = initialContent.home
  const companies = initialContent.companies

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-8 sm:py-12">
        <div className="relative z-10 container mx-auto px-4 text-center text-black">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {homeContent.title}
          </h1>
          <div className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 h-16 sm:h-20">
            <TypeAnimation
              sequence={homeContent.subtitle}
              wrapper="div"
              cursor={true}
              repeat={Number.POSITIVE_INFINITY}
              style={{ fontSize: "1em" }}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-black/90 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
            >
              <Link href="/work">
                View Portfolio
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white border-black text-black hover:bg-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
            >
              <a href="mailto:simatupang.ega@gmail.com">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-black">
            Companies I've Worked With
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 max-w-4xl mx-auto">
            {companies
              .filter((company: any) => company.isVisible)
              .map((company: any) => (
                <div
                  key={company.name}
                  className="w-32 sm:w-40 h-12 sm:h-16 relative transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    className="object-contain filter hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

