"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Briefcase, BookOpen, FileText, Rocket, Camera, User, X } from "lucide-react"
import { MinimalistPortfolio } from "@/components/templates/minimalist-portfolio"
import { PhotographyShowcase } from "@/components/templates/photography-showcase"
import { PersonalBrandSite } from "@/components/templates/personal-brand-site"
import { CreativeBlog } from "@/components/templates/creative-blog"
import { ProfessionalResume } from "@/components/templates/professional-resume"
import { StartupLanding } from "@/components/templates/startup-landing"

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

const templates = [
  {
    name: "Minimalist Portfolio",
    description: "Clean and simple design to showcase your work effectively.",
    icon: Briefcase,
    features: [
      "Responsive grid layout",
      "Customizable color scheme",
      "Project showcase section",
      "About me and skills area",
      "Contact form integration",
    ],
    component: MinimalistPortfolio,
  },
  {
    name: "Creative Blog",
    description: "Vibrant and engaging layout perfect for sharing your thoughts and ideas.",
    icon: BookOpen,
    features: [
      "Dynamic post layouts",
      "Category and tag organization",
      "Featured posts slider",
      "Social media integration",
      "Newsletter subscription",
    ],
    component: CreativeBlog,
  },
  {
    name: "Professional Resume",
    description: "Sleek and organized template to highlight your skills and experience.",
    icon: FileText,
    features: [
      "Interactive timeline",
      "Skills progress bars",
      "Downloadable PDF version",
      "Testimonials section",
      "Project portfolio integration",
    ],
    component: ProfessionalResume,
  },
  {
    name: "Startup Landing Page",
    description: "High-converting design to showcase your product or service.",
    icon: Rocket,
    features: [
      "Animated hero section",
      "Feature highlights",
      "Pricing tables",
      "Customer testimonials",
      "Call-to-action buttons",
    ],
    component: StartupLanding,
  },
  {
    name: "Photography Showcase",
    description: "Elegant gallery-style layout to display your visual work.",
    icon: Camera,
    features: [
      "Masonry grid gallery",
      "Lightbox image viewer",
      "Category filtering",
      "Instagram feed integration",
      "Client proofing area",
    ],
    component: PhotographyShowcase,
  },
  {
    name: "Personal Brand Site",
    description: "Comprehensive template to establish your personal brand online.",
    icon: User,
    features: [
      "Customizable homepage sections",
      "Blog and resources area",
      "Services and products showcase",
      "Email capture and lead generation",
      "Appointment booking integration",
    ],
    component: PersonalBrandSite,
  },
]

const redirectToWhatsApp = (templateName: string) => {
  const phoneNumber = "447709376716"
  const message = encodeURIComponent(`Hi, I'm interested in the ${templateName} template. Can we discuss further?`)
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

function TemplateDemo({
  name,
  Component,
  onClose,
}: { name: string; Component: React.ComponentType; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        <div className="flex justify-between items-center p-4 bg-card sticky top-0 z-10">
          <h3 className="text-lg font-semibold">{name} - Demo</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-grow">
          <Component />
        </div>
      </div>
    </div>
  )
}

export function ServicesClient() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-6xl mx-auto">
        <motion.h1 variants={fadeIn} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          Personal Website Templates
        </motion.h1>

        <motion.p variants={fadeIn} className="text-lg sm:text-xl mb-12 text-center max-w-3xl mx-auto">
          Choose from our range of professionally designed templates. Each template is fully customizable to match your
          unique style and needs.
        </motion.p>

        <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <template.icon className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{template.name}</h3>
                <p className="text-muted-foreground mb-4 text-center">{template.description}</p>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mb-2" onClick={() => setActiveDemo(template.name)}>
                  View Demo
                </Button>
                <Button variant="outline" className="w-full" onClick={() => redirectToWhatsApp(template.name)}>
                  Choose Template
                </Button>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn} className="mt-16 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">
            Contact me to discuss your personal website needs and let's bring your online presence to life!
          </p>
          <Button size="lg" onClick={() => redirectToWhatsApp("Custom Template")}>
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>

      {activeDemo && (
        <TemplateDemo
          name={activeDemo}
          Component={templates.find((t) => t.name === activeDemo)?.component || MinimalistPortfolio}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </div>
  )
}

