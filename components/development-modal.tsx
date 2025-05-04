"use client"

import { useState, useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function DevelopmentModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the modal has been shown before
    const modalShown = localStorage.getItem("devModalShown")
    if (!modalShown) {
      // Show modal after a short delay to allow page to load
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem("devModalShown", "true")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-yellow-800">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
            Website Under Development
          </DialogTitle>
          <DialogDescription className="text-yellow-700">
            Welcome to Mimi&apos;s Tropical Paradise! Please note that this site is still in development.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
          <h4 className="font-medium mb-2 text-yellow-800">The following features are not yet functional:</h4>
          <ul className="list-disc pl-5 space-y-1 text-yellow-700">
            <li>Blog comments and user interactions</li>
            <li>Newsletter subscription functionality</li>
            <li>Social media sharing (links are for demonstration only)</li>
            <li>Contact form submission</li>
            <li>User accounts and personalization</li>
            <li>Image gallery lightbox functionality</li>
            <li>Audio playback for parrot sounds</li>
          </ul>
        </div>
        <DialogFooter className="sm:justify-between">
          <div className="text-sm text-muted-foreground">This notice will appear once per visit.</div>
          <Button onClick={handleClose} className="bg-yellow-500 hover:bg-yellow-600 text-white">
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
