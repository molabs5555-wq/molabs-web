import { Linkedin } from "lucide-react";
import Seo from "@/components/Seo";
import { KineticLines, Reveal, SectionTag, Marquee } from "@/components/motion";
import ContactSection from "@/components/ContactSection";

const CHAPTERS = [
  {
    index: "01",
    title: "The Zero-UI Philosophy",
    text: "Every screen you have to learn is a tax on the work you were hired to do. The best interface is the one you never notice: speak, scan, move on. We design systems where the UI dissolves and only the outcome remains - a record updated, a post published, a shelf restocked.",
  },
  {
    index: "02",
    title: "Death of the Dashboard",
    text: "Dashboards don't run operations; they narrate them, late, to whoever has time to look. We build software that acts instead of reports - pushing the right fact to the right person at the moment it matters, not charting it for a meeting next Tuesday.",
  },
];

const TEAM = [
  { initials: "SP", name: "Samvit Paliwal", role: "Co-Founder", linkedin: "https://www.linkedin.com/in/samvit-paliwal-93b28096/", photo: "/team/samvit.jpg" },
  { initials: "RS", name: "Rudra Pratap Singh", role: "Co-Founder", linkedin: "https://www.linkedin.com/in/rudra-pratap-singh-chordia-18b98a30b/", photo: "/team/rudra.jpg" },
  { initials: "DM", name: "Devendra M", role: "Head of Systems Architecture", linkedin: "https://www.linkedin.com/in/devendra-m-b26460434/", photo: "/team/devendra.jpg" },
];

export default function Company() {
  return (
    <main data-testid="page-company">
      <Seo
        title="Company - Our Manifesto: Killing Administrative Drag | M.O. LABS"
        siteName="M.O. LABS"
        image="/og-image.png"
        description="The M.O. LABS manifesto: the Zero-UI philosophy, the death of the dashboard, and the team killing administrative drag."
      />

      <section className="noise relative overflow-hidden bg-grid" data-testid="company-hero">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-28">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="company-eyebrow">{"// THE MANIFESTO"}</p>
          <KineticLines
            className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            lines={["Our Manifesto:", <span key="b" className="text-emerald-400 text-glow">Killing Administrative Drag.</span>]}
          />
          <Reveal delay={0.65}>
            <p className="mt-6 max-w-2xl text-base text-slate-400 leading-relaxed">
              Knowledge workers spend a third of their week feeding software instead of doing the work the software was bought to support. M.O. LABS exists to delete that third.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["RESEARCH", "BUILD", "OPERATE", "TRANSFORM"]} />

      <section className="border-t border-line" data-testid="company-methodology">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// THE METHODOLOGY"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Research. Build. Operate. Transform.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Research", "Understand the operation before touching the tooling."],
              ["02", "Build", "Engineer foundational infrastructure, not disposable apps."],
              ["03", "Operate", "Run what we build alongside the teams who use it."],
              ["04", "Transform", "Measure the drag deleted. Compound the gains."],
            ].map(([index, title, text], i) => (
              <Reveal key={index} delay={i * 0.08}>
                <div className="h-full border border-line bg-panel/50 p-6" data-testid={`methodology-${title.toLowerCase()}`}>
                  <span className="font-display text-4xl font-bold text-line">{index}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line" data-testid="company-chapters">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 space-y-20">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.index}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]" data-testid={`company-chapter-${ch.index}`}>
                <span className="font-display text-6xl md:text-7xl font-bold text-line select-none">{ch.index}</span>
                <div className="max-w-3xl border-l-2 border-emerald-500/50 pl-8">
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{ch.title}</h2>
                  <p className="mt-5 text-base text-slate-400 leading-relaxed">{ch.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-panel/30" data-testid="company-team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <SectionTag>{"// THE OPERATORS"}</SectionTag>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              A small team with one allergy: busywork.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.initials} delay={i * 0.1}>
                <div className="group border border-black bg-black p-8 transition-transform duration-300 hover:-translate-y-1" data-testid={`team-${member.initials.toLowerCase()}`}>
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at M.O. LABS`}
                    data-testid={`team-photo-${member.initials.toLowerCase()}`}
                    className="h-24 w-24 border border-neutral-700 object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <h3 className="mt-6 font-display text-lg font-semibold text-neutral-100">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`team-linkedin-${member.initials.toLowerCase()}`}
                    className="mt-6 inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-200 transition-colors hover:bg-neutral-100 hover:text-black"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection idPrefix="company" />
    </main>
  );
}
