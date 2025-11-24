import { Users, Target, History, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import graduationImage from "@/assets/graduation-success.jpg";
import dominicAmuzuImage from "@/assets/dominic-amuzu.jpg";
import jeanMensahImage from "@/assets/jean-mensah.jpg";
import collinsMorangaImage from "@/assets/collins-moranga.jpg";
import nancyNyakoeImage from "@/assets/nancy-nyakoe.jpg";
import oheneBosompemImage from "@/assets/ohene-bosompem.jpg";
import anitaTakuraImage from "@/assets/anita-takura.jpg";

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

      {/* Founders Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="text-primary" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Meet Our Founders
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Dr. Dominic S. Y. Amuzu */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors cursor-pointer">
                        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                          <AvatarImage src={dominicAmuzuImage} alt="Dr. Dominic S. Y. Amuzu" className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">DA</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Dominic S. Y. Amuzu</h3>
                        <p className="text-sm text-muted-foreground">Chair</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Dr. Dominic S. Y. Amuzu</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Dr. Dominic S. Y. Amuzu is a scientist and leader in genomics, genetics, and infectious disease research in West Africa. With extensive experience in academic training, research management, and scientific mentorship, he has played a pivotal role in developing research capacity across the region. As Chair of the Celta Trust Foundation, he brings strategic vision, deep commitment to educational equity, and a passion for nurturing Africa's next generation of leaders and innovators.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Lawyer Jean-Gladys Mensah */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors cursor-pointer">
                        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                          <AvatarImage src={jeanMensahImage} alt="Lawyer Jean-Gladys Mensah" className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">JM</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Lawyer Jean-Gladys Mensah</h3>
                        <p className="text-sm text-muted-foreground">Lead, Legal Affairs</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Lawyer Jean-Gladys Mensah</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Jean Gladys Mensah (Esq.) is an accomplished attorney based in the United States with expertise in legal advocacy, compliance, and governance. She brings a wealth of experience in legal strategy and nonprofit regulation. As Lead for Legal Affairs, she provides oversight and ensures that the Foundation operates with integrity, transparency, and adherence to international legal standards.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Dr. Collins M. Morang'a */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors cursor-pointer">
                        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                          <AvatarImage src={collinsMorangaImage} alt="Dr. Collins M. Morang'a" className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">CM</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Collins M. Morang'a</h3>
                        <p className="text-sm text-muted-foreground">Lead, Research</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Dr. Collins M. Morang'a</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Dr. Collins Misita Morang'a is a distinguished scientist whose work spans molecular biology, genomics, and infectious disease research. His leadership in research training and scientific collaboration has contributed significantly to strengthening scientific capacity across East Africa. As Lead for Research, he guides the Foundation's research funding agenda, innovation programmes, and scientific development initiatives.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Dr. Anita B. Takura */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors cursor-pointer">
                        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                          <AvatarImage src={anitaTakuraImage} alt="Dr. Anita B. Takura" className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">AT</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Anita B. Takura</h3>
                        <p className="text-sm text-muted-foreground">Lead, Finance</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Dr. Anita B. Takura</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Dr. Anita Bimunka Takura Tingbani is an Environmental Safeguards Specialist with the World Bank, where she has contributed to major investment-and-development projects on the African continent. Her work has focused on ensuring sound environmental and social risk management, regulatory compliance, and sustainable development practices in large-scale programmes. With her deep expertise in environmental governance, financial oversight, and development policy, Dr Takura brings a vital perspective to the Celta Trust Foundation's leadership. As Lead for Finance (UK), she ensures robust fiscal stewardship, sustainable resource allocation, and financial mechanisms that support the Foundation's mission of empowering brilliant and financially needy trainees across Africa.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Dr. Nancy K. Nyakoe */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors cursor-pointer">
                        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                          <AvatarImage src={nancyNyakoeImage} alt="Dr. Nancy K. Nyakoe" className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">NN</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Nancy K. Nyakoe</h3>
                        <p className="text-sm text-muted-foreground">Lead, Industry</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Dr. Nancy K. Nyakoe</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Dr. Nancy Nyakoe is a scientist and industry professional with a strong background in biotechnology, applied research, and scientific commercialization. With experience linking academia, industry, and innovation ecosystems, she leads initiatives that connect trainees with industrial opportunities. As Lead for Industry, she fosters partnerships that enhance employability, industry training, and innovation-driven careers.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Dr. Ohene A. Bosompem */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors cursor-pointer">
                        <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                          <AvatarImage src={oheneBosompemImage} alt="Dr. Ohene A. Bosompem" className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">OB</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Ohene A. Bosompem</h3>
                        <p className="text-sm text-muted-foreground">Lead, Environment & Climate Change</p>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Dr. Ohene A. Bosompem</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Dr. Ohene A. Bosompem is an environmental scientist specializing in ecological systems, climate resilience, and environmental health. His work addresses the intersection of environmental sustainability and public wellbeing. As Lead for Environment & Climate Change, he supports programmes that promote environmental awareness, sustainable development, and climate-conscious research across Africa.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
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
