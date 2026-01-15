import { Link } from "react-router-dom";
import { Cog, Mail, Phone, MapPin, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { siteConfig, services } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, url: siteConfig.social.facebook, label: "Facebook" },
    { icon: Instagram, url: siteConfig.social.instagram, label: "Instagram" },
    { icon: Linkedin, url: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Youtube, url: siteConfig.social.youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <Cog className="w-10 h-10 text-primary animate-gear-slow" />
                <Cog className="w-6 h-6 text-accent absolute -right-2 -bottom-1 animate-gear-reverse" />
              </div>
              <span className="font-orbitron text-xl font-bold tracking-wider">
                <span className="text-primary">Indus</span>
                <span className="text-foreground">Robo</span>
                <span className="text-accent">Tix</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.contact.country}'s premier robotics solutions provider. Custom robotic kits 
              with precision-designed acrylic chassis for education and innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Products", "Services", "Gallery", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider-glow mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
