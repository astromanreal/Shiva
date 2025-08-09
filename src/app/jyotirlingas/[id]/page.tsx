

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllJyotirlingas } from '@/data/jyotirlingas';
import { getJyotirlingaDetailedById, JyotirlingaDetailed } from '@/data/jyotirlingas-detailed';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
    MapPin, Star, BookOpen, ExternalLink, Youtube, ArrowLeft, ArrowRight, Search,
    Building, Clock, Calendar, Sparkles, Book, Wind, Flame, Sun, Moon, Info, Shield, Users, Mic, Landmark
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

const WikipediaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M511.2,176.2c0-10.9-2.2-22.3-6.6-34.1c-1.9-5.1-4.3-10-6.8-14.6c-4.9-8.8-10.4-16.9-16.6-24.2c-6.2-7.3-13-14-20.3-19.9 c-7.3-5.9-14.9-10.8-22.9-14.8c-8-4-16.1-7.2-24.5-9.6c-8.4-2.4-16.8-4.2-25.5-5.3c-8.6-1.1-17.4-1.7-26.2-1.7 c-21.9,0-43.7,3.6-64.6,10.6c-13.6,4.6-26.9,10.7-39.2,18.4c-12.3,7.6-23.7,16.6-34.2,26.9l-11.2-13.7 c-6.6-8.2-15.6-13-25.2-13.4c-9.6-0.4-18.7,3.6-25.2,11.2L12,112.5c-10,11.8-11,28.7-2.3,41.4l82,119.5l-63.5,91.3 C20.3,375.4,19.9,387,24,397.8c4.1,10.8,12.5,19.3,23.1,23.1c10.6,3.8,22.2,3.1,32.3-1.8l70.1-34.3l34.3,37.3 c9.4,10.2,22.4,15.8,35.9,15.8c1,0,2.1,0,3.1-0.1c15-1,28.5-9.2,36.9-22.2l12.5-19.2c12.3-18.9,30.3-33.8,51.4-43.1 c13.6-6,28.2-9.9,43.3-11.4c15.1-1.5,30.4-1.3,45.3,0.6c14.9,1.9,29.4,5.4,43,10.4c13.6,5,26.5,11.4,38.1,19.1l-25.5,17.4 c-13.4,9.1-17.1,27.2-8,40.6c9.1,13.4,27.2,17.1,40.6,8l53.9-36.9c13.4-9.1,23.3-22,28.5-36.9c5.2-14.9,5.5-30.8,1.2-46.1 c-4.3-15.3-12.9-29.3-24.8-41.2c-12-11.9-26.4-21.5-42.3-28.4c-7.8-3.4-15.8-6.1-23.9-8.2c-8.1-2.1-16.3-3.6-24.6-4.5 C364.3,195.3,356.1,194,348,194c-22.6,0-44.5,4.7-64.8,13.9c-10.9,4.9-21.2,10.9-30.7,18.1L125,322.9l46.2-66.9 c9.1-13.3,11.9-30,7.1-45.7c-4.8-15.7-16.6-28.1-31.4-33.9L80.5,153l86,1.4c15.7,0.3,30.3-6.4,40.6-18.1 c10.3-11.7,15.2-26.9,13.9-42.3c-1.3-15.4-8.7-29.4-20.6-39.7c-11.9-10.3-26.9-16.4-42.8-17.6c-15.9-1.2-31.5,1.7-45.7,8.4 c-14.2,6.7-27.4,16.8-38.6,29.4L64.8,193.3c-6.8,7.7-17.2,9-25.8,3.2c-8.6-5.8-11.6-16.8-7.7-25.8L120.8,51.8l9.4-10.7 c3.3-3.8,7.9-5.9,12.6-5.9c3.1,0,6.2,0.9,9,2.8l105.1,72c6.8,4.6,15.3,4.6,22.1,0l77.9-53.3c3.8-2.6,8.2-4,12.7-4 c2.6,0,5.2,0.5,7.7,1.5c10,4.1,16.3,13.8,16.3,24.6V176.2z"/></svg>
);

interface JyotirlingaPageProps {
  params: { id: string };
}

