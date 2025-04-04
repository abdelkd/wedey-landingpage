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

  if (!isMounted) return <Skeleton className="h-full w-full" />;

  return <Suspense fallback={<Skeleton className="h-full w-full" />}>
    <LazyPlayer
      className={props.className ?? ''}
      src={src}
      // @ts-expect-error TODO
      width={isMobile && width ? width - 10 : width ?? 320}
      autoplay
      loop
      {...props}
    ></LazyPlayer>
  </Suspense>
}
