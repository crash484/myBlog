interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold !mb-4">{post.title}</h1>

      <div className="flex items-center gap-4 !mt-0 !mb-10 text-sm text-muted-foreground">
        <time dateTime={post.time}>{(post.time)}</time>
      </div>

      <div className="leading-relaxed">
        {post.content}
      </div>
    </article>
  )
}
