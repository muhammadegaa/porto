'use client'

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

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

export function ProjectsClient({ initialContent }: { initialContent: any }) {
  const projects = initialContent.projects;

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          variants={fadeIn}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8"
        >
          Personal Projects
        </motion.h1>
        
        <motion.div 
          variants={fadeIn}
          className="space-y-6 sm:space-y-8"
        >
          {projects.map((project: any, index: number) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{project.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild size="default" className="mt-2 sm:mt-4 w-full sm:w-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

