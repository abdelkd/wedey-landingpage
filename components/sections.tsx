'use client';
import { useState } from 'react'
import { CheckIcon } from 'lucide-react'
import clsx from 'clsx'

import LottieLazyPlayer from '@/components/lottie-lazy-player'

import JSONSelectProfiles from '@/components/lottiefiles/select_profiles.json'
import JSONFlexibleSupport from '@/components/lottiefiles/flexible_support.json'
import JSONAIMatching from '@/components/lottiefiles/ai_matching.json'
import { Button } from '@/components/ui/button';

type ActiveSlides = typeof slides[number]['key']
const slides = [
  { key: 'exclusive-pool', buttonLabel: 'An Exclusive Pool of Tech Talents', description: 'Every professional is meticulously vetted and tested, ensuring they can quickly and efficiently integrate into your team.' },
  { key: 'innovative-platform', buttonLabel: 'An Innovative AI-Based Platform', description: 'Our advanced technology guarantees precise matching, simplifying the recruitment process for immediate and reliable hiring.' },
  { key: 'tech-partner', buttonLabel: 'Your Long-Term Tech Partner', description: 'We are committed to standing by your side for the long haul, offering continuous support and expertise to ensure the success of your tech projects.' },
] as const

export function Sections() {
  const [activeSlide, setActiveSlide] = useState<ActiveSlides>(slides[0].key)

  return <div className="spacey-y-10">
    <section className="flex flex-col items-center mx-auto w-fit py-8">
      <div className="flex justify-center items-center mb-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          What Is Wedey
        </h2>
      </div>
      <div className="flex flex-col items-center lg:flex-row md:gap-4 max-w-5xl mx-auto w-full px-8 md:px-2">
        <div className="flex flex-1 flex-col gap-3 justify-center space-y-3 max-w-sm w-full">
          {slides.map((slide) => (
            <button key={slide.key} onClick={() => setActiveSlide(slide.key)} className={`text-left text-lg border-b-2 w-fit ${slide.key !== activeSlide ? 'text-zinc-500' : 'border-b-black'}`}>{slide.buttonLabel}</button>
          ))}
        </div>
        <div className="flex h-96 w-86">
          {activeSlide === 'exclusive-pool' ? <LottieLazyPlayer src={JSONSelectProfiles} /> : null}
          {activeSlide === 'innovative-platform' ? <LottieLazyPlayer src={JSONFlexibleSupport} /> : null}
          {activeSlide === 'tech-partner' ? <LottieLazyPlayer src={JSONAIMatching} /> : null}
        </div>
        <div className="flex justify-center items-center max-w-[300px]">
          {slides.find((slide => slide.key === activeSlide))?.description}
        </div>
      </div>
      <div className="flex justify-ceter items-center pt-6">
        <Button className="text-lg mx-auto h-12 px-6">Get Started Today</Button>
      </div>
    </section>

    <div className='m-16' />
    <section className="flex flex-col items-around w-10/12 sm:flex sm:flex-row sm:px-8  md:w-full max-w-5xl mx-auto min-h-96">
      <div className="w-full border px-10 flex flex-col py-32 rounded-lg bg-gray-50/40 max-w-md">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">Global Tech Talent at Your Fingertips: The Wedey Promise</h2>
          <p className="text-md mt-8 text-zinc-500">Access a global pool of qualified tech talents ready to integrate into your team. Benefit from dedicated support and rigorous selection for successful and innovative collaboration.</p>
        </div>
        <ul className="mt-9 text-xl space-y-3 text-zinc-700">
          <li className="flex gap-4">
            <div className="bg-[#b2fae2] size-7 flex justify-center items-center rounded-full"><CheckIcon className="size-5" /></div>
            Unprecedented Reach
          </li>
          <li className="flex gap-4">
            <div className="bg-[#b2fae2] size-7 flex justify-center items-center rounded-full"><CheckIcon className="size-5" /></div>
            Qualified Assurance
          </li>
          <li className="flex gap-4">
            <div className="bg-[#b2fae2] size-7 flex justify-center items-center rounded-full"><CheckIcon className="size-5" /></div>
            Dedicated Support
          </li>
        </ul>
      </div>

      <div className="w-full border px-10 flex flex-col py-32 rounded-lg bg-gray-50/40">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">Mobilize Exceptional Talent Quickly</h2>
          <p className="text-md mt-5 text-zinc-500">Hire the right talent in 48 hours. Our flexible, cost-effective solutions are designed to scale your team on demand.</p>
        </div>
        <ul className="mt-9 text-xl space-y-3 text-zinc-700">
          <li className="flex gap-4">
            <div className="bg-red-300 size-7 flex justify-center items-center rounded-full"><CheckIcon className="size-5" /></div>
            Unprecedented Reach
          </li>
          <li className="flex gap-4">
            <div className="bg-red-300 size-7 flex justify-center items-center rounded-full"><CheckIcon className="size-5" /></div>
            Qualified Assurance
          </li>
          <li className="flex gap-4">
            <div className="bg-red-300 size-7 flex justify-center items-center rounded-full"><CheckIcon className="size-5" /></div>
            Dedicated Support
          </li>
        </ul>
      </div>
    </section>

    <div className='m-16' />
    <section className="mx-auto gap-7 min-h-96 bg-pink-200/70 px-4 py-28">
      <div className="flex justify-between mb-20">
        <h2 className="font-semibold text-4xl">How It Works ?</h2>
        <Button>Learn More</Button>
      </div>
      <HowItWorksSectionAnimation />
    </section>
  </div>
}

interface HowItWorksSubsection {
  title: string;
  description: string;
  lottiefilesUrl: string;
}

const howItWorksSubsection: HowItWorksSubsection[] = [
  {title: 'Define Your Needs', description: 'Use our intuitive interface to specify your needs and selection criteria, defining the ideal profile for your project.', lottiefilesUrl: ''},
  {title: 'AI Talent Matching', description: 'Let our AI-powered platform match you with the perfect tech talent in seconds, based on thousands of data points for precise results.', lottiefilesUrl: ''},
  {title: 'Interviews and Selection', description: 'Easily schedule interviews with candidates through our platform. A dedicated account manager will aid you through it.', lottiefilesUrl: ''},
  {title: 'Smooth Onboarding and Flexibility', description: 'Enjoy a 14-day trial period to evaluate the fit. Then, benefit from a seamless onboarding process and a contract that offers total flexibility.', lottiefilesUrl: ''},
];

function HowItWorksSectionAnimation() {
  const [activeSlide] = useState(0)

  return <div className='w-full grid grid-cols-1 md:grid-cols-2 border border-red-500'>
    <div>
      <ul className="border border-green-500">
        {howItWorksSubsection.map((subsection, index) => (
          <li key={subsection.title} className={clsx("flex flex-col gap-4 border-l-4 py-6 pl-5", { "border-l-peach": activeSlide === index, "border-l-white": activeSlide !== index })}>
            <span className="font-semibold text-xl text-zinc-800">{index+1}. {subsection.title}</span>
            <span>{subsection.description}</span>
            {activeSlide === index ? (
              <div className="w-full h-76 bg-green-400 md:hidden">
                <LottieLazyPlayer src={JSONSelectProfiles} />
              </div>
            ) : null}
          </li>  
        ))}
      </ul>
    </div>
  </div>
}