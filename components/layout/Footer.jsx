import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { NAV } from "@/lib/site";

const scrollTop = () => {
  if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => (
  <footer
    className="border-t border-line bg-ink"
    data-testid="global-footer"
    onClick={(e) => {
      if (e.target.closest("a")) scrollTop();
    }}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-black" />
            <span className="leading-none">
              <span className="block font-mono text-[9px] font-medium tracking-[0.35em] text-slate-500">MODUS OPERANDI</span>
              <span className="block font-display text-lg font-bold tracking-[0.15em] text-black">M.O. LABS</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-500 leading-relaxed">
            Building operating systems for the modern world.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">Products</p>
          <ul className="mt-4 space-y-3">
            {NAV.products.map((p) => (
              <li key={p.path}>
                <Link to={p.path} data-testid={`footer-link${p.path.replace(/\//g, "-")}`} className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">Company</p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/company" data-testid="footer-link-company" className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                Manifesto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-600">Resources</p>
          <ul className="mt-4 space-y-3">
            {NAV.resources.map((r) => (
              <li key={r.path}>
                <Link to={r.path} data-testid={`footer-link${r.path.replace(/\//g, "-")}`} className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-slate-600 tracking-widest">© 2026 M.O. LABS // ALL SYSTEMS OPERATIONAL</p>
        <p className="font-mono text-xs text-slate-600 tracking-widest">RESEARCH // BUILD // OPERATE // TRANSFORM</p>
      </div>
    </div>
  </footer>
);

export default Footer;
