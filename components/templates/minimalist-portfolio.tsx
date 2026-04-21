import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

const projects = [
  {
    title: "Eco-Friendly App",
    description: "A mobile app promoting sustainable living habits",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
  },
  {
    title: "Financial Dashboard",
    description: "An intuitive dashboard for personal finance management",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "AI-Powered Chatbot",
    description: "A smart chatbot for customer service automation",
    image:
      "https://images.unsplash.com/photo-1531746790731-6bf607ccff6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function MinimalistPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-gray-100 py-6 sticky top-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Alex Chen
          </motion.h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <Link href="#about" className="hover:text-gray-600 transition-colors">
                  About
                </Link>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link href="#projects" className="hover:text-gray-600 transition-colors">
                  Projects
                </Link>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="#contact" className="hover:text-gray-600 transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween" }}
        >
          <div className="flex justify-end p-6">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-2xl">
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </motion.div>
      )}

      <main className="container mx-auto px-6 py-12">
        <motion.section id="about" className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I'm a minimalist designer and developer with a passion for creating clean, functional, and beautiful
            websites. My approach combines simplicity with powerful functionality to deliver exceptional user
            experiences.
          </p>
          <Button>Get in Touch</Button>
        </motion.section>

        <motion.section id="projects" className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <Button className="mb-4">Get in Touch via WhatsApp</Button>
          <div className="flex space-x-4">
            <motion.div
              className="cursor-not-allowed text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.div>
            <motion.div
              className="cursor-not-allowed text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.div>
            <motion.div
              className="cursor-not-allowed text-gray-600 hover:text-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-100 py-6 text-center">
        <p>&copy; 2023 Alex Chen. All rights reserved.</p>
      </footer>
    </div>
  )
}

