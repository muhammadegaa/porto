"use client"

import { Fragment, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { ShimmerText } from "@/components/ui/shimmer-text"
import { cn } from "@/lib/utils"

const PASSCODE = "175394"
const DIGIT_STEP_MS = 170
const PRE_WELCOME_PAUSE_MS = 550
const WELCOME_DWELL_MS = 1600
const SESSION_KEY = "ega_splash_shown_v2"

type Phase = "typing" | "welcome" | "done"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mql.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])
  return reduced
}

export function SplashScreen() {
  const [visible, setVisible] = useState<boolean | null>(null)
  const [filled, setFilled] = useState(0)
  const [phase, setPhase] = useState<Phase>("typing")
  const reducedMotion = usePrefersReducedMotion()

  // Decide whether to show on mount (client-only).
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setVisible(false)
        return
      }
    } catch {
      /* no-op */
    }
    setVisible(true)
  }, [])

  // Reduced motion, skip straight to done.
  useEffect(() => {
    if (!visible || !reducedMotion) return
    setPhase("done")
  }, [reducedMotion, visible])

  // Drive digit fill.
  useEffect(() => {
    if (!visible || phase !== "typing") return
    if (filled >= PASSCODE.length) {
      const t = setTimeout(() => setPhase("welcome"), PRE_WELCOME_PAUSE_MS)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setFilled((n) => n + 1), DIGIT_STEP_MS)
    return () => clearTimeout(t)
  }, [filled, phase, visible])

  // Dwell on welcome then dismiss.
  useEffect(() => {
    if (phase !== "welcome") return
    const t = setTimeout(() => setPhase("done"), WELCOME_DWELL_MS)
    return () => clearTimeout(t)
  }, [phase])

  // Persist shown flag and hide.
  useEffect(() => {
    if (phase !== "done") return
    try {
      sessionStorage.setItem(SESSION_KEY, "1")
    } catch {
      /* no-op */
    }
    const t = setTimeout(() => setVisible(false), 650)
    return () => clearTimeout(t)
  }, [phase])

  if (visible === null || visible === false) return null

  return (
    <AnimatePresence>
      {phase !== "done" ? (
        <motion.div
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          role="status"
        >
          {/* Soft radial backdrop for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--muted)/0.5),transparent_70%)]"
          />

          <div className="relative flex flex-col items-center gap-10 px-6">
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-muted-foreground"
            >
              it&apos;s ega
            </motion.p>

            <PasscodeDisplay filled={filled} total={PASSCODE.length} value={PASSCODE} />

            <div className="h-10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === "welcome" && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ShimmerText className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                      Welcome 👋
                    </ShimmerText>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPhase("done")}
            className="absolute bottom-5 right-5 text-[11px] uppercase tracking-wider text-muted-foreground/70 hover:text-foreground transition-colors"
          >
            skip
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function PasscodeDisplay({
  filled,
  total,
  value,
}: {
  filled: number
  total: number
  value: string
}) {
  const separatorIndex = Math.floor(total / 2)

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const char = i < filled ? value[i] : ""
        const isActive = i === filled
        const isFilled = i < filled

        return (
          <Fragment key={i}>
            {i === separatorIndex && <Separator />}
            <motion.div
              className={cn(
                "relative h-12 w-10 sm:h-14 sm:w-12 rounded-md border border-input bg-background shadow-sm",
                "flex items-center justify-center overflow-hidden",
                isFilled && "border-foreground/30 bg-muted/40",
                isActive && "ring-2 ring-foreground/20"
              )}
              animate={
                isActive
                  ? {
                      scale: [1, 1.04, 1],
                      boxShadow: [
                        "0 0 0 0 hsl(var(--foreground) / 0)",
                        "0 0 0 4px hsl(var(--foreground) / 0.08)",
                        "0 0 0 0 hsl(var(--foreground) / 0)",
                      ],
                    }
                  : { scale: 1 }
              }
              transition={
                isActive
                  ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <AnimatePresence mode="popLayout">
                {char && (
                  <motion.span
                    key={char + i}
                    initial={{ y: 10, opacity: 0, scale: 0.8, filter: "blur(3px)" }}
                    animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ y: -6, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-lg sm:text-xl font-medium text-foreground"
                  >
                    {char}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Caret for active-empty slot */}
              {isActive && !char && (
                <motion.span
                  aria-hidden
                  className="absolute h-5 w-px bg-foreground/70"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </Fragment>
        )
      })}
    </div>
  )
}

function Separator() {
  return (
    <motion.div
      aria-hidden
      role="separator"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.5, scaleX: 1 }}
      transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-1 h-px w-3 bg-muted-foreground/60"
    />
  )
}
