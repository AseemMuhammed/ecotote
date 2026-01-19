import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, QrCode, Check, Search, ArrowUpDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";

const categories = [
  { id: "all", name: "All Products" },
  { id: "plates", name: "Paper Plates" },
  { id: "bags", name: "Paper Bags" },
  { id: "Footware", name: "FootWares" },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted py-12 md:py-16">
          <div className="eco-container">
            <div className="max-w-2xl">
              <span className="eco-badge mb-4">Shop</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Eco-Friendly Products
              </h1>
              <p className="text-muted-foreground">
                Browse our complete range of biodegradable paper products. 
                All items are QR code verified and food-safe certified.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="eco-section">
          <div className="eco-container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 shrink-0">
                <div className="sticky top-24">
                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Categories */}
                  <div className="eco-card">
                    <div className="flex items-center gap-2 mb-4">
                      <Filter className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-foreground">Categories</h3>
                    </div>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            activeCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground text-sm">
                    Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                  </p>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowUpDown className="w-4 h-4" />
                    Sort by Price
                  </button>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
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
                          {/* {product.inStock ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-leaf text-foreground text-xs font-medium">
                              <Check className="w-3 h-3" />
                              In Stock
                            </span>
                          ) : (
                            <span className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-medium">
                              Out of Stock
                            </span>
                          )} */}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <span className="px-2 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {product.sizes[0]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-lg font-bold text-primary">
                          ₹{product.price}
                        </span>
                        {/* <Button
                          size="sm"
                          variant={product.inStock ? "default" : "outline"}
                        >
                          {product.inStock ? "View Details" : "Notify Me"}
                        </Button> */}
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No products found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;