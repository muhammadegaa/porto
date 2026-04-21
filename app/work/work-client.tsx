"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function WorkClient({ initialContent }: { initialContent: any }) {
  const workContent = initialContent.work

  useEffect(() => {
    sessionStorage.setItem("previousPage", "/work")
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 md:mb-8 gap-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Work</h1>
          <Button
            asChild
            size="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1p6yE_CG6PdOJb7Ac8NYBm97VpjP8wlmM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
          {workContent.intro}
        </motion.p>

        <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {workContent.projects.map((project: any) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`group relative aspect-square ${project.bgColor} overflow-hidden transition-all duration-500 hover:scale-[0.98]`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 ${project.textColor} text-center transition-transform duration-500 group-hover:scale-110`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm md:text-base ${project.textColor} text-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0`}
                >
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

