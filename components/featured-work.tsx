"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { fadeIn, staggerContainer } from "@/lib/framer-animations"
import { db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })
const motion = dynamic(() => import('framer-motion').then((mod) => mod.motion), { ssr: false })

interface Project {
  title: string
  description: string
  bgColor: string
  textColor: string
  slug: string
}

export function FeaturedWork() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const docRef = doc(db, 'content', 'website')
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          setProjects(data.work?.projects || [])
        } else {
          setError("No content found")
        }
      } catch (error) {
        console.error("Error fetching projects:", error)
        setError("Failed to load projects. Please try again later.")
      }
    }

    fetchProjects()
  }, [])

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Work</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <MotionDiv 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <MotionDiv 
          variants={fadeIn}
          className="font-heading text-3xl font-bold text-center mb-12"
        >
          Featured Work
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Link 
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`group relative aspect-square ${project.bgColor} overflow-hidden transition-all duration-500 hover:scale-[0.98]`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className={`text-3xl font-bold mb-4 ${project.textColor} text-center transition-transform duration-500 group-hover:scale-110`}>
                  {project.title}
                </h3>
                <p className={`${project.textColor} text-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0`}>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </MotionDiv>
    </section>
  )
}

