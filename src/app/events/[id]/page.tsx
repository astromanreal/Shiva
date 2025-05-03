import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getEventById, Event, getAllEvents } from '@/data/events';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpenText, CheckCircle, Users, Info, CalendarIcon } from 'lucide-react'; // Relevant icons

// Generate static paths for all events
export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

interface EventPageProps {
  params: { id: string };
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
       {event.aiHint && ( // Use placeholder image if hint exists
        <div className="mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <Image
            // Use picsum photos with seed based on event id for consistency
            src={`https://picsum.photos/seed/${event.id}/800/450`}
            alt={event.title}
            width={800}
            height={450}
            className="object-cover w-full h-full"
            data-ai-hint={event.aiHint} // Keep the hint
            priority // Prioritize loading hero image
          />
        </div>
      )}

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary flex items-center justify-center gap-2">
          <CalendarIcon className="h-8 w-8" /> {event.title}
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          {event.description}
        </p>
      </div>

      {event.longDescription && (
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5 text-primary"/> Detailed Account</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Render newlines correctly if present */}
            {event.longDescription.split('\n').map((paragraph, index) => (
               <p key={index} className="text-muted-foreground mb-4 last:mb-0">{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      )}


       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary"/> Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
             {event.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
          </ul>
        </CardContent>
      </Card>

       {event.keyInfo && event.keyInfo.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5 text-primary"/> Key Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
             {event.keyInfo.map((info, index) => (
               <div key={index} className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground/90">{info.label}:</span>
                  <span className="text-sm text-muted-foreground">{info.value}</span>
               </div>
             ))}
          </CardContent>
        </Card>
      )}


      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary"/> Key Figures</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {event.keyFigures.map((figure, index) => (
            <Badge key={index} variant="secondary">{figure}</Badge>
          ))}
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BookOpenText className="h-5 w-5 text-primary"/> Related Texts</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {event.relatedTexts.map((text, index) => (
            <Badge key={index} variant="outline">{text}</Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
