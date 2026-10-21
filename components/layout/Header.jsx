import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/lib/site";

const Dropdown = ({ label, items, testId }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        data-testid={testId}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-emerald-400"
      >
        {label}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full w-64 border border-line bg-panel/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]" data-testid={`${testId}-menu`}>
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-testid={`nav-link${item.path.replace(/\//g, "-")}`}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-line/50 px-4 py-3 text-sm text-slate-300 transition-colors last:border-0 hover:bg-emerald-500/5 hover:text-emerald-400"
            >
              {item.name}
              <span className="font-mono text-[10px] text-slate-600 group-hover:text-emerald-500">{item.index ? item.index : "->"}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const allLinks = [...NAV.products, { name: "Company", path: "/company" }, ...NAV.resources];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-xl" data-testid="global-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Logo className="h-9 w-9 text-black" />
          <span className="leading-none">
            <span className="block font-mono text-[8px] font-medium tracking-[0.35em] text-slate-500">MODUS OPERANDI</span>
            <span className="block font-display text-base font-bold tracking-[0.15em] text-black">M.O. LABS</span>
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" data-testid="nav-desktop">
          <Dropdown label="Products" items={NAV.products} testId="nav-products-dropdown" />
          <Link
            to="/company"
            data-testid="nav-link-company"
            className={`px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-emerald-400 ${location.pathname === "/company" ? "text-emerald-400" : "text-slate-300"}`}
          >
            Company
          </Link>
          <Dropdown label="Resources" items={NAV.resources} testId="nav-resources-dropdown" />
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#arsenal"
            data-testid="btn-see-our-products"
            className="hidden sm:inline-flex items-center gap-2 border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 transition-all hover:bg-emerald-500 hover:text-ink"
          >
            See Our Products
          </Link>
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center border border-line text-slate-300 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden" data-testid="mobile-menu">
          {allLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-testid={`mobile-link${item.path.replace(/\//g, "-")}`}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-line/50 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-emerald-400"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/#arsenal"
            data-testid="mobile-btn-see-our-products"
            onClick={() => setMobileOpen(false)}
            className="block w-full px-6 py-4 text-left font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400"
          >
            See Our Products
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
