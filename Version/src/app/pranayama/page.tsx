import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wind, BookOpenText, Zap, AlertTriangle, Brain, Info } from 'lucide-react'; // Icons
import { getPranayamaData, PranayamaData, PranayamaTechnique } from '@/data/pranayama'; // Import data and types

export default function PranayamaPage() {
    const data: PranayamaData = getPranayamaData();

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
                    <Wind className="h-8 w-8" /> {data.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {data.subtitle}
                </p>
            </section>

            {/* Introduction */}
            <Card className="bg-card/90 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5 text-primary"/> Introduction</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{data.introduction}</p>
                </CardContent>
            </Card>

            {/* Pranayama in Scriptures */}
            <section className="space-y-6">
                 <h2 className="text-2xl font-bold text-center text-primary">Pranayama in Sacred Texts</h2>
                 {data.sources.map((source, index) => (
                     <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BookOpenText className="h-5 w-5 text-primary"/> {source.title}</CardTitle>
                            <CardDescription>{source.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {source.keyPoints && (
                                <div>
                                    <h4 className="font-semibold text-foreground/90 mb-1">Key Points:</h4>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                        {source.keyPoints.map((point, pIndex) => (
                                            <li key={pIndex}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {source.quote && source.quoteSource && (
                                <blockquote className="mt-4 border-l-4 border-primary/50 pl-4 italic text-muted-foreground text-sm">
                                    "{source.quote}"
                                    <footer className="mt-1 text-xs text-muted-foreground/80 not-italic">— {source.quoteSource}</footer>
                                </blockquote>
                            )}
                        </CardContent>
                    </Card>
                 ))}
            </section>

            {/* Hatha Yoga Techniques */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary">{data.hathaTechniques.title}</h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">{data.hathaTechniques.intro}</p>
                <Accordion type="single" collapsible className="w-full">
                    {data.hathaTechniques.techniques.map((technique: PranayamaTechnique, index: number) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
                                <Wind className="h-5 w-5 text-primary" />
                                <div>
                                    {technique.name}
                                    {technique.sanskritName && <span className="ml-2 text-sm font-normal text-muted-foreground font-noto_sans_devanagari">({technique.sanskritName})</span>}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2 text-muted-foreground text-sm">
                                {technique.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                 {/* Caution */}
                 <div className="p-4 border-l-4 border-destructive bg-destructive/10 rounded-md text-sm text-destructive-foreground/90 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0 text-destructive"/>
                    <div>
                         <p><strong className="font-semibold">Caution:</strong> {data.hathaTechniques.caution}</p>
                    </div>
                 </div>
            </section>

            {/* Ultimate Goal */}
            <Card className="bg-gradient-to-br from-secondary/30 to-background border border-primary/20 shadow-inner">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> {data.ultimateGoal.title}</CardTitle>
                    <CardDescription>{data.ultimateGoal.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {data.ultimateGoal.quotes.map((quote, index) => (
                         <blockquote key={index} className="mt-4 border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
                             "{quote.text}"
                             <footer className="mt-1 text-sm text-muted-foreground/80 not-italic">— {quote.source}</footer>
                         </blockquote>
                    ))}
                </CardContent>
            </Card>

            {/* Modern Context */}
            <Card>
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5 text-primary"/> {data.modernContext.title}</CardTitle>
                 </CardHeader>
                 <CardContent>
                     <p className="text-muted-foreground">{data.modernContext.description}</p>
                 </CardContent>
            </Card>

        </div>
    );
}
