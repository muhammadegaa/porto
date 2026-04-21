'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Gamepad2, Star, Circle, Grid2X2 } from 'lucide-react'
import { CatchTheStar } from './games/catch-the-star'
import { Pong } from './games/pong'
import { Breakout } from './games/breakout'

type GameType = 'star' | 'pong' | 'breakout'

interface IdleGamesProps {
  onClose: () => void
  initialGame: GameType
}

export function IdleGames({ onClose, initialGame }: IdleGamesProps) {
  const [score, setScore] = useState(0)

  const handleScoreChange = (newScore: number) => {
    setScore(newScore)
  }

  const gameComponents = {
    star: CatchTheStar,
    pong: Pong,
    breakout: Breakout
  }

  const GameComponent = gameComponents[initialGame]

  const gameInstructions = {
    star: "Click the star to score points!",
    pong: "Move your mouse to control the paddle. Score points by hitting the ball!",
    breakout: "Move your mouse to control the paddle. Break all the bricks to win!"
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-lg max-w-4xl w-full p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Gamepad2 className="w-6 h-6" />
            <h2 className="text-xl font-bold">Idle Game</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-muted px-4 py-2 rounded-md">
              <span className="font-serif text-lg">Score: {score}</span>
            </div>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-4">
          Because you've been idle, I'm showing you a game to play. Enjoy!
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={initialGame}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full flex justify-center"
          >
            <GameComponent onScoreChange={handleScoreChange} />
          </motion.div>
        </AnimatePresence>

        <div className="text-center text-sm text-muted-foreground">
          {gameInstructions[initialGame]}
        </div>
      </div>
    </div>
  )
}

