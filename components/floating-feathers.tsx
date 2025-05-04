"use client"

import { useEffect, useState } from "react"

interface Feather {
  id: number
  left: string
  delay: string
  duration: string
  color: string
  rotation: string
}

export default function FloatingFeathers({ count = 10 }: { count?: number }) {
  const [feathers, setFeathers] = useState<Feather[]>([])

  useEffect(() => {
    const colors = ["#34d399", "#60a5fa", "#fbbf24", "#f87171"]
    const newFeathers: Feather[] = []

    for (let i = 0; i < count; i++) {
      newFeathers.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${15 + Math.random() * 15}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: `${Math.random() * 360}deg`,
      })
    }

    setFeathers(newFeathers)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {feathers.map((feather) => (
        <div
          key={feather.id}
          className="feather"
          style={{
            left: feather.left,
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            filter: `hue-rotate(${feather.rotation})`,
            top: "-40px",
          }}
        />
      ))}
    </div>
  )
}
