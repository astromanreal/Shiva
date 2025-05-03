

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getAllMantras, Mantra } from '@/data/mantras';
import { BookOpen, Mic2, Brain, Info } from 'lucide-react'; // Icons
import React from 'react';
import { cn } from '@/lib/utils';

// Helper component for rendering Sanskrit text (copied from stotras detail page for isolation)
const SanskritTextDisplay: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    <span className={cn(isDevanagari ? 'font-noto_sans_devanagari text-lg md:text-xl' : '', className)}>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

export default function MantrasPage() {
  const mantras = getAllMantras();

  if (!mantras || mantras.length === 0) {
    return <p className="text-center text-muted-foreground">No mantras available at the moment.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 p-4">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
           <Mic2 className="h-8 w-8" /> Sacred Mantras
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Connect with the divine through the power of sacred sound vibrations dedicated to Mahadeva.
        </p>
      </div>

      {/* Mantra List */}
      <div className="space-y-8">
        {mantras.map((mantra) => (
          <Card key={mantra.id} className="shadow-md border border-border/50 overflow-hidden transition-shadow hover:shadow-lg">
             {/* Optional Image Header REMOVED as per user request */}
             {/*
             {mantra.aiHint && (
                <div className="aspect-[16/7] relative overflow-hidden bg-secondary/20">
                <Image
                    src={`https://picsum.photos/seed/${mantra.id}/600/262`}
                    alt={mantra.title}
                    width={600}
                    height={262}
                    className="object-cover w-full h-full opacity-80"
                    data-ai-hint={mantra.aiHint}
                />
                </div>
             )}
             */}

             <CardHeader className="pt-4 pb-2">
                <CardTitle className="text-xl md:text-2xl text-primary">{mantra.title}</CardTitle>
                {/* Optional: Add a brief description if needed in data */}
             </CardHeader>

             <CardContent className="p-4 md:p-6 space-y-4">
                 {/* Sanskrit Text */}
                  <div className="p-4 border rounded-md bg-secondary/30 border-secondary shadow-inner">
                    <SanskritTextDisplay text={mantra.sanskrit} className="leading-relaxed text-foreground"/>
                  </div>

                 {/* Accordion for Transliteration and Meaning */}
                 {(mantra.transliteration || mantra.meaning) && (
                   <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="details" className="border-b-0">
                       <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground/90 hover:no-underline pt-1 pb-2">
                         <span className="flex items-center gap-1">
                            <Info className="h-4 w-4"/> Show Details (Transliteration & Meaning)
                         </span>
                       </AccordionTrigger>
                       <AccordionContent className="space-y-4 pt-2">
                          {/* Transliteration */}
                          {mantra.transliteration && (
                             <div className="p-3 border rounded-md bg-muted/20 border-border/50">
                                <h3 className="font-semibold text-sm mb-1 text-foreground/80 flex items-center gap-1"><Mic2 className="h-4 w-4 text-primary/80"/> Transliteration</h3>
                                <p className="text-muted-foreground font-mono text-xs md:text-sm whitespace-pre-line">{mantra.transliteration}</p>
                             </div>
                          )}

                          {/* Meaning */}
                          {mantra.meaning && (
                             <div className="p-3 border rounded-md bg-muted/20 border-border/50">
                               <h3 className="font-semibold text-sm mb-1 text-foreground/80 flex items-center gap-1"><Brain className="h-4 w-4 text-primary/80"/> Meaning</h3>
                               <p className="text-muted-foreground text-xs md:text-sm italic">{mantra.meaning}</p>
                             </div>
                          )}
                       </AccordionContent>
                     </AccordionItem>
                   </Accordion>
                 )}

             </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}
