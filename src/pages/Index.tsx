import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Package, Wrench, Users, Star, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import heroImage from "@/assets/hero-robotics.jpg";
import { siteConfig, products, testimonials, formatPrice } from "@/data";

const Index = () => {
  const features = [
    {
      icon: Package,
      title: "Custom Robotic Kits",
      description:
        "Pre-assembled and DIY robotic kits tailored for students, hobbyists, and professionals.",
    },
    {
      icon: Cog,
      title: "Precision Chassis",
      description:
        "Custom-designed acrylic chassis with laser-cut precision for your unique projects.",
    },
    {
      icon: Wrench,
      title: "Expert Assembly",
      description:
        "Professional component assembly and testing to ensure your robots work flawlessly.",
    },
    {
      icon: Users,
      title: "STEM Education",
      description:
        "Supporting Pakistan's education sector with quality robotics learning materials.",
    },
  ];

  // Get first 3 products for preview
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial Robotics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Gear decorations */}
        <GearDecoration position="right" className="top-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
              <Cog className="w-5 h-5 text-primary animate-gear-slow" />
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                {siteConfig.contact.country}'s Premier Robotics Provider
              </span>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              Building The
              <span className="block gradient-text">Future of Robotics</span>
              In {siteConfig.contact.country}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in-up">
              {siteConfig.tagline}. From education to innovation, we power {siteConfig.contact.country}'s robotic dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link to="/products">
                <Button size="lg" className="btn-primary-glow font-orbitron w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron w-full sm:w-auto"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in-up">
              {siteConfig.stats.slice(0, 3).map((stat, index) => (
                <div key={index}>
                  <p className={`font-orbitron text-3xl md:text-4xl font-bold ${
                    index % 2 === 0 ? "text-primary" : "text-accent"
                  }`}>
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="top-10" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Engineered for Excellence"
            description="We combine local expertise with precision engineering to deliver robotics solutions that empower Pakistan's innovators."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-industrial p-6 group hover:border-primary transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-orbitron font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 relative mechanical-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Products"
            title="Featured Robotic Kits"
            description="Explore our range of quality robotic kits designed for learning and innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="card-industrial overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-orbitron font-semibold text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-orbitron text-xl text-accent font-bold">
                      {formatPrice(product.price)}
                    </span>
                    <Link
                      to="/products"
                      className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="btn-primary-glow font-orbitron">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="right" className="bottom-10" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Customers Say"
            description={`Trusted by students, educators, and makers across ${siteConfig.contact.country}.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="card-industrial p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                    {testimonial.organization && `, ${testimonial.organization}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <GearDecoration position="left" className="top-0" />
        <GearDecoration position="right" className="bottom-0" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Your
            <span className="gradient-text block">Next Robot?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you need a complete kit or custom components, we're here to help
            bring your robotic vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-primary-glow font-orbitron">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
