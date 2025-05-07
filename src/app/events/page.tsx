import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllEvents, Event } from '@/data/events'; // Ensure Event type is imported
import { ArrowRight, BookOpen, Users, CalendarIcon } from 'lucide-react'; // Added CalendarIcon
import { Badge } from '@/components/ui/badge';

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
           <CalendarIcon className="h-8 w-8" /> Significant Events of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Explore pivotal moments and stories from Hindu scriptures involving Lord Shiva, showcasing his power, compassion, and cosmic role.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} className="block group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.02] overflow-hidden">
               {(event.image || event.aiHint) && ( // Check for actual image or aiHint for placeholder
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={typeof event.image === 'string' ? event.image : `https://picsum.photos/seed/${event.id}/400/225`}
                    alt={event.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={event.aiHint || event.title.toLowerCase()} // Use title as fallback hint
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                 {/* Optionally display key figures as badges */}
                 <div className="flex flex-wrap gap-1 pt-1">
                    {event.keyFigures.slice(0, 3).map(figure => ( // Show first 3 figures
                        <Badge key={figure} variant="secondary" className="text-xs">{figure}</Badge>
                    ))}
                    {event.keyFigures.length > 3 && (
                         <Badge variant="secondary" className="text-xs">+{event.keyFigures.length - 3} more</Badge>
                    )}
                 </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                 <div>
                    <CardDescription className="text-sm mb-3 line-clamp-3">{event.description}</CardDescription>
                     <div className="space-y-1 mb-4">
                         <p className="text-xs font-semibold text-muted-foreground flex items-center gap-1"><BookOpen className="h-3 w-3" /> Related Texts:</p>
                         <div className="flex flex-wrap gap-1">
                             {event.relatedTexts.slice(0, 2).map(text => (
                                <Badge key={text} variant="outline" className="text-xs">{text}</Badge>
                             ))}
                             {event.relatedTexts.length > 2 && <Badge variant="outline" className="text-xs">...</Badge>}
                         </div>
                     </div>
                 </div>
                 <span className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-2">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
