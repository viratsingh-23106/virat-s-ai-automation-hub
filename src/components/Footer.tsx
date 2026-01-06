const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Virat Singh. Building the future with AI.
          </p>
          <p className="text-muted-foreground text-sm font-mono">
            Made with 💙 using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
