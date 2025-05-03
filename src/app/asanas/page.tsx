import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllAsanas, Asana } from '@/data/asanas';
import { BookOpen, PersonStanding, Wind } from 'lucide-react'; // Example icons

export default function AsanasPage() {
  const asanas = getAllAsanas();

  return (
    <div className="space-y-8 max-w-5xl mx-auto p-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
           <PersonStanding className="h-8 w-8" /> Explore Asanas (Yoga Postures)
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Discover a wide range of Asanas, each with its unique benefits for physical and mental well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {asanas.map((asana) => (
          <Card key={asana.id} className="h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary/50 group-hover:scale-[1.02] overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{asana.name}</CardTitle>
              {asana.sanskritName && (
                <CardDescription className="text-muted-foreground">{asana.sanskritName}</CardDescription>
              )}
               <CardDescription className="text-sm">Type: {asana.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{asana.description}</p>
               <div className="space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground flex items-center gap-1"><BookOpen className="h-3 w-3" /> Benefits:</p>
                   <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs">
                    {asana.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                     {asana.benefits.length > 3 && <li className="italic">...and more</li>}
                  </ul>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

