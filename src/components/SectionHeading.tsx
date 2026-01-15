import { Cog } from "lucide-react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <div className={`flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}>
          <Cog className="w-4 h-4 text-primary animate-gear-slow" />
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            {subtitle}
          </span>
          <Cog className="w-4 h-4 text-primary animate-gear-reverse" />
        </div>
      )}
      <h2 className="section-title text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
