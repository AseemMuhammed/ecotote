import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "Paper Plates", href: "/shop?category=plates" },
  { name: "Paper Bags", href: "/shop?category=bags" },
  { name: "Cake Boxes", href: "/shop?category=boxes" },
  { name: "Custom Printing", href: "/services" },
  { name: "Bulk Orders", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="eco-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/10">
                <Leaf className="w-5 h-5 text-leaf" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                ECO<span className="text-leaf">TOTE</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Carry the Change. Leading manufacturer of biodegradable paper products, committed to replacing plastic with sustainable alternatives.
            </p>
            {/* <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-leaf/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-leaf text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-leaf text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-leaf shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Adivaram, Kerala estate post,
                  Kalikavu, Malappuram district,
                  Kerala,
                  676525
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-leaf shrink-0" />
                <a
                  href="tel:+91944 688 3146"
                  className="text-primary-foreground/70 hover:text-leaf text-sm transition-colors"
                >
                  +91 944 688 3146
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-leaf shrink-0" />
                <a
                  href="mailto:ecototeproducts@gmail.com"
                  className="text-primary-foreground/70 hover:text-leaf text-sm transition-colors"
                >
                  ecototeproducts@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="eco-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 EcoTote. All rights reserved. Made with 🌱 in India.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/50 hover:text-leaf text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/50 hover:text-leaf text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
