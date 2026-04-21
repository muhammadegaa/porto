"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AnnouncementBarProps {
  content: {
    text: string
    buttonText: string
    buttonLink: string
    isVisible: boolean
  }
}

export function AnnouncementBar({ content }: AnnouncementBarProps) {
  if (!content.isVisible) return null

  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-4">
        <p className="text-sm text-center">{content.text}</p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-transparent text-white border-white hover:bg-white hover:text-black"
        >
          <Link href={content.buttonLink}>{content.buttonText}</Link>
        </Button>
      </div>
    </div>
  )
}

