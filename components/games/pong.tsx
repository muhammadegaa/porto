'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface PongProps {
  onScoreChange: (score: number) => void
}

export function Pong({ onScoreChange }: PongProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const animationFrameRef = useRef<number>()
  
  // Game state refs to persist between renders
  const gameStateRef = useRef({
    paddleY: 0,
    computerPaddleY: 0,
    ballX: 0,
    ballY: 0,
    ballSpeedX: 5,
    ballSpeedY: 3,
    localScore: 0
  })

  const gameLoop = useCallback((context: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const paddleHeight = 100
    const paddleWidth = 10
    const ballSize = 10

    // Initialize game state if not already set
    if (gameStateRef.current.ballX === 0) {
      gameStateRef.current = {
        paddleY: canvas.height / 2 - paddleHeight / 2,
        computerPaddleY: canvas.height / 2 - paddleHeight / 2,
        ballX: canvas.width / 2,
        ballY: canvas.height / 2,
        ballSpeedX: 5,
        ballSpeedY: 3,
        localScore: 0
      }
    }

    const animate = () => {
      if (!canvas) return

      // Clear the entire canvas
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      context.fillStyle = 'rgba(0, 0, 0, 0.1)'
      context.fillRect(0, 0, canvas.width, canvas.height)

      const state = gameStateRef.current

      // Move ball
      state.ballX += state.ballSpeedX
      state.ballY += state.ballSpeedY

      // Ball collision with top and bottom
      if (state.ballY < 0 || state.ballY > canvas.height - ballSize) {
        state.ballSpeedY = -state.ballSpeedY
      }

      // Ball collision with paddles
      if (
        (state.ballX < paddleWidth && 
         state.ballY > state.paddleY && 
         state.ballY < state.paddleY + paddleHeight) ||
        (state.ballX > canvas.width - paddleWidth - ballSize && 
         state.ballY > state.computerPaddleY && 
         state.ballY < state.computerPaddleY + paddleHeight)
      ) {
        state.ballSpeedX = -state.ballSpeedX
        state.localScore++
        setScore(state.localScore)
        onScoreChange(state.localScore)
      }

      // Ball out of bounds
      if (state.ballX < 0 || state.ballX > canvas.width) {
        state.ballX = canvas.width / 2
        state.ballY = canvas.height / 2
        state.localScore = Math.max(0, state.localScore - 1)
        setScore(state.localScore)
        onScoreChange(state.localScore)
      }

      // Move computer paddle
      const paddleSpeed = 4
      if (state.computerPaddleY + paddleHeight / 2 < state.ballY) {
        state.computerPaddleY += paddleSpeed
      } else {
        state.computerPaddleY -= paddleSpeed
      }

      // Draw paddles
      context.fillStyle = 'white'
      context.fillRect(0, state.paddleY, paddleWidth, paddleHeight)
      context.fillRect(
        canvas.width - paddleWidth,
        state.computerPaddleY,
        paddleWidth,
        paddleHeight
      )

      // Draw ball
      context.beginPath()
      context.arc(state.ballX, state.ballY, ballSize / 2, 0, Math.PI * 2)
      context.fill()
      context.closePath()

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Handle mouse/touch movement
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const y = 'touches' in e 
        ? e.touches[0].clientY - rect.top 
        : e.clientY - rect.top
      gameStateRef.current.paddleY = Math.max(0, Math.min(canvas.height - paddleHeight, y))
    }

    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('touchmove', handleMove)

    animate()

    return () => {
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('touchmove', handleMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [onScoreChange])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const cleanup = gameLoop(context)

    return () => {
      if (cleanup) cleanup()
    }
  }, [gameLoop])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={500}
      className="rounded-lg bg-black/10 cursor-none touch-none"
    />
  )
}

