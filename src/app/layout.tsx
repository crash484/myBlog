import type { ReactNode } from "react";
import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Shashwat's Blog",
  description: "A clean and simple blog focused on content",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>      </body>
    </html>
  )
}
