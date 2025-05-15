import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { AboutCard } from "../../components/about-card"

export const metadata = {
  title: "About - Shashwat's Blog",
  description: "Learn more about Shashwat and this blog",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container max-w-4xl py-10 mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">About Me</h1>
        <AboutCard />
      </div>
      <Footer />
    </>
  )
}
