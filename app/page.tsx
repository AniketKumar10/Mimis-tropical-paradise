import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FloatingFeathers from "@/components/floating-feathers"
import { ArrowRight, Camera, Heart, MessageSquare, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <>
      <FloatingFeathers count={15} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-400 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/mimi-1.png')] bg-center bg-cover opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="font-bangers text-5xl md:text-7xl drop-shadow-lg mb-6 animate-bounce">
            Welcome to Mimi&apos;s Tropical Paradise!
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Dive into the colorful world of Mimi the parrot, where every day is an adventure filled with feathers, fun,
            and fabulous moments!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/meet-mimi">
              <Button size="lg" className="primary-button">
                Meet Mimi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/daily-adventures">
              <Button size="lg" className="secondary-button">
                See Adventures
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="content-container">
        <h2 className="section-heading">Explore Mimi&apos;s World</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Meet Mimi Card */}
          <Card className="tropical-card group">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image
                src="/images/mimi-2.png"
                alt="Mimi the parrot"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-primary mr-2" />
                <h3 className="section-subheading">Meet Mimi</h3>
              </div>
              <p className="mb-4">
                Get to know the feathered star of the show with Mimi's exaggerated biography and photo collection.
              </p>
              <Link href="/meet-mimi">
                <Button className="w-full">
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Favorite Things Card */}
          <Card className="tropical-card group">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image
                src="/images/mimi-5.png"
                alt="Mimi with toys"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <h3 className="section-subheading">Favorite Things</h3>
              </div>
              <p className="mb-4">
                Discover all of Mimi's preferred toys, treats, and activities that keep this parrot entertained.
              </p>
              <Link href="/favorite-things">
                <Button className="w-full">
                  See Favorites
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Parrot Talk Card */}
          <Card className="tropical-card group">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image
                src="/images/mimi-4.png"
                alt="Mimi talking"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                <h3 className="section-subheading">Parrot Talk</h3>
              </div>
              <p className="mb-4">
                Laugh at Mimi's hilarious phrases and the funny conversations this chatty bird engages in.
              </p>
              <Link href="/parrot-talk">
                <Button className="w-full">
                  Hear the Chatter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="content-container">
          <h2 className="section-heading">Latest from the Bird Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Blog Post 1 */}
            <Card className="tropical-card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-8.png"
                  alt="Mimi on cage"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">May 2, 2025</p>
                <h3 className="section-subheading">Mimi's First Bath Adventure</h3>
                <p className="mb-4">
                  What happens when a parrot discovers water play for the first time? Chaos, joy, and lots of splashing!
                </p>
                <Link href="/bird-blog/mimis-first-bath">
                  <Button variant="outline" className="w-full">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="tropical-card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-9.png"
                  alt="Mimi close-up"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">April 28, 2025</p>
                <h3 className="section-subheading">The Great Escape Attempt</h3>
                <p className="mb-4">
                  Mimi's hilarious and ultimately unsuccessful plan to break free and explore the great beyond.
                </p>
                <Link href="/bird-blog/great-escape-attempt">
                  <Button variant="outline" className="w-full">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/bird-blog">
              <Button size="lg" className="accent-button">
                View All Blog Posts
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="content-container text-center">
        <h2 className="section-heading">Join Mimi&apos;s Flock!</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Follow Mimi&apos;s adventures and never miss a moment of parrot pandemonium. Share your own bird stories and
          become part of our tropical community!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/meet-mimi">
            <Button size="lg" className="primary-button">
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/bird-blog">
            <Button size="lg" className="secondary-button">
              Read the Blog
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
