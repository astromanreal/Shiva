

// src/app/events/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDetailedEventById, DetailedEvent, KeyFigure, LearnMoreLink, NarrativeStage } from '@/data/events-detailed';
import { getAllEvents } from '@/data/events';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Zap, Sparkles, BookOpenText, Users, Info, CalendarIcon, ArrowLeft, ArrowRight, ExternalLink,
    Shield, Map, Book, Users2, Drama, GitCommit, Link2Icon, Anchor, Heart, ChevronsRight, GraduationCap
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

interface EventPageProps {
  params: { id: string };
}

// Generate metadata for each event page
export async function generateMetadata(
  { params }: EventPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const event = getDetailedEventById(params.id);

  if (!event) {
    return {
      title: 'Event Not Found | ShivaSphere',
      description: 'The requested event could not be found.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const image = typeof event.image === 'string' ? [event.image, ...previousImages] : previousImages;

  return {
    title: `${event.title} | Divine Events | ShivaSphere`,
    description: event.description,
    openGraph: {
      title: `${event.title} | ShivaSphere`,
      description: event.description,
      images: image,
    },
  };
}

// Generate static paths for all events
export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

const KeyFigureCard: React.FC<{ figure: KeyFigure }> = ({ figure }) => (
    <div className="p-3 border rounded-lg bg-secondary/30 flex items-start gap-3">
        <Users2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
        <div>
            <h4 className="font-semibold">{figure.name} {figure.epithet && <span className="text-sm font-normal text-muted-foreground">({figure.epithet})</span>}</h4>
            <p className="text-xs text-muted-foreground">{figure.role}</p>
        </div>
    </div>
);

const ExternalLinkButton: React.FC<{ link: LearnMoreLink }> = ({ link }) => (
    <Button asChild variant="outline">
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            {link.title} <ExternalLink className="h-4 w-4 opacity-70" />
        </a>
    </Button>
);


export default function EventPage({ params }: EventPageProps) {
  const event = getDetailedEventById(params.id);

  if (!event) {
    notFound();
  }

  const allEventSummaries = getAllEvents();
  const currentIndex = allEventSummaries.findIndex(e => e.id === params.id);
  const nextEvent = allEventSummaries[(currentIndex + 1) % allEventSummaries.length];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Image */}
       {(event.image || event.aiHint) && (
        <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <Image
            src={typeof event.image === 'string' ? event.image : `https://placehold.co/800x450.png`}
            alt={event.title}
            width={800}
            height={450}
            className="object-cover w-full h-full"
            data-ai-hint={event.aiHint || `${event.title.toLowerCase()} detail view`}
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
           <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
             <Link href="/events">
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   <ArrowLeft className="h-4 w-4 mr-1.5 transition-transform group-hover:-translate-x-1"/>
                   All Events
                </Button>
             </Link>
             <Link href={`/events/${nextEvent.id}`}>
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   Next Event
                   <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1"/>
                </Button>
             </Link>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center space-y-3">
        {event.alternateNames && event.alternateNames.length > 0 && (
            <p className="text-sm text-muted-foreground">{event.alternateNames.join(' / ')}</p>
        )}
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary flex items-center justify-center gap-2">
          <CalendarIcon className="h-8 w-8" /> {event.title}
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          {event.description}
        </p>
         {(event.associatedDeity || event.deityInvolved) && (
            <div className="flex flex-wrap gap-2 justify-center">
                {event.associatedDeity && <Badge variant="secondary">Deity: {event.associatedDeity}</Badge>}
                {event.deityInvolved && event.deityInvolved.filter(d => d !== event.associatedDeity?.split(' ')[0]).slice(0, 4).map(d => <Badge key={d} variant="outline">{d}</Badge>)}
            </div>
         )}
      </div>

      {/* Shiva's Aspect Card */}
      {event.shivaAspect && (
          <Card className="bg-gradient-to-br from-secondary/30 to-background border-primary/20 shadow-inner">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary"/> Shiva's Role: {event.shivaAspect.name}</CardTitle>
              <CardDescription>{event.shivaAspect.meaning}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{event.shivaAspect.description}</p>
            </CardContent>
          </Card>
      )}

       {/* Narrative Section */}
       {event.narrative && event.narrative.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ChevronsRight className="h-5 w-5 text-primary"/> Narrative of the Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {event.narrative.map((stage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                     <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">{index + 1}</div>
                     {index < event.narrative!.length -1 && <div className="w-px h-8 bg-border/70 my-1"></div>}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground/90">{stage.stage}</h4>
                    <p className="text-sm text-muted-foreground">{stage.details}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

      {/* Spiritual Significance Card */}
       {event.spiritualSignificance && (
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5 text-primary"/> Spiritual Significance</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{event.spiritualSignificance}</p>
            </CardContent>
          </Card>
      )}

      {/* Teachings Card */}
       {event.teachings && event.teachings.length > 0 && (
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary"/> Key Teachings</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {event.teachings.map((teaching, index) => (
                        <li key={index}>{teaching}</li>
                    ))}
                 </ul>
            </CardContent>
          </Card>
      )}
      
      {/* Key Figures */}
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary"/> Key Figures & Roles</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.keyFigures.map((figure, index) => (
                <KeyFigureCard key={index} figure={figure}/>
            ))}
        </CardContent>
      </Card>
      
      {/* Symbolism & Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {event.symbolism && (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary"/> Symbolism</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {Object.entries(event.symbolism).map(([key, value]) => (
                        <div key={key}>
                            <h4 className="font-semibold capitalize text-foreground/90">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <p className="text-sm text-muted-foreground">{value as string}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        )}
        {typeof event.impact === 'object' && !Array.isArray(event.impact) && (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Impact of the Event</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <h4 className="font-semibold text-foreground/90">Cosmic Impact</h4>
                        <p className="text-sm text-muted-foreground">{event.impact.cosmic}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Spiritual Impact</h4>
                        <p className="text-sm text-muted-foreground">{event.impact.spiritual}</p>
                    </div>
                </CardContent>
            </Card>
        )}
      </div>

       {/* Divine Emergences */}
      {event.divineEmergences && event.divineEmergences.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Drama className="h-5 w-5 text-primary"/> Divine Emergences</CardTitle>
            <CardDescription>Treasures and beings that emerged during the event.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {event.divineEmergences.map((item, index) => (
              <Badge key={index} variant="secondary">{item}</Badge>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Scriptural References & Associated Locations */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {event.textualReferences && event.textualReferences.length > 0 && (
            <AccordionItem value="texts" className="border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="flex items-center gap-2 text-lg font-semibold"><BookOpenText className="h-5 w-5 text-primary"/> Scriptural References</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {event.textualReferences.map((ref, index) => (
                            <li key={index}>
                                <strong className="text-foreground/90">{ref.text}:</strong>
                                {ref.sections && (
                                  <span className="text-sm ml-2">{ref.sections.join(', ')}</span>
                                )}
                                {ref.details && (
                                    <span className="text-sm ml-2 italic">{ref.details}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        )}

        {event.locationsAssociated && event.locationsAssociated.length > 0 && (
            <AccordionItem value="locations" className="border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="flex items-center gap-2 text-lg font-semibold"><Map className="h-5 w-5 text-primary"/> Associated Locations</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {event.locationsAssociated.map((loc, index) => (
                            <li key={index}>
                                <strong className="text-foreground/90">{loc.name || loc.place}</strong> 
                                {loc.type && <span className="text-sm"> - {loc.type}</span>}
                                {loc.location && <span className="text-sm"> ({loc.location})</span>}
                                {loc.description && <p className="text-xs italic pl-4">{loc.description}</p>}
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        )}
      </Accordion>

      {/* Learn More */}
      {event.learnMoreLinks && event.learnMoreLinks.length > 0 && (
         <div className="text-center pt-4 space-y-3">
            <h3 className="text-lg font-semibold text-primary">Learn More</h3>
            <div className="flex justify-center flex-wrap gap-4">
               {event.learnMoreLinks.map((link, index) => (
                   <ExternalLinkButton key={index} link={link} />
               ))}
            </div>
         </div>
      )}
    </div>
  );
}
