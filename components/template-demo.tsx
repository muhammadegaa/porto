"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface TemplateDemoProps {
  name: string
  demoUrl: string
  onClose: () => void
}

export function TemplateDemo({ name, demoUrl, onClose }: TemplateDemoProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-6xl h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{name} - Demo</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-grow relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
          <iframe src={demoUrl} className="w-full h-full" onLoad={() => setIsLoading(false)} />
        </div>
      </div>
    </div>
  )
}

