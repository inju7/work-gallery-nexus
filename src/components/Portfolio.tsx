import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  objectives: string[];
  deliverables: string[];
  results: string[];
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "SaaS", "UI/UX Design"];

  const projects: Project[] = [
    {
      id: 1,
      title: "TechStart Dashboard",
      description: "Modern SaaS analytics dashboard with real-time data visualization and team collaboration features.",
      longDescription: "A comprehensive analytics platform built for growing startups to track their key metrics, manage team performance, and make data-driven decisions. The platform features real-time updates, customizable dashboards, and advanced reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "SaaS",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      objectives: [
        "Create an intuitive analytics dashboard for startup teams",
        "Implement real-time data synchronization",
        "Build scalable architecture for growing user base",
        "Ensure mobile-responsive design"
      ],
      deliverables: [
        "Full-stack web application",
        "Admin panel and user dashboard",
        "API documentation",
        "Deployment and monitoring setup"
      ],
      results: [
        "40% increase in user engagement",
        "99.9% uptime achieved",
        "50+ companies using the platform",
        "Positive user feedback scores"
      ]
    },
    {
      id: 2,
      title: "EcoShop Mobile App",
      description: "Sustainable shopping app connecting users with eco-friendly products and local vendors.",
      longDescription: "A mobile-first e-commerce platform focused on sustainability, featuring product recommendations based on environmental impact, local vendor discovery, and carbon footprint tracking for purchases.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "Mobile Apps",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps API", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      objectives: [
        "Promote sustainable shopping habits",
        "Connect users with local eco-friendly vendors",
        "Track environmental impact of purchases",
        "Create seamless mobile shopping experience"
      ],
      deliverables: [
        "iOS and Android mobile applications",
        "Vendor onboarding portal",
        "Payment processing system",
        "Analytics dashboard for vendors"
      ],
      results: [
        "10,000+ downloads in first month",
        "200+ local vendors onboarded",
        "4.8/5 app store rating",
        "Featured in 'Best Green Apps' list"
      ]
    },
    {
      id: 3,
      title: "CreativeFlow Studio",
      description: "Brand identity and web presence for a creative design agency with portfolio showcase.",
      longDescription: "Complete brand redesign and website development for a creative agency, featuring an interactive portfolio, client testimonials, and a streamlined project inquiry system.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      category: "UI/UX Design",
      technologies: ["Figma", "React", "Framer Motion", "Sanity CMS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      objectives: [
        "Rebrand agency with modern visual identity",
        "Showcase portfolio with interactive elements",
        "Improve client acquisition process",
        "Create content management system"
      ],
      deliverables: [
        "Brand identity and style guide",
        "Responsive website design",
        "Content management system",
        "SEO optimization and analytics"
      ],
      results: [
        "300% increase in website traffic",
        "50% more project inquiries",
        "Award-winning design recognition",
        "Improved brand perception"
      ]
    },
    {
      id: 4,
      title: "FoodieMarket Platform",
      description: "Multi-vendor food delivery platform with restaurant management and real-time order tracking.",
      longDescription: "A comprehensive food delivery ecosystem featuring customer apps, restaurant management dashboards, and delivery driver coordination with real-time tracking and payment processing.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      category: "E-commerce",
      technologies: ["Next.js", "MongoDB", "Socket.io", "Stripe", "Google Maps", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      objectives: [
        "Create seamless food ordering experience",
        "Enable multi-vendor restaurant management",
        "Implement real-time order tracking",
        "Build scalable delivery coordination system"
      ],
      deliverables: [
        "Customer web and mobile applications",
        "Restaurant dashboard and management tools",
        "Delivery driver mobile app",
        "Admin panel and analytics"
      ],
      results: [
        "500+ restaurants onboarded",
        "50,000+ orders processed",
        "Average 25-minute delivery time",
        "98% customer satisfaction rate"
      ]
    },
    {
      id: 5,
      title: "FinanceTracker Pro",
      description: "Personal finance management web application with budget tracking and investment insights.",
      longDescription: "A comprehensive personal finance tool that helps users track expenses, set budgets, analyze spending patterns, and get insights into their financial health with bank integration and investment tracking.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      category: "Web Development",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Plaid API", "Chart.js", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      objectives: [
        "Simplify personal financial management",
        "Provide actionable spending insights",
        "Enable secure bank account integration",
        "Create intuitive budgeting tools"
      ],
      deliverables: [
        "Web application with dashboard",
        "Bank integration and transaction sync",
        "Budget planning and tracking tools",
        "Financial reports and analytics"
      ],
      results: [
        "5,000+ active users",
        "Average 30% reduction in overspending",
        "Bank-level security compliance",
        "4.7/5 user satisfaction rating"
      ]
    },
    {
      id: 6,
      title: "WorkSpace Collaboration",
      description: "Team collaboration platform with project management, video calls, and file sharing.",
      longDescription: "An all-in-one workspace solution for remote teams featuring project management, real-time collaboration, video conferencing, and integrated file sharing with advanced permission controls.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "SaaS",
      technologies: ["React", "Express.js", "Socket.io", "WebRTC", "AWS S3", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      objectives: [
        "Streamline remote team collaboration",
        "Integrate multiple productivity tools",
        "Enable seamless video communication",
        "Provide secure file sharing solution"
      ],
      deliverables: [
        "Web-based collaboration platform",
        "Video conferencing integration",
        "Project management tools",
        "File storage and sharing system"
      ],
      results: [
        "100+ companies using platform",
        "40% improvement in team productivity",
        "99.5% video call uptime",
        "Enterprise security certification"
      ]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Our <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover-lift border-0 shadow-custom-md bg-gradient-card overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gradient-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-custom-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/90"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </Button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge className="mb-3">{selectedProject.category}</Badge>
                  <h2 className="font-heading font-bold text-3xl mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Project Objectives</h3>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Key Deliverables</h3>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4">Results & Impact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                      <span className="font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Live Project
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;