// src/app/settings/theme-settings.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Moon, Sun, Leaf, Sparkles as CosmicIcon } from 'lucide-react'; // Using Sparkles as CosmicIcon for now

interface ThemeOption {
  value: string;
  label: string;
  icon: React.ElementType;
}

const themes: ThemeOption[] = [
  { value: 'theme-sunrise-glow', label: 'Sunrise Glow (Default)', icon: Sun },
  { value: 'theme-cosmic-void', label: 'Cosmic Void', icon: CosmicIcon },
  { value: 'theme-kailash-night', label: 'Kailash Night', icon: Moon },
  { value: 'theme-forest-hermitage', label: 'Forest Hermitage', icon: Leaf },
];

const DEFAULT_THEME = 'theme-sunrise-glow';

export default function ThemeSettingsClient() {
  const [selectedTheme, setSelectedTheme] = useState<string>(DEFAULT_THEME);

  // Effect to read the initial theme from localStorage and apply it
  useEffect(() => {
    // This check ensures the code runs only on the client-side
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
      setSelectedTheme(storedTheme);
      // Remove all other theme classes before applying the new one
      themes.forEach(theme => {
        if (theme.value !== storedTheme) {
          document.documentElement.classList.remove(theme.value);
        }
      });
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setSelectedTheme(newTheme);
    // Remove previous theme classes
    themes.forEach(theme => {
        document.documentElement.classList.remove(theme.value);
    });
    // Add new theme class
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="py-4 border-t border-border mt-4">
      <RadioGroup
        value={selectedTheme}
        onValueChange={handleThemeChange}
        className="space-y-2"
      >
        {themes.map((theme) => (
          <div key={theme.value} className="flex items-center space-x-3">
            <RadioGroupItem value={theme.value} id={theme.value} />
            <Label htmlFor={theme.value} className="flex items-center gap-2 cursor-pointer">
              <theme.icon className="h-5 w-5" />
              <span>{theme.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
