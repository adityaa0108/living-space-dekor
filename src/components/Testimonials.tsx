import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Thompson",
      role: "Homeowner",
      content: "Living Space Dekor transformed our house into a dream home. Their attention to detail and understanding of our lifestyle was exceptional. Every corner reflects our personality perfectly.",
      rating: 5
    },
    {
      name: "David Martinez",
      role: "Business Owner",
      content: "The commercial design they created for our office has significantly improved our team's productivity and morale. The space is both functional and inspiring.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Hotel Manager",
      content: "Our hotel's redesign exceeded all expectations. The elegant yet practical design has received countless compliments from guests. Truly world-class work!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-muted-foreground uppercase tracking-wider text-sm">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <Quote className="w-12 h-12 text-secondary mb-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
