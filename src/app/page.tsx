import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight, Users, BrainCircuit, Sparkles, Heart, Gem, Mountain, Waves, Eye, Moon, Flame,
  Shield, Calendar, Star, Users2, Crown, Clock, Zap, Dna, BookOpen, Swords, Atom // Added more icons
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-16"> {/* Increased spacing */}
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-secondary via-background to-secondary">
         {/* Optional: Add subtle background image or effect here */}
         {/* Example: Animated Nataraja or rotating Trishul could be positioned absolutely */}
         {/* <div className="absolute inset-0 z-0 opacity-10"> ... animation component ... </div> */}

        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-4">
            ॐ नमः शिवाय
          </h1>
           <p className="font-noto_sans_devanagari text-lg text-foreground/80 mb-4">(Om Namah Shivaya)</p>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mb-8">
            Salutations to the Auspicious One! Welcome to ShivaSphere, your digital gateway to the wisdom, power, and divinity of Mahadeva – The Great God.
          </p>
           {/* Placeholder for Hero Image/Animation */}
           <div className="relative w-full max-w-md mx-auto h-64 mb-8 flex items-center justify-center bg-muted/30 rounded-lg border border-border">
             <Image
               src="https://drive.google.com/file/d/1xL-JlRVuiWnwM2fH2VgZzuTNCDO2L878/view?usp=drive_link" // Updated Google Drive link
               alt="Meditating Shiva Placeholder"
               width={400}
               height={250}
               className="object-cover rounded-md opacity-70"
               data-ai-hint="meditating shiva himalayas"
               priority // Load hero image first
             />
             <p className="absolute inset-0 flex items-center justify-center text-foreground/60 text-sm">
               [Meditating Shiva / Nataraja / Trishul Placeholder]
             </p>
           </div>
          <div className="flex justify-center">
             <Link href="/ask-mahadev">
               <Button size="lg">
                 Ask Mahadev <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
             </Link>
          </div>
        </div>
      </section>

       {/* Mahadeva Detailed Aspects Section */}
       <section className="w-full max-w-6xl space-y-8">
         <h2 className="text-3xl font-bold tracking-tight text-primary">Aspects of Mahadeva</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

           {/* Roles & Titles Card */}
           <Card>
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
           <Card>
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
           <Card>
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Gem className="text-primary"/> Attributes</CardTitle>
             </CardHeader>
             <CardContent className="space-y-3 text-sm text-muted-foreground text-left">
                <p className="flex items-center gap-1.5"><strong>Affiliation:</strong> Trimurti, Ishvara, Parabrahman</p>
                <p className="flex items-center gap-1.5"><Mountain className="h-4 w-4"/> <strong>Abode:</strong> Kailasa, Shmashana</p>
                <p className="flex items-center gap-1.5"><BookOpen className="h-4 w-4"/> <strong>Mantras:</strong> Om Namah Shivaya, Mahamrityunjaya</p>
                <p className="flex items-center gap-1.5"><Swords className="h-4 w-4"/> <strong>Weapons:</strong> Trishula, Pashupatastra, Parashu, Pinaka</p>
                 <p className="flex items-center gap-1.5"><Sparkles className="h-4 w-4"/> <strong>Symbols:</strong> Lingam, Crescent Moon, Tripundra, Damaru, Vasuki, Third Eye</p>
                 <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4"/> <strong>Day:</strong> Monday, Thrayodashi</p>
                 <p className="flex items-center gap-1.5"><Dna className="h-4 w-4"/> <strong>Mount:</strong> Nandi (Bull)</p>
             </CardContent>
           </Card>

           {/* Family & Festivals Card */}
           <Card className="md:col-span-2 lg:col-span-3">
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Users2 className="text-primary"/> Family & Festivals</CardTitle>
             </CardHeader>
             <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-left">
                <div>
                    <h3 className="font-semibold mb-2 text-foreground">Family</h3>
                    <p className="text-muted-foreground mb-1"><Heart className="inline h-4 w-4 mr-1.5"/> <strong>Consort:</strong> Sati, Parvati (Shakti)</p>
                    <p className="text-muted-foreground"><Users className="inline h-4 w-4 mr-1.5"/> <strong>Children:</strong> Kartikeya, Ganesha</p>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2 text-foreground">Major Festivals</h3>
                     <div className="flex flex-wrap gap-2">
                        {["Maha Shivaratri", "Shravana", "Kartik Purnima", "Pradosha", "Teej", "Bhairava Ashtami"].map(festival => (
                            <Badge key={festival} variant="secondary">{festival}</Badge>
                        ))}
                    </div>
                 </div>
             </CardContent>
           </Card>

         </div>
       </section>

      {/* Section Links */}
      <section className="w-full max-w-4xl space-y-8">
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
                  <Flame className="h-6 w-6 text-primary" /> {/* Changed Icon */}
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
           {/* Add links for other pages */}
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
           <Link href="/ask-mahadev" className="block hover:scale-[1.02] transition-transform duration-200 md:col-span-2 group">
             <Card className="h-full flex flex-col justify-between transition-shadow hover:shadow-lg hover:border-primary/30">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <BrainCircuit className="h-6 w-6 text-primary" />
                   Ask Mahadev (AI)
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground mb-4">Seek wisdom directly. Ask our AI assistant your spiritual questions (Currently Unavailable).</p>
                 <span className="text-primary font-semibold flex items-center group-hover:underline">
                   Try Asking <ArrowRight className="ml-1 h-4 w-4" />
                 </span>
               </CardContent>
             </Card>
           </Link>
        </div>
      </section>

       {/* About Mahadev Section (Moved Lower) */}
       <section className="w-full max-w-5xl space-y-8">
         <h2 className="text-3xl font-bold tracking-tight text-primary">Who is Mahadeva?</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
           Lord Shiva, known as Mahadeva, is one of the principal deities of Hinduism. He is the Supreme Being within Shaivism, one of the major traditions within Hinduism. He is the "destroyer" or "transformer" among the Trimurti, the Hindu trinity that includes Brahma and Vishnu.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Qualities Card */}
           <Card className="bg-card/80 backdrop-blur-sm">
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Heart className="text-primary"/> Qualities</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2 text-left text-sm text-muted-foreground">
               <p><strong>Auspiciousness (Shiva):</strong> The very name means "The Auspicious One".</p>
               <p><strong>Detachment (Vairagya):</strong> The ultimate ascetic, free from worldly desires.</p>
               <p><strong>Compassion (Karuna):</strong> Holds the Ganga, swallows poison for the world.</p>
               <p><strong>Power (Shakti):</strong> Source of cosmic energy, both creative and destructive.</p>
               <p><strong>Simplicity (Bholenath):</strong> Easily pleased, representing innocence.</p>
             </CardContent>
           </Card>

           {/* Symbolism Card */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Gem className="text-primary"/> Symbolism</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-left text-sm text-muted-foreground">
                <p><strong>Third Eye (Triambaka):</strong> Wisdom, higher perception, destruction.</p>
                <p><strong>Trishul (Trident):</strong> Control over creation, preservation, destruction.</p>
                <p><strong>Damru (Drum):</strong> Cosmic sound (Nada Brahma), creation.</p>
                <p><strong>Crescent Moon (Chandrashekhara):</strong> Control over time & mind.</p>
                <p><strong>Serpent (Vasuki):</strong> Control over ego, kundalini energy.</p>
                <p><strong>Ganga River:</strong> Purification, knowledge, compassion.</p>
                <p><strong>Tiger Skin:</strong> Mastery over nature & desire.</p>
                <p><strong>Vibhuti (Sacred Ash):</strong> Purity, detachment, ultimate reality.</p>
              </CardContent>
            </Card>

           {/* Significance Card */}
           <Card className="bg-card/80 backdrop-blur-sm">
             <CardHeader>
               <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary"/> Significance</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2 text-left text-sm text-muted-foreground">
                <p><strong>The Destroyer/Transformer:</strong> Dissolves universe for recreation, destroys ego.</p>
                <p><strong>Lord of Dance (Nataraja):</strong> Cosmic dance of creation & destruction.</p>
                <p><strong>The Great Yogi (Mahayogi):</strong> Master of meditation and asceticism.</p>
                <p><strong>Source of Knowledge (Jnana):</strong> Origin of Vedas and Tantras.</p>
                <p><strong>Ultimate Reality (Parabrahman):</strong> Supreme Being in Shaivism.</p>
              </CardContent>
           </Card>
         </div>
       </section>

    </div>
  );
}
