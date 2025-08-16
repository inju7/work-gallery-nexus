import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Park",
      role: "CEO, TechStartup",
      company: "TechStartup Inc.",
      content: "DevCraft transformed our vision into reality. Their technical expertise and attention to detail exceeded our expectations. The team delivered on time and budget.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "Creative Agency",
      content: "Working with DevCraft was a game-changer for our business. They built us a beautiful, fast website that has significantly increased our conversion rates.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      role: "Founder",
      company: "E-commerce Platform",
      content: "The mobile app they developed for us is outstanding. Our customers love the user experience, and we've seen a 40% increase in mobile sales since launch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "StartupXYZ", logo: "SX" },
    { name: "DigitalFlow", logo: "DF" },
    { name: "CloudTech", logo: "CT" },
    { name: "NextGen", logo: "NG" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-0 shadow-custom-md bg-gradient-card">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="font-heading font-semibold text-xl mb-8 text-muted-foreground">
            Trusted by innovative companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {company.logo}
                </div>
                <span className="font-medium text-muted-foreground">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;