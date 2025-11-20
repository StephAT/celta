import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Events & News
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated on our latest activities, announcements, and milestones
            </p>
          </div>
        </div>
      </section>

      {/* Official Launch */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 shadow-lg mb-12">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-primary" size={32} />
                  <div>
                    <p className="text-sm text-muted-foreground">For Immediate Release</p>
                    <p className="text-sm font-semibold text-foreground">November 25, 2025</p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Celta Trust Foundation Officially Launched to Support African Scholars, Leaders, and Innovators
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    <MapPin className="inline mr-2 text-primary" size={16} />
                    Accra, Ghana
                  </p>
                  
                  <p>
                    Today marks the official launch of the Celta Trust Foundation, a new philanthropic organisation 
                    dedicated to supporting brilliant and financially needy trainees across Africa through scholarships, 
                    mentorship, research funding, and leadership development.
                  </p>

                  <p>
                    The Foundation is built on four guiding principles: Career development, Education support, Leadership 
                    growth, and Training for Africans (CELTA). It aims to expand opportunities for young Africans who 
                    face financial barriers but possess the talent and determination to excel.
                  </p>

                  <p>
                    Speaking at the launch, the Founding Members emphasized the urgent need to invest in Africa's human 
                    capital, scientific advancement, and leadership pipeline. They highlighted the Foundation's commitment 
                    to creating lasting impact through scholarships, research grants, science leadership awards, and a 
                    robust mentorship programme.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* First Award Cycle */}
            <Card className="border-secondary/20 shadow-lg">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">First Award Cycle</h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Applications for the inaugural awards will open <strong className="text-foreground">December 21, 2025</strong>, 
                    with the first list of awardees announced on <strong className="text-foreground">March 21, 2026</strong>.
                  </p>

                  <p>
                    The Celta Trust Foundation invites individuals and partners to join in empowering Africa's next 
                    generation of trainees for Excellence, Science leadership and innovators.
                  </p>

                  <div className="pt-6 border-t border-border mt-6">
                    <h4 className="font-semibold text-foreground mb-4">For inquiries:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail className="text-primary" size={18} />
                        <a href="mailto:celtatrust.offices@gmail.com" className="text-primary hover:underline">
                          celtatrust.offices@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="text-primary" size={18} />
                        <span>+233 243 601 178 / +233 558 017 827</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
