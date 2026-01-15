import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GearDecoration from "@/components/GearDecoration";
import { galleryImages, galleryCategories, type GalleryImage } from "@/data";
import { siteConfig } from "@/data";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((item) => item.category === activeCategory);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <GearDecoration position="right" className="top-0" />
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Work"
            title="Project Gallery"
            description="Explore our collection of completed projects, products, and workshop moments."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 mechanical-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="card-industrial overflow-hidden cursor-pointer group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-primary text-sm font-medium capitalize">
                      {item.category.replace("-", " ")}
                    </span>
                    <h3 className="font-orbitron text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="font-orbitron text-xl font-semibold text-foreground">
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="text-muted-foreground mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-card relative">
        <GearDecoration position="left" className="bottom-0" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, index) => (
              <div key={index}>
                <p className={`font-orbitron text-4xl md:text-5xl font-bold mb-2 ${
                  index % 2 === 0 ? "text-primary" : "text-accent"
                }`}>
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
