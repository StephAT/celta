import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin" 
             style={{ 
               borderTopColor: "hsl(var(--primary))",
               animationDuration: "1.5s"
             }} 
        />
        
        {/* Inner pulsing ring */}
        <div className="absolute inset-2 rounded-full border-2 border-accent/30 animate-pulse" 
             style={{ animationDuration: "2s" }} 
        />
        
        {/* African Map SVG in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 120"
            className={cn("animate-pulse", size === "sm" ? "w-4 h-5" : size === "md" ? "w-8 h-10" : "w-12 h-14")}
            style={{ animationDuration: "1.5s" }}
            fill="hsl(var(--primary))"
          >
            {/* Simplified African continent shape */}
            <path d="M50 10 
                     L55 15 L58 20 L60 25 L62 30 
                     L65 35 L68 40 L70 50 L72 60 
                     L70 70 L68 80 L65 90 L62 95 
                     L58 100 L55 105 L50 110 
                     L45 105 L42 100 L38 95 L35 90 
                     L32 80 L30 70 L28 60 L30 50 
                     L32 40 L35 35 L38 30 L40 25 
                     L42 20 L45 15 Z"
                  opacity="0.9"
            />
            {/* Horn of Africa detail */}
            <path d="M65 35 L70 38 L72 45 L70 50 L65 48 Z" 
                  opacity="0.7"
            />
            {/* Madagascar */}
            <ellipse cx="75" cy="85" rx="3" ry="8" opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
