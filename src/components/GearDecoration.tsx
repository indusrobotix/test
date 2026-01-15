import { Cog } from "lucide-react";

interface GearDecorationProps {
  position?: "left" | "right";
  className?: string;
}

const GearDecoration = ({ position = "left", className = "" }: GearDecorationProps) => {
  const basePosition = position === "left" ? "-left-20" : "-right-20";

  return (
    <div
      className={`absolute ${basePosition} opacity-10 pointer-events-none ${className}`}
    >
      <div className="relative">
        <Cog className="w-40 h-40 text-primary animate-gear-slow" />
        <Cog className="w-24 h-24 text-accent absolute top-28 left-28 animate-gear-reverse" />
        <Cog className="w-16 h-16 text-primary absolute -top-4 left-24 animate-gear-medium" />
      </div>
    </div>
  );
};

export default GearDecoration;
