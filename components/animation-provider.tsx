"use client"

import { useEffect, useRef } from "react"
import { animate, createScope, onScroll } from "animejs"
import { cn } from "@/lib/utils"

interface ScrollProgressBarProps {
  className?: string
  children?: React.ReactNode
}

export function AnimationProvider({
  className,
  children,
}: ScrollProgressBarProps) {
  const root = useRef<HTMLDivElement>(null)
  const scope = useRef<any>(null)

  useEffect(() => {
    if (!root.current) return

    const height = root.current.scrollHeight

    scope.current = createScope({ root }).add(() => {
      // Create the progress bar animation that syncs with scroll
      if (root.current) {
        animate(".progress-bar", {
          width: "100%",
          easing: "linear",
          autoplay: onScroll({
            container: ".scroll-container",
            sync: 0.25, // Synchronize with scroll position
            enter: "top top",
            leave: `top bottom+=${height}px`,
          }),
        })
      }
    })

    // Cleanup function
    return () => {
      if (scope.current) {
        scope.current.revert()
      }
    }
  }, [])

  return (
    <div ref={root} className={cn("scroll-container", className)}>
      {children}
    </div>
  )
}
