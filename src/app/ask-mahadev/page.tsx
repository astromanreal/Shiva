import ChatInterface from './chat-interface';

export default function AskMahadevPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-8">
       <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-primary">
           Ask Mahadev
         </h1>
         <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
           Seek wisdom from the Lord of the Cosmos. Ask your questions about scriptures, avatars, philosophy, and more.
         </p>
         {/* Optional: Add OM particles or Nataraja animation container here */}
         <div className="relative h-16 w-full flex justify-center items-center">
             {/* Placeholder for animation */}
             <span className="text-4xl text-primary animate-pulse">🕉️</span>
         </div>
       </div>
      <ChatInterface />
    </div>
  );
}
