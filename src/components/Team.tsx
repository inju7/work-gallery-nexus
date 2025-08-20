import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Eye, X } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatar: string;
  skills: string[];
  experience: string;
  education: string;
  certifications: string[];
  portfolio: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  }[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Full-stack developer with 5+ years experience in React and Node.js",
      longBio: "Passionate full-stack developer with over 5 years of experience building scalable web applications. Alex specializes in modern JavaScript frameworks and cloud architecture, leading teams to deliver high-quality digital solutions. With a strong background in both frontend and backend development, Alex enjoys tackling complex technical challenges and mentoring junior developers.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker", "GraphQL", "Next.js"],
      experience: "5+ years",
      education: "BS Computer Science, Stanford University",
      certifications: ["AWS Solutions Architect", "React Professional Developer", "Node.js Certified Developer"],
      portfolio: [
        {
          title: "E-commerce Platform",
          description: "Built a complete e-commerce solution with React, Node.js, and PostgreSQL",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Task Management App",
          description: "Real-time collaboration tool with WebSocket integration",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
          technologies: ["React", "TypeScript", "WebSocket", "MongoDB"],
          liveUrl: "#",
          githubUrl: "#"
        }
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "alex@devcraft.com"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about user-centered design and modern interfaces",
      longBio: "Award-winning UI/UX designer with a passion for creating intuitive and visually stunning digital experiences. Sarah combines user research with creative design to deliver solutions that not only look beautiful but also solve real user problems. Her expertise spans from mobile app design to complex web applications.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Sketch", "InVision", "Principle", "Framer"],
      experience: "4+ years",
      education: "MFA Digital Design, Art Center College of Design",
      certifications: ["Google UX Design Certificate", "Adobe Certified Expert", "Figma Professional"],
      portfolio: [
        {
          title: "Mobile Banking App",
          description: "Complete UI/UX redesign for a fintech mobile application",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
          technologies: ["Figma", "Principle", "Adobe XD", "InVision"],
          liveUrl: "#"
        },
        {
          title: "SaaS Dashboard Design",
          description: "Modern dashboard interface for analytics platform",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          technologies: ["Figma", "Framer", "Adobe Creative Suite"],
          liveUrl: "#"
        }
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah@devcraft.com"
      }
    },
    {
      id: 3,
      name: "Mike Rodriguez", 
      role: "Backend Specialist",
      bio: "Database architect and API specialist with expertise in scalable systems",
      longBio: "Experienced backend engineer specializing in building robust, scalable server-side applications. Mike has deep expertise in database design, API architecture, and cloud infrastructure. He's passionate about performance optimization and creating systems that can handle millions of users while maintaining reliability and security.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Python", "PostgreSQL", "Docker", "Microservices", "Redis", "MongoDB", "GraphQL", "Kubernetes"],
      experience: "6+ years",
      education: "MS Software Engineering, UC Berkeley",
      certifications: ["AWS DevOps Engineer", "Google Cloud Professional", "PostgreSQL Certified"],
      portfolio: [
        {
          title: "Microservices Architecture",
          description: "Scalable backend system handling 1M+ daily requests",
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
          technologies: ["Python", "Docker", "Kubernetes", "PostgreSQL"],
          githubUrl: "#"
        },
        {
          title: "Real-time Chat API",
          description: "High-performance messaging system with WebSocket support",
          image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
          technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
          githubUrl: "#"
        }
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "mike@devcraft.com"
      }
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Mobile Developer", 
      bio: "React Native specialist creating beautiful cross-platform mobile experiences",
      longBio: "Mobile development expert with a focus on creating exceptional cross-platform applications. Emma has extensive experience in both native iOS/Android development and React Native, allowing her to choose the best approach for each project. She's known for delivering polished, performant mobile apps that users love.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["React Native", "iOS", "Android", "Redux", "Swift", "Kotlin", "Flutter", "Firebase"],
      experience: "4+ years",
      education: "BS Mobile Computing, Georgia Tech",
      certifications: ["React Native Certified", "iOS Developer", "Android Developer"],
      portfolio: [
        {
          title: "Fitness Tracking App",
          description: "Cross-platform fitness app with real-time tracking and social features",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
          technologies: ["React Native", "Firebase", "Redux", "iOS"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Food Delivery Platform",
          description: "Complete mobile solution for restaurant ordering and delivery",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
          technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
          liveUrl: "#",
          githubUrl: "#"
        }
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "emma@devcraft.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Meet Our <span className="text-gradient-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented individuals working together to create exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.id} 
              className="hover-lift border-0 shadow-custom-md bg-gradient-card group overflow-hidden cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-background shadow-custom-md group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>

                {/* Info */}
                <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-gradient-primary transition-smooth">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.github}
                    className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Join Our Team
          </Button>
        </div>
      </div>

      {/* Team Member Details Modal */}
      {selectedMember && (
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-0">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl md:text-3xl font-heading font-bold text-gradient-primary">
                {selectedMember.name}
              </DialogTitle>
            </DialogHeader>

            <div className="grid md:grid-cols-3 gap-8 mt-6">
              {/* Left Column - Profile Info */}
              <div className="space-y-6">
                {/* Avatar */}
                <div className="text-center">
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-background shadow-custom-lg"
                  />
                  <h3 className="font-heading font-bold text-xl mt-4">{selectedMember.name}</h3>
                  <p className="text-primary font-medium">{selectedMember.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{selectedMember.experience} Experience</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={selectedMember.social.github}
                    className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={selectedMember.social.linkedin}
                    className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={selectedMember.social.twitter}
                    className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${selectedMember.social.email}`}
                    className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>

                {/* Education & Certifications */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Education</h4>
                    <p className="text-sm">{selectedMember.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {selectedMember.certifications.map((cert, index) => (
                        <p key={index} className="text-sm">{cert}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Details & Portfolio */}
              <div className="md:col-span-2 space-y-8">
                {/* Bio */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember.longBio}</p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Featured Work</h4>
                  <div className="grid gap-6">
                    {selectedMember.portfolio.map((project, index) => (
                      <Card key={index} className="border-0 shadow-custom-md bg-background/50 overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <h5 className="font-semibold text-lg mb-2">{project.title}</h5>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-smooth"
                                >
                                  <Eye className="h-4 w-4" />
                                  Live Demo
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-smooth"
                                >
                                  <Github className="h-4 w-4" />
                                  Source Code
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Team;