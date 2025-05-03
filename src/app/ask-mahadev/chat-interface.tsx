'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Sparkles } from 'lucide-react'; // Using Sparkles for AI
import { cn } from '@/lib/utils';
import { askMahadev } from '@/ai/flows/ask-mahadev'; // Import the Genkit flow

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call the Genkit flow
      const response = await askMahadev({ question: userMessage.text });

      const aiMessage: Message = {
        id: Date.now().toString() + '-ai',
        text: response.answer,
        sender: 'ai',
      };
      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error('Error calling Ask Mahadev AI:', error);
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
        const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollElement) {
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }
  }, [messages]);


  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-[70vh] bg-card border rounded-lg shadow-xl overflow-hidden">
      <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex items-start gap-3',
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.sender === 'ai' && (
              <Avatar className="h-8 w-8 border border-primary/50">
                {/* Placeholder for AI avatar - maybe a Trident or OM symbol */}
                {/* <AvatarImage src="/ai-avatar.png" alt="Mahadev AI" /> */}
                <AvatarFallback className="bg-primary/20 text-primary">
                    <Sparkles className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                'p-3 rounded-lg max-w-[75%]',
                 message.sender === 'user'
                  ? 'bg-primary/80 text-primary-foreground' // User message style (saffron bg)
                  : 'bg-secondary text-secondary-foreground' // AI message style
              )}
            >
               {/* Render newlines correctly */}
               {message.text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
               ))}
            </div>
             {message.sender === 'user' && (
               <Avatar className="h-8 w-8">
                 {/* Placeholder for User avatar */}
                 <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
               </Avatar>
             )}
          </div>
        ))}
         {isLoading && (
          <div className="flex items-start gap-3 justify-start">
             <Avatar className="h-8 w-8 border border-primary/50">
                <AvatarFallback className="bg-primary/20 text-primary">
                    <Sparkles className="h-4 w-4 animate-spin" />
                </AvatarFallback>
              </Avatar>
            <div className="p-3 rounded-lg bg-secondary text-secondary-foreground italic">
              Thinking...
            </div>
          </div>
        )}
      </ScrollArea>
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t flex items-center gap-2 bg-background"
      >
        <Input
          type="text"
          placeholder="Ask a question... (e.g., Who was Veerabhadra?)"
          value={input}
          onChange={handleInputChange}
          className="flex-grow"
          disabled={isLoading}
          aria-label="Chat input"
        />
        <Button type="submit" disabled={isLoading || !input.trim()} size="icon">
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  );
}
