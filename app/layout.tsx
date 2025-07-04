import type { Metadata } from "next"
import { Roboto, Roboto_Serif, Roboto_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import Providers from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"
import CursorFollower from "@/components/cursor-follower"
import { AnimationProvider } from "@/components/animation-provider"

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
        className={`${roboto.variable} ${robotoSerif.variable} ${robotoMono.variable} antialiased min-h-dvh selection:bg-primary selection:text-primary-foreground relative isolate scroll-container`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AnimationProvider>
              <div className="fixed top-0 left-0 w-full z-50 h-2">
                <div className="progress-bar bg-primary h-full w-0" />
              </div>
              <CursorFollower />
              {children}
              <Analytics />
            </AnimationProvider>
            <Toaster richColors />
          </ThemeProvider>
        </Providers>
      </body>
      <Script src="https://open.spotify.com/embed/iframe-api/v1" async />
    </html>
  )
}
