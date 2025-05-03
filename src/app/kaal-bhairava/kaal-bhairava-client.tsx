// src/app/kaal-bhairava/kaal-bhairava-client.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { KaalBhairavaImage } from '@/data/kaal-bhairava-images';

interface KaalBhairavaClientProps {
    images: KaalBhairavaImage[];
}

export default function KaalBhairavaClient({ images }: KaalBhairavaClientProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                loop: true, // Enable looping
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {images.map((image) => (
                    <CarouselItem key={image.id}>
                        <div className="p-1">
                            <Card className="overflow-hidden">
                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                        data-ai-hint={image.aiHint}
                                        priority={image.id <= 2} // Prioritize first couple of images
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
