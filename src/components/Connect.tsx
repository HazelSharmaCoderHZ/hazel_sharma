
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Code, ArrowUpRight } from "lucide-react";

const Connect = () => {
  const socials = [
    { icon: Github, href: "https://github.com/HazelSharmaCoderHZ", label: "GitHub", handle: "@HazelSharmaCoderHZ" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hazelsharma-it/", label: "LinkedIn", handle: "hazelsharma-it" },
    { icon: Twitter, href: "https://x.com/HazelSharma28", label: "Twitter / X", handle: "@HazelSharma28" },
    { icon: Code, href: "https://leetcode.com/u/Hazel_Sharma/", label: "LeetCode", handle: "Hazel_Sharma" },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-primary/4 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm always open to new opportunities and collaborations
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Contact card */}
          <motion.div
            className="glass rounded-2xl p-4 sm:p-6 glow-primary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">Get in Touch</h3>

            <motion.a
              href="mailto:sharmahazel310@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl hover:bg-primary/5 transition-colors group mb-3"
              whileHover={{ x: 4 }}
            >
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
                  sharmahazel310@gmail.com
                </p>
              </div>
            </motion.a>

            <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">Vellore, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="glass rounded-2xl p-4 sm:p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">Follow Me</h3>
            <div className="space-y-2">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl hover:bg-primary/5 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 shrink-0">
                      <social.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono truncate">{social.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 sm:mt-20 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-muted-foreground/50">
            Built with ❤️ by Hazel Sharma • 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
