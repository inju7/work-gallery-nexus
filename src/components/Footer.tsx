import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile Development", href: "#services" },
        { label: "Full-Stack Solutions", href: "#services" },
        { label: "UI/UX Design", href: "#services" }
      ]
    },
    {
      title: "Company", 
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQ", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:hello@devcraft.com", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-heading font-bold text-xl text-gradient-primary">
                DevCraft
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              We're a passionate team of developers and designers creating extraordinary 
              digital experiences that drive business growth and delight users.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">
                Stay <span className="text-gradient-primary">Updated</span>
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on web development trends and our projects.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} DevCraft. Made with 
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              for the web.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;