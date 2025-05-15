interface Post {
    id: number
    title: string
    content: string
    slug: string
    excerpt: string
    time: string // ISO timestamp from Supabase
  }