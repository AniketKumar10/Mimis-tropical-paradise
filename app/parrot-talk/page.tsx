import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import FloatingFeathers from "@/components/floating-feathers"
import ShareButtons from "@/components/share-buttons"
import { MessageSquare, Quote } from "lucide-react"

export default function ParrotTalk() {
  return (
    <>
      <FloatingFeathers count={8} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-bangers text-5xl md:text-6xl drop-shadow-lg mb-6">Parrot Talk</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mimi&apos;s hilarious phrases, mimicry, and conversations that will leave you squawking with laughter!
            </p>
          </div>
        </div>
      </section>

      {/* Favorite Phrases */}
      <section className="content-container">
        <h2 className="section-heading">Mimi&apos;s Favorite Phrases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-yellow-400">
              <Image src="/images/mimi-4.png" alt="Mimi talking" fill className="object-cover" />
            </div>
          </div>

          <div>
            <Card className="tropical-card mb-4">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold mb-2">&quot;What doing?&quot;</p>
                    <p className="text-muted-foreground">
                      Mimi&apos;s way of checking in on human activities, usually asked repeatedly until acknowledged.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card mb-4">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold mb-2">&quot;Good bird!&quot;</p>
                    <p className="text-muted-foreground">
                      Self-congratulatory phrase often uttered after completing particularly destructive activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card mb-4">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold mb-2">&quot;Wanna treat?&quot;</p>
                    <p className="text-muted-foreground">
                      Mimi has learned to ask this question when humans are eating, creating an obligation to share.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold mb-2">&quot;Hello? Hello?&quot;</p>
                    <p className="text-muted-foreground">
                      Perfect imitation of phone answering, often performed during actual important calls.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funny Conversations */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="content-container">
          <h2 className="section-heading">Funny Conversations</h2>

          <div className="max-w-3xl mx-auto">
            <Card className="tropical-card mb-8">
              <CardContent className="p-6">
                <h3 className="section-subheading mb-6">The Breakfast Negotiation</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human:</p>
                      <p>Good morning, Mimi! Here's your breakfast.</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Stares at food bowl* What this?</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human:</p>
                      <p>It's your pellets and fresh veggies. Very healthy!</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Knocks bowl over dramatically* Wanna treat?</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human:</p>
                      <p>No treats until you eat your breakfast.</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Makes sad chirping sound* Good bird?</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human:</p>
                      <p>*Sighs* Fine, one small treat. But then you eat your breakfast.</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Takes treat* Good bird! *Flies away, ignoring breakfast entirely*</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tropical-card">
              <CardContent className="p-6">
                <h3 className="section-subheading mb-6">The Zoom Meeting Interruption</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human on Zoom:</p>
                      <p>As you can see from the quarterly report, our projections indicate...</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Suddenly appears on screen* HELLO! WHAT DOING?</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human:</p>
                      <p>*Whispers* Mimi, not now. I'm in a meeting.</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Begins preening human's hair on camera* Good bird!</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-purple-500" />
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Coworker on Zoom:</p>
                      <p>Is that your parrot? It's adorable!</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Perfectly mimics notification sound* DING! Wanna treat?</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Human:</p>
                      <p>*Gives up on professional meeting* Yes, everyone, this is Mimi.</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="bg-green-50 rounded-lg p-4 flex-grow">
                      <p className="font-medium mb-1">Mimi:</p>
                      <p>*Takes a bow* Hello! Good bird! *Proceeds to show off entire trick repertoire*</p>
                    </div>
                    <div className="bg-green-100 rounded-full p-2 ml-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sound Effects */}
      <section className="content-container">
        <h2 className="section-heading">Mimi&apos;s Sound Effects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="tropical-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">The Microwave Beep</h3>
              </div>
              <p className="mb-4">
                A perfect imitation of the microwave finishing, often performed at 3 AM for maximum confusion.
              </p>
              <div className="bg-muted rounded-md p-3 text-center">
                <p className="text-sm font-medium">BEEP! BEEP! BEEP!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">The Phone Ring</h3>
              </div>
              <p className="mb-4">
                Mimi has mastered the exact ringtone of your phone, causing you to check it constantly even when it
                hasn&apos;t actually rung.
              </p>
              <div className="bg-muted rounded-md p-3 text-center">
                <p className="text-sm font-medium">RING-RING! RING-RING!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">The Doorbell</h3>
              </div>
              <p className="mb-4">
                An impressively accurate doorbell sound that has caused countless unnecessary trips to the front door.
              </p>
              <div className="bg-muted rounded-md p-3 text-center">
                <p className="text-sm font-medium">DING-DONG!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">The Alarm Clock</h3>
              </div>
              <p className="mb-4">
                Mimi&apos;s rendition of the alarm clock is so accurate that it often causes morning panic on weekends
                when no alarm was set.
              </p>
              <div className="bg-muted rounded-md p-3 text-center">
                <p className="text-sm font-medium">BEEP-BEEP-BEEP-BEEP!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">The Text Message Alert</h3>
              </div>
              <p className="mb-4">
                The distinctive &quot;ping&quot; of a text message, performed strategically when humans are trying to
                focus on something important.
              </p>
              <div className="bg-muted rounded-md p-3 text-center">
                <p className="text-sm font-medium">PING!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="tropical-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-bold">The Cat Meow</h3>
              </div>
              <p className="mb-4">
                A surprisingly convincing cat meow that has caused confusion in multi-pet households and accusations
                between actual cats.
              </p>
              <div className="bg-muted rounded-md p-3 text-center">
                <p className="text-sm font-medium">MEOW!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="section-subheading">Share Mimi&apos;s Chatter</h3>
          <ShareButtons
            title="Mimi's Parrot Talk"
            description="Hilarious phrases, mimicry, and conversations that will leave you squawking with laughter!"
            hashtags={["MimiTalks", "ParrotChatter", "BirdConversations"]}
          />
        </div>
      </section>
    </>
  )
}
