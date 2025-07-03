"use server"

import db from "../../lib/db"
import { guestbook } from "../../lib/schema"
import { desc } from "drizzle-orm"

export async function getData() {
  const data = await db.query.guestbook.findMany({
    orderBy: [desc(guestbook.createdAt)],
  })
  return data
}
