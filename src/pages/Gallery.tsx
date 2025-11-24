import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import galleryEvent1 from "@/assets/gallery-event-1.jpg";
import galleryEvent2 from "@/assets/gallery-event-2.jpg";
import galleryEvent3 from "@/assets/gallery-event-3.jpg";
import galleryAward from "@/assets/gallery-award.jpg";
import galleryConference from "@/assets/gallery-conference.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: galleryEvent1,
      alt: "CELTA Trust community event with participants and speaker",
      title: "Community Engagement Event"
    },
    {
      src: galleryEvent2,
      alt: "Birthday celebration at CELTA Trust office",
      title: "Team Celebration"
    },
    {
      src: galleryEvent3,
      alt: "Team members celebrating at CELTA Trust event",
      title: "Team Building"
    },
    {
      src: galleryAward,
      alt: "Prof Gordon Awandare receiving prestigious award for scientific excellence",
      title: "Award Recognition"
    },
    {
      src: galleryConference,
      alt: "Prof Gordon Awandare at Global Health conference receiving award",
      title: "Global Health Conference"
    },
    {
      src: galleryTeam,
      alt: "CELTA Trust team at international conference 2025",
      title: "International Conference 2025"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Capturing moments from our journey of empowering African scientists and building a stronger research community
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
