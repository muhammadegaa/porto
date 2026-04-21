import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-navy-blue">
              Muhammad Ega
            </Link>
          </li>
          <li className="flex space-x-4">
            <Link href="/" className="text-navy-blue hover:text-orange">Home</Link>
            <Link href="/portfolio" className="text-navy-blue hover:text-orange">Portfolio</Link>
            <Link href="/about" className="text-navy-blue hover:text-orange">About</Link>
            <Link href="/blog" className="text-navy-blue hover:text-orange">Blog</Link>
            <Link href="/contact" className="text-navy-blue hover:text-orange">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

