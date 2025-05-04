"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DevelopmentNotice() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Check if the notice has been dismissed before
  useEffect(() => {
    const dismissed = localStorage.getItem("devNoticeDismissed")
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem("devNoticeDismissed", "true")
    setIsVisible(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  if (!isVisible) return null

  return (
    <div className="sticky top-0 z-50 w-full">
      <Alert className="rounded-none border-b-2 border-yellow-500 bg-yellow-50 text-yellow-900 shadow-md">
        <div className="container mx-auto flex items-start justify-between">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <AlertTitle className="font-bold text-yellow-800">Development Mode</AlertTitle>
              {!isMinimized && (
                <AlertDescription className="text-yellow-700">
                  <p className="mb-2">
                    This website is currently under development. The following features are not yet available:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Blog comments and user interactions</li>
                    <li>Newsletter subscription functionality</li>
                    <li>Social media sharing (links are for demonstration only)</li>
                    <li>Contact form submission</li>
                    <li>User accounts and personalization</li>
                  </ul>
                  <p className="text-sm">
                    Thank you for your understanding as we continue to improve Mimi&apos;s website!
                  </p>
                </AlertDescription>
              )}
            </div>
          </div>
          <div className="flex items-start space-x-2 ml-4 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-yellow-500 bg-yellow-100 hover:bg-yellow-200 text-yellow-800"
              onClick={toggleMinimize}
            >
              {isMinimized ? "Show Details" : "Minimize"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-yellow-500 bg-yellow-100 hover:bg-yellow-200 text-yellow-800"
              onClick={handleDismiss}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Alert>
    </div>
  )
}
