"use client"
import Link from "next/link"
import { BlogPostCard } from "../components/blog-post-card"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import {createClient} from "@supabase/supabase-js"
import { useEffect, useState } from "react";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// eslint-disable-next-line
const supabase = createClient(url,api);

export default function Home() {
  const[blogPosts, setblogposts] = useState<any[]>([]);

  async function getBlogs() {
    const { data: Blog, error}= await supabase.from('Blog').select("*");
      
    if (error) {
      console.error('Error fetching todos:', error.message);
    } else {
      setblogposts(Blog);
    }

    }
    useEffect(()=>{
      getBlogs()
    },[])
  return (
    <>
      <Header />
      <div className="container max-w-5xl py-10 mx-auto px-4 sm:px-6">
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Shashwat's Blog</h1>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            Just getting started with blogging—no idea what I'm doing, but hey, here goes nothing!
          </p>
        </section>

        <section>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`} className="block group">
                <BlogPostCard post={post} />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
