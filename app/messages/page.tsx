"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react"
import { formatDistanceToNow } from "date-fns"
import { id } from "date-fns/locale"

import { getData } from "../_lib/get-data"
import { Button } from "@/components/ui/button"
import RDotIconLoading from "@/components/r-dot-icon-loading"

export default function MessagesPage() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["guestbook-messages"],
    queryFn: ({ pageParam }) => getData({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // if the last page returned data, there might be more
      return lastPage.length ? allPages.length : undefined
    },
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  const messages = data?.pages.flatMap((page) => page) ?? []

  return (
    <article className="min-h-svh max-w-prose mx-auto py-8 px-4">
      <div className="flex flex-col items-start gap-4 mb-8">
        <Button variant="outline" size="sm" asChild className="rounded-none">
          <Link href="/">
            <ArrowLeft /> Kembali
          </Link>
        </Button>
        <h1 className="text-5xl font-serif">Semua Ucapan & Doa,</h1>
      </div>

      {status === "pending" ? (
        <div className="flex justify-center items-center h-10">
          <RDotIconLoading />
        </div>
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <div className="space-y-6">
            {messages.map((item) => (
              <div key={item.id} className="flex flex-col">
                <p className="font-serif">
                  <span className="text-muted-foreground/50">dari</span>{" "}
                  {item.name},
                </p>
                <p className="text-sm text-wrap mt-1.5">{item.message}</p>
                <p className="text-xs text-muted-foreground mt-1 italic">
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                    locale: id,
                  })}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center h-10">
            {hasNextPage && (
              <Button
                ref={ref}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? <RDotIconLoading /> : ""}
              </Button>
            )}
            {!hasNextPage && messages.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Tidak ada pesan lagi
              </p>
            )}
          </div>
        </>
      )}
    </article>
  )
}
