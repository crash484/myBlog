import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BlogPost } from "../../components/blog-post"; // Adjust path as necessary
import  Link  from "next/link";
import { ArrowLeft } from "lucide-react"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(url, api);

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = decodeURIComponent(params.slug);

  // Fetching the post based on the slug from the URL
  const { data: post, error } = await supabase
    .from("Blog")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    notFound();
  }


  return (
    <>
      <Header />
      <div className="container max-w-3xl py-10 mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>

        <BlogPost post={post} />
      </div>
      <Footer />
    </>
  )
}
