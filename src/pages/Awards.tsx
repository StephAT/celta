import { useState, useEffect } from "react";
import { Award, Users, Lightbulb, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AwardsTimeline from "@/components/AwardsTimeline";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Link } from "react-router-dom";

const Awards = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-20">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Awards Overview
            </h1>
            <p className="text-xl text-muted-foreground">
              Our awards programme celebrates excellence, leadership, and innovation across scientific research and capacity building
            </p>
          </div>
        </div>
      </section>

{/* Science Leadership Awards */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center">
          <Users className="text-white" size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Science Leadership Awards</h2>
          <p className="text-muted-foreground">Recognising Visionary Leadership</p>
        </div>
      </div>

      <Card className="border-primary/30 shadow-lg">
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="awandare">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                Gordon A. Awandare Science Leadership Award
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Gordon A. Awandare Science Leadership Award celebrates the spirit of visionary
                leadership and relentless dedication exemplified by Professor Gordon Awandare. It
                honors those who drive scientific innovation and transformative research, inspiring
                communities and empowering Africa's future in science.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* Excellence Awards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Excellence Awards</h2>
                <p className="text-muted-foreground">Celebrating Outstanding Achievement</p>
              </div>
            </div>

            <Card className="border-accent/30 shadow-lg">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="amenga-etego">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      Lucas N. Amenga-Etego Excellence Award
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      This award, created in honor of Prof. Lucas Amenga-Etego, Research Fellow at WACCBIP, acknowledges exceptional contributions to malaria research, genetic epidemiology, and bioinformatics. It celebrates innovation, leadership, and a commitment to improving understanding of infectious diseases in Africa.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="rockett">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      Kirk A. Rockett Excellence Award
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Awarded to a trainee who demonstrates exceptional commitment to research and community impact.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tingbani">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      Takura Tingbani Excellence Award
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Honours individuals who show exemplary leadership, diligence, and academic distinction.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mensah">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      David Nabegmado Mensah Excellence Award
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Recognises exceptional service, strong work ethic, and outstanding academic performance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Innovation Grants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-success rounded-xl flex items-center justify-center">
                <Lightbulb className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Research & Innovation Grants</h2>
                <p className="text-muted-foreground">Empowering Early-Career Scientists</p>
              </div>
            </div>

            <Card className="border-secondary/30 shadow-lg">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="small-grants">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      Small Research Grants
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Support early-stage or pilot projects with the potential to drive new scientific insights.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="innovation">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      Innovation Fund Awards
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Enable bold, creative, and high-impact ideas that push the boundaries of scientific research and innovation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="travel">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                      <div className="flex items-center gap-2">
                        <Plane size={18} />
                        <span>Travel & Conference Awards</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Provide opportunities for trainees and researchers to present their work, attend international events, and build collaborative networks.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              From submission to selection: Your journey to becoming an award recipient
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <AwardsTimeline />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Applications open January 10, 2026. The first awardees will be announced on March 21, 2026.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary">
                View Application Guidelines
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
