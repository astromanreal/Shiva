import Image from 'next/image';
import { getKaalBhairavaData } from '@/data/kaal-bhairava';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Clock, Bone, Sparkles, BookOpen, SquareTerminal } from 'lucide-react'; // Relevant icons
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils'; // Import the cn function
import React from 'react'; // Import React for Fragment
import { getAllKaalBhairavaImages } from '@/data/kaal-bhairava-images'; // Import image data
import KaalBhairavaClient from './kaal-bhairava-client'; // Import the new client component

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

  return (
    <div className="max-w-5xl mx-auto space-y-12 p-4">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 rounded-lg overflow-hidden border border-border shadow-lg">
        <div className="absolute inset-0 z-0 opacity-10">
             {/* Subtle background pattern or image could go here */}
             <Image
                src={`https://picsum.photos/seed/${data.id}-bg/1200/400`} // Placeholder background
                alt="Abstract background"
                fill={true} // Use fill instead of layout="fill"
                style={{objectFit: 'cover'}} // Use style object for objectFit
                className="filter blur-sm"
                data-ai-hint="dark cosmic texture abstract"
             />
        </div>
        <div className="container relative z-10 px-4 md:px-6 space-y-4">
            <SanskritText text={data.title} className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-2 font-noto_sans_devanagari" />
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary mb-4">
              {data.title.split('(')[0].trim()} - The Lord of Time & Fearlessness
            </h1>
            <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
              {data.description}
            </p>
            <div className="flex justify-center pt-4">
                 <Badge variant="destructive" className="text-lg px-4 py-1">Guardian of Kashi</Badge>
            </div>
        </div>
      </section>

       {/* Image Slider Section (Client Component) */}
       <section className="w-full max-w-3xl mx-auto">
           <KaalBhairavaClient images={images} />
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
