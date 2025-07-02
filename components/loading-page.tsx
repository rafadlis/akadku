"use client"

import { cn } from "@/lib/utils"
import RDotIconLoading from "./r-dot-icon-loading"
import { CircleNotchIcon } from "@phosphor-icons/react"

export function LoadingPage({ fullPage = false }: { fullPage?: boolean }) {
  return (
    <section
      className={cn(
        "flex items-center justify-center h-full",
        fullPage && "h-svh"
      )}
    >
      <CircleNotchIcon className="animate-spin" />
    </section>
  )
}
