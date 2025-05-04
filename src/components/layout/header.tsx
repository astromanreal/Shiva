// src/components/layout/header.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Mail, Menu, ChevronLeft, ChevronRight, Compass } from 'lucide-react'; // Added Compass for Explore
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
  isIcon?: boolean; // Flag for icon links
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isIcon = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  if (isIcon) {
    return (
      <Link
        href={href}
        className={cn(
          'relative transition-colors duration-200 hover:text-foreground text-sm font-medium whitespace-nowrap px-2 py-1.5 rounded-md flex-shrink-0', // Adjusted padding for icon
          isActive ? 'text-primary' : 'text-foreground/60',
        )}
        onClick={onClick}
        aria-label={typeof children === 'string' ? children : undefined} // Use children as label if string
      >
        {children}
      </Link>
    );
  }

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

const ITEMS_PER_VIEW = 4; // Adjust number of visible items if needed
const SCROLL_STEP = 2; // Number of items to scroll on click

export default function Header() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0); // For desktop nav slider

  // Define all potential navigation items
  const allNavItems = [
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
    { href: '/meditation', label: 'Meditation' },
    // Ask Mahadev is handled separately
    // Explore is handled separately
  ];

  const navItems = allNavItems; // Use the already filtered list

  const totalItems = navItems.length;
  const canScrollPrev = startIndex > 0;
  const canScrollNext = startIndex < totalItems - ITEMS_PER_VIEW;

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - SCROLL_STEP));
  };

  const handleNext = () => {
     setStartIndex(Math.min(totalItems - ITEMS_PER_VIEW, startIndex + SCROLL_STEP));
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
         <div className="hidden md:flex flex-grow items-center justify-center mx-auto relative">
             {/* Previous Button */}
             <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "h-8 w-8 rounded-full text-foreground/60 hover:text-foreground hover:bg-accent/80 mr-1 transition-opacity",
                    !canScrollPrev && "opacity-30 pointer-events-none"
                )}
                onClick={handlePrev}
                disabled={!canScrollPrev}
                aria-label="Previous navigation items"
            >
                <ChevronLeft className="h-5 w-5" />
            </Button>

             {/* Navigation Links Container */}
             <div className="flex-shrink overflow-hidden">
                 <nav className="flex items-center justify-center gap-x-1 transition-transform duration-300 ease-in-out">
                   {visibleNavItems.map((item) => (
                     <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
                   ))}
                 </nav>
             </div>

            {/* Next Button */}
            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "h-8 w-8 rounded-full text-foreground/60 hover:text-foreground hover:bg-accent/80 ml-1 transition-opacity",
                     !canScrollNext && "opacity-30 pointer-events-none"
                )}
                onClick={handleNext}
                disabled={!canScrollNext}
                aria-label="Next navigation items"
            >
                <ChevronRight className="h-5 w-5" />
            </Button>
         </div>

        {/* Right side icons (Desktop) */}
        <div className="hidden md:flex items-center justify-end space-x-1 ml-auto flex-shrink-0">
           <NavLink href="/ask-mahadev">Ask Mahadev</NavLink>
           {/* Explore Icon Link */}
           <NavLink href="/explore" isIcon={true}>
             <Compass className="h-[1.1rem] w-[1.1rem]" />
           </NavLink>
           <NavLink href="/contact" isIcon={true}>
             <Mail className="h-[1.1rem] w-[1.1rem]" />
           </NavLink>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex flex-1 items-center justify-end md:hidden space-x-1 ml-auto flex-shrink-0">
           <NavLink href="/contact" isIcon={true}>
             <Mail className="h-[1.1rem] w-[1.1rem]" />
           </NavLink>
            <NavLink href="/explore" isIcon={true}>
                <Compass className="h-[1.1rem] w-[1.1rem]" />
            </NavLink>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-[250px] sm:w-[300px] flex flex-col p-0"
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
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-grow overflow-y-auto p-4">
                    <nav className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                        <SheetClose key={item.href} asChild>
                            <NavLink href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                                {item.label}
                            </NavLink>
                        </SheetClose>
                        ))}
                         <SheetClose asChild>
                             <NavLink href="/ask-mahadev" onClick={() => setIsMobileMenuOpen(false)}>Ask Mahadev</NavLink>
                         </SheetClose>
                          <SheetClose asChild>
                             <NavLink href="/explore" onClick={() => setIsMobileMenuOpen(false)}>Explore</NavLink>
                         </SheetClose>
                    </nav>
                </div>
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
