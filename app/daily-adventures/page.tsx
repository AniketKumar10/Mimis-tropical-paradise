import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import FloatingFeathers from "@/components/floating-feathers"
import ShareButtons from "@/components/share-buttons"
import { Calendar } from "lucide-react"

export default function DailyAdventures() {
  return (
    <>
      <FloatingFeathers count={8} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-bangers text-5xl md:text-6xl drop-shadow-lg mb-6">Daily Adventures</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Follow along with Mimi&apos;s daily shenanigans and feathered escapades!
            </p>
          </div>
        </div>
      </section>

      {/* Adventures Timeline */}
      <section className="content-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Mimi&apos;s Recent Adventures</h2>

          {/* Adventure 1 */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full p-2 mr-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="section-subheading">May 4, 2025</h3>
            </div>

            <Card className="tropical-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src="/images/mimi-1.png" alt="Mimi looking at camera" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">The Great Seed Heist</h4>
                  <p className="mb-4">
                    Today, Mimi orchestrated what can only be described as the most elaborate seed heist in parrot
                    history. After carefully observing the humans' routine for weeks, the moment finally arrived when
                    the seed container was left unattended for a full 30 seconds.
                  </p>
                  <p className="mb-4">
                    With ninja-like precision, Mimi managed to not only access the forbidden seed stash but also create
                    an impressive trail of evidence leading to the cat's bed - a classic misdirection technique.
                  </p>
                  <p>
                    The humans remain baffled as to how a container with a "bird-proof" lid was so thoroughly ransacked.
                    Mimi maintains an innocent expression while secretly adding "master thief" to the resume.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Adventure 2 */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full p-2 mr-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="section-subheading">May 3, 2025</h3>
            </div>

            <Card className="tropical-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/images/mimi-5.png"
                    alt="Mimi on cage with Air Force background"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Top Gun Training Day</h4>
                  <p className="mb-4">
                    Inspired by the Air Force curtains in the living room, Mimi spent the entire day perfecting aerial
                    maneuvers around the house. The self-proclaimed "Maverick of the Parrot World" executed perfect
                    loops, barrel rolls, and dive bombs.
                  </p>
                  <p className="mb-4">
                    The humans' attempts to watch a movie were repeatedly interrupted by fly-bys and tactical landings
                    on unsuspecting heads. When asked to stop, Mimi responded with what sounded suspiciously like
                    "negative, Ghost Rider, the pattern is full."
                  </p>
                  <p>
                    The day concluded with Mimi perched triumphantly atop the highest bookshelf, surveying the domain
                    with the satisfaction of a bird who feels the need... the need for speed.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Adventure 3 */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full p-2 mr-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="section-subheading">May 2, 2025</h3>
            </div>

            <Card className="tropical-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src="/images/mimi-8.png" alt="Mimi on cage" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">The Redecoration Project</h4>
                  <p className="mb-4">
                    Mimi decided that the living room needed a complete redesign today. The project began innocently
                    enough with some casual paper shredding but quickly escalated to full-scale interior decoration.
                  </p>
                  <p className="mb-4">
                    By mid-afternoon, the couch pillows had been meticulously rearranged, several houseplants had been
                    "pruned" in avant-garde fashion, and an impressive collection of small, shiny objects had been
                    curated on top of the TV stand.
                  </p>
                  <p>
                    When the humans returned home, they were greeted by what can only be described as "early parrot
                    modernism" - a bold artistic statement featuring scattered seeds as floor accents and strategic beak
                    marks on the window blinds.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="section-subheading">Share Mimi&apos;s Adventures</h3>
            <ShareButtons
              title="Mimi's Daily Adventures"
              description="Follow along with Mimi the parrot's daily shenanigans and feathered escapades!"
              hashtags={["MimiAdventures", "ParrotLife", "BirdAntics"]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
