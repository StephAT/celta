import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import galleryEvent1 from "@/assets/gallery-event-1.jpg";
import galleryEvent2 from "@/assets/gallery-event-2.jpg";
import galleryEvent3 from "@/assets/gallery-event-3.jpg";
import galleryAward from "@/assets/gallery-award.jpg";
import galleryConference from "@/assets/gallery-conference.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedImageIndex(null), 300);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
                <Card 
                  key={index} 
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openLightbox(index)}
                >
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

        {/* Lightbox */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
            <div className="relative w-full h-[90vh] flex items-center justify-center">
              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white border-none"
                size="icon"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous Button */}
              <Button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white border-none"
                size="icon"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Image */}
              {selectedImageIndex !== null && (
                <div className="flex flex-col items-center justify-center max-w-full max-h-full p-8">
                  <img
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].alt}
                    className="max-w-full max-h-[75vh] object-contain animate-fade-in"
                  />
                  <p className="text-white mt-4 text-center text-lg">
                    {galleryImages[selectedImageIndex].title}
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              )}

              {/* Next Button */}
              <Button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white border-none"
                size="icon"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
