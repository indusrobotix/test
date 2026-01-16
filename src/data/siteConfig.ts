// ============================================
// SITE CONFIGURATION
// Edit this file to update business info across the entire website
// ============================================

export const siteConfig = {
  // Business Information
  businessName: "IndusRoboTix",
  tagline: "Precision Engineering for Tomorrow's Innovators",
  foundedYear: 2026,
  
  // Owner Information
  owner: {
    name: "Furqan Khatti",
    title: "Founder & Lead Engineer",
    bio: "A passionate robotics enthusiast and engineer from Pakistan, dedicated to making robotics education accessible and affordable for students and hobbyists across the country.",
  },

  // Contact Information
  contact: {
    email: "indusrobotix@gmail.com",
    phone: "+92 312 1179306",
    whatsapp: "+92 312 1179306",
    address: "Robotic Innovation Hub, Karachi, Pakistan",
    city: "Karachi",
    country: "Pakistan",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/indusrobotix",
    instagram: "https://instagram.com/indusrobotix",
    //twitter: "https://twitter.com/indusrobotix",
    //youtube: "https://youtube.com/@indusrobotix",
    linkedin: "https://linkedin.com/company/indusrobotix",
  },

  // Business Hours
  businessHours: {
    weekdays: "2:00 PM - 11:00 PM",
    saturday: "1:00 PM - 1:00 AM",
    sunday: "9:00 AM - 11:00 PM",
  },

  // Statistics (shown on homepage)
  stats: [
    { value: "10+", label: "Kits Delivered" },
    { value: "5+", label: "Custom Designs" },
    { value: "100%", label: "Local Sourcing" },
    { value: "24/7", label: "Support" },
  ],

  // SEO & Meta
  seo: {
    title: "IndusRoboTix - Custom Robotic Kits & Components | Pakistan",
    description: "Pakistan's leading provider of custom robotic kits, components, and acrylic chassis designs. Quality robotics education for students, hobbyists, and professionals.",
    keywords: "robotics, robotic kits, Pakistan, STEM education, Arduino, custom chassis, robotic components",
  },
};

export type SiteConfig = typeof siteConfig;
