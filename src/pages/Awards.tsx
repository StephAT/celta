import { Award, Users, BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Awards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Award Programs
            </h1>
            <p className="text-xl text-muted-foreground">
              Supporting excellence, innovation, and leadership across Africa through three award categories
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/30 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Excellence Awards
                    </h2>
                    <p className="text-muted-foreground">Recognizing Outstanding Achievement</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Excellence Awards recognize academically brilliant African students who demonstrate 
                    exceptional academic performance, leadership potential, and financial need. These awards 
                    support students pursuing undergraduate or graduate studies in any field.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Award Coverage May Include:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Tuition fees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Living stipends</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Books and learning materials</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Mentorship and professional development</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Named Excellence Awards:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Lucas N. Amenga-Etego Excellence Award</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Kirk A. Rockett Excellence Award</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Takura Tingbani Excellence Award</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">David Nabegmado Mensah Excellence Award</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Eligibility Requirements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">African origin</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Demonstrated academic excellence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Proven financial need</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Leadership potential and community engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Science Leadership Awards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/30 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                    <Users className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Science Leadership Awards
                    </h2>
                    <p className="text-muted-foreground">Honoring Research Excellence</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Science Leadership Awards honor African students and early-career professionals who 
                    demonstrate exceptional leadership in research, scientific innovation, and knowledge 
                    creation. These awards support individuals making significant contributions to advancing 
                    science and technology across Africa.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Award Coverage May Include:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Research project funding</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Laboratory equipment and supplies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Conference and publication support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Scientific mentorship and networking opportunities</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Eligibility Requirements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">African origin</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Active involvement in scientific research</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Demonstrated leadership in research initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Commitment to advancing African science</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Grants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-secondary/30 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-success rounded-xl flex items-center justify-center">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Research Grants & Travel Awards
                    </h2>
                    <p className="text-muted-foreground">Supporting Innovation and Knowledge Sharing</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Research Grants & Travel Awards provide targeted funding for small research projects, 
                    conference attendance, academic travel, and innovation initiatives. These grants enable 
                    African scholars to pursue their research interests, share their findings, and build 
                    collaborative networks.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Grant Coverage May Include:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Small-scale research project funding</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Conference registration and travel costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Field research expenses</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-secondary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Research dissemination and publication support</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Eligibility Requirements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">African origin</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Clear research proposal or conference acceptance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Demonstrated financial need</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Academic or research affiliation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