// Generate metadata for each Jyotirlinga page
export async function generateMetadata(
  { params }: JyotirlingaPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const linga = getJyotirlingaDetailedById(params.id);

  if (!linga) {
    return {
      title: 'Jyotirlinga Not Found | ShivaSphere',
      description: 'The requested Jyotirlinga could not be found.',
    };
  }

  const description = linga.description || linga.jyotirlinga_significance.symbolism || `Explore the significance, legend, and details of ${linga.name}, one of the twelve sacred Jyotirlingas of Lord Shiva.`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${linga.name} | Jyotirlingas | ShivaSphere`,
    description: description,
    openGraph: {
      title: `${linga.name} | ShivaSphere`,
      description: description,
      images: linga.image ? [linga.image, ...previousImages] : previousImages,
    },
  };
}


export async function generateStaticParams() {
  const lingas = getAllJyotirlingas();
  return lingas.map((linga) => ({
    id: linga.id,
  }));
}



export default function JyotirlingaDetailPage({ params }: JyotirlingaPageProps) {
  // Use the detailed data fetcher
  const detailedLinga = getJyotirlingaDetailedById(params.id);

  if (!detailedLinga) {
    notFound();
  }

  const allLingas = getAllJyotirlingas();
  const currentIndex = allLingas.findIndex(l => l.id === params.id);
  const nextLinga = allLingas[(currentIndex + 1) % allLingas.length];

  const lingaName = detailedLinga.name.replace("Jyotirlinga", "").trim();
  const mapQuery = encodeURIComponent(`${detailedLinga.temple_details.temple_name}, ${detailedLinga.location.place}`);
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${lingaName} Jyotirlinga`)}`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${lingaName} Jyotirlinga story`)}`;
  const wikipediaUrl = `https://en.wikipedia.org/wiki/${lingaName}_Jyotirlinga`;

  const sources = detailedLinga.legend.scriptural_sources || detailedLinga.legend.sources;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 border border-border/50">
        <Image
          src={detailedLinga.image || `https://placehold.co/800x450.png`} 
          alt={detailedLinga.name}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          data-ai-hint={detailedLinga.aiHint + ' detail view temple architecture'} 
          priority 
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
         <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
             <Link href="/jyotirlingas">
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   <ArrowLeft className="h-4 w-4 mr-1.5 transition-transform group-hover:-translate-x-1"/>
                   All Jyotirlingas
                </Button>
             </Link>
             <Link href={`/jyotirlingas/${nextLinga.id}`}>
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   Next Jyotirlinga
                   <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1"/>
                </Button>
             </Link>
          </div>
      </div>

      <div className="text-center space-y-2 border-b pb-4 border-border/50">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary">
          {detailedLinga.name}
        </h1>
        {detailedLinga.sanskrit_name && (
          <p className="font-noto_sans_devanagari text-2xl text-muted-foreground">{detailedLinga.sanskrit_name}</p>
        )}
        <p className="text-lg text-foreground/80">{detailedLinga.deity?.main_deity}</p>
         <div className="flex items-center justify-center gap-2 text-muted-foreground/80">
            <MapPin className="h-4 w-4" />
            <span>{detailedLinga.location.place}, {detailedLinga.location.state}</span>
         </div>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-primary"/> Significance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {detailedLinga.jyotirlinga_significance.meaning && <p><strong>Meaning:</strong> {detailedLinga.jyotirlinga_significance.meaning}</p>}
            {detailedLinga.jyotirlinga_significance.symbolism && <p className="text-muted-foreground">{detailedLinga.jyotirlinga_significance.symbolism}</p>}
            {detailedLinga.jyotirlinga_significance.spiritual_benefits && (
              <div>
                <h4 className="font-semibold mb-2">Spiritual Benefits:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {detailedLinga.jyotirlinga_significance.spiritual_benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                </ul>
              </div>
            )}
            <Badge variant="secondary">Order: {detailedLinga.jyotirlinga_significance.order}</Badge>
          </CardContent>
        </Card>

        {detailedLinga.description && (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5 text-primary"/> About the Temple</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{detailedLinga.description}</p>
                </CardContent>
            </Card>
        )}

        {detailedLinga.legend && (
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary"/> Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">{detailedLinga.legend.summary}</p>
                {sources && sources.length > 0 && (
                    <div>
                    <h4 className="font-semibold text-sm">Scriptural Sources:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {sources.map((source: string) => <Badge key={source} variant="outline">{source}</Badge>)}
                    </div>
                    </div>
                )}
            </CardContent>
            </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5 text-primary"/> Temple & Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
              <p><strong>Temple Name:</strong> {detailedLinga.temple_details.temple_name}</p>
              <p><strong>Style:</strong> {detailedLinga.temple_details.architecture_style}</p>
              {detailedLinga.architecture_highlights.special_feature && <p><strong>Highlight:</strong> {detailedLinga.architecture_highlights.special_feature}</p>}
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="timings">
            <AccordionTrigger>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary"/> Temple Timings & Rituals</div>
            </AccordionTrigger>
            <AccordionContent className="p-4 space-y-4">
              <p><strong>Open:</strong> {detailedLinga.temple_timing.open} | <strong>Close:</strong> {detailedLinga.temple_timing.close}</p>
              {detailedLinga.temple_timing.aarti_timings && (
                  <div>
                      <h4 className="font-semibold">Aarti Timings:</h4>
                      <ul className="list-disc list-inside text-sm">
                          <li>Morning: {detailedLinga.temple_timing.aarti_timings.morning}</li>
                          <li>Midday: {detailedLinga.temple_timing.aarti_timings.midday}</li>
                          <li>Evening: {detailedLinga.temple_timing.aarti_timings.evening}</li>
                      </ul>
                  </div>
              )}
               <div>
                <h4 className="font-semibold">Key Rituals:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {detailedLinga.rituals.map(r => <Badge key={r} variant="secondary">{r}</Badge>)}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="festivals">
            <AccordionTrigger>
               <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary"/> Major Festivals</div>
            </AccordionTrigger>
            <AccordionContent className="p-4">
               <div className="flex flex-wrap gap-2">
                  {detailedLinga.festivals_celebrated.map(f => <Badge key={f} variant="secondary">{f}</Badge>)}
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="visit">
            <AccordionTrigger>
               <div className="flex items-center gap-2"><Info className="h-4 w-4 text-primary"/> Visitor Information</div>
            </AccordionTrigger>
            <AccordionContent className="p-4 space-y-2 text-sm">
              <p><strong>Best time to visit:</strong> {detailedLinga.visit_info.best_time_to_visit}</p>
              <p><strong>Nearest Airport:</strong> {detailedLinga.visit_info.nearest_airport}</p>
              <p><strong>Nearest Railway:</strong> {detailedLinga.visit_info.nearest_railway_station}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {detailedLinga.mantras && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Mic className="h-5 w-5 text-primary"/> Mantras</CardTitle>
          </CardHeader>
          <CardContent>
            {detailedLinga.mantras.map((mantra, i) => (
              <div key={i} className="p-3 border rounded-md bg-secondary/30">
                <p className="font-noto_sans_devanagari text-lg">{mantra.sanskrit}</p>
                {mantra.benefit && <p className="text-xs text-muted-foreground mt-2 italic">{mantra.benefit}</p>}
              </div>
            ))}
          </CardContent>
        </Card>
        )}
      </div>

      <div className="text-center pt-8 space-y-4">
        <h3 className="text-lg font-semibold text-primary">Explore More</h3>
        <div className="flex justify-center flex-wrap gap-4">
             <Button asChild variant="outline">
                <a href={googleMapUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-5 w-5 mr-2"/>
                    View on Google Maps
                </a>
            </Button>
            <Button asChild variant="outline">
              <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
                 <Search className="h-5 w-5 mr-2"/>
                 Search on Google
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                 <Youtube className="h-5 w-5 mr-2"/>
                 Search on YouTube
              </a>
            </Button>
            <Button asChild variant="outline">
               <a href={wikipediaUrl} target="_blank" rel="noopener noreferrer">
                 <WikipediaIcon className="h-5 w-5 mr-2"/>
                 Read on Wikipedia
               </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
