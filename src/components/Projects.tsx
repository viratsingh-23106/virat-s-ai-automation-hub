import { Github, ExternalLink, Bot, Database, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "LinkedIn Post Automation",
    description: "Automated LinkedIn posting system using Telegram integration. Schedule and publish content seamlessly from your Telegram app.",
    icon: MessageSquare,
    github: "https://github.com/viratsingh-23106/postonlinkedin.git",
    tags: ["Telegram", "LinkedIn API", "Automation"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "RAG Agent",
    description: "Intelligent RAG (Retrieval-Augmented Generation) agent for enhanced AI responses with context-aware information retrieval.",
    icon: Bot,
    github: "https://github.com/viratsingh-23106/RagAGENT.git",
    tags: ["AI", "RAG", "LLM", "Vector DB"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Bulk Messaging System",
    description: "Scalable bulk messaging solution with dual database support - MySQL and Google Sheets integration for placement drive workflows.",
    icon: Database,
    github: "https://github.com/viratsingh-23106/placement-drive-workflow.git",
    tags: ["MySQL", "Google Sheets", "Automation"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Weekly Sales Dashboard",
    description: "Automated weekly sales update system with Discord notifications and Airtable data storage for seamless team communication.",
    icon: BarChart3,
    github: "https://github.com/viratsingh-23106/weekly-sale-update.git",
    tags: ["Discord", "Airtable", "Analytics"],
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span> & Automations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI automation tools and SaaS solutions I've built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-2.5 mb-4`}>
                  <project.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com/viratsingh-23106" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
