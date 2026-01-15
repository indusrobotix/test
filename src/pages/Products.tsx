import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Filter, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import { products, productCategories, formatPrice, type Product } from "@/data";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Products"
            title="Robotic Kits & Components"
            description="Browse our collection of quality robotic kits and components, all sourced locally in Pakistan."
          />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`font-medium ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 mechanical-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="bottom-0" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Need Something Custom?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We specialize in custom robotic solutions. Tell us your requirements
            and we'll create a tailored kit just for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary-glow font-orbitron">
              Request Custom Quote
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => (
  <div className="card-industrial overflow-hidden group">
    {/* Image */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {product.badge && (
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
          {product.badge}
        </Badge>
      )}
      
      <Badge
        variant="outline"
        className="absolute top-4 right-4 bg-background/80 border-border capitalize"
      >
        {product.category}
      </Badge>

      {!product.inStock && (
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <span className="font-orbitron text-lg text-muted-foreground">Out of Stock</span>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="ml-1 text-sm font-medium">{product.rating}</span>
        </div>
      </div>

      <h3 className="font-orbitron font-semibold text-lg mb-2">
        {product.name}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {product.description}
      </p>

      {/* Features preview */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.features.slice(0, 3).map((feature, index) => (
          <span
            key={index}
            className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground"
          >
            {feature}
          </span>
        ))}
        {product.features.length > 3 && (
          <span className="text-xs bg-secondary px-2 py-1 rounded text-primary">
            +{product.features.length - 3} more
          </span>
        )}
      </div>

      {/* Price and Action */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <span className="font-orbitron text-xl text-accent font-bold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground text-sm line-through ml-2">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <Link to="/contact">
          <Button size="sm" className="btn-primary-glow" disabled={!product.inStock}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Order
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Products;
