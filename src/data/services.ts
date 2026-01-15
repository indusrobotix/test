// ============================================
// SERVICES DATA
// Edit this file to add, remove, or update services
// ============================================

import { Cpu, Wrench, GraduationCap, Lightbulb, Settings, Users } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Cpu; // Lucide icon component
  features: string[];
  price?: string; // e.g., "Starting from Rs. 5,000"
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "custom-assembly",
    title: "Custom Kit Assembly",
    description: "We assemble complete robotic kits tailored to your specific requirements and skill level.",
    icon: Wrench,
    features: [
      "Personalized component selection",
      "Professional assembly",
      "Quality testing",
      "Documentation included",
    ],
    price: "Starting from Rs. 3,000",
    popular: true,
  },
  {
    id: "chassis-design",
    title: "Custom Chassis Design",
    description: "Get a unique acrylic chassis designed specifically for your robot project.",
    icon: Cpu,
    features: [
      "CAD design consultation",
      "Precision laser cutting",
      "Multiple material options",
      "Rapid prototyping",
    ],
    price: "Starting from Rs. 2,000",
  },
  {
    id: "workshops",
    title: "Robotics Workshops",
    description: "Educational workshops for schools, colleges, and organizations.",
    icon: GraduationCap,
    features: [
      "Hands-on learning",
      "All materials provided",
      "Certificate included",
      "Flexible scheduling",
    ],
    price: "Contact for pricing",
    popular: true,
  },
  {
    id: "consultation",
    title: "Project Consultation",
    description: "Expert guidance for your robotics projects, competitions, or research.",
    icon: Lightbulb,
    features: [
      "One-on-one sessions",
      "Technical advice",
      "Component recommendations",
      "Troubleshooting help",
    ],
    price: "Rs. 1,500/hour",
  },
  {
    id: "repair",
    title: "Robot Repair & Maintenance",
    description: "Fix and maintain your existing robots and electronic projects.",
    icon: Settings,
    features: [
      "Diagnosis & repair",
      "Component replacement",
      "Performance optimization",
      "Warranty on repairs",
    ],
    price: "Starting from Rs. 500",
  },
  {
    id: "bulk-orders",
    title: "Bulk & Institutional Orders",
    description: "Special pricing for schools, colleges, and organizations ordering in bulk.",
    icon: Users,
    features: [
      "Volume discounts",
      "Customized kits",
      "Training included",
      "Dedicated support",
    ],
    price: "Contact for quote",
  },
];

// Process steps shown on services page
export const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "Discuss your requirements and goals with our team.",
  },
  {
    step: 2,
    title: "Design",
    description: "We create a custom solution tailored to your needs.",
  },
  {
    step: 3,
    title: "Assembly",
    description: "Expert assembly with quality components.",
  },
  {
    step: 4,
    title: "Delivery",
    description: "Tested and delivered with full documentation.",
  },
];
