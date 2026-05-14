
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
        { name: "Chart.js", logo: "https://www.chartjs.org/media/logo-title.svg" },
      ],
    },
    {
      title: "Technologies & Tools",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Render", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Oracle SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "Firestore", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "AJAX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "jQuery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
        { name: "Responsive Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Ollama", logo: "https://ollama.com/public/ollama.png" },
        { name: "LLaMA 3 (8B)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Prompt Engineering", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "Context-Aware Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "LLM Integration", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
        { name: "Gemini API", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
      ],
    },
  ];

  const softSkills = [
    "Web Development",
    "Full-Stack Development",
    "Frontend Developer",
    "Competitive Coding",
    "Public Speaking",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow orb */}
      <motion.div
        className="absolute top-0 right-0 w-[360px] h-[360px] bg-primary/4 rounded-full blur-[90px]"
        animate={{ scale: [1, 1.06, 1] }}
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
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-mono text-sm text-primary mb-4 pb-3 border-b border-border/50">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary/5 transition-all duration-200 group cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIdx * 0.05 + skillIdx * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 2 }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-mono text-sm text-primary mb-6 text-center">// expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                className="px-5 py-2.5 glass rounded-full text-sm font-medium text-foreground hover:text-primary hover:border-primary/30 hover:glow-primary transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
