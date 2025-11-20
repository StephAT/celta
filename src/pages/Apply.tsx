import { Calendar, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Apply for Awards
            </h1>
            <p className="text-xl text-muted-foreground">
              Your journey to excellence begins here. Review the guidelines and key dates below.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-primary" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Key Dates
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/30">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Jan 10</div>
                  <div className="text-sm text-muted-foreground mb-4">2026</div>
                  <h3 className="font-semibold text-foreground">Applications Open</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Online application portal opens for all award categories
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/30">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">Mar 10</div>
                  <div className="text-sm text-muted-foreground mb-4">2026</div>
                  <h3 className="font-semibold text-foreground">Applications Close</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Final deadline for submission of all application materials
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/30">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">Mar 21</div>
                  <div className="text-sm text-muted-foreground mb-4">2026</div>
                  <h3 className="font-semibold text-foreground">Awardees Announced</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    First list of successful awardees will be announced
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-primary" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Application Requirements
              </h2>
            </div>

            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <p className="text-muted-foreground mb-6">
                  All applicants must submit the following documents through our online portal:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-foreground">Academic Transcripts</span>
                      <p className="text-sm text-muted-foreground">
                        Official transcripts from all institutions attended
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-foreground">Personal Statement</span>
                      <p className="text-sm text-muted-foreground">
                        A detailed statement (max 1000 words) outlining your academic goals, leadership experience, 
                        and how this award will impact your future
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-foreground">Curriculum Vitae (CV)</span>
                      <p className="text-sm text-muted-foreground">
                        Current CV detailing education, work experience, and achievements (for research/fellowship applicants)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-foreground">Two Reference Letters</span>
                      <p className="text-sm text-muted-foreground">
                        Letters from academic supervisors or professional mentors who can attest to your 
                        abilities and potential
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-foreground">Financial Need Documentation</span>
                      <p className="text-sm text-muted-foreground">
                        Evidence demonstrating financial need (income statements, household information, etc.)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-foreground">Research Proposal (if applicable)</span>
                      <p className="text-sm text-muted-foreground">
                        For research grant applicants: a detailed proposal outlining objectives, methodology, 
                        and expected outcomes
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-secondary" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                General Eligibility
              </h2>
            </div>

            <Card className="border-secondary/20">
              <CardContent className="pt-8">
                <p className="text-muted-foreground mb-6">
                  To be eligible for Celta Trust Foundation awards, applicants must meet the following criteria:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">Be of African origin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Demonstrate academic excellence (strong academic record)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Show evidence of financial need
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Exhibit leadership potential and community engagement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">
                      Be enrolled or accepted at an accredited institution (for educational awards)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Application Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Review</h3>
                <p className="text-sm text-muted-foreground">
                  Read all guidelines and requirements carefully
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Prepare</h3>
                <p className="text-sm text-muted-foreground">
                  Gather all required documents and materials
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Submit</h3>
                <p className="text-sm text-muted-foreground">
                  Complete online application before deadline
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Wait</h3>
                <p className="text-sm text-muted-foreground">
                  Await notification of results in March 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Box */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                    <p className="text-muted-foreground mb-4">
                      The online application portal will open on <strong>January 10, 2026</strong>. 
                      Please check back on this page or monitor our website for the application link.
                    </p>
                    <p className="text-muted-foreground">
                      For questions about the application process, please contact us at{" "}
                      <a href="mailto:celtatrust.offices@gmail.com" className="text-primary hover:underline">
                        celtatrust.offices@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" disabled className="bg-muted text-muted-foreground cursor-not-allowed">
                Application Portal Opens January 10, 2026
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
