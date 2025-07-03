"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function SalinNoRekening({ noRekening }: { noRekening: string }) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer rounded-none"
      onClick={() => {
        navigator.clipboard.writeText(noRekening).then(() => {
          toast.success("Berhasil menyalin nomor rekening")
        })
      }}
    >
      Salin Norek
    </Button>
  )
}
