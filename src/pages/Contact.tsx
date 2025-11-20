import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Find answers to common questions about our programs, eligibility, and how to get involved.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* General Questions */}
              <AccordionItem value="q1" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  What is the Celta Trust Foundation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Celta Trust Foundation is a philanthropic organization dedicated to empowering academically brilliant and financially needy trainees across Africa. We provide scholarships, mentorship, leadership development, research funding, and innovation support to develop Africa's next generation of leaders, scientists, and innovators.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  What does "CELTA" stand for?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">CELTA represents the guiding principles of the Foundation:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>C – Career:</strong> Supporting career pathways through mentorship and skill development</li>
                    <li><strong>E – Education:</strong> Providing scholarships and educational funding</li>
                    <li><strong>L – Leadership:</strong> Cultivating ethical, visionary, and community-centered leaders</li>
                    <li><strong>T – Training:</strong> Offering professional, technical, and research training</li>
                    <li><strong>A – Africans:</strong> Empowering Africans for sustainable impact across the continent</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  When was the Foundation launched?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The Celta Trust Foundation was officially launched on December 21, 2025.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  When will the first awardees be announced?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The first list of awardees will be announced on March 21, 2026.
                </AccordionContent>
              </AccordionItem>

              {/* Scholarships & Awards */}
              <AccordionItem value="q5" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  Who is eligible for Celta Trust Foundation awards?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">Eligibility generally includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>African origin</li>
                    <li>Academic excellence</li>
                    <li>Demonstrated financial need</li>
                    <li>Leadership potential</li>
                    <li>Community engagement or research interest</li>
                  </ul>
                  <p className="mt-2">Specific requirements may vary by award category.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  What types of awards does Celta Trust offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">The Foundation offers:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Excellence Awards (recognizing outstanding academic and personal achievement)</li>
                    <li>Science Leadership Awards (honoring leadership in research and scientific innovation)</li>
                    <li>Research & Innovation Grants (supporting small research projects, conferences, and innovation)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  Can international students apply?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Only individuals of African origin are eligible for awards, regardless of where they currently reside.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  What costs do scholarships and awards cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">Depending on the award, support may include:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tuition fees</li>
                    <li>Living stipends (where applicable)</li>
                    <li>Research expenses</li>
                    <li>Travel and conference costs</li>
                    <li>Professional development and mentorship opportunities</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q9" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  How do I apply?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">Applications open January 10, 2026. Applicants will submit an online form along with:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Academic transcripts</li>
                    <li>Personal statement</li>
                    <li>CV (for research/fellowship applicants)</li>
                    <li>Two reference letters</li>
                    <li>Financial need documentation</li>
                    <li>Research proposal (if applicable)</li>
                  </ul>
                  <p className="mt-2">Applications close on March 10, 2026.</p>
                </AccordionContent>
              </AccordionItem>

              {/* Donations & Partnerships */}
              <AccordionItem value="q10" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  How can I support the Foundation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">You can support the Foundation by:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Making a one-time or recurring donation</li>
                    <li>Becoming a mentor for scholars</li>
                    <li>Volunteering in programmes or events</li>
                    <li>Partnering as an institution, NGO, or corporate sponsor</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q11" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  Are donations tax-deductible?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Tax treatment depends on your country of residence. Donors should consult local tax regulations or contact the Foundation for guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q12" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  Can I sponsor a specific award or scholar?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. The Foundation welcomes endowment gifts or sponsorships for named scholarships, awards, or research programmes. Please contact us for details.
                </AccordionContent>
              </AccordionItem>

              {/* Mentorship Programme */}
              <AccordionItem value="q13" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  Who can become a mentor?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Experienced professionals, academics, scientists, and industry leaders who wish to guide and support scholars are invited to join our mentorship network.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q14" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  What is expected from mentors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Mentors provide guidance on academic and career development, research advice, leadership skills, and personal growth. Mentors may engage remotely or in person.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q15" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  How long does mentorship last?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Mentorship duration varies by programme but typically lasts between 6–12 months, with opportunities for continued engagement.
                </AccordionContent>
              </AccordionItem>

              {/* Contact & Support */}
              <AccordionItem value="q16" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  How can I contact the Foundation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-none space-y-1">
                    <li><strong>Email:</strong> celtatrust.offices@gmail.com</li>
                    <li><strong>Phone:</strong> +233 24 360 1178 / +233 55 801 7827</li>
                    <li><strong>Address:</strong> Volta Road, University of Ghana, P.O. Box LG 309, Legon-Accra, Ghana</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q17" className="bg-background rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left font-semibold">
                  Where can I find updates on awards and news?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Updates are shared on the Foundation's website, newsletter, and social media channels. You can subscribe to receive announcements and programme updates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
