
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2024 - Present",
      institution: "VIT Vellore",
      degree: "Btech in Information Technology",
      location: "Vellore, India",
      description: "Currently pursuing Bachelor of Technology with focus on Information Technology and software development.",
      gpa: "CGPA: 9.13",
    },
    {
      year: "2014 - 2024",
      institution: "DAV Public School",
      degree: "CBSE Class 12th & 10th",
      location: "India",
      description: "Completed secondary education with excellent academic performance and leadership roles.",
      gpa: "Class 12th: 92.4% (PCM) | Class 10th: 95.6% | Head Girl'24",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />

            {education.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16 pb-12 last:pb-0"
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
                  transition={{ delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-2 text-primary font-mono text-sm mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">{item.degree}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{item.institution}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

                  <div className="px-3 py-1.5 bg-primary/10 rounded-lg border border-primary/20 inline-block">
                    <span className="text-xs font-mono text-primary font-semibold">{item.gpa}</span>
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

export default Education;
