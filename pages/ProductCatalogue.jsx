import { Zap, Smartphone, Search, RefreshCcw, ArrowRight, Check } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag } from "@/components/motion";
import ContactSection from "@/components/ContactSection";
import { useBetaModal } from "@/components/BetaModal";

const FEATURES = [
  { icon: Zap, title: "Fast Loading", text: "Sub-second page loads on any connection. Your catalogue never becomes the bottleneck in a deal." },
  { icon: Smartphone, title: "Mobile Optimization", text: "Designed thumb-first. Reps present from phones; buyers browse from phones. Both get the full experience." },
  { icon: Search, title: "Instant Search", text: "Type-ahead search across every SKU, spec, and sheet. No filters labyrinth, no dead ends." },
  { icon: RefreshCcw, title: "Direct CRM Sync", text: "Views, shares, and enquiries flow straight into your CRM. Every interaction becomes a record." },
];

const PRICING = ["Full catalogue build & migration", "Custom domain + branding", "CRM integration included", "Unlimited products & updates", "Cancel anytime - keep your data"];

export default function ProductCatalogue() {
  const { open } = useBetaModal();
  return (
    <main data-testid="page-product-catalogue">
      <Seo
        title="Digital Catalog Builder - Interactive showcases, zero SaaS chaos | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="Interactive product showcases with instant search and direct CRM sync. Contact for pricing."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "M.O. Labs Digital Catalog Builder",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Interactive product showcases with fast loading, mobile optimization, instant search and direct CRM sync.",
        }}
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="catalogue-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="catalogue-eyebrow">{"// PRODUCT_03 - SHOWCASE"}</p>
          <KineticLines
            className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["Digital Catalog Builder"]}
          />
          <Reveal delay={0.65}>
            <p className="mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
              One link. Every product, spec, and price - searchable, beautiful, and synced to your CRM. No PDFs. No shared drives. No "let me send you the latest version."
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <button
              data-testid="catalogue-cta-beta"
              onClick={open}
              className="group mt-10 inline-flex items-center gap-2 bg-emerald-500 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
            >
              Request Beta Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="catalogue-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// CAPABILITIES"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">A showroom that never sleeps.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full border border-line bg-panel/50 p-6 transition-colors hover:border-emerald-500/40" data-testid={`catalogue-feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <f.icon className="h-7 w-7 text-emerald-400" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="catalogue-pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionTag>{"// TRANSPARENT PRICING"}</SectionTag>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                No tiers. No seats. No "talk to sales."
              </h2>
              <p className="mt-5 text-base text-slate-400 leading-relaxed">
                Tell us what you're selling and how your team works - we come back with a fixed, written quote. No hidden line items, no surprise invoices.
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
              <div className="relative border border-emerald-500/40 bg-ink/80 p-8 sm:p-10" data-testid="catalogue-pricing-card">
                <div className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-emerald-500" aria-hidden="true" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-emerald-500" aria-hidden="true" />
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-400">full_access.plan</p>
                <p className="mt-6 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">Contact for pricing</p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">Scoped to your catalogue size and stack. A fixed, written quote - no hidden line items, ever.</p>
                <button
                  data-testid="catalogue-pricing-cta"
                  onClick={open}
                  className="mt-8 w-full bg-emerald-500 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
                >
                  Request Pricing
                </button>
                <p className="mt-4 text-center font-mono text-[10px] tracking-widest text-slate-600 uppercase">no contracts // cancel_anytime: true</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactSection idPrefix="catalogue" />
    </main>
  );
}
