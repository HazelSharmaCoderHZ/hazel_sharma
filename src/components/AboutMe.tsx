
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text inline-block">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 glow-primary flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.div
                className="w-36 h-36 md:w-44 md:h-44 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/lovable-uploads/685f96cd-72fb-40b4-94d0-7295e37e0628.png"
                  alt="Hazel Sharma"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground">Hazel Sharma</h3>
                <p className="text-primary font-mono text-sm mb-4">Full Stack Developer</p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Highly motivated IT student with a passion for leveraging technology to drive innovation. 
                  Eager to apply technical expertise, problem-solving abilities, and a continuous learning 
                  mindset to deliver exceptional results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Have hosted various tech events utilizing my{" "}
                  <span className="text-primary font-semibold">project management</span> and{" "}
                  <span className="text-primary font-semibold">people management</span> skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
