'use client'

import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { getClientDb } from '@/lib/firebase'
import { Button } from "@/components/ui/button"

export default function UpdateFirestore() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateStatus, setUpdateStatus] = useState('')

  const contentToUpdate = {
    home: {
      title: "→ Ega is a Tech, Football and Music Enthusiast",
      subtitle: [
        'Optimizing product roadmaps for maximum impact',
        'Conducting user research to uncover insights',
        'Implementing agile methodologies in product development',
        'Analyzing data to drive product decisions',
        'Collaborating with cross-functional teams',
        'Writing lyrics that never become songs',
        'Perfecting coffee recipes to brew at home',
        'Keeping a smile through most Man United matches',
      ]
    },
    about: {
      intro: "Hey there! I'm Muhammad Ega, a Product Manager with a passion for creating innovative solutions that make a real difference. With a background in Electrical Engineering and Human-Computer Interaction, I bring a unique blend of technical know-how and user-centric design to every project I tackle.",
      journey: "My journey has taken me from Padjadjaran University in Indonesia to the University of Birmingham in the UK, and I've had the privilege of working with amazing teams at companies like Mekari, Shopee, and IBM. Every step of the way, I've been driven by a desire to create products that not only meet but exceed user expectations.",
      personal: "When I'm not knee-deep in product roadmaps or crunching data, you might find me strumming a guitar or exploring new coffee shops. I believe in the power of continuous learning and always strive to stay at the forefront of product management trends and technologies.",
      skills: [
        "Product Roadmapping",
        "Agile Product Management",
        "B2B Solutions",
        "Data Analysis",
        "Product Innovation",
        "User Research",
        "API Integration"
      ],
      spotifyArtistId: "1WV2kiXFrfDuiPttwvH8kC"
    },
    work: {
      intro: "Here are some of the key projects I've worked on. Each one represents a unique challenge and a significant achievement in my career as a Product Manager.",
      projects: [
        {
          title: "Mekari Sign",
          description: "Led e-signature solution development, achieving 134% revenue growth",
          bgColor: "bg-emerald-400",
          textColor: "text-white",
          slug: "mekari-sign",
          role: "Product Manager",
          period: "2023",
          impact: [
            "134.04% revenue target achievement",
            "4.5/5.0 client satisfaction score",
            "30% reduction in onboarding time",
            "20% market share growth"
          ],
          details: "As Product Manager for Mekari Sign, I worked with cross-functional teams to streamline user and team management processes, optimize API integration for enterprise clients, and drive significant revenue growth through strategic product development and market expansion initiatives."
        },
        {
          title: "Shopee Seller",
          description: "Improved seller acquisition by 20% through product innovation",
          bgColor: "bg-rose-400",
          textColor: "text-white",
          slug: "shopee-seller",
          role: "Associate Product Manager",
          period: "2022",
          impact: [
            "20% increase in seller acquisition",
            "15% increase in retention rate",
            "25% increase in product satisfaction",
            "50+ successful user interviews"
          ],
          details: "Led product initiatives for seller growth and marketing tools, conducting extensive user research and implementing features that significantly improved seller satisfaction and platform adoption."
        },
        {
          title: "IBM RPA",
          description: "Achieved 144x efficiency improvement through process automation",
          bgColor: "bg-pink-500",
          textColor: "text-white",
          slug: "ibm-rpa",
          role: "Software Specialist",
          period: "2020-2022",
          impact: [
            "144x task efficiency improvement",
            "60% team efficiency increase",
            "8 automated workflows",
            "25% customer acquisition increase"
          ],
          details: "Spearheaded the automation of high-volume tasks using IBM RPA and Python, leading a team of 4 to implement solutions that dramatically improved operational efficiency."
        }
      ]
    },
    projects: [
      {
        title: "Vizzy",
        description: "Automate report generation from raw CSV data",
        details: "Vizzy is a powerful tool designed to streamline the process of report generation. It takes raw CSV data as input and automatically generates comprehensive, visually appealing reports. This project significantly reduces the time and effort required in data analysis and presentation.",
        link: "https://dat-vizzy.vercel.app"
      },
      {
        title: "Cerebro",
        description: "Quiz maker from PDF documents",
        details: "Cerebro is an innovative application that transforms PDF documents into interactive quizzes. It uses natural language processing to analyze the content of PDF files and generate relevant questions. This tool is particularly useful for educators and students, facilitating efficient learning and knowledge assessment.",
        link: "https://v0-cerebro-bmo3dtdvtul.vercel.app"
      }
    ],
    companies: [
      {
        name: "Mekari",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WyPPgYGENTFqUsMfMOW4NwJ7IZNcmP.png"
      },
      {
        name: "Shopee",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xr2m16Ja2jx8umMfkIn7GAyRPBBzjI.png"
      },
      {
        name: "IBM",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ScCneVZ5wdNsb9RgSRmPbVLCM23iNw.png"
      },
      {
        name: "JLR",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7i9xeB3pRM2kPUb9WyMShxY5o8wE0b.png"
      }
    ]
  }

  const updateFirestore = async () => {
    setIsUpdating(true)
    setUpdateStatus('Updating Firestore...')

    try {
      const db = getClientDb();
      const docRef = doc(db, 'content', 'website')
      await setDoc(docRef, contentToUpdate, { merge: true })
      setUpdateStatus('Firestore updated successfully!')
    } catch (error) {
      console.error('Error updating Firestore:', error)
      setUpdateStatus('Error updating Firestore. Check console for details.')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Update Firestore Content</h1>
      <Button onClick={updateFirestore} disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Update Firestore'}
      </Button>
      {updateStatus && <p className="mt-4">{updateStatus}</p>}
    </div>
  )
}

