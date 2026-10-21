import Seo from "@/components/Seo";
import { KineticLines, Reveal } from "@/components/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Section = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="font-display text-lg font-semibold text-emerald-400">{title}</h3>
    <div className="mt-3 space-y-3 text-sm text-slate-400 leading-relaxed">{children}</div>
  </div>
);

export default function Legal() {
  return (
    <main data-testid="page-legal">
      <Seo
        title="Legal Hub - Privacy, Terms & DPA | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="M.O. LABS privacy policy, terms of service, and data processing agreement. No model training on user data. No selling data. GDPR & SOC 2 aligned."
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="legal-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20 md:pt-44 md:pb-24">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="legal-eyebrow">{"// LEGAL HUB"}</p>
          <KineticLines
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["Readable legal.", <span key="b" className="text-emerald-400 text-glow">Radical, we know.</span>]}
          />
          <Reveal delay={0.65}>
            <p className="mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
              Three documents, written to be read. The short version: we never train models on your data, we never sell your data, and we delete what we don't need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="legal-docs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Reveal>
            <Tabs defaultValue="privacy" data-testid="legal-tabs">
              <TabsList className="grid w-full grid-cols-3 bg-panel border border-line">
                <TabsTrigger value="privacy" data-testid="legal-tab-privacy" className="font-mono text-xs uppercase tracking-widest data-[state=active]:bg-emerald-500 data-[state=active]:text-ink">Privacy</TabsTrigger>
                <TabsTrigger value="terms" data-testid="legal-tab-terms" className="font-mono text-xs uppercase tracking-widest data-[state=active]:bg-emerald-500 data-[state=active]:text-ink">Terms</TabsTrigger>
                <TabsTrigger value="dpa" data-testid="legal-tab-dpa" className="font-mono text-xs uppercase tracking-widest data-[state=active]:bg-emerald-500 data-[state=active]:text-ink">DPA</TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" className="mt-10" data-testid="legal-privacy">
                <h2 className="font-display text-2xl font-bold text-white">Privacy Policy</h2>
                <p className="mt-2 font-mono text-xs text-slate-600 tracking-widest uppercase">last_updated: 2026-07-01</p>
                <Section title="1. No model training on your data">
                  <p>Data you send through M.O. LABS products - voice notes, text, catalogue content, inventory records - is never used to train, fine-tune, or improve any AI model. All AI processing runs under zero-retention agreements with our model providers.</p>
                </Section>
                <Section title="2. We never sell your data">
                  <p>We do not sell, rent, broker, or share personal data with third parties for their marketing. Data is shared only with the subprocessors required to operate the service (cloud hosting, AI processing under zero-retention), each bound by contract.</p>
                </Section>
                <Section title="3. What we collect">
                  <p>Contact form submissions (name, email, company, message), product usage telemetry required to operate the service, and billing details where applicable. Nothing else. No advertising trackers.</p>
                </Section>
                <Section title="4. Your rights">
                  <p>You may request access, correction, export, or deletion of your data at any time through any contact form on this site. Deletion requests are completed within 30 days.</p>
                </Section>
              </TabsContent>

              <TabsContent value="terms" className="mt-10" data-testid="legal-terms">
                <h2 className="font-display text-2xl font-bold text-white">Terms of Service</h2>
                <p className="mt-2 font-mono text-xs text-slate-600 tracking-widest uppercase">last_updated: 2026-07-01</p>
                <Section title="1. The service">
                  <p>M.O. LABS provides operations software - Clarity Dispatch, LinkedIn Content Engine, Product Catalogue, and Custom Inventory - on a subscription basis as described on each product page. Setup fees and monthly rates are published; there are no hidden charges.</p>
                </Section>
                <Section title="2. Acceptable use">
                  <p>You may not use the service to process data you have no right to process, to violate applicable law, or to attempt to reverse-engineer the platform. We may suspend accounts that abuse the service.</p>
                </Section>
                <Section title="3. Cancellation & data">
                  <p>Cancel anytime. On cancellation we export your data in a portable format on request and delete retained records within 90 days.</p>
                </Section>
                <Section title="4. Liability">
                  <p>The service is provided with commercially reasonable care. Our aggregate liability is capped at the fees paid in the twelve months preceding the claim.</p>
                </Section>
              </TabsContent>

              <TabsContent value="dpa" className="mt-10" data-testid="legal-dpa">
                <h2 className="font-display text-2xl font-bold text-white">Data Processing Agreement</h2>
                <p className="mt-2 font-mono text-xs text-slate-600 tracking-widest uppercase">gdpr_art_28 // soc2_aligned</p>
                <Section title="1. Roles">
                  <p>You are the data controller; M.O. LABS acts as data processor, processing personal data only on your documented instructions and for the duration of the service.</p>
                </Section>
                <Section title="2. GDPR commitments">
                  <p>Processing is governed by GDPR Article 28. EU customer data is hosted in EU regions by default. We assist with data subject requests, breach notification within 72 hours, and records of processing activities.</p>
                </Section>
                <Section title="3. SOC 2 alignment">
                  <p>Our controls are designed against the SOC 2 Trust Services Criteria: security, availability, and confidentiality. Audit summaries are available to customers under NDA.</p>
                </Section>
                <Section title="4. Subprocessors">
                  <p>Cloud hosting (AWS, GCP) and AI processing providers operating under zero-retention terms. The current subprocessor list is maintained in the Trust & Security page and updated with 30 days' notice for changes.</p>
                </Section>
              </TabsContent>
            </Tabs>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
