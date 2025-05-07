import Link from 'next/link'; // Although no detail page link for now
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllRudras, Rudra } from '@/data/rudras';
import { Zap, BookOpen, ShieldCheck, Sparkles, UserCircle, Info } from 'lucide-react'; // Updated icons
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function RudrasPage() {
  const rudras = getAllRudras();

  return (
    <div className="space-y-10"> {/* Increased spacing */}
      <div className="text-center space-y-3"> {/* Increased spacing */}
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-primary flex items-center justify-center gap-3">
            <Zap className="h-8 w-8 md:h-10 md:w-10 animate-pulse" /> The Eleven Rudras
        </h1>
         {rudrasData[0].sanskritName && ( // Display Sanskrit name for the first Rudra as an example
             <p className="font-noto_sans_devanagari text-2xl text-muted-foreground">(एकादश रुद्र)</p>
         )}
        <p className="text-muted-foreground md:text-lg lg:text-xl max-w-3xl mx-auto">
          Explore the fierce and functional emanations of Mahadeva, representing cosmic energies, vital forces (Pranas), and divine functions as described across various scriptures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"> {/* Increased gap */}
        {rudras.map((rudra) => (
          <Card key={rudra.id} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-border/70 hover:border-primary/50 bg-card/90 backdrop-blur-sm overflow-hidden">
             {(rudra.image || rudra.aiHint) && ( // Check for specific image first, then aiHint for placeholder
               <div className="aspect-video relative overflow-hidden border-b border-border/50">
                 <Image
                   src={rudra.image ? rudra.image : `https://picsum.photos/seed/${rudra.id}/400/225`}
                   alt={rudra.name}
                   width={400}
                   height={225}
                   className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                   data-ai-hint={!rudra.image ? rudra.aiHint : undefined} // Only provide aiHint if using picsum
                 />
                 {/* Optional overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 {/* Badge for Role on Image */}
                 <Badge variant="secondary" className="absolute bottom-2 right-2 text-xs backdrop-blur-sm bg-black/40 text-white border-white/30">
                    <UserCircle className="h-3 w-3 mr-1"/> {rudra.role}
                 </Badge>
               </div>
             )}
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl text-primary">{rudra.name}</CardTitle>
              {rudra.sanskritName && (
                <CardDescription className="font-noto_sans_devanagari text-xl text-muted-foreground">{rudra.sanskritName}</CardDescription>
              )}
              <CardDescription className="flex items-center gap-1.5 text-sm pt-1 text-muted-foreground">
                 <Zap className="h-4 w-4 text-primary/80" /> Role: {rudra.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between pt-0 space-y-4 text-sm">
              <div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{rudra.description}</p>

                  {/* Accordion for Story, Powers, Significance */}
                  <Accordion type="single" collapsible className="w-full text-xs">
                    {rudra.story && (
                      <AccordionItem value="story">
                        <AccordionTrigger className="text-xs py-2 hover:no-underline"><Info className="h-3 w-3 mr-1.5"/> Story / Origin</AccordionTrigger>
                        <AccordionContent className="pt-1 text-muted-foreground/90">
                          {rudra.story}
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    <AccordionItem value="powers">
                      <AccordionTrigger className="text-xs py-2 hover:no-underline"><ShieldCheck className="h-3 w-3 mr-1.5"/> Powers & Attributes</AccordionTrigger>
                      <AccordionContent className="pt-1 text-muted-foreground/90">
                         <ul className="list-disc list-inside pl-2 space-y-0.5">
                            {rudra.powers.map((power, index) => (
                                <li key={index}>{power}</li>
                            ))}
                         </ul>
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="significance" className="border-b-0">
                      <AccordionTrigger className="text-xs py-2 hover:no-underline"><BookOpen className="h-3 w-3 mr-1.5"/> Significance</AccordionTrigger>
                      <AccordionContent className="pt-1 text-muted-foreground/90">
                       {rudra.significance}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
              </div>

               {/* No detail page link for now, maybe add later */}
               {/* <div className="mt-auto pt-3">
                 <Button variant="link" size="sm" className="p-0 h-auto text-primary">Learn More (Future)</Button>
               </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional Footer/Note */}
      <footer className="text-center mt-12 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground italic">Note: The specific names and roles of the Eleven Rudras can vary across different Puranic scriptures.</p>
      </footer>
    </div>
  );
}

// Need to import rudrasData if used directly for accessing sanskrit name like in line 15
import { rudrasData } from '@/data/rudras';
