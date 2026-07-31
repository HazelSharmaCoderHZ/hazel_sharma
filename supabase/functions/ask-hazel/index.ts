import { convertToModelMessages, streamText, type UIMessage } from "npm:ai";
import { createLovableAiGatewayProvider } from "../_shared/ai-gateway.ts";
import { SYSTEM_PROMPT } from "./persona.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI is not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages }: { messages: UIMessage[] } = await req.json();

    const gateway = createLovableAiGatewayProvider(apiKey);

    const result = streamText({
      model: gateway("google/gemini-3.6-flash"),
      system: SYSTEM_PROMPT,
      messages: convertToModelMessages(messages.slice(-20)),
    });

    return result.toUIMessageStreamResponse({ headers: corsHeaders });
  } catch (error) {
    console.error("ask-hazel error", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});