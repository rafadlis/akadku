"use server"

import db from "../../lib/db"
import { guestbook } from "../../lib/schema"
import { desc } from "drizzle-orm"

export async function getData({ pageParam = 0 }: { pageParam?: number }) {
  const data = await db.query.guestbook.findMany({
    orderBy: [desc(guestbook.createdAt)],
    limit: 10,
    offset: pageParam * 10,
  })
  return data
}
