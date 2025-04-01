'use client'
import { lazy, Suspense, useState, useEffect } from 'react';

import { Skeleton } from "@/components/ui/skeleton";
import type { IPlayerProps } from '@lottiefiles/react-lottie-player'

const LazyPlayer = lazy(() => import('@/components/lottie-player'))

export default function LottieLazyPlayer({ src, ...props }: IPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <Skeleton className="h-[375px] w-[372px]" />;

  return <Suspense fallback={<Skeleton className="h-[375px] w-[372px]" />}>
    <LazyPlayer
      className='h-[375px] w-[372px]'
      src={src}
      autoplay
      loop
      {...props}
    ></LazyPlayer>
  </Suspense>
}