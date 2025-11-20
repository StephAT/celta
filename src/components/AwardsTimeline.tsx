import { Calendar, Send, FileCheck, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AwardsTimeline = () => {
  const { ref: timelineRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const events: TimelineEvent[] = [
    {
      date: "January 10, 2026",
      title: "Applications Open",
      description: "Online application portal opens for all award categories",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-primary to-primary/70"
    },
    {
      date: "February 10, 2026",
      title: "Application Deadline",
      description: "Final date to submit applications and supporting documents",
      icon: <Send className="w-6 h-6" />,
      color: "from-accent to-accent/70"
    },
    {
      date: "February - March 2026",
      title: "Review Process",
      description: "Expert committees evaluate applications and conduct interviews",
      icon: <FileCheck className="w-6 h-6" />,
      color: "from-secondary to-secondary/70"
    },
    {
      date: "March 21, 2026",
      title: "Winners Announced",
      description: "First cohort of award recipients announced publicly",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-gold to-gold/70"
    }
  ];

  return (
    <div ref={timelineRef} className="w-full">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-gold" />

        {/* Timeline Events */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center flex-shrink-0 text-white`}>
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-1">
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Center Circle Marker */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsTimeline;
