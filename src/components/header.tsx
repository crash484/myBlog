import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container max-w-5xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Shashwat's<span className="text-primary">Blog</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
