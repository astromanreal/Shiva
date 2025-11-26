
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TodaysRead from '@/components/home/todays-read'; // Import the new component
import {
  ArrowRight, Users, Sparkles, Heart, Gem, Mountain, BookOpen, Flame,
  Shield, Calendar, Star, Users2, Crown, Clock, Zap, Dna, Swords, Atom, Library, Wind, Waves, Brain
} from 'lucide-react';
import React from 'react';

// Define the interface for our app cards
interface AppCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  className?: string;
}

// Data for the app cards
const featuredApps: AppCardProps[] = [
  {
    title: 'Vaikuntha Digital',
    description: 'An interactive journey into the divine realm of Mahavishnu. Explore his avatars, stories, and wisdom.',
    link: 'https://hari-darshan.vercel.app/',
    icon: Waves,
    className: 'hover:border-blue-400/50',
  },
  {
    title: 'Sri Hanuman: Embodiment of Devotion',
    description: 'Discover the divine strength, unwavering devotion, and profound wisdom of Bajrangbali.',
    link: 'https://hanumaan.vercel.app/',
    icon: Wind,
     className: 'hover:border-orange-400/50',
  },
  {
    title: 'Shakti Darshan',
    description: 'A divine sanctuary to explore the cosmic power of Maa Adi Shakti.',
    link: 'https://adishakti.vercel.app/',
    icon: Flame,
    className: 'hover:border-red-400/50',
  },
   {
    title: 'Sanatan Insights',
    description: 'Explore sacred texts, uncover timeless teachings, and engage with interactive tools.',
    link: 'https://sanatan-texts.vercel.app/',
    icon: Library,
    className: 'hover:border-yellow-400/50',
  },
];


const AppCard: React.FC<AppCardProps> = ({ title, description, link, icon: Icon, className }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
    <Card className={`h-full flex flex-col justify-between transition-all duration-300 ease-in-out bg-card/70 backdrop-blur-sm group-hover:shadow-xl group-hover:scale-[1.03] border-border/50 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-primary">
          <Icon className="h-6 w-6" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="text-sm font-semibold text-primary flex items-center group-hover:underline">
          Visit App <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Card>
  </a>
);


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

      {/* Purusartha Journey Section */}
      <section className="w-full max-w-5xl space-y-4 text-center border-y border-border/20 py-12 bg-secondary/10 rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Embark on Your Purusartha Journey</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Explore the four aims of human life—Dharma (Duty), Artha (Prosperity), Kama (Desire), and Moksha (Liberation)—in our advanced project dedicated to the Purusarthas.
        </p>
        <Button asChild size="lg" className="group">
          <a href="https://purusartha.vercel.app/" target="_blank" rel="noopener noreferrer">
            Visit Purusartha Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </section>


      {/* Today's Read Section */}
      <TodaysRead />

      {/* Explore the SanatanVerse Section */}
      <section className="w-full max-w-6xl space-y-8 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary">Explore the SanatanVerse</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Dive deeper into the vast ocean of Sanatan Dharma with our collection of specialized applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {featuredApps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </section>


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
               {["Bhairava", "Mahadeva", "Mahakala", "Maheśvara", "Pashupati", "Rudra", "Shambhu", "Shankara"].map((name) => (
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
