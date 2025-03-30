'use client';
import { useState } from 'react'

import { Button } from '@/components/ui/button';
import ExclusivePoolSVG from '@/components/svg/exclusive-pool.svg'
import InnovativePlatform from '@/components/svg/innovative-platform.svg'
import TechPartner from '@/components/svg/tech-partner.svg'

type ActiveSlides = keyof typeof slides['key']
const slides = [
    {key: 'exclusive-pool', buttonLabel: 'An Exclusive Pool of Tech Talents', svg: ExclusivePoolSVG, description: 'Every professional is meticulously vetted and tested, ensuring they can quickly and efficiently integrate into your team.'}
    {key: 'innovative-platform', buttonLabel: 'An Innovative AI-Based Platform', svg: InnovativePlatform, description: 'Our advanced technology guarantees precise matching, simplifying the recruitment process for immediate and reliable hiring.'}
    {key: 'tech-partner', buttonLabel: 'Your Long-Term Tech Partner', svg: TechPartner, description: 'We are committed to standing by your side for the long haul, offering continuous support and expertise to ensure the success of your tech projects.'}
]

export function WhatIsWedey() {
    const [activeSlide, setActiveSlide] = useState<ActiveSlides>('exclusive-pool')

    return <section className="mx-auto w-fit py-8">
      <div className="flex justify-center items-center mb-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          What Is Wedey
        </h2>
      </div>
      <div className="grid grid-cols-3 max-w-4xl mx-auto">
        <div className="flex flex-col gap-3 justify-start">
            <Button variant='ghost' className="px-0 text-lg bg-transparent">An Exclusive Pool of Tech Talents</Button>
            <Button variant='ghost' className="px-0 text-lg">An Innovative AI-Based Platform</Button>
            <Button variant='ghost' className="px-0 text-lg">Your Long-Term Tech Partner</Button>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  }