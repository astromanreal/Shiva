
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllRudras, Rudra } from '@/data/rudras';
import { Zap, BookOpen, ShieldCheck, ArrowRight, UserCircle, Info, Flame, Wind, Mountain, Compass, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Helper to get an icon for the Rudra's element
const getElementIcon = (element?: string) => {
    if (!element) return Sparkles;
    const el = element.toLowerCase();
    if (el.includes('fire')) return Flame;
    if (el.includes('air')) return Wind;
    if (el.includes('earth')) return Mountain;
    if (el.includes('space')) return Compass;
    return Sparkles;
};

const RudraCard = ({ rudra }: { rudra: Rudra }) => {
    const ElementIcon = getElementIcon(rudra.iconography.element);

    return (
        <Link href={`/rudras/${rudra.id}`} className="block group">
            <Card className="h-full flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300 border border-border/70 hover:border-primary/50 bg-card/90 backdrop-blur-sm overflow-hidden hover:-translate-y-1">

                {/* Image Container */}
                <div className="relative md:w-1/3 aspect-video md:aspect-auto">
                    {(rudra.image || rudra.aiHint) && (
                        <Image
                            src={rudra.image || `https://i.pinimg.com/736x/b8/31/6e/b8316e761ccad627c50f4f3a6a97b368.jpg`}
                            alt={rudra.name}
                            fill
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={!rudra.image ? rudra.aiHint : undefined}
                            priority={rudra.rank ? rudra.rank <= 4 : false}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col justify-between p-4 md:w-2/3">
                    <div>
                        <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-xl text-primary">{rudra.name}</CardTitle>
                            {rudra.sanskritName && (
                                <p className="font-noto_sans_devanagari text-lg text-muted-foreground">{rudra.sanskritName}</p>
                            )}
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardDescription className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2">
                                <UserCircle className="h-3.5 w-3.5"/> {rudra.role}
                            </CardDescription>
                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2 md:line-clamp-3">{rudra.description}</p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {rudra.iconography.element && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <ElementIcon className="h-3 w-3" />
                                    Element: {rudra.iconography.element}
                                </Badge>
                                )}
                                {rudra.iconography.direction && (
                                <Badge variant="outline" className="flex items-center gap-1">
                                    <Compass className="h-3 w-3" />
                                    Direction: {rudra.iconography.direction}
                                </Badge>
                                )}
                            </div>
                        </CardContent>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/20">
                        <div className="text-sm font-semibold text-primary flex items-center group-hover:underline">
                            View Details <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};


export default function RudrasPage() {
  const rudras = getAllRudras();

  return (
    <div className="space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-primary flex items-center justify-center gap-3">
            <Zap className="h-8 w-8 md:h-10 md:w-10 animate-pulse" /> The Eleven Rudras
        </h1>
         {rudras[0].sanskritName && (
             <p className="font-noto_sans_devanagari text-2xl text-muted-foreground">(एकादश रुद्र)</p>
         )}
        <p className="text-muted-foreground md:text-lg lg:text-xl max-w-3xl mx-auto">
          Explore the fierce and functional emanations of Mahadeva, representing cosmic energies, vital forces (Pranas), and divine functions as described across various scriptures.
        </p>
      </div>

      <div className="space-y-6">
        {rudras.map((rudra) => (
            <RudraCard key={rudra.id} rudra={rudra} />
        ))}
      </div>

      <footer className="text-center mt-12 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground italic">Note: The specific names and roles of the Eleven Rudras can vary across different Puranic scriptures.</p>
      </footer>
    </div>
  );
}
