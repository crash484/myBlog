import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">
              Shashwat's<span className="text-primary">Blog</span>
            </h3>
            <p className="text-sm text-muted-foreground">Just getting started with blogging.</p>
          </div>

          <div className="flex gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shashwat's Blog. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
