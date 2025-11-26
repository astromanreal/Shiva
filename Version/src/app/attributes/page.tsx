
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getAllAttributes, MahadevaAttribute } from '@/data/attributes';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Eye, Moon, Sparkles, Wind, Droplets, Brain, Waves, Cat, Vegan, Axe, Drum, Rabbit, CircleEllipsis, Beef, Mountain, Users, Building, Flame, Ear, Gem, ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mapping attribute names to Lucide icons
const iconMap: { [key: string]: React.ElementType } = {
    "Third Eye (Tryambakam)": Eye,
    "Crescent Moon (Chandrashekhara)": Moon,
    "Ashes (Bhasma / Vibhuti)": Sparkles,
    "Matted Hair (Jata)": Wind,
    "Blue Throat (Neelakantha)": Droplets,
    "Meditating Yogi": Brain,
    "Sacred Ganga (Gangadhara)": Waves,
    "Tiger Skin": Cat, // Using Cat as a proxy
    "Serpent (Vasuki)": Vegan, // Using Vegan as a proxy for snake
    "Trident (Trishula)": Vegan, // Using custom SVG handler below
    "Drum (Damaru)": Drum,
    "Axe (Parashu)": Axe,
    "Deer": Rabbit,
    "Rosary Beads (Rudraksha)": CircleEllipsis,
    "Nandi (Bull Mount)": Beef,
    "Mount Kailasa": Mountain,
    "Gana (Attendants)": Users,
    "Varanasi (Kashi)": Building,
    "Ash-Smeared Body (Digambara)": Sparkles,
    "Kundalas (Makara Earrings)": Ear,
    "Flame (Agni in Hand)": Flame,
};

// Custom Trident Icon SVG Component
const TridentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22V8" /><path d="M5 8h14" /><path d="M5 8a7 7 0 0 1 7-7 7 7 0 0 1 7 7" /><path d="M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7" /><path d="M5 8l-1 -1" /><path d="M19 8l1 -1" />
    </svg>
);


const AttributeCard = ({ attribute }: { attribute: MahadevaAttribute }) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = attribute.name === "Trident (Trishula)" ? TridentIcon : (iconMap[attribute.name] || Gem);

    const renderDetail = (label: string, value?: string[] | string) => {
        if (!value || (Array.isArray(value) && value.length === 0)) return null;
        return (
            <div>
                <h4 className="font-semibold text-foreground/90">{label}</h4>
                {Array.isArray(value) ? (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {value.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground">{value}</p>
                )}
            </div>
        );
    };

    return (
        <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary/50 bg-card/90 backdrop-blur-sm overflow-hidden border-border/50">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Icon className="h-6 w-6" />
                    {attribute.name}
                </CardTitle>
                 {attribute.sanskrit && (
                    <p className="font-noto_sans_devanagari text-lg text-muted-foreground pt-1">{attribute.sanskrit}</p>
                )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <CardDescription className="text-sm mb-4 line-clamp-3">
                      {attribute.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                      {attribute.symbolism.slice(0, 2).map(s => <Badge key={s} variant="outline" className="text-xs">{s}</Badge>)}
                      {attribute.symbolism.length > 2 && <Badge variant="outline" className="text-xs">+{attribute.symbolism.length - 2} more</Badge>}
                  </div>
                </div>

                {/* Collapsible Details Section */}
                <div className={cn("transition-all duration-500 ease-in-out overflow-hidden", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                    <div className="pt-4 mt-4 border-t border-border/50 space-y-4">
                        {renderDetail("Iconography", attribute.iconography)}
                        {renderDetail("Key Symbolism", attribute.symbolism)}
                        {renderDetail("Associated Events", attribute.associatedEvents)}
                        {renderDetail("Associated Deities", attribute.associatedDeities)}
                        {renderDetail("Associated Practices/Rituals", (attribute.associatedPractices || attribute.associatedRituals))}
                        {renderDetail("Scriptural References", attribute.scripturalReference)}
                    </div>
                </div>

                <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="w-full mt-4 group/button">
                    {isOpen ? "Hide Details" : "Show Details"}
                    <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                </Button>
            </CardContent>
        </Card>
    );
};


export default function AttributesPage() {
  const attributes = getAllAttributes();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
           <Gem className="h-8 w-8" /> Attributes of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Explore the significant symbols and characteristics associated with Lord Shiva, each representing profound cosmic principles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {attributes.map((attribute, index) => (
          <AttributeCard key={index} attribute={attribute} />
        ))}
      </div>
    </div>
  );
}
