
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllJyotirlingas } from '@/data/jyotirlingas';
import { MapPin, ArrowRight, Flame } from 'lucide-react'; // Icons

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
         {/* Optional: Add decorative elements like Om or Trishul */}
         <div className="relative h-8 w-full flex justify-center items-center opacity-50">
             <span className="text-3xl text-primary font-noto_sans_devanagari">ॐ</span>
         </div>
      </section>

      {/* Grid of Jyotirlingas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jyotirlingas.map((linga) => (
          <Link key={linga.id} href={`/jyotirlingas/${linga.id}`} className="block group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.03] overflow-hidden bg-card/90 backdrop-blur-sm">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={linga.image || `https://picsum.photos/seed/${linga.id}/400/225`} 
                  alt={linga.name}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={linga.aiHint}
                />
                 {/* Optional overlay for text on image */}
                 {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
              </div>
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
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{linga.significance}</p>
                <span className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-auto">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
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

