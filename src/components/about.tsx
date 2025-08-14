import { Code, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Custom web development with modern and clean code."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Exploring new technologies to deliver modern solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm 25 Years Old, Graduated at Quezon City University 
            Bachelor of Science in Information Technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                Started my career as a web developer during my college years, focusing on building responsive and user-friendly applications.
                Also worked as a IT Support during my Intership in Ever Bilena Cosmetics, Inc. started my first project after I graduated,
                a simple e-commerce website using Next.js, which ignited my passion for full-stack development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                Currently working as a freelance, building scalable web applications with a focus on performance and user experience.
                </p>
            </div>
            <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                    <img
                    src="/images/me.jfif"
                    alt="My Profile Picture"
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="border-none bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};