'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CatchTheStarProps {
  onClose: () => void
}

export function CatchTheStar({ onClose }: CatchTheStarProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const moveStar = useCallback(() => {
    // Keep the star within a reasonable area of the viewport
    const maxWidth = Math.min(window.innerWidth - 100, 800)
    const maxHeight = Math.min(window.innerHeight - 100, 600)
    const x = Math.random() * maxWidth
    const y = Math.random() * maxHeight
    setPosition({ x, y })
  }, [])

  const handleClick = useCallback(() => {
    setScore((prevScore) => prevScore + 1)
    setShowScore(true)
    setTimeout(() => setShowScore(false), 1000)
    moveStar()
  }, [moveStar])

  useEffect(() => {
    moveStar()
    const interval = setInterval(moveStar, 2000)
    return () => clearInterval(interval)
  }, [moveStar])

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <AnimatePresence>
        {showScore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="text-4xl font-bold text-yellow-400">+1</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-4 right-4 flex items-center gap-4">
        <div className="bg-card text-card-foreground px-4 py-2 rounded-md">
          <span className="font-serif text-lg">Score: {score}</span>
        </div>
        <Button 
          variant="outline" 
          onClick={onClose}
          className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
        >
          Close Game
        </Button>
      </div>

      <motion.div
        className="absolute cursor-pointer"
        style={{ left: position.x, top: position.y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleClick}
      >
        <Star className="w-8 h-8 text-yellow-400 drop-shadow-lg" fill="currentColor" />
      </motion.div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-muted-foreground text-sm">Click the star to score points!</p>
      </div>
    </div>
  )
}

