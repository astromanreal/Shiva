
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllRudras, getRudraById } from '@/data/rudras';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
    Zap, BookOpenText, ShieldCheck, Users, Star, ArrowLeft, ArrowRight, 
    ExternalLink, Book, Heart, Brain, Link as LinkIcon, Tags, History, 
    Calendar, Mic, Users2, Library, BookHeart, Wind, Mountain, Eye, Search,
    Flame, Skull, Landmark, Wind as AirIcon, Compass, Sparkles
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

interface RudraPageProps {
  params: { id: string };
}

// Generate metadata for each Rudra page
export async function generateMetadata(
  { params }: RudraPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const rudra = getRudraById(params.id);

  if (!rudra) {
    return {
      title: 'Rudra Not Found | ShivaSphere',
      description: 'The requested Rudra could not be found.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${rudra.name} | The Eleven Rudras | ShivaSphere`,
    description: rudra.description,
    openGraph: {
      title: `${rudra.name} | ShivaSphere`,
      description: rudra.description,
      images: rudra.image ? [rudra.image, ...previousImages] : previousImages,
    },
  };
}


// Generate static paths for all Rudras
export async function generateStaticParams() {
  const rudras = getAllRudras();
  return rudras.map((rudra) => ({
    id: rudra.id,
  }));
}

// Helper to render mantras with Devanagari font styling
const MantraText: React.FC<{ text: string }> = ({ text }) => {
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    <span className={isDevanagari ? 'font-noto_sans_devanagari text-lg' : ''}>
      {text.split('\n').map((line, index) => (
          <p key={index} className="mb-1">{line}</p>
      ))}
    </span>
  );
};

// SVG Icons for external links
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.75 8.36,4.73 12.19,4.73C14.03,4.73 15.6,5.33 16.85,6.45L19.06,4.23C17.2,2.67 14.9,2 12.19,2C6.92,2 2.73,6.33 2.73,12C2.73,17.67 6.92,22 12.19,22C17.62,22 21.5,18.33 21.5,12.23C21.5,11.63 21.43,11.35 21.35,11.1Z" />
    </svg>
);
const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M9.937,15.542V8.458L15.625,12L9.937,15.542z" />
    </svg>
);
const WikipediaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
        <path d="M511.2,176.2c0-10.9-2.2-22.3-6.6-34.1c-1.9-5.1-4.3-10-6.8-14.6c-4.9-8.8-10.4-16.9-16.6-24.2c-6.2-7.3-13-14-20.3-19.9 c-7.3-5.9-14.9-10.8-22.9-14.8c-8-4-16.1-7.2-24.5-9.6c-8.4-2.4-16.8-4.2-25.5-5.3c-8.6-1.1-17.4-1.7-26.2-1.7 c-21.9,0-43.7,3.6-64.6,10.6c-13.6,4.6-26.9,10.7-39.2,18.4c-12.3,7.6-23.7,16.6-34.2,26.9l-11.2-13.7 c-6.6-8.2-15.6-13-25.2-13.4c-9.6-0.4-18.7,3.6-25.2,11.2L12,112.5c-10,11.8-11,28.7-2.3,41.4l82,119.5l-63.5,91.3 C20.3,375.4,19.9,387,24,397.8c4.1,10.8,12.5,19.3,23.1,23.1c10.6,3.8,22.2,3.1,32.3-1.8l70.1-34.3l34.3,37.3 c9.4,10.2,22.4,15.8,35.9,15.8c1,0,2.1,0,3.1-0.1c15-1,28.5-9.2,36.9-22.2l12.5-19.2c12.3-18.9,30.3-33.8,51.4-43.1 c13.6-6,28.2-9.9,43.3-11.4c15.1-1.5,30.4-1.3,45.3,0.6c14.9,1.9,29.4,5.4,43,10.4c13.6,5,26.5,11.4,38.1,19.1l-25.5,17.4 c-13.4,9.1-17.1,27.2-8,40.6c9.1,13.4,27.2,17.1,40.6,8l53.9-36.9c13.4-9.1,23.3-22,28.5-36.9c5.2-14.9,5.5-30.8,1.2-46.1 c-4.3-15.3-12.9-29.3-24.8-41.2c-12-11.9-26.4-21.5-42.3-28.4c-7.8-3.4-15.8-6.1-23.9-8.2c-8.1-2.1-16.3-3.6-24.6-4.5 C364.3,195.3,356.1,194,348,194c-22.6,0-44.5,4.7-64.8,13.9c-10.9,4.9-21.2,10.9-30.7,18.1L125,322.9l46.2-66.9 c9.1-13.3,11.9-30,7.1-45.7c-4.8-15.7-16.6-28.1-31.4-33.9L80.5,153l86,1.4c15.7,0.3,30.3-6.4,40.6-18.1 c10.3-11.7,15.2-26.9,13.9-42.3c-1.3-15.4-8.7-29.4-20.6-39.7c-11.9-10.3-26.9-16.4-42.8-17.6c-15.9-1.2-31.5,1.7-45.7,8.4 c-14.2,6.7-27.4,16.8-38.6,29.4L64.8,193.3c-6.8,7.7-17.2,9-25.8,3.2c-8.6-5.8-11.6-16.8-7.7-25.8L120.8,51.8l9.4-10.7 c3.3-3.8,7.9-5.9,12.6-5.9c3.1,0,6.2,0.9,9,2.8l105.1,72c6.8,4.6,15.3,4.6,22.1,0l77.9-53.3c3.8-2.6,8.2-4,12.7-4 c2.6,0,5.2,0.5,7.7,1.5c10,4.1,16.3,13.8,16.3,24.6V176.2z"/>
    </svg>
);


