// ============================================
// GALLERY DATA
// Edit this file to add, remove, or update gallery images
// ============================================

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import productKit from "@/assets/product-kit.jpg";
import chassisDesign from "@/assets/chassis-design.jpg";
import robotCar from "@/assets/robot-car.jpg";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: "projects" | "products" | "workshops" | "behind-the-scenes";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: gallery1,
    alt: "Custom robot project",
    title: "Line Follower Championship Build",
    description: "Competition-grade line follower built for national robotics championship.",
    category: "projects",
  },
  {
    id: "gallery-2",
    src: gallery2,
    alt: "Robotics workshop",
    title: "School Workshop Session",
    description: "Students learning robotics basics at a local school workshop.",
    category: "workshops",
  },
  {
    id: "gallery-3",
    src: gallery3,
    alt: "Custom chassis design",
    title: "Premium Chassis Collection",
    description: "Various custom acrylic chassis designs ready for delivery.",
    category: "products",
  },
  {
    id: "gallery-4",
    src: productKit,
    alt: "Starter kit components",
    title: "Starter Kit Unboxing",
    description: "All components included in our popular starter robotics kit.",
    category: "products",
  },
  {
    id: "gallery-5",
    src: chassisDesign,
    alt: "Laser cutting process",
    title: "Laser Cutting in Action",
    description: "Precision laser cutting for custom chassis orders.",
    category: "behind-the-scenes",
  },
  {
    id: "gallery-6",
    src: robotCar,
    alt: "Completed robot car",
    title: "4WD Robot Car Project",
    description: "Fully assembled 4-wheel drive robot car with remote control.",
    category: "projects",
  },
];

// Gallery categories for filtering
export const galleryCategories = [
  { id: "all", name: "All" },
  { id: "projects", name: "Projects" },
  { id: "products", name: "Products" },
  { id: "workshops", name: "Workshops" },
  { id: "behind-the-scenes", name: "Behind the Scenes" },
];
