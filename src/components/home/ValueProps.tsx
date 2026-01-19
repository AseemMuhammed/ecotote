import { Award, Sparkles, QrCode, Factory, Users } from "lucide-react";

const valueProps = [
  {
    icon: Award,
    title: "Certified Eco-Friendly",
    description: "All products are certified biodegradable and meet international food safety standards.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Durable and sturdy products that perform just as well as plastic alternatives.",
  },
  {
    icon: QrCode,
    title: "QR Code Authentication",
    description: "Every product comes with a unique QR code for authenticity verification.",
  },
  {
    icon: Factory,
    title: "Reliable Manufacturing",
    description: "State-of-the-art facility in Kerala ensuring consistent quality and timely delivery.",
  },
  {
    icon: Users,
    title: "Commercial & Personal",
    description: "Solutions for businesses, events, restaurants, and eco-conscious households.",
  },
];

export function ValueProps() {
  return (
    <section className="eco-section bg-muted">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eco-badge mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Businesses Trust EcoTote
          </h2>
          <p className="text-muted-foreground">
            We're committed to providing sustainable solutions without compromising on quality, 
            reliability, or convenience.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="eco-card group hover:bg-card/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <prop.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
