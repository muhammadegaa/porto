import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Search, ChevronRight } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "The Art of Mindful Living: Finding Peace in a Busy World",
    excerpt: "Discover practical techniques to incorporate mindfulness into your daily routine and reduce stress.",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 15, 2023",
  },
  {
    id: 2,
    title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
    excerpt: "Learn about sustainable fashion practices and how to make environmentally conscious clothing choices.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 10, 2023",
  },
  {
    id: 3,
    title: "The Future of Work: Embracing Remote Collaboration",
    excerpt: "Explore the evolving landscape of remote work and strategies for effective virtual collaboration.",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "June 5, 2023",
  },
  {
    id: 4,
    title: "Culinary Adventures: Exploring Global Cuisines from Your Kitchen",
    excerpt: "Embark on a culinary journey around the world with these authentic and easy-to-make recipes.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1547592180-85f173990888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    date: "May 30, 2023",
  },
]

const categories = ["Lifestyle", "Fashion", "Career", "Food", "Travel", "Technology"]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function CreativeBlog() {
  return (
    <div className="min-h-screen bg-[#faf3e0] text-gray-800 font-serif">
      <header className="bg-[#1e847f] text-white py-4">
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold">
              Wanderlust Chronicles
            </Link>
            <div className="space-x-6">
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                Categories
              </Link>
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <motion.section className="text-center mb-16" initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold mb-4 text-[#1e847f]">
            Welcome to Wanderlust Chronicles
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl mb-8">
            Inspiring stories, practical tips, and creative insights for the modern explorer
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-2 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </motion.div>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.section className="lg:w-2/3" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-[#1e847f]">
              Featured Posts
            </motion.h2>
            <motion.div variants={staggerChildren} className="space-y-8">
              {posts.map((post) => (
                <motion.article key={post.id} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <p className="text-sm text-[#1e847f] font-sans mb-2">
                          {post.category} • {post.date}
                        </p>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Button className="bg-[#1e847f] hover:bg-[#176561]">
                          Read More <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          <motion.aside className="lg:w-1/3" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#1e847f]">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-[#1e847f] transition-colors">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#1e847f]">Subscribe to Our Newsletter</h3>
              <p className="mb-4 text-gray-600">Stay updated with our latest stories and travel tips!</p>
              <div className="space-y-2">
                <Input type="email" placeholder="Enter your email" />
                <Button className="w-full bg-[#1e847f] hover:bg-[#176561]">Subscribe</Button>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </main>

      <footer className="bg-[#1e847f] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Wanderlust Chronicles. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-[#faf3e0] transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

