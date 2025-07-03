"use server"

import { z } from "zod"
import db from "../../lib/db"
import { guestbook } from "../../lib/schema"
import { addDataSchema } from "../_schema/add-data-schmea"

export async function addData(input: z.infer<typeof addDataSchema>) {
  try {
    const { name, message, attendanceStatus } = addDataSchema.parse(input)

    await db.insert(guestbook).values({
      name,
      message,
      attendanceStatus,
    })

    return {
      success: true,
      message: "Data berhasil ditambahkan!",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validasi gagal",
        errors: error.flatten().fieldErrors,
      }
    }

    return {
      success: false,
      message: "Terjadi kesalahan, silakan coba lagi.",
    }
  }
}
