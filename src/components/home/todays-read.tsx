
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Calendar, BookOpenText, MapPin } from 'lucide-react';
import { avatarsData } from '@/data/avatars';
import { eventsData } from '@/data/events';
import { stotrasData } from '@/data/stotras';
import { jyotirlingasData } from '@/data/jyotirlingas';

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

export default function TodaysRead() {
    const dayOfYear = getDayOfYear();

    // Select daily items using modulo arithmetic
    const featuredAvatar = avatarsData[dayOfYear % avatarsData.length];
    const featuredEvent = eventsData[dayOfYear % eventsData.length];
    const featuredStotra = stotrasData[dayOfYear % stotrasData.length];
    const featuredJyotirlinga = jyotirlingasData[dayOfYear % jyotirlingasData.length];

    const items = [
        {
            id: featuredAvatar.id,
            type: 'Avatar',
            title: featuredAvatar.name,
            description: featuredAvatar.description,
            link: `/avatars/${featuredAvatar.id}`,
            icon: User,
        },
        {
            id: featuredEvent.id,
            type: 'Event',
            title: featuredEvent.title,
            description: featuredEvent.description,
            link: `/events/${featuredEvent.id}`,
            icon: Calendar,
        },
        {
            id: featuredStotra.id,
            type: 'Stotra',
            title: featuredStotra.title,
            description: featuredStotra.description,
            link: `/stotras/${featuredStotra.id}`,
            icon: BookOpenText,
        },
        {
            id: featuredJyotirlinga.id,
            type: 'Jyotirlinga',
            title: featuredJyotirlinga.name,
            description: featuredJyotirlinga.significance,
            link: `/jyotirlingas/${featuredJyotirlinga.id}`,
            icon: MapPin,
        },
    ];

    return (
        <section className="w-full max-w-6xl space-y-8 py-12">
            <h2 className="text-3xl font-bold tracking-tight text-center text-primary">Today's Read</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                    <Card key={item.id} className="group flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:scale-[1.03] bg-card/90 backdrop-blur-sm overflow-hidden p-4">
                        {/* Image Removed */}
                        <CardHeader className="pb-2 pt-2 px-0 relative">
                            <CardTitle className="text-lg text-primary flex items-center gap-2"> {/* Reduced title size */}
                                <item.icon className="h-4 w-4 flex-shrink-0"/> {item.title}
                            </CardTitle>
                             {/* Item Type Badge - Adjusted Position */}
                             <span className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-0.5 rounded-full border border-border/50">
                                {item.type}
                             </span>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between pt-1 pb-2 px-0"> {/* Adjusted padding */}
                            <CardDescription className="text-xs text-muted-foreground mb-3 line-clamp-4"> {/* Reduced font size, increased line clamp slightly */}
                                {item.description}
                            </CardDescription>
                            <Link href={item.link} className="mt-auto">
                                <Button variant="outline" size="sm" className="w-full justify-center group/button text-xs"> {/* Reduced button size and text */}
                                    Explore
                                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/button:translate-x-1" /> {/* Adjusted icon size */}
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
