import { Mic, Cpu, RefreshCcw, ShieldCheck, Zap, WifiOff, Languages, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag } from "@/components/motion";
import ContactSection from "@/components/ContactSection";
import { useBetaModal } from "@/components/BetaModal";

const STEPS = [
  { index: "01", icon: Mic, title: "Input Voice", text: "Talk naturally from the car, the site, the warehouse floor. No forms. No fields. No waiting for Wi-Fi." },
  { index: "02", icon: Cpu, title: "AI Structuring", text: "Every word is parsed into clean, structured records - accounts, intents, dates, quantities - in seconds." },
  { index: "03", icon: RefreshCcw, title: "Database Sync", text: "The payload lands in your CRM automatically. Correct object, correct fields, zero keystrokes." },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Security", text: "Zero data retention on AI models. Audio processed, structured, discarded. TLS 1.3 everywhere." },
  { icon: Zap, title: "Speed", text: "From spoken word to synced CRM record in under 3 seconds. Faster than opening the CRM app itself." },
  { icon: WifiOff, title: "Offline Capabilities", text: "Capture anywhere. Recordings queue locally and sync the moment a connection returns." },
  { icon: Languages, title: "Multi-language", text: "Currently building capacity for multi-language support. English-first today - your team will soon speak its own language while the CRM gets clean, structured records." },
];

const Waveform = () => (
  <div className="flex h-24 items-center justify-center gap-1.5" data-testid="clarity-waveform" aria-hidden="true">
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        className="wave-bar w-1 rounded-full bg-emerald-500/70"
        style={{ height: `${18 + Math.abs(Math.sin(i * 0.7)) * 70}%`, animationDelay: `${i * 0.06}s` }}
      />
    ))}
  </div>
);

export default function ClarityDispatch() {
  const { open } = useBetaModal();
  return (
    <main data-testid="page-clarity-dispatch">
      <Seo
        title="Voice-to-Workspace Sync - Speak your operations. We'll update the CRM. | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="Voice-to-CRM for field operators. Speak, AI structures, your database syncs. Zero keystrokes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Voice-to-Workspace Sync",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Voice-to-CRM: speak your operations, AI structures every word, your database syncs automatically. Secure, fast, offline-capable.",
        }}
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="clarity-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="clarity-eyebrow">{"// PRODUCT_01 - VOICE-TO-CRM"}</p>
          <KineticLines
            className="mx-auto mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["Voice-to-Workspace Sync"]}
          />
          <Reveal delay={0.55}>
            <Waveform />
          </Reveal>
          <Reveal delay={0.65}>
            <p className="mx-auto max-w-2xl text-base text-slate-400 leading-relaxed">
              Voice-to-Workspace Sync turns field voice notes into structured CRM records - automatically. Your reps sell. The software does the clerical work.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <button
              data-testid="clarity-cta-test"
              onClick={open}
              className="group mt-10 inline-flex items-center gap-2 bg-emerald-500 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
            >
              Test Voice-to-Workspace Sync
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="clarity-pipeline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// HOW IT WORKS"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Voice in. Database updated. Nothing typed.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.12}>
                <div className="relative h-full border border-line bg-panel/50 p-8" data-testid={`clarity-step-${i + 1}`}>
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

      <section className="border-t border-line bg-panel/30" data-testid="clarity-features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// CAPABILITIES"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Engineered for the field, not the desk.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full border border-line bg-ink/60 p-6 transition-colors hover:border-emerald-500/40" data-testid={`clarity-feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <f.icon className="h-7 w-7 text-emerald-400" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line" data-testid="clarity-usecase">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionTag>{"// USE CASE - FIELD SALES"}</SectionTag>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Logged from the car, before the engine cools.
              </h2>
              <p className="mt-5 text-base text-slate-400 leading-relaxed">
                Field sales reps lose their sharpest notes in the gap between the meeting and the laptop. Voice-to-Workspace Sync closes that gap: rep speaks for 30 seconds in the parking lot, and the account record - next steps, blockers, close date - is already updated before they hit the highway.
              </p>
              <p className="mt-6 font-mono text-xs text-slate-600 tracking-widest uppercase">avg_note_capture: 34s // crm_compliance: +91%</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative border border-line p-2" data-testid="clarity-usecase-frame">
                <div className="absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-emerald-500" aria-hidden="true" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-emerald-500" aria-hidden="true" />
                <img
                  src="https://images.pexels.com/photos/19747906/pexels-photo-19747906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Field operator reviewing notes between site visits"
                  className="h-72 w-full object-cover lg:h-96"
                  data-testid="clarity-usecase-image"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactSection idPrefix="clarity" />
    </main>
  );
}
