import { Users, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Governance = () => {
  return (
    <div className="min-h-screen bg-background">
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
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="text-primary" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Advisory Committee
                  </h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Prof Gordon Awandare
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Dr Victoria Cornelius (Simpson)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Prof Lucas Amenga-Etego
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Dr Kirk Rockett
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Dr Eniyou C. Oriero
                    </li>
                  </ul>
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
                <div className="grid gap-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      DA
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dr Dominic S. Y. Amuzu</h3>
                      <p className="text-sm text-muted-foreground">Chair (West Africa)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      JM
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Lawyer Jean Gladys Mensah</h3>
                      <p className="text-sm text-muted-foreground">Lead, Legal Affairs (USA)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      CM
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dr Collins Morang'a</h3>
                      <p className="text-sm text-muted-foreground">Lead, Research (East Africa)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      AT
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dr Anita Takura</h3>
                      <p className="text-sm text-muted-foreground">Lead, Finance (UK)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      NN
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dr Nancy Nyakoe</h3>
                      <p className="text-sm text-muted-foreground">Lead, Industry (East Africa)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      AB
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dr Assa Bosompem</h3>
                      <p className="text-sm text-muted-foreground">Lead, Environment & Climate Change (West Africa)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Governance;
