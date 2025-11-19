import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out with questions, partnership opportunities, 
              or to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-primary/20 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary" size={32} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Email Us</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:celtatrust.offices@gmail.com" 
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      celtatrust.offices@gmail.com
                    </a>
                    <a 
                      href="mailto:celtatrust@outlook.com" 
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      celtatrust@outlook.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-accent" size={32} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Call Us</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>
                      <div className="font-medium text-foreground">West Africa</div>
                      <div>+233 243 601 178</div>
                      <div>+233 558 017 827</div>
                    </div>
                    <div className="pt-2">
                      <div className="font-medium text-foreground">East Africa</div>
                      <div>+254 722 417 961</div>
                    </div>
                    <div className="pt-2">
                      <div className="font-medium text-foreground">USA</div>
                      <div>+1 917 500 3485</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Our Regions</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>West Africa</div>
                    <div>East Africa</div>
                    <div>North America</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Serving scholars across the African continent
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Notice */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-6">
              Before reaching out, you may find answers to common questions in our FAQ section. 
              This includes information about eligibility, application processes, award timelines, 
              and donation options.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View FAQ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
