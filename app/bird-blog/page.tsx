import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FloatingFeathers from "@/components/floating-feathers"
import { Calendar, ArrowRight } from "lucide-react"

export default function BirdBlog() {
  return (
    <>
      <FloatingFeathers count={8} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-bangers text-5xl md:text-6xl drop-shadow-lg mb-6">Bird Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Entertaining stories, anecdotes, and mishaps from the feathered world of Mimi!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="content-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Featured Story</h2>

          <Card className="tropical-card overflow-hidden mb-12">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/images/mimi-5.png"
                alt="Mimi on cage with Air Force background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center text-white/80 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">May 4, 2025</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Day Mimi Became a Fighter Pilot</h3>
                <p className="text-white/90 max-w-3xl">
                  How one parrot&apos;s obsession with the Air Force curtains led to a high-flying adventure around the
                  living room.
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="mb-6">
                It all started on a quiet Tuesday afternoon when Mimi became fixated on the Air Force curtains in the
                living room. What began as casual interest quickly evolved into a full-blown obsession, with Mimi
                spending hours studying the fighter jets printed on the fabric.
              </p>
              <p className="mb-6">
                By Wednesday, Mimi had developed a new vocalization that sounded suspiciously like jet engines, and
                would only respond to being called "Captain Mimi." The humans found it amusing at first, until the
                aerial acrobatics began.
              </p>
              <Link href="/bird-blog/fighter-pilot">
                <Button className="w-full sm:w-auto">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="content-container">
          <h2 className="section-heading">Recent Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">May 2, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mimi's First Bath Adventure</h3>
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
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Great Escape Attempt</h3>
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

            {/* Blog Post 3 */}
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
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 22, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Day Mimi Learned to Mimic the Doorbell</h3>
                <p className="mb-4">How one clever parrot figured out the perfect way to summon humans on demand.</p>
                <Link href="/bird-blog/doorbell-mimic">
                  <Button variant="outline" className="w-full">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 4 */}
            <Card className="tropical-card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-7.png"
                  alt="Mimi profile"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Mirror Relationship</h3>
                <p className="mb-4">Mimi's complicated love affair with the mysterious bird who lives in the mirror.</p>
                <Link href="/bird-blog/mirror-relationship">
                  <Button variant="outline" className="w-full">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 5 */}
            <Card className="tropical-card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-2.png"
                  alt="Mimi side profile"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 8, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">The Case of the Missing Keys</h3>
                <p className="mb-4">
                  A household mystery is solved when Mimi's secret treasure collection is discovered.
                </p>
                <Link href="/bird-blog/missing-keys">
                  <Button variant="outline" className="w-full">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card className="tropical-card group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-1.png"
                  alt="Mimi looking at camera"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 1, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mimi's April Fool's Day Pranks</h3>
                <p className="mb-4">
                  How one parrot managed to pull off the most elaborate series of pranks, all while maintaining
                  innocence.
                </p>
                <Link href="/bird-blog/april-fools">
                  <Button variant="outline" className="w-full">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Never Miss a Mimi Story</h2>
          <p className="text-lg mb-8">
            Subscribe to get the latest adventures, antics, and parrot wisdom delivered straight to your inbox!
          </p>
          <Card className="tropical-card">
            <CardContent className="p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <Button className="w-full sm:w-auto">
                  Subscribe to Bird Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
