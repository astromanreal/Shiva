// src/app/settings/page.tsx
'use client'; // Make this a client component to handle reset logic directly for simplicity

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Cog, Palette, ALargeSmall, RotateCcw, Info, Star, BookOpen, Brain, Mail, LifeBuoy, Heart, Layers, ArrowRight } from 'lucide-react';
import ThemeSettingsClient from './theme-settings';
import FontSizeSettingsClient from './font-size-settings';
import packageJson from '../../../package.json'; // Import package.json
import Link from 'next/link';

// Inline SVG for Trident
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
      <path d="M5 8l-1 -1" />
      <path d="M19 8l1 -1" />
    </svg>
);


export default function SettingsPage() {
  const handleResetSettings = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('theme');
      localStorage.removeItem('fontSizeClass');
      
      const themes = ['theme-kailash-night', 'theme-sunrise-glow', 'theme-forest-hermitage', 'theme-cosmic-void'];
      const fontSizes = ['font-size-small', 'font-size-default', 'font-size-large'];

      themes.forEach(themeClass => document.documentElement.classList.remove(themeClass));
      fontSizes.forEach(fsClass => document.documentElement.classList.remove(fsClass));
      
      document.documentElement.classList.add('theme-kailash-night');
      document.documentElement.classList.add('font-size-default');
      
      window.location.reload();
    }
  };

  const appVersion = packageJson.version;
  const keyFeatures = [
    { name: "Daily Mahadeva Events", icon: Star },
    { name: "Interactive Stotra Library", icon: BookOpen },
    { name: "Meditation Mode", icon: Brain },
    { name: "Dynamic Theming", icon: Palette },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary flex items-center justify-center gap-2">
            <Cog className="h-8 w-8" /> Settings
          </CardTitle>
          <CardDescription className="text-muted-foreground pt-2">
            Configure your preferences for ShivaSphere.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-medium flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Theme (Tamas & Jyoti)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ThemeSettingsClient />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-medium flex items-center gap-2">
                <ALargeSmall className="h-5 w-5 text-primary" />
                Font Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FontSizeSettingsClient />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-medium flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                Reset Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This will reset all your personalized settings (Theme and Font Size) to their default values.
              </p>
              <Button variant="destructive" onClick={handleResetSettings} className="w-full sm:w-auto">
                Reset All Settings
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      
      {/* "About This App" Card */}
      <Card className="shadow-lg bg-card/50 relative overflow-hidden">
        <TridentIcon className="absolute -bottom-8 -right-8 h-40 w-40 text-primary/5 opacity-50 rotate-[-15deg]" />
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <TridentIcon className="h-6 w-6" /> About ShivaSphere
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm">
            {/* Version Info */}
            <div>
              <h4 className="font-semibold text-foreground/90">Version Information</h4>
              <div className="text-muted-foreground text-xs space-y-0.5 mt-1">
                <p>Version: {appVersion}</p>
                <p>Build: 20240723.1</p>
                <p>Release Date: 2024-07-23</p>
              </div>
            </div>

            <Separator />
            
            {/* Key Features */}
            <div>
              <h4 className="font-semibold text-foreground/90">Key Features</h4>
              <ul className="list-none space-y-2 mt-2">
                {keyFeatures.map(feature => (
                  <li key={feature.name} className="flex items-center gap-2 text-muted-foreground">
                    <feature.icon className="h-4 w-4 text-primary/80" />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Separator />

            {/* Developer Info */}
            <div>
              <h4 className="font-semibold text-foreground/90">Developer Information</h4>
              <p className="text-muted-foreground mt-1">Developed with <Heart className="inline h-3 w-3" /> by ShivaSphere Developers.</p>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground/90">Contact & Support</h4>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <Link href="/contact" className="w-full">
                  <Button variant="outline" size="sm" className="w-full group">
                    <Mail className="h-4 w-4 mr-2" /> Contact Us <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/explore" className="w-full">
                  <Button variant="outline" size="sm" className="w-full group">
                    <LifeBuoy className="h-4 w-4 mr-2" /> Help & Explore <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <Separator />

            {/* Acknowledgments */}
            <div>
              <h4 className="font-semibold text-foreground/90">Acknowledgments</h4>
              <p className="text-muted-foreground text-xs mt-1">
                This app is built using powerful open-source libraries and frameworks. Our deepest gratitude to the developer community.
              </p>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
