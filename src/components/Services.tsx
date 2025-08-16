import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Palette,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js & Express", "TypeScript", "API Integration"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development", 
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["React Native", "iOS & Android", "Progressive Web Apps", "App Store Deployment"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from database design to user interface implementation.",
      features: ["Database Design", "Backend APIs", "Frontend Development", "DevOps & Deployment"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database & Backend",
      description: "Scalable backend architectures and database solutions for your business needs.",
      features: ["PostgreSQL & MongoDB", "REST & GraphQL APIs", "Microservices", "Data Migration"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, deployment automation, and continuous integration.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Scaling"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-custom-md bg-gradient-card group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-6 group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;