import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechGiant Inc.",
    period: "2020 - Present",
    description:
      "Led development of cloud-based enterprise solutions, improving system efficiency by 40%. Mentored junior developers and implemented Agile methodologies.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "InnovateTech Solutions",
    period: "2017 - 2020",
    description:
      "Developed and maintained multiple high-traffic web applications. Implemented microservices architecture, reducing server load by 30%.",
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2015 - 2017",
    description:
      "Assisted in the development of responsive web applications. Collaborated with UX designers to implement user-friendly interfaces.",
  },
]

const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React & React Native", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "AWS & Cloud Services", level: 75 },
  { name: "Docker & Kubernetes", level: 70 },
]

const projects = [
  { name: "E-commerce Platform", tech: "React, Node.js, MongoDB" },
  { name: "AI-powered Chatbot", tech: "Python, TensorFlow, AWS" },
  { name: "Real-time Collaboration Tool", tech: "React, Socket.io, Redis" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function ProfessionalResume() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-gray-800 font-sans">
      <header className="bg-[#2c3e50] text-white py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl font-bold mb-2">Emily Johnson</h1>
              <p className="text-xl">Senior Software Engineer</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-4 md:mt-0 text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end mb-2">
                <Mail className="mr-2" size={18} /> emily.johnson@example.com
              </p>
              <p className="flex items-center justify-center md:justify-end mb-2">
                <Phone className="mr-2" size={18} /> (123) 456-7890
              </p>
              <p className="flex items-center justify-center md:justify-end">
                <MapPin className="mr-2" size={18} /> San Francisco, CA
              </p>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6 space-y-12">
        <motion.section initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-4 text-[#2c3e50] border-b-2 border-[#2c3e50] pb-2"
          >
            Professional Summary
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700">
            Experienced software engineer with a strong background in full-stack development and cloud technologies.
            Passionate about creating efficient, scalable, and user-friendly applications. Skilled in leading teams,
            implementing Agile methodologies, and delivering high-quality software solutions.
          </motion.p>
        </motion.section>

        <motion.section initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-4 text-[#2c3e50] border-b-2 border-[#2c3e50] pb-2"
          >
            Work Experience
          </motion.h2>
          <motion.div variants={staggerChildren} className="space-y-6">
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-[#2c3e50] font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-4 text-[#2c3e50] border-b-2 border-[#2c3e50] pb-2"
          >
            Skills
          </motion.h2>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={fadeInUp} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold mb-4 text-[#2c3e50] border-b-2 border-[#2c3e50] pb-2"
          >
            Notable Projects
          </motion.h2>
          <motion.ul variants={staggerChildren} className="list-disc pl-5 space-y-2">
            {projects.map((project, index) => (
              <motion.li key={index} variants={fadeInUp}>
                <span className="font-medium">{project.name}</span> - {project.tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section
          className="flex justify-center space-x-4"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Button className="bg-[#2c3e50] hover:bg-[#34495e]">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </motion.section>
      </main>

      <footer className="bg-[#2c3e50] text-white py-6">
        <div className="container mx-auto px-6 flex justify-center space-x-4">
          <Link href="#" className="hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            <Github size={24} />
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            <Globe size={24} />
          </Link>
        </div>
      </footer>
    </div>
  )
}

