"use client"

import { useEffect, useState } from "react"
import NumberFlow, { NumberFlowGroup } from "@number-flow/react"
import { cn } from "@/lib/utils"

type Props = {
  targetDate: string
  className?: string
}

const calculateTimeLeft = (targetDate: string) => {
  const target = new Date(targetDate)
  const now = new Date()
  const difference = target.getTime() - now.getTime()

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      milliseconds: difference % 1000,
    }
  }

  return timeLeft
}

export default function TimerToTarget({ targetDate, className }: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 47)

    return () => clearTimeout(timer)
  })

  return (
    <NumberFlowGroup>
      <div
        style={{ fontVariantNumeric: "tabular-nums" }}
        className={cn("flex items-baseline gap-1.5", className)}
      >
        <NumberFlow
          trend={-1}
          value={timeLeft.days}
          format={{ minimumIntegerDigits: 2 }}
        />
        <p>:</p>
        <NumberFlow
          trend={-1}
          value={timeLeft.hours}
          format={{ minimumIntegerDigits: 2 }}
        />
        <p>:</p>
        <NumberFlow
          trend={-1}
          value={timeLeft.minutes}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <p>:</p>
        <NumberFlow
          trend={-1}
          value={timeLeft.seconds}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <p className="hidden md:block">:</p>
        <div className="hidden w-8 md:block">
          <NumberFlow
            trend={-1}
            value={Math.floor(timeLeft.milliseconds / 10)}
            format={{ minimumIntegerDigits: 2 }}
          />
        </div>
      </div>
    </NumberFlowGroup>
  )
}
