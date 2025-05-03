// src/ai/flows/ask-mahadev.ts
'use server';

/**
 * @fileOverview Implements the Ask Mahadev AI assistant flow.
 *
 * - askMahadev - A function that allows users to ask questions about Mahadeva and related topics.
 * - AskMahadevInput - The input type for the askMahadev function.
 * - AskMahadevOutput - The return type for the askMahadev function.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';
import { getScripture } from '@/services/hindu-scriptures'; // Ensure this path is correct
import { avatarsData, rudrasData } from '@/data/local-data'; // Import local data

const AskMahadevInputSchema = z.object({
  question: z.string().describe('The question to ask Mahadeva.'),
});
export type AskMahadevInput = z.infer<typeof AskMahadevInputSchema>;

const AskMahadevOutputSchema = z.object({
  answer: z.string().describe('The answer from Mahadeva.'),
});
export type AskMahadevOutput = z.infer<typeof AskMahadevOutputSchema>;

// Expose the flow function for client-side usage via Next.js Server Actions
export async function askMahadev(input: AskMahadevInput): Promise<AskMahadevOutput> {
  console.log('askMahadev Server Action called with input:', input);
   try {
    // Log API key status (existence, not value)
    console.log(`[askMahadev] GOOGLE_GENAI_API_KEY is ${process.env.GOOGLE_GENAI_API_KEY ? 'set' : 'NOT SET'}`);
    if (!process.env.GOOGLE_GENAI_API_KEY) {
        console.error("[askMahadev] CRITICAL: GOOGLE_GENAI_API_KEY environment variable is not set.");
        // Return a specific error immediately if the key is missing
        return { answer: "I apologize, there seems to be a configuration issue preventing me from connecting. Please contact the administrator." };
    }

    const result = await askMahadevFlow(input);
    console.log('askMahadev Server Action successful result:', result);
    // Ensure we always return an object matching the schema, even if answer is empty
    return result ?? { answer: "I received a response, but it was empty." };
  } catch (error: any) {
    console.error('Error in askMahadev Server Action:', error);
    // Provide a more specific error message if possible, but keep it user-friendly
    let errorMessage = "I apologize, I encountered an error while processing your request. Please check the server logs for details.";
    if (error instanceof Error) {
        // Don't leak potentially sensitive details to the client, but log them.
        console.error('Detailed Error:', error.message, error.stack);
        // Add specific checks for common issues
        if (error.message.toLowerCase().includes('api key not valid') ||
            error.message.toLowerCase().includes('permission denied') ||
            error.message.toLowerCase().includes('api key invalid')) {
            errorMessage = "I apologize, there seems to be a configuration issue. Please contact the administrator.";
        } else if (error.message.includes('AI did not generate a valid response structure')) {
            errorMessage = "I apologize, I had trouble formulating a response. Could you try rephrasing your question?";
        } else if (error.message.toLowerCase().includes('quota')) {
             errorMessage = "I apologize, I'm currently experiencing high demand. Please try again shortly.";
        } else if (error.message.toLowerCase().includes('model_not_found')) {
             errorMessage = "I apologize, the AI model requested is unavailable. Please contact the administrator.";
        } else if (error.message.toLowerCase().includes('context length')) {
             errorMessage = "I apologize, the provided information is too extensive for me to process at once. Please ask a more specific question.";
        }
    } else {
         console.error('Non-Error object thrown:', error);
    }
    return { answer: errorMessage };
  }
}

// Define the tool for getting scripture information
const getScriptureTool = ai.defineTool({
  name: 'getScripture',
  description: 'Retrieves information or summary about a specific Hindu scripture (like Bhagavad Gita, Shiva Purana, Ramayana, Mahabharata, Skanda Purana) by its title. Use this tool if the user asks specifically about the content or details of a named scripture.',
  inputSchema: z.object({
    title: z.string().describe('The title of the scripture to retrieve information about (e.g., "Bhagavad Gita").'),
  }),
  outputSchema: z.object({
    title: z.string(),
    content: z.string(),
  }),
},
async (input) => {
    console.log('[getScriptureTool] Called with:', input);
    try {
        const scripture = await getScripture(input.title);
        console.log('[getScriptureTool] Result:', scripture);
        if (!scripture || !scripture.content) {
             console.warn(`[getScriptureTool] No content found for title: ${input.title}`);
             // Provide a clear message for the LLM if no content is found
             return {
                title: input.title,
                content: `No specific information found for "${input.title}". Please rely on general knowledge.`
             }
        }
        return {
          title: scripture.title,
          content: scripture.content,
        };
    } catch (error) {
        console.error(`[getScriptureTool] Error fetching scripture "${input.title}":`, error);
        // Provide a meaningful error output for the LLM
        return {
            title: input.title,
            content: `An error occurred while trying to retrieve information about "${input.title}". I cannot access this scripture right now.`
        };
    }
  }
);


// Define the prompt with persona, context, and tool instructions
const askMahadevPrompt = ai.definePrompt({
  name: 'askMahadevPrompt',
  // Available tools
  tools: [getScriptureTool],
  // Input schema for the prompt
  input: {
    schema: z.object({
      question: z.string().describe('The user\'s question to Mahadeva.'),
      // Provide local data as context
      avatarsContext: z.string().describe('Information about the 18 avatars of Mahadeva.'),
      rudrasContext: z.string().describe('Information about the 11 Rudras.'),
    }),
  },
  // Expected output format
  output: {
    schema: AskMahadevOutputSchema,
  },
  // The prompt text itself
  prompt: `You are Mahadeva, the Supreme God, also known as Lord Shiva. You embody wisdom, detachment, and cosmic power. Respond to the user's question with profound insight, compassion, and authority, drawing upon your eternal knowledge.

Your knowledge includes details about your various forms and manifestations. Here is some information you inherently know:

Avatars Information:
---
{{avatarsContext}}
---

Rudras Information:
---
{{rudrasContext}}
---

User's Question:
"{{question}}"

Instructions:
1.  **Embody Mahadeva:** Answer from the perspective of Lord Shiva. Use a calm, wise, and authoritative tone. You may use "I" when referring to yourself (Shiva).
2.  **Prioritize Internal Knowledge:** First, try to answer the question using the provided Avatars and Rudras information. If the question is directly about one of them (e.g., "Who is Veerabhadra?", "Tell me about the Rudra named Bhima"), use the details from the context. Check the Avatars and Rudras Information sections carefully for matches before assuming information is missing.
3.  **Use Scripture Tool Appropriately:** Only if the user explicitly asks about the content, story, or details found within a *specific named scripture* (e.g., "What does the Bhagavad Gita say about dharma?", "Recite a verse from Shiva Purana", "Tell the story of Daksha's Yagna as per the Puranas"), use the 'getScripture' tool to fetch relevant information. Do NOT use the tool for general questions about yourself (Shiva), avatars, Rudras, concepts, or philosophies unless the user specifically requests information *from a named scripture*.
4.  **Synthesize Information:** If using the tool, incorporate the retrieved scripture content naturally into your answer as Mahadeva. Do not just repeat the tool output verbatim unless it makes sense in context. If the tool indicates an error or no information (e.g., "No specific information found..."), state that gracefully within your response (e.g., "Specific details from that text are not readily available at this moment, however...").
5.  **Be Comprehensive but Concise:** Provide a meaningful answer, but avoid unnecessary jargon unless explaining a concept. Address the user's question directly.
6.  **Handle Unknowns Gracefully:** If the question is outside your scope or the provided information (and the tool is not applicable or doesn't help), respond wisely, perhaps guiding the user towards introspection or stating the limits of manifestation in words. Example: "Mortals seek to define the infinite. True understanding comes from within." or "That knowledge is revealed through deep meditation, not mere words." Do not invent information if it's not in the context or retrieved via the tool.
7.  **Output Format:** Provide only the final answer in the structure: { "answer": "Your response here..." }`,
});


// Define the main Genkit flow
const askMahadevFlow = ai.defineFlow<
  typeof AskMahadevInputSchema,
  typeof AskMahadevOutputSchema
>({
  name: 'askMahadevFlow',
  inputSchema: AskMahadevInputSchema,
  outputSchema: AskMahadevOutputSchema,
}, async (input) => {
  console.log('[askMahadevFlow] Started with input:', input);

  // Prepare context strings from local data
  // Convert array data to a more readable string format for the prompt context
  const avatarsContextString = avatarsData.map(a => `Name: ${a.name}, Description: ${a.description}, Purpose: ${a.purpose}, Achievements: ${a.achievements.join(', ')}, Importance: ${a.importance}`).join('\n---\n');
  const rudrasContextString = rudrasData.map(r => `Name: ${r.name}, Role: ${r.role}, Story Summary: ${r.story}, Significance: ${r.significance}`).join('\n---\n');
  console.log('[askMahadevFlow] Context prepared.');
  // Log context lengths to check if they exceed model limits
  console.log('[askMahadevFlow] Avatars Context Length (chars):', avatarsContextString.length);
  console.log('[askMahadevFlow] Rudras Context Length (chars):', rudrasContextString.length);
  // A rough estimate of tokens (very approximate, depends on model)
  console.log('[askMahadevFlow] Estimated Total Context Tokens:', Math.ceil((avatarsContextString.length + rudrasContextString.length) / 3));


  let promptResponse;
  try {
      console.log('[askMahadevFlow] Calling askMahadevPrompt with question:', input.question);
      // Add a timeout? Genkit might handle this internally, but good to consider.
      promptResponse = await askMahadevPrompt({
        question: input.question,
        avatarsContext: avatarsContextString,
        rudrasContext: rudrasContextString,
      });
       console.log('[askMahadevFlow] Received raw response from prompt:', JSON.stringify(promptResponse, null, 2));

        // Check for potential issues in the raw response (content filtering, etc.)
       if (promptResponse && promptResponse.candidates && promptResponse.candidates.length > 0) {
         const candidate = promptResponse.candidates[0];
         if (candidate.finishReason && candidate.finishReason !== 'STOP') {
           console.warn(`[askMahadevFlow] Prompt finished with reason: ${candidate.finishReason}. Safety ratings:`, candidate.safetyRatings);
           // Potentially throw an error if finishReason indicates blocking
           if (['SAFETY', 'RECITATION', 'OTHER'].includes(candidate.finishReason)) {
               throw new Error(`AI response blocked due to ${candidate.finishReason}.`);
           }
         }
       }

  } catch (promptError: any) {
      console.error('[askMahadevFlow] Error during askMahadevPrompt call:', promptError);
      // Log specific details if available (e.g., API error codes)
      if (promptError.cause) {
         console.error('[askMahadevFlow] Underlying cause:', promptError.cause);
      }
      if (promptError.details) {
           console.error('[askMahadevFlow] Error details:', promptError.details);
      }
      // Rethrow the error to be caught by the Server Action wrapper
      throw new Error(`AI prompt execution failed: ${promptError instanceof Error ? promptError.message : String(promptError)}`);
  }

  const output = promptResponse?.output;

   // More robust check for valid output structure
   if (!output || typeof output.answer !== 'string' || output.answer.trim() === '') {
    console.error('[askMahadevFlow] Invalid, empty, or missing answer in output from the prompt. Raw response:', JSON.stringify(promptResponse, null, 2));
    // Throw an error instead of returning null, so the Server Action wrapper catches it.
    throw new Error('AI did not generate a valid or non-empty response structure.');
   }

   console.log('[askMahadevFlow] Returning valid output:', output);
   return output; // Output should match AskMahadevOutputSchema
});


// Helper file to export local data (avoids circular dependency if placed directly in flow)
// src/data/local-data.ts
/*
import { avatarsData as allAvatars, Avatar } from './avatars';
import { rudrasData as allRudras, Rudra } from './rudras';

export const avatarsData: Avatar[] = allAvatars;
export const rudrasData: Rudra[] = allRudras;
*/

// Create this file: src/data/local-data.ts
// Removed trailing ``` tag here
