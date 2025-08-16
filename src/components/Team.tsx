import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Full-stack developer with 5+ years experience in React and Node.js",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "alex@devcraft.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about user-centered design and modern interfaces",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah@devcraft.com"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Specialist",
      bio: "Database architect and API specialist with expertise in scalable systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Python", "PostgreSQL", "Docker", "Microservices"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "mike@devcraft.com"
      }
    },
    {
      name: "Emma Wilson",
      role: "Mobile Developer",
      bio: "React Native specialist creating beautiful cross-platform mobile experiences",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["React Native", "iOS", "Android", "Redux"],
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
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-lift border-0 shadow-custom-md bg-gradient-card group overflow-hidden">
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
    </section>
  );
};

export default Team;