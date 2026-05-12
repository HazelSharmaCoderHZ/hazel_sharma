
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Aarvasa",
      period: "January 2026 - May 2026",
      location: "India",
      description: "Working as a frontend developer, building responsive and user-friendly web applications.",
      skills: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Responsive Web Design",
  "REST API Integration",
  "Git & GitHub",
  "Component-Based Architecture",
  "State Management",
  "UI/UX Optimization",
  "Frontend Debugging",
  "Vite",
  "Performance Optimization",
  "Reusable Components",
  "Figma to Code",
  "Cross-Browser Compatibility"
]
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-16 pb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-6 -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background glow-primary-strong"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="mt-3 text-muted-foreground text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
