import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Menon",
    role: "Event Organizer",
    company: "Celebrations Kerala",
    content: "EcoTote's plates and containers have been a game-changer for our catering business. They're sturdy, look great, and our clients love that we're going green!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Retail Owner",
    company: "Green Mart",
    content: "We switched to EcoTote paper bags last year and haven't looked back. The quality is excellent, and our customers appreciate the eco-friendly option.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anitha Nair",
    role: "Bakery Owner",
    company: "Sweet Delights",
    content: "The cake boxes are perfect for our products. Great quality, food-safe, and the QR verification gives our customers confidence in authenticity.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mohammed Ashraf",
    role: "Restaurant Manager",
    company: "Spice Garden",
    content: "Bulk ordering with EcoTote is seamless. Great prices, timely delivery, and their customer service team is always helpful.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="eco-section bg-background">
      <div className="eco-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eco-badge mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of businesses making the switch to sustainable packaging.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="eco-card text-center py-10 px-8 md:px-12">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
