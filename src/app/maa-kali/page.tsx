import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Zap, Link2, Skull } from 'lucide-react'; // Relevant icons

export default function MaaKaliPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 p-4">
      {/* Hero Section */}
      <section className="text-center space-y-3 border-b pb-6 border-border/50">
         <div className="mb-8 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 max-w-2xl mx-auto">
            <Image
                src="https://picsum.photos/seed/maa-kali-fierce/800/450" // Placeholder image
                alt="Maa Kali Fierce Representation"
                width={800}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="fierce goddess kali dark skinned garland skulls"
                priority
            />
            </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary flex items-center justify-center gap-2">
           <Skull className="h-8 w-8"/> Maa Kali (महाकाली)
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The fierce and compassionate embodiment of Shakti, Time, and Transformation.
        </p>
         <div className="flex justify-center flex-wrap gap-2 pt-2">
            <Badge variant="destructive">Goddess of Time & Change</Badge>
            <Badge variant="secondary">Primordial Energy (Adi Shakti)</Badge>
            <Badge variant="outline">Destroyer of Evil</Badge>
         </div>
      </section>

      {/* Introduction Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Who is Maa Kali?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Maa Kali is one of the most powerful and complex goddesses in Hinduism. She represents the fierce, destructive aspect of Devi (the Divine Mother), yet she is also revered as a compassionate protector and the bestower of liberation (moksha). She is the energy (Shakti) of Shiva (consciousness), particularly associated with his form as Mahakala (The Great Time). Kali embodies primordial energy, the cycles of creation and destruction, and reality beyond form and illusion.
          </p>
        </CardContent>
      </Card>

       {/* Connection to Shiva Card */}
       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Link2 className="h-5 w-5 text-primary"/> Kali and Shiva: The Dance of Consciousness and Energy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The relationship between Kali and Shiva is profound and inseparable. Kali is the dynamic energy (Shakti) while Shiva is the static consciousness (Purusha). They are two aspects of the same ultimate reality. Without Shakti, Shiva is inert (Shava - corpse). Without Shiva, Shakti's energy is directionless.
          </p>
          <div className="p-4 border rounded-md bg-secondary/30">
                <h3 className="font-semibold text-lg mb-1 text-foreground">The Famous Iconography: Kali Standing on Shiva</h3>
                <p className="text-muted-foreground text-sm">
                 A famous depiction shows Kali, lost in her destructive dance after slaying demons, stepping on the chest of a passive Shiva lying beneath her. Realizing she has stepped on her consort, her destructive frenzy halts, and her tongue lolls out in surprise or embarrassment. This symbolizes several concepts:
                </p>
                 <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mt-2 pl-4">
                    <li>Consciousness (Shiva) remains untouched and calm beneath the dynamic play of energy (Kali).</li>
                    <li>Energy (Kali) requires the substrate of consciousness (Shiva) to exist and act upon.</li>
                    <li>The ultimate realization occurs when dynamic energy recognizes its grounding in pure consciousness.</li>
                    <li>Shiva's passivity absorbs Kali's fierce energy, preventing cosmic destruction.</li>
                 </ul>
              </div>
          <p className="text-muted-foreground">
            As Mahakala (Great Time), Shiva is the Lord of Time, and Kali is the power of Time itself, driving change, dissolution, and renewal.
          </p>
        </CardContent>
      </Card>

      {/* Connection to Sati and Parvati Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5 text-primary"/> Kali, Sati, and Parvati: Facets of the Divine Feminine</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Kali, Sati, and Parvati are all considered different manifestations or aspects of Adi Shakti, the primordial Divine Feminine energy and consort of Shiva.
          </p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>
                 <strong>Sati:</strong> Shiva's first consort, known for her unwavering devotion. Her self-immolation at Daksha's yagna displayed her fierce loyalty and triggered Shiva's wrath, leading to the creation of Veerabhadra. Some traditions see Kali emerging from the rage or essence related to Sati's sacrifice.
              </li>
              <li>
                 <strong>Parvati:</strong> Sati reincarnated, who performed intense tapasya to win Shiva as her husband. She represents the benevolent, nurturing, and graceful aspect of Shakti. However, even Parvati can manifest fierce forms like Durga and Kali when needed to combat evil. Kali often emerges from Parvati's brow or essence when extreme demonic forces threaten cosmic order (e.g., slaying Raktabija).
              </li>
              <li>
                 <strong>Kali:</strong> Represents the raw, untamed, and often terrifying power inherent within the Divine Mother. She is the force that destroys ignorance, ego, and evil, clearing the path for creation and liberation. She is the ultimate reality beyond time and form, often depicted as dark or black, signifying her nature as beyond all attributes (Nirguna).
              </li>
           </ul>
           <p className="text-muted-foreground mt-3">
             While appearing distinct, they are fundamentally interconnected expressions of the one Supreme Shakti, complementing Shiva's own multifaceted nature. Parvati is the devoted wife and mother, Sati the loyal consort, and Kali the fierce protector and liberator – all essential aspects of the divine play.
           </p>
        </CardContent>
      </Card>


      {/* Significance Card */}
      <Card>
        <CardHeader>
          <CardTitle>Significance of Maa Kali</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Represents the power of Time (Kala) and Transformation.</li>
            <li>Destroyer of ego, ignorance, and demonic forces.</li>
            <li>Embodies ultimate reality beyond duality and illusion.</li>
            <li>Compassionate Mother who grants liberation (Moksha).</li>
            <li>Symbolizes the active, dynamic energy (Shakti) of the universe.</li>
          </ul>
        </CardContent>
      </Card>

    </div>
  );
}
