"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Image } from "@chakra-ui/react";

interface LazyImageProps {
    src: string;
    alt: string;
}

export default function LazyImage({ src, alt }: LazyImageProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Box ref={ref} position="relative" height="400px" width="100%">
            {isVisible && (
                <>
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        backgroundImage={`url(${src})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        filter="blur(15px)"
                        transform="scale(1.1)"
                        zIndex={0}
                    />
                    <Image
                        src={src}
                        alt={alt}
                        height="100%"
                        width="100%"
                        objectFit="contain"
                        position="relative"
                        zIndex={1}
                    />
                </>
            )}
        </Box>
    );
}