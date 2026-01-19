import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are your products truly biodegradable?",
    answer: "Yes, all our products are 100% biodegradable and compostable. They break down naturally within 90-180 days under composting conditions, leaving no harmful residues behind.",
  },
  {
    question: "How do I verify the authenticity of EcoTote products?",
    answer: "Each EcoTote product comes with a unique QR code. Simply scan it with your smartphone camera, and you'll be directed to our verification page confirming the product's authenticity and manufacturing details.",
  },
  {
    question: "What is the minimum order quantity for bulk orders?",
    answer: "For wholesale and bulk orders, the minimum order quantity varies by product. Generally, it starts at 1000 units for paper plates and 500 units for bags and boxes. Contact our sales team for specific requirements.",
  },
  {
    question: "Do you offer custom printing on products?",
    answer: "Absolutely! We offer custom branding and printing services for all our products. This is perfect for restaurants, event organizers, and businesses looking to add their logo or messaging to their packaging.",
  },
  {
    question: "What are the payment terms for B2B orders?",
    answer: "We offer flexible payment terms for verified business accounts, including net 30 and net 60 options. For first-time orders, we typically require 50% advance payment. Contact our B2B team for more details.",
  },
  {
    question: "Do you deliver outside Kerala?",
    answer: "Yes, we deliver pan-India! We have logistics partners across the country to ensure timely delivery. Shipping costs and delivery times vary based on location and order size.",
  },
];

export function FAQ() {
  return (
    <section className="eco-section bg-background">
      <div className="eco-container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="eco-badge mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers. Can't find what you're looking for? Contact us!
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="eco-card border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
