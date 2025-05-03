
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllAttributes } from '@/data/attributes';
import * as Icons from 'lucide-react'; // Import all icons

// Define a type for the icon component props
type IconProps = React.ComponentProps<typeof Icons.Icon>;

// Helper component to dynamically render Lucide icons
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const LucideIcon = (Icons as any)[name]; // Get icon component by name

  if (!LucideIcon) {
    // Fallback icon if the name is invalid
    return <Icons.HelpCircle className={className} />;
  }

  // Add default props if needed, or just pass className
  const iconProps: IconProps = { className };

  return <LucideIcon {...iconProps} />;
};

// Custom Trident Icon SVG Component
const TridentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22V8" />
      <path d="M5 8h14" />
      <path d="M5 8a7 7 0 0 1 7-7 7 7 0 0 1 7 7" />
      <path d="M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7" />
       {/* Optional: Add points to side prongs */}
       <path d="M5 8l-1 -1" />
       <path d="M19 8l1 -1" />
    </svg>
  );


export default function AttributesPage() {
  const attributes = getAllAttributes();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary flex items-center justify-center gap-2">
           <Icons.Gem className="h-8 w-8" /> Attributes of Mahadeva
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Explore the significant symbols and characteristics associated with Lord Shiva, each representing profound cosmic principles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {attributes.map((attribute) => (
          <Card key={attribute.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 border border-border hover:border-primary/40">
            <CardHeader className="flex-row items-center gap-3 space-y-0 pb-3">
               {attribute.icon === 'Vegan' ? ( // Special case for Trident (if icon was 'Vegan')
                 <TridentIcon className="h-6 w-6 text-primary" />
               ) : (
                 <DynamicIcon name={attribute.icon} className="h-6 w-6 text-primary" />
               )}
              <CardTitle className="text-xl text-foreground/90">{attribute.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-3">
              <p className="text-sm text-muted-foreground">{attribute.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
