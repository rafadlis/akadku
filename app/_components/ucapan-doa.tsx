"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { SmileySadIcon, SmileyIcon, SmileyMehIcon } from "@phosphor-icons/react"
import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { formatDistanceToNow } from "date-fns"
import { id } from "date-fns/locale"

import { addData } from "../_actions/add-data"
import { getData } from "../_lib/get-data"
import { addDataSchema, type AddDataSchema } from "../_schema/add-data-schmea"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { createSupabaseClient } from "../../supabase/client"

export function UcapanDoa() {
  // 1. TanStack Query and Supabase client setup
  const queryClient = useQueryClient()
  const supabase = createSupabaseClient()

  // 2. Data fetching using useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["guestbook"],
    queryFn: getData,
  })

  // 3. Realtime subscription with Supabase
  useEffect(() => {
    const channel = supabase
      .channel("realtime-guestbook")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "guestbook",
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ["guestbook"] })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, queryClient])

  // 4. Form setup using React Hook Form
  const form = useForm<AddDataSchema>({
    resolver: zodResolver(addDataSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  })

  // 5. Mutation using useMutation for form submission
  const { mutate, isPending } = useMutation({
    mutationFn: addData,
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message)
        form.reset()
      } else {
        // Handle server-side validation errors
        const errors = result.errors
        if (errors) {
          if (errors.name) {
            form.setError("name", { message: errors.name[0] })
          }
          if (errors.message) {
            form.setError("message", { message: errors.message[0] })
          }
          if (errors.attendanceStatus) {
            form.setError("attendanceStatus", {
              message: errors.attendanceStatus[0],
            })
          }
        } else {
          toast.error(result.message)
        }
      }
    },
    onError: () => {
      toast.error("Terjadi kesalahan, silakan coba lagi.")
    },
  })

  function onSubmit(values: AddDataSchema) {
    mutate(values)
  }

  // 6. Calculate attendance statistics
  const stats = useMemo(() => {
    if (!data) return { hadir: 0, "tidak hadir": 0, "tidak yakin": 0 }
    return data.reduce(
      (acc, curr) => {
        acc[curr.attendanceStatus]++
        return acc
      },
      { hadir: 0, "tidak hadir": 0, "tidak yakin": 0 }
    )
  }, [data])

  return (
    <div className="max-w-prose flex flex-col gap-4">
      <h2 className="text-5xl font-serif">Doa & Ucapan,</h2>
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tulis nama Anda"
                      className="rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ucapan & Doa</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tulis ucapan dan doa"
                      className="resize-none rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attendanceStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Kehadiran</FormLabel>
                  <FormControl>
                    <div className="flex gap-2 justify-stretch">
                      <div
                        onClick={() => field.onChange("hadir")}
                        className={`flex-1 flex flex-col items-center gap-2 p-3 border cursor-pointer transition-colors rounded-none ${
                          field.value === "hadir"
                            ? "border-primary bg-primary/10 text-primary"
                            : "hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <SmileyIcon className="size-7" />
                        <span className="text-sm font-medium">Hadir</span>
                      </div>
                      <div
                        onClick={() => field.onChange("tidak hadir")}
                        className={`flex-1 flex flex-col items-center gap-2 p-3 border cursor-pointer transition-colors rounded-none ${
                          field.value === "tidak hadir"
                            ? "border-primary bg-primary/10 text-primary"
                            : "hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <SmileySadIcon className="size-7" />
                        <span className="text-sm font-medium">Tidak Hadir</span>
                      </div>
                      <div
                        onClick={() => field.onChange("tidak yakin")}
                        className={`flex-1 flex flex-col items-center gap-2 p-3 border cursor-pointer transition-colors rounded-none ${
                          field.value === "tidak yakin"
                            ? "border-primary bg-primary/10 text-primary"
                            : "hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <SmileyMehIcon className="size-7" />
                        <span className="text-sm font-medium">Tidak Yakin</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer rounded-none w-full mt-2"
            >
              {isPending ? "Mengirim..." : "Kirim Pesan"}{" "}
            </Button>
          </form>
        </Form>
        {/* <div className="flex items-center justify-around gap-4 pt-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <CheckCircleIcon className="text-muted-foreground" />
            <p className="font-bold">{stats.hadir}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <XCircleIcon className="text-muted-foreground" />
            <p>{stats["tidak hadir"]}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <QuestionIcon className="text-muted-foreground" />
            <p className="font-bold">{stats["tidak yakin"]}</p>
          </div>
        </div> */}
        <div></div>
        <div className="mt-8 space-y-6">
          {isLoading && <p>Loading messages...</p>}
          {data?.map((item) => (
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
      </div>
    </div>
  )
}
