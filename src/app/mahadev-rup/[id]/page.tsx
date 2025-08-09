

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getMahadevRupById, getAllMahadevRup, FaceDetail } from '@/data/mahadev-rup';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sparkles, Layers, Atom, BookOpen, Star, ArrowLeft, ArrowRight,
  Info, Quote, BookCheck, Shield, ExternalLink, Youtube, Search, Heart, Brain, Library, BookCopy, Users, Flame, Skull, Compass, Link as LinkIcon, Building, Feather, Sun, Hand, Wind, Drum, LucideIcon, Clapperboard, Palette, Dna, Group, Bot, AtomIcon, Droplets, Earth, Zap, Moon
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata, ResolvingMetadata } from 'next';


interface MahadevRupPageProps {
  params: { id: string };
}

// Generate metadata for each Mahadev Rup page
export async function generateMetadata(
  { params }: MahadevRupPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const form = getMahadevRupById(params.id);

  if (!form) {
    return {
      title: 'Form Not Found | ShivaSphere',
      description: 'The requested form or manifestation of Mahadeva could not be found.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const image = form.image || form.image_url;

  return {
    title: `${form.name} | Forms of Mahadeva | ShivaSphere`,
    description: form.description,
    openGraph: {
      title: `${form.name} | ShivaSphere`,
      description: form.description,
      images: image ? [image, ...previousImages] : previousImages,
    },
  };
}


// Generate static paths for all Mahadev Rup forms
export async function generateStaticParams() {
  const forms = getAllMahadevRup();
  return forms.map((form) => ({
    id: form.id.replace(/^rupa_?/, ''),
  }));
}

// Helper to render mantras/Sanskrit text with appropriate font
const SanskritText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  if (!text) return null;
  const isDevanagari = /[\u0900-\u097F]/.test(text);
  return (
    <span className={cn(isDevanagari ? 'font-noto_sans_devanagari' : 'font-sans', className)}>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

// Helper for external search icons
const WikipediaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
        <path d="M511.2,176.2c0-10.9-2.2-22.3-6.6-34.1c-1.9-5.1-4.3-10-6.8-14.6c-4.9-8.8-10.4-16.9-16.6-24.2c-6.2-7.3-13-14-20.3-19.9 c-7.3-5.9-14.9-10.8-22.9-14.8c-8-4-16.1-7.2-24.5-9.6c-8.4-2.4-16.8-4.2-25.5-5.3c-8.6-1.1-17.4-1.7-26.2-1.7 c-21.9,0-43.7,3.6-64.6,10.6c-13.6,4.6-26.9,10.7-39.2,18.4c-12.3,7.6-23.7,16.6-34.2,26.9l-11.2-13.7 c-6.6-8.2-15.6-13-25.2-13.4c-9.6-0.4-18.7,3.6-25.2,11.2L12,112.5c-10,11.8-11,28.7-2.3,41.4l82,119.5l-63.5,91.3 C20.3,375.4,19.9,387,24,397.8c4.1,10.8,12.5,19.3,23.1,23.1c10.6,3.8,22.2,3.1,32.3-1.8l70.1-34.3l34.3,37.3 c9.4,10.2,22.4,15.8,35.9,15.8c1,0,2.1,0,3.1-0.1c15-1,28.5-9.2,36.9-22.2l12.5-19.2c12.3-18.9,30.3-33.8,51.4-43.1 c13.6-6,28.2-9.9,43.3-11.4c15.1-1.5,30.4-1.3,45.3,0.6c14.9,1.9,29.4,5.4,43,10.4c13.6,5,26.5,11.4,38.1,19.1l-25.5,17.4 c-13.4,9.1-17.1,27.2-8,40.6c9.1,13.4,27.2,17.1,40.6,8l53.9-36.9c13.4-9.1,23.3-22,28.5-36.9c5.2-14.9,5.5-30.8,1.2-46.1 c-4.3-15.3-12.9-29.3-24.8-41.2c-12-11.9-26.4-21.5-42.3-28.4c-7.8-3.4-15.8-6.1-23.9-8.2c-8.1-2.1-16.3-3.6-24.6-4.5 C364.3,195.3,356.1,194,348,194c-22.6,0-44.5,4.7-64.8,13.9c-10.9,4.9-21.2,10.9-30.7,18.1L125,322.9l46.2-66.9 c9.1-13.3,11.9-30,7.1-45.7c-4.8-15.7-16.6-28.1-31.4-33.9L80.5,153l86,1.4c15.7,0.3,30.3-6.4,40.6-18.1 c10.3-11.7,15.2-26.9,13.9-42.3c-1.3-15.4-8.7-29.4-20.6-39.7c-11.9-10.3-26.9-16.4-42.8-17.6c-15.9-1.2-31.5,1.7-45.7,8.4 c-14.2,6.7-27.4,16.8-38.6,29.4L64.8,193.3c-6.8,7.7-17.2,9-25.8,3.2c-8.6-5.8-11.6-16.8-7.7-25.8L120.8,51.8l9.4-10.7 c3.3-3.8,7.9-5.9,12.6-5.9c3.1,0,6.2,0.9,9,2.8l105.1,72c6.8,4.6,15.3,4.6,22.1,0l77.9-53.3c3.8-2.6,8.2-4,12.7-4 c2.6,0,5.2,0.5,7.7,1.5c10,4.1,16.3,13.8,16.3,24.6V176.2z"/>
    </svg>
);

const getIconographyValue = (val: any): React.ReactNode => {
    if (typeof val === 'string') return val;
    if (typeof val === 'number') return val.toString();
    if (Array.isArray(val)) {
      return (
        <div className="flex flex-wrap gap-2 mt-1">
          {val.map((item, index) => <Badge key={index} variant="secondary">{getIconographyValue(item)}</Badge>)}
        </div>
      );
    }
    if (typeof val === 'object' && val !== null) {
      if (val.name) return `${val.name} (${val.type || val.meaning}: ${val.symbolism || val.significance})`;
      if (val.mudra) return val.mudra;
      return Object.entries(val).map(([k, v]) => <div key={k}><strong className="font-semibold capitalize text-foreground/80">{k.replace(/_/g, ' ')}:</strong> {getIconographyValue(v)}</div>);
    }
    return null;
  };
  
const renderValue = (value: any) => {
    if (!value) return null;
    if (typeof value === 'string') return <p className="text-muted-foreground">{value}</p>;
    if (Array.isArray(value)) {
        return (
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {value.map((item, index) => <li key={index}>{typeof item === 'object' ? JSON.stringify(item) : item}</li>)}
            </ul>
        );
    }
    if (typeof value === 'object') {
        return (
            <div className="space-y-3">
                {Object.entries(value).map(([key, val]) => (
                    <div key={key} className="flex items-start gap-3"><Info className="h-4 w-4 text-primary mt-1 flex-shrink-0" /><div><strong className="text-foreground/90 capitalize">{key.replace(/_/g, ' ')}:</strong> <span className="text-muted-foreground text-sm">{String(val)}</span></div></div>
                ))}
            </div>
        );
    }
    return null;
};

const renderScripturalReferences = (refs: any) => {
    if (!refs) return null;
    return refs.map((ref: any, index: number) => {
        if (typeof ref === 'string') {
            return <Badge key={index} variant="secondary">{ref}</Badge>;
        }
        if (typeof ref === 'object' && (ref.quote || ref.text || ref.source)) {
            const quote = ref.quote || ref.description || "";
            const source = ref.text || ref.source || ref.verse || "";
            const link = ref.link;

            return (
                <blockquote key={index} className="border-l-4 pl-4 italic text-muted-foreground text-sm my-2">
                    {quote && <p>"{quote}"</p>}
                    <footer className="mt-1 text-xs not-italic">— {source}
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:underline">
                                <LinkIcon className="inline h-3 w-3" />
                            </a>
                        )}
                    </footer>
                </blockquote>
            );
        }
        return null;
    });
};

