
'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  Compass,
  Star,
  Search,
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
    icon: Heart,
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
  {
    title: 'Yoga Elements',
    description: 'Explore Asanas, Mudras, Pranayama, and Surya Namaskar.',
    link: '/yoga-elements',
    icon: PersonStanding,
  },
];

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const featuredItem = useMemo(() => {
    if (!isClient) return null;
    const dayOfMonth = new Date().getDate();
    return exploreItems[dayOfMonth % exploreItems.length];
  }, [isClient]);

  const filteredItems = useMemo(() => {
    if (!searchTerm) {
      return exploreItems;
    }
    return exploreItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto space-y-10 p-4">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
          <Compass className="h-8 w-8" /> Explore ShivaSphere
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Navigate through the diverse realms of knowledge dedicated to Mahadeva. Search or browse to delve deeper.
        </p>
      </div>

      {isClient && featuredItem && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-primary/90 flex items-center justify-center gap-2">
            <Star className="h-6 w-6" /> Featured Section of the Day
          </h2>
          <Card className="bg-gradient-to-br from-secondary/30 to-card border border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                <featuredItem.icon className="h-7 w-7" />
                {featuredItem.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{featuredItem.description}</CardDescription>
              <Link href={featuredItem.link}>
                <Button size="lg" className="group">
                  Explore {featuredItem.title}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      )}
      
      <div className="space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search sections (e.g., 'Rudras', 'Yoga')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 text-base"
          />
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.title}
                className="group flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:scale-[1.03] bg-card/90 backdrop-blur-sm overflow-hidden p-4 border border-border/50 rounded-lg"
              >
                <CardHeader className="pb-2 pt-2 px-0 relative">
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <item.icon className="h-5 w-5 flex-shrink-0" /> {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between pt-1 pb-2 px-0">
                  <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3 h-[60px]">
                    {item.description}
                  </CardDescription>
                  <Link href={item.link} className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full justify-center group/button text-sm">
                      View More
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No sections found for "{searchTerm}".</p>
            <p className="text-sm text-muted-foreground">Try a different search term or clear the search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
