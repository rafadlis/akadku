"use client"

import { useEffect, useRef } from "react"
import { animate, createScope, onScroll, utils } from "animejs"
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

    scope.current = createScope({ root }).add((self) => {
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

      // Random movement animation for round elements
      const animateRoundElements = () => {
        const $roundElements = utils.$(".bg-animation-container .round-element")

        if ($roundElements.length > 0) {
          animate($roundElements, {
            x: () => utils.random(-50, 50) + "px",
            y: () => utils.random(-50, 50) + "px",
            scale: () => utils.random(0.8, 1.2),
            duration: () => utils.random(2000, 4000),
            easing: "inOut(2)",
            onComplete: () => animateRoundElements(),
          })
        }
      }

      // Register the animation method for external access if needed
      self.add("animateRoundElements", animateRoundElements)

      // Start the animation
      animateRoundElements()
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
