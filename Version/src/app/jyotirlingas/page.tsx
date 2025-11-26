
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllJyotirlingas } from '@/data/jyotirlingas';
import { MapPin, ArrowRight, Flame } from 'lucide-react'; // Icons
import { Button } from '@/components/ui/button';

export default function JyotirlingasPage() {
  const jyotirlingas = getAllJyotirlingas();

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-3 border-b pb-8 border-border/50">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-primary flex items-center justify-center gap-3">
           <Flame className="h-8 w-8 md:h-10 md:w-10 animate-pulse"/> Dvādaśa Jyotirlinga
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The 12 eternal flames of Shiva – embodiments of light across the sacred land of Bharat, where Shiva resides eternally.
        </p>
         <div className="relative h-8 w-full flex justify-center items-center opacity-50">
             <span className="text-3xl text-primary font-noto_sans_devanagari">ॐ</span>
         </div>
      </section>

      {/* Grid of Jyotirlingas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jyotirlingas.map((linga) => (
            <Card key={linga.id} className="group flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:scale-[1.03] bg-card/90 backdrop-blur-sm overflow-hidden">
              <Link href={`/jyotirlingas/${linga.id}`} className="block">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={linga.image || `https://placehold.co/400x225.png`} 
                    alt={linga.name}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={linga.aiHint}
                  />
                </div>
              </Link>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary">{linga.name}</CardTitle>
                {linga.sanskritName && (
                  <CardDescription className="font-noto_sans_devanagari text-lg text-muted-foreground">{linga.sanskritName}</CardDescription>
                )}
                 <CardDescription className="flex items-center gap-1 text-xs pt-1 text-muted-foreground/80">
                   <MapPin className="h-3 w-3"/> {linga.location}, {linga.state}
                 </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-2">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 h-[60px]">{linga.significance}</p>
                <Link href={`/jyotirlingas/${linga.id}`} className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full justify-center group/button text-sm">
                      Explore
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                </Link>
              </CardContent>
            </Card>
        ))}
      </div>

       {/* Optional Footer */}
      <footer className="text-center mt-16 pt-8 border-t border-border/50">
        <p className="font-noto_sans_devanagari text-muted-foreground text-lg">
          शिवं शान्तं शिवात्मानं शिवं स्वर्गं शिवं सुखम्।
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          (Shiva is peace, Shiva is the soul, Shiva is heaven, Shiva is happiness.)
        </p>
      </footer>
    </div>
  );
}
