
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllSuryaNamaskarMantras, SuryaNamaskarMantra } from '@/data/surya-namaskar';
import { Sun, Zap } from 'lucide-react'; // Icons
import React from 'react';
import { cn } from '@/lib/utils';

// Helper component for rendering Sanskrit text
const SanskritTextDisplay: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
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

export default function SuryaNamaskarPage() {
  const mantras = getAllSuryaNamaskarMantras();

  return (
    <div className="max-w-4xl mx-auto space-y-10 p-4">
      {/* Page Header */}
      <div className="text-center space-y-3 border-b pb-6 border-border/50">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
          <Sun className="h-8 w-8" /> Surya Namaskar (Sun Salutation)
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          A dynamic sequence of postures honoring the Sun, the source of energy and light. Explore the mantras associated with each step.
        </p>
      </div>

      {/* Optional Image */}
       <div className="my-8 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 max-w-2xl mx-auto">
            <Image
                src="https://i.pinimg.com/1200x/31/c5/40/31c540b60774f4df0243686dc9c7cec1.jpg" // Using a relevant image
                alt="Surya Namaskar sequence illustration"
                width={800}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="sun salutation yoga sequence diagram sun energy"
                priority
            />
        </div>

      {/* Mantra Table Card */}
      <Card className="shadow-md border border-border/50 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
            <Zap className="h-6 w-6 text-primary"/> Mantras for Each Step
          </CardTitle>
          <CardDescription>
            In many traditions, each of the 12 steps in Surya Namaskar is accompanied by a specific mantra invoking a name of Surya, the Sun God.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Step</TableHead>
                <TableHead>Asana (Posture)</TableHead>
                <TableHead>Sanskrit Mantra</TableHead>
                <TableHead>Translation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mantras.map((item) => (
                <TableRow key={item.step}>
                  <TableCell className="font-medium">{item.step}</TableCell>
                  <TableCell>{item.asana}</TableCell>
                  <TableCell>
                     <SanskritTextDisplay text={item.sanskritMantra} className="text-base"/>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm italic">"...{item.translation}"</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
           <p className="text-xs text-muted-foreground mt-4 italic text-center">
                The full invocation for each mantra is "Om, greetings to the one who..." followed by the translation.
           </p>
        </CardContent>
      </Card>

       {/* Optional: Add sections about Benefits, Sequence steps visualization, etc. */}

    </div>
  );
}
