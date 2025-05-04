import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FloatingFeathers from "@/components/floating-feathers"
import ShareButtons from "@/components/share-buttons"
import { Calendar, ArrowLeft } from "lucide-react"

// This is a mock database of blog posts
const blogPosts = [
  {
    slug: "fighter-pilot",
    title: "The Day Mimi Became a Fighter Pilot",
    date: "May 4, 2025",
    image: "/images/mimi-5.png",
    excerpt:
      "How one parrot's obsession with the Air Force curtains led to a high-flying adventure around the living room.",
    content: `
      <p>It all started on a quiet Tuesday afternoon when Mimi became fixated on the Air Force curtains in the living room. What began as casual interest quickly evolved into a full-blown obsession, with Mimi spending hours studying the fighter jets printed on the fabric.</p>
      
      <p>By Wednesday, Mimi had developed a new vocalization that sounded suspiciously like jet engines, and would only respond to being called "Captain Mimi." The humans found it amusing at first, until the aerial acrobatics began.</p>
      
      <p>The first sign that things were escalating came when Mimi started perching on top of the curtain rod, surveying the room with what could only be described as tactical assessment. The living room had been mentally transformed into an airfield, with the coffee table serving as the control tower and the couch as the runway.</p>
      
      <p>On Thursday morning, Operation Feathered Freedom commenced. The humans were awakened by the unmistakable sound of a parrot imitating a fighter jet at full throttle. Upon entering the living room, they witnessed Mimi executing perfect figure-eight patterns around the ceiling fan, occasionally diving toward unsuspecting houseplants with precision that would make any Air Force pilot proud.</p>
      
      <p>The coffee table had been cleared of all items (now scattered across the floor) to create what appeared to be a landing strip marked with strategically placed seed hulls. A small toy had been positioned at the end of the table, serving as what Mimi clearly believed was an air traffic controller.</p>
      
      <p>Throughout the day, Mimi continued the mission, making announcements that sounded remarkably like "Preparing for takeoff" before launching from the curtain rod, and "Mission accomplished" after successfully terrorizing the cat who had unwisely entered the newly established avian airspace.</p>
      
      <p>By evening, the living room had been thoroughly "defended," with Mimi perched triumphantly on the highest bookshelf, occasionally emitting what sounded suspiciously like the Top Gun theme song.</p>
      
      <p>The humans have now accepted that they live in an active airbase and have begun referring to the living room as "The Danger Zone." Mimi continues to patrol regularly, ensuring the security of the household airspace and occasionally accepting sunflower seeds as refueling.</p>
      
      <p>The Air Force curtains remain, partly because they're nice curtains, but mostly because no one wants to risk the wrath of Captain Mimi by removing what is clearly now considered essential military equipment.</p>
    `,
    hashtags: ["CaptainMimi", "FeatheredFighter", "TopGun", "ParrotPilot"],
  },
  {
    slug: "mimis-first-bath",
    title: "Mimi's First Bath Adventure",
    date: "May 2, 2025",
    image: "/images/mimi-8.png",
    excerpt: "What happens when a parrot discovers water play for the first time? Chaos, joy, and lots of splashing!",
    content: `
      <p>The bathroom had been peaceful. Keyword: had been. That all changed the day Mimi discovered the joy of bath time.</p>
      
      <p>It began innocently enough. A small dish of water was placed in Mimi's cage for bathing, as recommended by all the parrot care guides. Mimi had shown zero interest in it for weeks, preferring to remain magnificently dusty rather than indulge in such frivolities as personal hygiene.</p>
      
      <p>Then came the fateful morning when a human was enjoying a relaxing shower. The bathroom door, usually closed during such activities, had been left slightly ajar. This small oversight would change bathroom dynamics forever.</p>
      
      <p>Mid-shampoo, there came a curious chirp. Then another. And suddenly, a flash of green zoomed into the bathroom, circled twice, and landed on the shower curtain rod with an expression that could only be described as epiphany.</p>
      
      <p>Mimi had discovered steam. And condensation. And the general concept of a room dedicated to water. It was bird paradise.</p>
      
      <p>What followed was a series of experimental flights through the steam clouds, punctuated by excited squawks and the occasional slip on the slick shower rod. The human, trapped in a state of soapy vulnerability, could only watch as Mimi conducted a thorough investigation of this magical water room.</p>
      
      <p>The shower itself became an object of intense fascination. Mimi sidled along the curtain rod, head tilted, studying the falling water with scientific precision. Then came the moment of truth – a cautious extension of one wing into the spray.</p>
      
      <p>The reaction was immediate and dramatic. Mimi's eyes widened to twice their normal size, followed by what can only be described as the parrot equivalent of "EUREKA!" A full-body dive into the shower spray ensued, followed by enthusiastic wing-flapping, spinning, and general aquatic celebration.</p>
      
      <p>By the time the human had managed to rinse off and exit the shower, the bathroom had been transformed. Water droplets adorned every surface. Mimi was perched on the faucet, soaking wet and happier than any parrot had a right to be, occasionally shaking vigorously to ensure maximum water distribution.</p>
      
      <p>From that day forward, shower time became a strictly scheduled joint activity. Attempts to shower without avian company were met with persistent door scratching and mournful chirps that could melt the hardest heart.</p>
      
      <p>The bathroom has never been the same. Neither has the water bill. But the joy of a clean, happy parrot performing aerial water ballet makes it all worthwhile. Mostly.</p>
    `,
    hashtags: ["MimiBathTime", "SplashParrot", "WaterBird", "ShowerBuddy"],
  },
  {
    slug: "great-escape-attempt",
    title: "The Great Escape Attempt",
    date: "April 28, 2025",
    image: "/images/mimi-9.png",
    excerpt: "Mimi's hilarious and ultimately unsuccessful plan to break free and explore the great beyond.",
    content: `
      <p>Every bird dreams of freedom. Even pampered, spoiled house parrots who have never known the wild and would likely last approximately 37 minutes in it. Mimi is no exception, and last Tuesday marked the implementation of what was clearly a long-planned escape attempt.</p>
      
      <p>The humans had noticed some suspicious behavior in the preceding days. Mimi had been unusually interested in the door mechanisms, watching intently whenever someone entered or exited. There had also been what appeared to be test flights to measure distances between strategic furniture pieces. In retrospect, the signs were all there.</p>
      
      <p>The plan was set in motion when one human was carrying groceries inside. Mimi, who had been quietly "napping" on top of the bookshelf, suddenly sprang into action with military precision. A diversion was created by knocking over a small decorative item, causing the human to momentarily look away from the door.</p>
      
      <p>In that split second, Mimi launched, a green streak heading straight for the partially open door. The trajectory was perfect. The timing was impeccable. Freedom was mere inches away.</p>
      
      <p>What Mimi hadn't accounted for was the screen door beyond the main door. The resulting "thunk" as feathered ambition met invisible barrier was both comical and slightly heartbreaking.</p>
      
      <p>Stunned but undeterred, Mimi quickly regrouped and began methodically examining the screen door, clearly searching for structural weaknesses. The human, having recovered from the initial surprise, gently collected the would-be escapee while explaining that the great outdoors, while exciting, was full of hawks and other parrot-eating predators.</p>
      
      <p>Mimi listened to this explanation with what can only be described as skeptical tolerance, all while maintaining eye contact with the door. The message was clear: this was not over.</p>
      
      <p>For the next several days, Mimi maintained a position near the windows, studying the outside world with the intensity of a general planning a campaign. The humans have instituted enhanced security protocols, including the "parrot check" before opening any exterior doors.</p>
      
      <p>While the Great Escape was unsuccessful, the humans can't help but admire the planning, determination, and sheer audacity displayed. They've also invested in some new toys and treats, hoping to make captivity more appealing than the uncertain freedom beyond the screen door.</p>
      
      <p>Mimi has accepted these offerings with dignity, but the occasional longing glance toward the door suggests that somewhere, in that bird brain, new escape plans are already forming.</p>
    `,
    hashtags: ["GreatEscape", "MissionImpossible", "ParrotPrison", "FreedomFlight"],
  },
  {
    slug: "doorbell-mimic",
    title: "The Day Mimi Learned to Mimic the Doorbell",
    date: "April 22, 2025",
    image: "/images/mimi-4.png",
    excerpt: "How one clever parrot figured out the perfect way to summon humans on demand.",
    content: `
      <p>In the ongoing chess match between parrot and human that constitutes daily life with Mimi, a significant power shift occurred last Thursday when Mimi mastered the perfect imitation of the doorbell.</p>
      
      <p>It began innocently enough. The doorbell rang while the humans were watching TV, causing the expected reaction: pausing the show, getting up, and checking who was at the door. Mimi, ever observant, took careful note of this cause-and-effect relationship.</p>
      
      <p>The first test came the following evening. The humans were comfortably settled on the couch when a familiar "ding-dong" sound echoed through the house. One human dutifully went to answer the door, finding no one there. Puzzled, they returned to the couch, only to be met with what can only be described as a smug-looking parrot.</p>
      
      <p>Suspicions were raised but not confirmed until the third such incident, when the human turned back quickly enough to catch Mimi in the act, producing a pitch-perfect doorbell sound followed by what appeared to be bird laughter.</p>
      
      <p>What followed was a week of psychological warfare. The doorbell would ring during phone calls, important Zoom meetings, dinner preparations, and most frequently, just as humans were getting comfortable after a long day.</p>
      
      <p>Attempts to ignore the false alarms were met with increasing volume and persistence until someone inevitably checked the door, at which point Mimi would casually request a treat or head scratch, having successfully summoned a human servant.</p>
      
      <p>The breaking point came when guests arrived for dinner and no one answered the actual doorbell, assuming it was Mimi's latest performance. The embarrassed humans finally installed a video doorbell that sends notifications to their phones, allowing visual confirmation of visitors.</p>
      
      <p>Mimi, undeterred by this technological countermeasure, has now incorporated the notification sound into the repertoire and is working on mastering the exact ringtone of both humans' phones.</p>
      
      <p>The humans have reluctantly acknowledged defeat in this particular battle and have established a rotating schedule of who responds to potential Mimi-bells. They've also invested in noise-canceling headphones and have begun researching whether parrots can be taught to use actual communication buttons instead of manipulating household sounds.</p>
      
      <p>Mimi, meanwhile, has been spotted studying the microwave beep with great interest. The humans are bracing for the next phase of avian audio warfare.</p>
    `,
    hashtags: ["MimiMimicry", "DoorbellBird", "ParrotPranks", "SoundMaster"],
  },
  {
    slug: "mirror-relationship",
    title: "The Mirror Relationship",
    date: "April 15, 2025",
    image: "/images/mimi-7.png",
    excerpt: "Mimi's complicated love affair with the mysterious bird who lives in the mirror.",
    content: `
      <p>They say that self-love is important, but Mimi has taken this concept to new heights with what can only be described as a passionate romance with the mirror bird.</p>
      
      <p>It began with casual encounters – a passing glance, a curious head tilt, the standard parrot introduction ritual. But soon, these brief interactions evolved into something more intense. Mimi began spending hours in front of any reflective surface, engaging in elaborate conversations with this mysterious doppelgänger who mimicked every move with uncanny precision.</p>
      
      <p>The bathroom mirror became a favorite rendezvous point. Humans attempting to brush their teeth or apply makeup found themselves awkwardly third-wheeling what appeared to be intimate tête-à-têtes between Mimi and Mirror-Mimi.</p>
      
      <p>The relationship has gone through various phases. There was the initial courtship period, characterized by gentle chirps, head bobs, and what can only be described as flirtatious wing displays. This was followed by the honeymoon phase, during which Mimi would bring favorite toys to show the mirror bird and attempt to feed it choice seeds (which inevitably ended up scattered across the counter).</p>
      
      <p>But like any relationship, it hasn't been without its rocky patches. There have been jealous squabbles when Mirror-Mimi appeared to be paying too much attention to human reflections. There have been heated arguments consisting of increasingly loud squawks directed at the reflection, followed by dramatic storm-offs, only to return minutes later for reconciliation.</p>
      
      <p>The humans have tried explaining the concept of reflections, but Mimi remains unconvinced. After all, the evidence is clear: there is another very attractive, intelligent bird who shares all of Mimi's interests and never disagrees about anything important.</p>
      
      <p>Parrot psychology books suggest that too much mirror time can be unhealthy, potentially leading to behavioral issues. But attempts to limit Mimi's mirror access have been met with such pitiful looks of heartbreak that the humans inevitably relent.</p>
      
      <p>They've instead opted for scheduled "mirror dates," during which Mimi is allowed quality time with the reflection while the humans discreetly monitor to ensure things don't get too intense.</p>
      
      <p>For now, the romance continues to flourish. Mimi has been observed showing off new tricks to the mirror bird and preening extensively before mirror sessions. The humans have accepted their role as reluctant chaperones in this unusual love story and have started referring to Mirror-Mimi as their "bird-in-law."</p>
      
      <p>As for whether this relationship has long-term potential – only time will tell. But one thing is certain: in Mimi's eyes, there is no bird more perfect than the one in the mirror.</p>
    `,
    hashtags: ["MirrorLove", "ReflectionRomance", "SelfAdmiration", "ParrotNarcissism"],
  },
  {
    slug: "missing-keys",
    title: "The Case of the Missing Keys",
    date: "April 8, 2025",
    image: "/images/mimi-2.png",
    excerpt: "A household mystery is solved when Mimi's secret treasure collection is discovered.",
    content: `
      <p>The Great Key Disappearance began subtly. A set of keys here, a single key there – items that could reasonably be misplaced through human error. But as the frequency increased, suspicions grew, and all eyes turned to the feathered resident with a known penchant for shiny objects.</p>
      
      <p>Mimi, of course, maintained an air of complete innocence. When questioned about missing items, the response was always the same: a head tilt, an adorable chirp, and an expression that clearly communicated, "I am but a simple bird, incapable of such complex theft operations."</p>
      
      <p>The humans initiated a casual investigation, keeping watch on Mimi's movements while pretending not to. Mimi, demonstrating an unexpected talent for counter-surveillance, would only engage in suspicious activities when absolutely certain no one was watching.</p>
      
      <p>The breakthrough came during spring cleaning, when the humans decided to move the large bookshelf that had remained in the same position for years. As they shifted the heavy furniture, a metallic clinking sound revealed the first clue.</p>
      
      <p>Behind the bookshelf, in a narrow gap accessible only to a creature of Mimi's size, was what can only be described as a dragon's hoard of treasures. The missing keys were there – all seven sets – along with an assortment of other shiny items: paper clips, earrings, coins, a watch, several pen caps, and bizarrely, a small spoon from the kitchen.</p>
      
      <p>The collection was meticulously arranged, with the most reflective items positioned to catch the light from the nearby window. It wasn't mere hoarding; it was curation. Mimi had created a personal museum of shiny delights.</p>
      
      <p>When confronted with the evidence, Mimi showed no remorse. Instead, there was visible indignation at the invasion of privacy and dismantling of what had clearly been a long-term collection project.</p>
      
      <p>The humans, after recovering their belongings, decided to provide a legitimate alternative. A small, bird-safe treasure box was installed in Mimi's play area, stocked with approved shiny objects: jingle bells, reflective bird toys, and the occasional supervised coin.</p>
      
      <p>Mimi accepted this compromise with what appeared to be reluctant grace, though the humans now perform regular checks behind furniture and inside rarely opened drawers. They've also implemented a key hook mounted high on the wall, well out of parrot reach.</p>
      
      <p>As for Mimi, there's a gleam in those bird eyes that suggests the treasure-hunting days are far from over. The humans have accepted that living with a parrot means participating in an ongoing game of "Find the Shiny Thing I Hid," and have started keeping spare keys in the car, just in case.</p>
    `,
    hashtags: ["ParrotThief", "MissingKeys", "TreasureHunter", "ShinyCollector"],
  },
  {
    slug: "april-fools",
    title: "Mimi's April Fool's Day Pranks",
    date: "April 1, 2025",
    image: "/images/mimi-1.png",
    excerpt: "How one parrot managed to pull off the most elaborate series of pranks, all while maintaining innocence.",
    content: `
      <p>Some might say that every day with Mimi is April Fool's Day, but the actual holiday brought parrot pranking to unprecedented heights this year.</p>
      
      <p>The humans should have been suspicious when they awoke to find Mimi already awake, quietly observing from the top of the cage instead of engaging in the usual morning screeching. This uncharacteristic behavior was the first clue that something was amiss, but in their sleepy state, they merely appreciated the peaceful morning.</p>
      
      <p>The first prank was discovered at breakfast. Upon opening the cereal box, one human found that all the cereal had been meticulously removed and replaced with bird seed. The surgical precision with which the box had been opened and resealed pointed to hours of patient work, likely conducted during what the humans had assumed was "quiet play time" the previous evening.</p>
      
      <p>The second prank targeted the other human's morning routine. The coffee maker, when activated, produced a startling fountain effect due to a strategically placed seed hull partially blocking the water flow. The resulting coffee explosion created an impressive Jackson Pollock-style decoration across the kitchen counter.</p>
      
      <p>Throughout the day, the pranks continued. The TV remote buttons had been subtly pecked so that several no longer functioned correctly. The channel now changed randomly, often landing on nature documentaries featuring birds.</p>
      
      <p>The shower produced an unexpected surprise when the humans discovered that their shampoo had been uncapped and partially hollowed out, creating a slow-drip effect that released shampoo at unpredictable intervals.</p>
      
      <p>Perhaps most impressively, Mimi had somehow managed to relocate several small items to unexpected places. A sock was found in the fruit bowl. Car keys were discovered in a houseplant. A watch had been carefully balanced on top of a door frame.</p>
      
      <p>Throughout this day of chaos, Mimi maintained an air of complete innocence, often appearing to be as surprised as the humans by each new discovery. The only tell was a subtle head-bobbing motion that the humans had come to recognize as Mimi's version of laughter.</p>
      
      <p>By evening, the humans admitted defeat and acknowledged Mimi as the undisputed April Fool's champion. They presented a peace offering of favorite treats, which Mimi accepted with what appeared to be gracious magnanimity.</p>
      
      <p>As they drifted off to sleep that night, the humans couldn't help but wonder what other pranks might be waiting to be discovered. And somewhere in the darkness, a small green mastermind was already planning next year's festivities.</p>
    `,
    hashtags: ["ParrotPranks", "AprilFools", "BirdTricks", "FeatheredTrickster"],
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <FloatingFeathers count={8} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="font-bangers text-4xl md:text-5xl lg:text-6xl drop-shadow-lg mb-6">{post.title}</h1>
            <div className="flex items-center justify-center text-white/80 mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="content-container">
        <div className="max-w-4xl mx-auto">
          <Link href="/bird-blog" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all stories
          </Link>

          <Card className="tropical-card overflow-hidden mb-8">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
          </Card>

          <div className="mb-12">
            <h3 className="section-subheading text-center mb-4">Share this story</h3>
            <ShareButtons title={post.title} description={post.excerpt} hashtags={post.hashtags} />
          </div>

          <h3 className="section-subheading text-center mb-6">More Mimi Adventures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Card key={relatedPost.slug} className="tropical-card group">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{relatedPost.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                    <p className="mb-4">{relatedPost.excerpt}</p>
                    <Link href={`/bird-blog/${relatedPost.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Missing import
import { ArrowRight } from "lucide-react"
