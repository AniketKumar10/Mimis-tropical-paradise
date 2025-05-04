"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"

interface ShareButtonsProps {
  title: string
  description?: string
  hashtags?: string[]
}

export default function ShareButtons({ title, description, hashtags = [] }: ShareButtonsProps) {
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
      duration: 3000,
    })
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = description ? encodeURIComponent(description) : ""
  const encodedHashtags = hashtags.join(",")

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        variant="outline"
        className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")}
      >
        <Facebook className="h-4 w-4 mr-2" />
        Share
      </Button>

      <Button
        size="sm"
        variant="outline"
        className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`,
            "_blank",
          )
        }
      >
        <Twitter className="h-4 w-4 mr-2" />
        Tweet
      </Button>

      <Button
        size="sm"
        variant="outline"
        className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90"
        onClick={() =>
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
            "_blank",
          )
        }
      >
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>

      <Button
        size="sm"
        variant="outline"
        className="bg-[#D44638] text-white hover:bg-[#D44638]/90"
        onClick={() =>
          window.open(`mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`, "_blank")
        }
      >
        <Mail className="h-4 w-4 mr-2" />
        Email
      </Button>

      <Button size="sm" variant="outline" onClick={handleCopyLink}>
        <LinkIcon className="h-4 w-4 mr-2" />
        Copy Link
      </Button>
    </div>
  )
}