const getElementIcon = (element: string) => {
    switch (element.toLowerCase()) {
      case 'earth': return Earth;
      case 'water': return Droplets;
      case 'fire': return Flame;
      case 'air': return Wind;
      case 'ether (space)': return AtomIcon;
      default: return Sparkles;
    }
};

const PanchabrahmaFaces: React.FC<{ faces: FaceDetail[] }> = ({ faces }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {faces.map((face, index) => {
        const Icon = getElementIcon(face.element);
        return (
          <Card key={index} className="bg-secondary/20 border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-xl text-primary">{face.name} <span className="font-normal text-muted-foreground text-base">({face.meaning})</span></CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                <p className="flex items-center gap-1"><Zap className="h-4 w-4 text-primary/70"/> <strong>Function:</strong> {face.function}</p>
                <p className="flex items-center gap-1"><Icon className="h-4 w-4 text-primary/70"/> <strong>Element:</strong> {face.element}</p>
                <p className="flex items-center gap-1"><Compass className="h-4 w-4 text-primary/70"/> <strong>Direction:</strong> {face.direction}</p>
                <p className="flex items-center gap-1"><Palette className="h-4 w-4 text-primary/70"/> <strong>Color:</strong> {face.color}</p>
                <p className="flex items-center gap-1"><Star className="h-4 w-4 text-primary/70"/> <strong>Quality:</strong> {face.associated_quality}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

export default function MahadevRupDetailPage({ params }: MahadevRupPageProps) {
  const allForms = getAllMahadevRup();
  const currentIndex = allForms.findIndex(f => f.id.replace(/^rupa_?/, '') === params.id.replace(/^rupa_?/, ''));
  const form = allForms[currentIndex];

  if (!form) {
    notFound();
  }

  const nextFormIndex = (currentIndex + 1) % allForms.length;
  const nextForm = allForms[nextFormIndex];

  const youtubeQuery = encodeURIComponent(`${form.name} Shiva`);
  const googleQuery = encodeURIComponent(`${form.name} Mahadeva`);
  const wikipediaUrl = form.external_links?.[0]?.url || `https://en.wikipedia.org/wiki/${form.name}`;

  const allDataPoints = [
    { title: "Description", data: form.description, icon: Info },
    { title: "Meaning", data: form.meaning, icon: Info },
    { title: "Translation", data: form.translation, icon: Info },
    { title: "Essence", data: form.essence, icon: Info },
    { title: "Overview", data: form.overview, icon: Info },
    { title: "The Five Faces", data: form.faces, icon: Bot, render: (data: any) => <PanchabrahmaFaces faces={data} />},
    { title: "Cosmic Functions", data: form.cosmic_function?.panchakritya, icon: Atom, render: (data: any) => <div className="flex flex-wrap gap-2">{data.map((d: string, i: number) => <Badge key={i} variant="outline">{d}</Badge>)}</div> },
    { title: "Philosophy", data: form.philosophy, icon: Brain },
    { title: "Domain", data: form.domain, icon: Compass, render: (data: any) => <div className="flex flex-wrap gap-2">{data.map((d: string, i: number) => <Badge key={i} variant="outline">{d}</Badge>)}</div> },
    { title: "Practices", data: form.practices, icon: Dna, render: (data: any) => {
        return (<div className="space-y-3 text-sm">
            {data.common_practices && <div><h4 className="font-semibold text-foreground/90">Common Practices:</h4><ul className="list-disc list-inside text-muted-foreground">{data.common_practices.map((p:string, i:number)=><li key={i}>{p}</li>)}</ul></div>}
            {data.path && <p><strong>Path:</strong> {data.path}</p>}
            {data.purpose && <p><strong>Purpose:</strong> {data.purpose}</p>}
        </div>)
    }},
    { title: "Representation", data: form.representation, icon: Clapperboard },
    { title: "Spiritual Significance", data: form.spiritual_significance, icon: Star },
    { title: "Importance in Spiritual Practice", data: form.importance_in_spiritual_practice, icon: Heart },
    { title: "Artistic and Cultural Impact", data: form.artistic_and_cultural_impact, icon: Palette },
    { title: "Significance", data: form.significance, icon: Star, render: (data: any) => {
        if (typeof data === 'string') return <p className="text-muted-foreground">{data}</p>;
        if (typeof data === 'object') {
            return (<div className="space-y-4">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <h4 className="font-semibold capitalize text-foreground/90">{key.replace(/_/g, ' ')}:</h4>
                        {Array.isArray(value) ? <ul className="list-disc list-inside text-muted-foreground text-sm">{value.map((v:any, i:number) => <li key={i}>{v}</li>)}</ul> : <p className="text-muted-foreground text-sm">{String(value)}</p>}
                    </div>
                ))}
            </div>)
        }
        return null;
    }},
    { title: "Symbolism", data: form.symbolism, icon: Layers, render: (data: any) => {
        if (Array.isArray(data)) return <div className="flex flex-wrap gap-2">{data.map((s: any, i: number) => <Badge key={i} variant="secondary">{s}</Badge>)}</div>;
        if (typeof data === 'object') {
             return (<div className="space-y-3">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key}><strong className="capitalize text-foreground/90">{key.replace(/_/g, ' ')}:</strong> <span className="text-muted-foreground text-sm">{String(value)}</span></div>
                ))}
            </div>)
        }
        return null;
    }},
    { title: "Iconography", data: form.iconography || form.iconography_detail, icon: Sparkles, render: (data: any) => Object.entries(data).map(([key, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) return null;
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      if (key === 'attributes_male' || key === 'attributes_female') {
          return (<div key={key} className="p-2 rounded-lg bg-secondary/20 mt-2"><h4 className="font-semibold text-foreground/90 mb-2">{label}</h4><div className="space-y-2">{Object.entries(value as object).map(([k,v]) => <div key={k} className="text-sm"><strong className="capitalize text-foreground/80">{k.replace(/_/g, ' ')}:</strong> <span className="text-muted-foreground">{getIconographyValue(v)}</span></div>)}</div></div>)
      }
      return (<div key={key} className="flex items-start gap-3 p-2 rounded-lg bg-secondary/20"><Info className="h-4 w-4 text-primary mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-foreground/90">{label}</h4><div className="text-sm text-muted-foreground">{getIconographyValue(value)}</div></div></div>);
    }) },
    { title: "Art and Culture", data: form.art_and_culture, icon: BookOpen, render: (data: any) => (<div className="space-y-3">
        {data.influence && <div><h4 className="font-semibold">Influence:</h4><p className="text-muted-foreground text-sm">{data.influence}</p></div>}
        {data.used_in && <div><h4 className="font-semibold">Used In:</h4><div className="flex flex-wrap gap-2 mt-1">{data.used_in.map((item: string, i: number) => <Badge key={i} variant="outline">{item}</Badge>)}</div></div>}
    </div>)},
    { title: "Philosophical Context", data: form.philosophical_context || form.philosophical_meaning, icon: Brain, render: (data: any) => {
        if(Array.isArray(data)) return <div className="flex flex-wrap gap-2">{data.map((p: any, i: number) => <Badge key={i} variant="outline">{p}</Badge>)}</div>
        return renderValue(data);
    }},
    { title: "Philosophical Significance", data: form.philosophical_significance, icon: Brain, render: (data: any) => <ul className="list-disc list-inside space-y-1 text-muted-foreground">{Array.isArray(data) ? data.map((item:string, index:number) => <li key={index}>{item}</li>) : [data]}</ul>},
    { title: "Associated Legends", data: form.associated_legends, icon: BookOpen, render: (data: any) => (
        <Accordion type="single" collapsible className="w-full">
            {data.map((legend: any, index: number) => (
               <AccordionItem key={index} value={`item-${index}`}>
                 <AccordionTrigger>{legend.title}</AccordionTrigger>
                 <AccordionContent className="space-y-2">
                   <p className="text-muted-foreground">{legend.summary}</p>
                 </AccordionContent>
               </AccordionItem>
            ))}
        </Accordion>
    )},
    { title: "Forms and Variants", data: form.forms_and_variants, icon: Group, render: (data: any) => (
        <Accordion type="single" collapsible className="w-full">
            {data.map((variant: any, index: number) => (
               <AccordionItem key={index} value={`variant-${index}`}>
                 <AccordionTrigger>{variant.name} <span className="text-sm text-muted-foreground ml-2">({variant.meaning})</span></AccordionTrigger>
                 <AccordionContent className="space-y-2">
                   <p className="text-muted-foreground">{variant.significance}</p>
                   {variant.list && <div className="flex flex-wrap gap-2 mt-2">{variant.list.map((item: string) => <Badge key={item} variant="secondary">{item}</Badge>)}</div>}
                 </AccordionContent>
               </AccordionItem>
            ))}
        </Accordion>
    )},
    { title: "Scriptural References", data: form.scriptural_references || form.scriptures || form.references || form.associated_texts, icon: Library, render: renderScripturalReferences },
    { title: "Mantras", data: form.mantras || form.mantra, icon: Quote, render: (data: any) => (
        <div className="space-y-4">
            {(Array.isArray(data) ? data : [data]).map((m: any, index: number) => (
                <div key={index} className="p-3 border rounded-md bg-secondary/30">
                    {typeof m === 'string' ? <SanskritText text={m} className="text-lg" /> : <>
                        {m.title && <h4 className="font-semibold text-foreground/90 mb-1">{m.title}</h4>}
                        <SanskritText text={m.text_sanskrit || m.mantra || m.sanskrit || m.text || ''} className="text-lg"/>
                        {(m.translation || m.meaning) && <p className="text-sm text-muted-foreground mt-2 italic">"{m.translation || m.meaning}"</p>}
                    </>}
                </div>
            ))}
        </div>
    )},
    { title: "Major Temples & Representations", data: form.temples || form.templeAssociations || form.temples_and_iconic_representations, icon: Building, render: (data: any) => (
        <div className="space-y-3">
            {data.map((temple: any, index: number) => (
                <div key={index}>
                    <h4 className="font-semibold">{temple.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1"><Compass className="h-3 w-3"/> {temple.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{temple.significance || temple.description || temple.importance}</p>
                </div>
            ))}
        </div>
    )},
    { title: "Cultural References", data: form.cultural_references, icon: BookOpen, render: (data: any) => (
        <div className="space-y-4">
            {data.texts && <div><h4 className="font-semibold mb-2">Texts:</h4><div className="flex flex-wrap gap-2">{data.texts.map((t: string, i: number) => <Badge key={i}>{t}</Badge>)}</div></div>}
            {data.sculptures && <div><h4 className="font-semibold mb-2">Sculptures/Sites:</h4><ul className="list-disc list-inside">{data.sculptures.map((s: any, i: number) => <li key={i}>{s.name}: {s.description}</li>)}</ul></div>}
        </div>
    )},
    { title: "Worship & Rituals", data: form.worship || form.worship_and_rituals, icon: Dna, render: (data: any) => {
        if (!data) return null;
        return (
            <div className="space-y-3 text-sm">
                {data.festival && <p><strong>Festival:</strong> {data.festival}</p>}
                {data.days && <p><strong>Days:</strong> {data.days}</p>}
                {data.associated_practices && <div><h4 className="font-semibold">Associated Practices:</h4><ul className="list-disc list-inside text-muted-foreground">{data.associated_practices.map((p:string, i:number)=><li key={i}>{p}</li>)}</ul></div>}
                {data.offerings && <div><h4 className="font-semibold">Offerings:</h4><ul className="list-disc list-inside text-muted-foreground">{data.offerings.map((o:string, i:number)=><li key={i}>{o}</li>)}</ul></div>}
            </div>
        );
    }},
    { title: "Source References", data: form.source_references, icon: BookCheck, render: (data: any) => renderScripturalReferences(data) },
    { title: "Quotes", data: form.quotes, icon: Quote, render: (data: any) => (
         <div className="space-y-4">
            {data.map((q: any, i: number) => (
                 <blockquote key={i} className="border-l-4 pl-4 italic text-muted-foreground text-sm">
                    <p>"{q.text}"</p>
                    <footer className="mt-1 text-xs not-italic">— {q.source}</footer>
                </blockquote>
            ))}
         </div>
    )},
    { title: "Associated Rishis", data: form.associated_rishis, icon: Users, render: (data: any) => <div className="flex flex-wrap gap-2">{data.map((r: string, i: number) => <Badge key={i} variant="secondary">{r}</Badge>)}</div> },
    { title: "Related Concepts", data: form.relatedConcepts || form.related_concepts, icon: BookCopy, render: (data: any) => <div className="flex flex-wrap gap-2">{data.map((c: any, i: number) => <Badge key={i} variant="outline">{c}</Badge>)}</div> },
    { title: "Associated Forms", data: form.associated_forms || form.related_forms, icon: Users, render: (data: any) => <div className="flex flex-wrap gap-2">{data.map((f: any, i: number) => <Badge key={i} variant="secondary">{typeof f === 'string' ? f : f.name}</Badge>)}</div> },
    { title: "Qualities", data: form.qualities, icon: Heart, render: (data: any) => <div className="flex flex-wrap gap-2">{data.map((q: any, i: number) => <Badge key={i} variant="secondary">{q}</Badge>)}</div> },
    { title: "Cultural Significance", data: form.cultural_significance, icon: Feather },
    { title: "Theme", data: form.theme, icon: Sun },
    { title: "Spiritual Lesson", data: form.spiritual_lesson, icon: Heart, render: (data) => <p className="text-muted-foreground italic">"{data}"</p> },
  ];

  const finalCategory = form.category || form.type || form.aspect;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="relative">
        {(form.image || form.aiHint || form.image_url) && (
          <div className="mb-6 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
            <Image
              src={form.image || form.image_url || `https://placehold.co/800x450.png`}
              alt={form.name}
              width={800}
              height={450}
              className="object-cover w-full h-full"
              data-ai-hint={!form.image && !form.image_url ? form.aiHint : undefined}
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}
         <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
             <Link href="/mahadev-rup">
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   <ArrowLeft className="h-4 w-4 mr-1.5 transition-transform group-hover:-translate-x-1"/>
                   All Forms
                </Button>
             </Link>
             <Link href={`/mahadev-rup/${nextForm.id.replace(/^rupa_?/, '')}`}>
                <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm group">
                   Next Form
                   <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1"/>
                </Button>
             </Link>
          </div>
      </div>

      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary">
          {form.name}
        </h1>
        {(form.sanskritName || form.sanskrit_name) && (
          <p className="font-noto_sans_devanagari text-2xl text-muted-foreground">{form.sanskritName || form.sanskrit_name}</p>
        )}
        {(form.title || form.meaning) && <p className="text-xl text-muted-foreground">{form.title || form.meaning}</p>}
        {finalCategory && <Badge variant="secondary">{finalCategory}</Badge>}
      </div>

      <div className="space-y-6">
        {allDataPoints.map(({ title, data, icon: Icon, render }) => {
            if (!data || (Array.isArray(data) && data.length === 0)) return null;
            return (
                <Card key={title}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Icon className="h-5 w-5 text-primary"/> {title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {render ? render(data) : renderValue(data)}
                    </CardContent>
                </Card>
            );
        })}
      </div>
      
      <div className="text-center pt-8 space-y-4">
        <h3 className="text-lg font-semibold text-primary">Explore More</h3>
        <div className="flex justify-center flex-wrap gap-4">
            <Button asChild variant="outline">
              <a href={`https://www.youtube.com/results?search_query=${youtubeQuery}`} target="_blank" rel="noopener noreferrer">
                 <Youtube className="h-5 w-5 mr-2"/>
                 Search on YouTube
              </a>
            </Button>
            <Button asChild variant="outline">
               <a href={`https://www.google.com/search?q=${googleQuery}`} target="_blank" rel="noopener noreferrer">
                 <Search className="h-5 w-5 mr-2"/>
                 Search on Google
               </a>
            </Button>
            <Button asChild variant="outline">
               <a href={wikipediaUrl} target="_blank" rel="noopener noreferrer">
                 <WikipediaIcon className="h-5 w-5 mr-2"/>
                 Read on Wikipedia
               </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
