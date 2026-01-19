import { Link } from "react-router-dom";
import { Package, Printer, Building2, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Package,
    title: "Bulk Supply",
    description: "Large-scale supply of biodegradable products for businesses, restaurants, and event organizers.",
    features: [
      "Minimum order from 1000 units",
      "Volume-based discounts",
      "Flexible delivery schedules",
      "Dedicated account manager",
      "Priority customer support",
    ],
    cta: "Request Bulk Quote",
  },
  {
    icon: Printer,
    title: "Custom Printing",
    description: "Add your brand identity to our eco-friendly products with premium custom printing services.",
    features: [
      "Full-color logo printing",
      "Custom designs & patterns",
      "Multiple print positions",
      "Food-safe inks only",
      "Design assistance available",
    ],
    cta: "Get Branding Quote",
  },
  {
    icon: Building2,
    title: "B2B Wholesale",
    description: "Partnership programs for distributors, retailers, and corporate clients with special pricing.",
    features: [
      "Wholesale pricing tiers",
      "Exclusive partner discounts",
      "White-label options",
      "Credit facilities available",
      "Marketing support",
    ],
    cta: "Become a Partner",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted py-16 md:py-24">
          <div className="eco-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eco-badge mb-4">Our Services</span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Business Solutions for{" "}
                <span className="text-primary">Sustainable Packaging</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From bulk supply to custom branding, we offer comprehensive services 
                to help your business go green without compromising on quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="eco-section">
          <div className="eco-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="eco-card flex flex-col h-full group hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="eco-container">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make the Switch?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join hundreds of businesses that have already partnered with EcoTote 
                for their sustainable packaging needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero-outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">Get a Custom Quote</Link>
                </Button>
                <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/shop">
                    Browse Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
