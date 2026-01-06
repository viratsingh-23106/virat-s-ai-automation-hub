import { Mail, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Cards */}
            <a
              href="mailto:vs8009423@gmail.com"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Primary Email</h3>
                  <p className="text-muted-foreground font-mono text-sm">vs8009423@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:singhvirat1890@gmail.com"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Secondary Email</h3>
                  <p className="text-muted-foreground font-mono text-sm">singhvirat1890@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918090193598"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 md:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground font-mono text-sm">+91 8090193598</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Or find me on</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/viratsingh-23106"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/virat-singh-b33989320"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://x.com/singh_vira23769"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
