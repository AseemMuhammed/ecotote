import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Malappuram, Kerala, India",
    subtext: "Manufacturing facility & head office",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 944 688 3146",
    subtext: "Mon-Sat, 9 AM - 6 PM IST",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "ecototeproducts@gmail.com",
    subtext: "We respond within 24 hours",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ INPUT CHANGE HANDLER
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ WHATSAPP SEND HANDLER (CORRECT PLACE)
  const handleSendMessage = () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const phoneNumber = "919446883146"; // no +

    const message = `
Hello EcoTote 👋

I would like to place an enquiry.

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📦 Requirement: ${formData.requirement || "Not specified"}
📝 Message: ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to send.",
    });

    setTimeout(() => {
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Contact Section */}
        <section className="eco-section">
          <div className="eco-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* FORM */}
              <div className="eco-card p-8">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>

                <div className="space-y-5">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border"
                  />

                  <input
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border"
                  />

                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border"
                  >
                    <option value="">Select a product</option>
                    <option value="Paper Plates">Paper Plates</option>
                    <option value="Paper Bags">Paper Bags</option>
                    <option value="Cake Boxes">Cake Boxes</option>
                    <option value="Custom Printing">Custom Printing</option>
                    <option value="Bulk Order">Bulk Order</option>
                  </select>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border"
                  />

                  {/* ✅ BUTTON */}
                  <Button
                    type="button"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    onClick={handleSendMessage}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* CONTACT INFO */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="eco-card flex gap-4">
                    <info.icon className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p>{info.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
