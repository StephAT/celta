import { Shield, FileText, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Policies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Policies
            </h1>
            <p className="text-xl text-muted-foreground">
              Commitment to transparency, equity, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="edi" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="edi">EDI Policy</TabsTrigger>
                <TabsTrigger value="ffa">Financial Policy</TabsTrigger>
                <TabsTrigger value="award">Award Policy</TabsTrigger>
                <TabsTrigger value="strategic">Strategic Priorities</TabsTrigger>
              </TabsList>

              {/* EDI Policy */}
              <TabsContent value="edi">
                <Card>
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="text-primary" size={32} />
                      <h2 className="text-2xl font-bold text-foreground">
                        Equality, Diversity and Inclusion (EDI) Policy
                      </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        The Celta Trust Foundation is committed to equality, diversity, and inclusion (EDI) across all 
                        aspects of its programmes and operations. We recognise that diverse backgrounds, perspectives, 
                        and experiences enrich the work we do and strengthen the impact we aim to achieve.
                      </p>
                      <p>
                        We are committed to providing equal opportunities to all individuals regardless of gender, race, 
                        ethnicity, nationality, socio-economic background, disability, and other identities. All 
                        scholarships, mentorship opportunities, and leadership roles are allocated through transparent, 
                        inclusive, and non-discriminatory processes.
                      </p>
                      <p>
                        Celta Trust ensures diverse selection panels, gender balance, accessible communication, and 
                        equitable support for scholars. Discrimination or harassment of any kind is strictly prohibited.
                      </p>
                      <p>
                        The Celta Trust Foundation monitors EDI progress annually and provides clear reporting mechanisms 
                        to address concerns and ensure accountability.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Financial Policy */}
              <TabsContent value="ffa">
                <Card>
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="text-secondary" size={32} />
                      <h2 className="text-2xl font-bold text-foreground">
                        Funding and Financial Activity (FFA) Policy
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          The Celta Trust Foundation is committed to transparent, ethical, and accountable management 
                          of all funds entrusted to it. All financial resources are used strictly to support the 
                          Foundation's mission of providing scholarships, mentorship, and career development opportunities 
                          for Africans.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">1. Sources of Funding</h3>
                        <p className="text-muted-foreground">
                          Celta Trust receives funds from donations, named scholarships, endowments, grants, partnerships, 
                          investment income, and fundraising activities. All funds must come from lawful and ethical sources.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">2. Financial Oversight</h3>
                        <p className="text-muted-foreground">
                          The Board of Trustees has overall authority for financial decisions. The Finance & Audit Committee 
                          oversees daily financial management, and the Executive Director manages operational budgets and reporting.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">3. Use of Funds</h3>
                        <p className="text-muted-foreground">
                          Money may be used for scholarships, mentorship activities, programme delivery, administrative needs, 
                          and approved operational expenses. Restricted donations must be used only for their designated purposes.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">4. Reporting and Audits</h3>
                        <p className="text-muted-foreground">
                          Celta Trust provides quarterly internal financial reports and publishes annual audited accounts. 
                          Sponsors receive updates on the use and impact of their contributions.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">5. Anti-Fraud and Ethical Conduct</h3>
                        <p className="text-muted-foreground">
                          The Foundation has zero tolerance for fraud, corruption, conflicts of interest, or misuse of funds. 
                          All financial activities must comply with relevant laws and ethical standards.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Award Policy */}
              <TabsContent value="award">
                <Card>
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="text-accent" size={32} />
                      <h2 className="text-2xl font-bold text-foreground">
                        Award Policy
                      </h2>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          The Celta Trust Foundation provides scholarships and career development awards to academically 
                          excellent, financially needy students of African origin. All awards are granted through fair, 
                          transparent, and merit-based processes.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">1. Types of Awards</h3>
                        <p className="text-muted-foreground">
                          Celta Trust offers General Awards, Special/Thematic Awards, Named Scholarships, Corporate/Institutional 
                          Awards, and Career Development Grants.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">2. Eligibility</h3>
                        <p className="text-muted-foreground">
                          Applicants must meet criteria such as academic excellence, financial need, leadership potential, 
                          and admission to an accredited university. Special awards may carry additional donor requirements.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">3. Application & Selection</h3>
                        <p className="text-muted-foreground">
                          Calls for applications are publicly announced. Applicants submit academic records, financial statements, 
                          recommendation letters, and personal essays. The Scholarship Committee reviews applications, and the 
                          Board of Trustees approves final selections.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">4. Scholar Obligations</h3>
                        <p className="text-muted-foreground">
                          Recipients must maintain required academic performance, submit progress reports, participate in mentorship, 
                          uphold Celta Trust values, and join alumni activities after graduation.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">5. Withdrawal of Awards</h3>
                        <p className="text-muted-foreground">
                          Awards may be terminated for misconduct, academic failure, dishonesty, or breach of scholarship terms.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Strategic Priorities */}
              <TabsContent value="strategic">
                <Card>
                  <CardContent className="pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="text-primary" size={32} />
                      <h2 className="text-2xl font-bold text-foreground">
                        Strategic Priorities
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Expand access to education</h3>
                          <p className="text-muted-foreground">
                            for financially challenged students
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Strengthen Africa's scientific and professional workforce</h3>
                          <p className="text-muted-foreground">
                            through targeted support and development programs
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Promote research and innovation</h3>
                          <p className="text-muted-foreground">
                            across the continent
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Build leadership capacity</h3>
                          <p className="text-muted-foreground">
                            among youth and early-career professionals
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Policies;
