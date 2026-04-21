import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Muhammad Ega</h3>
            <p className="mt-2">Innovating Product Management Solutions</p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <ul className="flex justify-center space-x-4">
              <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange">LinkedIn</Link></li>
              <li><Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange">GitHub</Link></li>
              <li><Link href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Medium</Link></li>
              <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange">Twitter</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
            <p>&copy; 2023 Muhammad Ega. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

