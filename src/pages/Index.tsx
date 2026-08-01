
import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import AskHazel from "@/components/AskHazel";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background noise-bg">
          <Navbar />
          <section id="home" className="scroll-mt-16">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-16">
            <AboutMe />
          </section>
          <section id="experience" className="scroll-mt-16">
            <Experience />
          </section>
          <section id="skills" className="scroll-mt-16">
            <Skills />
          </section>
          <section id="projects" className="scroll-mt-16">
            <Projects />
          </section>
          <section id="education" className="scroll-mt-16">
            <Education />
          </section>
          <section id="contact" className="scroll-mt-16">
            <Connect />
          </section>
          <AskHazel />
        </div>
      )}
    </ThemeProvider>
  );
};

export default Index;
