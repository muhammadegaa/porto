import { initializeFirebaseAdmin } from './firebase'

const initialContent = {
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
    ]
  },
  work: {
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
  },
  projects: [
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
  ],
  companies: [
    {
      name: "Mekari",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GPgciCBVqggIOhqF1eoQt0Gt9gL5pd.png"
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

export async function migrateToFirestore() {
  const db = initializeFirebaseAdmin()
  const contentRef = db.collection('content').doc('website')

  const doc = await contentRef.get()

  if (!doc.exists) {
    await contentRef.set(initialContent)
    console.log('Initial content migrated to Firestore')
  } else {
    console.log('Content already exists in Firestore')
  }
}

