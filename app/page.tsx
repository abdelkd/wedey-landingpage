'use client'
import { Suspense, lazy, useState } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

import Navbar from '@/components/navbar'
import { Sections } from '@/components/sections'

const YoutubeIframe = lazy(() => import('@/components/youtube-iframe'))

export default function Home() {
  const [isYoutubeLoaded, setIsYoutubeLoaded] = useState(false)
  const backgroundStyle = {
    backgroundImage: 'url("https://i.ytimg.com/vi_webp/Xpp4Y7ZYcak/hqdefault.webp")',
    backgroundSize: 'cover', // Optional: Adjust how the image is sized
  };

  return (
    <div>
      <Navbar />
      <main className="w-full min-h-full ">
        <div className="mx-auto w-fit flex flex-col items-center pt-20 px-3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Build Your Remote IT Dream Team
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-slate-800">
            Empower your business with exceptional IT talent and cutting-edge expertise.
          </p>
          <Button className="text-lg px-6 py-6 mt-10">Get Started</Button>
        </div>
        <div className="mt-14 border border-black my-16 w-10/12 mx-auto sm:w-full sm:max-w-xl min-h-96 flex">
          {isYoutubeLoaded ? 
            <Suspense fallback={<Skeleton className="w-full" />}>
              <YoutubeIframe />
            </Suspense> : 
            <div 
              className='w-full min-h-full flex justify-center items-center' 
              style={backgroundStyle}>
              
              <Button className="absolute flex justify-center items-center p-4 rounded-full size-14 bg-zinc-900/80" onClick={() => setIsYoutubeLoaded(true)}>
                <Play className="size-8" />
              </Button>
            </div>
          }
        </div>
        <Sections />
      </main>
    </div>
  );
}
