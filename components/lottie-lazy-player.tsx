'use client'
import { lazy, Suspense, useState, useEffect } from 'react';

import { useViewport } from "@/components/hooks/useViewport"
import { Skeleton } from "@/components/ui/skeleton";
import type { IPlayerProps } from '@lottiefiles/react-lottie-player'

const LazyPlayer = lazy(() => import('@/components/lottie-player'))

export default function LottieLazyPlayer({ src, ...props }: IPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { width, isMobile } = useViewport();
  useEffect(() => { setIsMounted(true) }, [])

  if (!isMounted) return <Skeleton className="h-[375px] max-w-[372px] min-w-[400px] w-full" />;

  return <Suspense fallback={<Skeleton className="h-[375px] max-w-[372px] min-w-[400px] w-full" />}>
    <LazyPlayer
      className='h-[375px] max-w-[372px] min-w-[280px] w-full'
      src={src}
      width={isMobile ? width - 10 : width}
      autoplay
      loop
      {...props}
    ></LazyPlayer>
  </Suspense>
}