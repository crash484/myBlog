"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const api = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// eslint-disable-next-line
const supabase = createClient(url,api);

export default function AdminPage() {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })

  // Generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setSlug(
      e.target.value
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-"),
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ text: "", type: "" })

    // Validate form
    if (!title || !slug || !excerpt || !content) {
      setMessage({ text: "Please fill in all fields", type: "error" })
      setIsSubmitting(false)
      return
    }

    // Simulate adding a new blog post
    try{
      // Format content into paragraphs
      const contentArray = content.split("\n\n").filter((paragraph) => paragraph.trim() !== "")

      const newPost = {
        title,
        slug,
        time: new Date().toISOString(),
        excerpt,
        content: contentArray,
      }

    const { data, error } = await supabase.from("Blog").insert([newPost]);

    if (error) throw error;

    console.log("New blog post created:", data);

    setMessage({ text: "Blog post created successfully!", type: "success" });
    
    // Reset form
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    
    } catch (error) {
    setMessage({ text: (error as Error).message || "Failed to create post", type: "error" });
  } finally {
    setIsSubmitting(false);
  }
  }

  return (
    <>
      <Header />
      <div className="container max-w-3xl py-10 mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

        {message.text && (
          <div
            className={cn(
              "p-4 mb-6 rounded-md",
              message.type === "error"
                ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
            )}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-2 border rounded-md bg-background"
              placeholder="Enter blog post title"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium mb-1">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-2 border rounded-md bg-background"
              placeholder="url-friendly-slug"
            />
            <p className="text-sm text-muted-foreground mt-1">
              This will be used in the URL: shashwat.com/{slug || "example-slug"}
            </p>
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium mb-1">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full p-2 border rounded-md bg-background"
              rows={3}
              placeholder="A brief summary of your blog post"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md bg-background font-mono"
              rows={15}
              placeholder="Write your blog post content here..."
            />
            <div className="flex justify-between mt-1">
              <p className="text-sm text-muted-foreground">
                Separate paragraphs with blank lines. Each paragraph will be displayed separately.
              </p>
              <p className="text-sm text-muted-foreground">
                {content.trim() ? content.trim().split(/\s+/).length : 0} words
              </p>
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Blog Post"}
          </Button>
        </form>
      </div>
      <Footer />
    </>
  )
}
