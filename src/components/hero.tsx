"use client";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.1),transparent)]" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Airuz Jake Gojar
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Web Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with modern technologies and thoughtful design. 
            Passionate about creating solutions that make a difference.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="https://github.com/zurshan" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <a href="https://www.linkedin.com/in/airuz-jake-gojar-a97637301/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <Button 
            onClick={scrollToAbout}
            className="group"
            size="lg"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};