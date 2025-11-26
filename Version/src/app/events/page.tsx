
'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllEvents, Event, EventCategory } from '@/data/events';
import { ArrowRight, BookOpen, Users, CalendarIcon, Sparkles, Shield, Heart, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

// --- Event Card Component ---
const EventCard = ({ event }: { event: Event }) => (
  <Link href={`/events/${event.id}`} className="block group">
    <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-primary/50 bg-card/80 backdrop-blur-sm overflow-hidden">
      {(event.image || event.aiHint) && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={typeof event.image === 'string' ? event.image : `https://placehold.co/400x225.png`}
            alt={event.title}
            width={400}
            height={225}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={!event.image ? event.aiHint : event.title.toLowerCase()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}
      <CardHeader className="p-4">
        <CardTitle className="text-xl text-primary font-bold">{event.title}</CardTitle>
        <div className="flex flex-wrap gap-1 pt-2">
            {event.keyFigures.slice(0, 2).map(figure => (
                <Badge key={figure} variant="secondary" className="text-xs">{figure}</Badge>
            ))}
             {event.keyFigures.length > 2 && <Badge variant="outline" className="text-xs">+{event.keyFigures.length - 2} more</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between p-4 pt-0">
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 h-[60px]">{event.description}</CardDescription>
        <div className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-auto">
          Explore Leela <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

// --- Main Page Component ---
export default function EventsPage() {
  const allEvents = useMemo(() => getAllEvents(), []);
  const [activeTab, setActiveTab] = useState<EventCategory | 'all'>('all');

  const filteredEvents = useMemo(() => {
    if (activeTab === 'all') return allEvents;
    return allEvents.filter(event => event.category === activeTab);
  }, [activeTab, allEvents]);

  const featuredEvents = useMemo(() => {
    const featuredIds = ["ananda-tandava", "shivas-marriage-with-parvati", "ganga-avatarana"];
    return allEvents.filter(event => featuredIds.includes(event.id));
  }, [allEvents]);

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const eventCategories: { value: EventCategory | 'all', label: string, icon: React.ElementType }[] = [
    { value: 'all', label: 'All Leelas', icon: Sparkles },
    { value: 'Fierce Manifestations', label: 'Fierce Manifestations', icon: Zap },
    { value: 'Cosmic Balance', label: 'Cosmic Balance', icon: Shield },
    { value: 'Divine Union & Family', label: 'Divine Union & Family', icon: Heart },
    { value: 'Tests & Blessings', label: 'Tests & Blessings', icon: BookOpen },
  ];

  return (
    <div className="space-y-16">
      {/* 1. Divine Introduction Section */}
      <section className="relative text-center py-16 md:py-24 rounded-lg overflow-hidden border border-border/20">
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-background to-background"></div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-primary flex items-center justify-center gap-3">
               <CalendarIcon className="h-10 w-10"/> The Divine Leelas of Mahadeva
            </h1>
            <p className="mt-4 max-w-3xl text-foreground/80 md:text-lg">
                Witness the transformative moments of Mahadeva across Yugas. Each event a cosmic lesson, each story a path to understanding the timeless, formless, and magnificent nature of Shiva.
            </p>
            <blockquote className="mt-6 border-l-2 border-primary/50 pl-4 italic text-muted-foreground">
                "He is the beginning and the end, the creator and the destroyer, the dancer and the silent sage."
            </blockquote>
        </div>
      </section>

      {/* 2. Featured Cosmic Events Carousel */}
      <section className="w-full">
         <h2 className="text-3xl font-bold text-center text-primary mb-8">Featured Cosmic Events</h2>
         <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
         >
            <CarouselContent>
                {featuredEvents.map((event) => (
                    <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                           <EventCard event={event} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
         </Carousel>
      </section>

      {/* 3. Event Categories Navigation */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary">Explore by Theme</h2>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full flex justify-center">
          <TabsList className="grid w-full max-w-4xl grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
            {eventCategories.map(({value, label, icon: Icon}) => (
                 <TabsTrigger key={value} value={value} className="text-xs sm:text-sm py-2 px-1 flex flex-col sm:flex-row gap-1 h-auto">
                    <Icon className="h-4 w-4"/> {label}
                 </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </section>

      {/* 4. Full Event Timeline/Grid Section */}
      <section>
        <Tabs value={activeTab}>
            <TabsContent value={activeTab}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                 {filteredEvents.length === 0 && (
                     <div className="text-center py-12 text-muted-foreground">
                         <p>No events found in this category.</p>
                     </div>
                 )}
            </TabsContent>
        </Tabs>
      </section>
      
       {/* 5. Reflective Footer */}
       <footer className="text-center mt-16 pt-8 border-t border-border/50">
        <p className="font-noto_sans_devanagari text-muted-foreground text-lg">
          यत्र यत्र स्थितो देवः सर्वव्यापी महेश्वरः
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          (Wherever the Lord is situated, the all-pervading Great Lord is there.)
        </p>
        <p className="mt-4 text-sm text-muted-foreground">Contemplate these divine leelas – Tap into the silence within.</p>
      </footer>
    </div>
  );
}
