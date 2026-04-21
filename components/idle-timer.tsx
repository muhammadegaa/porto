'use client'

import { useState, useEffect } from 'react'
import { IdleGames } from './idle-games'

// Set to 3 minutes (180000 ms) - adjust as needed based on user feedback
const IDLE_TIME = 180000 // 3 minutes of inactivity

type GameType = 'star' | 'pong' | 'breakout'

export function IdleTimer() {
  const [isIdle, setIsIdle] = useState(false)
  const [randomGame, setRandomGame] = useState<GameType>('star')

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const resetTimer = () => {
      if (timeout) clearTimeout(timeout)
      if (!isIdle) {
        timeout = setTimeout(() => {
          setRandomGame(getRandomGame())
          setIsIdle(true)
        }, IDLE_TIME)
      }
    }

    const getRandomGame = (): GameType => {
      const games: GameType[] = ['star', 'pong', 'breakout']
      return games[Math.floor(Math.random() * games.length)]
    }

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    events.forEach(event => document.addEventListener(event, resetTimer))

    resetTimer()

    return () => {
      events.forEach(event => document.removeEventListener(event, resetTimer))
      if (timeout) clearTimeout(timeout)
    }
  }, [isIdle])

  const handleCloseGames = () => {
    setIsIdle(false)
    setTimeout(() => {
      const event = new Event('mousemove')
      document.dispatchEvent(event)
    }, 100)
  }

  if (!isIdle) return null

  return <IdleGames onClose={handleCloseGames} initialGame={randomGame} />
}

