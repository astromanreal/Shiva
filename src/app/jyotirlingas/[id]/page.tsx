
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getJyotirlingaById, getAllJyotirlingas, Jyotirlinga } from '@/data/jyotirlingas';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Star, BookOpen, ExternalLink, Navigation } from 'lucide-react'; // Icons
import { Badge } from '@/components/ui/badge';

// Generate static paths for all Jyotirlingas
export async function generateStaticParams() {
  const lingas = getAllJyotirlingas();
  return lingas.map((linga) => ({
    id: linga.id,
  }));
}

interface JyotirlingaPageProps {
  params: { id: string };
}

export default function JyotirlingaDetailPage({ params }: JyotirlingaPageProps) {
  const linga = getJyotirlingaById(params.id);

  if (!linga) {
    notFound();
  }

  // Construct Google Maps search URL
  const mapQuery = encodeURIComponent(`${linga.name}, ${linga.location}, ${linga.state}`);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;


  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Hero Image */}
      <div className="mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 border border-border/50">
        <Image
          src={linga.image || `https://picsum.photos/seed/${linga.id}-detail/800/450`} 
          alt={linga.name}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          data-ai-hint={linga.aiHint + ' detail view temple architecture'} 
          priority 
        />
      </div>

      {/* Header */}
      <div className="text-center space-y-2 border-b pb-4 border-border/50">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary">
          {linga.name}
        </h1>
        {linga.sanskritName && (
          <p className="font-noto_sans_devanagari text-2xl text-muted-foreground">{linga.sanskritName}</p>
        )}
        <p className="text-lg text-foreground/80">{linga.deity}</p>
         <div className="flex items-center justify-center gap-2 text-muted-foreground/80">
            <MapPin className="h-4 w-4" />
            <span>{linga.location}, {linga.state}</span>
         </div>
      </div>

      {/* Significance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-primary"/> Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{linga.significance}</p>
        </CardContent>
      </Card>

      {/* Mythology/Story (Optional - Add if data exists) */}
      {/*
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary"/> Mythology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{linga.mythology || 'Details about the mythology are not available.'}</p>
        </CardContent>
      </Card>
      */}

      {/* Location & Map Link */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary"/> Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
           <p className="text-muted-foreground">
              Latitude: {linga.coordinates.latitude}, Longitude: {linga.coordinates.longitude}
           </p>
           <div className="flex flex-wrap gap-3">
                <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                    View on Google Maps <ExternalLink className="h-4 w-4" />
                </a>
                 <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                    Get Directions <Navigation className="h-4 w-4" />
                </a>
           </div>
           {/* Optional: Embed Map (Consider performance impact) */}
           {/* <div className="aspect-video mt-4 rounded-md overflow-hidden border">
                <iframe
                    src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${linga.coordinates.latitude},${linga.coordinates.longitude}&zoom=14`} // Replace YOUR_API_KEY
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${linga.name}`}
                ></iframe>
           </div> */}
        </CardContent>
      </Card>

      {/* Rituals/Festivals/Special Features (Optional - Add if data exists) */}
      {/*
       <Card>
        <CardHeader>
          <CardTitle>Special Features & Rituals</CardTitle>
        </CardHeader>
        <CardContent>
            { // Add details here }
        </CardContent>
      </Card>
      */}

    </div>
  );
}

