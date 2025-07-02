import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const attendanceStatusEnum = pgEnum("attendance_status", [
  "hadir",
  "tidak hadir",
  "tidak yakin",
])

export const guestbook = pgTable("guestbook", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  message: text("message").notNull(),
  attendanceStatus: attendanceStatusEnum("attendance_status").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
