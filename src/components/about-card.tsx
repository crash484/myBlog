import { Github, Twitter, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutCard() {
  return (
    <div className="rounded-xl border bg-card overflow-hidden shadow-md">
      <div className="md:flex">
        {/* Profile Image Section */}
        <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8">
               <div className="w-40 h-40 rounded-full bg-background border-4 border-background shadow-lg overflow-hidden relative z-10">
                <Image
                src="/me.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                />
            </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-2">Shashwat</h2>
          <p className="text-muted-foreground text-sm mb-6">Web Developer & Blogger</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-muted-foreground">
                Hello! I'm Shashwat, a passionate web developer and newcomer to the blogging world. I created this space
                to share my thoughts, experiences, and learnings as I navigate through the tech landscape.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">My Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "JavaScript", "React", "Next.js", "UI/UX", "Tech", "Reading"].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/crash484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="www.linkedin.com/in/shashwat-jain-0827a8251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:jshashwat032@gmail.com"
                  className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://new-portfolio-rouge-delta-41.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
                  aria-label="Website"
                >
                  <Globe className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Why I Started This Blog</h3>
        <p className="text-muted-foreground mb-4">
          I started this blog as a way to document my journey in tech and share what I learn along the way. Writing
          helps me organize my thoughts and deepen my understanding of concepts. Plus, if my experiences can help
          someone else, that's a bonus!
        </p>
        <p className="text-muted-foreground">
          I'm still figuring out this whole blogging thing, but I'm excited about the journey ahead. Feel free to reach
          out if you have any questions or just want to connect!
        </p>
      </div>
    </div>
  )
}
