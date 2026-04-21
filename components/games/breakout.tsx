'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface BreakoutProps {
  onScoreChange: (score: number) => void
}

export function Breakout({ onScoreChange }: BreakoutProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const animationFrameRef = useRef<number>()

  // Game state refs to persist between renders
  const gameStateRef = useRef({
    x: 0,
    y: 0,
    dx: 4,
    dy: -4,
    paddleX: 0,
    lives: 3,
    localScore: 0,
    bricks: [] as { x: number; y: number; status: number }[][]
  })

  const gameLoop = useCallback((context: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const brickRowCount = 5
    const brickColumnCount = 8
    const brickWidth = 80
    const brickHeight = 20
    const brickPadding = 10
    const brickOffsetTop = 30
    const brickOffsetLeft = 35
    const paddleHeight = 10
    const paddleWidth = 75
    const ballRadius = 6

    // Initialize game state if not already set
    if (gameStateRef.current.bricks.length === 0) {
      gameStateRef.current = {
        x: canvas.width / 2,
        y: canvas.height - 30,
        dx: 4,
        dy: -4,
        paddleX: (canvas.width - paddleWidth) / 2,
        lives: 3,
        localScore: 0,
        bricks: Array(brickColumnCount).fill(null).map(() =>
          Array(brickRowCount).fill(null).map(() => ({ x: 0, y: 0, status: 1 }))
        )
      }
    }

    const state = gameStateRef.current

    function drawBall() {
      context.beginPath()
      context.arc(state.x, state.y, ballRadius, 0, Math.PI * 2)
      context.fillStyle = 'white'
      context.fill()
      context.closePath()
    }

    function drawPaddle() {
      context.beginPath()
      context.rect(state.paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
      context.fillStyle = 'white'
      context.fill()
      context.closePath()
    }

    function drawBricks() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (state.bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop
            state.bricks[c][r].x = brickX
            state.bricks[c][r].y = brickY
            context.beginPath()
            context.rect(brickX, brickY, brickWidth, brickHeight)
            context.fillStyle = `hsl(${c * 30 + r * 20}, 70%, 60%)`
            context.fill()
            context.closePath()
          }
        }
      }
    }

    function collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const b = state.bricks[c][r]
          if (b.status === 1) {
            if (
              state.x > b.x &&
              state.x < b.x + brickWidth &&
              state.y > b.y &&
              state.y < b.y + brickHeight
            ) {
              state.dy = -state.dy
              b.status = 0
              state.localScore++
              setScore(state.localScore)
              onScoreChange(state.localScore)

              if (state.localScore === brickRowCount * brickColumnCount) {
                setGameOver(true)
                if (animationFrameRef.current) {
                  cancelAnimationFrame(animationFrameRef.current)
                }
                return
              }
            }
          }
        }
      }
    }

    function drawLives() {
      context.font = '16px Arial'
      context.fillStyle = 'white'
      context.fillText(`Lives: ${state.lives}`, canvas.width - 65, 20)
    }

    function draw() {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background
      context.fillStyle = 'rgba(0, 0, 0, 0.1)'
      context.fillRect(0, 0, canvas.width, canvas.height)

      drawBricks()
      drawBall()
      drawPaddle()
      drawLives()
      collisionDetection()

      // Ball collision with walls
      if (state.x + state.dx > canvas.width - ballRadius || state.x + state.dx < ballRadius) {
        state.dx = -state.dx
      }
      if (state.y + state.dy < ballRadius) {
        state.dy = -state.dy
      } else if (state.y + state.dy > canvas.height - ballRadius) {
        if (state.x > state.paddleX && state.x < state.paddleX + paddleWidth) {
          state.dy = -state.dy
        } else {
          state.lives--
          if (state.lives === 0) {
            setGameOver(true)
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current)
            }
            return
          } else {
            state.x = canvas.width / 2
            state.y = canvas.height - 30
            state.dx = 4
            state.dy = -4
            state.paddleX = (canvas.width - paddleWidth) / 2
          }
        }
      }

      state.x += state.dx
      state.y += state.dy

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    // Handle mouse/touch movement
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const relativeX = 'touches' in e 
        ? e.touches[0].clientX - rect.left
        : e.clientX - rect.left
      if (relativeX > 0 && relativeX < canvas.width) {
        state.paddleX = relativeX - paddleWidth / 2
      }
    }

    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('touchmove', handleMove)

    draw()

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
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        className="rounded-lg bg-black/10 cursor-none touch-none"
      />
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
          <div className="text-white text-2xl font-bold">
            {score === 40 ? 'You Win!' : 'Game Over!'}
          </div>
        </div>
      )}
    </div>
  )
}

