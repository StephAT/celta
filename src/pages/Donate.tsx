import { Heart, Users, Award, TrendingUp, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-accent to-secondary bg-[length:200%_200%] animate-gradient-shift text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Lives Through Education
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your donation empowers brilliant African students to achieve their dreams and 
              become the leaders who will shape Africa's future.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Every donation creates ripples of change across generations and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-2">Scholarships</h3>
                <p className="text-sm text-muted-foreground">
                  Fund tuition, books, and living expenses for deserving students
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-2">Mentorship</h3>
                <p className="text-sm text-muted-foreground">
                  Support programs connecting students with experienced mentors
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-2">Research</h3>
                <p className="text-sm text-muted-foreground">
                  Enable groundbreaking research and scientific innovation
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20 text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-gold" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-2">Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Develop ethical leaders who will transform communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Ways to Support
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/30">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">One-Time Donation</h3>
                  <p className="text-muted-foreground mb-6">
                    Make a single gift to support current programs and award recipients
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Immediate impact</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Tax-deductible (where applicable)</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Choose your impact area</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Give Once
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-secondary/30 shadow-lg scale-105">
                <CardContent className="pt-8">
                  <div className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST IMPACT
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Monthly Giving</h3>
                  <p className="text-muted-foreground mb-6">
                    Become a sustaining partner with recurring monthly contributions
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Sustained support for scholars</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Exclusive updates and stories</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Give Monthly
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/30">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Sponsor a Scholar</h3>
                  <p className="text-muted-foreground mb-6">
                    Directly sponsor a specific student's education journey
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Personal connection with scholar</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Progress updates and reports</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Direct, measurable impact</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Sponsor Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Other Ways to Help
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Become a Mentor</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your expertise and guide the next generation of African leaders through 
                    our mentorship program
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Volunteer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contribute your time and skills to support our programs, events, and 
                    administrative operations
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Get Involved
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Corporate Partnership</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Partner with us as an organization to create lasting impact through 
                    corporate sponsorship and engagement
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Legacy Giving</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Include Celta Trust Foundation in your estate planning to create a lasting 
                    legacy of educational empowerment
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn About Legacy Gifts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Transparency & Accountability
            </h2>
            <p className="text-muted-foreground mb-8">
              We are committed to responsible stewardship of every donation. Your contributions 
              directly support our programs, and we provide regular updates on impact and outcomes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Direct Program Support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">10%</div>
                <p className="text-sm text-muted-foreground">Administrative Costs</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5%</div>
                <p className="text-sm text-muted-foreground">Fundraising</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              *Projected allocation percentages. Actual figures may vary as programs develop.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Making a Difference Today
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join us in building Africa's future through education, leadership, and opportunity
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Make Your Donation
            </Button>
            <p className="text-sm text-white/80 mt-6">
              Questions? Contact us at{" "}
              <a href="mailto:celtatrust.offices@gmail.com" className="underline">
                celtatrust.offices@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
