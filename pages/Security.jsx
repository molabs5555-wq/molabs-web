import { ShieldCheck, Lock, Server, FileCheck } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag } from "@/components/motion";

const PILLARS = [
  {
    index: "01",
    icon: ShieldCheck,
    title: "Zero Data Retention API Models",
    text: "Every AI model in our pipeline runs under zero-retention agreements. Your audio, text, and records are processed in memory and never stored, logged, or reused by the model provider. Inputs vanish the moment the structured output returns.",
    meta: "retention_ms: 0 // training_on_customer_data: false",
  },
  {
    index: "02",
    icon: Lock,
    title: "Encryption in Transit & at Rest",
    text: "All traffic is encrypted with TLS 1.3. Data at rest is encrypted with AES-256. Keys are managed with hardware-backed KMS, rotated automatically, and never touch application code.",
    meta: "transit: TLS_1.3 // at_rest: AES_256 // kms: hardware_backed",
  },
  {
    index: "03",
    icon: Server,
    title: "AWS / GCP Hosting Regions",
    text: "Infrastructure runs on AWS and GCP in SOC-audited regions. EU customers are pinned to EU regions; US customers to US regions. Region selection is contractual, not best-effort.",
    meta: "providers: [aws, gcp] // region_pinning: enforced",
  },
];

export default function Security() {
  return (
    <main data-testid="page-security">
      <Seo
        title="Trust & Security - Enterprise-Grade Security & Zero Data Retention | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="Zero data retention AI models, TLS 1.3 in transit, AES-256 at rest, AWS and GCP region-pinned hosting."
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="security-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="security-eyebrow">{"// TRUST & SECURITY"}</p>
          <KineticLines
            className="mx-auto mt-6 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["Enterprise-Grade Security &", <span key="b" className="text-emerald-400 text-glow">Zero Data Retention.</span>]}
          />
          <Reveal delay={0.65}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
              We handle operational data for companies that can't afford leaks. So we built the security posture first and the product second.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-testid="security-badges">
              {["SOC 2 ALIGNED", "GDPR READY", "ZERO-RETENTION AI", "TLS 1.3", "AES-256"].map((badge) => (
                <span key={badge} className="border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-emerald-400 uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="security-pillars">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-16">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]" data-testid={`security-pillar-${pillar.index}`}>
                <span className="font-display text-6xl md:text-7xl font-bold text-line select-none">{pillar.index}</span>
                <div className="max-w-3xl border-l-2 border-emerald-500/50 pl-8">
                  <pillar.icon className="h-8 w-8 text-emerald-400" strokeWidth={1.5} />
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{pillar.title}</h2>
                  <p className="mt-5 text-base text-slate-400 leading-relaxed">{pillar.text}</p>
                  <p className="mt-6 font-mono text-xs text-emerald-500/70 tracking-widest">{pillar.meta}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="security-contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Reveal>
            <FileCheck className="mx-auto h-8 w-8 text-emerald-400" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">Need our security whitepaper or DPA?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
              Both live in the Legal Hub. Procurement teams can request the full security package through any contact form on this site.
            </p>
            <a
              href="/legal"
              data-testid="security-link-legal"
              className="mt-8 inline-flex items-center gap-2 border border-emerald-500/60 bg-emerald-500/10 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-ink"
            >
              Open Legal Hub
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
