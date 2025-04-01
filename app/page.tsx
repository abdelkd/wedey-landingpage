
import { Suspense, lazy } from 'react'
import { Button } from '@/components/ui/button'

import Navbar from '@/components/navbar'
import { Sections } from '@/components/sections'

const YoutubeIframe = lazy(() => import('@/components/youtube-iframe'))

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full min-h-full ">
        <div className="mx-auto w-fit flex flex-col items-center pt-20">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Build Your Remote IT Dream Team
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-slate-800">
            Empower your business with exceptional IT talent and cutting-edge expertise.
          </p>
          <Button className="text-lg px-6 py-6 mt-10">Get Started</Button>
        </div>
        <div className="mx-auto w-fit mt-14 border border-black my-16">
          <Suspense fallback={<p>loading...</p>}>
            <YoutubeIframe />
          </Suspense>
        </div>
        <Sections />
      </main>
    </div>
  );
}
