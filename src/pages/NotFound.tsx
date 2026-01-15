import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Cog } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mechanical-pattern opacity-50" />
      
      <div className="text-center px-4 relative z-10">
        {/* Gear animation */}
        <div className="relative inline-block mb-8">
          <Cog className="w-32 h-32 text-primary/20 animate-gear-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-orbitron text-5xl font-bold text-primary">
              404
            </span>
          </div>
        </div>

        <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-primary-glow font-orbitron w-full sm:w-auto">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
