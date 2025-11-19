import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-education.jpg";
import researchImage from "@/assets/research-lab.jpg";
import graduationImage from "@/assets/graduation-success.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-shift">
          <img 
            src={heroImage} 
            alt="African students studying together" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Empowering Africa's
              <span className="text-white/90"> Future Leaders</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow">
              Supporting brilliant and financially needy trainees through scholarships, 
              mentorship, and research funding across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto shadow-lg">
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto">
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2026</div>
              <p className="text-sm text-muted-foreground">First Awards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-sm text-muted-foreground">Award Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">For Africans</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <p className="text-sm text-muted-foreground">Potential Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CELTA Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The CELTA Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission is built on five guiding principles that define every program we implement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Career</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting lifelong career advancement through mentorship and skill-building
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Strengthening academic success through targeted scholarships and financial assistance
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Cultivating visionary, ethical, community-centered leaders
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Training</h3>
                <p className="text-sm text-muted-foreground">
                  Providing practical training, workshops, and development programmes
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary font-bold text-2xl">A</div>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Africans</h3>
                <p className="text-sm text-muted-foreground">
                  A mission built for Africans, driven by Africans, empowering Africa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={researchImage} 
                alt="African researchers in laboratory" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    To support academically brilliant and financially needy trainees by providing 
                    scholarship funding, mentorship, research grants, and leadership development 
                    programmes that unlock potential and strengthen Africa's human capital.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    To build an empowered generation of African scholars, leaders, and innovators 
                    who transform their communities and advance Africa's development through 
                    excellence, research, and meaningful leadership.
                  </p>
                </div>
              </div>
              <Link to="/about" className="inline-block mt-6">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Award Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting excellence across three award categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence Awards</h3>
                <p className="text-muted-foreground mb-4">
                  Recognizing outstanding academic and personal achievement among African trainees
                </p>
                <Link to="/awards">
                  <Button variant="ghost" className="text-primary hover:text-primary/80 px-0">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Science Leadership Awards</h3>
                <p className="text-muted-foreground mb-4">
                  Honoring leadership in research and scientific innovation across Africa
                </p>
                <Link to="/awards">
                  <Button variant="ghost" className="text-primary hover:text-primary/80 px-0">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-success rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Research Grants</h3>
                <p className="text-muted-foreground mb-4">
                  Supporting small research projects, conference travel, and innovation
                </p>
                <Link to="/awards">
                  <Button variant="ghost" className="text-primary hover:text-primary/80 px-0">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Transforming Lives
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Your support helps brilliant African students achieve their dreams. 
              Together, we can build a generation of leaders who will shape Africa's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Donate Now
                </Button>
              </Link>
              <Link to="/apply">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Apply for Awards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
