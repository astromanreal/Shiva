
'use client'; 

import React, { useRef } from 'react'; 
import Image from 'next/image';
import { getKaalBhairavaData } from '@/data/kaal-bhairava';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Clock, Bone, Sparkles, BookOpen, SquareTerminal, Skull, PawPrint, Info, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { getAllKaalBhairavaImages } from '@/data/kaal-bhairava-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';


// Helper to render text with Devanagari font styling
const SanskritText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
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

// Custom Trident Icon SVG Component
const TridentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22V8" /><path d="M5 8h14" /><path d="M5 8a7 7 0 0 1 7-7 7 7 0 0 1 7 7" /><path d="M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7" /><path d="M5 8l-1 -1" /><path d="M19 8l1 -1" />
    </svg>
);


export default function KaalBhairavaPage() {
  const data = getKaalBhairavaData();
  const images = getAllKaalBhairavaImages();

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="space-y-12">
      {/* --- New Hero Section --- */}
      <section className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://drive.google.com/uc?export=view&id=1LTj25wPQ8WoV53LgF6ySVY0qVVX8Ub1R"
            alt="Kaal Bhairava fierce depiction"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-50"
            priority
            data-ai-hint="kaal bhairava fierce deity dark background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>

        <div className="relative z-10 p-4 flex flex-col items-center">
           <SanskritText text="काल भैरव" className="text-6xl md:text-8xl font-bold text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_hsl(var(--primary))]" />
           <h1 className="mt-2 text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            Kaal Bhairava – Lord of Time & Fearlessness
           </h1>
           <p className="mt-4 max-w-xl text-lg text-white/80 italic">
            “The fierce protector of Kashi, who dissolves fear and ego.”
           </p>
           
           {/* Quick Symbol Icons */}
           <div className="mt-6 flex items-center space-x-6 text-sm text-white/90">
             <div className="flex flex-col items-center gap-1">
                <PawPrint className="h-6 w-6"/>
                <span>Vahana</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <Clock className="h-6 w-6"/>
                <span>Time</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <TridentIcon className="h-6 w-6"/>
                <span>Weapon</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <Skull className="h-6 w-6"/>
                <span>Detachment</span>
             </div>
           </div>
        </div>
        
        {/* Floating Info Button */}
        <div className="absolute bottom-4 right-4 z-20">
          <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full bg-background/50 border-primary/50 text-primary-foreground backdrop-blur-sm">
                    <Info className="h-5 w-5"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-4 text-sm" side="top" align="end">
                <div className="space-y-2">
                    <p><strong>Abode:</strong> Kashi</p>
                    <p><strong>Mantra:</strong> Om Kalabhairavaya Namah</p>
                    <p><strong>Special Day:</strong> Bhairava Ashtami</p>
                </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Scroll Down Indicator */}
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            <span className="text-xs text-white/70">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce text-white/80"/>
        </div>
      </section>

       {/* Image Slider Section */}
       <section className="w-full max-w-3xl mx-auto">
            <Carousel
                plugins={[plugin.current]}
                opts={{ loop: true }}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {(images || []).map((image) => (
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
                                            priority={image.id <= 2}
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
              {(data.symbolism || []).map((item, index) => (
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
              {(data.significance || []).map((point, index) => (
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
                    {(data.worship || []).map((item, index) => (
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
           <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
             {(data.ashtakam || []).map((verse) => (
               <AccordionItem key={verse.verse} value={`item-${verse.verse}`}>
                 <AccordionTrigger className="text-left hover:no-underline text-lg">
                    <span className="font-semibold text-primary mr-2">Verse {verse.verse}</span>
                 </AccordionTrigger>
                 <AccordionContent className="space-y-4 pt-2 pb-4">
                    <div className="p-4 border rounded-md bg-secondary/20">
                       <SanskritText text={verse.sanskrit} className="text-2xl leading-relaxed font-noto_sans_devanagari text-center block"/>
                    </div>
                    {verse.meaning && (
                         <div className="text-muted-foreground text-sm italic p-3 border-l-4 border-primary/50 bg-muted/30 rounded-r-md">
                             <strong className="not-italic text-foreground/80 font-medium block mb-1">Meaning:</strong>
                             {verse.meaning}
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
