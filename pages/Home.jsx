import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, PenLine, LayoutGrid, Boxes, ArrowRight, ArrowUpRight, ArrowDown, MessageCircle, Mail, Database, Sheet, Play } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag, Marquee } from "@/components/motion";
import ContactSection from "@/components/ContactSection";
import { useBetaModal } from "@/components/BetaModal";
import { PRODUCTS } from "@/lib/site";

const ICONS = [Mic, PenLine, LayoutGrid, Boxes];

// Demo video source: set to an mp4 link or a YouTube/Vimeo URL
const VIDEO_URL = "";

const toEmbedUrl = (url) => {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return null;
};

const INPUTS = [
  { name: "Chat", icon: MessageCircle },
  { name: "Email", icon: Mail },
];

const OUTPUTS = [
  { name: "Your database", icon: Database },
  { name: "Your sheets", icon: Sheet },
];

const FlowVisual = () => (
  <div className="flex flex-col items-center" data-testid="hero-flow-visual">
    <div className="w-full max-w-sm border border-line bg-ink p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-neutral-100">
          <Mic className="h-5 w-5" />
        </span>
        <div className="flex h-9 flex-1 items-center gap-1" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="wave-bar w-1 rounded-full bg-black/60"
              style={{ height: `${20 + Math.abs(Math.sin(i * 0.8)) * 80}%`, animationDelay: `${i * 0.07}s` }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-slate-500">0:34</span>
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Voice note · WhatsApp</p>
    </div>
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <span className="h-8 w-px bg-slate-400" />
      <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
        <ArrowDown className="h-5 w-5 text-slate-500" />
      </motion.span>
    </div>
    <div className="w-full max-w-sm border border-line bg-ink p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Notion · Auto-logged</p>
      <div className="mt-3 divide-y divide-line border border-line">
        {[["Client", "Acme Corp"], ["Order", "200 units"], ["Follow up", "Friday"]].map(([key, value]) => (
          <div key={key} className="flex items-center justify-between px-4 py-2.5 text-sm">
            <span className="text-slate-500">{key}</span>
            <span className="font-medium text-slate-100">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  const { open } = useBetaModal();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yDrift = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main data-testid="page-home">
      <Seo
        title="M.O. LABS - Building Operating Systems for the Modern World"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="M.O. Labs engineers foundational infrastructure: AI & advanced technologies, product engineering, systems thinking, scalable impact."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "M.O. LABS",
            description: "Building operating systems for the modern world - zero-UI infrastructure that eliminates manual data entry.",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does M.O. Labs build?",
                acceptedAnswer: { "@type": "Answer", text: "Zero-UI operating systems for B2B teams: voice-to-CRM with Clarity Dispatch, a LinkedIn Content Engine, interactive Product Catalogues and Custom Inventory tracking." },
              },
              {
                "@type": "Question",
                name: "How do I get access to M.O. Labs products?",
                acceptedAnswer: { "@type": "Answer", text: "Request beta access through any contact form on the site. A small number of operators are onboarded each week." },
              },
              {
                "@type": "Question",
                name: "Does M.O. Labs train AI models on customer data?",
                acceptedAnswer: { "@type": "Answer", text: "No. All AI processing runs under zero data retention agreements and customer data is never used for model training." },
              },
            ],
          },
        ]}
      />

      <section ref={heroRef} className="noise relative overflow-hidden bg-grid" data-testid="home-hero">
        <div className="hero-glow absolute inset-0" />
        <motion.div style={{ y: yDrift, opacity: fade }} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400"
                data-testid="hero-eyebrow"
              >
                {"// PRACTICAL AUTOMATIONS FOR DAILY OPERATIONS"}
              </motion.p>
              <KineticLines
                className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
                lines={[
                  "Deleting your",
                  <span key="fix" className="text-emerald-400 text-glow">busywork.</span>,
                ]}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-6 max-w-xl text-base text-slate-400 leading-relaxed"
              >
                From updating your workspace with a voice note to custom inventory management, get practical systems that handle your daily operational tasks automatically.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.8 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <button
                  data-testid="hero-cta-contact"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.2 });
                    else el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 bg-emerald-500 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-emerald-400"
                >
                  Delete Your Busywork
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#arsenal"
                  data-testid="hero-cta-arsenal"
                  className="inline-flex items-center gap-2 border border-black px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-ink"
                >
                  See Our Products
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <FlowVisual />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Marquee items={["RESEARCH", "BUILD", "OPERATE", "TRANSFORM"]} />

      <section id="arsenal" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28" data-testid="arsenal-section">
        <Reveal>
          <SectionTag>{"// 01 - PRODUCTS"}</SectionTag>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Four ways we automate your business.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PRODUCTS.map((product, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={product.path} delay={i * 0.08}>
                <Link
                  to={product.path}
                  data-testid={`arsenal-card-${product.path.slice(1)}`}
                  className="group relative block h-full border border-line bg-panel/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-slate-600">{product.index}</span>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-emerald-500/80 border border-emerald-500/30 px-2 py-1">{product.tag}</span>
                  </div>
                  <Icon className="mt-8 h-8 w-8 text-emerald-400" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{product.name}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{product.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-emerald-400">
                    Deploy <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="video-section">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// 02 - DEMO"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              See how it works.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 aspect-video w-full border border-line bg-ink" data-testid="video-player">
              {VIDEO_URL ? (
                toEmbedUrl(VIDEO_URL) ? (
                  <iframe
                    src={toEmbedUrl(VIDEO_URL)}
                    title="M.O. Labs product demo"
                    className="h-full w-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid="video-iframe"
                  />
                ) : (
                  <video src={VIDEO_URL} controls className="h-full w-full" data-testid="video-element" />
                )
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4" data-testid="video-placeholder">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line text-slate-400">
                    <Play className="h-6 w-6" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Demo video coming soon</p>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-center text-sm text-slate-400">
              One flow across all four products: you send it, we organize it, it lands where you work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line" data-testid="benefits-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// 03 - BENEFITS"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl">
              Built for your exact workflow.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { index: "01", title: "Fast Setup", text: "We don't do months-long onboarding. Our automations plug directly into the tools you already use, like Notion and Slack." },
              { index: "02", title: "Custom to You", text: "Every business runs differently. We build integrated systems, like custom inventory tracking, designed for your exact daily workflow." },
              { index: "03", title: "Private & Secure", text: "Your business data is yours. We use enterprise-grade encryption to ensure your internal operations stay private." },
            ].map((benefit, i) => (
              <Reveal key={benefit.index} delay={i * 0.08}>
                <div className="h-full border border-line bg-panel/50 p-6 transition-colors hover:border-slate-300/40" data-testid={`benefit-${benefit.index}`}>
                  <span className="font-display text-4xl font-bold text-line">{benefit.index}</span>
                  <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide text-white leading-snug">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{benefit.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="integrations-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// 04 - INTEGRATIONS"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-2xl">
              Adapts instantly to the tools you already use.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8" data-testid="integrations-row">
              <div className="flex gap-4">
                {INPUTS.map((tool) => (
                  <div
                    key={tool.name}
                    data-testid={`integration-${tool.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex w-32 flex-col items-center gap-3 border border-line bg-ink/60 px-4 py-8 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/5"
                  >
                    <tool.icon className="h-7 w-7 text-slate-500 transition-colors group-hover:text-emerald-400" strokeWidth={1.5} />
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-200">{tool.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3" aria-hidden="true" data-testid="integrations-arrow">
                <span className="hidden h-px w-10 bg-slate-400 lg:block" />
                <ArrowRight className="h-5 w-5 rotate-90 text-slate-500 lg:rotate-0" />
                <span className="hidden h-px w-10 bg-slate-400 lg:block" />
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {OUTPUTS.map((tool) => (
                  <div
                    key={tool.name}
                    data-testid={`integration-${tool.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex w-32 flex-col items-center gap-3 border border-line bg-ink/60 px-4 py-8 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/5"
                  >
                    <tool.icon className="h-7 w-7 text-slate-500 transition-colors group-hover:text-emerald-400" strokeWidth={1.5} />
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-200">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line" data-testid="social-proof-section">
        <div className="hero-glow absolute inset-0 rotate-180" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <Reveal>
            <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Built for scale.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-2 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-emerald-400 text-glow">
              Designed for operators.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-lg text-base text-slate-400">
              Every M.O. Labs system is deployed against one metric: hours of manual screen-tapping and keyboard friction deleted per operator, per week.
            </p>
          </Reveal>
        </div>
      </section>

      <div id="contact">
        <ContactSection idPrefix="home" />
      </div>
    </main>
  );
}
