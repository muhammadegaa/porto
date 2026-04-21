import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring quick load times and smooth user experience.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-level security measures to keep your data safe and your business running smoothly.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly work together with your team, no matter where they are located.",
  },
]

const testimonials = [
  {
    name: "Sarah L.",
    role: "CEO, TechStart",
    content:
      "This platform has revolutionized how we manage our projects. It's intuitive, powerful, and has greatly improved our team's productivity.",
  },
  {
    name: "Michael R.",
    role: "Freelance Developer",
    content:
      "I've tried many project management tools, but this one stands out. It's flexible enough for my varying needs and the customer support is top-notch.",
  },
  {
    name: "Emily C.",
    role: "Marketing Manager",
    content:
      "The analytics features have been a game-changer for our marketing campaigns. We can now make data-driven decisions with ease.",
  },
]

const pricingPlans = [
  {
    name: "Basic",
    price: "$9",
    period: "per month",
    features: ["5 Projects", "10 Team Members", "5GB Storage", "Basic Support"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    features: [
      "Unlimited Projects",
      "Unlimited Team Members",
      "100GB Storage",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    features: ["All Pro features", "Dedicated Account Manager", "Custom Integrations", "99.99% Uptime SLA"],
  },
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

export function StartupLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 text-gray-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold text-indigo-600">
              ProjectPro
            </Link>
            <div className="space-x-6">
              <Link href="#features" className="hover:text-indigo-600 transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="hover:text-indigo-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#pricing" className="hover:text-indigo-600 transition-colors">
                Pricing
              </Link>
              <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-12 px-6 space-y-20">
        <motion.section className="text-center" initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold mb-4 text-indigo-600">
            Streamline Your Projects with ProjectPro
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto">
            The all-in-one project management solution that helps teams collaborate, track progress, and deliver
            results.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center space-x-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">Start Free Trial</Button>
            <Button variant="outline" className="text-lg px-8 py-3">
              Watch Demo
            </Button>
          </motion.div>
        </motion.section>

        <motion.section id="features" initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-center text-indigo-600">
            Why Choose ProjectPro?
          </motion.h2>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="testimonials" initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-center text-indigo-600">
            What Our Customers Say
          </motion.h2>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="pricing" initial="initial" animate="animate" variants={staggerChildren}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-center text-indigo-600">
            Choose Your Plan
          </motion.h2>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-4xl font-bold text-indigo-600 mb-1">{plan.price}</p>
                    <p className="text-gray-500 mb-4">{plan.period}</p>
                    <ul className="text-left space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="text-center" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">Ready to Boost Your Productivity?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied teams and start your free trial today.</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">Start Free Trial</Button>
        </motion.section>
      </main>

      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ProjectPro</h3>
              <p className="text-indigo-200">Empowering teams to achieve more, together.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
            <p>&copy; 2023 ProjectPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

