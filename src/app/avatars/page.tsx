import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllAvatars, Avatar } from '@/data/avatars';
import { ArrowRight } from 'lucide-react';

export default function AvatarsPage() {
  const avatars = getAllAvatars(); // Uses the updated function

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary">
          Avatars & Forms of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg">
          Discover the diverse divine forms and manifestations of Lord Shiva.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {avatars.map((avatar) => (
          <Link key={avatar.id} href={`/avatars/${avatar.id}`} className="block group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-[1.03]">
              <CardHeader>
                {avatar.aiHint && ( // Use placeholder image if hint exists
                  <div className="mb-4 overflow-hidden rounded-md aspect-video relative">
                    <Image
                      // Use picsum photos with seed based on avatar id for consistency
                      src={`https://picsum.photos/seed/${avatar.id}/400/225`}
                      alt={avatar.name}
                      width={400}
                      height={225}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={avatar.aiHint} // Keep the hint for potential future use
                    />
                  </div>
                )}
                <CardTitle className="text-xl text-primary">{avatar.name}</CardTitle>
                 {avatar.sanskritName && (
                    <CardDescription className="font-noto_sans_devanagari">{avatar.sanskritName}</CardDescription>
                 )}
                {avatar.rank && (
                  <CardDescription>Rank: {avatar.rank}</CardDescription>
                 )}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{avatar.description}</p>
                 <span className="text-sm font-semibold text-primary flex items-center group-hover:underline">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
