// src/app/settings/page.tsx
'use client'; // Make this a client component to handle reset logic directly for simplicity

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog, Palette, ALargeSmall, RotateCcw } from 'lucide-react';
import ThemeSettingsClient from './theme-settings';
import FontSizeSettingsClient from './font-size-settings'; // Import the new component

export default function SettingsPage() {
  const handleResetSettings = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('theme');
      localStorage.removeItem('fontSizeClass');
      // Remove theme classes from HTML element
      const themes = ['theme-kailash-night', 'theme-sunrise-glow', 'theme-forest-hermitage', 'theme-cosmic-void'];
      themes.forEach(themeClass => document.documentElement.classList.remove(themeClass));
      // Remove font size classes from HTML element
      const fontSizes = ['font-size-small', 'font-size-default', 'font-size-large'];
      fontSizes.forEach(fsClass => document.documentElement.classList.remove(fsClass));
      
      // Add default classes back before reloading to avoid flicker or incorrect initial state
      document.documentElement.classList.add('theme-kailash-night'); // Default theme
      document.documentElement.classList.add('font-size-default'); // Default font size
      
      window.location.reload();
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
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
                Theme
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

          <div className="text-center text-sm text-muted-foreground pt-4">
            More settings and customization options will be available here in future updates.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
