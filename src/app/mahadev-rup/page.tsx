
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllMahadevRup, MahadevRup } from '@/data/mahadev-rup'; // Ensure MahadevRup type is imported
import { ArrowRight } from 'lucide-react';

export default function MahadevRupPage() {
  const allForms = getAllMahadevRup();

  // Define the IDs of the featured forms
  const featuredFormIds = ["parashiva", "sadasiva", "panchabrahma"];

  // Separate featured forms from the rest
  const featuredForms = allForms.filter(form => featuredFormIds.includes(form.id));
  const otherForms = allForms.filter(form => !featuredFormIds.includes(form.id));

  return (
    <div className="space-y-12"> {/* Increased spacing */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary">
          Manifestations of Mahadeva (Mahadev Rup)
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Explore the diverse and profound forms through which Lord Shiva reveals His infinite nature, from the unmanifest Supreme to active cosmic functions.
        </p>
      </div>

       {/* Featured Forms Section */}
       <section className="space-y-6 border-b border-primary/20 pb-10 mb-10">
         <h2 className="text-2xl font-bold text-center text-primary mb-6">Supreme Aspects of Shiva</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {featuredForms.map((form) => (
             <Link key={form.id} href={`/mahadev-rup/${form.id}`} className="block group relative overflow-hidden rounded-lg ">
               <Card className="h-full flex flex-col transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:border-primary/50 group-hover:-translate-y-1 bg-gradient-to-br from-card via-secondary/10 to-card border border-border/50">
                 {/* Background Glow Effect */}
                 <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                 <CardHeader className="relative z-10 pb-3">
                   <div className="mb-4 overflow-hidden rounded-md aspect-video relative">
                     <Image
                       src={form.image || `https://picsum.photos/seed/${form.id}-featured/400/225`}
                       alt={form.name}
                       width={400}
                       height={225}
                       className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                       data-ai-hint={form.aiHint}
                     />
                       {/* Optional overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                   </div>
                   <CardTitle className="text-xl text-primary">{form.name}</CardTitle>
                   <CardDescription>{form.title}</CardDescription>
                 </CardHeader>
                 <CardContent className="relative z-10 flex-grow flex flex-col justify-between pt-0">
                   <div className="space-y-2 mb-4">
                       <p className="text-sm text-muted-foreground line-clamp-3">{form.description}</p>
                       <div className="flex flex-wrap gap-1">
                            {form.symbolism.slice(0, 3).map((symbol, index) => (
                                <span key={index} className="text-xs text-muted-foreground/80 border border-border/50 rounded px-1.5 py-0.5 bg-secondary/30">{symbol}</span>
                            ))}
                           {form.symbolism.length > 3 && <span className="text-xs text-muted-foreground/80 border border-border/50 rounded px-1.5 py-0.5 bg-secondary/30">...</span>}
                       </div>
                   </div>
                   <span className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-auto">
                     Explore Aspect <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </span>
                 </CardContent>
               </Card>
             </Link>
           ))}
         </div>
       </section>


       {/* Other Forms Section */}
       <section className="space-y-6">
           <h2 className="text-2xl font-bold text-center text-primary/90 mb-6">Other Significant Forms</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {otherForms.map((form) => (
               <Link key={form.id} href={`/mahadev-rup/${form.id}`} className="block group">
                 <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.03] overflow-hidden">
                   <CardHeader>
                     <div className="mb-4 overflow-hidden rounded-md aspect-video relative">
                       <Image
                         src={form.image || `https://picsum.photos/seed/${form.id}/400/225`}
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
             ))}
           </div>
        </section>
    </div>
  );
}
