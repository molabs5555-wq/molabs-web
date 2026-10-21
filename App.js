import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { BetaModalProvider } from "@/components/BetaModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ClarityDispatch from "@/pages/ClarityDispatch";
import LinkedInEngine from "@/pages/LinkedInEngine";
import ProductCatalogue from "@/pages/ProductCatalogue";
import CustomInventory from "@/pages/CustomInventory";
import Company from "@/pages/Company";
import Security from "@/pages/Security";
import Legal from "@/pages/Legal";
import Admin from "@/pages/Admin";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) return;
        if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.2 });
        else el.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    window.__lenis = lenis;
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App min-h-screen bg-ink text-slate-100">
      <BrowserRouter>
        <ScrollToTop />
        <BetaModalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clarity-dispatch" element={<ClarityDispatch />} />
            <Route path="/linkedin-engine" element={<LinkedInEngine />} />
            <Route path="/product-catalogue" element={<ProductCatalogue />} />
            <Route path="/custom-inventory" element={<CustomInventory />} />
            <Route path="/company" element={<Company />} />
            <Route path="/security" element={<Security />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </BetaModalProvider>
        <Toaster theme="light" position="bottom-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
