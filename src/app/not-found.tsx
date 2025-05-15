import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
      <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="text-primary hover:underline">
        Return to the homepage
      </Link>
    </div>
  )
}