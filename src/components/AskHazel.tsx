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
      const opts = { duration: 5000 } as const;
      if (message.includes("429")) {
        toast.error("Too many questions right now — please try again shortly.", opts);
      } else if (message.includes("402")) {
        toast.error("The assistant is out of credits at the moment.", opts);
      } else {
        toast.error("Couldn't reach the assistant. Please try again.", opts);
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
        className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary to-primary/80 px-3 py-2.5 text-primary-foreground shadow-xl glow-primary-strong sm:bottom-6 sm:right-6 sm:gap-2.5 sm:px-4 sm:py-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/15 sm:h-8 sm:w-8">
          <span className="absolute inset-0 animate-ping rounded-full bg-primary-foreground/20" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
            </motion.span>
          </AnimatePresence>
        </span>
        {!open && (
          <span className="whitespace-nowrap font-mono text-[11px] font-semibold tracking-tight sm:text-sm">
            Hazel's Assistant 👋
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-20 right-3 left-3 z-50 flex h-[min(580px,calc(100vh-7rem))] flex-col overflow-hidden rounded-3xl glass border border-primary/25 shadow-2xl ring-1 ring-primary/10 sm:bottom-24 sm:right-4 sm:left-auto sm:w-[calc(100vw-2rem)] sm:max-w-[410px]"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-border/50 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-4 py-3.5">
              <img
                src={avatar}
                alt="Ask Hazel assistant"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl border border-primary/25 bg-background/50 p-0.5"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold tracking-tight text-foreground">
                  Hazel's Assistant
                </p>
                <p className="flex items-center gap-1.5 truncate font-mono text-[11px] text-primary">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                  online · trained on her work
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
                  <div className="space-y-5 py-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Hi! I'm Hazel's AI assistant. Ask me about her projects,
                      skills, internships or education.
                    </p>
                    <div className="space-y-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                        Try asking
                      </p>
                      {SUGGESTIONS.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => ask(suggestion)}
                          className="block w-full rounded-xl border border-border/60 bg-background/30 px-3.5 py-2.5 text-left text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
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
            <div className="border-t border-border/50 bg-background/30 p-3">
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