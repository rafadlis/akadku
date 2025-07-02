import { createBrowserClient } from "@supabase/ssr"

export function createSupabaseClient() {
  return createBrowserClient(
    process.env.ENV === "dev"
      ? process.env.NEXT_PUBLIC_SUPABASE_DEV_URL!
      : process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.ENV === "dev"
      ? process.env.NEXT_PUBLIC_SUPABASE_DEV_ANON_KEY!
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
