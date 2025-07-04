"use client"

import { useEffect, useRef } from "react"
import { animate } from "animejs"

const CursorFollower = () => {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    if (isMobile) {
      const handleScroll = () => {
        if (circleRef.current) {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          const bodyHeight = document.body.scrollHeight
          const progress = scrollY / (bodyHeight - windowHeight)

          animate(circleRef.current, {
            translateY: progress * (windowHeight - 100), // 100 is circle height
            easing: "easeOutQuad",
            duration: 500,
          })
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      const handleMouseMove = (e: MouseEvent) => {
        if (circleRef.current) {
          animate(circleRef.current, {
            translateX: e.clientX,
            translateY: e.clientY,
            easing: "easeOutQuad",
            duration: 1200,
          })
        }
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={circleRef} className="cursor-follower" />
}

export default CursorFollower
