import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Product Management in the AI Era",
    summary: "Exploring how artificial intelligence is reshaping the landscape of product management and what skills will be crucial in the coming years.",
    image: "/blog-ai-product-management.jpg",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Agile vs. Waterfall: Choosing the Right Methodology for Your Project",
    summary: "A comprehensive comparison of Agile and Waterfall methodologies, helping you decide which approach is best suited for your product development needs.",
    image: "/blog-agile-waterfall.jpg",
    date: "2023-04-22",
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-orange hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

