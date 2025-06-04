import {formatDate} from "../lib/utils"

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold !mb-4">{post.title}</h1>

      <div className="flex items-center gap-4 !mt-0 !mb-10 text-sm text-muted-foreground">
        <time dateTime={post.time}>{(formatDate(post.time))}</time>
      </div>

      <div className="leading-relaxed">
        {post.content.flatMap((paragraph, idx) =>
          paragraph.split('\n').map((line, i) => (
            <p key={`${idx}-${i}`}>{line}</p>
          ))
        )}
      </div>
    </article>
  )
}
