import { Smartphone, ScanLine, ShieldCheck } from "lucide-react";
import biodegrable_scanner from "../../assets/biodegrable scanner.jpeg";

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
              Verify Your EcoTote Products with QR Code
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Every EcoTote product comes with a unique QR code that lets you verify its
              authenticity instantly. This ensures you're getting genuine, certified
              biodegradable products every time.
            </p>

            {/* Steps */}
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
            </div>
          </div>

          {/* Visual */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-20 place-items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-primary-foreground/10 border-2 border-dashed border-primary-foreground/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary-foreground rounded-2xl flex items-center justify-center">
                  {/* <div className="w-24 h-24 bg-primary rounded-xl grid grid-cols-3 gap-1 p-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${
                          [0, 2, 6, 8].includes(i)
                            ? "bg-primary-foreground"
                            : i === 4
                            ? "bg-primary-foreground"
                            : "bg-primary-foreground/50"
                        }`}
                      />
                    ))}
                  </div> */}
                  <img
                    src={biodegrable_scanner}
                    alt="Sample QR Code"
                    className="w-32 h-32 object-contain rounded-xl"
                  />
                </div>
                <p className="text-sm font-medium">Sample QR Code</p>
                <p className="text-xs text-primary-foreground/60">Scan to verify</p>
              </div>
            </div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-primary-foreground/10 border-2 border-dashed border-primary-foreground/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary-foreground rounded-2xl flex items-center justify-center">
                  {/* <div className="w-24 h-24 bg-primary rounded-xl grid grid-cols-3 gap-1 p-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${
                          [0, 2, 6, 8].includes(i)
                            ? "bg-primary-foreground"
                            : i === 4
                            ? "bg-primary-foreground"
                            : "bg-primary-foreground/50"
                        }`}
                      />
                    ))}
                  </div> */}
                </div>
                <p className="text-sm font-medium">Sample QR Code</p>
                <p className="text-xs text-primary-foreground/60">Scan to verify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
