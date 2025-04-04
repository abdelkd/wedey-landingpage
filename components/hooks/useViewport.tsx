'use client'
import { useState, useEffect } from 'react';

type Viewport = {
    width?: number;
    height?: number;
    isMobile?: boolean;
}

export const useViewport = ({ width, height }: Optional<Viewport> = {}) => {
    const [viewport, setViewport] = useState<Viewport>({ width: 0, height: 0, isMobile: true });

    useEffect(() => {
        if (window === undefined) return;

        const width = window.innerWidth;

        setViewport({
            width,
            height: window.innerHeight,
            isMobile: width < 420,
        })
    }, [])

    return viewport
}