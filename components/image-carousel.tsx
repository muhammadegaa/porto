'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  interval?: number
}

export function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  const getVisibleImages = () => {
    const lastIndex = images.length - 1
    const indices = []
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i
      if (index < 0) index = lastIndex + index + 1
      if (index > lastIndex) index = index - lastIndex - 1
      indices.push(index)
    }
    return indices
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="relative">
        {/* Images */}
        <div className="relative h-[400px] flex items-center justify-center overflow-visible">
          {getVisibleImages().map((imageIndex, position) => (
            <div
              key={`${imageIndex}-${position}`}
              className={cn(
                "absolute transition-all duration-500 ease-in-out rounded-[32px] overflow-hidden",
                "transform-gpu",
                {
                  "z-30 w-[640px] h-[360px] opacity-100": position === 2,
                  "z-20 w-[540px] h-[304px] opacity-50 blur-sm": position === 1 || position === 3,
                  "z-10 w-[440px] h-[248px] opacity-30 blur-md": position === 0 || position === 4,
                }
              )}
              style={{
                left: "50%",
                transform: `translateX(-50%) translateX(${(position - 2) * 260}px)`,
              }}
            >
              <div className="w-full h-full relative">
                <Image
                  src={images[imageIndex].src || "/placeholder.svg"}
                  alt={images[imageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 640px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-8 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-8 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90"
          onClick={handleNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-primary w-4" : "bg-primary/30"
              )}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

