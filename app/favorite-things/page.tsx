import { Card, CardContent } from "@/components/ui/card"
import FloatingFeathers from "@/components/floating-feathers"
import ShareButtons from "@/components/share-buttons"
import { Heart, Star } from "lucide-react"

export default function FavoriteThings() {
  return (
    <>
      <FloatingFeathers count={8} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-bangers text-5xl md:text-6xl drop-shadow-lg mb-6">Mimi&apos;s Favorite Things</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover all the toys, treats, and activities that make this parrot&apos;s feathers ruffle with joy!
            </p>
          </div>
        </div>
      </section>

      {/* Favorite Toys */}
      <section className="content-container">
        <h2 className="section-heading">Favorite Toys</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="tropical-card">
            <div className="relative h-48 overflow-hidden rounded-t-xl bg-yellow-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Star className="h-24 w-24 text-yellow-400" />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Jingly Bell Ball</h3>
              </div>
              <p>
                This simple toy provides hours of entertainment as Mimi pushes it around, enjoying the musical sounds.
                The humans enjoy it significantly less at 6 AM.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">Mimi&apos;s Rating</span>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="relative h-48 overflow-hidden rounded-t-xl bg-green-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Star className="h-24 w-24 text-green-400" />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Shreddable Paper Toys</h3>
              </div>
              <p>
                Nothing brings more joy than methodically destroying paper items, especially important documents and
                bills that were foolishly left within reach.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">Mimi&apos;s Rating</span>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="relative h-48 overflow-hidden rounded-t-xl bg-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Star className="h-24 w-24 text-blue-400" />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">The Forbidden Phone Charger</h3>
              </div>
              <p>
                Not technically a toy, but Mimi has decided that phone chargers are the ultimate chewable delight,
                despite repeated attempts to provide safer alternatives.
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">Human&apos;s Rating</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Favorite Treats */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="content-container">
          <h2 className="section-heading">Favorite Treats</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="tropical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold">Sunflower Seeds</h3>
                </div>
                <p className="mb-4">
                  The ultimate currency in Mimi&apos;s world. Will perform tricks, speak on command, and even tolerate
                  cuddles for these precious morsels.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">Mimi&apos;s Rating</span>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold">Millet Spray</h3>
                </div>
                <p className="mb-4">
                  The bird equivalent of potato chips - impossible to stop once started. Mimi has perfected the art of
                  stripping a millet spray in record time.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">Mimi&apos;s Rating</span>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold">Fresh Fruit</h3>
                </div>
                <p className="mb-4">
                  Apples and grapes are acceptable offerings, though Mimi prefers to take a single bite from each piece
                  and then discard it dramatically.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">Mimi&apos;s Rating</span>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-xl font-bold">Whatever You&apos;re Eating</h3>
                </div>
                <p className="mb-4">
                  The most delicious food in the world is clearly whatever is on your plate. Mimi will stare intensely
                  until sharing occurs, regardless of whether it&apos;s bird-appropriate.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">Mimi&apos;s Rating</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Favorite Activities */}
      <section className="content-container">
        <h2 className="section-heading">Favorite Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="tropical-card">
            <div className="p-6 border-b">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Morning Concerts</h3>
              </div>
              <p>
                Starting the day with an elaborate vocal performance at sunrise is non-negotiable. Volume increases
                until humans acknowledge the talent.
              </p>
            </div>
            <CardContent className="p-4 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enjoyment Level:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="p-6 border-b">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Bath Time</h3>
              </div>
              <p>
                Splashing in water until everything within a 5-foot radius is thoroughly soaked. Followed by vigorous
                shaking to ensure maximum distribution.
              </p>
            </div>
            <CardContent className="p-4 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enjoyment Level:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="p-6 border-b">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Mirror Admiration</h3>
              </div>
              <p>
                Hours can be spent having deep conversations with the attractive bird in the mirror. Relationship
                status: complicated.
              </p>
            </div>
            <CardContent className="p-4 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enjoyment Level:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="p-6 border-b">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Shoulder Surfing</h3>
              </div>
              <p>
                Riding on human shoulders while providing unsolicited commentary and occasionally preening hair or
                earlobes.
              </p>
            </div>
            <CardContent className="p-4 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enjoyment Level:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="p-6 border-b">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Nap Time</h3>
              </div>
              <p>
                Strategic power naps, preferably in the sunniest spot available or nestled against a warm human neck.
              </p>
            </div>
            <CardContent className="p-4 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enjoyment Level:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <div className="p-6 border-b">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">Zoom Bombing</h3>
              </div>
              <p>Making surprise appearances during video calls, ensuring Mimi becomes the star of every meeting.</p>
            </div>
            <CardContent className="p-4 bg-green-50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enjoyment Level:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="section-subheading">Share Mimi&apos;s Favorites</h3>
          <ShareButtons
            title="Mimi's Favorite Things"
            description="Discover all the toys, treats, and activities that make this parrot's feathers ruffle with joy!"
            hashtags={["MimiFavorites", "ParrotLife", "BirdToys"]}
          />
        </div>
      </section>
    </>
  )
}
