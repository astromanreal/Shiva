import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getStotraById, getAllStotras } from '@/data/stotras';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Feather, User, Sparkles } from 'lucide-react'; // Relevant icons, added Sparkles for Dhyana
import React from 'react'; // Import React
import { cn } from '@/lib/utils'; // Import cn

// Generate static paths for all stotras
export async function generateStaticParams() {
  const stotras = getAllStotras();
  return stotras.map((stotra) => ({
    id: stotra.id,
  }));
}

// Helper component for rendering Sanskrit text
const SanskritTextDisplay: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
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


interface StotraPageProps {
  params: { id: string };
}

export default function StotraDetailPage({ params }: StotraPageProps) {
  const stotra = getStotraById(params.id);

  if (!stotra) {
    notFound();
  }

  // Separate Dhyana verses (verse < 1) from main verses
  const dhyanaVerses = stotra.verses.filter(v => v.verse < 1);
  const mainVerses = stotra.verses.filter(v => v.verse >= 1);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Header Section */}
      <section className="text-center space-y-3 border-b pb-6 border-border/50">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary">
          {stotra.title}
        </h1>
        {stotra.sanskritTitle && (
            <p className="font-noto_sans_devanagari text-2xl md:text-3xl text-foreground/90">{stotra.sanskritTitle}</p>
        )}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {stotra.description}
        </p>
        <div className="flex justify-center flex-wrap gap-3 pt-2 text-sm">
             <Badge variant="secondary" className="px-3 py-1">
                <User className="h-4 w-4 mr-1.5" /> Deity: {stotra.deity}
             </Badge>
            {stotra.composer && (
             <Badge variant="outline" className="px-3 py-1">
                <Feather className="h-4 w-4 mr-1.5" /> Composer: {stotra.composer}
             </Badge>
            )}
        </div>
      </section>

      {/* Optional Image */}
      {stotra.image && stotra.aiHint && (
        <div className="my-8 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 max-w-2xl mx-auto">
          <Image
            src={typeof stotra.image === 'string' ? stotra.image : stotra.image.src}
            alt={`${stotra.title} representation`}
            width={800}
            height={450}
            className="object-cover w-full h-full"
            data-ai-hint={stotra.aiHint}
            priority // Prioritize loading hero image if present
          />
        </div>
      )}

      {/* Dhyana Slokas Section (if present) */}
      {dhyanaVerses.length > 0 && (
         <Card className="shadow-md border border-border/50 bg-secondary/20">
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-xl md:text-2xl text-primary/90">
               <Sparkles className="h-6 w-6 text-primary/80"/> Dhyāna Ślokāḥ (Meditation Verses)
             </CardTitle>
             <CardDescription>Preliminary verses often recited for focus and invocation.</CardDescription>
           </CardHeader>
           <CardContent>
             <Accordion type="multiple" className="w-full space-y-2"> {/* Allow multiple open */}
               {dhyanaVerses.map((verse) => (
                 <AccordionItem key={`dhyana-${verse.verse}`} value={`dhyana-item-${verse.verse}`} className="border border-border/40 rounded-md overflow-hidden bg-background/50">
                   <AccordionTrigger className="text-left hover:no-underline text-md py-2 px-4 bg-secondary/30">
                      <span className="font-semibold text-primary/80 mr-3">Dhyana Verse {(verse.verse * 10).toFixed(0)}</span> {/* Adjust display if needed */}
                   </AccordionTrigger>
                   <AccordionContent className="space-y-3 pt-3 px-4 pb-4">
                      {/* Sanskrit Text */}
                      <div className="p-3 border rounded-md bg-secondary/10 border-secondary">
                         <SanskritTextDisplay text={verse.sanskrit} className="text-lg leading-relaxed font-noto_sans_devanagari text-foreground/90"/>
                      </div>
                      {/* Meaning */}
                      {verse.meaning && (
                           <div className="text-muted-foreground text-sm italic p-2 border-l-4 border-primary/40 bg-muted/20 rounded-r-md">
                               <strong className="not-italic text-foreground/80 font-medium">Meaning:</strong> {verse.meaning}
                           </div>
                      )}
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </CardContent>
         </Card>
      )}


      {/* Main Stotra Verses Accordion */}
      <Card className="shadow-md border border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
            <BookOpen className="h-6 w-6 text-primary"/> Main Verses
          </CardTitle>
           <CardDescription>Click on each verse number to view the Sanskrit text and its meaning (if available).</CardDescription>
        </CardHeader>
        <CardContent>
           <Accordion type="single" collapsible className="w-full">
             {mainVerses.map((verse) => (
               <AccordionItem key={verse.verse} value={`item-${verse.verse}`} className="border-b last:border-b-0 border-border/50">
                 <AccordionTrigger className="text-left hover:no-underline text-lg py-3">
                    <span className="font-semibold text-primary mr-3">Verse {verse.verse}</span>
                     {/* Optional: Show first line preview */}
                     {/* <span className="text-sm text-muted-foreground truncate hidden sm:inline">
                        {verse.sanskrit.split('\n')[0]}...
                     </span> */}
                 </AccordionTrigger>
                 <AccordionContent className="space-y-4 pt-2 pb-4">
                    {/* Sanskrit Text */}
                    <div className="p-4 border rounded-md bg-secondary/20 border-secondary">
                       <SanskritTextDisplay text={verse.sanskrit} className="text-xl leading-relaxed font-noto_sans_devanagari text-foreground"/>
                    </div>
                    {/* Meaning */}
                    {verse.meaning && (
                         <div className="text-muted-foreground text-base italic p-3 border-l-4 border-primary/50 bg-muted/30 rounded-r-md shadow-sm">
                             <strong className="not-italic text-foreground/90 font-medium">Meaning:</strong> {verse.meaning}
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
