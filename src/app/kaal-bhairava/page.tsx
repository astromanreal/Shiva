'use client'; // Add 'use client' directive

import React, { useRef } from 'react'; // Import React and useRef
import Image from 'next/image';
import { getKaalBhairavaData } from '@/data/kaal-bhairava';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Clock, Bone, Sparkles, BookOpen, SquareTerminal } from 'lucide-react'; // Relevant icons
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils'; // Import the cn function
import { getAllKaalBhairavaImages } from '@/data/kaal-bhairava-images'; // Import image data
// Remove the client component import: import KaalBhairavaClient from './kaal-bhairava-client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"; // Import Carousel components
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay plugin

// Helper to render text with Devanagari font styling
const SanskritText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  // Basic check for Devanagari characters
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    <span className={cn(isDevanagari ? 'font-noto_sans_devanagari text-lg' : '', className)}>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};


export default function KaalBhairavaPage() {
  const data = getKaalBhairavaData();
  const images = getAllKaalBhairavaImages(); // Fetch image data

  // Add carousel logic from the client component
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-5xl mx-auto space-y-12 p-4">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 rounded-lg overflow-hidden border border-border shadow-lg">
        <div className="absolute inset-0 z-0 opacity-25"> {/* Increased opacity from 15 to 25 */}
             {/* Updated background image with provided link */}
             <Image
                src="https://drive.google.com/uc?export=view&id=1LTj25wPQ8WoV53LgF6ySVY0qVVX8Ub1R" // Updated image link
                alt="Kaal Bhairava Representation" // Updated alt text
                fill={true}
                style={{objectFit: 'cover'}}
                className="filter blur-sm scale-110" // Added slight scale and blur
                data-ai-hint="kaal bhairava fierce deity dark background" // Updated hint
                priority // Prioritize loading
             />
             {/* Optional gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-4">
            <SanskritText text={data.title} className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-2 font-noto_sans_devanagari" />
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary mb-4">
              {data.title.split('(')[0].trim()} - The Lord of Time & Fearlessness
            </h1>
             {/* Updated description using the new data */}
             <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
              {data.description}
            </p>
            <div className="flex justify-center pt-4">
                 <Badge variant="destructive" className="text-lg px-4 py-1">Guardian of Kashi</Badge>
            </div>
        </div>
      </section>

       {/* Image Slider Section (Now integrated) */}
       <section className="w-full max-w-3xl mx-auto">
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
       </section>


      {/* Core Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bone className="h-5 w-5 text-primary"/> Symbolism</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {data.symbolism.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Significance</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {data.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Worship and Mantra */}
       <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary"/> Worship & Mantra</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <h3 className="font-semibold mb-1 text-foreground/90">Common Worship Practices:</h3>
                 <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {data.worship.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
           <div>
             <h3 className="font-semibold mb-1 text-foreground/90">Primary Mantra:</h3>
             <div className="p-3 border rounded-md bg-secondary/30">
                 <SanskritText text={data.mantra} className="text-xl font-semibold" />
             </div>
           </div>
        </CardContent>
      </Card>


      {/* Kaal Bhairava Ashtakam */}
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-primary"/> {data.ashtakamTitle}</CardTitle>
          <CardDescription>{data.ashtakamIntro}</CardDescription>
        </CardHeader>
        <CardContent>
           <Accordion type="single" collapsible className="w-full">
             {data.ashtakam.map((verse) => (
               <AccordionItem key={verse.verse} value={`item-${verse.verse}`}>
                 <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-primary mr-2">Verse {verse.verse}</span>
                 </AccordionTrigger>
                 <AccordionContent className="space-y-4 pt-2">
                    <div className="p-4 border rounded-md bg-secondary/20">
                       <SanskritText text={verse.sanskrit} className="text-lg leading-relaxed font-noto_sans_devanagari"/>
                    </div>
                    {verse.meaning && (
                         <div className="text-muted-foreground text-sm italic p-2 border-l-4 border-primary/50 bg-muted/30 rounded-r-md">
                             <strong className="not-italic text-foreground/80">Meaning:</strong> {verse.meaning}
                         </div>
                    )}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
