

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllStotras, Stotra } from '@/data/stotras';
import { ArrowRight, BookText, Feather, Users, Atom } from 'lucide-react'; 
import { Badge } from '@/components/ui/badge';

// Helper to get an icon based on deity
const getDeityIcon = (deity: string) => {
    const lowerDeity = deity.toLowerCase();
    if (lowerDeity.includes('bhairava')) return Atom; // Representing fierce energy
    if (lowerDeity.includes('nataraja')) return BookText; // Placeholder, could be a dance icon
    if (lowerDeity.includes('lingam')) return Atom; // Placeholder for Lingam
    return Users; // Default for Shiva/general
}

const StotraCard = ({ stotra }: { stotra: Stotra }) => {
    const DeityIcon = getDeityIcon(stotra.deity);
    
    return (
      <Link key={stotra.id} href={`/stotras/${stotra.id}`} className="block group">
        <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.02] overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{stotra.title}</CardTitle>
            {stotra.sanskritTitle && (
                <CardDescription className="font-noto_sans_devanagari text-lg text-muted-foreground">{stotra.sanskritTitle}</CardDescription>
            )}
            <div className="flex flex-wrap gap-2 pt-2 text-xs">
                <Badge variant="secondary" className="flex items-center gap-1">
                    <DeityIcon className="h-3 w-3"/> Deity: {stotra.deity}
                </Badge>
                {stotra.composer && (
                    <Badge variant="outline" className="flex items-center gap-1">
                        <Feather className="h-3 w-3"/> By: {stotra.composer}
                    </Badge>
                )}
                 {stotra.verse_count && (
                    <Badge variant="outline">
                        {stotra.verse_count}
                    </Badge>
                )}
            </div>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
             <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{stotra.theme || stotra.description}</p>
             <span className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-auto">
                Read Stotra <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </span>
          </CardContent>
        </Card>
      </Link>
    );
};


export default function StotrasPage() {
  const stotras = getAllStotras();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
           <BookText className="h-8 w-8" /> Sacred Stotras of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Immerse yourself in devotional hymns praising Lord Shiva and His various forms. Explore profound verses filled with devotion, power, and wisdom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stotras.map((stotra) => (
          <StotraCard key={stotra.id} stotra={stotra} />
        ))}
      </div>
    </div>
  );
}
