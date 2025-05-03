

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, PersonStanding, Hand, Wind, Sun } from 'lucide-react'; // Import relevant icons

const yogaElements = [
  {
    title: 'Asanas (Yoga Postures)',
    description: 'Find a range of body stretching postures designed to open your body and make it ready for meditation.',
    link: '/asanas',
    icon: PersonStanding,
  },
  {
    title: 'Mudra (Yoga Gestures)',
    description: 'Learn how simple hand gestures connect your body and mind.',
    link: '/mudras', // Updated link to Mudras page
    icon: Hand,
  },
  {
    title: 'Pranayama (Breath Control)',
    description: 'Purify the body by controlling prana with breathing techniques.',
    link: '/pranayama', // Updated link to Pranayama page
    icon: Wind,
  },
  {
    title: 'Surya Namaskar (Sun Salutation)',
    description: 'A foundational sequence of asanas to greet the sun, often accompanied by specific mantras.',
    link: '/surya-namaskar', // Updated link
    icon: Sun,
  },
];

export default function YogaElementsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 p-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary">
          Core Elements of Yoga
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Explore the fundamental practices that form the integrated system of Yoga.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {yogaElements.map((element) => (
          <Card key={element.title} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 hover:border-primary/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-primary">
                <element.icon className="h-6 w-6" />
                {element.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <CardDescription className="mb-4">{element.description}</CardDescription>
              <Link href={element.link} className="mt-auto">
                 {/* Disable button for placeholder links if needed in future */}
                <Button variant="outline" className="w-full justify-center group" disabled={element.link === '#'}>
                  Explore {element.title.split(' ')[0]}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
       {/* Note about placeholder links if any */}
       {/*
       <p className="text-center text-sm text-muted-foreground mt-6">
         Note: Some pages might be under development.
       </p>
       */}
    </div>
  );
}
