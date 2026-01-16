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
    price: 1,300,
    originalPrice: 1,450,
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
    price: 3,450,
    originalPrice: 3,850,
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
    price: 3,750,
    originalPrice: 4,200,
    image: alpha2wdmodule3,
    category: "kits",
    badge: "Popular",
    rating: 3.5,
    features: ["2 DC Motors + Tyres", "Arduino UNO", "L298N Motor Driver", "TCRT5000 IR Sensors", "Custom Chassis", "Assembly Guide"],
    inStock: true,
  },
/*  {
    id: "line-follower",
    name: "Line Follower Robot",
    description: "Ready-to-assemble line following robot with pre-programmed Arduino and IR sensor array.",
    price: 6500,
    image: robotCar,
    category: "kits",
    rating: 4,
    features: ["Pre-programmed", "5 IR Sensors", "Speed Control", "Battery Included"],
    inStock: true,
  },
  {
    id: "motor-pack",
    name: "DC Motor Pack (4 pcs)",
    description: "High-quality 6V DC motors with gear reduction. Perfect for robot cars and projects.",
    price: 1200,
    image: productKit,
    category: "components",
    rating: 4,
    features: ["6V Operation", "Gear Reduction", "High Torque", "Mounting Brackets"],
    inStock: true,
  },
  {
    id: "sensor-bundle",
    name: "Sensor Bundle Pack",
    description: "Complete sensor kit including ultrasonic, IR, temperature, and motion sensors.",
    price: 2500,
    image: chassisDesign,
    category: "components",
    badge: "Value Pack",
    rating: 5,
    features: ["Ultrasonic Sensor", "IR Sensors x5", "Temperature Sensor", "PIR Motion"],
    inStock: true,
  },*/
  {
    id: "custom-chassis-small",
    name: "Custom Acrylic Chassis - Small",
    description: "Precision-cut acrylic chassis for small robots. Durable and lightweight.",
    price: "500+",
    image: robotCar,
    category: "chassis",
    rating: 4,
    features: ["3mm Acrylic", "Laser Cut", "Mounting Holes"],
    inStock: true,
  },
  /*{
    id: "custom-chassis-large",
    name: "Custom Acrylic Chassis - Large",
    description: "Heavy-duty acrylic chassis for larger robots and competition builds.",
    price: 2800,
    image: chassisDesign,
    category: "chassis",
    badge: "Premium",
    rating: 5,
    features: ["5mm Acrylic", "Laser Cut", "Multi-layer Design", "All Hardware"],
    inStock: true,
  },
  {
    id: "tool-kit",
    name: "Robotics Tool Kit",
    description: "Essential tools for robot building including screwdrivers, pliers, and soldering iron.",
    price: 3500,
    image: productKit,
    category: "accessories",
    rating: 4,
    features: ["Soldering Iron", "Screwdriver Set", "Wire Cutters", "Multimeter"],
    inStock: false,
  },*/
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
