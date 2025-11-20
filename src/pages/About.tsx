import { Users, Target, History, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import graduationImage from "@/assets/graduation-success.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Celta Trust Foundation
            </h1>
            <p className="text-xl text-muted-foreground">
              A philanthropic organisation committed to advancing education, leadership, 
              and research excellence across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Founders' Welcome */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-primary" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Founders' Welcome Message
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    It is with great purpose and deep commitment that we welcome you to the Celta Trust Foundation. 
                    Our journey began with a simple confidence: that the transformative power of education and 
                    mentorship can change the trajectory of a young person's life. Throughout our careers, we have 
                    witnessed firsthand how guidance, opportunity, and financial support can ignite potential—often 
                    where resources are scarce but talent is abundant.
                  </p>
                  <p>
                    Celta Trust Foundation was established to extend these opportunities to others. It represents 
                    our shared vision to support brilliant and financially needy trainees, strengthen Africa's 
                    research ecosystem, and build a generation of ethical, impactful leaders.
                  </p>
                  <p>
                    We invite scholars, educators, partners, donors, and friends to join us in advancing this mission. 
                    Together, we will empower excellence, nurture leadership, and create pathways for countless young 
                    Africans to contribute meaningfully to society.
                  </p>
                  <p className="font-semibold text-foreground mt-6">
                    Dr Dominic S. Y Amuzu<br />
                    <span className="text-sm text-muted-foreground">Chair of Executive Committee</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-primary" size={32} />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Who We Are
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Millions of African youths possess the intellectual capacity to excel, but face systemic 
                  barriers—limited financial support, lack of mentorship, limited access to research funding, 
                  and narrow opportunities for growth. These barriers hinder innovation and leadership development. 
                  Celta Trust Foundation exists to remove these obstacles.
                </p>
                <p>We identify outstanding individuals and equip them with:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Scholarships and training support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Mentorship and leadership guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Research and innovation funding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Professional development opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src={graduationImage} 
                alt="African graduates celebrating" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <History className="text-primary" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Our History
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Celta Trust Foundation was established to honour a legacy of mentorship, education, and 
                leadership that has shaped the journeys of countless young Africans across generations. Its 
                origins lie not in the accumulation of industrial wealth, but in the profound human investment 
                made by individuals who dedicated their lives to nurturing talent, guiding young scholars, and 
                building pathways for excellence.
              </p>
              <p>
                The story of the Foundation begins with a group of professionals who experienced firsthand the 
                transformative power of guidance and opportunity throughout their academic and professional lives. 
                Across universities, laboratories, and training spaces in Ghana, Africa, and abroad, they were 
                mentored by remarkable leaders—scientists, educators, and administrators—whose unwavering support 
                opened doors that would otherwise have remained closed.
              </p>
              <p>
                For years, the founders informally supported young people through personal mentorship, career 
                guidance, and financial assistance. But over time, this personal commitment evolved into a larger 
                vision to institutionalize support for brilliant and financially needy trainees across the continent.
              </p>
              <p>
                The Foundation was officially established with a seed fund and a mission deeply rooted in four 
                guiding principles: Career, Education, Leadership, and Training for Africans (CELTA). These 
                principles reflect the very values that shaped the founders' own development and the qualities 
                they wish to amplify in future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="text-primary" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Mission & Vision
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Mission</h3>
                  <p className="text-muted-foreground">
                    To support academically brilliant and financially needy trainees by providing scholarship 
                    funding, mentorship, research grants, and leadership development programmes that unlock 
                    potential and strengthen Africa's human capital.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">Vision</h3>
                  <p className="text-muted-foreground">
                    To build an empowered generation of African scholars, leaders, and innovators who transform 
                    their communities and advance Africa's development through excellence, research, and meaningful 
                    leadership.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-accent/20 mt-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-accent mb-4">Strategic Priorities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    <span>Expand access to education for financially challenged students</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    <span>Strengthen Africa's scientific and professional workforce</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    <span>Promote research and innovation</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    <span>Build leadership capacity across the continent</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    <span>Foster partnerships with institutions, donors, and stakeholders</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
