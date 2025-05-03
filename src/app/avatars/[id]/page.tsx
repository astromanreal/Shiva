import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAvatarById, Avatar, getAllAvatars } from '@/data/avatars';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpenText, ShieldCheck, Swords, Target, Zap } from 'lucide-react'; // Relevant icons

// Generate static paths for all avatars
export async function generateStaticParams() {
  const avatars = getAllAvatars();
  return avatars.map((avatar) => ({
    id: avatar.id,
  }));
}

interface AvatarPageProps {
  params: { id: string };
}

// Helper to render mantras with Devanagari font styling
const MantraText: React.FC<{ text: string }> = ({ text }) => {
  // Basic check for Devanagari characters - adjust regex as needed
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    // Apply the specific font class here
    <span className={isDevanagari ? 'font-noto_sans_devanagari text-lg' : ''}>
      {text}
    </span>
  );
};


export default function AvatarPage({ params }: AvatarPageProps) {
  const avatar = getAvatarById(params.id);

  if (!avatar) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
       {avatar.aiHint && ( // Use placeholder image if hint exists
        <div className="mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
          <Image
            // Use picsum photos with seed based on avatar id for consistency
            src={`https://picsum.photos/seed/${avatar.id}/800/450`}
            alt={avatar.name}
            width={800}
            height={450}
            className="object-cover w-full h-full"
            data-ai-hint={avatar.aiHint} // Keep the hint
            priority // Prioritize loading hero image
          />
        </div>
      )}

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary">
          {avatar.name}
        </h1>
        {avatar.rank && (
          <p className="text-muted-foreground text-lg">Rank: {avatar.rank}</p>
        )}
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          {avatar.description}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-primary"/> Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{avatar.purpose}</p>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Importance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{avatar.importance}</p>
        </CardContent>
      </Card>

      {avatar.achievements && avatar.achievements.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {avatar.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {avatar.stories && avatar.stories.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpenText className="h-5 w-5 text-primary"/> Stories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {avatar.stories.map((story, index) => (
              <div key={index} className="p-4 border rounded-md bg-secondary/30">
                <h3 className="font-semibold text-lg mb-1 text-foreground">{story.title}</h3>
                <p className="text-muted-foreground">{story.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

       {avatar.mantras && avatar.mantras.length > 0 && (
        <Card>
          <CardHeader>
            {/* Using a simple SVG Om symbol */}
             <CardTitle className="flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-1.83 0-3.4-1.03-4.12-2.5h1.45c.61.88 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5c-.88 0-1.67.33-2.28.88l1.08 1.09-3.3 3.3-.02-.01c-.28-.3-.46-.65-.53-1.03H4.28c.1.5.28.97.52 1.4l.01.01 1.66-1.66C7.14 16.89 8.71 17.5 10.5 17.5zm5.62-5.5c.61-.88 1.68-1.5 2.88-1.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-.88 0-1.67-.33-2.28-.88l1.08-1.09 3.3-3.3.02.01c.28.3.46.65.53 1.03h1.67c-.1-.5-.28-.97-.52-1.4l-.01-.01-1.66 1.66c-.67-.61-1.53-1-2.47-1zM10.5 9.5c.88 0 1.67.33 2.28.88l-1.08 1.09-3.3 3.3-.02-.01c-.28-.3-.46-.65-.53-1.03H6.33c.1.5.28.97.52 1.4l.01.01 1.66-1.66c.67.61 1.53 1 2.47 1 1.83 0 3.4-1.03 4.12-2.5H13.37c-.61.88-1.68 1.5-2.87 1.5-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5z"/>
               </svg>
                Mantras
             </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {avatar.mantras.map((mantra, index) => (
                <li key={index} className="p-3 border rounded-md bg-secondary/30">
                   <MantraText text={mantra} />
                   {/* Add audio playback button here in the future */}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {avatar.writtenTexts && avatar.writtenTexts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpenText className="h-5 w-5 text-primary"/> Mentioned In</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {avatar.writtenTexts.map((text, index) => (
              <Badge key={index} variant="secondary">{text}</Badge>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
