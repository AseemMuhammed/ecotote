// import { useState } from "react";
// import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";

// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     content: "Malappuram, Kerala, India",
//     subtext: "Manufacturing facility & head office",
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     content: "+91 944 688 3146",
//     subtext: "Mon-Sat, 9 AM - 6 PM IST",
//   },
//   {
//     icon: Mail,
//     title: "Email Us",
//     content: "ecototeproducts@gmail.com",
//     subtext: "We respond within 24 hours",
//   },
// ];

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     requirement: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message Sent Successfully!",
//         description: "Thank you for reaching out. Our team will get back to you within 24 hours.",
//       });
//       setFormData({ name: "", email: "", requirement: "", message: "" });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });




//     const handleSendMessage = () => {
//       if (isSubmitting) return;

//       setIsSubmitting(true);

//       const phoneNumber = "918113063359";

//       const message = `
//         Hello EcoTote 👋

//         I would like to place an order.

//       `;

//       const encodedMessage = encodeURIComponent(message.trim());
//       const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//       // ✅ Open WhatsApp
//       window.open(whatsappURL, "_blank");

//       // Reset loading state safely
//       setTimeout(() => {
//         setIsSubmitting(false);
//       }, 800);
//     };

//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">
//         {/* Hero */}
//         <section className="bg-muted py-12 md:py-16">
//           <div className="eco-container">
//             <div className="max-w-2xl">
//               <span className="eco-badge mb-4">Contact Us</span>
//               <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 Let's Talk Sustainable Solutions
//               </h1>
//               <p className="text-muted-foreground">
//                 Whether you need a quote for bulk orders, want to discuss custom branding,
//                 or just have questions – we're here to help.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="eco-section">
//           <div className="eco-container">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <div className="eco-card p-8">
//                 <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
//                       placeholder="john@company.com"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="requirement" className="block text-sm font-medium text-foreground mb-2">
//                       Product Requirement
//                     </label>
//                     <select
//                       id="requirement"
//                       name="requirement"
//                       value={formData.requirement}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
//                     >
//                       <option value="">Select a product category</option>
//                       <option value="plates">Paper Plates</option>
//                       <option value="bags">Paper Bags</option>
//                       <option value="boxes">Cake Boxes</option>
//                       <option value="custom">Custom Printing</option>
//                       <option value="bulk">Bulk Order</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                       Your Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
//                       placeholder="Tell us about your requirements, quantity needed, timeline, etc."
//                     />
//                   </div>
//                   <Button
//                     type="button"
//                     size="lg"
//                     className="w-full"
//                     disabled={isSubmitting}
//                     onClick={handleSendMessage}
//                     >
//                     {isSubmitting ? (
//                       <>
//                         <span className="animate-spin mr-2">⏳</span>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </div>

//               {/* Contact Info & Map */}
//               <div className="space-y-8">
//                 {/* Contact Cards */}
//                 <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
//                   {contactInfo.map((info) => (
//                     <div key={info.title} className="eco-card flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
//                         <info.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
//                         <p className="text-foreground">{info.content}</p>
//                         <p className="text-sm text-muted-foreground">{info.subtext}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Map Placeholder */}
//                 <div className="eco-card p-0 overflow-hidden">
//                   <div className="aspect-video bg-muted flex items-center justify-center">
//                     <div className="text-center p-8">
//                       <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
//                       <h4 className="font-semibold text-foreground mb-2">Our Location</h4>
//                       <p className="text-sm text-muted-foreground mb-4">
//                         Malappuram District, Kerala, India
//                       </p>
//                       <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62633.270179877756!2d76.35402621671314!3d11.14467077090153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62f35702372ef%3A0xf1295912a42a34dc!2sKt%20Store%20Adivaram!5e0!3m2!1sen!2sin!4v1767680354006!5m2!1sen!2sin"
//                         className="w-full h-full border-0"
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                         allowFullScreen
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Trust Badges */}
//                 <div className="eco-card">
//                   <h4 className="font-semibold text-foreground mb-4">Why Contact Us?</h4>
//                   <ul className="space-y-3">
//                     {[
//                       "Free quotes within 24 hours",
//                       "Custom solutions for your needs",
//                       "Dedicated account manager",
//                       "Flexible payment options",
//                     ].map((item) => (
//                       <li key={item} className="flex items-center gap-3">
//                         <CheckCircle className="w-5 h-5 text-primary shrink-0" />
//                         <span className="text-sm text-muted-foreground">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;



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

    const phoneNumber = "918113063359"; // no +

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
