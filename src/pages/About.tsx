import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Users, Zap, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import heroImage from "@/assets/hero-robotics.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on the quality of our components and assembly.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our success. We go above and beyond to meet your needs.",
    },
    {
      icon: Heart,
      title: "Made in Pakistan",
      description: "Proudly sourcing locally to support Pakistani businesses and reduce costs.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly improving our designs and staying updated with latest technology.",
    },
  ];

  const milestones = [
    { year: "2026", event: "IndusRoboTix Founded", description: "Started with a vision to make robotics accessible in Pakistan" },
    { year: "2026", event: "First 100 Kits Sold", description: "Reached our first major milestone within months" },
    { year: "2026", event: "School Partnerships", description: "Began partnering with schools for STEM education" },
    { year: "Present", event: "Growing Strong", description: "Continuing to innovate and expand across Pakistan" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="About Us"
            title="Our Story"
            description="Building the future of robotics in Pakistan, one kit at a time."
          />
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden card-industrial">
                <img
                  src={heroImage}
                  alt="Furqan Khatti - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-lg shadow-glow">
                <p className="font-orbitron text-2xl font-bold text-primary-foreground">
                  Est. 2026
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                Meet The Founder
              </h2>
              <h3 className="text-xl text-primary font-semibold mb-4">
                Furqan Khatti
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  IndusRoboTix was founded in 2026 by Furqan Khatti, a passionate 
                  robotics enthusiast with a vision to make quality robotic kits 
                  accessible to students and makers across Pakistan.
                </p>
                <p>
                  Frustrated by the high cost of imported robotics components and 
                  the lack of local alternatives, Furqan started sourcing components 
                  locally and designing custom acrylic chassis to create affordable, 
                  high-quality robotic kits.
                </p>
                <p>
                  Today, IndusRoboTix serves students, schools, hobbyists, and 
                  professionals throughout Pakistan, providing them with the tools 
                  and resources they need to explore the exciting world of robotics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="top-10" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-industrial p-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Pakistan's next generation of innovators by providing 
                affordable, high-quality robotic kits and educational resources 
                that make STEM learning accessible to everyone.
              </p>
            </div>

            <div className="card-industrial p-8">
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Pakistan's leading robotics solutions provider, fostering 
                a culture of innovation and technological advancement that puts 
                our nation on the global robotics map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 mechanical-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="The core principles that guide everything we do at IndusRoboTix."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-industrial p-6 text-center group hover:border-primary transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-orbitron font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="right" className="bottom-10" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments in our journey to revolutionize robotics in Pakistan."
          />

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-glow">
                    <span className="font-orbitron text-sm font-bold text-primary-foreground">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-primary font-medium text-sm mb-1">
                    {milestone.year}
                  </p>
                  <h4 className="font-orbitron font-semibold text-lg mb-2">
                    {milestone.event}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Be part of Pakistan's robotics revolution. Start your project with us today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary-glow font-orbitron">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
