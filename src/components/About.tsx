import { Zap, Code2, Workflow, Cloud } from "lucide-react";

const skills = [
  {
    icon: Zap,
    title: "AI Automation",
    description: "Building intelligent systems that automate complex workflows using cutting-edge AI technologies.",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Creating scalable software solutions that solve real business problems.",
  },
  {
    icon: Workflow,
    title: "Workflow Integration",
    description: "Connecting platforms like Discord, Telegram, Airtable, and Google Sheets seamlessly.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing robust cloud-native applications for maximum performance and reliability.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-mono text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting <span className="text-gradient">Intelligent</span> Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Virat Singh, an AI Automation Engineer and SaaS Builder passionate about 
              leveraging technology to create impactful solutions. I specialize in building 
              automated systems that integrate AI with everyday tools.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From RAG agents to bulk messaging systems, I transform complex workflows 
              into elegant, automated processes. My focus is on creating solutions that 
              are not just technically sound but also deliver real business value.
            </p>
          </div>

          {/* Right - Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
