import { formatDate } from "src/lib/utils"

interface BlogPostCardProps {
  post: Post
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <time dateTime={post.time} className="text-sm text-muted-foreground">
          {formatDate(post.time)}
        </time>
      </div>

      <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>

      <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>

      <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
        Read
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </article>
  )
}
