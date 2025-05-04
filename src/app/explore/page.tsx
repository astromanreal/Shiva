
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Flame,
  Calendar,
  MapPin,
  Sparkles,
  Gem,
  Skull,
  BookText,
  Mic2,
  Heart,
  PersonStanding,
  Brain,
  Compass // Using Compass for Explore icon
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ExploreItem {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

const exploreItems: ExploreItem[] = [
  {
    title: 'Avatars',
    description: 'Discover the divine forms and manifestations of Lord Shiva.',
    link: '/avatars',
    icon: Users,
  },
  {
    title: 'Rudras',
    description: 'Unveil the fierce and functional forms of Shiva\'s cosmic power.',
    link: '/rudras',
    icon: Flame,
  },
  {
    title: 'Events',
    description: 'Explore pivotal moments and stories involving Lord Shiva.',
    link: '/events',
    icon: Calendar,
  },
  {
    title: 'Jyotirlingas',
    description: 'Journey through the 12 eternal flames representing Lord Shiva.',
    link: '/jyotirlingas',
    icon: MapPin,
  },
  {
    title: 'Mahadev Rup',
    description: 'Explore the diverse manifestations of Shiva\'s infinite nature.',
    link: '/mahadev-rup',
    icon: Sparkles,
  },
  {
    title: 'Attributes',
    description: 'Learn about the significant symbols associated with Mahadeva.',
    link: '/attributes',
    icon: Gem,
  },
  {
    title: 'Bhairava',
    description: 'Understand the terrifying aspect of Shiva, the Lord of Time.',
    link: '/kaal-bhairava',
    icon: Skull,
  },
  {
    title: 'Stotras',
    description: 'Immerse yourself in devotional hymns praising Lord Shiva.',
    link: '/stotras',
    icon: BookText,
  },
  {
    title: 'Mantras',
    description: 'Connect with the divine through sacred sound vibrations.',
    link: '/mantras',
    icon: Mic2,
  },
  {
    title: 'Maa Kali',
    description: 'Explore the fierce and compassionate embodiment of Shakti.',
    link: '/maa-kali',
    icon: Heart, // Using Heart as a placeholder, could be Skull or Zap too
  },
  {
    title: 'Yoga',
    description: 'Discover the ancient science of harmonizing body, mind, and spirit.',
    link: '/yoga',
    icon: PersonStanding,
  },
  {
    title: 'Meditation',
    description: 'Journey inward to stillness and wisdom with Dhyana.',
    link: '/meditation',
    icon: Brain,
  },
   { // Add link to Yoga Elements sub-page
    title: 'Yoga Elements',
    description: 'Explore Asanas, Mudras, Pranayama, and Surya Namaskar.',
    link: '/yoga-elements',
    icon: PersonStanding, // Can reuse or find another icon like Grid
  },
];

export default function ExplorePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 p-4">
      {/* Page Header */}
      <div className="text-center space-y-3 border-b pb-6 border-border/50">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
          <Compass className="h-8 w-8" /> Explore ShivaSphere
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Navigate through the diverse realms of knowledge dedicated to Mahadeva. Click on any section to delve deeper.
        </p>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {exploreItems.map((item) => (
          <Card
            key={item.title}
            className="group flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:scale-[1.03] bg-card/90 backdrop-blur-sm overflow-hidden p-4 border border-border/50 rounded-lg perspective-1000" // Added perspective
          >
             {/* Added transform for 3D effect */}
            <div className="relative transition-transform duration-500 group-hover:rotate-y-3 group-hover:-translate-z-2">
              <CardHeader className="pb-2 pt-2 px-0 relative">
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <item.icon className="h-5 w-5 flex-shrink-0" /> {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-1 pb-2 px-0">
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
                <Link href={item.link} className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full justify-center group/button text-sm">
                    View More
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Add perspective and rotate utility classes if not present in globals.css or tailwind config
/*
@layer utilities {
  .perspective-1000 { perspective: 1000px; }
  .rotate-y-3 { transform: rotateY(3deg); }
  .-translate-z-2 { transform: translateZ(-2rem); } // Adjust value as needed
}
*/

// Make sure tailwind.config.js allows these utilities if purged
