
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TodaysRead from '@/components/home/todays-read'; // Import the new component
import {
  ArrowRight, Users, Sparkles, Heart, Gem, Mountain, BookOpen, Flame,
  Shield, Calendar, Star, Users2, Crown, Clock, Zap, Dna, Swords, Atom
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-16">
      {/* Hero Section - Redesigned without Image */}
       <section className="w-full py-16 md:py-24 relative overflow-hidden">
         {/* Subtle background effect */}
         <div className="absolute inset-0 z-0 opacity-10 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-3 font-noto_sans_devanagari">
            ॐ नमः शिवाय
          </h1>
           <p className="font-sans text-lg text-foreground/80 mb-6">(Om Namah Shivaya)</p>
          <p className="max-w-[700px] text-foreground/80 md:text-xl leading-relaxed">
            Experience the Power of Shiva. Welcome to ShivaSphere, your digital gateway to the wisdom and divinity of Mahadeva. Tap into Timeless Consciousness.
          </p>
        </div>
      </section>

      {/* Today's Read Section */}
      <TodaysRead />

       {/* Mahadeva Detailed Aspects Section */}
       <section className="w-full max-w-6xl space-y-8">
         <h2 className="text-3xl font-bold tracking-tight text-primary">Aspects of Mahadeva</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

           {/* Roles & Titles Card */}
           <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Crown className="text-primary"/> Roles & Titles</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-wrap gap-2">
               <Badge variant="secondary"><Flame className="mr-1 h-3 w-3"/> God of Destruction</Badge>
               <Badge variant="secondary"><Clock className="mr-1 h-3 w-3"/> God of Time</Badge>
               <Badge variant="secondary"><Atom className="mr-1 h-3 w-3"/> Lord of Yogis</Badge>
               <Badge variant="secondary"><Zap className="mr-1 h-3 w-3"/> The Cosmic Dancer</Badge>
               <Badge variant="secondary"><BookOpen className="mr-1 h-3 w-3"/> Patron of Yoga, Arts</Badge>
               <Badge variant="secondary"><Shield className="mr-1 h-3 w-3"/> Master of Poison & Medicine</Badge>
               <Badge variant="secondary"><Star className="mr-1 h-3 w-3"/> Supreme Being (Shaivism)</Badge>
               <Badge variant="secondary"><Users className="mr-1 h-3 w-3"/> Member of Trimurti</Badge>
             </CardContent>
           </Card>

           {/* Other Names Card */}
           <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary"/> Other Names</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-wrap gap-2">
               {["Bhairava", "Mahadeva", "Mahakala", "Maheśvara", "Pashupati", "Rudra", "Shambhu", "Shankara"].map(name => (
                 <Badge key={name} variant="outline">{name}</Badge>
               ))}
             </CardContent>
           </Card>

           {/* Attributes Card */}
           <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Gem className="text-primary"/> Attributes</CardTitle>
             </CardHeader>
             <CardContent className="space-y-3 text-sm text-muted-foreground text-left">
                <p className="flex items-center gap-1.5"><strong>Affiliation:</strong> Trimurti, Ishvara, Parabrahman</p>
                <p className="flex items-center gap-1.5"><Mountain className="h-4 w-4"/> <strong>Abode:</strong> Kailasa, Shmashana</p>
                <p className="flex items-center gap-1.5"><BookOpen className="h-4 w-4"/> <strong>Mantras:</strong> Om Namah Shivaya, Mahamrityunjaya</p>
                <p className="flex items-center gap-1.5"><Swords className="h-4 w-4"/> <strong>Weapons:</strong> Trishula, Pashupatastra</p>
                 <p className="flex items-center gap-1.5"><Sparkles className="h-4 w-4"/> <strong>Symbols:</strong> Lingam, Crescent Moon, Damaru</p>
                 <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4"/> <strong>Day:</strong> Monday, Thrayodashi</p>
                 <p className="flex items-center gap-1.5"><Dna className="h-4 w-4"/> <strong>Mount:</strong> Nandi (Bull)</p>
             </CardContent>
           </Card>

         </div>
       </section>

      {/* Section Links */}
      <section className="w-full max-w-5xl space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Explore ShivaSphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/avatars" className="block hover:scale-[1.02] transition-transform duration-200 group">
            <Card className="h-full flex flex-col justify-between transition-shadow hover:shadow-lg hover:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Avatars of Mahadeva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Explore the 18 divine manifestations of Lord Shiva.</p>
                <span className="text-primary font-semibold flex items-center group-hover:underline">
                  Discover Avatars <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/rudras" className="block hover:scale-[1.02] transition-transform duration-200 group">
            <Card className="h-full flex flex-col justify-between transition-shadow hover:shadow-lg hover:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-6 w-6 text-primary" />
                   The 11 Rudras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Unveil the fierce and functional forms of Shiva's cosmic power.</p>
                <span className="text-primary font-semibold flex items-center group-hover:underline">
                  Learn about Rudras <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
           <Link href="/events" className="block hover:scale-[1.02] transition-transform duration-200 group">
            <Card className="h-full flex flex-col justify-between transition-shadow hover:shadow-lg hover:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Significant Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Explore pivotal moments and stories involving Lord Shiva.</p>
                <span className="text-primary font-semibold flex items-center group-hover:underline">
                  Explore Events <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
           <Link href="/mahadev-rup" className="block hover:scale-[1.02] transition-transform duration-200 group">
            <Card className="h-full flex flex-col justify-between transition-shadow hover:shadow-lg hover:border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Forms of Mahadeva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Discover the diverse manifestations of Shiva's infinite nature.</p>
                <span className="text-primary font-semibold flex items-center group-hover:underline">
                  View Forms <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
