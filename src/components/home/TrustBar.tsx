import { Shield, Leaf, Ban, Recycle, MapPin } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Government Authorized" },
  { icon: Leaf, label: "Food-Grade" },
  { icon: Ban, label: "Plastic-Free" },
  { icon: Recycle, label: "Biodegradable" },
  { icon: MapPin, label: "Made in India" },
];

export function TrustBar() {
  return (
    <section className="bg-primary py-6">
      <div className="eco-container">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-primary-foreground"
            >
              <item.icon className="w-5 h-5 opacity-80" />
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
