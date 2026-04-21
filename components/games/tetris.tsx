'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

interface TetrisProps {
  onScoreChange: (score: number) => void
}

const BLOCK_SIZE = 30
const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20

const SHAPES = [
  [[1, 1, 1, 1]],                         // I
  [[1, 1], [1, 1]],                       // O
  [[1, 1, 1], [0, 1, 0]],                 // T
  [[1, 1, 1], [1, 0, 0]],                 // L
  [[1, 1, 1], [0, 0, 1]],                 // J
  [[1, 1, 0], [0, 1, 1]],                 // S
  [[0, 1, 1], [1, 1, 0]],                 // Z
]

const COLORS = [
  '#FF0D0D', '#0DFF1C', '#0D85FF', '#FFD800',
  '#FF00FF', '#00FFFF', '#FF8E0D'
]

export function Tetris({ onScoreChange }: TetrisProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const requestRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const dropCounterRef = useRef(0)
  const dropIntervalRef = useRef(1000)

  const gameStateRef = useRef({
    piece: {
      pos: { x: 0, y: 0 },
      shape: [] as number[][],
      color: ''
    },
    board: Array(BOARD_HEIGHT).fill(null).map(() => 
      Array(BOARD_WIDTH).fill(null)
    ) as (string | null)[][]
  })

  const createPiece = useCallback(() => {
    const shapeIndex = Math.floor(Math.random() * SHAPES.length)
    return {
      pos: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 },
      shape: SHAPES[shapeIndex],
      color: COLORS[shapeIndex]
    }
  }, [])

  const drawBoard = useCallback((ctx: CanvasRenderingContext2D) => {
    const { board, piece } = gameStateRef.current
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Draw board
    board.forEach((row, y) => {
      row.forEach((color, x) => {
        if (color) {
          ctx.fillStyle = color
          ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1)
        }
      })
    })

    // Draw current piece
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = piece.color
          ctx.fillRect(
            (piece.pos.x + x) * BLOCK_SIZE,
            (piece.pos.y + y) * BLOCK_SIZE,
            BLOCK_SIZE - 1,
            BLOCK_SIZE - 1
          )
        }
      })
    })
  }, [])

  const collide = useCallback(() => {
    const { piece, board } = gameStateRef.current
    return piece.shape.some((row, dy) =>
      row.some((value, dx) =>
        value !== 0 &&
        (board[piece.pos.y + dy] &&
          board[piece.pos.y + dy][piece.pos.x + dx]) !== null
      )
    )
  }, [])

  const merge = useCallback(() => {
    const { piece, board } = gameStateRef.current
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          board[piece.pos.y + y][piece.pos.x + x] = piece.color
        }
      })
    })
  }, [])

  const rotate = useCallback(() => {
    const { piece } = gameStateRef.current
    const newShape = piece.shape[0].map((_, i) =>
      piece.shape.map(row => row[i]).reverse()
    )
    const oldShape = piece.shape
    piece.shape = newShape
    if (collide()) {
      piece.shape = oldShape
    }
  }, [collide])

  const move = useCallback((dir: number) => {
    const { piece } = gameStateRef.current
    piece.pos.x += dir
    if (collide()) {
      piece.pos.x -= dir
      return false
    }
    return true
  }, [collide])

  const drop = useCallback(() => {
    const { piece } = gameStateRef.current
    piece.pos.y++
    if (collide()) {
      piece.pos.y--
      merge()
      // Check for line clears
      let linesCleared = 0
      for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
        if (gameStateRef.current.board[y].every(cell => cell !== null)) {
          gameStateRef.current.board.splice(y, 1)
          gameStateRef.current.board.unshift(Array(BOARD_WIDTH).fill(null))
          linesCleared++
          y++
        }
      }
      if (linesCleared > 0) {
        const newScore = score + (linesCleared * 100)
        setScore(newScore)
        onScoreChange(newScore)
      }
      gameStateRef.current.piece = createPiece()
      if (collide()) {
        setGameOver(true)
        return false
      }
    }
    return true
  }, [collide, merge, createPiece, score, onScoreChange])

  const gameLoop = useCallback((now: number) => {
    const deltaTime = now - lastTimeRef.current
    lastTimeRef.current = now

    dropCounterRef.current += deltaTime
    if (dropCounterRef.current > dropIntervalRef.current) {
      drop()
      dropCounterRef.current = 0
    }

    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      drawBoard(ctx)
    }

    if (!gameOver) {
      requestRef.current = requestAnimationFrame(gameLoop)
    }
  }, [drawBoard, drop, gameOver])

  useEffect(() => {
    gameStateRef.current.piece = createPiece()
    requestRef.current = requestAnimationFrame(gameLoop)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [createPiece, gameLoop])

  useHotkeys('left', () => move(-1), [move])
  useHotkeys('right', () => move(1), [move])
  useHotkeys('down', drop, [drop])
  useHotkeys('up', rotate, [rotate])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={BLOCK_SIZE * BOARD_WIDTH}
        height={BLOCK_SIZE * BOARD_HEIGHT}
        className="rounded-lg bg-black/10"
      />
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
          <div className="text-white text-2xl font-bold">Game Over!</div>
        </div>
      )}
    </div>
  )
}

