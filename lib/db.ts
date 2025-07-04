import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
const connectionString =
  process.env.ENV === "dev"
    ? process.env.DATABASE_DEV_URL!
    : process.env.DATABASE_URL!

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client, { schema })

export default db
