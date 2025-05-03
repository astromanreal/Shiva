
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllMudras, Mudra } from '@/data/mudras';
import { Hand } from 'lucide-react'; // Icons
import React from 'react';
import { cn } from '@/lib/utils';

// Helper component for rendering Sanskrit text
const SanskritTextDisplay: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  if (!text) return null; // Handle potentially undefined text
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    <span className={cn(isDevanagari ? 'font-noto_sans_devanagari text-base' : '', className)}>
      {text}
    </span>
  );
};

export default function MudrasPage() {
  const mudras = getAllMudras();

  return (
    <div className="max-w-6xl mx-auto space-y-10 p-4">
      {/* Page Header */}
      <div className="text-center space-y-3 border-b pb-6 border-border/50">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
          <Hand className="h-8 w-8" /> Hasta Mudras (Hand Gestures)
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Explore various hand gestures used in yoga and meditation to influence energy flow, deepen focus, and cultivate specific states of mind.
        </p>
      </div>

      {/* Mudra Table Card */}
      <Card className="shadow-md border border-border/50 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
            Common Hasta Mudras
          </CardTitle>
          <CardDescription>
            Learn about the names, meanings, and descriptions of various hand gestures.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mudra Name</TableHead>
                <TableHead>English Name / Meaning</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mudras.map((mudra) => (
                <TableRow key={mudra.id}>
                  <TableCell className="font-medium">
                     <SanskritTextDisplay text={mudra.name} />
                     {mudra.otherMeanings && (
                        <p className="text-xs text-muted-foreground">({mudra.otherMeanings})</p>
                     )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{mudra.englishName}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{mudra.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    </div>
  );
}
