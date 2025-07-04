import type { Metadata } from "next"
import { Roboto, Roboto_Serif, Roboto_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import Providers from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto-mono",
})

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto-serif",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Elin & Fadli",
  description: "Wedding Invitation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoSerif.variable} ${robotoMono.variable} antialiased min-h-dvh selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
            <Analytics />
            <Toaster richColors />
          </Providers>
        </ThemeProvider>
      </body>
      <Script src="https://open.spotify.com/embed/iframe-api/v1" async />
    </html>
  )
}
