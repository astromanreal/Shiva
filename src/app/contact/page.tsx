// src/app/contact/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, Github, Phone, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">Contact Us</CardTitle>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            We'd love to hear from you! Reach out with questions, feedback, or suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="flex items-center space-x-3 p-4 border rounded-lg bg-secondary/30">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:Astroman6569@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                Astroman6569@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 border rounded-lg bg-secondary/30">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+918102116569" className="text-muted-foreground hover:text-primary transition-colors">
                +91 8102116569
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-center text-lg">Connect on Social Media</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://x.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-7 w-7" />
              </a>
              <a href="https://github.com/astromanreal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-7 w-7" />
              </a>
              {/* LinkedIn can be added back if a link is provided */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </a> */}
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-4">
            Please allow 24-48 hours for a response via email.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
