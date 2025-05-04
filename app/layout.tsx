import type React from "react"
import type { Metadata } from "next"
import { Bangers, Comic_Neue } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DevelopmentNotice from "@/components/development-notice"
import DevelopmentModal from "@/components/development-modal"

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
})

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comic",
})

export const metadata: Metadata = {
  title: "Mimi's Tropical Paradise",
  description: "A vibrant website celebrating the unique personality of Mimi the parrot",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bangers.variable} ${comicNeue.variable} font-comic`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DevelopmentNotice />
          <DevelopmentModal />
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-green-50 to-blue-50">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
