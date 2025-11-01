import { Play, MessageSquare, Lightbulb, PenTool, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We begin by understanding your vision, requirements, and lifestyle to create a personalized design approach.",
      video: "/videos/1.mp4"
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Our team develops creative concepts that align with your aesthetic preferences and functional needs.",
      video: "/videos/3.mp4"
    },
    {
      icon: PenTool,
      title: "Design & Planning",
      description: "Detailed plans, 3D visualizations, and material selections bring your dream space to life.",
      video: "/videos/2.mp4"
    },
    {
      icon: Sparkles,
      title: "Execution",
      description: "Expert project management ensures flawless execution from start to finish with premium quality.",
      video: "/videos/4.mp4"
    }
  ];

  return (
    <section className="py-20 bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary/80 uppercase tracking-wider text-sm">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Process</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A seamless journey from concept to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl h-96 md:h-[28rem] lg:h-[32rem] shadow-2xl">
              {/* Video Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[120%] object-cover transition-transform duration-700 -translate-y-[10%] md:group-hover:scale-125"
                >
                  <source src={step.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/50 transition-colors duration-500"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Always visible title */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                
                {/* Description - only shown on mobile by default, also on desktop hover */}
                <div className="md:hidden mt-2">
                  <p className="text-gray-200 text-sm">{step.description}</p>
                  <div className="text-2xl font-bold text-primary mt-3">0{index + 1}</div>
                </div>
                
                {/* Desktop - Show on hover */}
                <div className="hidden md:block">
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40">
                    <div className="pt-2">
                      <p className="text-gray-200 text-sm">{step.description}</p>
                      <div className="text-2xl font-bold text-primary mt-3">0{index + 1}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
