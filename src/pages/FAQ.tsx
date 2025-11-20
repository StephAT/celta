import { HelpCircle, Award, Heart, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our programs and services
            </p>
          </div>
        </div>
      </section>

      {/* General Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* General */}
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="text-primary" size={32} />
                  <h2 className="text-2xl font-bold text-foreground">General</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>When was the Foundation launched?</AccordionTrigger>
                    <AccordionContent>
                      The Celta Trust Foundation was officially launched on December 21, 2025.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>When will the first awardees be announced?</AccordionTrigger>
                    <AccordionContent>
                      The first list of awardees will be announced on March 21, 2026.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Scholarships & Awards */}
            <Card className="border-secondary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-secondary" size={32} />
                  <h2 className="text-2xl font-bold text-foreground">Scholarships & Awards</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Who is eligible for Celta Trust Foundation awards?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>Eligibility generally includes:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>African origin</li>
                          <li>Academic excellence</li>
                          <li>Demonstrated financial need</li>
                          <li>Leadership potential</li>
                          <li>Community engagement or research interest</li>
                        </ul>
                        <p className="mt-2">Specific requirements may vary by award category.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What types of awards does Celta Trust offer?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>The Foundation offers:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Excellence Awards (recognizing outstanding academic and personal achievement)</li>
                          <li>Science Leadership Awards (honoring leadership in research and scientific innovation)</li>
                          <li>Research & Innovation Grants (supporting small research projects, conferences, and innovation)</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Can international students apply?</AccordionTrigger>
                    <AccordionContent>
                      Only individuals of African origin are eligible for awards, regardless of where they currently reside.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>What costs do scholarships and awards cover?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>Depending on the award, support may include:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Tuition fees</li>
                          <li>Living stipends (where applicable)</li>
                          <li>Research expenses</li>
                          <li>Travel and conference costs</li>
                          <li>Professional development and mentorship opportunities</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>How do I apply?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>Applications open January 10, 2026. Applicants will submit an online form along with:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Academic transcripts</li>
                          <li>Personal statement</li>
                          <li>CV (for research/fellowship applicants)</li>
                          <li>Two reference letters</li>
                          <li>Financial need documentation</li>
                          <li>Research proposal (if applicable)</li>
                        </ul>
                        <p className="mt-2">Applications close on March 10, 2026.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Donations & Partnerships */}
            <Card className="border-accent/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-accent" size={32} />
                  <h2 className="text-2xl font-bold text-foreground">Donations & Partnerships</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-8">
                    <AccordionTrigger>How can I support the Foundation?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>You can support the Foundation by:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Making a one-time or recurring donation</li>
                          <li>Becoming a mentor for scholars</li>
                          <li>Volunteering in programmes or events</li>
                          <li>Partnering as an institution, NGO, or corporate sponsor</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger>Are donations tax-deductible?</AccordionTrigger>
                    <AccordionContent>
                      Tax treatment depends on your country of residence. Donors should consult local tax regulations 
                      or contact the Foundation for guidance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10">
                    <AccordionTrigger>Can I sponsor a specific award or scholar?</AccordionTrigger>
                    <AccordionContent>
                      Yes. The Foundation welcomes endowment gifts or sponsorships for named scholarships, awards, 
                      or research programmes. Please contact us for details.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Mentorship Programme */}
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-primary" size={32} />
                  <h2 className="text-2xl font-bold text-foreground">Mentorship Programme</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-11">
                    <AccordionTrigger>Who can become a mentor?</AccordionTrigger>
                    <AccordionContent>
                      Experienced professionals, academics, scientists, and industry leaders who wish to guide and 
                      support scholars are invited to join our mentorship network.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-12">
                    <AccordionTrigger>What is expected from mentors?</AccordionTrigger>
                    <AccordionContent>
                      Mentors provide guidance on academic and career development, research advice, leadership skills, 
                      and personal growth. Mentors may engage remotely or in person.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-13">
                    <AccordionTrigger>How long does mentorship last?</AccordionTrigger>
                    <AccordionContent>
                      Mentorship duration varies by programme but typically lasts between 6–12 months, with opportunities 
                      for continued engagement.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
