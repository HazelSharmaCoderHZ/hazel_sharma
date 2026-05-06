
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("reveal");
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "reveal" || progress < 100 ? null : null}
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Scanning line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Code brackets animation */}
        <div className="relative mb-8">
          <motion.div
            className="flex items-center gap-1 font-mono text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-primary text-glow"
              animate={{ x: [-5, 0, -5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &lt;
            </motion.span>
            <motion.span
              className="gradient-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HZ
            </motion.span>
            <motion.span
              className="text-primary text-glow"
              animate={{ x: [5, 0, 5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              /&gt;
            </motion.span>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="w-64 relative">
          <div className="h-[2px] bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <motion.span
              className="font-mono text-xs text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Initializing Portfolio...
            </motion.span>
            <span className="font-mono text-xs text-primary">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div>

        {/* Bottom decorative lines */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between">
          <motion.span
            className="font-mono text-[10px] text-muted-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            v2.0.26
          </motion.span>
          <motion.span
            className="font-mono text-[10px] text-muted-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            HAZEL SHARMA • PORTFOLIO
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
