"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/framer-animations"
import Link from "next/link"

interface Article {
  title: string
  link: string
  pubDate: string
}

export default function Thoughts() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        console.log('Fetching articles...')
        const response = await fetch('/api/medium-articles')
        console.log('Response received:', response.status, response.statusText)
        
        const data = await response.json()
        console.log(`Received ${data.length} articles`)
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch articles')
        }
        
        if (!Array.isArray(data)) {
          throw new Error('Received data is not an array')
        }
        
        setArticles(data)
      } catch (err) {
        console.error('Error fetching articles:', err)
        setError(`Failed to load articles. ${err.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          variants={fadeIn}
          className="font-serif text-4xl font-bold mb-8"
        >
          Thoughts
        </motion.h1>
        
        {isLoading && (
          <motion.p variants={fadeIn} className="text-lg">
            Loading articles...
          </motion.p>
        )}

        {error && (
          <motion.div variants={fadeIn} className="text-lg text-red-500">
            <p>{error}</p>
            <p className="mt-2">Please try refreshing the page or check back later.</p>
          </motion.div>
        )}

        <motion.div 
          variants={fadeIn}
          className="space-y-8"
        >
          {articles.map((article, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={article.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">{new Date(article.pubDate).toLocaleDateString()}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

