import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, Menu, X } from "lucide-react"

const photos = [
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1874&q=80",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    category: "Portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1616578492900-ea5a8fc6c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
    category: "Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    category: "Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    category: "Food",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Fashion",
  },
]

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export function PhotographyShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const categories = ["All", ...new Set(photos.map((photo) => photo.category))]

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="py-6 px-6 md:px-12 fixed w-full z-10 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jane Smith Photography
          </motion.h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="hover:text-gray-300 transition-colors cursor-not-allowed">Gallery</div>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="hover:text-gray-300 transition-colors cursor-not-allowed">About</div>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <div className="hover:text-gray-300 transition-colors cursor-not-allowed">Contact</div>
              </motion.li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 md:hidden"
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
              <Link href="#gallery" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-6 py-24">
        <motion.section id="gallery" className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button variant={selectedCategory === category ? "default" : "outline"}>{category}</Button>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="bg-gray-800 cursor-not-allowed">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-400">{photo.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="about" className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I'm a passionate photographer specializing in capturing the beauty of nature, people, and urban landscapes.
            With over 10 years of experience, I strive to tell stories through my lens and create lasting memories for
            my clients.
          </p>
        </motion.section>

        <motion.section id="contact" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <Button className="mb-4">Contact via WhatsApp</Button>
          <div className="flex space-x-4">
            <motion.div
              className="text-white hover:text-gray-300 transition-colors cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.div>
            <motion.div
              className="text-white hover:text-gray-300 transition-colors cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={24} />
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 py-6 text-center">
        <p>&copy; 2023 Jane Smith Photography. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              src={selectedPhoto.src}
              alt={selectedPhoto.category}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

