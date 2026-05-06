
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
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Connect />
          </section>
        </div>
      )}
    </ThemeProvider>
  );
};

export default Index;
