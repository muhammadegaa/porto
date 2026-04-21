'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function CMS() {
  const [homeContent, setHomeContent] = useState({
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
  })

  const [aboutContent, setAboutContent] = useState({
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
    ]
  })

  const [workContent, setWorkContent] = useState({
    intro: "Here are some of the key projects I've worked on. Each one represents a unique challenge and a significant achievement in my career as a Product Manager.",
    projects: [
      {
        title: "Mekari Sign",
        description: "Led e-signature solution development, achieving 134% revenue growth",
      },
      {
        title: "Shopee Seller",
        description: "Improved seller acquisition by 20% through product innovation",
      },
      {
        title: "IBM RPA",
        description: "Achieved 144x efficiency improvement through process automation",
      }
    ]
  })

  const [projectsContent, setProjectsContent] = useState([
    {
      title: "Vizzy",
      description: "Automate report generation from raw CSV data",
      details: "Vizzy is a powerful tool designed to streamline the process of report generation. It takes raw CSV data as input and automatically generates comprehensive, visually appealing reports. This project significantly reduces the time and effort required in data analysis and presentation.",
    },
    {
      title: "Cerebro",
      description: "Quiz maker from PDF documents",
      details: "Cerebro is an innovative application that transforms PDF documents into interactive quizzes. It uses natural language processing to analyze the content of PDF files and generate relevant questions. This tool is particularly useful for educators and students, facilitating efficient learning and knowledge assessment.",
    }
  ])

  const handleSave = (section: string) => {
    console.log(`Saving ${section} content:`, eval(`${section}Content`))
    // Here you would typically send this data to your backend or update your database
    alert(`${section} content saved! (Check console for details)`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content Management System</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Title</label>
              <Input
                value={homeContent.title}
                onChange={(e) => setHomeContent({...homeContent, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-2">Subtitles (one per line)</label>
              <Textarea
                value={homeContent.subtitle.join('\n')}
                onChange={(e) => setHomeContent({...homeContent, subtitle: e.target.value.split('\n')})}
                rows={8}
              />
            </div>
            <Button onClick={() => handleSave('home')}>Save Home Content</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Page</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Intro</label>
              <Textarea
                value={aboutContent.intro}
                onChange={(e) => setAboutContent({...aboutContent, intro: e.target.value})}
                rows={4}
              />
            </div>
            <div>
              <label className="block mb-2">Journey</label>
              <Textarea
                value={aboutContent.journey}
                onChange={(e) => setAboutContent({...aboutContent, journey: e.target.value})}
                rows={4}
              />
            </div>
            <div>
              <label className="block mb-2">Personal</label>
              <Textarea
                value={aboutContent.personal}
                onChange={(e) => setAboutContent({...aboutContent, personal: e.target.value})}
                rows={4}
              />
            </div>
            <div>
              <label className="block mb-2">Skills (one per line)</label>
              <Textarea
                value={aboutContent.skills.join('\n')}
                onChange={(e) => setAboutContent({...aboutContent, skills: e.target.value.split('\n')})}
                rows={7}
              />
            </div>
            <Button onClick={() => handleSave('about')}>Save About Content</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Work Page</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Intro</label>
              <Textarea
                value={workContent.intro}
                onChange={(e) => setWorkContent({...workContent, intro: e.target.value})}
                rows={4}
              />
            </div>
            {workContent.projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <Input
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...workContent.projects]
                    newProjects[index].title = e.target.value
                    setWorkContent({...workContent, projects: newProjects})
                  }}
                  placeholder="Project Title"
                />
                <Textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...workContent.projects]
                    newProjects[index].description = e.target.value
                    setWorkContent({...workContent, projects: newProjects})
                  }}
                  placeholder="Project Description"
                  rows={2}
                />
              </div>
            ))}
            <Button onClick={() => handleSave('work')}>Save Work Content</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Projects Page</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projectsContent.map((project, index) => (
              <div key={index} className="space-y-2">
                <Input
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...projectsContent]
                    newProjects[index].title = e.target.value
                    setProjectsContent(newProjects)
                  }}
                  placeholder="Project Title"
                />
                <Input
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...projectsContent]
                    newProjects[index].description = e.target.value
                    setProjectsContent(newProjects)
                  }}
                  placeholder="Project Description"
                />
                <Textarea
                  value={project.details}
                  onChange={(e) => {
                    const newProjects = [...projectsContent]
                    newProjects[index].details = e.target.value
                    setProjectsContent(newProjects)
                  }}
                  placeholder="Project Details"
                  rows={4}
                />
              </div>
            ))}
            <Button onClick={() => handleSave('projects')}>Save Projects Content</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

