import { z } from "zod"

export const addDataSchema = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  message: z.string().min(1, "Pesan harus diisi"),
  attendanceStatus: z.enum(["hadir", "tidak hadir", "tidak yakin"], {
    errorMap: () => ({ message: "Silakan pilih status kehadiran" }),
  }),
})

export type AddDataSchema = z.infer<typeof addDataSchema>
