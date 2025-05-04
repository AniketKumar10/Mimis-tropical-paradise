import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import FloatingFeathers from "@/components/floating-feathers"
import ShareButtons from "@/components/share-buttons"
import { Camera } from "lucide-react"

export default function MeetMimi() {
  return (
    <>
      <FloatingFeathers count={10} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-bangers text-5xl md:text-6xl drop-shadow-lg mb-6">Meet Mimi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get to know the feathered superstar with the big personality and even bigger attitude!
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl border-4 border-yellow-400">
              <Image src="/images/mimi-1.png" alt="Mimi the parrot" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full overflow-hidden border-4 border-green-400 shadow-xl">
              <Image src="/images/mimi-3.png" alt="Mimi close-up" fill className="object-cover" />
            </div>
          </div>

          <div>
            <h2 className="section-heading text-left">The Legend of Mimi</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg">
                Born somewhere in the exotic jungles of the living room, Mimi is no ordinary parrot. With feathers as
                green as the jealousy felt by less charismatic birds, this feathered diva has been ruling the roost
                since day one.
              </p>
              <p className="text-lg">
                Mimi holds several impressive titles, including "Fastest Seed Flicker in the West," "Champion Curtain
                Climber," and "Most Likely to Wake the Neighbors at 5 AM." When not busy rearranging household items to
                better suit avian aesthetics, Mimi enjoys giving unsolicited opinions on everything from your choice of
                music to your haircut.
              </p>
              <p className="text-lg">
                Despite having a brain the size of a peanut (no offense intended), Mimi has somehow mastered the art of
                psychological warfare, knowing exactly when to make direct eye contact while slowly pushing items off
                shelves.
              </p>
              <p className="text-lg">
                Favorite hobbies include pretending to be asleep until you leave the room, practicing opera at
                inappropriate hours, and developing new ways to avoid eating vegetables while making it look like an
                accident.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="section-subheading">Share Mimi&apos;s Story</h3>
              <ShareButtons
                title="Meet Mimi - The Parrot with Attitude!"
                description="Get to know the feathered superstar with the big personality and even bigger attitude!"
                hashtags={["MimiTheParrot", "ParrotLife", "FeatheredFriend"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="content-container">
          <h2 className="section-heading">Mimi&apos;s Photo Gallery</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            Feast your eyes on the many moods and moments of our feathered friend. From silly to serious, Mimi knows how
            to work the camera!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo 1 */}
            <Card className="tropical-card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-4.png"
                  alt="Mimi close-up portrait"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">The Glamour Shot</p>
                </div>
              </CardContent>
            </Card>

            {/* Photo 2 */}
            <Card className="tropical-card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-5.png"
                  alt="Mimi on cage with Air Force background"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">Top Gun Mimi</p>
                </div>
              </CardContent>
            </Card>

            {/* Photo 3 */}
            <Card className="tropical-card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-6.png"
                  alt="Blurry Mimi"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">The Escape Artist</p>
                </div>
              </CardContent>
            </Card>

            {/* Photo 4 */}
            <Card className="tropical-card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-7.png"
                  alt="Mimi profile"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">The Thinker</p>
                </div>
              </CardContent>
            </Card>

            {/* Photo 5 */}
            <Card className="tropical-card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-8.png"
                  alt="Mimi on cage"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">King of the Castle</p>
                </div>
              </CardContent>
            </Card>

            {/* Photo 6 */}
            <Card className="tropical-card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/mimi-9.png"
                  alt="Mimi in cage"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-primary mr-2" />
                  <p className="font-medium">The Judgmental Look</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="content-container">
        <h2 className="section-heading">Mimi Fun Facts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="tropical-card">
            <CardContent className="p-6">
              <h3 className="section-subheading">Age</h3>
              <p>Refuses to disclose, claims to be "eternally youthful"</p>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <h3 className="section-subheading">Favorite Food</h3>
              <p>Whatever you're eating that you don't want to share</p>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <h3 className="section-subheading">Special Talent</h3>
              <p>Making noise precisely when phone calls or Zoom meetings begin</p>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <h3 className="section-subheading">Arch Nemesis</h3>
              <p>The vacuum cleaner and anyone who dares to rearrange the furniture</p>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <h3 className="section-subheading">Life Goal</h3>
              <p>To one day own all the shiny objects in the house</p>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <h3 className="section-subheading">Secret Fear</h3>
              <p>That the humans will discover where all the missing socks are hidden</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
