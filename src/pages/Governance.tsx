import { Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import dominicAmuzuImage from "@/assets/dominic-amuzu.jpg";
import jeanMensahImage from "@/assets/jean-mensah.jpg";
import collinsMorangaImage from "@/assets/collins-moranga.jpg";
import nancyNyakoeImage from "@/assets/nancy-nyakoe.jpg";
import oheneBosompemImage from "@/assets/ohene-bosompem.jpg";
const Governance = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Governance and Structure
            </h1>
            <p className="text-xl text-muted-foreground">
              Leadership dedicated to transparency, accountability, and impact
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 mb-12">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="text-primary" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Advisory Committee
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Prof Gordon Awandare */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">GA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground">Prof Gordon Awandare</h3>
                    <p className="text-sm text-muted-foreground">Advisory Committee Member</p>
                  </div>

                  {/* Dr Victoria Cornelius */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">VC</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground">Dr Victoria Cornelius (Simpson)</h3>
                    <p className="text-sm text-muted-foreground">Advisory Committee Member</p>
                  </div>

                  {/* Prof Lucas Amenga-Etego */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">LA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground">Prof Lucas Amenga-Etego</h3>
                    <p className="text-sm text-muted-foreground">Advisory Committee Member</p>
                  </div>

                  {/* Dr Kirk Rockett */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">KR</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground">Dr Kirk Rockett</h3>
                    <p className="text-sm text-muted-foreground">Advisory Committee Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Committee */}
            <Card className="border-secondary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-secondary" size={32} />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Executive Committee
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Definitive responsibility for all activities of Celta Trust Foundation
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Dr Dominic S. Y. Amuzu */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarImage src={dominicAmuzuImage} alt="Dr Dominic S. Y. Amuzu" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">DA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Dr Dominic S. Y. Amuzu</h3>
                    <p className="text-sm text-muted-foreground mb-2">Chair</p>
                    <p className="text-xs text-muted-foreground/70">West Africa</p>
                  </div>

                  {/* Lawyer Jean Gladys Mensah */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarImage src={jeanMensahImage} alt="Lawyer Jean Gladys Mensah" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">JM</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Lawyer Jean Gladys Mensah</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead, Legal Affairs</p>
                    <p className="text-xs text-muted-foreground/70">USA</p>
                  </div>

                  {/* Dr Collins Morang'a */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarImage src={collinsMorangaImage} alt="Dr Collins Morang'a" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">CM</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Dr Collins Morang'a</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead, Research</p>
                    <p className="text-xs text-muted-foreground/70">East Africa</p>
                  </div>

                  {/* Dr Anita Takura */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">AT</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Dr Anita Takura</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead, Finance</p>
                    <p className="text-xs text-muted-foreground/70">UK</p>
                  </div>

                  {/* Dr Nancy Nyakoe */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarImage src={nancyNyakoeImage} alt="Dr Nancy K. Nyakoe" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">NN</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Dr Nancy K. Nyakoe</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead, Industry</p>
                    <p className="text-xs text-muted-foreground/70">East Africa</p>
                  </div>

                  {/* Dr Assa Bosompem */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarImage src={oheneBosompemImage} alt="Dr Ohene A. Bosompem" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">AB</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Dr Ohene A. Bosompem</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead, Environment & Climate Change</p>
                    <p className="text-xs text-muted-foreground/70">West Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="text-primary" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Our Team
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mrs. Sika Menka */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">SM</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Mrs. Sika Menka</h3>
                    <p className="text-sm text-muted-foreground">Chair of Management</p>
                  </div>

                  {/* Ms Jessica Arthur */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">JA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Ms Jessica Arthur</h3>
                    <p className="text-sm text-muted-foreground">Secretary</p>
                  </div>

                  {/* Ms Christabel S. Atsu-Dorgbadzi */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">CA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Ms Christabel S. Atsu-Dorgbadzi</h3>
                    <p className="text-sm text-muted-foreground">Communications and Media</p>
                  </div>

                  {/* Mr Stephen Tetteh Addo */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">SA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Mr Stephen Tetteh Addo</h3>
                    <p className="text-sm text-muted-foreground">ICT Support</p>
                  </div>

                  {/* Mr Yenana Akpotosu-Nartey */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">YA</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Mr Yenana Akpotosu-Nartey</h3>
                    <p className="text-sm text-muted-foreground">Data Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Governance;