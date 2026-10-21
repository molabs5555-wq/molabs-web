import { Boxes, BellRing, MousePointerClick, ArrowRight, Check } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag } from "@/components/motion";
import ContactSection from "@/components/ContactSection";
import { useBetaModal } from "@/components/BetaModal";

const FEATURES = [
  { icon: Boxes, title: "Asset Tracking", text: "Every machine, tool, and pallet - located, statused, and auditable from one screen." },
  { icon: BellRing, title: "Low-Stock Alerts", text: "Thresholds you set once. Alerts that fire before the line stops, not after." },
  { icon: MousePointerClick, title: "Zero-Friction Entry", text: "Scan, speak, or tap. Updating stock takes seconds, so it actually gets done." },
];

const PRICING = ["Custom-built around your facility", "Asset & stock schema design", "Barcode / voice / manual entry", "Automated low-stock alerting", "Onboarding for your whole crew"];

export default function CustomInventory() {
  const { open } = useBetaModal();
  return (
    <main data-testid="page-custom-inventory">
      <Seo
        title="Custom Business Automations - Facility & inventory tracking for lean operators | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="Tailored facility and inventory tracking: asset tracking, automated low-stock alerts, zero-friction entry. Contact for pricing."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "M.O. Labs Custom Business Automations",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Tailored facility and inventory tracking for lean operators: asset tracking, automated low-stock alerts, zero-friction entry.",
        }}
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="inventory-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="inventory-eyebrow">{"// PRODUCT_04 - TRACKING"}</p>
          <KineticLines
            className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["Custom Business Automations"]}
          />
          <Reveal delay={0.65}>
            <p className="mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
              Off-the-shelf inventory software makes you work its way. We build the system around your floor, your SKUs, your crew - then get out of the way.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <button
              data-testid="inventory-cta-beta"
              onClick={open}
              className="group mt-10 inline-flex items-center gap-2 bg-emerald-500 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
            >
              Request Beta Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="inventory-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal delay={0.1} className="order-2 lg:order-1">
              <div className="relative border border-line p-2" data-testid="inventory-frame">
                <div className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-emerald-500" aria-hidden="true" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-emerald-500" aria-hidden="true" />
                <img
                  src="https://images.pexels.com/photos/4487365/pexels-photo-4487365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Warehouse aisle with tracked inventory"
                  className="h-72 w-full object-cover lg:h-96"
                  data-testid="inventory-image"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <SectionTag>{"// CAPABILITIES"}</SectionTag>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Know what you have. Before you run out of it.
                </h2>
              </Reveal>
              <div className="mt-10 space-y-6">
                {FEATURES.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.1}>
                    <div className="flex gap-5 border border-line bg-panel/50 p-6 transition-colors hover:border-emerald-500/40" data-testid={`inventory-feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <f.icon className="h-7 w-7 shrink-0 text-emerald-400" strokeWidth={1.5} />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{f.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="inventory-pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionTag>{"// TRANSPARENT PRICING"}</SectionTag>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Custom-built. Scoped in writing.
              </h2>
              <p className="mt-5 text-base text-slate-400 leading-relaxed">
                Bespoke systems usually hide behind "request a quote." Ours comes back fixed and in writing - scope first, number second, everything included.
              </p>
              <ul className="mt-8 space-y-3">
                {PRICING.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative border border-emerald-500/40 bg-ink/80 p-8 sm:p-10" data-testid="inventory-pricing-card">
                <div className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-emerald-500" aria-hidden="true" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-emerald-500" aria-hidden="true" />
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-400">custom_build.plan</p>
                <p className="mt-6 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">Contact for pricing</p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">Scoped to your facility, assets and crew size. A fixed, written quote - scope first, number second.</p>
                <button
                  data-testid="inventory-pricing-cta"
                  onClick={open}
                  className="mt-8 w-full bg-emerald-500 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
                >
                  Request Pricing
                </button>
                <p className="mt-4 text-center font-mono text-[10px] tracking-widest text-slate-600 uppercase">fixed_scope // no_surprise_invoices: true</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactSection idPrefix="inventory" />
    </main>
  );
}
