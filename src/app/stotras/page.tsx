import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllStotras } from '@/data/stotras';
import { ArrowRight, BookText, Feather } from 'lucide-react'; // Added icons
import { Badge } from '@/components/ui/badge';

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
          <Link key={stotra.id} href={`/stotras/${stotra.id}`} className="block group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.02] overflow-hidden">
               {/* Image rendering removed as requested */}
               {/*
               {stotra.image && stotra.aiHint && ( // Placeholder Image
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    // Use picsum photos seed if image is string, otherwise use StaticImageData src
                    src={typeof stotra.image === 'string' ? stotra.image : stotra.image.src}
                    alt={stotra.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={stotra.aiHint}
                  />
                </div>
               )}
               */}
              <CardHeader>
                <CardTitle className="text-xl text-primary">{stotra.title}</CardTitle>
                 {stotra.sanskritTitle && (
                    <CardDescription className="font-noto_sans_devanagari text-lg text-muted-foreground">{stotra.sanskritTitle}</CardDescription>
                 )}
                 <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="secondary" className="text-xs">Deity: {stotra.deity}</Badge>
                    {stotra.composer && <Badge variant="outline" className="text-xs flex items-center gap-1"><Feather className="h-3 w-3"/> {stotra.composer}</Badge>}
                 </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                 <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{stotra.description}</p>
                 <span className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-2">
                    Read Stotra <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
              </CardContent>
            </Card>
          </Link>
        ))}
        {/* Placeholder card removed as more stotras are added */}
        {/*
        <Card className="h-full flex flex-col border-dashed border-muted-foreground/50 items-center justify-center text-center bg-muted/20">
             <CardHeader>
                <CardTitle className="text-muted-foreground/80 text-lg">More Stotras Coming Soon...</CardTitle>
             </CardHeader>
             <CardContent>
                 <p className="text-sm text-muted-foreground">Check back later for hymns like Shiva Mahimna Stotram, Lingashtakam, and more.</p>
             </CardContent>
         </Card>
         */}
      </div>
    </div>
  );
}

