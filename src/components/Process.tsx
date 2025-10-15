import { MessageSquare, Lightbulb, PenTool, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We begin by understanding your vision, requirements, and lifestyle to create a personalized design approach."
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Our team develops creative concepts that align with your aesthetic preferences and functional needs."
    },
    {
      icon: PenTool,
      title: "Design & Planning",
      description: "Detailed plans, 3D visualizations, and material selections bring your dream space to life."
    },
    {
      icon: Sparkles,
      title: "Execution",
      description: "Expert project management ensures flawless execution from start to finish with premium quality."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-foreground/70 uppercase tracking-wider text-sm">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Process</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A seamless journey from concept to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-secondary/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
