import { Smartphone, ScanLine, ShieldCheck } from "lucide-react";
import biodegrable_scanner from "../../assets/biodegrable scanner.jpeg";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Open Camera",
    description: "Use your smartphone's camera or any QR scanner app.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Scan QR Code",
    description: "Point your camera at the QR code on the product packaging.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Verify Authenticity",
    description: "View product details and verify it's a genuine EcoTote product.",
  },
];

export function QRVerification() {
  const navigate = useNavigate()
  return (
    <section className="eco-section bg-primary text-primary-foreground">
      <div className="eco-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <span className="text-sm font-medium">Product Authentication</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Verify Your EcoTote Products Instantly
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Every EcoTote product includes a unique QR code for instant authentication.
              Learn how to verify your product and ensure its originality through our
              official verification guide.
            </p>

            {/* Steps
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary-foreground/60 mb-1">
                      Step {step.step}
                    </p>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-primary-foreground/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Visual */}
          <div>
            <button className="block w-full py-10 px-12 bg-white/20 rounded-xl mb-2"
              onClick={() => navigate('/pdf/general')}
            >
             Click to Know more about General
            </button>
            <button className="block w-full py-10 px-12 bg-white/20 rounded-xl mb-2"
              onClick={() => navigate('/pdf/biodegrable')}
            >
             Click to Know more about Biodegrable
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
