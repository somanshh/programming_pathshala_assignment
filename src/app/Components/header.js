"use client"
import Link from 'next/link'
import { useState } from 'react'

const Header = () => (
  <header className="flex justify-between items-center py-6 px-12">
    <div className="flex items-center">
      <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24">
        {/* Add your logo SVG path here */}
        <image href="/Images/icon.png" x="0" y="0" height="24" width="24"/>
      </svg>
      <span className="ml-2 text-3xl font-semibold">Nexcent</span>
    </div>
    <nav>
      <ul className="flex space-x-12 pt-2 items-center">
        {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map((item) => (
          <li key={item}>
            <Link href={`${item.toLowerCase()}`} className="text-gray-900 hover:text-gray-600">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex items-center space-x-8">
      <Link href="/login" className="text-green-500 hover:text-green-600">
        Login
      </Link>
      <Link href="/signup" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
        Sign up
      </Link>
    </div>
  </header>
)

const CarouselItem = ({ title, subtitle, isActive }) => (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center justify-between pl-44">
        <div className="max-w-xl">
          <h1 className="text-5xl font-semibold text-gray-700 mb-4 tracking-normal">
            {title.split(' ').map((word, index) => 
              index > 2 ? <span key={index} className="text-green-500">{word} </span> : word + ' '
            )}
          </h1>
          <p className="text-gray-600 mb-6">{subtitle}</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
            Register
          </button>
        </div>
        <div className="relative pt-12 pr-44">
          <img src={`/Images/Illustration${isActive ? 'active' : 'inactive'}.png`} alt="Illustration" className="w-96" />
          {/* <image  href="/Images/Illustration.png" x="0" y="0" height="24" width="24"/> */}
        </div>
      </div>
    </div>
  )
  
  const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
      { title: "Lessons and insights from 8 years", subtitle: "Where to grow your business as a photographer: site or social media?" },
      { title: "Unlock your creative potential", subtitle: "Discover new techniques to enhance your photography skills" },
      { title: "Build a thriving online presence", subtitle: "Learn how to leverage digital platforms for your photography business" }
    ]
  
    return (
      <div className="relative h-[500px]">
        {items.map((item, index) => (
          <CarouselItem key={index} {...item} isActive={index === activeIndex} />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }
  
  const HomePage = () => (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
    </div>
  )

export default HomePage