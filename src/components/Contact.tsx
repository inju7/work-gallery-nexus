import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Let's <span className="text-gradient-primary">Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-custom-lg bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company (Optional)" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project">Project Type</Label>
                <select 
                  id="project" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="fullstack">Full-Stack Solutions</option>
                  <option value="backend">Backend Development</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-custom-md bg-gradient-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">hello@devcraft.com</p>
                    <p className="text-muted-foreground">projects@devcraft.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-custom-md bg-gradient-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg text-secondary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 765-4321</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-custom-md bg-gradient-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-muted-foreground">123 Innovation Street</p>
                    <p className="text-muted-foreground">Tech City, TC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-custom-md bg-gradient-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg text-secondary-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Weekend: Emergency only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-0 shadow-custom-lg bg-gradient-hero text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-bold text-2xl mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="mb-6 opacity-90">
                  Schedule a free consultation and let's discuss your ideas
                </p>
                <Button variant="secondary" size="lg">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;