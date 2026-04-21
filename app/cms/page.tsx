"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { getClientDb } from "@/lib/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export default function CMSPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState<any>({})
  const [initialContent, setInitialContent] = useState<any>({})
  const [companies, setCompanies] = useState([])
  const [announcement, setAnnouncement] = useState({
    text: "",
    buttonText: "",
    buttonLink: "",
    isVisible: true,
  })

  useEffect(() => {
    async function fetchContent() {
      try {
        setIsLoading(true)
        setError(null)
        const db = getClientDb()
        const docRef = doc(db, "content", "website")
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          setInitialContent(data)
          setContent(data)
          setCompanies(
            data.companies.map((company) => ({
              ...company,
              isVisible: company.isVisible ?? true,
            })),
          )
          setAnnouncement(
            data.announcement || {
              text: "🚀 Need a personal website? I can help you build one!",
              buttonText: "Learn More",
              buttonLink: "/services",
              isVisible: true,
            },
          )
        } else {
          throw new Error("No content found")
        }
      } catch (error) {
        console.error("Error fetching content:", error)
        setError(error instanceof Error ? error.message : "An unknown error occurred")
      } finally {
        setIsLoading(false)
      }
    }
    fetchContent()
  }, [])

  const handleSave = async (section: string) => {
    try {
      const db = getClientDb()
      const docRef = doc(db, "content", "website")
      if (section === "companies") {
        await setDoc(
          docRef,
          {
            [section]: companies.map(({ name, logo, isVisible }) => ({ name, logo, isVisible: isVisible ?? true })),
          },
          { merge: true },
        )
      } else if (section === "announcement") {
        await setDoc(docRef, { announcement }, { merge: true })
      } else {
        await setDoc(docRef, { [section]: content[section] }, { merge: true })
      }

      await fetch(`/api/revalidate?path=/`)
      alert(`${section} content saved successfully!`)
    } catch (error) {
      console.error("Error saving content:", error)
      alert(error instanceof Error ? error.message : "An unknown error occurred while saving content")
    }
  }

  const addSubtitle = () => {
    setContent({
      ...content,
      home: {
        ...content.home,
        subtitle: [...content.home.subtitle, ""],
      },
    })
  }

  const removeSubtitle = (index: number) => {
    setContent({
      ...content,
      home: {
        ...content.home,
        subtitle: content.home.subtitle.filter((_: any, i: number) => i !== index),
      },
    })
  }

  const addSkill = () => {
    setContent({
      ...content,
      about: {
        ...content.about,
        skills: [...content.about.skills, ""],
      },
    })
  }

  const removeSkill = (index: number) => {
    setContent({
      ...content,
      about: {
        ...content.about,
        skills: content.about.skills.filter((_: any, i: number) => i !== index),
      },
    })
  }

  const addProject = () => {
    setContent({
      ...content,
      work: {
        ...content.work,
        projects: [...content.work.projects, { title: "", description: "" }],
      },
    })
  }

  const removeProject = (index: number) => {
    setContent({
      ...content,
      work: {
        ...content.work,
        projects: content.work.projects.filter((_: any, i: number) => i !== index),
      },
    })
  }

  const addPersonalProject = () => {
    setContent({
      ...content,
      projects: [...content.projects, { title: "", description: "", details: "", link: "" }],
    })
  }

  const removePersonalProject = (index: number) => {
    setContent({
      ...content,
      projects: content.projects.filter((_: any, i: number) => i !== index),
    })
  }

  const addCompany = () => {
    setCompanies([...companies, { name: "", logo: "", isVisible: true }])
  }

  const removeCompany = (index: number) => {
    setCompanies(companies.filter((_: any, i: number) => i !== index))
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Content Management System</h1>
        <div className="flex items-center justify-center h-64">
          <p className="text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Content Management System</h1>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <p className="text-lg text-red-500">Error: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Content Management System</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Announcement Bar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Text</label>
              <Input
                value={announcement.text}
                onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })}
                placeholder="Announcement text"
              />
            </div>
            <div>
              <label className="block mb-2">Button Text</label>
              <Input
                value={announcement.buttonText}
                onChange={(e) => setAnnouncement({ ...announcement, buttonText: e.target.value })}
                placeholder="Button text"
              />
            </div>
            <div>
              <label className="block mb-2">Button Link</label>
              <Input
                value={announcement.buttonLink}
                onChange={(e) => setAnnouncement({ ...announcement, buttonLink: e.target.value })}
                placeholder="Button link (e.g., /services)"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="announcement-visible">Show Announcement:</label>
              <input
                type="checkbox"
                id="announcement-visible"
                checked={announcement.isVisible}
                onChange={(e) => setAnnouncement({ ...announcement, isVisible: e.target.checked })}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <Button onClick={() => handleSave("announcement")}>Save Announcement</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Title</label>
              <Input
                value={content.home.title}
                onChange={(e) => setContent({ ...content, home: { ...content.home, title: e.target.value } })}
              />
            </div>
            <div>
              <label className="block mb-2">Subtitles</label>
              {content.home.subtitle.map((subtitle: string, index: number) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    value={subtitle}
                    onChange={(e) => {
                      const newSubtitles = [...content.home.subtitle]
                      newSubtitles[index] = e.target.value
                      setContent({ ...content, home: { ...content.home, subtitle: newSubtitles } })
                    }}
                    className="flex-grow"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeSubtitle(index)} className="ml-2">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addSubtitle} className="mt-2">
                <Plus className="h-4 w-4 mr-2" /> Add Subtitle
              </Button>
            </div>
            <Button onClick={() => handleSave("home")}>Save Home Content</Button>
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
                value={content.about?.intro}
                onChange={(e) => setContent({ ...content, about: { ...content.about, intro: e.target.value } })}
                rows={4}
              />
            </div>
            <div>
              <label className="block mb-2">Journey</label>
              <Textarea
                value={content.about?.journey}
                onChange={(e) => setContent({ ...content, about: { ...content.about, journey: e.target.value } })}
                rows={4}
              />
            </div>
            <div>
              <label className="block mb-2">Personal</label>
              <Textarea
                value={content.about?.personal}
                onChange={(e) => setContent({ ...content, about: { ...content.about, personal: e.target.value } })}
                rows={4}
              />
            </div>
            <div>
              <label className="block mb-2">Spotify Artist ID</label>
              <Input
                value={content.about?.spotifyArtistId}
                onChange={(e) =>
                  setContent({ ...content, about: { ...content.about, spotifyArtistId: e.target.value } })
                }
                placeholder="Spotify Artist ID"
              />
            </div>
            <div>
              <label className="block mb-2">Skills</label>
              {content.about?.skills.map((skill: string, index: number) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    value={skill}
                    onChange={(e) => {
                      const newSkills = [...content.about.skills]
                      newSkills[index] = e.target.value
                      setContent({ ...content, about: { ...content.about, skills: newSkills } })
                    }}
                    className="flex-grow"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeSkill(index)} className="ml-2">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addSkill} className="mt-2">
                <Plus className="h-4 w-4 mr-2" /> Add Skill
              </Button>
            </div>
            <Button onClick={() => handleSave("about")}>Save About Content</Button>
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
                value={content.work.intro}
                onChange={(e) => setContent({ ...content, work: { ...content.work, intro: e.target.value } })}
                rows={4}
              />
            </div>
            {content.work.projects.map((project: any, index: number) => (
              <div key={index} className="space-y-2 border p-4 rounded-md relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeProject(index)}
                  className="absolute top-2 right-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Input
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...content.work.projects]
                    newProjects[index].title = e.target.value
                    setContent({ ...content, work: { ...content.work, projects: newProjects } })
                  }}
                  placeholder="Project Title"
                />
                <Textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...content.work.projects]
                    newProjects[index].description = e.target.value
                    setContent({ ...content, work: { ...content.work, projects: newProjects } })
                  }}
                  placeholder="Project Description"
                  rows={2}
                />
              </div>
            ))}
            <Button onClick={addProject}>
              <Plus className="h-4 w-4 mr-2" /> Add Project
            </Button>
            <Button onClick={() => handleSave("work")}>Save Work Content</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Projects Page</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.projects?.map((project: any, index: number) => (
              <div key={index} className="space-y-2 border p-4 rounded-md relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removePersonalProject(index)}
                  className="absolute top-2 right-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Input
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...content.projects]
                    newProjects[index].title = e.target.value
                    setContent({ ...content, projects: newProjects })
                  }}
                  placeholder="Project Title"
                />
                <Input
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...content.projects]
                    newProjects[index].description = e.target.value
                    setContent({ ...content, projects: newProjects })
                  }}
                  placeholder="Project Description"
                />
                <Textarea
                  value={project.details}
                  onChange={(e) => {
                    const newProjects = [...content.projects]
                    newProjects[index].details = e.target.value
                    setContent({ ...content, projects: newProjects })
                  }}
                  placeholder="Project Details"
                  rows={4}
                />
                <Input
                  value={project.link}
                  onChange={(e) => {
                    const newProjects = [...content.projects]
                    newProjects[index].link = e.target.value
                    setContent({ ...content, projects: newProjects })
                  }}
                  placeholder="Project URL"
                />
              </div>
            ))}
            <Button onClick={addPersonalProject}>
              <Plus className="h-4 w-4 mr-2" /> Add Personal Project
            </Button>
            <Button onClick={() => handleSave("projects")}>Save Projects Content</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Companies Section</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {companies.map((company, index) => (
              <div key={index} className="space-y-2 border p-4 rounded-md relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCompany(index)}
                  className="absolute top-2 right-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Company Name</label>
                    <Input
                      value={company.name}
                      onChange={(e) => {
                        const newCompanies = [...companies]
                        newCompanies[index].name = e.target.value
                        setCompanies(newCompanies)
                      }}
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Logo URL</label>
                    <Input
                      value={company.logo}
                      onChange={(e) => {
                        const newCompanies = [...companies]
                        newCompanies[index].logo = e.target.value
                        setCompanies(newCompanies)
                      }}
                      placeholder="Logo URL"
                    />
                  </div>
                </div>
                <div className="mt-2 h-16 relative px-4">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    className="object-contain"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-center mt-2">
                  <label htmlFor={`company-visible-${index}`} className="mr-2">
                    Visible:
                  </label>
                  <input
                    type="checkbox"
                    id={`company-visible-${index}`}
                    checked={company.isVisible}
                    onChange={(e) => {
                      const newCompanies = [...companies]
                      newCompanies[index].isVisible = e.target.checked
                      setCompanies(newCompanies)
                    }}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </div>
              </div>
            ))}
            <Button onClick={addCompany}>
              <Plus className="h-4 w-4 mr-2" /> Add Company
            </Button>
            <Button onClick={() => handleSave("companies")}>Save Companies</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

