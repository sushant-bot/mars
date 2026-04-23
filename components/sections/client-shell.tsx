"use client"

import { useState, useCallback, useEffect, type ReactNode } from "react"
import { IntroLoader } from "@/components/sections/intro-loader"

export function ClientShell({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  const handleComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  useEffect(() => {
    if (showIntro) {
      setContentVisible(false)
      return
    }

    const frame = window.requestAnimationFrame(() => {
      setContentVisible(true)
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [showIntro])

  return (
    <>
      {showIntro ? (
        <IntroLoader onComplete={handleComplete} />
      ) : (
        <div
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: "opacity 0.45s ease-in-out",
            willChange: "opacity",
          }}
        >
          {children}
        </div>
      )}
    </>
  )
}
