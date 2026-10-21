import { Reveal, SectionTag } from "@/components/motion";
import { ContactForm } from "@/components/ContactForm";

const ContactSection = ({ idPrefix, title = "Get in touch.", copy }) => (
  <section className="relative border-t border-line bg-panel/30" data-testid={`${idPrefix}-contact-section`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <SectionTag>{"// INITIATE CONTACT"}</SectionTag>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-md">
            {copy ||
              "Want to test a product, need a custom automation, or just have a general question? Drop it below. We reply to every transmission personally."}
          </p>
          <p className="mt-8 font-mono text-xs text-slate-600 tracking-widest uppercase">
            response_time &lt; 24h // human_only: true
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="border border-line bg-ink/60 p-6 sm:p-8">
            <ContactForm idPrefix={idPrefix} />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
