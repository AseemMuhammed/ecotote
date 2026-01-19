import { Link } from "react-router-dom";
import { ArrowRight, QrCode, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import productSquarePlates from "@/assets/product-square-plates.jpg";
import productKraftBag from "@/assets/product-kraft-bag.jpg";
import productRectPlates from "@/assets/product-rect-plates.jpg";

const products = [
  {
    id: 1,
    name: "Organic Disposable Plates",
    description: "Biodegradable plates available in 6\", 8\", and 10\" sizes. Perfect for events and daily use.",
    image: productSquarePlates,
    sizes: ["6 inch", "8 inch", "10 inch"],
    price: "₹149",
    unit: "pack of 50",
    category: "plates",
  },
  {
    id: 2,
    name: "Kraft Paper Shopping Bags",
    description: "Durable paper bags with twisted handles. Available in small, medium, and large sizes.",
    image: productKraftBag,
    sizes: ["Small", "Medium", "Large"],
    price: "₹199",
    unit: "pack of 25",
    category: "bags",
  },
  {
    id: 3,
    name: "Premium Food Trays",
    description: "Sturdy kraft paper food trays. Food-safe and perfect for restaurants and events.",
    image: productRectPlates,
    sizes: ["Small", "Medium", "Large"],
    price: "₹249",
    unit: "pack of 25",
    category: "boxes",
  },
];

export function FeaturedProducts() {
  return (
    <section className="eco-section bg-background">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eco-badge mb-4">Featured Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sustainable Solutions for Every Need
          </h2>
          <p className="text-muted-foreground">
            Explore our range of premium biodegradable products, designed for businesses and individuals who care about the environment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group eco-card overflow-hidden hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
                    <QrCode className="w-3 h-3" />
                    Verified
                  </span>
                  {/* <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-leaf text-foreground text-xs font-medium">
                    <Check className="w-3 h-3" />
                    In Stock
                  </span> */}
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Sizes */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground"
                  >
                    {size}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-end justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">/ {product.unit}</span>
                </div>
                <Button size="sm" variant="eco" asChild>
                  <Link to={`/shop?category=${product.category}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/shop">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
