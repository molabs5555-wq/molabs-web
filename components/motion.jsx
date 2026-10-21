import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 36, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const KineticLines = ({ lines, className = "", as: Tag = "h1" }) => (
  <Tag className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span
          className="block will-change-transform"
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </Tag>
);

export const SectionTag = ({ children }) => (
  <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400" data-testid="section-tag">
    {children}
  </p>
);

export const Marquee = ({ items }) => (
  <div className="relative overflow-hidden border-y border-line bg-panel/40 py-5" data-testid="editorial-marquee">
    <div className="marquee-track flex w-max whitespace-nowrap">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {items.map((item, i) => (
            <span key={i} className="flex items-center font-mono text-xs tracking-[0.35em] uppercase text-slate-500">
              <span className="px-10">{item}</span>
              <span className="text-emerald-500">//</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
