'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const photoTiles = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80165C1B-624D-4773-89B6-E42CB1DDCEF9_4_5005_c-rha6x3kTNJJVTinm4Xlyrjmd8zwBVW.jpeg",
    alt: "Muhammad Ega in front of a Gothic cathedral",
    caption: "Exploring architectural wonders"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B34A1787-B22A-4D74-8443-1EAA953C0BA5_1_105_c-P3gRDkvWxSqi3o4TqfIBtLqQQeMoLc.jpeg",
    alt: "Muhammad Ega running marathon in London",
    caption: "ASICS London 2023"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84688166-EB45-491B-9CA8-7FA844E3192B_4_5005_c-m2LWfRp8v0wXUWnqUCw0NlRErC7mwc.jpeg",
    alt: "Muhammad Ega at Manchester United press room",
    caption: "Visiting Old Trafford"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09163892-F779-44A9-964E-15D50FDD7A8C_4_5005_c-E8rqlTyoN1rO9kTTJsuLSPsM2lZad0.jpeg",
    alt: "Muhammad Ega playing football",
    caption: "Weekend football matches"
  }
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/muhammadegaa", icon: <Linkedin className="h-5 w-5" /> },
  { name: "Twitter", href: "https://twitter.com/muhammadegaa", icon: <Twitter className="h-5 w-5" /> },
  { name: "GitHub", href: "https://github.com/muhammadegaa", icon: <Github className="h-5 w-5" /> },
  { name: "Email", href: "mailto:simatupang.ega@gmail.com?subject=Hello%20Ega%2C%20I%20came%20across%20your%20portfolio&body=Hi%20Ega%2C%0A%0AI%20found%20your%20portfolio%20and%20I'm%20impressed%20with%20your%20work.%20I'd%20love%20to%20connect%20about%20...", icon: <Mail className="h-5 w-5" /> },
]

export function AboutClient({ initialContent }: { initialContent: any }) {
  const aboutContent = initialContent.about;

  return (
    <div className="flex flex-col">
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {photoTiles.map((photo, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300">
                <div className="flex items-end h-full p-2 sm:p-4">
                  <p className="text-white text-xs sm:text-sm">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 sm:py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          >
            Who am I?
          </motion.h1>
          
          <motion.div 
            variants={fadeIn}
            className="space-y-4 max-w-none mb-6 sm:mb-8 md:mb-12"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-2xl sm:text-3xl font-medium block mb-3 sm:mb-4">Hey there!</span>
              {aboutContent.intro}
            </p>
            <p className="text-base sm:text-lg leading-relaxed">{aboutContent.journey}</p>
            <p className="text-base sm:text-lg leading-relaxed">{aboutContent.personal}</p>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Noteworthy Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {aboutContent.skills.map((skill: string, index: number) => (
                <div key={index} className="bg-muted p-2 sm:p-3 rounded-lg text-center text-sm sm:text-base">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">My Music</h2>
            <div className="w-full max-w-xl mx-auto px-2 sm:px-4">
              <iframe
                src={`https://open.spotify.com/embed/artist/${aboutContent.spotifyArtistId}`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px' }}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Let's Connect!</h2>
            <p className="mb-4 text-sm sm:text-base">I'm always excited to connect with fellow product enthusiasts, potential collaborators, or anyone who just wants to chat about the latest in tech. Feel free to reach out through any of these platforms:</p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

