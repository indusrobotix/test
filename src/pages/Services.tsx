import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import { services, processSteps } from "@/data";

const Services = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Services"
            title="Expert Robotics Solutions"
            description="From custom kits to educational workshops, we offer comprehensive robotics services for Pakistan's innovators."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 mechanical-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`card-industrial p-8 group hover:border-primary transition-all duration-300 ${
                  service.popular ? "ring-2 ring-primary/50" : ""
                }`}
              >
                {service.popular && (
                  <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                    Popular
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-orbitron font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.price && (
                  <div className="pt-4 border-t border-border">
                    <p className="font-orbitron text-accent font-semibold">
                      {service.price}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="top-10" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="How We Work"
            title="Our Process"
            description="A streamlined approach to deliver quality robotic solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-orbitron font-bold text-primary/20 mb-4">
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="font-orbitron font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Get in touch with us today and let's discuss how we can help bring
            your robotics vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary-glow font-orbitron">
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
