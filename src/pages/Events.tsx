import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import amengaEtegoImage from "@/assets/amenga-etego-promotion.jpg";
import awandareAward1 from "@/assets/awandare-award-1.jpg";
import awandareAward2 from "@/assets/awandare-award-2.jpg";
import awandareAward3 from "@/assets/awandare-award-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Events = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              News & Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated on our latest activities, announcements, and milestones
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Prof. Awandare Award */}
            <Card className="border-primary/20 shadow-lg overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <Carousel 
                  className="w-full h-full"
                  plugins={[plugin.current]}
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src={awandareAward1} 
                        alt="Prof. Gordon A. Awandare with Bailey K. Ashford Medal" 
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src={awandareAward2} 
                        alt="Prof. Awandare receiving award at ASTMH ceremony" 
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src={awandareAward3} 
                        alt="Prof. Awandare accepting Bailey K. Ashford Medal" 
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-primary" size={32} />
                  <div>
                    <p className="text-sm font-semibold text-foreground">November 25, 2025</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={14} />
                      Toronto, Canada
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Prof. Gordon A. Awandare Receives Prestigious Bailey K. Ashford Medal for Global Health Leadership
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We are honored to share the exciting news that Professor Gordon A. Awandare, Pro-Vice Chancellor for Academic & Student Affairs at the University of Ghana and Founding Director of WACCBIP, has been awarded the 2025 Bailey K. Ashford Medal by the American Society of Tropical Medicine & Hygiene (ASTMH).
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Recognizing Excellence in Tropical Medicine</h3>
                    <p>
                      The Bailey K. Ashford Medal is one of ASTMH's highest honors, awarded to individuals in "early to mid-career" who have made distinguished contributions to tropical medicine. Prof. Awandare is the only African scientist among the 2025 recipients, underscoring the exceptional global impact of his work.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">A Trailblazer in Malaria Research and Scientific Leadership</h3>
                    <p>
                      Prof. Awandare's pioneering research has focused on the biology, immunology, and pathogenesis of the malaria parasite. His work has significantly advanced our understanding of malaria's molecular mechanisms, contributing to innovations in diagnosis, treatment, and vaccine development.
                    </p>
                    <p className="mt-2">
                      Beyond his scientific contributions, Prof. Awandare is widely celebrated for his transformative leadership through the West African Centre for Cell Biology of Infectious Pathogens (WACCBIP). Since founding WACCBIP in 2014, he has nurtured a vibrant community of young African scientists, guiding the institution to become a global reference point in infectious disease research, postgraduate training, and research infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Acknowledging African-Led Science</h3>
                    <p>
                      In announcing the award, the ASTMH Medals Committee praised Prof. Awandare for his "important contributions to the understanding and control of tropical diseases" and for tirelessly supporting scientific progress for people in need across the world. Prof. Awandare, in his acceptance remarks, dedicated the award to the hundreds of young African scientists who have shared in his vision of building robust science capacity on the continent.
                    </p>
                    <p className="mt-2 italic text-foreground">
                      "This honour is a tribute to their talent, passion, and belief that world-class science can be done in Africa, led by Africans," he said.
                    </p>
                    <p className="mt-2">
                      This accolade is not just a personal achievement for Prof. Awandare—it is a powerful endorsement of African-led research and innovation. It highlights the importance of sustaining investment in African science, strengthening local institutions, and empowering researchers who are addressing the continent's most pressing health challenges.
                    </p>
                    <p className="mt-2">
                      As global health priorities evolve, Prof. Awandare's recognition reinforces the message that Africa must be a leader; not just a beneficiary; in scientific discovery and global health solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prof. Amenga-Etego Promotion */}
            <Card className="border-secondary/20 shadow-lg overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={amengaEtegoImage} 
                  alt="Prof Lucas N. Amenga-Etego Promotion Congratulations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-primary" size={32} />
                  <div>
                    <p className="text-sm font-semibold text-foreground">November 11, 2025</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={14} />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Announcement: Prof Lucas N. Amenga-Etego Promoted to Associate Professor of Genomics and Genetics
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The Celta Trust Foundation is delighted to congratulate Prof Lucas N. Amenga-Etego on his well-deserved promotion to the rank of Associate Professor of Genomics and Genetics. This milestone reflects his exceptional contributions to scientific research, capacity building, and leadership in the fields of genomics, molecular biology, and infectious diseases.
                  </p>

                  <p>
                    Prof Amenga-Etego has built a distinguished career rooted in scientific excellence, innovation, and mentorship. His pioneering research has advanced our understanding of genomic diversity, pathogen biology, and the molecular drivers of disease across African populations. Through his work, he continues to strengthen the bridge between cutting-edge genomic science and real-world public health impact.
                  </p>

                  <p>
                    Beyond his scientific contributions, Prof Amenga-Etego is widely respected for his dedication to nurturing the next generation of African scientists. His leadership in training young researchers, guiding graduate students, and promoting equitable scientific collaboration has made him an influential figure within the African scientific community and beyond.
                  </p>

                  <p>
                    This promotion recognizes not only his academic achievements but also his commitment to advancing science in Africa, expanding research capacity, and inspiring excellence in all those he mentors. His work continues to bring visibility and prestige to African-led scientific research on the global stage.
                  </p>

                  <p>
                    The Celta Trust Foundation celebrates this milestone as a testament to his enduring passion, integrity, and impact. His journey is a powerful reminder that when opportunity meets dedication, the results uplift not just an individual, but an entire scientific ecosystem.
                  </p>

                  <p className="font-semibold text-foreground">
                    We extend our warmest congratulations to Associate Professor Lucas N. Amenga-Etego and look forward to the continued breakthroughs, mentorship, and leadership he will bring to the field of genomics and genetics.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Official Launch */}
            <Card className="border-accent/20 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-primary" size={32} />
                  <div>
                    <p className="text-sm text-muted-foreground">For Immediate Release</p>
                    <p className="text-sm font-semibold text-foreground">November 25, 2025</p>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Celta Trust Foundation Officially Launched to Support African Scholars, Leaders, and Innovators
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    <MapPin className="inline mr-2 text-primary" size={16} />
                    Accra, Ghana
                  </p>
                  
                  <p>
                    Today marks the official launch of the Celta Trust Foundation, a new philanthropic organisation 
                    dedicated to supporting brilliant and financially needy trainees across Africa through scholarships, 
                    mentorship, research funding, and leadership development.
                  </p>

                  <p>
                    The Foundation is built on four guiding principles: Career development, Education support, Leadership 
                    growth, and Training for Africans (CELTA). It aims to expand opportunities for young Africans who 
                    face financial barriers but possess the talent and determination to excel.
                  </p>

                  <p>
                    Speaking at the launch, the Founding Members emphasized the urgent need to invest in Africa's human 
                    capital, scientific advancement, and leadership pipeline. They highlighted the Foundation's commitment 
                    to creating lasting impact through scholarships, research grants, science leadership awards, and a 
                    robust mentorship programme.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* First Award Cycle */}
            <Card className="border-muted shadow-lg">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">First Award Cycle</h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Applications for the inaugural awards will open <strong className="text-foreground">December 21, 2025</strong>, 
                    with the first list of awardees announced on <strong className="text-foreground">March 21, 2026</strong>.
                  </p>

                  <p>
                    The Celta Trust Foundation invites individuals and partners to join in empowering Africa's next 
                    generation of trainees for Excellence, Science leadership and innovators.
                  </p>

                  <div className="pt-6 border-t border-border mt-6">
                    <h4 className="font-semibold text-foreground mb-4">For inquiries:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail className="text-primary" size={18} />
                        <a href="mailto:celtatrust.offices@gmail.com" className="text-primary hover:underline">
                          celtatrust.offices@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="text-primary" size={18} />
                        <span>+233 243 601 178 / +233 558 017 827</span>
                      </div>
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

export default Events;
