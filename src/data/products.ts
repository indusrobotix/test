// ============================================
// PRODUCTS DATA
// Edit this file to add, remove, or update products
// ============================================

import alpha2wdmodule1 from "@/assets/module1.jpg";
import alpha2wdmodule2 from "@/assets/module2.jpg";
import alpha2wdmodule3 from "@/assets/module3.jpg";
import alpha2wdmodule4 from "@/assets/module4.jpg";
import alpha2wdmodule5 from "@/assets/module5.jpg";
import alpha2wdmodule6 from "@/assets/module6.jpg";
import update from "@/assets/update.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // For showing discounts
  image: string;
  category: "kits" | "components" | "chassis" | "accessories";
  badge?: string; // e.g., "Best Seller", "New", "Limited"
  rating: number; // 1-5
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "2wd-Alpha-module-1",
    name: "2WD Alpha Module I",
    description: "Basic Multi-Upgradeable Kit. Perfect for beginners. Includes our signature acrylic chassis, Motors, Tyres, Cell Holder, Mountings and Nut-Screws.",
    price: 1300,
    originalPrice: 1450,
    image: alpha2wdmodule1,
    category: "kits",
    badge: "Best Seller",
    rating: 4,
    features: [ "2 DC Motors + Tyres", "Custom Chassis", "Assembly Guide"],
    inStock: true,
  },
  {
    id: "2wd-Alpha-module-2",
    name: "2WD Alpha Module II",
    description: "Complete Obstacle Avoidance Robot Kit. Perfect for beginners. Includes our signature acrylic chassis, Motors, Tyres, Electronics, Cell Holder, Mountings and Nut-Screws.",
    price: 3450,
    originalPrice: 3850,
    image: alpha2wdmodule2,
    category: "kits",
    badge: "Popular",
    rating: 4.5,
    features: ["2 DC Motors + Tyres", "Arduino UNO", "L298N Motor Driver", "Ultrasonic Sensor", "Custom Chassis", "Assembly Guide"],
    inStock: true,
  },
  
  {
    id: "2wd-Alpha-module-3",
    name: "2WD Alpha Module III",
    description: "Complete Line Following Robot Kit. Perfect for beginners. Includes our signature acrylic chassis, Motors, Tyres, Electronics, Cell Holder, Mountings and Nut-Screws.",
    price: 3750,
    originalPrice: 4200,
    image: alpha2wdmodule3,
    category: "kits",
    badge: "Popular",
    rating: 3.5,
    features: ["2 DC Motors + Tyres", "Arduino UNO", "L298N Motor Driver", "TCRT5000 IR Sensors", "Custom Chassis", "Assembly Guide"],
    inStock: true,
  },
  {
    id: "custom-chassis-small",
    name: "Custom Acrylic Chassis - Small",
    description: "Precision-cut acrylic chassis for small robots. Durable and lightweight.",
    price: 0,
    image: update,
    category: "chassis",
    rating: 0,
    features: ["3mm Acrylic", "Laser Cut", "Mounting Holes"],
    inStock: false,
  },
  {
    id: "Electronic Components",
    name: "Electronic Components",
    description: "Electronic Components",
    price: 0,
    image: update,
    category: "components",
    rating: 0,
    features: ["Electronics"],
    inStock: false,
  },
  {
    id: "tool-kit",
    name: "Robotics Tool Kit",
    description: "Essential tools for robot building including screwdrivers, pliers, and soldering iron.",
    price: 0,
    image: update,
    category: "accessories",
    rating: 0,
    features: ["Update Soon"],
    inStock: false,
  },
];

// Product categories for filtering
export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "kits", name: "Complete Kits" },
  { id: "components", name: "Components" },
  { id: "chassis", name: "Chassis" },
  { id: "accessories", name: "Accessories" },
];

// Currency formatting helper
export const formatPrice = (price: number): string => {
  return `Rs. ${price.toLocaleString()}`;
};
