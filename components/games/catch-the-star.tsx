'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

interface CatchTheStarProps {
  onScoreChange: (score: number) => void
}

export function CatchTheStar({ onScoreChange }: CatchTheStarProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const moveStar = useCallback(() => {
    const maxWidth = Math.min(window.innerWidth - 100, 800)
    const maxHeight = Math.min(window.innerHeight - 200, 500)
    const x = Math.random() * maxWidth
    const y = Math.random() * maxHeight
    setPosition({ x, y })
  }, [])

  const handleClick = useCallback(() => {
    const newScore = score + 1
    setScore(newScore)
    onScoreChange(newScore)
    setShowScore(true)
    setTimeout(() => setShowScore(false), 1000)
    moveStar()
  }, [score, moveStar, onScoreChange])

  useEffect(() => {
    moveStar()
    const interval = setInterval(moveStar, 2000)
    return () => clearInterval(interval)
  }, [moveStar])

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg bg-black/10">
      <AnimatePresence>
        {showScore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="text-4xl font-bold text-yellow-400">+1</div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  )
}

