import { Link } from "react-router-dom";
import { Leaf, Target, Heart, ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision we make is guided by our commitment to environmental responsibility.",
  },
  {
    icon: Target,
    title: "Quality Without Compromise",
    description: "Our products perform just as well as plastic alternatives, if not better.",
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "We measure our success by the success of the businesses we serve.",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Started with a vision to replace plastic in everyday use." },
  { year: "2019", title: "First Factory", description: "Established manufacturing facility in Kerala." },
  { year: "2021", title: "Pan-India Delivery", description: "Expanded logistics to deliver across all states." },
  { year: "2023", title: "QR Authentication", description: "Launched industry-first QR verification system." },
  { year: "2024", title: "500K+ Products", description: "Milestone of half a million products sold." },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted py-16 md:py-24">
          <div className="eco-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eco-badge mb-4">About EcoTote</span>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  On a Mission to{" "}
                  <span className="text-primary">Replace Plastic</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  EcoTote was born from a simple observation: single-use plastic is everywhere, 
                  and it doesn't have to be. We believe that sustainable alternatives should be 
                  accessible, affordable, and just as functional.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Based in Malappuram, Kerala, we manufacture a wide range of biodegradable 
                  paper products that serve the same purpose as their plastic counterparts – 
                  without the environmental guilt.
                </p>
                <div className="flex items-center gap-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Proudly Made in Kerala, India</span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-leaf/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Leaf className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-foreground mb-2">Carry the Change</p>
                    <p className="text-muted-foreground">Our tagline, our promise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="eco-section bg-background">
          <div className="eco-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eco-badge mb-4">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us Every Day
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="eco-section bg-muted">
          <div className="eco-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eco-badge mb-4">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Milestones Along the Way
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
                
                {/* Milestones */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="relative flex gap-6">
                      {/* Year */}
                      <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0 z-10">
                        {milestone.year}
                      </div>
                      {/* Content */}
                      <div className="eco-card flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="eco-container text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Movement
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're a business looking for sustainable packaging or an individual 
              wanting to make eco-friendly choices, we're here to help.
            </p>
            <Button variant="hero-outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
