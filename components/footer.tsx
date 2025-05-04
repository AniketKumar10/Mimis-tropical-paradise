import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bangers text-2xl mb-4">Mimi&apos;s Paradise</h3>
            <p className="text-white/80">
              A vibrant celebration of Mimi the parrot&apos;s unique personality and daily adventures.
            </p>
          </div>

          <div>
            <h3 className="font-bangers text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/meet-mimi" className="text-white/80 hover:text-white">
                  Meet Mimi
                </Link>
              </li>
              <li>
                <Link href="/daily-adventures" className="text-white/80 hover:text-white">
                  Daily Adventures
                </Link>
              </li>
              <li>
                <Link href="/favorite-things" className="text-white/80 hover:text-white">
                  Favorite Things
                </Link>
              </li>
              <li>
                <Link href="/parrot-talk" className="text-white/80 hover:text-white">
                  Parrot Talk
                </Link>
              </li>
              <li>
                <Link href="/bird-blog" className="text-white/80 hover:text-white">
                  Bird Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bangers text-xl mb-4">Connect With Mimi</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <p className="mt-4 text-white/80">Share Mimi&apos;s adventures with your friends!</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Mimi&apos;s Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
