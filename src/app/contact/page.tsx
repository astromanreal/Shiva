// src/app/contact/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

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
              <a href="mailto:info@shivasphere.example.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@shivasphere.example.com {/* Placeholder Email */}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-center text-lg">Connect on Social Media (Placeholders)</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-4">
            Please allow 24-48 hours for a response.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
