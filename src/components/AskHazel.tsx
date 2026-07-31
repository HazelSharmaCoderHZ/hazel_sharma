import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, RotateCcw } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import avatar from "@/assets/ask-hazel-avatar.png";

const transport = new DefaultChatTransport({
  api: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ask-hazel`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
  },
});

const SUGGESTIONS = [
  "What has Hazel worked on recently?",
  "What's her AI/ML experience?",
  "Tell me about LeadPilot AI",
  "How can I reach her?",
];

const messageText = (message: { parts: Array<{ type: string; text?: string }> }) =>
  message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");

const AskHazel = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, setMessages } = useChat({
    transport,
    onError: (error) => {
      const message = error?.message ?? "";
      if (message.includes("429")) {
        toast.error("Too many questions right now — please try again shortly.");
      } else if (message.includes("402")) {
        toast.error("The assistant is out of credits at the moment.");
      } else {
        toast.error("Couldn't reach the assistant. Please try again.");
      }
    },
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => textareaRef.current?.focus(), 250);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!busy && open) textareaRef.current?.focus();
  }, [busy, open]);

  const ask = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    setInput("");
    sendMessage({ text: value });
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat about Hazel" : "Ask anything about Hazel"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg glow-primary-strong"
        whileHover={{ scale: 1.06, rotate: -3 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-4 z-50 flex h-[min(560px,calc(100vh-8rem))] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl glass border border-primary/20 shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
              <img
                src={avatar}
                alt="Ask Hazel assistant"
                width={40}
                height={40}
                className="h-9 w-9 rounded-xl bg-background/40 p-0.5"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-foreground">Ask Hazel</p>
                <p className="truncate font-mono text-[11px] text-primary">
                  AI assistant · trained on her work
                </p>
              </div>
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Start a new conversation"
                  onClick={() => setMessages([])}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Transcript */}
            <Conversation className="flex-1">
              <ConversationContent className="gap-3 p-4">
                {messages.length === 0 ? (
                  <div className="space-y-4 py-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Hi! I'm Hazel's AI assistant. Ask me about her projects,
                      skills, internships or education.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTIONS.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => ask(suggestion)}
                          className="rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <Message from={message.role} key={message.id}>
                      <MessageContent>
                        <MessageResponse>{messageText(message)}</MessageResponse>
                      </MessageContent>
                    </Message>
                  ))
                )}
                {status === "submitted" && (
                  <Message from="assistant">
                    <MessageContent>
                      <Shimmer>Thinking...</Shimmer>
                    </MessageContent>
                  </Message>
                )}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>

            {/* Composer */}
            <div className="border-t border-border/50 p-3">
              <PromptInput
                onSubmit={(_message, event) => {
                  event.preventDefault();
                  ask(input);
                }}
              >
                <PromptInputTextarea
                  ref={textareaRef}
                  value={input}
                  onChange={(event) => setInput(event.currentTarget.value)}
                  placeholder="Ask anything about Hazel..."
                />
                <PromptInputFooter className="justify-end">
                  <PromptInputSubmit status={status} disabled={!input.trim() || busy} />
                </PromptInputFooter>
              </PromptInput>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskHazel;