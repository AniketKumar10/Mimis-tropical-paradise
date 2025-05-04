"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Camera, Heart, MessageSquare, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Meet Mimi", href: "/meet-mimi", icon: <Camera className="h-5 w-5" /> },
  { name: "Daily Adventures", href: "/daily-adventures", icon: <Camera className="h-5 w-5" /> },
  { name: "Favorite Things", href: "/favorite-things", icon: <Heart className="h-5 w-5" /> },
  { name: "Parrot Talk", href: "/parrot-talk", icon: <MessageSquare className="h-5 w-5" /> },
  { name: "Bird Blog", href: "/bird-blog", icon: <BookOpen className="h-5 w-5" /> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-500 to-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bangers text-3xl text-white drop-shadow-md">Mimi&apos;s Paradise</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
