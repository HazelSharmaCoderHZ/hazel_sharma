
import { motion } from "framer-motion";
import { ExternalLink, Github, Heart, Trophy, Activity, Code2, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HealthPlus",
      description: "HealthPlus is a Full-Stack, AI-powered health management platform that combines health tracking, disease prediction, and conversational healthcare assistance. The app provides both personal as well as team tracking.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      tech: ["Next.js", "React", "Tailwind CSS", "Firebase Authentication", "Firestore", "Python", "Disease Prediction Models", "Ollama", "LLaMA 3 (8B)", "AI Chatbot", "REST APIs"],
      github: "https://github.com/HazelSharmaCoderHZ/HealthPlus2",
      demo: "https://health-plus2.vercel.app/",
      icon: Activity,
    },
    {
      title: "Dear Diary",
      description: "Dear Diary is an AI-enhanced journaling platform designed to support emotional well-being through secure personal journaling, mood tracking, and emotion analysis. The platform helps users understand emotional patterns by analyzing journal entries and providing AI-powered emotional insights.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
      tech: ["React", "Next.js", "MongoDB", "Emotion Detection", "Sentiment Analysis", "AI APIs", "Tailwind CSS", "Postman"],
      github: "https://github.com/HazelSharmaCoderHZ",
      demo: "https://journaldeardiary-pqsj.vercel.app/",
      icon: Heart,
    },
    {
      title: "PDF RAG Assistant",
      description: "PDF RAG Assistant is a Retrieval-Augmented Generation (RAG) system that allows users to chat with PDF documents using semantic search and AI-powered retrieval. The platform supports multi-document analysis, conversation memory, authentication, and explainable answers with page-level citations.",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&h=400&fit=crop",
      tech: ["Python", "Streamlit", "MongoDB Atlas", "FAISS", "Sentence Transformers", "Groq API", "LLaMA 3.3 70B", "Semantic Chunking", "Vector Search", "RAG", "Authentication", "bcrypt", "PyPDF"],
      github: "https://github.com/HazelSharmaCoderHZ/RAG-PDF-Chatbot",
      demo: "https://rag-pdf-chatbot-hazel-sharma.streamlit.app/",
      icon: FileText,
    },
    {
      title: "PSAI Tech",
      description: "A professional website built during my internship at Aarvasa, showcasing the company's services and solutions to clients",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/HazelSharmaCoderHZ/PSAI-Tech",
      demo: "https://psai-tech-ten.vercel.app/",
      icon: Trophy,
    },
    {
      title: "Code Golf",
      description: "A PR website built for the college club IEEE WIE, showcasing events and community engagement",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop",
      tech: ["TypeScript", "Tailwind", "Next.js"],
      github: "https://github.com/HazelSharmaCoderHZ/Code-Golf",
      demo: "https://codegolfwie.vercel.app/",
      icon: Code2,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Background glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-primary/4 rounded-full blur-[90px]"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A showcase of projects that demonstrate my skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden hover:glow-primary-strong transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Overlay buttons */}
                <motion.div
                  className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl text-foreground hover:text-primary hover:glow-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl text-foreground hover:text-primary hover:glow-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <project.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-primary/5 text-primary/80 rounded-md border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
