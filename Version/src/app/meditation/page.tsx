import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Heart, Sparkles, Wind, Waves, BookOpen } from 'lucide-react'; // Icons
import { getMeditationData, MeditationTechnique } from '@/data/meditation'; // Import data

export default function MeditationPage() {
    const data = getMeditationData();

    return (
        <div className="max-w-5xl mx-auto space-y-12 p-4">
            {/* Hero Section */}
            <section className="text-center space-y-4 border-b pb-8 border-border/50">
                <div className="mb-8 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
                    <Image
                        src={data.heroImage.src}
                        alt={data.heroImage.alt}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        data-ai-hint={data.heroImage.aiHint}
                        priority
                    />
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary flex items-center justify-center gap-2">
                    <Brain className="h-8 w-8" /> {data.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {data.subtitle}
                </p>
                <div className="flex justify-center flex-wrap gap-2 pt-2">
                    {data.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </section>

            {/* Introduction Card */}
            <Card className="bg-card/90 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> {data.introduction.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        {data.introduction.content}
                    </p>
                </CardContent>
            </Card>

            {/* Shiva as the Ultimate Meditator */}
            <Card className="bg-gradient-to-br from-secondary/30 to-background border border-primary/20 shadow-inner">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5 text-primary" /> {data.shivaConnection.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex flex-col md:flex-row gap-4 items-center">
                         <div className="md:w-1/3 flex-shrink-0">
                             <Image
                                src={data.shivaConnection.image.src}
                                alt={data.shivaConnection.image.alt}
                                width={300}
                                height={200}
                                className="rounded-md shadow-md object-cover"
                                data-ai-hint={data.shivaConnection.image.aiHint}
                            />
                         </div>
                         <div className="md:w-2/3">
                             <p className="text-muted-foreground">
                                {data.shivaConnection.content}
                             </p>
                         </div>
                     </div>
                </CardContent>
            </Card>

             {/* How the Mind Works */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Waves className="h-5 w-5 text-primary" /> {data.mindWorking.title}</CardTitle>
                    <CardDescription>{data.mindWorking.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {data.mindWorking.points.map((point, index) => (
                            <li key={index}>
                                <strong className="text-foreground/90">{point.term}:</strong> {point.explanation}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">{data.mindWorking.goal}</p>
                </CardContent>
            </Card>

            {/* Benefits of Meditation */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">{data.benefits.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.benefits.list.map((benefit, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow text-center">
                            <CardHeader>
                                {/* Dynamically choose icon based on benefit type - simplified */}
                                {index % 3 === 0 ? <Brain className="h-6 w-6 mx-auto text-primary mb-2" /> :
                                 index % 3 === 1 ? <Heart className="h-6 w-6 mx-auto text-primary mb-2" /> :
                                 <Sparkles className="h-6 w-6 mx-auto text-primary mb-2" />}
                                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Basic Techniques */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">{data.techniques.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                    {data.techniques.list.map((technique: MeditationTechnique, index: number) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
                                {technique.icon === 'Wind' && <Wind className="h-5 w-5 text-primary" />}
                                {technique.icon === 'BookOpen' && <BookOpen className="h-5 w-5 text-primary" />}
                                {/* Add more icons as needed */}
                                {technique.name}
                            </AccordionTrigger>
                            <AccordionContent className="space-y-3">
                                <p className="text-muted-foreground">{technique.description}</p>
                                <h4 className="font-semibold text-foreground/90">Steps:</h4>
                                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                                    {technique.steps.map((step, stepIndex) => (
                                        <li key={stepIndex}>{step}</li>
                                    ))}
                                </ol>
                                {technique.note && <p className="text-xs text-muted-foreground/80 italic">Note: {technique.note}</p>}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

             {/* Conclusion/Wisdom */}
            <Card className="bg-secondary/40 border-secondary shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> {data.conclusion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg italic">
                       "{data.conclusion.quote}"
                    </p>
                     <p className="text-muted-foreground mt-3">
                       {data.conclusion.text}
                    </p>
                </CardContent>
            </Card>

        </div>
    );
}
