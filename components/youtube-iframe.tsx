'use client'
import { useViewport } from "@/components/hooks/useViewport"

export default function YoutubeIframe() {
  const { width, isMobile } = useViewport()
  return <iframe 
    width={isMobile ? 10 : width} 
    height="378" 
    src="https://www.youtube.com/embed/Xpp4Y7ZYcak?si=LYMMNTRFZ8k-XP4r" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full"></iframe>
}