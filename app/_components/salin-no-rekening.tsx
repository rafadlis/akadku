"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function SalinNoRekening() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer rounded-none"
      onClick={() => {
        navigator.clipboard.writeText("5098 7937 8625").then(() => {
          toast.success("Berhasil menyalin nomor rekening")
        })
      }}
    >
      Salin Norek
    </Button>
  )
}
