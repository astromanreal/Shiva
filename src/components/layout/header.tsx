// src/components/layout/header.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Mail, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useTheme } from 'next-themes'; // Assuming next-themes is installed for theme toggling

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
       {/* Optional: Add points to side prongs */}
       <path d="M5 8l-1 -1" />
       <path d="M19 8l1 -1" />
    </svg>
  );


// Placeholder for theme toggle logic
const ThemeToggle = () => {
  // const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState('dark'); // Placeholder

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    // setTheme(newTheme); // Uncomment when next-themes is integrated
  };

  // Avoid hydration mismatch by setting theme only on client
  React.useEffect(() => {
     // Ensure this code runs only on the client
     if (typeof window !== 'undefined') {
        const isDark = document.documentElement.classList.contains('dark');
        setCurrentTheme(isDark ? 'dark' : 'light');
     }
  }, []);


  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {currentTheme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // For closing mobile menu
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'relative transition-colors duration-200 hover:text-foreground text-sm font-medium whitespace-nowrap px-3 py-1.5 rounded-md flex-shrink-0', // Adjusted padding
        isActive ? 'text-foreground font-semibold' : 'text-foreground/60',
        // Add underline effect on hover/active
        'after:content-[""] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:ease-out',
        isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const ITEMS_PER_VIEW = 5; // Keep the number of items visible
const SCROLL_STEP = 2; // Number of items to scroll on click

export default function Header() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0); // For desktop nav slider

  const navItems = [
    { href: '/avatars', label: 'Avatars' },
    { href: '/rudras', label: 'Rudras' },
    { href: '/events', label: 'Events' },
    { href: '/jyotirlingas', label: 'Jyotirlingas' },
    { href: '/mahadev-rup', label: 'Mahadev Rup' },
    { href: '/attributes', label: 'Attributes' },
    { href: '/kaal-bhairava', label: 'Bhairava' },
    { href: '/stotras', label: 'Stotras' },
    { href: '/mantras', label: 'Mantras' },
    { href: '/maa-kali', label: 'Maa Kali' },
    { href: '/yoga', label: 'Yoga' },
    { href: '/asanas', label: 'Asanas' }, // Added Asanas
    { href: '/mudras', label: 'Mudras' }, // Added Mudras
    { href: '/pranayama', label: 'Pranayama' },
    { href: '/surya-namaskar', label: 'Surya Namaskar' }, // Added Surya Namaskar
    { href: '/meditation', label: 'Meditation' },
    // Moved Ask Mahadev to the right side near icons
  ];

  const canScrollPrev = startIndex > 0;
  // Allow scrolling next if the start index plus items per view is less than total items
  const canScrollNext = startIndex + ITEMS_PER_VIEW < navItems.length;


  const handlePrev = () => {
    // Scroll back by SCROLL_STEP items
    setStartIndex(Math.max(0, startIndex - SCROLL_STEP));
  };

  const handleNext = () => {
     // Scroll forward by SCROLL_STEP items
     setStartIndex(Math.min(navItems.length - ITEMS_PER_VIEW, startIndex + SCROLL_STEP));
  };


  const visibleNavItems = navItems.slice(startIndex, startIndex + ITEMS_PER_VIEW);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center"> {/* Fixed height */}
        {/* Logo and Brand Name */}
        <Link href="/" className="mr-4 flex items-center space-x-2 flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <TridentIcon className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block text-lg">
            ShivaSphere
          </span>
        </Link>

        {/* Desktop Navigation Slider */}
         <div className="hidden md:flex flex-grow items-center justify-start ml-4 overflow-hidden">
            <Button
                variant="ghost"
                size="sm" // Make button slightly smaller
                className="h-8 w-8 mr-2 rounded-full hover:bg-accent/80 transition-colors" // Rounded, subtle hover
                onClick={handlePrev}
                disabled={!canScrollPrev}
                aria-label="Previous navigation items"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            {/* Use a div to contain the links and prevent layout shift */}
            <div className="flex-grow overflow-hidden">
                <nav className="flex items-center gap-x-1 transition-transform duration-300 ease-in-out"> {/* Reduced gap */}
                  {visibleNavItems.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
                  ))}
                </nav>
            </div>
             <Button
                variant="ghost"
                size="sm" // Make button slightly smaller
                className="h-8 w-8 ml-2 rounded-full hover:bg-accent/80 transition-colors" // Rounded, subtle hover
                onClick={handleNext}
                disabled={!canScrollNext}
                aria-label="Next navigation items"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>


        {/* Right side icons (Desktop) - Push to the end */}
        <div className="hidden md:flex items-center justify-end space-x-1 ml-auto flex-shrink-0"> {/* Use ml-auto */}
           {/* Ask Mahadev Link - Applied NavLink style */}
           <NavLink href="/ask-mahadev">Ask Mahadev</NavLink>
          <Link href="/contact" aria-label="Contact">
            <Button variant="ghost" size="icon">
              <Mail className="h-[1.1rem] w-[1.1rem]" /> {/* Slightly smaller icons */}
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Trigger - Push to the end */}
        <div className="flex flex-1 items-center justify-end md:hidden space-x-1 ml-auto flex-shrink-0"> {/* Use ml-auto */}
           {/* Moved Contact and Theme toggle inside mobile view */}
           <Link href="/contact" aria-label="Contact">
            <Button variant="ghost" size="icon">
              <Mail className="h-[1.1rem] w-[1.1rem]" />
            </Button>
          </Link>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[250px] sm:w-[300px] flex flex-col p-0" // Added flex flex-col and removed padding
                aria-label="Mobile Navigation Menu"
            >
                {/* Mobile Menu Header */}
                <div className="p-4 border-b flex items-center justify-between">
                     <SheetClose asChild>
                        <Link href="/" className="flex items-center space-x-2">
                        <TridentIcon className="h-6 w-6 text-primary" />
                        <span className="font-bold inline-block">
                            ShivaSphere
                        </span>
                        </Link>
                    </SheetClose>
                     {/* Optional: Add close button directly here if needed, though SheetClose is outside */}
                </div>

                {/* Mobile Menu Links - Scrollable */}
                <div className="flex-grow overflow-y-auto p-4">
                    <nav className="flex flex-col space-y-3">
                        {navItems.map((item) => ( // Use original full list for mobile
                        <SheetClose key={item.href} asChild>
                            {/* Apply NavLink style in mobile too, adjusting alignment */}
                            <NavLink href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                                {item.label}
                            </NavLink>
                        </SheetClose>
                        ))}
                         {/* Add Ask Mahadev separately at the end for mobile */}
                         <SheetClose asChild>
                             <NavLink href="/ask-mahadev" onClick={() => setIsMobileMenuOpen(false)}>Ask Mahadev</NavLink>
                         </SheetClose>
                    </nav>
                </div>
                 {/* Add SheetTitle for accessibility - visually hidden */}
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
