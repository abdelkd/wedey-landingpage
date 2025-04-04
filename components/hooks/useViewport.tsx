'use client'
import { useState, useEffect } from 'react';

type Viewport = {
    width?: number;
    height?: number;
    isMobile?: boolean;
}

export const useViewport = ({ width, height, isMobile }: Optional<Viewport> = { width: 0, height: 0, isMobile: true }) => {
    const [viewport, setViewport] = useState<Viewport>({ width, height, isMobile });

    const handleResize = () => {
        setViewport({ width: window.innerWidth, height: window.innerHeight, isMobile: window.innerWidth < 400 })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return viewport
}
