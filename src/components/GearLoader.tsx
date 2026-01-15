import { Cog } from "lucide-react";

interface GearLoaderProps {
  loading?: boolean;
}

const GearLoader = ({ loading = true }: GearLoaderProps) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="relative">
        {/* Main large gear */}
        <Cog className="w-24 h-24 text-primary animate-gear-medium" />
        
        {/* Secondary gear - top right */}
        <Cog className="w-14 h-14 text-accent absolute -top-4 -right-8 animate-gear-reverse" />
        
        {/* Third gear - bottom left */}
        <Cog className="w-10 h-10 text-teal-glow absolute -bottom-2 -left-6 animate-gear-fast" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 animate-pulse-glow">
          <Cog className="w-24 h-24 text-primary/30 blur-md" />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-1/3 text-center">
        <p className="font-orbitron text-primary text-lg tracking-widest animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default GearLoader;