export default function RudraPage({ params }: RudraPageProps) {
  const allRudras = getAllRudras();
  const currentIndex = allRudras.findIndex(r => r.id === params.id);
  const rudra = allRudras[currentIndex];

  if (!rudra) {
    notFound();
  }
  
  const nextRudraIndex = (currentIndex + 1) % allRudras.length;
  const nextRudra = allRudras[nextRudraIndex];

  const youtubeQuery = encodeURIComponent(`${rudra.name} Rudra story`);
  const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeQuery}`;
  const googleQuery = encodeURIComponent(`${rudra.name} Rudra`);
  const googleUrl = `https://www.google.com/search?q=${googleQuery}`;
  const wikipediaQuery = encodeURIComponent(rudra.name);
  const wikipediaUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${wikipediaQuery}`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
       <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          {(rudra.image || rudra.aiHint) && (
            <Image
              src={rudra.image || `https://i.pinimg.com/736x/b8/31/6e/b8316e761ccad627c50f4f3a6a97b368.jpg`}
              alt={rudra.name}
              width={800}
              height={450}
              className="object-cover w-full h-full"
              data-ai-hint={!rudra.image ? rudra.aiHint : undefined}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
             <Link href="/rudras">
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   <ArrowLeft className="h-4 w-4 mr-1.5 transition-transform group-hover:-translate-x-1"/>
                   All Rudras
                </Button>
             </Link>
             <Link href={`/rudras/${nextRudra.id}`}>
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   Next Rudra
                   <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1"/>
                </Button>
             </Link>
          </div>
       </div>

      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary">
          {rudra.name}
        </h1>
        {rudra.sanskritName && (
             <p className="font-noto_sans_devanagari text-2xl text-muted-foreground">{rudra.sanskritName}</p>
        )}
        {rudra.alternativeNames && rudra.alternativeNames.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
                {rudra.alternativeNames.map(name => <Badge key={name} variant="outline">{name}</Badge>)}
            </div>
        )}
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto pt-2" dangerouslySetInnerHTML={{ __html: rudra.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </div>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-primary"/> Symbolism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{rudra.symbolism}</p>
        </CardContent>
      </Card>

      {rudra.originStory && (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><History className="h-5 w-5 text-primary"/> Origin Story</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">{rudra.originStory.summary}</p>
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Source Texts:</h4>
                    <div className="flex flex-wrap gap-2">
                        {rudra.originStory.sourceTexts.map(source => <Badge key={source} variant="secondary">{source}</Badge>)}
                    </div>
                </div>
            </CardContent>
        </Card>
      )}

      {rudra.iconography && (
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><Eye className="h-5 w-5 text-primary"/> Iconography</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                 <p><strong className="text-foreground/90">Appearance:</strong> <span className="text-muted-foreground">{rudra.iconography.appearance}</span></p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                     <div>
                         <h4 className="font-semibold flex items-center gap-1 mb-1"><Sparkles className="h-4 w-4"/> Symbols</h4>
                         <div className="flex flex-wrap gap-2">
                            {rudra.iconography.symbols.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                         </div>
                     </div>
                      {rudra.iconography.weapons && rudra.iconography.weapons.length > 0 && (
                         <div>
                             <h4 className="font-semibold flex items-center gap-1 mb-1"><Zap className="h-4 w-4"/> Weapons</h4>
                             <div className="flex flex-wrap gap-2">
                                {rudra.iconography.weapons.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                             </div>
                         </div>
                      )}
                     <div>
                         <h4 className="font-semibold flex items-center gap-1 mb-1"><Heart className="h-4 w-4"/> Mount</h4>
                         <p className="text-muted-foreground">{rudra.iconography.mount}</p>
                     </div>
                     {rudra.iconography.direction && (
                         <div>
                            <h4 className="font-semibold flex items-center gap-1 mb-1"><Compass className="h-4 w-4"/> Direction</h4>
                            <p className="text-muted-foreground">{rudra.iconography.direction}</p>
                        </div>
                     )}
                      {rudra.iconography.element && (
                         <div>
                            <h4 className="font-semibold flex items-center gap-1 mb-1"><Flame className="h-4 w-4"/> Element</h4>
                            <p className="text-muted-foreground">{rudra.iconography.element}</p>
                        </div>
                     )}
                 </div>
             </CardContent>
        </Card>
      )}

      {rudra.storiesAndLegends && rudra.storiesAndLegends.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpenText className="h-5 w-5 text-primary"/> Stories & Legends</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {rudra.storiesAndLegends.map((story, index) => (
                   <AccordionItem key={index} value={`item-${index}`}>
                     <AccordionTrigger>{story.title}</AccordionTrigger>
                     <AccordionContent className="space-y-2">
                       <p className="text-muted-foreground">{story.summary}</p>
                       {story.source && <Badge variant="outline">Source: {story.source}</Badge>}
                     </AccordionContent>
                   </AccordionItem>
                ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

       {rudra.philosophicalSignificance && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5 text-primary"/> Philosophical Significance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: rudra.philosophicalSignificance.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </CardContent>
        </Card>
      )}
      
       {rudra.roleInCosmicFunctions && rudra.roleInCosmicFunctions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Role in Cosmic Functions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {rudra.roleInCosmicFunctions.map((role) => <Badge key={role} variant="secondary">{role}</Badge>)}
          </CardContent>
        </Card>
      )}
      
      {rudra.mantras && rudra.mantras.length > 0 && (
         <Card>
            <CardHeader>
               <CardTitle className="flex items-center gap-2"><Mic className="h-5 w-5 text-primary"/> Mantras</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {rudra.mantras.map((mantra, index) => (
                    <div key={index} className="p-4 border rounded-md bg-secondary/30">
                        <MantraText text={mantra.text} />
                        <p className="text-sm text-muted-foreground mt-2"><strong>Translation:</strong> {mantra.translation}</p>
                        {mantra.usage && <p className="text-xs text-muted-foreground italic mt-1">{mantra.usage}</p>}
                    </div>
                ))}
            </CardContent>
         </Card>
      )}

      {rudra.worship && (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5 text-primary"/> Worship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 {rudra.worship.temples.length > 0 && (
                     <div>
                        <h4 className="font-semibold mb-2">Major Temples</h4>
                        {rudra.worship.temples.map((temple, i) => (
                            <div key={i} className="mb-2 last:mb-0 p-2 border-l-2 border-primary/40">
                                <p className="font-semibold text-foreground/90">{temple.name} <span className="text-sm text-muted-foreground font-normal">- {temple.location}</span></p>
                                <p className="text-xs text-muted-foreground">{temple.importance}</p>
                            </div>
                        ))}
                     </div>
                 )}
                  {rudra.worship.festivals.length > 0 && (
                     <div>
                        <h4 className="font-semibold mb-2">Festivals</h4>
                        {rudra.worship.festivals.map((festival, i) => (
                            <div key={i} className="mb-2 last:mb-0">
                                <p className="font-semibold text-foreground/90">{festival.name}: <span className="text-sm text-muted-foreground font-normal">{festival.significance}</span></p>
                            </div>
                        ))}
                     </div>
                 )}
                 {rudra.worship.rituals.length > 0 && (
                     <div>
                        <h4 className="font-semibold mb-2">Common Rituals</h4>
                        <div className="flex flex-wrap gap-2">
                             {rudra.worship.rituals.map((ritual, i) => <Badge key={i} variant="outline">{ritual}</Badge>)}
                        </div>
                     </div>
                 )}
            </CardContent>
        </Card>
      )}

      <div className="text-center pt-8 space-y-4">
        <h3 className="text-lg font-semibold text-primary">Explore More Resources</h3>
        <div className="flex justify-center flex-wrap gap-4">
            <Button asChild variant="outline">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                 <YouTubeIcon className="h-5 w-5 mr-2"/>
                 Search on YouTube
                 <ExternalLink className="h-4 w-4 ml-2 opacity-70"/>
              </a>
            </Button>
            <Button asChild variant="outline">
               <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                 <GoogleIcon className="h-5 w-5 mr-2"/>
                 Search on Google
                 <ExternalLink className="h-4 w-4 ml-2 opacity-70"/>
               </a>
            </Button>
            <Button asChild variant="outline">
               <a href={wikipediaUrl} target="_blank" rel="noopener noreferrer">
                 <WikipediaIcon className="h-5 w-5 mr-2"/>
                 Read on Wikipedia
                 <ExternalLink className="h-4 w-4 ml-2 opacity-70"/>
               </a>
            </Button>
        </div>
      </div>

    </div>
  );
}
