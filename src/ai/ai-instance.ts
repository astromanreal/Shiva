import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Ensure GOOGLE_GENAI_API_KEY is set in your environment variables
const apiKey = process.env.GOOGLE_GENAI_API_KEY;

// Log API key status during initialization
if (!apiKey) {
  console.error("[ai-instance] CRITICAL: GOOGLE_GENAI_API_KEY environment variable is not set.");
} else {
  console.log("[ai-instance] GOOGLE_GENAI_API_KEY is set (length > 0).");
  // Optional: Log a masked version or just its presence for confirmation
  // console.log(`[ai-instance] GOOGLE_GENAI_API_KEY starts with: ${apiKey.substring(0, 4)}...`);
}


export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      // Explicitly pass the apiKey variable
      apiKey: apiKey,
    }),
  ],
  // Use a model known for good instruction following and tool use
  // Consider gemini-1.5-flash-latest as a robust option if gemini-1.5-pro causes issues/cost concerns
  // model: 'googleai/gemini-1.5-pro-latest', // Can be expensive
  model: 'googleai/gemini-1.5-flash-latest', // Often sufficient and faster/cheaper
  // Enable tracing and logging for development
  enableTracingAndMetrics: true,
  logLevel: 'debug', // Keep detailed logs for debugging
});