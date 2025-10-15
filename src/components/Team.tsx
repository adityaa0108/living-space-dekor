import { Linkedin, Mail } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const Team = () => {
  const team = [
    {
      name: "Sarah Anderson",
      role: "Founder & Lead Designer",
      image: founderImage,
      bio: "15+ years of experience in luxury interior design"
    },
    {
      name: "Michael Chen",
      role: "Senior Designer",
      image: founderImage,
      bio: "Specialist in commercial and hospitality spaces"
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      image: founderImage,
      bio: "Expert in seamless project execution"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-wider text-sm">Meet The Experts</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate designers dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-dark transition-colors">
                      <Linkedin className="w-5 h-5 text-secondary-foreground" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-dark transition-colors">
                      <Mail className="w-5 h-5 text-secondary-foreground" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
