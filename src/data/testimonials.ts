// ============================================
// TESTIMONIALS DATA
// Edit this file to add, remove, or update customer testimonials
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Student", "Teacher", "Hobbyist"
  organization?: string; // e.g., "XYZ University"
  quote: string;
  rating: number; // 1-5 stars
  avatar?: string; // URL to avatar image (optional)
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ahmed Hassan",
    role: "Engineering Student",
    organization: "NUST University",
    quote: "The starter kit from IndusRoboTix helped me win my first robotics competition. The quality of components and the custom chassis design gave me an edge over competitors.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Dr. Ayesha Khan",
    role: "Professor",
    organization: "FAST University",
    quote: "We've been ordering bulk kits for our robotics lab. The quality is consistent and Furqan's team provides excellent support for educational institutions.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Bilal Mahmood",
    role: "Hobbyist",
    quote: "Finally, a local supplier who understands robotics! No more waiting for international shipping. The custom chassis service is a game-changer.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "Sara Ahmed",
    role: "Science Teacher",
    organization: "Lahore Grammar School",
    quote: "The workshop conducted by IndusRoboTix was amazing. Students were engaged throughout and learned practical skills they can apply.",
    rating: 5,
  },
  {
    id: "testimonial-5",
    name: "Usman Ali",
    role: "Startup Founder",
    quote: "IndusRoboTix helped us prototype our product quickly with their custom design services. Professional work at competitive prices.",
    rating: 4,
  },
];
