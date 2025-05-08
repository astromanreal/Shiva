// src/app/settings/font-size-settings.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TextCursorInput } from 'lucide-react'; // Using a generic icon

interface FontSizeOption {
  value: string; // CSS class name
  label: string;
  icon: React.ElementType; // Icon component
}

const FONT_SIZES: FontSizeOption[] = [
  { value: 'font-size-small', label: 'Small', icon: TextCursorInput },
  { value: 'font-size-default', label: 'Default', icon: TextCursorInput },
  { value: 'font-size-large', label: 'Large', icon: TextCursorInput },
];

const DEFAULT_FONT_SIZE_CLASS = 'font-size-default';

export default function FontSizeSettingsClient() {
  const [selectedFontSize, setSelectedFontSize] = useState<string>(DEFAULT_FONT_SIZE_CLASS);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFontSizeClass = localStorage.getItem('fontSizeClass') || DEFAULT_FONT_SIZE_CLASS;
      setSelectedFontSize(storedFontSizeClass);
      
      // Remove all other font size classes before applying the new one
      FONT_SIZES.forEach(fs => {
        if (fs.value !== storedFontSizeClass) {
          document.documentElement.classList.remove(fs.value);
        }
      });
      document.documentElement.classList.add(storedFontSizeClass);
    }
  }, []);

  const handleFontSizeChange = (newFontSizeClass: string) => {
    setSelectedFontSize(newFontSizeClass);
    
    // Remove previous font size classes
    FONT_SIZES.forEach(fs => {
      document.documentElement.classList.remove(fs.value);
    });
    // Add new font size class
    document.documentElement.classList.add(newFontSizeClass);
    localStorage.setItem('fontSizeClass', newFontSizeClass);
  };

  return (
    <div className="py-4 border-t border-border mt-4">
      <RadioGroup
        value={selectedFontSize}
        onValueChange={handleFontSizeChange}
        className="space-y-2"
      >
        {FONT_SIZES.map((fs) => (
          <div key={fs.value} className="flex items-center space-x-3">
            <RadioGroupItem value={fs.value} id={fs.value} />
            <Label htmlFor={fs.value} className="flex items-center gap-2 cursor-pointer">
              <fs.icon className="h-5 w-5" /> 
              <span>{fs.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
