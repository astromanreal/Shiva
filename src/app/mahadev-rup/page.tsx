
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllMahadevRup, MahadevRup } from '@/data/mahadev-rup';
import { ArrowRight, Sparkles, Crown, Shield } from 'lucide-react'; // Example icons

const RupCard = ({ form }: { form: MahadevRup }) => (
    <Link key={form.id} href={`/mahadev-rup/${form.id}`} className="block group">
        <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.03] overflow-hidden">
        <CardHeader>
            <div className="mb-4 overflow-hidden rounded-md aspect-video relative">
            <Image
                src={form.image || `https://placehold.co/400x225.png`}
                alt={form.name}
                width={400}
                height={225}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={form.aiHint}
            />
            </div>
            <CardTitle className="text-xl text-primary">{form.name}</CardTitle>
            <CardDescription>{form.title}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{form.description}</p>
            <span className="text-sm font-semibold text-primary flex items-center group-hover:underline">
                Explore Form <ArrowRight className="ml-1 h-4 w-4" />
            </span>
        </CardContent>
        </Card>
    </Link>
);

export default function MahadevRupPage() {
  const allForms = getAllMahadevRup();

  const supremeForms = allForms.filter(f => f.category === 'Supreme & Transcendental');
  const cosmicForms = allForms.filter(f => f.category === 'Cosmic & Philosophical');
  const iconicForms = allForms.filter(f => f.category === 'Iconic & Symbolic');

  return (
    <div className="space-y-16">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary">
          Manifestations of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Explore the diverse and profound forms through which Lord Shiva reveals His infinite nature, from the unmanifest Supreme to active cosmic functions and iconic representations.
        </p>
      </div>

       {/* Supreme & Transcendental Forms Section */}
       <section className="space-y-6">
         <h2 className="text-2xl font-bold text-center text-primary/90 flex items-center justify-center gap-2">
            <Crown className="h-6 w-6"/> Supreme & Transcendental Forms
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {supremeForms.map((form) => (
             <RupCard key={form.id} form={form} />
           ))}
         </div>
       </section>

       {/* Cosmic & Philosophical Forms Section */}
       <section className="space-y-6">
         <h2 className="text-2xl font-bold text-center text-primary/90 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6"/> Cosmic & Philosophical Forms
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {cosmicForms.map((form) => (
             <RupCard key={form.id} form={form} />
           ))}
         </div>
       </section>

       {/* Iconic & Symbolic Forms Section */}
       <section className="space-y-6">
         <h2 className="text-2xl font-bold text-center text-primary/90 flex items-center justify-center gap-2">
            <Shield className="h-6 w-6"/> Iconic & Symbolic Forms
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {iconicForms.map((form) => (
             <RupCard key={form.id} form={form} />
           ))}
         </div>
       </section>
    </div>
  );
}
