import { Mic, SlidersHorizontal, Send, ScanText, Ban, Smartphone, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag } from "@/components/motion";
import ContactSection from "@/components/ContactSection";
import { useBetaModal } from "@/components/BetaModal";

const STEPS = [
  { index: "01", icon: Mic, title: "Raw Input", text: "Rant into your phone. Half-formed ideas, strong opinions, messy fragments - all valid input." },
  { index: "02", icon: SlidersHorizontal, title: "Zero-Jargon Formatting", text: "The engine strips filler, kills buzzwords, and rebuilds your thought as short, scannable lines." },
  { index: "03", icon: Send, title: "Instant Publishing", text: "Review, tweak the tone slider, publish. From raw thought to live post in 120 seconds flat." },
];

const FEATURES = [
  { icon: ScanText, title: "Radical Scannability", text: "Line breaks engineered for the feed. Every post passes the 2-second skim test." },
  { icon: Ban, title: "Zero Corporate Jargon", text: "\"Synergy\", \"leverage\", \"circle back\" - auto-flagged and deleted. Your voice stays human." },
  { icon: SlidersHorizontal, title: "Tone Controls", text: "Dial from measured analyst to provocateur. The opinion stays yours; only the delivery shifts." },
  { icon: Smartphone, title: "Mobile Dispatch", text: "Built for thumbs and voice notes. Publish from the gym, the gate, the back of a cab." },
];

export default function LinkedInEngine() {
  const { open } = useBetaModal();
  return (
    <main data-testid="page-linkedin-engine">
      <Seo
        title="LinkedIn Post Generator - Raw thoughts to high-impact posts in 120 seconds | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="Turn raw voice notes into scannable, high-impact LinkedIn posts in 120 seconds. Zero corporate jargon."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "LinkedIn Post Generator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Turn raw thoughts into scannable, high-impact LinkedIn posts in 120 seconds with tone controls and zero corporate jargon.",
        }}
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="linkedin-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="linkedin-eyebrow">{"// PRODUCT_02 - THOUGHT-TO-POST"}</p>
          <KineticLines
            className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["LinkedIn Post Generator"]}
          />
          <Reveal delay={0.65}>
            <p className="mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
              Your best thinking dies in a doc you'll never finish. The LinkedIn Post Generator captures it raw, formats it ruthlessly, and ships it before the idea cools.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <button
              data-testid="linkedin-cta-beta"
              onClick={open}
              className="group mt-10 inline-flex items-center gap-2 bg-emerald-500 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
            >
              Request Beta Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="linkedin-pipeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// THE PIPELINE"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Three steps. Two minutes. Zero drafts folder.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.12}>
                <div className="relative h-full border border-line bg-panel/50 p-8" data-testid={`linkedin-step-${i + 1}`}>
                  <span className="font-display text-5xl font-bold text-line">{step.index}</span>
                  <step.icon className="mt-6 h-8 w-8 text-emerald-400" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{step.text}</p>
                  {i < 2 && <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-emerald-500/50 md:block" aria-hidden="true" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="linkedin-demo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// LIVE FORMAT - BEFORE / AFTER"}</SectionTag>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full border border-line bg-ink/60 p-8" data-testid="linkedin-demo-raw">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-500">raw_input.voice</p>
                <p className="mt-5 text-sm text-slate-400 leading-relaxed italic">
                  "so yeah basically I keep noticing that like, the reps who hate the CRM most are actually the best sellers, and it's not a discipline thing, the tooling is just built for managers not for them, anyway we shipped something about it…"
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="h-full border border-emerald-500/40 bg-emerald-500/5 p-8" data-testid="linkedin-demo-formatted">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-400">output.post - 118s</p>
                <div className="mt-5 space-y-2 text-sm text-slate-200 leading-relaxed">
                  <p className="font-semibold text-white">Your best reps hate your CRM.</p>
                  <p>That's not a discipline problem.</p>
                  <p>It's a design problem.</p>
                  <p>The tooling was built for managers.</p>
                  <p>Not for the people closing.</p>
                  <p>We fixed it. No typing required.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line" data-testid="linkedin-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// CAPABILITIES"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Built for operators with something to say.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full border border-line bg-panel/50 p-6 transition-colors hover:border-emerald-500/40" data-testid={`linkedin-feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <f.icon className="h-7 w-7 text-emerald-400" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection idPrefix="linkedin" />
    </main>
  );
}
