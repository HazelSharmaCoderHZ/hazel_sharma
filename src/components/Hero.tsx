
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  duration: 5 + (i % 4),
  delay: i * 0.6,
  left: `${12 + ((i * 11) % 76)}%`,
  top: `${54 + ((i * 7) % 34)}%`,
}));

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Public Speaker",
    "LEARNER"
  ], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-28 w-72 h-72 bg-primary/6 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.08, 1], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-28 w-72 h-72 bg-primary/4 rounded-full blur-[80px]"
        animate={{ scale: [1.08, 1, 1.08], x: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, delay: 5 }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-px h-px bg-primary/40 rounded-full"
          animate={{
            y: [0, -90, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-card/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "hsl(142 72% 45%)" }} />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text text-glow">HAZEL</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            className="text-xl md:text-3xl mb-8 text-muted-foreground font-light min-h-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-mono text-primary">
              {currentText}
              <motion.span
                className="inline-block ml-0.5 w-0.5 h-[1em] bg-primary align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            An IT student aspiring to drive technological innovation — building modern, 
            performant web experiences with passion and precision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ opacity: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 border border-border rounded-xl text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { icon: Github, href: "https://github.com/HazelSharmaCoderHZ", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hazelsharma-it/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sharmahazel310@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:glow-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>



    </section>
  );
};

export default Hero;
