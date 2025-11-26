
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllAvatars, Avatar } from '@/data/avatars';
import { ArrowRight, Zap, Users, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const getIconForType = (type: string) => {
  if (type.toLowerCase().includes('composite')) return Heart;
  if (type.toLowerCase().includes('fierce') || type.toLowerCase().includes('wrath')) return Zap;
  return Users;
}

const AvatarCard = ({ avatar }: { avatar: Avatar }) => {
    const Icon = getIconForType(avatar.type);
    
    return (
        <Link href={`/avatars/${avatar.id}`} className="block group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-primary/50 group-hover:-translate-y-1 bg-card/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="p-0">
                    {(avatar.image || avatar.aiHint) && (
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={avatar.image || `https://placehold.co/400x225.png`}
                                alt={avatar.name}
                                width={400}
                                height={225}
                                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                                data-ai-hint={!avatar.image ? avatar.aiHint : undefined}
                                priority={typeof avatar.image === 'string'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <Badge variant="secondary" className="absolute top-2 right-2 backdrop-blur-sm bg-black/50 text-white border-white/30 text-xs">
                                {avatar.type}
                            </Badge>
                        </div>
                    )}
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-4">
                    <div>
                        <CardTitle className="text-xl text-primary font-bold flex items-center gap-2">
                           <Icon className="h-5 w-5"/> {avatar.name}
                        </CardTitle>
                        {avatar.sanskritName && (
                            <CardDescription className="font-noto_sans_devanagari text-lg text-muted-foreground">{avatar.sanskritName}</CardDescription>
                        )}
                        <p className="text-muted-foreground text-sm mt-2 mb-4 line-clamp-3 h-[60px]">{avatar.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                           <h4 className="sr-only">Key Concepts</h4>
                           {avatar.tags?.slice(0, 3).map(tag => (
                               <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                           ))}
                        </div>
                    </div>
                    <div className="text-sm font-semibold text-primary flex items-center group-hover:underline mt-auto">
                        View Details <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default function AvatarsPage() {
  const allAvatars = getAllAvatars();

  const primaryAvatars = allAvatars.filter(a => typeof a.rank === 'number' && a.rank > 0);
  const symbolicForms = allAvatars.filter(a => typeof a.rank !== 'number' || a.rank <= 0);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary flex items-center justify-center gap-3">
          <Users className="h-10 w-10"/> Avatars & Forms of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Discover the diverse divine forms and manifestations of Lord Shiva, from fierce warriors and ascetic sages to the ultimate symbolic representations of cosmic principles.
        </p>
      </div>

      {/* Primary Avatars Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary/90 border-b border-primary/20 pb-2">
            The 19 Primary Avatars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryAvatars.map((avatar) => (
            <AvatarCard key={avatar.id} avatar={avatar} />
          ))}
        </div>
      </section>

       {/* Symbolic Forms Section */}
       {symbolicForms.length > 0 && (
         <section className="space-y-6 pt-8">
            <h2 className="text-2xl font-bold text-center text-primary/90 border-b border-primary/20 pb-2">
                Primordial & Symbolic Forms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {symbolicForms.map((avatar) => (
                <AvatarCard key={avatar.id} avatar={avatar} />
              ))}
            </div>
         </section>
       )}

    </div>
  );
}
