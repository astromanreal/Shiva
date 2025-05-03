import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getMahadevRupById, getAllMahadevRup, MahadevRup } from '@/data/mahadev-rup';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Layers, Atom, BookOpen, Star } from 'lucide-react'; // Relevant icons

// Generate static paths for all Mahadev Rup forms
export async function generateStaticParams() {
  const forms = getAllMahadevRup();
  return forms.map((form) => ({
    id: form.id,
  }));
}

interface MahadevRupPageProps {
  params: { id: string };
}

// Helper to render mantras with Devanagari font styling (if needed)
const MantraText: React.FC<{ text: string }> = ({ text }) => {
  // Basic check for Devanagari characters - adjust regex as needed
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    <span className={isDevanagari ? 'font-noto_sans_devanagari text-lg' : ''}>
      {text}
    </span>
  );
};

export default function MahadevRupDetailPage({ params }: MahadevRupPageProps) {
  const form = getMahadevRupById(params.id);

  if (!form) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
        <Image
          src={`https://picsum.photos/seed/${form.id}/800/450`} // Placeholder image
          alt={form.name}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          data-ai-hint={form.aiHint}
          priority // Prioritize loading hero image
        />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary">
          {form.name}
        </h1>
        <p className="text-xl text-muted-foreground">{form.title}</p>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          {form.description}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Symbolism</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {form.symbolism.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Star className="h-5 w-5 text-primary"/> Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{form.significance}</p>
        </CardContent>
      </Card>

       {form.mantra && (
        <Card>
          <CardHeader>
             <CardTitle className="flex items-center gap-2">
               {/* Simple OM SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-1.83 0-3.4-1.03-4.12-2.5h1.45c.61.88 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5c-.88 0-1.67.33-2.28.88l1.08 1.09-3.3 3.3-.02-.01c-.28-.3-.46-.65-.53-1.03H4.28c.1.5.28.97.52 1.4l.01.01 1.66-1.66C7.14 16.89 8.71 17.5 10.5 17.5zm5.62-5.5c.61-.88 1.68-1.5 2.88-1.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-.88 0-1.67-.33-2.28-.88l1.08-1.09 3.3-3.3.02.01c.28.3.46.65.53 1.03h1.67c-.1-.5-.28-.97-.52-1.4l-.01-.01-1.66 1.66c-.67-.61-1.53-1-2.47-1zM10.5 9.5c.88 0 1.67.33 2.28.88l-1.08 1.09-3.3 3.3-.02-.01c-.28-.3-.46-.65-.53-1.03H6.33c.1.5.28.97.52 1.4l.01.01 1.66-1.66c.67.61 1.53 1 2.47 1 1.83 0 3.4-1.03 4.12-2.5H13.37c-.61.88-1.68 1.5-2.87 1.5-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5z"/>
               </svg>
                Mantra
             </CardTitle>
          </CardHeader>
          <CardContent className="p-4 border rounded-md bg-secondary/30">
             <MantraText text={form.mantra} />
             {/* Optional: Add audio playback */}
          </CardContent>
        </Card>
      )}


      {form.relatedConcepts && form.relatedConcepts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Atom className="h-5 w-5 text-primary"/> Related Concepts</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {form.relatedConcepts.map((concept, index) => (
              <Badge key={index} variant="secondary">{concept}</Badge>
            ))}
          </CardContent>
        </Card>
      )}

    </div>
  );
}
