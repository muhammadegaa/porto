import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Menu, X } from "lucide-react"

const services = [
  {
    title: "Business Strategy Consulting",
    description: "Develop winning strategies to propel your business forward",
    icon: "📊",
  },
  {
    title: "Leadership Coaching",
    description: "Unlock your full potential as a leader and inspire your team",
    icon: "🚀",
  },
  {
    title: "Keynote Speaking",
    description: "Engaging talks on business, leadership, and personal growth",
    icon: "🎤",
  },
]

const testimonials = [
  {
    name: "John Doe",
    text: "Sarah's insights transformed our business strategy, leading to a 30% increase in revenue.",
    company: "CEO, TechCorp",
  },
  {
    name: "Jane Smith",
    text: "The leadership coaching I received from Sarah was invaluable. My team's productivity has skyrocketed.",
    company: "COO, InnovateNow",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function PersonalBrandSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 text-gray-800 font-sans">
      <header className="bg-white shadow-sm py-6 sticky top-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sarah Johnson
          </motion.h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="hover:text-indigo-600 transition-colors cursor-not-allowed">About</div>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="hover:text-indigo-600 transition-colors cursor-not-allowed">Services</div>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <div className="hover:text-indigo-600 transition-colors cursor-not-allowed">Testimonials</div>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div className="hover:text-indigo-600 transition-colors cursor-not-allowed">Contact</div>
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
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-600 transition-colors cursor-not-allowed"
              >
                About
              </div>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-600 transition-colors cursor-not-allowed"
              >
                Services
              </div>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-600 transition-colors cursor-not-allowed"
              >
                Testimonials
              </div>
              <div
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-indigo-600 transition-colors cursor-not-allowed"
              >
                Contact
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-6 py-12">
        <motion.section id="hero" className="text-center mb-16" {...fadeIn}>
          <h2 className="text-4xl font-bold mb-4">Empowering Entrepreneurs to Thrive</h2>
          <p className="text-xl mb-8">Business Strategist | Executive Coach | Keynote Speaker</p>
          <Button size="lg">Book a Consultation</Button>
        </motion.section>

        <motion.section id="about" className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-4">About Sarah</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              alt="Sarah Johnson"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
            <div>
              <p className="text-lg mb-4">
                With over 15 years of experience in business strategy and leadership development, I help entrepreneurs
                and business leaders unlock their full potential and achieve remarkable growth. My approach combines
                cutting-edge business strategies with personalized coaching to drive sustainable success.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </motion.section>

        <motion.section id="services" className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="testimonials" className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <textarea className="w-full p-2 border rounded" rows={4} placeholder="Your Message"></textarea>
              <Button type="button" className="w-full">
                Send Message via WhatsApp
              </Button>
            </form>
          </div>
        </motion.section>

        <motion.section id="cta" className="text-center mb-16" {...fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <Button size="lg">Schedule a Free Consultation</Button>
        </motion.section>
      </main>

      <footer className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Sarah Johnson. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <motion.div
                className="hover:text-indigo-200 transition-colors cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.div>
              <motion.div
                className="hover:text-indigo-200 transition-colors cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={24} />
              </motion.div>
              <motion.div
                className="hover:text-indigo-200 transition-colors cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.div>
              <motion.div
                className="hover:text-indigo-200 transition-colors cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={24} />
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

