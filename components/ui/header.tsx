'use client'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'


{/*Sticky header: https://reacthustle.com/blog/react-sticky-header-tailwindcss-tutorial*/ }

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-black backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-white-950" viewBox="0 0 90 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M 1.01743,24.15591 C 0.36104,26.65028 0.03283,29.2759 0,31.96717 h 32.32816 z m 31.31073,7.81126 z m 0,0 z m 0,0 0.0328,-31.93433 h -0.26254 c -2.59283,0 -5.12001,0.32824 -7.54871,0.91899 z m 0,0 L 18.70768,2.9867 C 16.27895,4.10256 14.04717,5.48107 12.01231,7.12209 Z M 7.3518,11.71693 C 5.67794,13.75182 4.23386,15.98362 3.11793,18.3795 l 29.21023,13.58767 z m 24.97636,20.25024 z m 0,0 z M 89.20605,0.03284 H 68.1025 v 7.18771 h 6.17026 V 32 h 8.76306 V 7.22055 h 6.17023 z M 66.00198,31.96717 H 57.2389 V 0.03284 h 8.76308 z m -10.24,0 H 46.01431 L 34.42869,19.52823 V 12.40617 L 45.65328,0 H 55.69636 L 42.76509,16.08208 Z" />
              </svg>
            </Link>
          </div>


          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Winter School
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Application
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
